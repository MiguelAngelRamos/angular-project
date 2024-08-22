import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'App de contador';
  count: number = 0;

  increment() { 
    // this.count = this.count + 1;
    this.count++;
  }

  decrement() {
    // this.count = this.count - 1;
    this.count--;
  }
}
