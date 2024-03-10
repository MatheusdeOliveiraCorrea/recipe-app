import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  @Output() recipeSelectedFromList = new EventEmitter<Recipe>();

   recipes: Recipe[] = [
    new Recipe("recipe one", "some description", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eatwell101.com%2Fwp-content%2Fuploads%2F2016%2F08%2Fhealthy-Chicken-Pasta-recipe.jpg&f=1&nofb=1&ipt=7d85a65c83bcea844a557b04d675670c84c7d0174b43f15b48f2da8edf99be72&ipo=images"),
    new Recipe("recipe two", "blablabla", "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/05/22/pamonha-r1ak8eh2lcfr.jpg")
   ];

   onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeSelectedFromList.emit(selectedRecipe);
   }
}
