import { Component } from '@angular/core';

import { Data, DeductDetail, taxes } from './salary-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  salaryDetailTemplateDisplay = false;
  data: Data = {};
  deductDetail: DeductDetail = {};

  computed() {
    this.salaryDetailTemplateDisplay = true;
    this.deductDetail.gongjijin = this.point(this.data.salary * 0.1);
    this.deductDetail.yanglao = this.point(this.data.salary * 0.08);
    this.deductDetail.yiliao = this.point(this.data.salary * 0.02);
    this.deductDetail.shiye = this.point(this.data.salary * 0.01 / 2);
    const deductFinalNum = this.deductDetail.gongjijin + this.deductDetail.yanglao + this.deductDetail.yiliao + this.deductDetail.shiye;
    let taxBefore = this.data.salary - (deductFinalNum + 5000);
    if (this.data.additional) {
      taxBefore = taxBefore - this.data.additional;
    }
    this.deductDetail.tax = this.taxFilter(taxBefore);
    this.deductDetail.all = deductFinalNum + this.deductDetail.tax;
    this.deductDetail.finalIncome =
      this.data.salary - (deductFinalNum + this.deductDetail.tax) + (this.data.allowance ? this.data.allowance : 0);
  }
  point(num: number): number {
    return parseFloat(num.toFixed(2));
  }
  taxFilter(num: number) {
    let finalTax = 0;
    if (num < 0) {
      finalTax = 0;
    } else {
      for (let i = 0; i < taxes.length; i++) {
        if (num > taxes[i].min && num <= taxes[i].max) {
          const result = Number(num * taxes[i].percent - taxes[i].num);
          finalTax = this.point(result);
        }
      }
    }

    return finalTax;
  }
}
