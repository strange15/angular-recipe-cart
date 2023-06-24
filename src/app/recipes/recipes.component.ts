import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  currentRecipeItem: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe) {
    this.currentRecipeItem = recipe;
  }

}
