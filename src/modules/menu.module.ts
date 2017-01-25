import {CommonModule} from '@angular/common';
import {MenuComponent} from '../component/menu/menu.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [MenuComponent]
})

export class MenuModule {
}
