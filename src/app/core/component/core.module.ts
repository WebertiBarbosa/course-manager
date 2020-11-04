import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.componenent';

@NgModule({
  declarations: [
    NavBarComponent
  ],

  imports: [
    RouterModule
  ],

  exports: [
    NavBarComponent
  ]
})

export class CoreModule {

}