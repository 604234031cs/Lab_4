import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Book} from './../../models/book.model';


@Injectable()
export class BookRestProvider {

  private url:string="https://comscibookshop.herokuapp.com";  

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

  getbooksList():Observable<any>{
    return this.http.get<Book>(this.url+'/books');
  }
  getbook(bookid:number):Observable<any>{
    return this.http.get<Book>(this.url);
  }

  editBook(book:Book) {
    
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/book', JSON.stringify(book),{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
