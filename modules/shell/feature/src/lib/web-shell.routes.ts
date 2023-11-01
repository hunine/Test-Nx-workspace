import { Route } from '@angular/router';
import { LayoutComponent } from '@smartfood/shell/ui/layout';

export const webShellRoutes: Route[] = [
  { path: '', component: LayoutComponent, children: [] },
];
