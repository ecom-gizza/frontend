import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Item, Dessert, Drink, Pizza, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from './model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public imgSrc = 'https://cdn.pizzahut.fr/website/var/tmp/image-thumbnails/0/1000/thumb__header_small/banner-produit--pepperoni-lovers4-.png';
  items: Item[];
  categories: Category[];

  constructor(private router: Router) { }

  ngOnInit() {
    // shopping cart position
    const shoppingCart = document.getElementById('shopping-cart');
    const shoppingCartPosition = shoppingCart.getBoundingClientRect().top;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= shoppingCartPosition) {
        shoppingCart.style.position = 'fixed';
        shoppingCart.style.top = '25px';
      } else {
        shoppingCart.style.position = 'absolute';
        shoppingCart.style.top = '';
      }
    });

    let stringRoute = this.router.url;
    let splitRoute = stringRoute.split("/");
    let routeItem = splitRoute[splitRoute.length - 1];

    if (routeItem == TypeItem.PIZZA.toString()) {
      this.items = PIZZAS;
      this.categories = PIZZACATEGORIES;
    }
    else if (routeItem == TypeItem.DESSERT.toString()) {
      this.items = DESSERTS;
      // this.categories = PIZZACATEGORIES;
    }
    else if (routeItem == TypeItem.DRINK.toString()) {
      this.items = BOISSONS;
      // this.categories = PIZZACATEGORIES;
    }
  }
  plus(item: Item) {
    if (item.quantity < 10) {
    item.quantity++;
    } else { item.quantity = 10; }
    item.sumPrice = item.quantity * item.price;
  }

  minus(item: Item) {
    if (item.quantity > 0) {
    item.quantity--;
    } else { item.quantity = 0; }
    item.sumPrice = item.quantity * item.price;
  }
  addCart(item: Item) {

  }

}
