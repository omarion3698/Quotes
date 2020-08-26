import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quotes.likes+=1;
  }
  downvote(){
    this.quotes.dislikes+=1;
  }
  constructor() { }

  ngOnInit() {
  }
}