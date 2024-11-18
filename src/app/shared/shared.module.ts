import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { SidebarComponent } from '../../../../gifs-app/src/app/shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SharedSidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SharedSidebarComponent
  ]
})
export class SharedModule { }
