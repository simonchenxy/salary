webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #salaryForm=\"ngForm\" class=\"form-group\">\n    <div class=\"input-group\">\n      <span>总工资</span>\n      <input #salaryInput=\"ngModel\" [(ngModel)]=\"data.salary\" type=\"number\" class=\"form-control\" placeholder=\"请输入工资金额\"\n        name=\"salary\" required>\n      <div [hidden]=\"salaryInput.valid||salaryInput.pristine\" class=\"error-message\">请输入工资金额</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>个税附加扣除</span>\n      <input [(ngModel)]=\"data.additional\" type=\"number\" class=\"form-control\" placeholder=\"个税附加扣除总金额\" name=\"additional\">\n    </div>\n    <div class=\"input-group\">\n      <span>补助</span>\n      <input [(ngModel)]=\"data.allowance\" type=\"number\" class=\"form-control\" placeholder=\"如果有补助请输入金额\" name=\"allowance\">\n    </div>\n\n  </form>\n  <div>\n    <button class=\"btn\" type=\"button\" (click)=\"salaryForm.reset()\">重置</button>\n    <button class=\"btn\" type=\"button\" (click)=\"computed()\" [disabled]=\"salaryInput.invalid\">开始计算</button>\n  </div>\n  <ng-container *ngIf=\"salaryDetailTemplateDisplay\">\n    <ng-container *ngTemplateOutlet=\"salaryDetailTemplate; context: {$implicit: deductDetail}\"></ng-container>\n  </ng-container>\n\n</div>\n\n<ng-template #salaryDetailTemplate let-detail>\n  <div class=\"show-item\">\n    <div class=\"input-group\">\n      <span>公积金</span>\n      <div class=\"form-control\">{{detail.gongjijin}} x 2 = {{detail.gongjijin * 2}}</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>养老保险</span>\n      <div class=\"form-control\">{{detail.yanglao}}</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>医疗保险</span>\n      <div class=\"form-control\">{{detail.yiliao}}</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>失业险</span>\n      <div class=\"form-control\">{{detail.shiye}}</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>个人所得税</span>\n      <div class=\"form-control\">{{detail.tax}}</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>合计共扣除</span>\n      <div class=\"form-control\">{{detail.all}}</div>\n    </div>\n\n    <div class=\"input-group\">\n      <span>实际到手金额</span>\n      <div class=\"form-control\">{{detail.finalIncome}}</div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0.2rem auto;\n  padding: 0.2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .container .input-group {\n    font-size: 0.14rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: relative; }\n    .container .input-group span {\n      width: 0.9rem;\n      text-align: right; }\n    .container .input-group .form-control {\n      width: 2.5rem;\n      height: 0.3rem;\n      border: 1px solid #acacac;\n      padding-left: 10px;\n      font-size: 0.14rem;\n      margin-left: 5px;\n      line-height: 0.3rem; }\n    .container .input-group + .input-group {\n      margin-top: 0.2rem; }\n    .container .input-group .error-message {\n      position: absolute;\n      bottom: -0.2rem;\n      color: red;\n      padding-left: 100px; }\n  .container .btn {\n    width: 1rem;\n    height: 0.3rem;\n    background: #3faebd;\n    border: 0;\n    color: white;\n    margin-top: 0.2rem; }\n  .container .show-item {\n    margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__salary_data__ = __webpack_require__("../../../../../src/app/salary-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.salaryDetailTemplateDisplay = false;
        this.data = {};
        this.deductDetail = {};
    }
    AppComponent.prototype.computed = function () {
        this.salaryDetailTemplateDisplay = true;
        this.deductDetail.gongjijin = this.point(this.data.salary * 0.1);
        this.deductDetail.yanglao = this.point(this.data.salary * 0.08);
        this.deductDetail.yiliao = this.point(this.data.salary * 0.02);
        this.deductDetail.shiye = this.point(this.data.salary * 0.01 / 2);
        var deductFinalNum = this.deductDetail.gongjijin + this.deductDetail.yanglao + this.deductDetail.yiliao + this.deductDetail.shiye;
        var taxBefore = this.data.salary - (deductFinalNum + 5000);
        if (this.data.additional) {
            taxBefore = taxBefore - this.data.additional;
        }
        this.deductDetail.tax = this.taxFilter(taxBefore);
        this.deductDetail.all = deductFinalNum + this.deductDetail.tax;
        this.deductDetail.finalIncome =
            this.data.salary - (deductFinalNum + this.deductDetail.tax) + (this.data.allowance ? this.data.allowance : 0);
    };
    AppComponent.prototype.point = function (num) {
        return parseFloat(num.toFixed(2));
    };
    AppComponent.prototype.taxFilter = function (num) {
        var finalTax = 0;
        if (num < 0) {
            finalTax = 0;
        }
        else {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__salary_data__["a" /* taxes */].length; i++) {
                if (num > __WEBPACK_IMPORTED_MODULE_1__salary_data__["a" /* taxes */][i].min && num <= __WEBPACK_IMPORTED_MODULE_1__salary_data__["a" /* taxes */][i].max) {
                    var result = Number(num * __WEBPACK_IMPORTED_MODULE_1__salary_data__["a" /* taxes */][i].percent - __WEBPACK_IMPORTED_MODULE_1__salary_data__["a" /* taxes */][i].num);
                    finalTax = this.point(result);
                }
            }
        }
        return finalTax;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/salary-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return taxes; });
var taxes = [
    { min: -1, max: 3000, percent: 0.03, num: 0 },
    { min: 3000, max: 12000, percent: 0.1, num: 105 },
    { min: 12000, max: 25000, percent: 0.2, num: 555 },
    { min: 25000, max: 35000, percent: 0.25, num: 1005 },
    { min: 35000, max: 55000, percent: 0.3, num: 2755 },
    { min: 55000, max: 80000, percent: 0.35, num: 5505 },
    { min: 80000, max: 10000000000, percent: 0.45, num: 13505 }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map