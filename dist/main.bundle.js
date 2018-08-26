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

/***/ "../../../../../src/app/app-routing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingComponent = (function () {
    function AppRoutingComponent() {
    }
    AppRoutingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingComponent);
    return AppRoutingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #salaryForm=\"ngForm\" class=\"form-group\">\n    <div class=\"input-group\">\n      <span>总工资</span>\n      <input #salaryInput=\"ngModel\" [(ngModel)]=\"data.salary\" type=\"number\" class=\"form-control\" placeholder=\"请输入工资金额\" name=\"salary\" required>\n      <div [hidden]=\"salaryInput.valid||salaryInput.pristine\" class=\"danger\">请输入工资金额</div>\n    </div>\n    \n    <div class=\"input-group\">\n      <span>补助</span>\n      <input [(ngModel)]=\"data.more\" type=\"number\" class=\"form-control\" placeholder=\"如果有补助请输入金额\" name=\"more\">\n    </div>\n  </form>\n  <div>\n    <button class=\"btn\" type=\"button\" (click)=\"salaryForm.reset()\">重置</button>\n    <button class=\"btn\" type=\"button\" (click)=\"computed()\" [disabled]=\"salaryInput.invalid\">开始计算</button>\n  </div>\n\n  <app-view-detail *ngIf=\"show\" [dataDetail]=\"dataDetail\"></app-view-detail>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__salary_data__ = __webpack_require__("../../../../../src/app/salary-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tax__ = __webpack_require__("../../../../../src/app/tax.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.show = false;
        this.data = new __WEBPACK_IMPORTED_MODULE_1__salary_data__["a" /* Data */]();
        this.dataDetail = new __WEBPACK_IMPORTED_MODULE_1__salary_data__["b" /* DataDetail */]();
    }
    AppComponent.prototype.computed = function () {
        this.show = true;
        this.dataDetail.gongjijin = this.point(this.data.salary * 0.1);
        this.dataDetail.yanglao = this.point(this.data.salary * 0.08);
        this.dataDetail.yiliao = this.point(this.data.salary * 0.02);
        this.dataDetail.shiye = this.point(this.data.salary * 0.01 / 2);
        var num = this.dataDetail.gongjijin + this.dataDetail.yanglao + this.dataDetail.yiliao + this.dataDetail.shiye;
        var taxBefore = this.data.salary - (num + 3500);
        this.taxFilter(taxBefore);
        this.dataDetail.all = num + this.dataDetail.tax;
        this.dataDetail.money = this.data.salary - (num + this.dataDetail.tax) + Number(this.data.more ? this.data.more : 0);
    };
    AppComponent.prototype.point = function (num) {
        return parseFloat(num.toFixed(2));
    };
    AppComponent.prototype.taxFilter = function (num) {
        if (num < 0) {
            this.dataDetail.tax = 0;
        }
        else {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__tax__["a" /* taxes */].length; i++) {
                if (num > __WEBPACK_IMPORTED_MODULE_2__tax__["a" /* taxes */][i].min && num <= __WEBPACK_IMPORTED_MODULE_2__tax__["a" /* taxes */][i].max) {
                    var result = Number(num * __WEBPACK_IMPORTED_MODULE_2__tax__["a" /* taxes */][i].percent - __WEBPACK_IMPORTED_MODULE_2__tax__["a" /* taxes */][i].num);
                    this.dataDetail.tax = this.point(result);
                }
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_component__ = __webpack_require__("../../../../../src/app/app-routing.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__view_detail_component__["a" /* ViewDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_component__["a" /* AppRoutingComponent */]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataDetail; });
var Data = (function () {
    function Data() {
    }
    return Data;
}());

var DataDetail = (function () {
    function DataDetail() {
    }
    return DataDetail;
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

module.exports = "<div class=\"show-item\">\n  <div class=\"input-group\">\n    <span>公积金</span>\n    <div class=\"form-control\">{{dataDetail.gongjijin}} x 2 = {{dataDetail.gongjijin * 2}}</div>\n  </div>\n  \n  <div class=\"input-group\">\n    <span>养老保险</span>\n    <div class=\"form-control\">{{dataDetail.yanglao}}</div>\n  </div>\n  \n  <div class=\"input-group\">\n    <span>医疗保险</span>\n    <div class=\"form-control\">{{dataDetail.yiliao}}</div>\n  </div>\n\n  <div class=\"input-group\">\n    <span>失业险</span>\n    <div class=\"form-control\">{{dataDetail.shiye}}</div>\n  </div>\n\n  <div class=\"input-group\">\n    <span>个人所得税</span>\n    <div class=\"form-control\">{{dataDetail.tax}}</div>\n  </div>\n\n  <div class=\"input-group\">\n      <span>合计共扣除</span>\n      <div class=\"form-control\">{{dataDetail.all}}</div>\n    </div>\n\n  <div class=\"input-group\">\n    <span>实际到手金额</span>\n    <div class=\"form-control\">{{dataDetail.money}}</div>\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/view-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ViewDetailComponent.prototype, "dataDetail", void 0);
    ViewDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-detail',
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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