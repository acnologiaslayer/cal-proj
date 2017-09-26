import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view:string = 'month';
  events:any[] = [];
  viewDate:Date = new Date();
  addModal = () => {
    console.log("ass");
  }
}
