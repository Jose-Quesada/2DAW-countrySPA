import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  @Input()
  public placeholder:string = '';

  @Output()
  public onValue: EventEmitter<string>  = new EventEmitter<string>();

  @Output()
  public onDebouncer: EventEmitter<string> = new EventEmitter<string>();

  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(2000)
      )
      .subscribe(
        value => this.onDebouncer.emit(value)
      )
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();

  }

  emitValue (term: string):void{
    this.onValue.emit(term);
  }

  onKeyPress ( searchTerm: string){
    this.debouncer.next (searchTerm)
  }
}
