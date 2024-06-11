import type { IProduct } from "../types/IProduct";

export class Product {
  public ProductList: IProduct[] = [];


}



  // public addMovie(movie: IProduct) {
  //   this.list.push(movie);
  //   //this.saveToFile();
  // }

  // public updateMovie(movie: IProduct) {
  //   const index = this.list.findIndex((m) => m.id === movie.id);
  //   if (index !== -1) {
  //     this.list[index] = movie;
  //     // this.saveToFile();
  //   } else {
  //     console.error(`Movie with ID ${movie.id} not found.`);
  //   }
  // }