import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proudct-list',
  templateUrl: './proudct-list.component.html',
  styleUrls: ['./proudct-list.component.css']
})
export class ProudctListComponent implements OnInit {

  products: Product[] = [];
  filterdProducts: Product[] = [];
  sortOrder : string = '';

  constructor(private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.filterdProducts = res;
    });
  }

  addToCart(product: Product): void {

    this.cartService.addToCart(product).subscribe(
      {
        next: () => {
          this.snackbar.open("product added to cart!", "", {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          })

        }
      }
    );

  }

  applyFiliter(event: Event) :void{
    let serarchTerm = (event.target as HTMLInputElement).value;
    serarchTerm = serarchTerm.toLowerCase();
    this.filterdProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(serarchTerm)
    )
    this.sortProducts(this.sortOrder)
  }

  sortProducts(sortValue : string){
    this.sortOrder = sortValue;
    if(this.sortOrder === "priceLowHigh"){
      this.filterdProducts.sort((a,b)=> a.price - b.price)
      
    } else if (this.sortOrder === "priceHighLow")
       this.filterdProducts.sort((a,b)=> b.price - a.price)

  }

}
