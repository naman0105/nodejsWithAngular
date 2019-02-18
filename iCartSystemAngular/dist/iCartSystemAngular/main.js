(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n    <div class=\"row first\">\n      <div class=\"col-sm\">\n        <app-chatbot></app-chatbot>\n      </div>\n      <div class=\"col-sm\">\n        <app-map></app-map>        \n      </div>\n    </div>\n    <div class=\"row second\">\n        <app-recommendation-bar></app-recommendation-bar>\n    </div>\n</div>\n<router-outlet></router-outlet> -->\n\n<table>\n  <tr class=\"firstRow\">\n    <td width=\"50\"><app-chatbot></app-chatbot></td>\n    <td><app-map></app-map></td>\n  </tr>\n  <tr class=\"secondRow\">\n    \n      <app-recommendation-bar></app-recommendation-bar>\n    \n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  min-width: 100vw;\n  min-height: 100vh; }\n\ntd {\n  margin: 0;\n  padding: 0; }\n\n.firstRow {\n  height: 50%; }\n\n.secondRow {\n  height: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZTpcXG5vZGVqc1dpdGhBbmd1bGFyXFxpQ2FydFN5c3RlbUFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAuZmlyc3QgeyBcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDcwJXZoO1xyXG4vLyAgICAgaGVpZ2h0OiA3MHZoO1xyXG4vLyB9XHJcblxyXG4vLyAuc2Vjb25kIHsgXHJcbi8vICAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4vLyAgICAgaGVpZ2h0OiAzMHZoO1xyXG4vLyB9XHJcblxyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vIC5yb3cge1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLy8gLmNvbC1zbXtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5qdW1ib3Ryb257XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyB9XHJcblxyXG5cclxudGFibGUge1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZmlyc3RSb3cge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5zZWNvbmRSb3cge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(productservice) {
        this.productservice = productservice;
        this.title = 'iCartSystemAngular';
        this.repdata = { some: "data" };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (data) { return _this.repdata = data; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
/* harmony import */ var _recommendation_bar_recommendation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recommendation-bar/recommendation-bar.component */ "./src/app/recommendation-bar/recommendation-bar.component.ts");
/* harmony import */ var _recommendation_bar_recommendation_item_recommendation_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recommendation-bar/recommendation-item/recommendation-item.component */ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _recommendation_bar_recommendation_bar_component__WEBPACK_IMPORTED_MODULE_7__["RecommendationBarComponent"],
                _recommendation_bar_recommendation_item_recommendation_item_component__WEBPACK_IMPORTED_MODULE_8__["RecommendationItemComponent"],
                _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_9__["ChatbotComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/*!************************************************!*\
  !*** ./src/app/chatbot/chatbot.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbot\">\n  <div class = \"jumbotron\">\n    <div class=\"container\">\n      <img src=\"/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\n      <p>Hello. How are you today?</p>\n      <span class=\"time-right\">11:00</span>\n    </div>\n    \n    <div class=\"container darker\">\n      <img src=\"../../assets/chatbotImages/user.png\" alt=\"Avatar\" class=\"right\" style=\"width:100%;\">\n      <p>Hey! I'm fine. Thanks for asking!</p>\n      <span class=\"time-left\">11:01</span>\n    </div>\n    \n    <div class=\"container\">\n      <img src=\"../../assets/chatbotImages/bot.png\" alt=\"Avatar\" style=\"width:100%;\">\n      <p>Sweet! So, what do you wanna do today?</p>\n      <span class=\"time-right\">11:02</span>\n    </div>\n    \n    <div class=\"container darker\">\n      <img src=\"/w3images/avatar_g2.jpg\" alt=\"Avatar\" style=\"width:100%;\">\n      <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\n      <span class=\"time-left\">11:05</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.scss":
/*!************************************************!*\
  !*** ./src/app/chatbot/chatbot.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatbot {\n  margin: 0;\n  padding: 0; }\n\n.container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0; }\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd; }\n\n.container::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.container img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%; }\n\n.container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0; }\n\n.time-right {\n  float: right;\n  color: #aaa; }\n\n.time-left {\n  float: left;\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9lOlxcbm9kZWpzV2l0aEFuZ3VsYXJcXGlDYXJ0U3lzdGVtQW5ndWxhci9zcmNcXGFwcFxcY2hhdGJvdFxcY2hhdGJvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NoYXRib3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jaGF0Ym90IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgaW1nLnJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gIH1cclxuICBcclxuICAudGltZS1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent() {
    }
    ChatbotComponent.prototype.ngOnInit = function () {
    };
    ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.scss */ "./src/app/chatbot/chatbot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");





var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get('http://localhost:3000/products')
            .map(function (response) { return response.json(); });
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-bar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-bar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"recomBar\">\n  <td *ngFor = \"let p of productsData\">\n      <app-recommendation-item [productData] = \"p\"></app-recommendation-item>\n  </td>\n</p>\n"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-bar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-bar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recomBar {\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kYXRpb24tYmFyL2U6XFxub2RlanNXaXRoQW5ndWxhclxcaUNhcnRTeXN0ZW1Bbmd1bGFyL3NyY1xcYXBwXFxyZWNvbW1lbmRhdGlvbi1iYXJcXHJlY29tbWVuZGF0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVU7RUFDVixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNvbW1lbmRhdGlvbi1iYXIvcmVjb21tZW5kYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY29tQmFyIHtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nIDowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: RecommendationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationBarComponent", function() { return RecommendationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");



var RecommendationBarComponent = /** @class */ (function () {
    function RecommendationBarComponent(productservice) {
        this.productservice = productservice;
        this.productsData = [
            {
                _id: 1,
                name: "pepsi",
                price: 35,
                discount: 10,
                location: {
                    2: [3, 1],
                    3: [2, 4],
                    4: [3, 5],
                    5: [4, 6],
                    6: [1, 5]
                }
            },
            {
                _id: 2,
                name: "coca cola",
                price: 35,
                discount: 8,
                location: {
                    1: [2, 6],
                    3: [2, 4],
                    4: [3, 5],
                    5: [4, 6],
                    6: [1, 5]
                }
            }
        ];
    }
    RecommendationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (data) { return _this.productsData = data; });
    };
    RecommendationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendation-bar',
            template: __webpack_require__(/*! ./recommendation-bar.component.html */ "./src/app/recommendation-bar/recommendation-bar.component.html"),
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]],
            styles: [__webpack_require__(/*! ./recommendation-bar.component.scss */ "./src/app/recommendation-bar/recommendation-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], RecommendationBarComponent);
    return RecommendationBarComponent;
}());



/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-item/recommendation-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n  <img class=\"card-img-top\" src={{productImage}} alt=\"Card image cap\" style=\" height: 195px;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{productData.name}}</h5>\n    <h6>{{productData.price}}</h6>\n    <p class=\"card-text\">Discount of {{productData.discount}}% going on</p>\n    <a href=\"#\" class=\"btn btn-primary\">Add to the cart</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-item/recommendation-item.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVuZGF0aW9uLWJhci9yZWNvbW1lbmRhdGlvbi1pdGVtL3JlY29tbWVuZGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-item/recommendation-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecommendationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationItemComponent", function() { return RecommendationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecommendationItemComponent = /** @class */ (function () {
    function RecommendationItemComponent() {
    }
    RecommendationItemComponent.prototype.ngOnInit = function () {
        console.log(this.productData);
        this.productImage = "../../../assets/ProductsImages/" + this.productData.name + ".png";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecommendationItemComponent.prototype, "productData", void 0);
    RecommendationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendation-item',
            template: __webpack_require__(/*! ./recommendation-item.component.html */ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.html"),
            styles: [__webpack_require__(/*! ./recommendation-item.component.scss */ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecommendationItemComponent);
    return RecommendationItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\nodejsWithAngular\iCartSystemAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map