import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem() {
    this.selectRecipe.emit();
  }

}
