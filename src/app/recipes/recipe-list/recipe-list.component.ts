import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, NgFor],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505') ,
    new Recipe('A Test Recipe', 'This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505') 
  ]; 

}
