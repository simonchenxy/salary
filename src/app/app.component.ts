import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  show:boolean = false;
  salarys;
  more;

  private parentSalary;
  private parentMore;
  computed(){
    this.show = true;
    this.parentSalary = this.salarys;
    this.parentMore = this.more;
  }
}
