import { Book } from './../../models/book.model';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-bookdeteil',
  templateUrl: 'bookdeteil.html',
})
export class BookdeteilPage {
  bookid:number;
  book:Book;

  constructor(public bookrest: BookRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.bookid=this.navParams.get("bookid");
    this.bookrest.getbooksList().subscribe(data=>{
      this.book=data.filter(book => book.bookid === this.bookid)[0];
     });

  }

  ionViewDidLoad() {
    this.bookid=this.navParams.get("bookid");
    console.log(this.bookid);
  }
  gotoBack(){
    this.navCtrl.pop();
  }
}
