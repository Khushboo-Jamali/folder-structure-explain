import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : string = "Angular full course";
  courseDuration : number =22344465456;
  nameMinLenght: number = 5;
  myInputType: string= "date";
  myClass: string= "text-danger";

  showMsg(){
    alert('Hello welcome to our angular practice section')
  }
  OnCity(event:Event){
    debugger
    alert('congratulations city changed successfully')
  }
}
