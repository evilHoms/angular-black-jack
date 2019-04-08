import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackJackComponent } from './black-jack/black-jack.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [{
  path: '',
  component: WelcomeComponent,
}, {
  path: 'black-jack',
  component: BlackJackComponent,
}, {
  path: 'calculator',
  component: CalculatorComponent,
}, {
  path: 'todo',
  component: TodoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
