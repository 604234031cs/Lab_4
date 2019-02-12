import { BookEditPage } from './../book-edit/book-edit';
import { BookdeteilPage } from './../bookdeteil/bookdeteil';

import { Book } from './../../models/book.model';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  books:Book
  category:String;

  constructor(private bookrest:BookRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
   this.bookrest.getbooksList().subscribe(data=>{
    this.books=data.filter (book => book.category === this.category);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }
  gotoBack(){
    this.navCtrl.pop();
  }
  ShowDetail(bookid:number){
    this.navCtrl.push(BookdeteilPage,
      {bookid:bookid}
    );
  }
  BookEdit(bookId:number) {
    this.navCtrl.push(BookEditPage,
      {bookid:bookId}
      );
  }

}