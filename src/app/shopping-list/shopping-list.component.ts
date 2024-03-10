import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Corn', 5)
  , new Ingredient('Sugar', 100)
  ]

  onIngredientAdded(ingredientToBeAdded: Ingredient) {
    this.ingredients.push(ingredientToBeAdded);
  }
}
