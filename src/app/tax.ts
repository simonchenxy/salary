export class Taxes{
  min:number;
  max:number;
  percent:number;
  num:number;
}

export const taxes:Taxes[] = [
  {min:-1,max:1500,percent:0.03,num:0},
  {min:1500,max:4500,percent:0.1,num:105},
  {min:4500,max:9000,percent:0.2,num:555},
  {min:9000,max:35000,percent:0.25,num:1005},
  {min:35000,max:55000,percent:0.3,num:2755},
  {min:55000,max:80000,percent:0.35,num:5505},
  {min:80000,max:10000000000,percent:0.45,num:13505}
]