import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  courseName: string = 'Angular full course';
  courseDuration: number = 22344465456;
  nameMinLenght: number = 5;
  myInputType: string = 'date';
  myClass: string = 'text-danger';

  showMsg() {
    alert('Hello welcome to our angular practice section');
  }
  OnCity(event: any) {
    debugger;
    const name = event.target?.value;
    alert('congratulations city changed successfully city name is > ' + name);
  }
  OnMouseEnter() {
    console.log('Mouse entered ');
  }
  OnMouseLeft() {
    console.log('Mouse Left div ');
  }
  showLanguageName(name: string) {
    alert(name);
  }
}
