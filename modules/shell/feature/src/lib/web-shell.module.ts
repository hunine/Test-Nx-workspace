import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { LayoutModule } from '@smartfood/shell/ui/layout';

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule.forRoot(webShellRoutes)],
  exports: [RouterModule],
})
export class WebShellModule {}
