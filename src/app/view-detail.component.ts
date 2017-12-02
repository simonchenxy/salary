import { Component, Input,OnInit,OnChanges } from '@angular/core';

import { taxes } from './tax';
import { DataDetail } from './salary-data';




@Component({
  selector: 'view-detail',
  templateUrl:'./view-detail.component.html',
  styles:[`
  .show-item{
    margin-top: 0.2rem;
  }
  `]

})
export class ViewDetailComponent {
  @Input() salary:number;
  @Input() more:number;
  dataDetail = new DataDetail();

  ngOnChanges(){
    this.computed();
  }

  computed(){
    this.dataDetail.gongjijin=this.point(this.salary * 0.1)
    this.dataDetail.yanglao=this.point(this.salary * 0.08);
    this.dataDetail.yiliao=this.point(this.salary * 0.02);
    this.dataDetail.shiye=this.point(this.salary * 0.01 / 2);
    let num = this.dataDetail.gongjijin+this.dataDetail.yanglao+this.dataDetail.yiliao+this.dataDetail.shiye;
    let taxBefore = this.salary-(num+3500);
    this.taxFilter(taxBefore);
    this.more = this.more?this.more:0;
    this.dataDetail.all = num+this.dataDetail.tax;
    this.dataDetail.money = this.salary-(num+this.dataDetail.tax)+Number(this.more);
  }

  point(num:number):number{
    return parseFloat(num.toFixed(2))
  }
  taxFilter(num:number){
    if(num<0){
      this.dataDetail.tax = 0;
    }else{
      for(let i=0;i<taxes.length;i++){
        if(num>taxes[i].min && num<= taxes[i].max){
          let result = Number(num*taxes[i].percent - taxes[i].num)
          this.dataDetail.tax = this.point(result);
        }
      }
    }
  }  


}
