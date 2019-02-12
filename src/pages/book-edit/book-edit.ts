import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Book } from './../../models/book.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-book-edit',
  templateUrl: 'book-edit.html',
})
export class BookEditPage { 
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
  
  saveBook(){    
    this.bookrest.editBook(this.book).then((result) => {
      console.log(result);
    }, (err) => {      
      console.log(err);
    });

    setTimeout(() => {
      this.navCtrl.pop();
    }, 500);
    
  }
}
