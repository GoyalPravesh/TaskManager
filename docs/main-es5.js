(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{ title }}\r\n  </h1>\r\n \r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='login'>\r\n    <h2 class='log'>LOGIN</h2>\r\n    <form>\r\n    <input type=\"email\" placeholder=\"Enter Email\" required email #mail/>\r\n    <br/>\r\n    <input type=\"password\" required #pass/>\r\n    <br/>\r\n    <button mat-raised-button color=\"primary\" (click)='onLogin(mail.value, pass.value) '>Login</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/newtask/newtask.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/newtask/newtask.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add a new task</h1>\r\n<div class='new'>\r\n    <input type='text' #newToDo/>\r\n    <br/>\r\n    <button mat-raised-button color=\"primary\"  (click)=\"addToDo(newToDo.value)\">Create</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/viewtask/viewtask.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/viewtask/viewtask.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main'>\r\n<div class='todo'>\r\n<h3 class='title'>TODO</h3>\r\n<div class='dnd'\r\n       cdkDropList\r\n       #listOne=\"cdkDropList\"\r\n       [cdkDropListData]=\"todos\"\r\n       [cdkDropListConnectedTo]=\"listTwo\"\r\n       (cdkDropListDropped)=\"onDrop($event)\">\r\n<div class='task' *ngFor=\"let todo of todos, let i=index\" cdkDrag >\r\n     {{todo.label}}\r\n     <br/>\r\n     {{todo.date}}\r\n     <br/>\r\n     <mat-icon (click)='deleteTodo(i)'>delete</mat-icon>\r\n</div>\r\n</div>\r\n</div> \r\n<div class='review'> \r\n<h3 class='title'>REVIEW</h3>\r\n<div class='dnd'\r\n       cdkDropList\r\n       #listTwo=\"cdkDropList\"\r\n       [cdkDropListData]=\"review\"\r\n       [cdkDropListConnectedTo]=\"listThree\"\r\n       (cdkDropListDropped)=\"onDrop($event)\">\r\n<div class='task' *ngFor=\"let todo of review, let i=index\" cdkDrag>\r\n     {{todo.label}}\r\n     <br/>\r\n     {{todo.date}}\r\n</div>\r\n</div>\r\n</div>\r\n<div class='done'> \r\n<h4 class='title'>DONE</h4> \r\n<div class='dnd'\r\n       cdkDropList\r\n       #listThree=\"cdkDropList\"\r\n       [cdkDropListData]=\"done\"\r\n       (cdkDropListDropped)=\"onDrop($event)\">\r\n<div class=\"task\" *ngFor=\"let todo of done, let i=index\" cdkDrag>\r\n     {{todo.label}}\r\n     <br/>\r\n     {{todo.date}}\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<button mat-fab class='b1' (click)='addTask()'><mat-icon>add</mat-icon></button>\r\n<button mat-raised-button class='b2' (click)=\"logout()\">Logout </button>"

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
/* harmony import */ var _tasks_newtask_newtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/newtask/newtask.component */ "./src/app/tasks/newtask/newtask.component.ts");
/* harmony import */ var _tasks_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/viewtask/viewtask.component */ "./src/app/tasks/viewtask/viewtask.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






var routes = [
    { path: 'tasks', component: _tasks_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_4__["ViewtaskComponent"] },
    { path: 'newtask', component: _tasks_newtask_newtask_component__WEBPACK_IMPORTED_MODULE_3__["NewtaskComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Task Manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/viewtask/viewtask.component */ "./src/app/tasks/viewtask/viewtask.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _tasks_newtask_newtask_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/newtask/newtask.component */ "./src/app/tasks/newtask/newtask.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todos.service */ "./src/app/todos.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tasks_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_5__["ViewtaskComponent"],
                _tasks_newtask_newtask_component__WEBPACK_IMPORTED_MODULE_9__["NewtaskComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [_todos_service__WEBPACK_IMPORTED_MODULE_11__["TodosService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    width:300px;\r\n    height:200px;\r\n    background-color: ivory;\r\n    margin: auto;\r\n}\r\n.log{\r\n    color: blue;\r\n    padding-top: 5px;\r\n}\r\ninput{\r\n    border:none;\r\n    border-bottom: 2px solid black;\r\n    padding: 5px;\r\n}\r\nbutton{\r\n    margin-top:15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2d7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.onLogin = function (mail, pass) {
        if (mail == '')
            alert("you can't be anonymous");
        else if (pass.length <= 6)
            alert("keep a strong password");
        else if (mail && pass.length > 6)
            this.router.navigate(['/tasks']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/tasks/newtask/newtask.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tasks/newtask/newtask.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new{\r\n    width:250px;\r\n    height:100px;\r\n    background-color: whitesmoke;\r\n    margin:auto;\r\n    padding-top: 40px;\r\n}\r\ninput{\r\n    margin:10px;\r\n    border:none;\r\n    border-bottom: 2px solid black;\r\n}\r\nh1{\r\n    margin:0px;\r\n    color:teal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvbmV3dGFzay9uZXd0YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL25ld3Rhc2svbmV3dGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3tcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbmgxe1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGNvbG9yOnRlYWw7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tasks/newtask/newtask.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tasks/newtask/newtask.component.ts ***!
  \****************************************************/
/*! exports provided: NewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtaskComponent", function() { return NewtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/todos.service */ "./src/app/todos.service.ts");




var NewtaskComponent = /** @class */ (function () {
    function NewtaskComponent(router, _todosService) {
        this.router = router;
        this._todosService = _todosService;
    }
    NewtaskComponent.prototype.ngOnInit = function () {
    };
    NewtaskComponent.prototype.addToDo = function (newToDol) {
        if (newToDol == '')
            alert("Atleast create a task bro!!!");
        else {
            var newToDo = {
                label: newToDol,
                date: new Date().toLocaleDateString()
            };
            this._todosService.addTodo(newToDo);
            console.log(newToDo);
            this.router.navigate(['/tasks']);
        }
    };
    NewtaskComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"] }
    ]; };
    NewtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newtask',
            template: __webpack_require__(/*! raw-loader!./newtask.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/newtask/newtask.component.html"),
            styles: [__webpack_require__(/*! ./newtask.component.css */ "./src/app/tasks/newtask/newtask.component.css")]
        })
    ], NewtaskComponent);
    return NewtaskComponent;
}());



/***/ }),

/***/ "./src/app/tasks/viewtask/viewtask.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tasks/viewtask/viewtask.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\npadding:0px;\r\nmargin: 0px;\r\n}\r\n.main{\r\n    width: 1050px;\r\n    height: 500px;\r\n    background-color: bisque;\r\n    border: 3px solid gray;\r\n    margin: auto;\r\n    border-radius: 15px;\r\n    display:-webkit-box;\r\n    display:flex;\r\n}\r\n.todo{\r\n    width: 300px;\r\n    height: 500px;\r\n    background-color: lightcoral;\r\n    margin-right: 50px;\r\n    border: 1px solid red;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n}\r\n.review{\r\n    width: 300px;\r\n    height: 500px;\r\n    background-color: lightyellow;\r\n    margin-right: 50px;\r\n    border: 1px solid goldenrod;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n}\r\n.done{\r\n    width: 300px;\r\n    height: 500px;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n}\r\n.title{\r\n    letter-spacing: 2px;\r\n    font-weight: 500;\r\n    font-size: x-large;\r\n}\r\n.b1{\r\n    background-color: lightgreen;\r\n    position: absolute;\r\n    margin-top: 20px;\r\n    top:0px;\r\n    margin-right:90px;\r\n    right:0px;\r\n}\r\n.task{\r\n    width:250px;\r\n    height: 40px;\r\n    background-color: lightsteelblue;\r\n    margin: 20px;\r\n    padding-top:5px;\r\n    cursor: pointer;\r\n    -webkit-transition: -webkit-transform 1s;\r\n    transition: -webkit-transform 1s;\r\n    transition: transform 1s;\r\n    transition: transform 1s, -webkit-transform 1s;\r\n    border-radius: 15px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n}\r\n.task:hover{\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.task:active{\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}\r\n.b2{\r\n    background-color: lightcoral;\r\n    color: black;\r\n    font-size: larger;\r\n    font-weight: 400;\r\n    position: absolute;\r\n    margin-top: 25px;\r\n    top:0px;\r\n    margin-left:50px;\r\n    left:0px;\r\n}\r\n.dnd{\r\n    min-height:80px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n}\r\n.cdk-drag-preview {\r\n    padding-top:5px;\r\n    margin:20px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3Mvdmlld3Rhc2svdmlld3Rhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFZO0lBQVosWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLHdDQUF3QjtJQUF4QixnQ0FBd0I7SUFBeEIsd0JBQXdCO0lBQXhCLDhDQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdGFza3Mvdmlld3Rhc2svdmlld3Rhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbnBhZGRpbmc6MHB4O1xyXG5tYXJnaW46IDBweDtcclxufVxyXG4ubWFpbntcclxuICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JheTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuLnRvZG97XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJldmlld3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRvbmV7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uYjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRvcDowcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6OTBweDtcclxuICAgIHJpZ2h0OjBweDtcclxufVxyXG4udGFza3tcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhc2s6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLnRhc2s6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcbi5iMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgdG9wOjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICBsZWZ0OjBweDtcclxufVxyXG4uZG5ke1xyXG4gICAgbWluLWhlaWdodDo4MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgbWFyZ2luOjIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tasks/viewtask/viewtask.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tasks/viewtask/viewtask.component.ts ***!
  \******************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/todos.service */ "./src/app/todos.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");





var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(router, _todosService) {
        this.router = router;
        this._todosService = _todosService;
        this.todos = [];
        this.review = [];
        this.done = [];
    }
    ViewtaskComponent.prototype.ngOnInit = function () {
        this.todos = this._todosService.gettodos();
        this.review = this._todosService.getreview();
        this.done = this._todosService.getdone();
    };
    ViewtaskComponent.prototype.addTask = function () {
        this.router.navigate(['/newtask']);
    };
    ViewtaskComponent.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    ViewtaskComponent.prototype.deleteTodo = function (index) {
        this._todosService.deletetodo(index);
    };
    ViewtaskComponent.prototype.onDrop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    ViewtaskComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"] }
    ]; };
    ViewtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! raw-loader!./viewtask.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/tasks/viewtask/viewtask.component.css")]
        })
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/app/todos.service.ts":
/*!**********************************!*\
  !*** ./src/app/todos.service.ts ***!
  \**********************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodosService = /** @class */ (function () {
    function TodosService() {
        this.todosArray = [];
        this.reviewArray = [];
        this.doneArray = [];
    }
    TodosService.prototype.gettodos = function () {
        return this.todosArray;
    };
    TodosService.prototype.getreview = function () {
        return this.reviewArray;
    };
    TodosService.prototype.getdone = function () {
        return this.doneArray;
    };
    TodosService.prototype.addTodo = function (todo) {
        this.todosArray.push(todo);
    };
    TodosService.prototype.deletetodo = function (i) {
        this.todosArray.splice(i, 1);
    };
    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TodosService);
    return TodosService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\TaskManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map