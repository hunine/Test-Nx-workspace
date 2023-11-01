import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainViewComponent, MainViewComponent],
  exports: [MainViewComponent],
})
export class MainViewModule {}
