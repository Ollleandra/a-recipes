import { Component, OnInit } from '@angular/core';
import {Recipe} from '../shared/recipe';
import {recipes} from '../shared/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  recipes: Recipe[] = recipes;
  newRecipe: Recipe = new Recipe;

  add(){}

  create(){
    let recipe: Recipe = new Recipe(this.newRecipe.name,this.newRecipe.recDesc,this.newRecipe.recText);
    this.recipes.push(recipe);
    this.newRecipe=new Recipe;
  }
}
