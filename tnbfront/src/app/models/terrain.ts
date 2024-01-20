import {Category } from '../models/category';
import {Redevable } from '../models/redevable';

export class Terrain {

    id?:number;
    surface!:number;
    nom!:string;
    description!:string;
    redevable?:Redevable;
    category?:Category;


}
