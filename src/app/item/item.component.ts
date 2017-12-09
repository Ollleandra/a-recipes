import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../shared/recipe';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() recipe: Recipe;
  @Output() delete = new EventEmitter();
  toggle(){
    this.recipe.editing = !this.recipe.editing;
  }
  onDelete(){
    this.delete.emit();
  }
}
