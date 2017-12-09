import { Component, OnInit } from '@angular/core';
import {Recipe} from '../shared/recipe';
import {recipes} from '../shared/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  recipes: Recipe[] = recipes;

  toggle(recipe: Recipe){
    recipe.editing = !recipe.editing;
  }
  delete(recipe: Recipe){
    let index=this.recipes.indexOf(recipe);
    if (index> -1){
      this.recipes.splice(index,1);
    }
  }
}
