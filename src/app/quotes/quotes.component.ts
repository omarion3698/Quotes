import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'How about adding quotes?';
  quotes:Quote[] = [
    new Quote (1,'Amimo','Philosophy about Computer','First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we have realized it is a brochure.','Douglas Adam', new Date(2020,5,4),0,0),
    new Quote (2,'Derrick','Dreams','All our dreams can come true, if we have the courage to pursue them.','Walt Disney',new Date(2020,7,14),0,0),
    new Quote (3,'Nyururu','Get Started','The secret of getting ahead is getting started','Mark Twain',new Date(2020,6,3),0,0),
    new Quote (4,'Omarion','Success','I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.','Michael Jordan',new Date(2017,7,7),0,0),
    new Quote (5,'Vallary','Impossible','Impossible is just an opinion.','Paulo Coelho',new Date(2018,7,17),0,0),
    new Quote (6,'Trevor','Focus','If people are doubting how far you can go, go so far that you can’t hear them anymore.','Michele Ruiz',new Date(2009,7,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quotes){
    let arraysize = this.quotes.length;
    quotes.id = arraysize+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}