import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlackJackComponent } from './black-jack/black-jack.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { PageContentComponent } from './page-content/page-content.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoGroupComponent } from './todo/todo-group/todo-group.component';
import { CardComponent } from './black-jack/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlackJackComponent,
    WelcomeComponent,
    CalculatorComponent,
    TodoComponent,
    PageContentComponent,
    TodoItemComponent,
    TodoGroupComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
