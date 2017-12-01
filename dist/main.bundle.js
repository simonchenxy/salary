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

module.exports = "<div class=\"container\">\n  <form #salaryForm=\"ngForm\" class=\"form-group\">\n    <div class=\"input-group\">\n      <span>总工资</span>\n      <input #salary=\"ngModel\" [(ngModel)]=\"salarys\" type=\"number\" class=\"form-control\" placeholder=\"请输入工资金额\" name=\"salary\" required>\n      <div [hidden]=\"salary.valid||salary.pristine\" class=\"danger\">请输入工资金额</div>\n    </div>\n    \n    <div class=\"input-group\">\n      <span>补助</span>\n      <input [(ngModel)]=\"more\" type=\"number\" class=\"form-control\" placeholder=\"如果有补助请输入金额\" name=\"more\">\n    </div>\n  </form>\n  <button class=\"btn\" type=\"button\" (click)=\"computed()\" [disabled]=\"salary.invalid\">开始计算</button>\n\n  <view-detail *ngIf=\"show\" [salary]=\"parentSalary\" [more]=\"parentMore\"></view-detail>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.show = false;
    }
    AppComponent.prototype.computed = function () {
        this.show = true;
        this.parentSalary = this.salarys;
        this.parentMore = this.more;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_detail_component__ = __webpack_require__("../../../../../src/app/view-detail.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__view_detail_component__["a" /* ViewDetailComponent */]
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

/***/ "../../../../../src/app/tax.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Taxes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return taxes; });
var Taxes = (function () {
    function Taxes() {
    }
    return Taxes;
}());

var taxes = [
    { min: -1, max: 1500, percent: 0.03, num: 0 },
    { min: 1500, max: 4500, percent: 0.1, num: 105 },
    { min: 4500, max: 9000, percent: 0.2, num: 555 },
    { min: 9000, max: 35000, percent: 0.25, num: 1005 },
    { min: 35000, max: 55000, percent: 0.3, num: 2755 },
    { min: 55000, max: 80000, percent: 0.35, num: 5505 },
    { min: 80000, max: 10000000000, percent: 0.45, num: 13505 }
];


/***/ }),

/***/ "../../../../../src/app/view-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"show-item\">\n  <div class=\"input-group\">\n    <span>公积金</span>\n    <div class=\"form-control\">{{gongjijin * 2}}</div>\n  </div>\n  \n  <div class=\"input-group\">\n    <span>养老保险</span>\n    <div class=\"form-control\">{{yanglao}}</div>\n  </div>\n  \n  <div class=\"input-group\">\n    <span>医疗保险</span>\n    <div class=\"form-control\">{{yiliao}}</div>\n  </div>\n\n  <div class=\"input-group\">\n    <span>失业险</span>\n    <div class=\"form-control\">{{shiye}}</div>\n  </div>\n\n  <div class=\"input-group\">\n    <span>个人所得税</span>\n    <div class=\"form-control\">{{tax}}</div>\n  </div>\n\n  <div class=\"input-group\">\n      <span>合计共扣除</span>\n      <div class=\"form-control\">{{all}}</div>\n    </div>\n\n  <div class=\"input-group\">\n    <span>实际到手金额</span>\n    <div class=\"form-control\">{{money}}</div>\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/view-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tax__ = __webpack_require__("../../../../../src/app/tax.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewDetailComponent = (function () {
    function ViewDetailComponent() {
    }
    ViewDetailComponent.prototype.ngOnInit = function () {
        this.computed();
    };
    ViewDetailComponent.prototype.ngOnChanges = function () {
        this.computed();
    };
    ViewDetailComponent.prototype.computed = function () {
        this.gongjijin = this.point(this.salary * 0.1);
        this.yanglao = this.point(this.salary * 0.08);
        this.yiliao = this.point(this.salary * 0.02);
        this.shiye = this.point(this.salary * 0.01 / 2);
        var tax1 = this.salary - (this.gongjijin + this.yanglao + this.yiliao + this.shiye + 3500);
        this.taxFilter(tax1);
        this.more = this.more ? this.more : 0;
        this.all = this.gongjijin + this.yanglao + this.yiliao + this.shiye + this.tax;
        this.money = this.salary - (this.gongjijin + this.yanglao + this.yiliao + this.shiye + this.tax) + Number(this.more);
    };
    ViewDetailComponent.prototype.point = function (num) {
        return parseFloat(num.toFixed(2));
    };
    ViewDetailComponent.prototype.taxFilter = function (num) {
        if (num < 0) {
            this.tax = 0;
        }
        else {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__tax__["a" /* taxes */].length; i++) {
                if (num > __WEBPACK_IMPORTED_MODULE_1__tax__["a" /* taxes */][i].min && num <= __WEBPACK_IMPORTED_MODULE_1__tax__["a" /* taxes */][i].max) {
                    var result = Number(num * __WEBPACK_IMPORTED_MODULE_1__tax__["a" /* taxes */][i].percent - __WEBPACK_IMPORTED_MODULE_1__tax__["a" /* taxes */][i].num);
                    this.tax = this.point(result);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ViewDetailComponent.prototype, "salary", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ViewDetailComponent.prototype, "more", void 0);
    ViewDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'view-detail',
            template: __webpack_require__("../../../../../src/app/view-detail.component.html"),
            styles: ["\n  .show-item{\n    margin-top: 0.2rem;\n  }\n  "]
        })
    ], ViewDetailComponent);
    return ViewDetailComponent;
}());



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