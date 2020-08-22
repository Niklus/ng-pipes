import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name: string;
  date: string;
  amount: number;
  miles: number;

  customer = {
    gender: 'Male',
    age: 29,
    city: 'Nairobi'
  }

  onNameChange(event) {
    const value = event.target.value;
    this.name = value;
  }

  onDateChange(event) {
    const value = event.target.value;
    this.date = value;
  }

  onAmountChange(event) {
    const value = event.target.value;
    this.amount = parseFloat(value);
  }

  onMilesChange(event) {
    const value = event.target.value;
    this.miles = parseFloat(value);
  }
}
