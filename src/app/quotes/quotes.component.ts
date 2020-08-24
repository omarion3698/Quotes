import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Welcome to Motivational Quotes';
  quotes:Quote[] = [
    new Quote (1,'Amimo','Success','Success is not final, failure is not fatal: it is the courage to continue that counts.', 'Winston Churchill', new Date(2020,7,12),0,0),
    new Quote (2,'Abdul','Courage','Never bend your head. Always hold it high. Look the world straight in the eye.', 'Helen Keller', new Date(2020,7,14),0,0),
    new Quote (3,'Trevor','Believe you can do it.','Believe you can and you are halfway there.', 'Theodore Roosevelt', new Date(2020,6,3),0,0),
    new Quote (4,'Vallary','Dreams','When you have a dream, you have got to grab it and never let go.', 'Clay Shirky', new Date(2020,7,7),0,0),
    new Quote (5,'Mohamed','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.', 'Harold Abelson', new Date(2020,7,17),0,0),
    new Quote (6,'Omar','Technology and life','I can not change the direction of the wind, but I can adjust my sails to always reach my destination.', 'Jimmy Dean', new Date(2020,7,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:any){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index:any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}