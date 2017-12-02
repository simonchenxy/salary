import { Component, Input,OnInit,OnChanges } from '@angular/core';

import { taxes } from './tax'
import { ParseSourceFile } from '@angular/compiler';



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
  gongjijin:number;
  yanglao:number;
  yiliao:number;
  shiye:number;
  tax:number;
  all:number;
  money:number;

  ngOnChanges(){
    this.computed();
  }

  computed(){
    this.gongjijin=this.point(this.salary * 0.1)
    this.yanglao=this.point(this.salary * 0.08);
    this.yiliao=this.point(this.salary * 0.02);
    this.shiye=this.point(this.salary * 0.01 / 2);
    let tax1 = this.salary-(this.gongjijin+this.yanglao+this.yiliao+this.shiye+3500);
    this.taxFilter(tax1);
    this.more = this.more?this.more:0;
    this.all = this.gongjijin+this.yanglao+this.yiliao+this.shiye+this.tax;
    this.money = this.salary-(this.gongjijin+this.yanglao+this.yiliao+this.shiye+this.tax)+Number(this.more);
  }

  point(num:number):number{
    return parseFloat(num.toFixed(2))
  }
  taxFilter(num:number){
    if(num<0){
      this.tax = 0;
    }else{
      for(let i=0;i<taxes.length;i++){
        if(num>taxes[i].min && num<= taxes[i].max){
          let result = Number(num*taxes[i].percent - taxes[i].num)
          this.tax = this.point(result);
        }
      }
    }
  }  


}
