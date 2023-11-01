import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { RecipeCardModule } from '@smartfood/recipes/ui/recipe-card';

@NgModule({
  imports: [
    CommonModule,
    RecipeCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
    ]),
  ],
  declarations: [ListComponent],
})
export class ListModule {}
