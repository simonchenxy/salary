import { Component } from '@angular/core';
import { Data } from './salary-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private show:boolean = false;
  private data = new Data();
  private parent = new Data()
  computed(){
    this.show = true;
    this.parent.salary = this.data.salary;
    this.parent.more = this.data.more;
  }
}
