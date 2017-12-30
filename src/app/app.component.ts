import { Component } from '@angular/core';

import { Data,DataDetail } from './salary-data';
import { taxes } from './tax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private show:boolean = false;
  private data = new Data();
  private dataDetail = new DataDetail();

  computed(){
    this.show = true;
    this.dataDetail.gongjijin=this.point(this.data.salary * 0.1)
    this.dataDetail.yanglao=this.point(this.data.salary * 0.08);
    this.dataDetail.yiliao=this.point(this.data.salary * 0.02);
    this.dataDetail.shiye=this.point(this.data.salary * 0.01 / 2);
    let num = this.dataDetail.gongjijin+this.dataDetail.yanglao+this.dataDetail.yiliao+this.dataDetail.shiye;
    let taxBefore = this.data.salary-(num+3500);
    this.taxFilter(taxBefore);
    this.dataDetail.all = num+this.dataDetail.tax;
    this.dataDetail.money = this.data.salary-(num+this.dataDetail.tax)+Number(this.data.more?this.data.more:0);
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
