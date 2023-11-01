import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MainViewModule } from '@smartfood/shell/ui/main-view';
import { TopBarModule } from '@smartfood/shell/ui/top-bar';
import { SideBarModule } from '@smartfood/shell/ui/side-bar';

@NgModule({
  imports: [CommonModule, MainViewModule, TopBarModule, SideBarModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
