import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, productResponse, PriceList, priceResponse } from './shopping-cart/model/product';
import { Observable } from 'rxjs';
import { CartResponse, AddCartRequest, CartStatus } from './shopping-cart/model/Cart';

@Injectable()
export class ShoppingService {

  private get_products_url: string = "http://localhost:21002/product//all";
  private get_cart_url: string = "http://localhost:21002/product/list/cart/123";
  private add_cart_url: string = "http://localhost:21002/product/add/cart/123";
  private get_price_list_url: string = "http://localhost:21002/product/{pId}/prices";
  private remove_product_from_cart_url: string = "http://localhost:21002/product/{pId}/remove/123";

  // private get_products_url: string = "/assets/data/products.json";
  // private get_cart_url: string = "/assets/data/CartList.json";
  // private add_cart_url: string = "/assets/data/AddCart.json";
  // private get_price_list_url: string = "http://localhost:21002/ruleEngine/product/{pId}/prices";
  
  constructor(private http: HttpClient) { }

  getProductData(): Observable<productResponse>{
    return this.http.get<productResponse>(this.get_products_url);
  }

  getCartData(): Observable<CartResponse>{
    return this.http.get<CartResponse>(this.get_cart_url);
  }

  addCartData(request: AddCartRequest): Observable<CartStatus>{
    return this.http.post<CartStatus>(this.add_cart_url, request);
  }

  getPriceList(productId: number): Observable<priceResponse>{
    return this.http.get<priceResponse>(this.get_price_list_url.replace("{pId}",productId+""));
  }

  removeProductFromCart(productId: number): Observable<CartStatus>{
    return this.http.get<CartStatus>(this.remove_product_from_cart_url.replace("{pId}",productId+""));
  }

}
