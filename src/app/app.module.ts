import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteDetailsComponent } from './quotes-details/quotes-details.component';
import { DatePipePipe } from './date-pipe.pipe';
import { HighlightQuotesDirective } from './highlight-quotes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    QuoteDetailsComponent,
    DatePipePipe,
    HighlightQuotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
