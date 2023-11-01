import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {}
