import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styles: [`
  .show-item{
    margin-top: 0.2rem;
  }
  `]

})
export class ViewDetailComponent {
  @Input() dataDetail: number;
}
