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

/***/ "./src/app/Pipes/table-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/Pipes/table-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: TableFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterPipe", function() { return TableFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableFilterPipe {
    transform(user, search_id) {
        if (!user || !search_id) {
            return user;
        }
        return user.filter(user => user.Id.toLowerCase().indexOf(search_id.toLowerCase()) !== -1);
        // if (!user) return [];
        // if (!search_location) return user;
        // search_location = search_location.toLocaleLowerCase();
        // user = [...user.filter(user => user.Location.toLocaleLowerCase().includes(search_location))];
        // if (!search_area) return user;
        // search_area = search_area.toLocaleLowerCase();
        // user = [...user.filter(user => user.Area.toLocaleLowerCase().includes(search_area))];
        // return user;
    }
}
TableFilterPipe.ɵfac = function TableFilterPipe_Factory(t) { return new (t || TableFilterPipe)(); };
TableFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter", type: TableFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pipes/table-filter02.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipes/table-filter02.pipe.ts ***!
  \**********************************************/
/*! exports provided: TableFilter02Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter02Pipe", function() { return TableFilter02Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableFilter02Pipe {
    transform(user, search_location) {
        if (!user || !search_location) {
            return user;
        }
        return user.filter(user => user.Location.toLowerCase().indexOf(search_location.toLowerCase()) !== -1);
    }
}
TableFilter02Pipe.ɵfac = function TableFilter02Pipe_Factory(t) { return new (t || TableFilter02Pipe)(); };
TableFilter02Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter02", type: TableFilter02Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter02Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter02'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pipes/table-filter03.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipes/table-filter03.pipe.ts ***!
  \**********************************************/
/*! exports provided: TableFilter03Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter03Pipe", function() { return TableFilter03Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableFilter03Pipe {
    transform(user, search_area) {
        if (!user || !search_area) {
            return user;
        }
        return user.filter(user => user.Area.toLowerCase().indexOf(search_area.toLowerCase()) !== -1);
    }
}
TableFilter03Pipe.ɵfac = function TableFilter03Pipe_Factory(t) { return new (t || TableFilter03Pipe)(); };
TableFilter03Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter03", type: TableFilter03Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter03Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter03'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pipes/table-filter04.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipes/table-filter04.pipe.ts ***!
  \**********************************************/
/*! exports provided: TableFilter04Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter04Pipe", function() { return TableFilter04Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableFilter04Pipe {
    transform(user, search_type) {
        if (!user || !search_type) {
            return user;
        }
        return user.filter(user => user.Type.toLowerCase().indexOf(search_type.toLowerCase()) !== -1);
    }
}
TableFilter04Pipe.ɵfac = function TableFilter04Pipe_Factory(t) { return new (t || TableFilter04Pipe)(); };
TableFilter04Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter04", type: TableFilter04Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter04Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter04'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pipes/table-filter05.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipes/table-filter05.pipe.ts ***!
  \**********************************************/
/*! exports provided: TableFilter05Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter05Pipe", function() { return TableFilter05Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableFilter05Pipe {
    transform(user, search_demand) {
        if (!user || !search_demand) {
            return user;
        }
        return user.filter(user => user.Demand.toLowerCase().indexOf(search_demand.toLowerCase()) !== -1);
    }
}
TableFilter05Pipe.ɵfac = function TableFilter05Pipe_Factory(t) { return new (t || TableFilter05Pipe)(); };
TableFilter05Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter05", type: TableFilter05Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter05Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter05'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pipes/table-filter06.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipes/table-filter06.pipe.ts ***!
  \**********************************************/
/*! exports provided: TableFilter06Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter06Pipe", function() { return TableFilter06Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableFilter06Pipe {
    transform(user, search_client) {
        if (!user || !search_client) {
            return user;
        }
        return user.filter(user => user.Client.toLowerCase().indexOf(search_client.toLowerCase()) !== -1);
    }
}
TableFilter06Pipe.ɵfac = function TableFilter06Pipe_Factory(t) { return new (t || TableFilter06Pipe)(); };
TableFilter06Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter06", type: TableFilter06Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter06Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter06'
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "./src/app/forgetpass/forgetpass.component.ts");
/* harmony import */ var _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgetpassverify/forgetpassverify.component */ "./src/app/forgetpassverify/forgetpassverify.component.ts");
/* harmony import */ var _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newpass/newpass.component */ "./src/app/newpass/newpass.component.ts");
/* harmony import */ var _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signupotp/signupotp.component */ "./src/app/signupotp/signupotp.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/inventory/inventory.component */ "./src/app/dashboard/inventory/inventory.component.ts");
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/users/users.component */ "./src/app/dashboard/users/users.component.ts");
/* harmony import */ var _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/leads/leads.component */ "./src/app/dashboard/leads/leads.component.ts");
/* harmony import */ var _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/inactive/inactive.component */ "./src/app/dashboard/inactive/inactive.component.ts");

















const routes = [
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
    { path: 'login-component', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup-component', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'forgetpass-component', component: _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpassComponent"] },
    { path: 'forgetpassverify-component/:email', component: _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_6__["ForgetpassverifyComponent"] },
    { path: 'newpass-component/:email', component: _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_7__["NewpassComponent"] },
    { path: 'signupotp-component/:email', component: _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_8__["SignupotpComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'profile/:email', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'inventory', component: _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_11__["InventoryComponent"] },
    { path: 'users', component: _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"] },
    { path: 'leads', component: _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_13__["LeadsComponent"] },
    { path: 'inactive', component: _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_14__["InactiveComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
// import { MDBBootstrapModule } from 'angular-bootstrap-md';








function AppComponent_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_70_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_70_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_70_div_2_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function AppComponent_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_75_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_75_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_75_div_2_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "show": a0 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class AppComponent {
    constructor(formBuilder, // Creating an instance of Formbuilder
    authService, // Instance of Authentication services created in front end
    router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isShown = false;
        this.title = 'asasa';
        // registerForm: FormGroup;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get email() {
        return this.loginForm.get('email');
    }
    loginUser() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        // console.log('user login data: ',this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe(data => {
            console.log(data);
            const status = data.status;
            const msg = data.msg;
            console.log("Status: " + status);
            console.log("Message: " + msg);
            if (status) {
            }
            else {
                alert('Invalid email or password!');
            }
        });
    }
    // getting input labels values from user end (login.html)
    get f() { return this.loginForm.controls; }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 91, vars: 12, consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-lg"], [1, "container-fluid", "px-0"], [1, "row", "w-100"], [1, "col-5"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-nav"], [1, "nav-item"], [1, "head"], [1, "nav-item", "more-items"], ["routerLink", "/users", 1, "nav-link", 3, "click"], ["routerLink", "/leads", 1, "nav-link", 3, "click"], ["routerLink", "/inventory", 1, "nav-link", 3, "click"], ["routerLink", "/inactive", 1, "nav-link", 3, "click"], [1, "col-md-3"], [1, "col-4"], ["id", "navbarTogglerDemo03", 1, "collapse", "justify-content-end", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], ["routerLink", "/login-component", 1, "nav-link"], ["routerLink", "/map", 1, "nav-link"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/profile", 1, "dropdown-item"], ["routerLink", "", 1, "dropdown-item"], [1, "dropdown-divider"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "pull-right"], ["aria-hidden", "true"], [1, "row"], [1, "col-sm-6", "col-md-6", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-5", "col-md-5", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["id", "inputEmail", "type", "email", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], [1, "fa", "fa-lock", "icon"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], [1, "custom-control", "custom-checkbox", "mb-3"], ["id", "customCheck1", "type", "checkbox", "checked", "", 1, "custom-control-input"], ["routerLink", "forgetpass-component"], ["routerLink", "register-component"], [1, "invalid-feedback"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.isShown = !ctx.isShown; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Asasa Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_21_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inactive Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "form", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_65_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AppComponent_div_70_Template, 3, 2, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppComponent_div_75_Template, 3, 2, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Not Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".head[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 0px;\r\n  margin-top: 3px;\r\n\r\n  margin-bottom: -16px;\r\n}\r\n.more-items[_ngcontent-%COMP%]{\r\n  margin-left: 0px;\r\n}\r\n.bg-dark[_ngcontent-%COMP%] {\r\n    \r\n    \r\n  \r\n  \r\n  background-color: black!important;\r\n  \r\n  \r\n}\r\n.nav-link[_ngcontent-%COMP%]{\r\n  color:whitesmoke;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n  background-color: #38baa2;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  width: 120px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\r\n#sidebar-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n}\r\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n  padding: 0.875rem 1.25rem;\r\n  font-size: 1.2rem;\r\n}\r\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n  width: 15rem;\r\n}\r\n#page-content-wrapper[_ngcontent-%COMP%] {\r\n  min-width: 100vw;\r\n}\r\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n  #page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: -15rem;\r\n  }\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  }\r\n.button[_ngcontent-%COMP%] {\r\n  height: 5 0px;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;  }\r\nsection[_ngcontent-%COMP%] {\r\n    display: table;\r\n  }\r\n.example-label[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 8px;\r\n    min-width: 120px;\r\n  }\r\n.example-button-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 490px;\r\n  }\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin: 8px 8px 8px 0;\r\n  }\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n  }\r\n.example-button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border: 2px solid #0000001a !important;\r\n    border-radius: 50rem!important;\r\n  }\r\ni[_ngcontent-%COMP%]:before {\r\n    position: relative;\r\n    top: 30%;\r\n    font-size: 22px;\r\n    color: #38bba3;\r\n    margin-right: 1px;\r\n  }\r\n.word[_ngcontent-%COMP%] {\r\n      color: #38baa2;\r\n      letter-spacing: 1px;\r\n      padding: 20 px;\r\n      font: bold 14px arial,sans-serif;\r\n      \r\n  }\r\n.emailInput[_ngcontent-%COMP%]{\r\n  margin-left: 12px;\r\n  }\r\n.input-field[_ngcontent-%COMP%] { \r\n    width: 100%; \r\n    padding: 10px; \r\n    text-align: center; \r\n  }\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n    position: absolute; \r\n  }\r\n.input-container[_ngcontent-%COMP%] { \r\n    display: flex;\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    }\r\n.a[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n  }\r\n.vl[_ngcontent-%COMP%]{\r\n    border-left: 2.2px solid #38baa2;\r\n    height: 250px;\r\n    margin-left: 1px;\r\n  }\r\n.v2[_ngcontent-%COMP%]{\r\n    margin-top: 40px ;\r\n    color: #38baa2;\r\n    font-weight: bold;\r\n  }\r\n.login[_ngcontent-%COMP%]{\r\n    height:auto;\r\n    min-height: 100vh;\r\n  }\r\n\r\n\r\n\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n    width:45%;\r\n    margin-left: 80px;\r\n  }\r\n.inputs[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n  }\r\n.left[_ngcontent-%COMP%]{\r\n  margin-top: 145px ;\r\n  }\r\n.right[_ngcontent-%COMP%]{\r\n  margin-top: 160px ;\r\n  }\r\n.input-area1[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n  }\r\n.modal-content[_ngcontent-%COMP%]{\r\n  margin-left: -200px;\r\n width:880px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7SUFDSSx5Q0FBeUM7O0VBRTNDLHlDQUF5Qzs7RUFFekMsaUNBQWlDOztFQUVqQyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFJbkIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUVFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjtBQUVGO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkIsR0FBRztBQUVsQztJQUNJLGNBQWM7RUFDaEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7QUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0FBQ0E7Ozs7O0tBS0c7QUFFSDtJQUNFLHNDQUFzQztJQUN0Qyw4QkFBOEI7RUFDaEM7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFDQTtNQUNJLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsY0FBYztNQUNkLGdDQUFnQztNQUNoQyx1QkFBdUI7RUFDM0I7QUFDQTtFQUNBLGlCQUFpQjtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBLG1CQUN3QixTQUFTO0lBQy9CLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CO0FBQ0Y7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNBOzs7Ozs7OztzdVFBUW91UTtBQUNsdVEscUJBQXFCO0FBQ25CO21CQUNhO0FBQ2Y7O0tBRUM7QUFFSDtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCO0FBQ0E7RUFDQSxrQkFBa0I7RUFDbEI7QUFDQTs7SUFFRSxpQkFBaUI7RUFDbkI7QUFDRjtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAtMTZweDtcclxufVxyXG4ubW9yZS1pdGVtc3tcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYmctZGFyayB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwIWltcG9ydGFudDsgKi9cclxuICAgIFxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwZDZiOTIhaW1wb3J0YW50OyAqL1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICBcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDsgKi9cclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG4ubmF2YmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTI7XHJcbn1cclxuLmJ0bntcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuI3NpZGViYXItd3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbn1cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxufVxyXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuICAuYnRue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4uYnV0dG9uIHtcclxuICBoZWlnaHQ6IDUgMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyAgfVxyXG4gIFxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIC8qIGgye1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9ICovXHJcbiAgXHJcbiAgaW5wdXR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtIWltcG9ydGFudDtcclxuICB9XHJcbiAgaTpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzM4YmJhMztcclxuICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIH1cclxuICAud29yZCB7XHJcbiAgICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBwYWRkaW5nOiAyMCBweDtcclxuICAgICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xyXG4gIH1cclxuICAuZW1haWxJbnB1dHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcbiAgLmlucHV0LWZpZWxkIHsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfSBcclxuICAuaW5wdXQtaWNvbnMgaSB7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICB9IFxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgLmF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAudmx7XHJcbiAgICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIH1cclxuICAudjJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5sb2dpbntcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC8qIFxyXG4gIC5iZy1pbWFnZSB7ICAgIFxyXG4gICAgaGVpZ2h0OiA2NTBweDsgXHJcbiAgICB3aWR0aDogNTAwcHg7IFxyXG4gICAgbWF4LXdpZHRoOiA2NTBweDsgXHJcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2FzYXNhMDYucG5nKTtcclxuICBcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeEFRRUJVUEVCRVdFaEFRRlJZWUZSZ1ZGaFVWRlJnWUZSWVdGaGNYRmhVWUhTZ2dHQnNsR3hZVklURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHaTBsSHlVdExTMHRMUzB0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFPRUE0UU1CRVFBQ0VRRURFUUgveEFBYkFBRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUJRWUJCQWNEQXYvRUFFUVFBQUlCQWdJR0JRZ0hCd01GQVFBQUFBQUJBZ01SQkNFRkJoSXhRVkVpWVhHUnNSTXlORk55Z1pMUkZCVVdNNkhCOENOU1luT0NzdUVIb3NJMVFrT2o4U1QveEFBYkFRRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUFRTUNCQVVHQi8vRUFESVJBUUFDQVFNREFRWUZBd1VCQUFBQUFBQUJBZ01FRVJJRklURkJGQlV5TTFHQkV5SmhjYkZDVXBFak5LSFI4RVAvMmdBTUF3RUFBaEVERVFBL0FPNGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdHd01LVjl3UkU3K0gwRWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSHpPU1NiYnNsbTI5eUNKbUlqdW9tc3VzanJYbzBXMVNXVW54bjhvK0piV3JnNjNYYzU0VThOUFFPbjU0WjdMdk9pOThlSzY0L0ltMWQxT2sxbHNNN1duZUhRY0hpNFZZS3BUa3BSZjZzK1RLdHRub2NlU3VTT1ZYdWlGaklBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJCYTNZeXBSdysxVGxzeWM0cTYzMnpmNUdWWWhwYTdKZkhpM3JLbWZYK0w5ZlA4UGtXOEljVDIzUDhBM1NzMnFHbEtsU0ZXVmVwZFFzN3lzckt6dm43aXUwT3BvTlJlMWJUa253aHRaTllYaUg1T25sUlh1Yyt0OGwxR1ZhN05MV2EyY3M4YStQNVFCbTVvRXBEUStscW1HbnRRZDR2em92ZEw1UHJJbU4yeHA5VmZEYmVyb21pdEowOFJEYnB2dFhHTDVQNWxNeHM5SGh6MHpWM3EzU0Y3SUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDdWE5ZWpMK1pId2taMDh1ZDFQNUtnRnJ6MzZQUlZwS0xnbTFHVFRhNE5yZGZtTm1VWHRGZU1UMmVZWUFTQUFObkFZMnBRbXFsT1ZwTHVhNU5jVVJNYnJjT1cySzNLcm9XZ3RPVThUSExvMVV1bEJ2OFZ6UlZOZG5vdE5xNjVvL1ZMbUxiQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUt4cjNXajVDTUxyYWMwMHVOa25kL2laMGN6cWQ0akZ4VVF0Y0FBQUFBQUFCNlVhMG9TVTRTY1pSM05ieU5tVkwycE84TDdxN3JISEVXcDFPalcvQ1hXdXZxSzdWMmVnMG11cmwvTGJ5c0NNSFFaQUFBQUFBQUFBQUFBQUFBQUFBQUNCMWgxaWhoK2hDMDYzTGhIcmw4ak90ZDJocTliWEYrV084cUJpY1JPckp6cVMycFMzdC9ySkZrUnM4L2t5V3ZQS3p5SllkbTVvN1JsYkVPMUtON2IzdWl1MS9rUk03THNPbXZsK0Zhc0RxWFRXZGFvNVBsSG94NzkvZ1lUZVhXeGRMckh4eWxxZXJtRWlyZVJUN2J2eE1lVXR1TkZnaitsbWVydUVlWGtZcnN1aHlsTTZMQlA5TUl6RzZtVVhuU25LRDVQcFIvSFA4U1l2TFZ5OUxwUHdUc3F1bGREVnNNLzJrZWp3a3M0djVQdE00dEV1Vm4wbVhGNWp0OVVlWk5abE8yYXlhQkV6SGRjOVhOWjlxMUhFTzBzbEdmQjlVdVQ2eXUxWGIwZXZpMzVNbmxiVXl0MW1Ra0FBQUFBQUFBQUFBQUFBQXhjQ3A2eDYwS042T0hkNVpxVTF1WFZIbStzc3JWeWRacjRyK1RIL2xTNVNiZDI3dDcyODIrMHNjT1ptWjNsZ0NhMWQwRkxFeTJwWGpSaTgzKzkvREg1bU5wMmIyajBrNXAzbnc2RmhjTkNuRlFoRlJpdHlSVEwwTk1kYVJ0V0hyY015NFFYQ1FENHEwb3lUakpLVVdyTk5YVFhKb1JMRzFZdEcwd29lcytyM2tQMnRLN290NXJlNGY0TGEyM2NIVzZMOFA4QVBYd3JwbTVvQ0ZuMWQxbWRPMUt1NzArRXVNZXA4MTRGZHF1cm85Zk5meVpQQzhRcUtTVFRUVDNOYnZjVnU1Rm9tTjRmWVNBQUFBQUFBQUFBQUFBQW9lc21zc3FqbFJvdHhwcTZrOTBwV3lhNmtXVnE0V3MxMDJuaFR0Q3NsamxBRzFvekJTcjFZMG83NVBOOGtzMis0aVoyVzRNVTVja1ZoMUhCNGFOS0VhY0ZhTVZaZk1wbVhxc2VPTWRZclY3R015eVJlTjBuczVRM1h0dFd2M0xpYUdYVzk1cmo3eTE4bWZqNFF0REdWcW1JcVVLdWNZcmFUVW5tcnBLNlZrbjJEVXphTlBYTlcwN3o1alpvWXM5NzVyWXJlbmZ0S0gxZzBuVnBUVXNIVmxLVk83cXhpM0tDVzlPU1dTNG05MHVNbDZUR283YitKYStxenpTKytHM2YxaElhcGE1Vk1RNVFyd1ZvVzZVZCtlNjhlUGF1NHYxdGNlbTR4TnZMWjBYVUxaTzE0KzY2UWxkWFR1bnVLYXpFeHZEcmJsU21wSnhrcnhhczA5elRKUk1STWJTNWpwN1JydzFaMC84QXRlY0gvQy96Vm1pK3R0M21OWGcvQnliZW5vamlXcjJBbnoyVGVyK3NNOE05aWQ1VVh2WEdQWEg1R0ZxN3QvU2EyMktlTnU4Znc2SlNxS1NVbHVrazEyTXFlaXJNV2plSDJFZ0FBQUFBQUFBQUFBQWFrOUcwRzd1bEJ0NzNzeEozbFZPREhQb3BtdStIaFRxMDFDQ2luQjMyVWx4Nml5amk5VHBXdHE3UXJabTVpNDZnNFRLcFhlKyt3dTVTZmlpdTh1ejBySDJtL3dCbHdLM1pSbWxzVGExTmNjMzJjdjF5T1gxSFVUU3NVajFVWmIvMG9lam8rUGxwVjNLVFRqczdMODFkaS9XOW1sWFZYL0JqRFdJMzM4K3JTcnA2L2lmaXpNN2JlRlgwNVdWR3Q1WEQxR3ZLSjN6NlNhc21tbm55ZVo2L3A5WnpZWXBucjQyZWUxa3hoejg4TnZLcjE1YjdjVHF6V1BFTldrK3NyRnFuQ0VsK3huc3kyV3EwWkpkSjJ2Q2NNN3F6ZnZ0d1BKOWJ2YUo0MzcvMnU1bzZ4TmQ2L2RlZEJZelpsNUdUdXBlYjJyZmJ0M25QNmRxWm1aeHo0OUhXMCtUdnhsWUVkbHVxMXIxaE5xZ3F2R2xKZDBuYnhzWjBudTVuVThlK1BuOUZETFpjQk9hbjBJenhPek9La3RpV1RTYTRjR1kyOE43cDFhMnk3VDlGNityS0hxWWZESDVGVzh1OUdESDZRMjRvaGJIWmtKQUFBQUFBQUFBQUFBQXdCUjlmL3ZhZnNQeExhT0gxWDRxcXNadVM2SnFaQzJFai9GS1Qvd0J6WGdrVTM4dlNkUGpiRENkWmkzbFAwbnBhbkNkV3JVbHN4aFUySHZlYXNsa2NUVjZYTm0xUEdzYnVYbHoxcmFac3Ftc3VzRHF5VkttMnFTU2VUODY5bXJyaGJrZC9vL1RLNGE4OGtiMi9oeDlmcTdaSjQwbnNnSjF6MERsUlNXcFdxa1RLNmxWeDFaMGZVbGczQ28zQ0ZTZTFIWnluczlGK2R3VGEzVzU4enhmV05aU3VwM3JHKzBiZm83bWx4VCtGM2JlQXBWNk5lTXBTalVwd25lRGQxVVVjbmJhNHQ3bnpOS3VwdzJ0V2E5cDNqZjZTc3BNMHZFdWtvN3J0bzNXU0NlRXJKOElOOTJhOERLdmxyYXV1K0cwT1lGN3lxZjFJOUwvb2w0eE1MK0hSNlo4NzdPaGxUMFFBQUFBQUFBQUFBQUFBQUJnQ2o2Ly9BSHRQMkg0bHRQRGg5VitLcXJHYmt1aWFsMUw0U1A4QURLU2ZmZndhS2JlWG8rbjIzd1FuV1l0LzFjajF2eGNzTGo2MFpRVlNsVWxDcHN5eXoyVTlwUHR1dmNia2FTTStPTFZuYTBkbm05Vk00ODlxejQ4dFRBYUxsaTZjblNxUWNJdlpoNVJTYzFrbmFVMHNySnJkZE0xTS9VYTZPOVl5Vm5mMVZWMDA1WW5qS0kwdG8rdGhuYXJHeWJhakpPOFpXNVA1blUwdlVNT3BqZWsvWnJYMDFzZnhJcXJWTnVmQldqcE9CMWh3MHFOTitWakY3TVk3TW1sSk5KS3pSOCsxbWcxRVpyZmxtWFhya2lhN1EzS2E4cFVoRDk2Y1ZseXVydnV1elMwc1RiUFdOdlZGUHpaSWhma2V0OE80ajlZUFJhMzh1WGdaVjhxTlQ4cTM3T1hGN3lhd2FrZWwvd0JFdkdKaGZ3NlBUUG5mWjBJcWVpQUFBQUFBQUFBQUFBQUFBTUFVZlgvNzJuN0Q4UzJuaHcrcS9GVlZqTnlWdzFCeGlYbEtEZS9wcnVTbDRJcnZEczlLeSthU3VKVzdDbC82azZ2UEUwVlhwUnZWbzN1bHZsRGpibTF2N3piMHViaGJqTG1kUjAwM3J6cjVqK0hQOVZOWUZobTZGWEtuS1YxTGZadXl6NnNrYW5XK20yenhHYW5tSS80YzdUNWRsM3hNNmNvTlZWRnc0N1ZtdnhQSVliNUszLzA5OTIxTjZ6SGR5VFMrSnB5clZIU2lvVTlyb3BacXl5dXUyMS9lZlJOSlc5Y05ZeVR2TFVtc2I5alFtRmxXeEVJckt6Mm0rU2puK1Z2ZVU5U3p4ZzA5cG4vMjZZMmgyN1ZUUjdsTDZUSmRGSzFQcnZ2bDJXeVhhenpQUzlOTlluSmFPOCtIUzBPR2QrZHZzdFIxM1RSK3NIb3RiK1hMd0pyNVVhbjVWdjJjdUwzbEU5cVUvd0Q5YTY0Uy9KL2tZWDhPaDB6NTMyZEVLbm9nQUFBQUFBQUFBQUFBQUFEQUZIMS8rOXArdy9FdHA0Y1BxdnhWVll6Y2xzNlB4a3FOV05XTytENzF1YTk2dVJNYnJjT1djZDR0RHFHQnhjSzFPTlNEdkdTN3VhZldVekcwdlU0c2xjbFl0RFlhSVdLUHJYL3A3U3hMZFhEdFVhanpjYmRDVDU1ZWErei9BQ2JlTFZUU05yZDRjelVkUGkwOHNmYWYrRlgxaDBGcE40ZU5CMFpTdGxOdzZlMm9wV2EyYysyNjNtaHBOSmh4YXEyV2ZFK1AwYVZzT2FuYWEvNDdxN2c5UmRJVlhaWWFjZXVhMkYvdXNkMjJveFY5V05NV2EzaXMvZnM2RnFoL3Ayc05lZUptcHVWcndpdWoyU2x2YTZsYjNuTTFWNlo1amVQRGZ3YUNZbmxrL3dBTC9HS1Nzc2tpbDBvOE1oS1AxZzlGcmZ5NWVCTmZLalUvS3Qremx4ZThvbmRTL1M0K3pMd01MK0cvMDM1MzJkRktub3dBQUFBQUFBQUFBQUFBQURBRkgxLysrcCt3L0V0cDRjUHF2eFZWWXpja0NKUzJyK201NFdmR1ZLVDZVZnpqMStKamF1N2QwbXJuRFA2T2g0UEdRclFWU25KU2kvMVo4bVZURDBXUExYSkc5R3dRc0FBQUQ0cTFWRlhrMGx6ZVFSTXhIbDlvQ1AxZzlGcmZ5NWVCTmZLblUvS3Qremx4ZThvbmRTL1M0K3pMd01MK0cvMHo1MzJkRktub3dBQUFBQUFBQUFBQUFBQURBRkcxL2Y3YW43RC9BTGkyamhkVitPcXJtYmxBQUliT0J4MVdoTGJwU2NYeDVQdFhFaVkzWFljMThVNzBsYU1EcnFyV3IwOCtjTjN3djVtRTBkWEYxV1AvQUtSL2hLMHRhc0c5OVJ4ZlhDZmlsWXg0UzI0NmhnbjFmVTlhY0d2L0FDMzdJVCtRNHlUcjhFZjFmeWpNYnJwQksxR201UG5QSmR5ek1vbzFjblZhUjJwQ3RZclMxV3ZVaktyTzhZeVRzc29yUGd1ejNtWEhidzUxdFZmSmVKdlBiZGVsck5nL1hMNFovSXI0eTdudDJDUDZ2NWFlbWRZTUxVdzlXRUtxY3BRa2t0bVdiYTYwVEZaM1ZaOVpodGptSWxRUzE1NU82bCtseDltWGdZWDhOL3BuenZzNktWUFJnQUFBQUFBQUFBQUFBQUFHQUtycmJvYXZYcVFuU2lwSlJzODByTzkrUGIrQlpXWWh5dGZwY21XMFRWQS9aZkYrclh4SXk1UTUvdS9QOUQ3TDR2MWErSkRsQjd2ei9SbjdMWXoxYStLSTV3bjNkbitoOWxzWDZ0ZkZFYzRSN3V6ZlJqN0w0djFhK0tJNXdlN3MzMForeTJMOVd2aVE1UWU3cy8wUHN2aS9WcjRrT1VIdTdQOEFSajdMNHYxYStKRG1lNzgvMForeStNOVd2aVE1UWU3cy93QkdQc3ZpL1ZyNG9qbEI3dnovQUVQc3ZpL1ZyNGtPY0h1L1A5RDdMNHYxYStKRG5DZmQrYjZKYlZqUVdJbzRoVktrVkdLakpiMDgzMkdOclEyOURwTW1MSnl0NFhNcmRsZ0RJR0FNZ0FBQUFBQStaeVNWMjdKYzl3Uk03TkJhYndyZXo1ZUYrMzh5ZU1xUGFzTXp0eWh2eGQ4eUY4VHY0YW1MMHBRcFBacVZZeGZKdk1uYVZWOCtPazdXbUhoOWY0VDE4TzhjWlllMTRQN29iZUR4dEtzbktsTlRTZG0xekkybUZ0TWxiOTZ6dXhpOUlVcVAzdFNNTDdydlB1SjJtVVh6VXA4YzdHRXg5S3Q5MVVqTzIrei9BQ0d5YVpxWCtDZDN2VXFLS2NwTktLemJlU1JIZG5hWXJHOG8vd0N2OEo2K0hlVHhscisxNFBIT0dZYWR3cmFTclFiYnNzK0xIR1V4cXNNenRGb2I4cHBLN2RrczJ5TzYvZmFOMml0TjRYYTJmTHd2Mi9tVHhsUjdWaDMyNVEzNHUrYTNFTDRuZGtKYStMeDFLa3IxSnhoZm03ZHcyVjN5MHA4VTdQbkNhUm8xdnU2a1p0Y0U4KzRuYVVVelV2OEFETGFaQzFvNGpUR0hweTJaMW9LUzNxK1pPMHFMYW5GV2RyV2h0VUs4Wngyb1NVb3ZpbmRCYlc4V2plck5hckdDY3BOUml0N2JzdThndGFLeHZMVnd1bGFGV1d6VHF4bExrbm1UTVNycHFNZDUycmJkOVl2U1ZHaTdWYWtZTjhHOCs0UkVwdm54NDUydGJaNzRiRVFxUjJvU1VvdmluY2huUzliUnZWNmhrQUFBQUNtNjAxcW1JeE1jRkIyamx0Y20ycjU4MGxtV1Y3ZDNIMXQ3Wk0wWWF0eWVwdUgyTmxTbXAyODV0Yit1TnJXSTV6dXRucG1MajIzM2ErcDJLcVFxVk1ITjM4bmZaNm5GMmFYVnVaTm9qeXIwR1M5Yld4VzlFSmhsaDNpS3YwMXlqMG51MnQ5M3YyVmZkYXhsMzI3Tk92NGM1YmZqVHNrVlMwUHU4cEwvQU55LzRtUDVteEZkRC9kL1AvU2RwMDZPRHd0U3JRemhaeldia203V1dmTGNZOTVudTNxMXBnd3phbmhBNkEwSDlNMnNUaUpTZTFKMlNkbTJzbTIrWEN5NUdVMjI3TkRTNlgyamZMazlXTk82SCtoT09Kdzhta3BXczg3TjlmRlBkWVJiZnNhblRleS82bU9XenJiaXBWY0hScVJ1b1ZMT2E2M0c2VDk5L3dBQlh0S3pYNUxYd1Z0RStmTFR3MVBST3hIYm5QYnN0cTZxNytQbXh0M0V6eVUwcm91TVRhM2Yvd0IraVIwWG83UnRXYThqSnVjWGRKeW5GNVo3cEpYTVptMnpad1lkSmVZNFM4dGE2OVN0aUlZS0R0R1Z0cnJieno1cEpYc1RYdDNZYTY5c21TTU1OdDZtNGZZMlZLZTMrOWRiL1p0YXhIT2QxdnV6SHgyNzd0YlUvRTFLZFdwZzZqdnNYY2VxelNhWFU3cGsyK3F2UVpMVXZPRzNvdEdNcnFuVG5VZTZFWlNmOUtiL0FDTUlkVEpiaFdiZlNGTDBKb3A0K2M4UmlKUFp2YXllOTc3SjhJcE16bWVNT0xwOVA3VmFjbVNVblgxUWlwcXBoNnNxYmpubjByUG1udjd5T2JhbnBzUmFMWTUyZXV0bWtLbEhEeGdwZnRLdlJjbzVaSmRKcmwva1ZqZVdXdXpXeFlvckU5NWEyaTlVYVRwS1ZaeWM1cTdzN0pYenk1aWJLOFBUcVRYZS9scFllblBSK05qU1VuS2xXdHY0cHRwTi93QVNaTS9taFJTTGFYVVJYMGxzNmRqUEY0eU9FVXRtbkJYbGJzdTMxdTFrdTBWN1J1dDFNV3o1NHhlSWg4NmMxWnAwYVRyVUhLTXFWbTd1OTdjVnlZcmJmc2pVNkN1T25QSFBlSG5xL29LT0tqTEU0aVVwT2NuWkoydmJLN2ZiZFc2aGEyekRTNlNNOFRreVMrc0pRZUF4MGFVWk4wcTlsbnZ6eVY3Y1UrUEpqekRLbFowdW9pa1R2RXJtaXQyV1FBQUFCVHRhYUZTaGlZNDJuRzhjdHJrbWxiUGttc2l5dmpaeDliUytQTEdhc05xZXVkRHllMG95MjdlYmJLL3RickVjSld6MVBGeDNqeWl0VDZ6bmpKMUplZE9NNVAzeVRabGFPelU2ZmViWjdXbjlXOWo5S2FNcXljcWtHNXJKdlprbTdaWnRiekdJc3Z5NmpSM21adEhmOWtmanErakhUa3FjSnFwYm81U1dmRGU3R1VjdCs3WHkzMGMxbmp2dWtkV3NIT3JnS2xPV1NxT1hrNzM1S3o3Tm94bVlpV3pvOGRyYWFhejYrR25vSFRmMFBhdzJJaEtLakp0TkxOWDRXNHA3MHliUnYzVTZiVSt6ZjZXU0hqclByQkhFeFZLa25zSjNiZVRienRaY2lhMTJZYTNXeGxqalh3bTZHUG9Vc0ZRamlGZUZTQ1Z0bmFUc3VLTWRwbWV6ZXJteFk4Rkl5ZXNJejZUb2oxY3U2ZnpKMnMxZnhORkxRVHBTeGxMNkhHU1Y0Nzc3MDN0UFBPMnp2Sjc3ZDFFY0xhaXY0S1YxcXc5U2ppSVkybXJxTnRycWNlZkpOTzF5S3pHMnpiMXVPMlBMR2FyYmV1VkRZMmxHVzNiemJXVi9hM0VjVms5VXg4ZC9WRWFvNGgxTWJLcFB6cFFtMzczRXl0NGFtaHZOczgyc3MrSDBqUnhzS3RLbTNsRnhsZFc4OVNXWGN5dmJaMUs1cVo2MnJYOWxhMExwU1dBblBENGlMMmIzdWx4M1hTNHhhTTVqazVtbnp6cGJUanlSMlNHSjF0MnB4cDRXazZqbCs5ZGR5WGlJcDlXeGJxSEswVnhSdTJOYXRIVksrSGpKSzlXbDBtbzU3MTBsSDljQ0t6dEt6VzRiWk1VVzlZYTJpOWJxU3BxTmRTak9LdGtycDI4Qk5WV0hxTkswMnlkcGFXSG5QU0dNalZVWEdqU3R2NEtMY2t2YWJKOFFwck50VnFJdHQrV0c5Zy8rclZQWS93Q01TSitGZmovM3Mvc210WVBSYXZzTXhyNWJ1citUYjltcnFoNkpEK3IrNWsyVjZENU1JN1dQMC9DOXNmNzBaVjhTMXRYL0FMakgrNjFsYnFzZ0FBR0dCaVVVMVpxNlpLSmlKaG9yUTJHVHVxRk8vUFpRNUtZMCtQZmVJaDYwZEhVWVRkU05PTVp5dmRwWnUrOGJzcTRLVm5lSWVEMERoSG41Q0hjT1VxNTBtR2Y2UmFCd25xSWR3NVNScE1NVDhLUWpGSldTc2x1UkRZaUlqdERYeFdBcFZmdktjWjIzYlNUSjNtR0Y4VkxmRkR6K3FNTnM3SGtZYkxkMnRsTE5EbExEMmZGdHR4ZlZYUmxDY1kwNVVvdUZQelUxa3V3YnpDYllNZG9pc3g0ZUgxQmhQVVE3aHlsaDdKaC90YkdFMGRScE85T25HRGU5cFo5NG1abFpqdzQ4Znd3MlhGTldhdW56SVdiYngzYVgxTmhiN1hrS2QvWlJQS1ZQcytMZmZqRDBwYVBvd202a2FjVk41TnBaNS84QXdieXlyZ3gxdHZFZDJjSmdLVkc3cFU0dzI3YlZsYTlyMnYzdnZFenVuSGlwVGZqRzI3NnhXQ3BWVmFwVGpOTDk1SmlKbUMrS2wvaWpkODRYUjlHbDkzVGpDL0pKUHZFek1vcGh4MCtHR3pZaGEwcTJpY1BPVGxPakNVbnhjVTJUeWxUT0RITTd6RU5talFqQmJNSXFNVndTc2lOMWxheFdOb2g1eHdWSlZIV1VFcWozeTR2M2s3c1l4VWkzTGJ1OWExS000dUVsZU1zbW51YUlaV3JGb21KZk9HdzhLY1ZDRVZHSzNKYmlVVnBGSTJxK0srQnBUbkdwS0NjNGVhM3ZYSElib3RpcmFZbWZNTmdoWXlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFmL1onKTsgKi9cclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB9ICovXHJcbiAgXHJcbiAgLmxlZnQtaW1ne1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmxlZnR7XHJcbiAgbWFyZ2luLXRvcDogMTQ1cHggO1xyXG4gIH1cclxuICAucmlnaHR7XHJcbiAgbWFyZ2luLXRvcDogMTYwcHggO1xyXG4gIH1cclxuICAuaW5wdXQtYXJlYTF7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuLm1vZGFsLWNvbnRlbnR7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcclxuIHdpZHRoOjg4MHB4XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "./src/app/forgetpass/forgetpass.component.ts");
/* harmony import */ var _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgetpassverify/forgetpassverify.component */ "./src/app/forgetpassverify/forgetpassverify.component.ts");
/* harmony import */ var _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newpass/newpass.component */ "./src/app/newpass/newpass.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signupotp/signupotp.component */ "./src/app/signupotp/signupotp.component.ts");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/inventory/inventory.component */ "./src/app/dashboard/inventory/inventory.component.ts");
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/users/users.component */ "./src/app/dashboard/users/users.component.ts");
/* harmony import */ var _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/leads/leads.component */ "./src/app/dashboard/leads/leads.component.ts");
/* harmony import */ var _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Pipes/table-filter.pipe */ "./src/app/Pipes/table-filter.pipe.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Pipes/table-filter02.pipe */ "./src/app/Pipes/table-filter02.pipe.ts");
/* harmony import */ var _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Pipes/table-filter03.pipe */ "./src/app/Pipes/table-filter03.pipe.ts");
/* harmony import */ var _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Pipes/table-filter04.pipe */ "./src/app/Pipes/table-filter04.pipe.ts");
/* harmony import */ var _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Pipes/table-filter05.pipe */ "./src/app/Pipes/table-filter05.pipe.ts");
/* harmony import */ var _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Pipes/table-filter06.pipe */ "./src/app/Pipes/table-filter06.pipe.ts");
/* harmony import */ var _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard/inactive/inactive.component */ "./src/app/dashboard/inactive/inactive.component.ts");


// import {MaterialModule} from '@angular/material';




// import { MDBBootstrapModule } from 'angular-bootstrap-md';





























// import { HighlightDirective } from './directives/highlight.directive';
// import { FilterPipe } from './pipes/filter.pipe';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_17__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_17__["en_US"] }], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            // MDBBootstrapModule.forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"]
            // MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
        _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_12__["ForgetpassComponent"],
        _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpassverifyComponent"],
        _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_14__["NewpassComponent"],
        _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_16__["SignupotpComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
        _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
        _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_22__["InventoryComponent"],
        _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
        _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_24__["LeadsComponent"],
        // FilterPipe,
        // HighlightDirective
        _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["TableFilterPipe"],
        _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_27__["TableFilter02Pipe"],
        _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_28__["TableFilter03Pipe"],
        _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_29__["TableFilter04Pipe"],
        _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_30__["TableFilter05Pipe"],
        _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_31__["TableFilter06Pipe"],
        _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_32__["InactiveComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        // MDBBootstrapModule.forRoot(),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"]
        // MaterialModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                    _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_12__["ForgetpassComponent"],
                    _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpassverifyComponent"],
                    _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_14__["NewpassComponent"],
                    _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_16__["SignupotpComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                    _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                    _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_22__["InventoryComponent"],
                    _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
                    _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_24__["LeadsComponent"],
                    // FilterPipe,
                    // HighlightDirective
                    _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["TableFilterPipe"],
                    _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_27__["TableFilter02Pipe"],
                    _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_28__["TableFilter03Pipe"],
                    _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_29__["TableFilter04Pipe"],
                    _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_30__["TableFilter05Pipe"],
                    _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_31__["TableFilter06Pipe"],
                    _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_32__["InactiveComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    // MDBBootstrapModule.forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"]
                    // MaterialModule
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_17__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_17__["en_US"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
        // $("#menu-toggle").click(function(e) {
        //   e.preventDefault();
        //   $("#wrapper").toggleClass("toggled");
        // });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 33, vars: 0, consts: [["id", "wrapper", 1, "d-flex"], ["id", "sidebar"], [1, "p-4", "pt-5"], ["routerLink", "/", 1, "img", "logo", "rounded-circle", "mb-5"], ["src", "assets/icons/asasa.gif", "alt", ""], [1, "list-unstyled", "components", "mb-5"], [1, "active"], ["routerLink", "/dashboard"], ["routerLink", "/profile"], ["routerLink", "/users"], ["routerLink", "/inventory"], ["routerLink", "/leads"], [1, "footer"], ["id", "content", 1, "p-4", "p-md-5"], ["id", "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["type", "button", "data-toggle", "collapse", "href", "#sidebar", "id", "sidebarCollapse", 1, "btn", "btn-primary"], [1, "fa", "fa-bars"], [1, "sr-only"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn-dark", "d-inline-block", "d-lg-none", "ml-auto"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Toggle Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".p-4[_ngcontent-%COMP%] {\r\n    line-height: 30px;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    margin-left: 50px;\r\n}\r\n.navbar[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: .5rem 1rem;\r\n}\r\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #0d6b92;\r\n}\r\n.p-md-5[_ngcontent-%COMP%] {\r\n    padding: 0rem!important;\r\n}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\na[_ngcontent-aph-c114][_ngcontent-%COMP%] {\r\n    transition: .3s all ease;\r\n    color: #38bba3;\r\n}\r\n#sidebar[_ngcontent-%COMP%] {\r\n    height: 604px;\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    background: #1d1919;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n.list-unstyled[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    box-sizing: border-box;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    color: #38bba3;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    transition: .3s all ease;\r\n    color: #38bba3;\r\n}\r\n.dropdown-toggle[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n}\r\na[data-toggle=\"collapse\"][_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    display: block;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    display: block;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    color: #38bba3;\r\n}\r\n#sidebar[_ngcontent-%COMP%] {\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    background: #1d1919;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    border-bottom: 0px solid #dee2e6!important;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n  }\r\n#sidebar-wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n  }\r\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n    padding: 0.875rem 1.25rem;\r\n    font-size: 1.2rem;\r\n  }\r\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n    width: 15rem;\r\n  }\r\n#page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 100vw;\r\n  }\r\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n@media (min-width: 768px) {\r\n    #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n    }\r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: -15rem;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFFYixlQUFlO0lBRWYsbUJBQW1CO0lBRW5CLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBR1gsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFHSSx3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsaURBQWlEO0FBQ3JEO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUdYLG9CQUFvQjtBQUN4QjtBQUNBOztHQUVHO0FBQ0g7SUFDSSwrQkFBK0I7O0lBRS9CLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjtBQUNGO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBSW5CLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC00IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4ubmF2YmFyIHtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIC8qIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG59XHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDZiOTI7XHJcbn1cclxuLnAtbWQtNSB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbmFbX25nY29udGVudC1hcGgtYzExNF0ge1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgY29sb3I6ICMzOGJiYTM7XHJcbn1cclxuI3NpZGViYXIge1xyXG4gICAgaGVpZ2h0OiA2MDRweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzFkMTkxOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmxpc3QtdW5zdHlsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4jc2lkZWJhciB1bCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6ICMzOGJiYTM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5hIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgY29sb3I6ICMzOGJiYTM7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3NpZGViYXIgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG4jc2lkZWJhciB1bCBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMzOGJiYTM7XHJcbn1cclxuI3NpZGViYXIge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWQxOTE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4vKiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG59ICovXHJcbi5uYXZiYXJ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyOyAqL1xyXG4gICAgXHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICAgIC8qIHdpZHRoOiAxMjBweDsgKi9cclxuICAgIC8qIGZvbnQtc2l6ZTogMTRweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gICNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG4gICNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICB9XHJcbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/inactive/inactive.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/inactive/inactive.component.ts ***!
  \**********************************************************/
/*! exports provided: InactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveComponent", function() { return InactiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/table-filter.pipe */ "./src/app/Pipes/table-filter.pipe.ts");
/* harmony import */ var _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pipes/table-filter02.pipe */ "./src/app/Pipes/table-filter02.pipe.ts");
/* harmony import */ var _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipes/table-filter03.pipe */ "./src/app/Pipes/table-filter03.pipe.ts");
/* harmony import */ var _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipes/table-filter04.pipe */ "./src/app/Pipes/table-filter04.pipe.ts");
/* harmony import */ var _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Pipes/table-filter05.pipe */ "./src/app/Pipes/table-filter05.pipe.ts");
/* harmony import */ var _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Pipes/table-filter06.pipe */ "./src/app/Pipes/table-filter06.pipe.ts");











function InactiveComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Demand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Phone_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Added_on);
} }
class InactiveComponent {
    constructor() {
        this.users = [
            { Id: '1', Client: 'Aftab Nabi', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 4 bed apartment', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '2', Client: 'Awais', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '12', Area: '1 Kanal', Location: 'F-6/4', Demand: '450,000', Phone_num: '090078601', Comment: 'Want 4 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '3', Client: 'Usama Gull', Purpose: 'Buy', Prop_type: 'House', Prop_num: '14', Area: '2 Kanal', Location: 'G-15/2', Demand: '150,000', Phone_num: '090078601', Comment: 'Want 3 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '4', Client: 'Usman', Purpose: 'Rent', Prop_type: 'Residential Plot', Prop_num: '72', Area: '2 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 1 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '5', Client: 'Zakria', Purpose: 'Buy', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 5 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
        ];
    }
    ngOnInit() {
    }
}
InactiveComponent.ɵfac = function InactiveComponent_Factory(t) { return new (t || InactiveComponent)(); };
InactiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InactiveComponent, selectors: [["app-inactive"]], decls: 86, vars: 28, consts: [[1, "inactive"], [1, "pull-right"], [1, "card-body", "row"], [1, "col-auto"], [1, "fa", "fa-search", "icon"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "rounded-pill"], [1, "table", "table-hover", "table-dark"], ["scope", "col"], ["id", "myInput", "type", "text", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "myInput", "type", "text", "placeholder", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon"], ["role", "button"], [1, "fa", "fa-trash", "icon"]], template: function InactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0\u00A0\u00A0Inactive/Deleted Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_12_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prop. Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Prop. #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Phone #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lead Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Deleted by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Added On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_53_listener($event) { return ctx.search_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_55_listener($event) { return ctx.search_client = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_63_listener($event) { return ctx.search_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_65_listener($event) { return ctx.search_location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_67_listener($event) { return ctx.search_demand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, InactiveComponent_tr_78_Template, 31, 12, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "tableFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "tableFilter02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "tableFilter03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "tableFilter04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "tableFilter05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "tableFilter06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_demand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](79, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](81, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](85, 25, ctx.users, ctx.search_client), ctx.search_demand), ctx.search_type), ctx.search_area), ctx.search_location), ctx.search_id), ctx.general_search));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["TableFilterPipe"], _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__["TableFilter02Pipe"], _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__["TableFilter03Pipe"], _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__["TableFilter04Pipe"], _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__["TableFilter05Pipe"], _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_9__["TableFilter06Pipe"]], styles: ["th[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n} \r\n.inactive[_ngcontent-%COMP%] {\r\n    overflow-x: hidden; \r\n  } \r\n.fa[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n} \r\n.icon[_ngcontent-%COMP%]{\r\n    margin-top: 14px;\r\n} \r\n.btn[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  } \r\n.form-control-borderless[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border: 1px solid whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2luYWN0aXZlL2luYWN0aXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCLEVBQUUsb0JBQW9CO0VBQzFDO0FBQ0Y7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9pbmFjdGl2ZS9pbmFjdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gXHJcbi5pbmFjdGl2ZSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgc2Nyb2xsYmFycyAqL1xyXG4gIH1cclxuLmZhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG4uYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3Mge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxufVxyXG4vKiBcclxuLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmhvdmVyLCAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6YWN0aXZlLCAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InactiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inactive',
                templateUrl: './inactive.component.html',
                styleUrls: ['./inactive.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/inventory/inventory.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/inventory/inventory.component.ts ***!
  \************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/table-filter.pipe */ "./src/app/Pipes/table-filter.pipe.ts");
/* harmony import */ var _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pipes/table-filter02.pipe */ "./src/app/Pipes/table-filter02.pipe.ts");
/* harmony import */ var _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipes/table-filter03.pipe */ "./src/app/Pipes/table-filter03.pipe.ts");
/* harmony import */ var _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipes/table-filter04.pipe */ "./src/app/Pipes/table-filter04.pipe.ts");
/* harmony import */ var _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Pipes/table-filter05.pipe */ "./src/app/Pipes/table-filter05.pipe.ts");










function InventoryComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Demand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Beds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Agent);
} }
class InventoryComponent {
    // user: User[];
    constructor() {
        this.user = [
            { Id: '1', Location: 'House # 2, st#9', Area: '1.6 Kanal', Type: 'House', Demand: '17000000', Purpose: 'Sell', Beds: '0', Client: 'Sarmad Mursalin', Agent: 'Name:Nabeel Tariq' },
            { Id: '2', Location: 'House # 3, st#9', Area: '2.6 Kanal', Type: 'Residential plot', Demand: '130000', Purpose: 'Sell', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
            { Id: '3', Location: 'House # 4, st#9', Area: '3.6 Kanal', Type: 'House', Demand: '1500000', Purpose: 'Sell', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
            { Id: '4', Location: 'House # 5, st#9', Area: '1.6 Kanal', Type: 'Apartment', Demand: '2000000', Purpose: 'Rent', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
        ];
        // agentChange(e) {
        //   // console.log("e", this.dataToFilter);
        //   this.Name = e;
        //   // console.log("Name", this.Name);
        //   if (e) {
        //     this.filteredData = this.dataToFilter.filter((d) => {
        //       return d.user_id.user_id == e._id;
        //     });
        //     this.data = this.filteredData;
        //   } else if (!e) {
        //     this.data = this.dataToFilter;
        //   }
        // }
        ///////////////
        this.query = '';
        this.data = [
            {
                id: 1,
                name: "client A",
                industry: "Tech"
            },
            {
                id: 2,
                name: "client Ab",
                industry: "Tourism"
            },
            {
                id: 3,
                name: "client megha",
                industry: "Hotel"
            },
            {
                id: 4,
                name: "shubham",
                industry: "Retail"
            },
            {
                id: 4,
                name: "rick",
                industry: "IT"
            }
        ];
    }
    ngOnInit() {
    }
    ////////// 
    myFunction() {
        console.log('calling the function');
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
        console.log('Ending the function');
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(); };
InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-inventory"]], decls: 85, vars: 25, consts: [[1, "inventory"], [1, "btn", "btn-primary", "rounded-pill"], [1, "dropdown"], [1, "dropdown-content"], ["href", "#"], [1, "pull-right"], [1, "card-body", "row"], [1, "col-auto"], [1, "fa", "fa-search", "icon"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover", "table-dark"], ["scope", "col"], ["id", "myInput", "type", "text", "placeholder", "Search ID", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "myInput", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "myInput", "type", "text", "placeholder", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon"], ["role", "button"], [1, "fa", "fa-trash", "icon"]], template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0Inventory Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agent 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Agent 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Agent 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_26_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Client Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Agent Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_59_listener($event) { return ctx.search_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_61_listener($event) { return ctx.search_location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_63_listener($event) { return ctx.search_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_65_listener($event) { return ctx.search_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_67_listener($event) { return ctx.search_demand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, InventoryComponent_tr_78_Template, 25, 9, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "tableFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "tableFilter02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "tableFilter03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "tableFilter04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "tableFilter05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_demand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](79, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](81, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 22, ctx.user, ctx.search_demand), ctx.search_type), ctx.search_area), ctx.search_location), ctx.search_id), ctx.general_search));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["TableFilterPipe"], _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__["TableFilter02Pipe"], _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__["TableFilter03Pipe"], _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__["TableFilter04Pipe"], _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__["TableFilter05Pipe"]], styles: [".dropbtn[_ngcontent-%COMP%] {\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {background-color: #3e8e41;}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.inventory[_ngcontent-%COMP%] {\r\n  overflow-x: hidden; \r\n}\r\n\r\n.fa[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    margin-top: 14px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  }\r\n\r\n.form-control-borderless[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border: 1px solid whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLDJCQUEyQixzQkFBc0IsQ0FBQzs7QUFFbEQsbUNBQW1DLGNBQWMsQ0FBQzs7QUFFbEQsMEJBQTBCLHlCQUF5QixDQUFDOztBQUNwRDtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0IsRUFBRSxvQkFBb0I7QUFDMUM7O0FBQ0U7SUFDRSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7QUFDQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBQ0E7Ozs7O0dBS0ciLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTt9XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gXHJcbi5pbnZlbnRvcnkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBzY3JvbGxiYXJzICovXHJcbn1cclxuICAuZmF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4uaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuLyogXHJcbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpob3ZlciwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmFjdGl2ZSwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inventory',
                templateUrl: './inventory.component.html',
                styleUrls: ['./inventory.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/leads/leads.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/leads/leads.component.ts ***!
  \****************************************************/
/*! exports provided: LeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsComponent", function() { return LeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/table-filter.pipe */ "./src/app/Pipes/table-filter.pipe.ts");
/* harmony import */ var _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pipes/table-filter02.pipe */ "./src/app/Pipes/table-filter02.pipe.ts");
/* harmony import */ var _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipes/table-filter03.pipe */ "./src/app/Pipes/table-filter03.pipe.ts");
/* harmony import */ var _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipes/table-filter04.pipe */ "./src/app/Pipes/table-filter04.pipe.ts");
/* harmony import */ var _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Pipes/table-filter05.pipe */ "./src/app/Pipes/table-filter05.pipe.ts");
/* harmony import */ var _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Pipes/table-filter06.pipe */ "./src/app/Pipes/table-filter06.pipe.ts");











function LeadsComponent_tr_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Demand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Phone_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Admin_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Agent_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Added_on);
} }
class LeadsComponent {
    constructor() {
        this.users = [
            { Id: '1', Client: 'Aftab Nabi', Type: 'Buyer', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 4 bed apartment', Assigned_to: 'Azhar adeel', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '2', Client: 'Awais', Type: 'Buyer', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '12', Area: '1 Kanal', Location: 'F-6/4', Demand: '450,000', Phone_num: '090078601', Comment: 'Want 4 bed ', Assigned_to: 'Afaq', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '3', Client: 'Usama Gull', Type: 'Seller', Purpose: 'Buy', Prop_type: 'House', Prop_num: '14', Area: '2 Kanal', Location: 'G-15/2', Demand: '150,000', Phone_num: '090078601', Comment: 'Want 3 bed ', Assigned_to: 'Usama', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '4', Client: 'Usman', Type: 'Buyer', Purpose: 'Rent', Prop_type: 'Residential Plot', Prop_num: '72', Area: '2 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 1 bed ', Assigned_to: 'Nabeel', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '5', Client: 'Zakria', Type: 'Seller', Purpose: 'Buy', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 5 bed ', Assigned_to: 'Shaheer', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
        ];
    }
    ngOnInit() {
    }
}
LeadsComponent.ɵfac = function LeadsComponent_Factory(t) { return new (t || LeadsComponent)(); };
LeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeadsComponent, selectors: [["app-leads"]], decls: 100, vars: 29, consts: [[1, "leads"], [1, "btn", "btn-primary", "rounded-pill"], [1, "pull-right"], [1, "card-body", "row"], [1, "col-auto"], [1, "fa", "fa-search", "icon"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover", "table-dark"], ["scope", "col"], ["id", "myInput", "type", "text", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "myInput", "type", "text", "placeholder", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon"], ["role", "button"], [1, "fa", "fa-trash", "icon"]], template: function LeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0Leads Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prop. Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Prop. #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Assigned To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Admin Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Agent Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Added On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_61_listener($event) { return ctx.search_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_63_listener($event) { return ctx.search_client = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_65_listener($event) { return ctx.search_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_73_listener($event) { return ctx.search_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_75_listener($event) { return ctx.search_location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_77_listener($event) { return ctx.search_demand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, LeadsComponent_tr_92_Template, 37, 15, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "tableFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "tableFilter02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "tableFilter03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "tableFilter04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "tableFilter05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "tableFilter06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_demand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](93, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](94, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](95, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](96, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](97, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](98, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](99, 26, ctx.users, ctx.search_client), ctx.search_demand), ctx.search_type), ctx.search_area), ctx.search_location), ctx.search_id), ctx.general_search));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["TableFilterPipe"], _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__["TableFilter02Pipe"], _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__["TableFilter03Pipe"], _Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__["TableFilter04Pipe"], _Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__["TableFilter05Pipe"], _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_9__["TableFilter06Pipe"]], styles: ["th[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n} \r\n.leads[_ngcontent-%COMP%] {\r\n    overflow-x: hidden; \r\n  } \r\n.fa[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n} \r\n.icon[_ngcontent-%COMP%]{\r\n    margin-top: 14px;\r\n} \r\n.btn[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  } \r\n.form-control-borderless[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border: 1px solid whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlYWRzL2xlYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCLEVBQUUsb0JBQW9CO0VBQzFDO0FBQ0Y7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWFkcy9sZWFkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gXHJcbi5sZWFkcyB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgc2Nyb2xsYmFycyAqL1xyXG4gIH1cclxuLmZhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG4uYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3Mge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxufVxyXG4vKiBcclxuLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmhvdmVyLCAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6YWN0aXZlLCAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leads',
                templateUrl: './leads.component.html',
                styleUrls: ['./leads.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProfileComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        // username:string;
        this.username = this.router.url;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
            console.log(this.email);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 35, vars: 1, consts: [[1, "profile-page"], ["data-parallax", "true", 1, "page-header"], [1, "main", "main-raised"], [1, "profile-content"], [1, "container"], [1, "row"], [1, "col-md-6", "ml-auto", "mr-auto"], [1, "profile"], [1, "avatar"], ["src", "https://www.pngitem.com/pimgs/m/146-1468465_early-signs-of-conception-user-profile-icon-hd.png"], [1, "name"], [1, "title"], [1, "fa", "fa-user", "icon"], [1, "fa", "fa-phone", "icon"], [1, "description", "text-center"], [1, "tab-content", "tab-space"], ["id", "studio", 1, "tab-pane", "active", "text-center", "gallery"], [1, "col-md-3", "ml-auto"], ["src", "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 1, "rounded"], ["src", "https://media.istockphoto.com/photos/buy-house-real-estate-concept-different-offers-of-property-online-picture-id1061234002?k=6&m=1061234002&s=612x612&w=0&h=5A53ZpXr239aXrdeIFH7J5w3cD2FTBG6T7H4ZVuGspw=", 1, "rounded"], [1, "col-md-3", "mr-auto"], ["src", "https://wallpaperaccess.com/full/1899388.jpg", 1, "rounded"], ["src", "https://www.pngmart.com/files/7/Real-Estate-PNG-HD.png", 1, "rounded"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " mzmarwat@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " +92311-2233656");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "What do real estate agents do? A real estate agent helps his or her clients purchase, or sell properties. They advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process of buying, selling, or leasing properties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
    } }, styles: ["html[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.h6[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-size: .75rem !important;\r\n    font-weight: 500;\r\n    font-family: Roboto,Helvetica,Arial,sans-serif;\r\n    line-height: 1.5em;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: .625rem 0;\r\n    margin-bottom: 20px;\r\n    color: #555;\r\n    background-color: #fff!important;\r\n    box-shadow: 0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15) !important;\r\n    z-index: 1000 !important;\r\n    transition: all 150ms ease 0s;\r\n    \r\n}\r\n\r\n.navbar.navbar-transparent[_ngcontent-%COMP%] {\r\n    z-index: 1030;\r\n    background-color: transparent!important;\r\n    box-shadow: none !important;\r\n    padding-top: 25px;\r\n    color: #fff;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    color: inherit;\r\n    height: 50px;\r\n    font-size: 1.125rem;\r\n    line-height: 30px;\r\n    padding: .625rem 0;\r\n    font-weight: 300;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:not(.btn)   .material-icons[_ngcontent-%COMP%] {\r\n    margin-top: -7px;\r\n    top: 3px;\r\n    position: relative;\r\n    margin-right: 3px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    max-width: 24px;\r\n    margin-top: -1.1em;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    max-width: 24px;\r\n    margin-top: -1.1em;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    color: inherit;\r\n    padding: .9375rem;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    border-radius: 3px;\r\n    line-height: 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.fixed-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 1030;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    background-position:center;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-size: cover;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-filter[_ngcontent-%COMP%]:after, .header-filter[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n    content: \"\";\r\n}\r\n\r\n.header-filter[_ngcontent-%COMP%]::before {\r\n    background: rgba(0,0,0,.5);\r\n}\r\n\r\n.main-raised[_ngcontent-%COMP%] {\r\n    margin: -60px 30px 0;\r\n    border-radius: 6px;\r\n    box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    background: #FFF;\r\n    position: relative;\r\n    z-index: 3;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 91px;\r\n    max-width: 160px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    transform: translate3d(0,-50%,0);\r\n}\r\n\r\n.img-raised[_ngcontent-%COMP%] {\r\n    box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n    border-radius: 50%!important;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%], .img-thumbnail[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n    min-height: 32px;\r\n    color: #3C4858;\r\n    font-weight: 700;\r\n    font-family: \"Roboto Slab\",\"Times New Roman\",serif;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n    margin: 1.071rem auto 0;\r\n    max-width: 600px;\r\n    color: #999;\r\n    font-weight: 300;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .profile-tabs[_ngcontent-%COMP%] {\r\n    margin-top: 4.284rem;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0 15px;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0 2px;\r\n}\r\n\r\n.nav-pills.nav-pills-icons[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #9c27b0;\r\n    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    line-height: 24px;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    min-width: 100px;\r\n    color: #555;\r\n    transition: all .3s;\r\n    border-radius: 30px;\r\n    padding: 10px 15px;\r\n    text-align: center;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:not(.active):hover {\r\n    background-color: rgba(200,200,200,.2);\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 30px;\r\n    padding: 15px 0;\r\n}\r\n\r\n.tab-space[_ngcontent-%COMP%] {\r\n    padding: 20px 0 50px;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\r\n    margin-top: 3.213rem;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 2.142rem;\r\n}\r\n\r\n.profile-page[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\r\n    margin-top: -80px;\r\n}\r\n\r\nimg.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 6px!important;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 12px 30px;\r\n    margin: .3125rem 1px;\r\n    font-size: .75rem;\r\n    font-weight: 400;\r\n    line-height: 1.428571;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0;\r\n    border: 0;\r\n    border-radius: .2rem;\r\n    outline: 0;\r\n    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);\r\n    will-change: box-shadow,transform;\r\n}\r\n\r\n.btn.btn-just-icon[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    height: 41px;\r\n    min-width: 41px;\r\n    width: 41px;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n    line-height: 41px;\r\n}\r\n\r\n.btn.btn-just-icon[_ngcontent-%COMP%]   fa[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: none;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    line-height: 41px;\r\n    font-size: 20px;\r\n}\r\n\r\n.btn.btn-link[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    color: #999;\r\n}\r\n\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n    float: left;\r\n    min-width: 11rem !important;\r\n    margin: .125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border-radius: .25rem;\r\n    transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);\r\n}\r\n\r\n.dropdown-menu.show[_ngcontent-%COMP%]{\r\n    transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);\r\n    background-color: #9c27b0;\r\n    color: #FFF;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]:after {\r\n    will-change: transform;\r\n    transition: transform .15s linear;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: auto;\r\n    display: flex;\r\n    flex-flow: nowrap;\r\n    align-items: center;\r\n    color: #333;\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    font-size: .8125rem;\r\n    border-radius: .125rem;\r\n    margin: 0 .3125rem;\r\n    transition: all .15s linear;\r\n    min-width: 7rem;\r\n    padding: 0.625rem 1.25rem;\r\n    min-height: 1rem !important;\r\n    overflow: hidden;\r\n    line-height: 1.428571;\r\n    text-overflow: ellipsis;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.dropdown-menu.dropdown-with-icons[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    padding: .75rem 1.25rem .75rem .75rem;\r\n}\r\n\r\n.dropdown-menu.dropdown-with-icons[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    font-size: 24px;\r\n    position: relative;\r\n    margin-top: -4px;\r\n    top: 1px;\r\n    margin-right: 12px;\r\n    opacity: .5;\r\n}\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    color: #555;\r\n    padding: 25px;\r\n    font-weight: 300;\r\n    \r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    margin: 0 0 10px;\r\n    font-weight: 300;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #555;\r\n    font-weight: 400;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #9f26aa;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    margin: 10px 0 20px 0;\r\n    background-color: rgba(214, 224, 226, 0.2);\r\n    border-top-width: 0;\r\n    border-bottom-width: 2px;\r\n    border-radius: 3px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n    margin: 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-heading.simple[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    color: #777;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-heading.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 46px;\r\n    height: 46px;\r\n    margin-right: 15px;\r\n    vertical-align: top;\r\n    border: 0;\r\n    border-radius: 50%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-heading.image[_ngcontent-%COMP%]   .card-heading-header[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-heading.image[_ngcontent-%COMP%]   .card-heading-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #262626;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-heading.image[_ngcontent-%COMP%]   .card-heading-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #999999;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n    margin: 0 -14px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\r\n    min-height: 30px;\r\n    padding: 0 20px 20px 20px;\r\n    margin: 20px 0 0 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-comments[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin: 0;\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-comments[_ngcontent-%COMP%]   .comments-collapse-toggle[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0 20px 12px 20px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-comments[_ngcontent-%COMP%]   .comments-collapse-toggle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-comments[_ngcontent-%COMP%]   .comments-collapse-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    color: #999;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.card-comments[_ngcontent-%COMP%]   .media-heading[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 170px;\r\n    height: 300px;\r\n    padding-top: 0;\r\n    margin-left: 20px;\r\n    overflow: hidden;\r\n    vertical-align: top;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: inline-block;\r\n    width: 170px;\r\n    height: 150px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-top.green[_ngcontent-%COMP%] {\r\n    background-color: #53a93f;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-top.blue[_ngcontent-%COMP%] {\r\n    background-color: #427fed;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 150px;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 101px;\r\n    overflow: hidden;\r\n    background: #ffffff;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 8px 14px 0 14px;\r\n    overflow: hidden;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    line-height: 18px;\r\n    color: #404040;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 8px 14px 0 14px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    color: #737373;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.card.people[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n    line-height: 29px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-top: 0;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    background-color: rgba(214, 224, 226, 0.2);\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .cardheader[_ngcontent-%COMP%] {\r\n    background: url(\"http://lorempixel.com/850/280/nature/4/\");\r\n    background-size: cover;\r\n    height: 135px;\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -50px;\r\n    margin-bottom: -50px;\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n    border-radius: 50%;\r\n    border: 5px solid rgba(255,255,255,0.5);\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    padding: 4px 8px 10px;\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    color: #262626;\r\n    vertical-align: middle;\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: #737373;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.card.hovercard[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n    margin-bottom: 17px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{ border-radius: 50%; width:32px; height:32px; line-height:18px;  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvRkFBb0Y7SUFDcEYsd0JBQXdCO0lBQ3hCLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMkdBQTJHO0FBQy9HOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBS2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkVBQTJFO0FBQy9FOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsVUFBVTs7QUFDVjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDhGQUE4RjtJQUM5RixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQSxhQUFhOztBQUtiO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHFGQUFxRjtBQUN6Rjs7QUFFQTtJQUNJLHFGQUFxRjtBQUN6Rjs7QUFHQTtJQUNJLDZFQUE2RTtJQUM3RSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBR3hCLGtCQUFrQjtJQUdsQixnQkFBZ0I7SUFHaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsU0FBUztJQUdULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFHbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBR2pCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUEsTUFBTSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixHQUFHIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCAqe1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi5oNiwgaDYge1xyXG4gICAgZm9udC1zaXplOiAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hbWUgaDYge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogLjYyNXJlbSAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDdweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZSAwcztcclxuICAgIFxyXG59XHJcblxyXG4ubmF2YmFyLm5hdmJhci10cmFuc3BhcmVudCB7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogLjYyNXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6bm90KC5idG4pIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS4xZW07XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuZmEsIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWF4LXdpZHRoOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEuMWVtO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAuOTM3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuYSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZpeGVkLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1wYWdlIC5wYWdlLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1maWx0ZXI6YWZ0ZXIsIC5oZWFkZXItZmlsdGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uaGVhZGVyLWZpbHRlcjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xyXG59XHJcblxyXG4ubWFpbi1yYWlzZWQge1xyXG4gICAgbWFyZ2luOiAtNjBweCAzMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBhZ2UgLnByb2ZpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1wYWdlIC5wcm9maWxlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtNTAlLDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTUwJSwwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtNTAlLDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtNTAlLDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC01MCUsMCk7XHJcbn1cclxuXHJcbi5pbWctcmFpc2VkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggLThweCByZ2JhKDAsMCwwLC4yNCksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctZmx1aWQsIC5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIGNvbG9yOiAjM0M0ODU4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsXCJUaW1lcyBOZXcgUm9tYW5cIixzZXJpZjtcclxufVxyXG5cclxuLnByb2ZpbGUtcGFnZSAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAxLjA3MXJlbSBhdXRvIDA7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBhZ2UgLnByb2ZpbGUtdGFicyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0LjI4NHJlbTtcclxufVxyXG5cclxuLm5hdi1waWxscywgLm5hdi10YWJzIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLm5hdiAubmF2LWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxufVxyXG5cclxuLm5hdi1waWxscy5uYXYtcGlsbHMtaWNvbnMgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCAwIHJnYmEoMCwwLDAsLjIpLCAwIDEzcHggMjRweCAtMTFweCByZ2JhKDE1NiwzOSwxNzYsLjYpO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1pdGVtIC5uYXYtbGluazpub3QoLmFjdGl2ZSk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwuMik7XHJcbn1cclxuXHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtaXRlbSBpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG4udGFiLXNwYWNlIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCA1MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1wYWdlIC5nYWxsZXJ5IHtcclxuICAgIG1hcmdpbi10b3A6IDMuMjEzcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBhZ2UgLmdhbGxlcnkgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi4xNDJyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXBhZ2UgLnByb2ZpbGUgLm5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcclxufVxyXG5cclxuaW1nLnJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50Pi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qYnV0dG9ucyovXHJcbi5idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAuMzEyNXJlbSAxcHg7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycyBjdWJpYy1iZXppZXIoLjQsMCwxLDEpLGJhY2tncm91bmQtY29sb3IgLjJzIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG4gICAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1qdXN0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWluLXdpZHRoOiA0MXB4O1xyXG4gICAgd2lkdGg6IDQxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1qdXN0LWljb24gZmF7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi5idG4tbGlua3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi8qIGRyb3Bkb3duICovXHJcblxyXG5cclxuXHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLXdpZHRoOiAxMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAuMTI1cmVtIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSxvcGFjaXR5IC4ycyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuc2hvd3tcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSksb3BhY2l0eSAuMnMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cywgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsIC5kcm9wZG93bi1tZW51IGE6YWN0aXZlLCAuZHJvcGRvd24tbWVudSBhOmZvY3VzLCAuZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDE1NiwzOSwxNzYsLjQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5zaG93IC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTphZnRlciB7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0sIC5kcm9wZG93bi1tZW51IGxpPmEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAuODEyNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XHJcbiAgICBtYXJnaW46IDAgLjMxMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBsaW5lYXI7XHJcbiAgICBtaW4td2lkdGg6IDdyZW07XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxLjI1cmVtO1xyXG4gICAgbWluLWhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5kcm9wZG93bi13aXRoLWljb25zIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtIC43NXJlbSAuNzVyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LmRyb3Bkb3duLXdpdGgtaWNvbnMgLmRyb3Bkb3duLWl0ZW0gLm1hdGVyaWFsLWljb25zIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLyogZm9vdGVyICovXHJcblxyXG5mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIFxyXG59XHJcbi5mb290ZXIgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5mb290ZXIgcCBhe1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5mb290ZXIgcCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOWYyNmFhO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogYW5vdGhlciBjc3MgYWJvdmUgKi9cclxuXHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIyNCwgMjI2LCAwLjIpO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRpbmcuc2ltcGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkaW5nLmltYWdlIGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkaW5nLmltYWdlIC5jYXJkLWhlYWRpbmctaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRpbmcuaW1hZ2UgLmNhcmQtaGVhZGluZy1oZWFkZXIgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzI2MjYyNjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGluZy5pbWFnZSAuY2FyZC1oZWFkaW5nLWhlYWRlciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLW1lZGlhIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbjogMCAtMTRweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtbWVkaWEgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWFjdGlvbnMge1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWNvbW1lbnRzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1jb21tZW50cyAuY29tbWVudHMtY29sbGFwc2UtdG9nZ2xlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgMjBweCAxMnB4IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWNvbW1lbnRzIC5jb21tZW50cy1jb2xsYXBzZS10b2dnbGUgYSxcclxuLmNhcmQgLmNhcmQtY29tbWVudHMgLmNvbW1lbnRzLWNvbGxhcHNlLXRvZ2dsZSBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNhcmQtY29tbWVudHMgLm1lZGlhLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkLnBlb3BsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY2FyZC5wZW9wbGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLnBlb3BsZSAuY2FyZC10b3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2FyZC5wZW9wbGUgLmNhcmQtdG9wLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E5M2Y7XHJcbn1cclxuXHJcbi5jYXJkLnBlb3BsZSAuY2FyZC10b3AuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI3ZmVkO1xyXG59XHJcblxyXG4uY2FyZC5wZW9wbGUgLmNhcmQtaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2FyZC5wZW9wbGUgLmNhcmQtaW5mbyAudGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDhweCAxNHB4IDAgMTRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuXHJcbi5jYXJkLnBlb3BsZSAuY2FyZC1pbmZvIC5kZXNjIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA4cHggMTRweCAwIDE0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uY2FyZC5wZW9wbGUgLmNhcmQtYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNhcmQuaG92ZXJjYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMjQsIDIyNiwgMC4yKTtcclxufVxyXG5cclxuLmNhcmQuaG92ZXJjYXJkIC5jYXJkaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS84NTAvMjgwL25hdHVyZS80L1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG59XHJcblxyXG4uY2FyZC5ob3ZlcmNhcmQgLmF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLmhvdmVyY2FyZCAuYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxufVxyXG5cclxuLmNhcmQuaG92ZXJjYXJkIC5pbmZvIHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHggMTBweDtcclxufVxyXG5cclxuLmNhcmQuaG92ZXJjYXJkIC5pbmZvIC50aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNhcmQuaG92ZXJjYXJkIC5pbmZvIC5kZXNjIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jYXJkLmhvdmVyY2FyZCAuYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbn1cclxuXHJcbi5idG57IGJvcmRlci1yYWRpdXM6IDUwJTsgd2lkdGg6MzJweDsgaGVpZ2h0OjMycHg7IGxpbmUtaGVpZ2h0OjE4cHg7ICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/users/users.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/users/users.component.ts ***!
  \****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/table-filter.pipe */ "./src/app/Pipes/table-filter.pipe.ts");
/* harmony import */ var _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pipes/table-filter06.pipe */ "./src/app/Pipes/table-filter06.pipe.ts");
/* harmony import */ var _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipes/table-filter02.pipe */ "./src/app/Pipes/table-filter02.pipe.ts");
/* harmony import */ var _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipes/table-filter03.pipe */ "./src/app/Pipes/table-filter03.pipe.ts");









function UsersComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Access);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Status);
} }
class UsersComponent {
    // addForm: FormGroup;
    constructor() {
        this.users = [
            { Id: '1', Client: 'Aftab Nabi', Area: '090078601', Location: 'rwp', Email: 'local@123.com', Access: '5', Status: '0.5 Kanal' },
            { Id: '2', Client: 'Khan', Area: '0900786012', Location: 'pesh', Email: 'local@1323.com', Access: '5', Status: '0.5 Kanal' },
            { Id: '3', Client: 'Hamid', Area: '0900786013', Location: 'isb', Email: 'user@123.com', Access: '5', Status: '0.5 Kanal' },
            { Id: '4', Client: 'Amir', Area: '0900786014', Location: 'murree', Email: 'user@176.com', Access: '5', Status: '0.5 Kanal' },
            { Id: '5', Client: 'Taimor', Area: '0900786015', Location: 'isb', Email: 'admin@123.com', Access: '5', Status: '0.5 Kanal' }
        ];
    }
    ngOnInit() {
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 62, vars: 21, consts: [[1, "users"], [1, "btn", "btn-primary", "rounded-pill"], [1, "pull-right"], [1, "card-body", "row"], [1, "col-auto"], [1, "fa", "fa-search", "icon"], [1, "col"], ["type", "search", "placeholder", "Search topics or keywords", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], [1, "table", "table-hover", "table-dark"], ["scope", "col"], ["id", "myInput", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "myInput", "type", "text", "placeholder", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon"], ["role", "button"], [1, "fa", "fa-trash", "icon"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0\u00A0Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_14_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_41_listener($event) { return ctx.search_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_43_listener($event) { return ctx.search_client = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_45_listener($event) { return ctx.search_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_47_listener($event) { return ctx.search_location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, UsersComponent_tr_56_Template, 21, 7, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "tableFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "tableFilter06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "tableFilter02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "tableFilter03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](58, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](61, 18, ctx.users, ctx.search_area), ctx.search_location), ctx.search_client), ctx.search_id), ctx.general_search));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], _Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["TableFilterPipe"], _Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_5__["TableFilter06Pipe"], _Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_6__["TableFilter02Pipe"], _Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_7__["TableFilter03Pipe"]], styles: ["th[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n} \r\n.users[_ngcontent-%COMP%] {\r\n    overflow-x: hidden; \r\n  } \r\n.fa[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n} \r\n.icon[_ngcontent-%COMP%]{\r\n    margin-top: 14px;\r\n} \r\n.btn[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  } \r\n.form-control-borderless[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border: 1px solid whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCLEVBQUUsb0JBQW9CO0VBQzFDO0FBQ0Y7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gXHJcbi51c2VycyB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgc2Nyb2xsYmFycyAqL1xyXG4gIH1cclxuLmZhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuLmljb257XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbi5idG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzcyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcbi8qIFxyXG4uZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6aG92ZXIsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczphY3RpdmUsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/forgetpass/forgetpass.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassComponent", function() { return ForgetpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");








function ForgetpassComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetpassComponent_div_19_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgetpassComponent_div_19_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgetpassComponent {
    constructor(authServ, formBuilder, router) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.forgetPassForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
        });
    }
    get f() { return this.forgetPassForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.forgetPassForm.invalid) {
            return;
        }
        console.log("Sending this email: " + this.forgetPassForm.value.email);
        const body = {
            email: this.forgetPassForm.value.email
        };
        this.authServ.verifyEmail(body).subscribe(data => {
            console.log(data);
            const status = data.success;
            const msg = data.status;
            const email = this.forgetPassForm.value.email;
            if (status) {
                alert(msg);
                this.router.navigate(['forgetpassverify-component', email]);
            }
            else {
                alert(msg);
            }
        });
    }
}
ForgetpassComponent.ɵfac = function ForgetpassComponent_Factory(t) { return new (t || ForgetpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgetpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpassComponent, selectors: [["app-forgetpass"]], decls: 26, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["id", "inputEmail", "type", "text", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "customCheck1", "type", "checkbox", "checked", "", 1, "custom-control-input"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-info", "rounded-pill"], ["routerLink", "/login-component", 1, "btn", "btn-info", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Forget password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetpassComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgetpassComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Get Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgetPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:45%;\r\n  margin-left: 80px;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 220px ;\r\n}\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7O0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXRwYXNzL2ZvcmdldHBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuaTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOGJiYTM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuLndvcmQge1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMjAgcHg7XHJcbiAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xyXG59XHJcbi5lbWFpbElucHV0e1xyXG5tYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4uaW5wdXQtZmllbGQgeyBcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0cGFkZGluZzogMTBweDsgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuLmlucHV0LWljb25zIGkgeyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbi5he1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuLnYye1xyXG4gIG1hcmdpbi10b3A6IDQwcHggO1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbntcclxuXHRoZWlnaHQ6YXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJ0bntcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmxlZnQtaW1ne1xyXG4gIHdpZHRoOjQ1JTtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4ubGVmdHtcclxubWFyZ2luLXRvcDogMTQ1cHggO1xyXG59XHJcbi5yaWdodHtcclxubWFyZ2luLXRvcDogMjIwcHggO1xyXG59XHJcbi5pbnB1dC1hcmVhMXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetpassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpass',
                templateUrl: './forgetpass.component.html',
                styleUrls: ['./forgetpass.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/forgetpassverify/forgetpassverify.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forgetpassverify/forgetpassverify.component.ts ***!
  \****************************************************************/
/*! exports provided: ForgetpassverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassverifyComponent", function() { return ForgetpassverifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");








function ForgetpassverifyComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code should not be greater than 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be a valid number sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetpassverifyComponent_div_19_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgetpassverifyComponent_div_19_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgetpassverifyComponent_div_19_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgetpassverifyComponent_div_19_div_4_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgetpassverifyComponent {
    constructor(authServ, formBuilder, router, route) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
            // console.log(this.email);
        });
        this.initialize();
    }
    initialize() {
        this.forgetpassForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    get f() { return this.forgetpassForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.forgetpassForm.invalid) {
            return;
        }
        const user = {
            email: this.email,
            otpcode: this.forgetpassForm.value.code
        };
        // this.authServ.verifyOTPEmail(user).subscribe(data => {
        //   console.log(data);
        // });
        this.authServ.verifyOTPCode(user).subscribe(data => {
            console.log(data);
            const status = data.success;
            const msg = data.status;
            if (status) {
                alert(msg);
                this.router.navigate(['newpass-component', this.email]);
            }
            else {
                alert(msg);
            }
        });
    }
}
ForgetpassverifyComponent.ɵfac = function ForgetpassverifyComponent_Factory(t) { return new (t || ForgetpassverifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ForgetpassverifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpassverifyComponent, selectors: [["app-forgetpassverify"]], decls: 25, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["type", "text", "formControlName", "code", "name", "code", "id", "code", "placeholder", "Enter 6-digit verify code", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/forgetpass-component", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetpassverifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Verification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetpassverifyComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgetpassverifyComponent_div_19_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgetpassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.code.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.code.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%]{\r\n  \r\n  width: 100px;\r\n  font-size: 13px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  \r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:45%;\r\n  margin-left: 80px;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 220px ;\r\n}\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3ZlcmlmeS9mb3JnZXRwYXNzdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7O0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzc3ZlcmlmeS9mb3JnZXRwYXNzdmVyaWZ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bntcclxuICAvKiBwYWRkaW5nOiAwcHg7ICovXHJcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuMXtcclxuICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xyXG59XHJcblxyXG5oMntcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG59XHJcbmk6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzhiYmEzO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi53b3JkIHtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cclxufVxyXG4uZW1haWxJbnB1dHtcclxubWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuLmlucHV0LWZpZWxkIHsgXHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdHBhZGRpbmc6IDEwcHg7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0gXHJcbi5pbnB1dC1pY29ucyBpIHsgXHJcblx0cG9zaXRpb246IGFic29sdXRlOyBcclxufSBcclxuLmlucHV0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4uYXtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi52bHtcclxuICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi52MntcclxuICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW57XHJcblx0aGVpZ2h0OmF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmxlZnQtaW1ne1xyXG4gIHdpZHRoOjQ1JTtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4ubGVmdHtcclxubWFyZ2luLXRvcDogMTQ1cHggO1xyXG59XHJcbi5yaWdodHtcclxubWFyZ2luLXRvcDogMjIwcHggO1xyXG59XHJcbi5pbnB1dC1hcmVhMXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetpassverifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpassverify',
                templateUrl: './forgetpassverify.component.html',
                styleUrls: ['./forgetpassverify.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");








function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Log - in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_14_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
} }
function LoginComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_19_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, // Creating an instance of Formbuilder
    authService, // Instance of Authentication services created in front end
    router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        // registerForm: FormGroup;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        if (window.innerWidth < 600) {
            this.mobileView = true;
        }
        else if (window.innerWidth > 600) {
            this.mobileView = false;
        }
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // get email() {
    //   return this.loginForm.get('email')
    // }
    loginUser() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        console.log('user login data: ', this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe(data => {
            console.log("Subscribed Data: ", data);
            const success = data.success;
            const status = data.status;
            // const msg: string = data.msg;
            console.log("Status: " + status);
            console.log("Success: " + success);
            const email = this.loginForm.value.email;
            if (success) {
                alert('SUCCESS!! :-)');
                this.router.navigate(['profile', email]);
            }
            else {
                alert('Invalid email or password!');
                this.router.navigate(['profile', email]);
            }
        });
    }
    // getting input labels values from user end (login.html)
    get f() { return this.loginForm.controls; }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 33, vars: 10, consts: [[1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], ["class", "col-1 v2 ", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "right"], [1, "text-center"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["type", "email", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], [1, "fa", "fa-lock", "icon"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-info", "rounded-pill"], [1, "custom-control", "custom-checkbox", "mb-3"], ["routerLink", "/forgetpass-component"], ["routerLink", "/signup-component"], [1, "col-1", "v2"], [1, "vl"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Not Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileView == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\r\n  margin-left: 17px;\r\n}\r\na[_ngcontent-%COMP%]{\r\ncolor:#38baa2;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n\r\n  margin-top: -10px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n.input-field[_ngcontent-%COMP%] { \r\n  margin-left: 20px;\r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: 900;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  margin-left: 40px;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:45%;\r\n  margin-left: 80px;\r\n}\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 160px ;\r\n}\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCOztFQUVoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtDQUNsQixXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7QUFDRjtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7Ozs7Ozs7O291UUFRb3VRO0FBQ2x1USxxQkFBcUI7QUFDbkI7Z0JBQ1k7QUFDZDs7R0FFQztBQUVIO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1iLTMsIC5teS0zIHtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxufVxyXG5he1xyXG5jb2xvcjojMzhiYWEyO1xyXG59XHJcbmgye1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuaTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOGJiYTM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuLndvcmQge1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMjAgcHg7XHJcbiAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xyXG59XHJcbi5lbWFpbElucHV0e1xyXG5tYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4uaW5wdXQtZmllbGQgeyBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0cGFkZGluZzogMTBweDsgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuLmlucHV0LWljb25zIGkgeyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbi5he1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuLnYye1xyXG4gIG1hcmdpbi10b3A6IDQwcHggO1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLmxvZ2lue1xyXG5cdGhlaWdodDphdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi8qIFxyXG4uYmctaW1hZ2UgeyAgICBcclxuICBoZWlnaHQ6IDY1MHB4OyBcclxuICB3aWR0aDogNTAwcHg7IFxyXG4gIG1heC13aWR0aDogNjUwcHg7IFxyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2FzYXNhMDYucG5nKTtcclxuXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4QVFFQlVQRUJFV0VoQVFGUllZRlJnVkZoVVZGUmdZRlJZV0ZoY1hGaFVZSFNnZ0dCc2xHeFlWSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR2hBUUdpMGxIeVV0TFMwdExTMHRLeTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQU9FQTRRTUJFUUFDRVFFREVRSC94QUFiQUFFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQlFZQkJBY0RBdi9FQUVRUUFBSUJBZ0lHQlFnSEJ3TUZBUUFBQUFBQkFnTVJCQ0VGQmhJeFFWRWlZWEdSc1JNeU5GTnlnWkxSRkJVV002SEI4Q05TWW5PQ3N1RUhvc0kxUWtPajhTVC94QUFiQVFFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQVFNQ0JBVUdCLy9FQURJUkFRQUNBUU1EQVFZRkF3VUJBQUFBQUFBQkFnTUVFUklGSVRGQkZCVXlNMUdCRXlKaGNiRkNVcEVqTktIUjhFUC8yZ0FNQXdFQUFoRURFUUEvQU80Z0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR0d3TUtWOXdSRTcrSDBFZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIek9TU2Jic2xtMjl5Q0ptSWp1b21zdXNqclhvMFcxU1dVbnhuOG8rSmJXcmc2M1hjNTRVOE5QUU9uNTRaN0x2T2k5OGVLNjQvSW0xZDFPazFsc003V25lSFFjSGk0VllLcFRrcFJmNnMrVEt0dG5vY2VTdVNPVlh1aUZqSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkJhM1l5cFJ3KzFUbHN5YzRxNjMyemY1R1ZZaHBhN0pmSGkzckttZlgrTDlmUDhQa1c4SWNUMjNQOEEzU3MycUdsS2xTRldWZXBkUXM3eXNyS3p2bjdpdTBPcG9OUmUxYlRrbndodFpOWVhpSDVPbmxSWHVjK3Q4bDFHVmE3TkxXYTJjczhhK1A1UUJtNW9FcERRK2xxbUdudFFkNHZ6b3ZkTDVQckltTjJ4cDlWZkRiZXJvbWl0SjA4UkRicHZ0WEdMNVA1bE14czlIaHowelYzcTNTRjdJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN1YTllakwrWkh3a1owOHVkMVA1S2dGcnozNlBSVnBLTGdtMUdUVGE0TnJkZm1ObVVYdEZlTVQyZVlZQVNBQU5uQVkycFFtcWxPVnBMdWE1TmNVUk1icmNPVzJLM0tyb1dndE9VOFRITG8xVXVsQnY4VnpSVk5kbm90TnE2NW8vVkxtTGJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS3hyM1dqNUNNTHJhYzAwdU5rbmQvaVowY3pxZDRqRnhVUXRjQUFBQUFBQUI2VWEwb1NVNFNjWlIzTmJ5Tm1WTDJwTzhMN3E3ckhIRVdwMU9qVy9DWFd1dnFLN1YyZWcwbXVybC9MYnlzQ01IUVpBQUFBQUFBQUFBQUFBQUFBQUFBQ0IxaDFpaGgraEMwNjNMaEhybDhqT3RkMmhxOWJYRitXTzhxQmljUk9ySnpxUzJwUzN0L3JKRmtSczgva3lXdlBLenlKWWRtNW83UmxiRU8xS043YjN1aXUxL2tSTTdMc09tdmwrRmFzRHFYVFdkYW81UGxIb3g3OS9nWVRlWFd4ZExySHh5bHFlcm1FaXJlUlQ3YnZ4TWVVdHVORmdqK2xtZXJ1RWVYa1lyc3VoeWxNNkxCUDlNSXpHNm1VWG5TbktENVBwUi9IUDhTWXZMVnk5THBQd1RzcXVsZERWc00vMmtlandrczR2NVB0TTR0RXVWbjBtWEY1anQ5VWVaTlpsTzJheWFCRXpIZGM5WE5aOXExSEVPMHNsR2ZCOVV1VDZ5dTFYYjBldmkzNU1ubGJVeXQxbVFrQUFBQUFBQUFBQUFBQUFBeGNDcDZ4NjBLTjZPSGQ1WnFVMXVYVkhtK3NzclZ5ZFpyNHIrVEgvbFM1U2JkMjd0NzI4Miswc2NPWm1aM2xnQ2ExZDBGTEV5MnBYalJpODMrOS9ESDVtTnAyYjJqMGs1cDNudzZGaGNOQ25GUWhGUml0eVJUTDBOTWRhUnRXSHJjTXk0UVhDUUQ0cTBveVRqSktVV3JOTlhUWEpvUkxHMVl0RzB3b2VzK3Iza1AydEs3b3Q1cmU0ZjRMYTIzY0hXNkw4UDhBUFh3cnBtNW9DRm4xZDFtZE8xS3U3MCtFdU1lcDgxNEZkcXVybzlmTmZ5WlBDOFFxS1NUVFRUM05idmNWdTVGb21ONGZZU0FBQUFBQUFBQUFBQUFBb2VzbXNzcWpsUm90eHBxNms5MHBXeWE2a1dWcTRXczEwMm5oVHRDc2xqbEFHMW96QlNyMVkwbzc1UE44a3MyKzRpWjJXNE1VNWNrVmgxSEI0YU5LRWFjRmFNVlpmTXBtWHFzZU9NZFlyVjdHTXl5UmVOMG5zNVEzWHR0V3YzTGlhR1hXOTVyajd5MThtZmo0UXRER1ZxbUlxVUt1Y1lyYVRVbm1ycEs2VmtuMkRVemFOUFhOVzA3ejVqWm9Zczk3NXJZcmVuZnRLSDFnMG5WcFRVc0hWbEtWTzdxeGkzS0NXOU9TV1M0bTkwdU1sNlRHbzdiK0phK3F6elMrK0czZjFoSWFwYTVWTVE1UXJ3Vm9XNlVkK2U2OGVQYXU0djF0Y2VtNHhOdkxaMFhVTFpPMTQrNjZRbGRYVHVudUthekV4dkRyYmxTbXBKeGtyeGFzMDl6VEpSTVJNYlM1anA3UnJ3MVowLzhBdGVjSC9DL3pWbWkrdHQzbU5YZy9CeWJlbm9qaVdyMkFuejJUZXIrc004TTlpZDVVWHZYR1BYSDVHRnE3dC9TYTIyS2VOdThmdzZKU3FLU1VsdWtrMTJNcWVpck1XamVIMkVnQUFBQUFBQUFBQUFBYWs5RzBHN3VsQnQ3M3N4SjNsVk9ESFBvcG11K0hoVHEwMUNDaW5CMzJVbHg2aXlqaTlUcFd0cTdRclptNWk0Nmc0VEtwWGUrK3d1NVNmaWl1OHV6MHJIMm0vd0Jsd0szWlJtbHNUYTFOY2MzMmN2MXlPWDFIVVRTc1VqMVVaYi8wb2VqbytQbHBWM0tUVGpzN0w4MWRpL1c5bWxYVlgvQmpEV0kzMzgrclNycDYvaWZpek03YmVGWDA1V1ZHdDVYRDFHdktKM3o2U2FzbW1ubnllWjYvcDlaellZcG5yNDJlZTFreGh6ODhOdktyMTViN2NUcXpXUEVOV2src3JGcW5DRWwreG5zeTJXcTBaSmRKMnZDY003cXpmdnR3UEo5YnZhSjQzNy8ydTVvNnhOZDYvZGVkQll6Wmw1R1R1cGViMnJmYnQzblA2ZHFabVp4ejQ5SFcwK1R2eGxZRWRsdXExcjFoTnFncXZHbEpkMG5ieHNaMG51NW5VOGUrUG45RkRMWmNCT2FuMEl6eE96T0trdGlXVFNhNGNHWTI4TjdwMWEyeTdUOUY2K3JLSHFZZkRINUZXOHU5R0RINlEyNG9oYkhaa0pBQUFBQUFBQUFBQUFBd0JSOWYvdmFmc1B4TGFPSDFYNHFxc1p1UzZKcVpDMkVqL0ZLVC93QnpYZ2tVMzh2U2RQamJEQ2RaaTNsUDBucGFuQ2RXclVsc3hoVTJIdmVhc2xrY1RWNlhObTFQR3NidVhsejFyYVpzcW1zdXNEcXlWS20ycVNTZVQ4NjltcnJoYmtkL28vVEs0YTg4a2IyL2h4OWZxN1pKNDBuc2dKMXowRGxSU1dwV3FrVEs2bFZ4MVowZlVsZzNDbzNDRlNlMUhaeW5zOUYrZHdUYTNXNTh6eGZXTlpTdXAzckcrMGJmbzdtbHhUK0YzYmVBcFY2TmVNcFNqVXB3bmVEZDFVVWNuYmE0dDduek5LdXB3MnRXYTlwM2pmNlNzcE0wdkV1a283cnRvM1dTQ2VFcko4SU45MmE4REt2bHJhdXUrRzBPWUY3eXFmMUk5TC9vbDR4TUwrSFI2Wjg3N09obFQwUUFBQUFBQUFBQUFBQUFBQmdDajYvL0FIdFAySDRsdFBEaDlWK0txckdia3VpYWwxTDRTUDhBREtTZmZmd2FLYmVYbytuMjN3UW5XWXQvMWNqMXZ4Y3NMajYwWlFWU2xVbENwc3l5ejJVOXBQdHV2Y2JrYVNNK09MVm5hMGRubTlWTTQ4OXF6NDh0VEFhTGxpNmNuU3FRY0l2Wmg1UlNjMWtuYVUwc3JKcmRkTTFNL1VhNk85WXlWbmYxVlYwMDVZbmpLSTB0byt0aG5hckd5YmFqSk84Wlc1UDVuVTB2VU1PcGplay9aclgwMXNmeElxclZOdWZCV2pwT0IxaHcwcU5OK1ZqRjdNWTdNbWxKTkpLelI4KzFtZzFFWnJmbG1YWHJraWE3UTNLYThwVWhEOTZjVmx5dXJ2dXV6UzBzVGJQV052VkZQelpJaGZrZXQ4TzRqOVlQUmEzOHVYZ1pWOHFOVDhxMzdPWEY3eWF3YWtlbC93QkV2R0poZnc2UFRQbmZaMElxZWlBQUFBQUFBQUFBQUFBQUFNQVVmWC83Mm43RDhTMm5odytxL0ZWVmpOeVZ3MUJ4aVhsS0RlL3BydVNsNElydkRzOUt5K2FTdUpXN0NsLzZrNnZQRTBWWHBSdlZvM3VsdmxEamJtMXY3emIwdWJoYmpMbWRSMDAzcnpyNWorSFA5Vk5ZRmhtNkZYS25LVjFMZlp1eXo2c2thblcrbTJ6eEdhbm1JLzRjN1Q1ZGwzeE02Y29OVlZGdzQ3Vm12eFBJWWI1SzMvMDk5MjFONnpIZHlUUytKcHlyVkhTaW9VOXJvcFpxeXl1dTIxL2VmUk5KVzljTll5VHZMVW1zYjlqUW1GbFd4RUlyS3oybStTam4rVnZlVTlTenhnMDlwbi8yNlkyaDI3VlRSN2xMNlRKZEZLMVBydnZsMld5WGF6elBTOU5OWW5KYU84K0hTME9HZCtkdnN0UjEzVFIrc0hvdGIrWEx3SnI1VWFuNVZ2MmN1TDNsRTlxVS93RDlhNjRTL0ova1lYOE9oMHo1MzJkRUtub2dBQUFBQUFBQUFBQUFBQURBRkgxLys5cCt3L0V0cDRjUHF2eFZWWXpjbHM2UHhrcU5XTldPK0Q3MXVhOTZ1Uk1icmNPV2NkNHREcUdCeGNLMU9OU0R2R1M3dWFmV1V6RzB2VTRzbGNsWXREWWFJV0tQclgvcDdTeExkWER0VWFqemNiZENUNTVlYSt6L0FDYmVMVlRTTnJkNGN6VWRQaTA4c2ZhZitGWDFoMEZwTjRlTkIwWlN0bE53NmUyb3BXYTJjKzI2M21ocE5KaHhhcTJXZkUrUDBhVnNPYW5hYS80N3E3ZzlSZElWWFpZYWNldWEyRi91c2QyMm94VjlXTk1XYTNpcy9mczZGcWgvcDJzTmVlSm1wdVZyd2l1ajJTbHZhNmxiM25NMVY2WjVqZVBEZndhQ1lubGsvd0FML0dLU3Nza2lsMG84TWhLUDFnOUZyZnk1ZUJOZktqVS9LdCt6bHhlOG9uZFMvUzQrekx3TUwrRy8wMzUzMmRGS25vd0FBQUFBQUFBQUFBQUFBREFGSDEvKytwK3cvRXRwNGNQcXZ4VlZZemNrQ0pTMnIrbTU0V2ZHVktUNlVmemoxK0pqYXU3ZDBtcm5EUDZPaDRQR1FyUVZTbkpTaS8xWjhtVlREMFdQTFhKRzlHd1FzQUFBRDRxMVZGWGswbHplUVJNeEhsOW9DUDFnOUZyZnk1ZUJOZktuVS9LdCt6bHhlOG9uZFMvUzQrekx3TUwrRy8wejUzMmRGS25vd0FBQUFBQUFBQUFBQUFBREFGRzEvZjdhbjdEL0FMaTJqaGRWK09xcm1ibEFBSWJPQngxV2hMYnBTY1h4NVB0WEVpWTNYWWMxOFU3MGxhTURycXJXcjA4K2NOM3d2NW1FMGRYRjFXUC9BS1IvaEswdGFzRzk5UnhmWENmaWxZeDRTMjQ2aGduMWZVOWFjR3YvQUMzN0lUK1E0eVRyOEVmMWZ5ak1icnBCSzFHbTVQblBKZHl6TW9vMWNuVmFSMnBDdFlyUzFXdlVqS3JPOFl5VHNzb3JQZ3V6M21YSGJ3NTF0VmZKZUp2UGJkZWxyTmcvWEw0Wi9JcjR5N250MkNQNnY1YWVtZFlNTFV3OVdFS3FjcFFra3RtV2JhNjBURlozVlo5Wmh0am1JbFFTMTU1TzZsK2x4OW1YZ1lYOE4vcG56dnM2S1ZQUmdBQUFBQUFBQUFBQUFBQUdBS3JyYm9hdlhxUW5TaXBKUnM4MHJPOStQYitCWldZaHl0ZnBjbVcwVFZBL1pmRityWHhJeTVRNS91L1A5RDdMNHYxYStKRGxCN3Z6L1JuN0xZejFhK0tJNXduM2RuK2g5bHNYNnRmRkVjNFI3dXpmUmo3TDR2MWErS0k1d2U3czMwWit5Mkw5V3ZpUTVRZTdzLzBQc3ZpL1ZyNGtPVUh1N1A4QVJqN0w0djFhK0pEbWU3OC8wWit5K005V3ZpUTVRZTdzL3dCR1BzdmkvVnI0b2psQjd2ei9BRVBzdmkvVnI0a09jSHUvUDlEN0w0djFhK0pEbkNmZCtiNkpiVmpRV0lvNGhWS2tWR0tqSmIwODMyR05yUTI5RHBNbUxKeXQ0WE1yZGxnRElHQU1nQUFBQUFBK1p5U1YyN0pjOXdSTTdOQmFid3JlejVlRiszOHllTXFQYXNNenR5aHZ4ZDh5RjhUdjRhbUwwcFFwUFpxVll4Zkp2TW5hVlY4K09rN1dtSGg5ZjRUMThPOGNaWWUxNFA3b2JlRHh0S3NuS2xOVFNkbTF6STJtRnRNbGI5Nnp1eGk5SVVxUDN0U01MN3J2UHVKMm1VWHpVcDhjN0dFeDlLdDkxVWpPMit6L0FDR3lhWnFYK0NkM3ZVcUtLY3BOS0t6YmVTUkhkbmFZckc4by93Q3Y4SjYrSGVUeGxyKzE0UEhPR1lhZHdyYVNyUWJic3MrTEhHVXhxc016dEZvYjhwcEs3ZGtzMnlPNi9mYU4yaXRONFhhMmZMd3YyL21UeGxSN1ZoMzI1UTM0dSthM0VMNG5ka0phK0x4MUtrcjFKeGhmbTdkdzJWM3kwcDhVN1BuQ2FSbzF2dTZrWnRjRTgrNG5hVVV6VXY4QURMYVpDMW80alRHSHB5Mloxb0tTM3ErWk8wcUxhbkZXZHJXaHRVSzhaeDJvU1VvdmluZEJiVzhXamVyTmFyR0NjcE5SaXQ3YnN1OGd0YUt4dkxWd3VsYUZXV3pUcXhsTGtubVRNU3JwcU1kNTJyYmQ5WXZTVkdpN1Zha1lOOEc4KzRSRXB2bng0NTJ0Ylo3NGJFUXFSMm9TVW92aW5jaG5TOWJSdlY2aGtBQUFBQ202MDFxbUl4TWNGQjJqbHRjbTJyNTgwbG1XVjdkM0gxdDdaTTBZYXR5ZXB1SDJObFNtcDI4NXRiK3VOcldJNXp1dG5wbUxqMjMzYStwMktxUXFWTUhOMzhuZlo2bkYyYVhWdVpOb2p5cjBHUzliV3hXOUVKaGxoM2lLdjAxeWowbnUydDkzdjJWZmRheGwzMjdOT3Y0YzViZmpUc2tWUzBQdThwTC9BTnkvNG1QNW14RmREL2QvUC9TZHAwNk9Ed3RTclF6aFp6V2JrbTdXV2ZMY1k5NW51M3ExcGd3emFuaEE2QTBIOU0yc1RpSlNlMUoyU2RtMnNtMitYQ3k1R1UyMjdORFM2WDJqZkxrOVdOTzZIK2hPT0p3OG1rcFdzODdOOWZGUGRZUmJmc2FuVGV5LzZtT1d6cmJpcFZjSFJxUnVvVkxPYTYzRzZUOTkvd0FCWHRLelg1TFh3VnRFK2ZMVHcxUFJPeEhiblBic3RxNnE3K1BteHQzRXp5VTByb3VNVGEzZi93QitpUjBYbzdSdFdhOGpKdWNYZEp5bkY1WjdwSlhNWm0yelp3WWRKZVk0Uzh0YTY5U3RpSVlLRHRHVnRycmJ6ejVwSlhzVFh0M1lhNjlzbVNNTU50Nm00ZlkyVktlMys5ZGIvWnRheEhPZDF2dXpIeDI3N3RiVS9FMUtkV3BnNmp2c1hjZXF6U2FYVTdwazIrcXZRWkxVdk9HM290R01ycW5UblVlNkVaU2Y5S2IvQUNNSWRUSmJoV2JmU0ZMMEpvcDQrYzhSaUpQWnZheWU5NzdKOElwTXptZU1PTHA5UDdWYWNtU1VuWDFRaXBxcGg2c3Fiam5uMHJQbW52N3lPYmFucHNSYUxZNTJldXRta0tsSER4Z3BmdEt2UmNvNVpKZEpybC9rVmplV1d1eld4WW9yRTk1YTJpOVVhVHBLVlp5YzVxN3M3Slh6eTVpYks4UFRxVFhlL2xwWWVuUFIrTmpTVW5LbFd0djRwdHBOL3dBU1pNL21oUlNMYVhVUlgwbHM2ZGpQRjR5T0VVdG1uQlhsYnN1MzF1MWt1MFY3UnV0MU1XejU0eGVJaDg2YzFacDBhVHJVSEtNcVZtN3U5N2NWeVlyYmZzalU2Q3VPblBIUGVIbnEvb0tPS2pMRTRpVXBPY25aSjJ2Yks3ZmJkVzZoYTJ6RFM2U004VGt5UytzSlFlQXgwYVVaTjBxOWxudnp5VjdjVStQSmp6REtsWjB1b2lrVHZFcm1pdDJXUUFBQUJUdGFhRlNoaVk0Mm5HOGN0cmttbGJQa21zaXl2alp4OWJTK1BMR2FzTnFldWREeWUwb3kyN2ViYksvdGJyRWNKV3oxUEZ4M2p5aXRUNnpuakoxSmVkT001UDN5VFpsYU96VTZmZWJaN1duOVc5ajlLYU1xeWNxa0c1ckp2WmttN1padGJ6R0lzdnk2alIzbVp0SGY5a2ZqcStqSFRrcWNKcXBibzVTV2ZEZTdHVWN0KzdYeTMwYzFuanZ1a2RXc0hPcmdLbE9XU3FPWGs3MzVLejdOb3htWWlXem84ZHJhYWF6NitHbm9IVGYwUGF3MkloS0tqSnROTE5YNFc0cDcweWJSdjNVNmJVK3pmNldTSGpyUHJCSEV4VktrbnNKM2JlVGJ6dFpjaWExMllhM1d4bGpqWHdtNkdQb1VzRlFqaUZlRlNDVnRuYVRzdUtNZHBtZXplcm14WThGSXllc0l6NlRvajFjdTZmekoyczFmeE5GTFFUcFN4bEw2SEdTVjQ3NzcwM3RQUE8yenZKNzdkMUVjTGFpdjRLVjFxdzlTamlJWTJtcnFOdHJxY2VmSk5PMXlLekcyemIxdU8yUExHYXJiZXVWRFkybEdXM2J6YldWL2EzRWNWazlVeDhkL1ZFYW80aDFNYktwUHpwUW0zNzNFeXQ0YW1odk5zODJzcytIMGpSeHNLdEttM2xGeGxkVzg5U1dYY3l2YloxSzVxWjYyclg5bGEwTHBTV0FuUEQ0aUwyYjN1bHgzWFM0eGFNNWprNW1uenpwYlRqeVIyU0dKMXQycHhwNFdrNmpsKzlkZHlYaUlwOVd4YnFISzBWeFJ1Mk5hdEhWSytIakpLOVdsMG1vNTcxMGxIOWNDS3p0S3pXNGJaTVVXOVlhMmk5YnFTcHFOZFNqT0t0a3JwMjhCTlZXSHFOSzAyeWRwYVdIblBTR01qVlVYR2pTdHY0S0xja3ZhYko4UXByTnRWcUl0dCtXRzlnLytyVlBZL3dDTVNKK0Zmai8zcy9zbXRZUFJhdnNNeHI1YnVyK1RiOW1ycWg2SkQrcis1azJWNkQ1TUk3V1AwL0M5c2Y3MFpWOFMxdFgvQUxqSCs2MWxicXNnQUFHR0JpVVUxWnE2WktKaUpob3JRMkdUdXFGTy9QWlE1S1kwK1BmZUloNjBkSFVZVGRTTk9NWnl2ZHBadSs4YnNxNEtWbmVJZUQwRGhIbjVDSGNPVXE1MG1HZjZSYUJ3bnFJZHc1U1JwTU1UOEtRakZKV1NzbHVSRFlpSWp0RFh4V0FwVmZ2S2NaMjNiU1RKM21HRjhWTGZGRHorcU1OczdIa1liTGQydGxMTkRsTEQyZkZ0dHhmVlhSbENjWTA1VW91RlB6VTFrdXdiekNiWU1kb2lzeDRlSDFCaFBVUTdoeWxoN0poL3RiR0UwZFJwTzlPbkdEZTlwWjk0bVpsWmp3NDhmd3cyWEZOV2F1bnpJV2JieDNhWDFOaGI3WGtLZC9aUlBLVlBzK0xmZmpEMHBhUG93bTZrYWNWTjVOcFo1LzhBd2J5eXJneDF0dkVkMmNKZ0tWRzdwVTR3MjdiVmxhOXIydjN2dkV6dW5IaXBUZmpHMjc2eFdDcFZWYXBUak5MOTVKaUptQytLbC9pamQ4NFhSOUdsOTNUakMvSkpQdkV6TW9waHgwK0dHelloYTBxMmljUE9UbE9qQ1VueGNVMlR5bFRPREhNN3pFTm1qUWpCYk1JcU1Wd1NzaU4xbGF4V05vaDV4d1ZKVkhXVUVxajN5NHYzazdzWXhVaTNMYnU5YTFLTTR1RWxlTXNtbnVhSVpXckZvbUpmT0d3OEtjVkNFVkdLM0piaVVWcEZJMnErSytCcFRuR3BLQ2M0ZWEzdlhISWJvdGlyYVltZk1OZ2hZeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWYvWicpOyAqL1xyXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIC8qIHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi5idG57XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LWltZ3tcclxuICB3aWR0aDo0NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmxlZnR7XHJcbm1hcmdpbi10b3A6IDE0NXB4IDtcclxufVxyXG4ucmlnaHR7XHJcbm1hcmdpbi10b3A6IDE2MHB4IDtcclxufVxyXG4uaW5wdXQtYXJlYTF7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_mapservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mapservice.service */ "./src/app/services/mapservice.service.ts");




class MapComponent {
    constructor(mapservice) {
        this.mapservice = mapservice;
        this.opacity = 1;
        this.style = 'mapbox://styles/mapbox/streets-v11';
        this.lat = 33.628463;
        this.lng = 73.087581;
        this.geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {
                        message: 'Foo',
                        iconSize: [24, 24],
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: { lat: 62.324462890625, lng: 33.024695711685304 },
                    },
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Bar',
                        iconSize: [24, 24],
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: { lat: 73.2158203125, lng: 33.97189158092897 },
                    },
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Baz',
                        iconSize: [24, 24],
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: { lat: 51.29223632812499, lng: 34.28151823530889 },
                    },
                },
            ],
        };
        this.mapArray = [
            {
                lat: 72.99641,
                lng: 33.645992,
                tag: 'Islamabad',
                size: [51, 22],
            },
            {
                lat: 73.0169,
                lng: 33.5651,
                tag: 'Rawalpindi',
                size: [51, 22],
            },
            {
                lat: 71.5249,
                lng: 34.0151,
                tag: 'Peshawar',
                size: [51, 22],
            },
            {
                lat: 67.0011,
                lng: 24.8607,
                tag: 'Karachi',
                size: [51, 22],
            },
        ];
    }
    ngOnInit() {
        this.initializemapbox();
        ///////////////// This is the data coming from url into our frontend map //////////////////////
        // this.mapservice.readData()
        // .subscribe
        // (data=> {
        //     data.property.forEach(( data ) => {
        //       // create a DOM element for the marker
        //       const el = document.createElement('div');
        //       el.className = 'data';
        //       el.style.backgroundImage = 'url(/assets/asasamarker.png)';
        //       el.innerHTML = data.demand;
        //       el.style.fontStyle = 'bold';
        //       el.style.textAlign = 'center';
        //       el.style.color = 'white';
        //       el.style.width = '51px';
        //       el.style.height = '22px';
        //       el.style.fontSize = '10px';
        //       el.style.fontWeight = '700';
        //       el.style.fontFamily = 'Jersey M54';
        //       // el.style.fontSizeAdjust = '5px';
        //       new mapboxgl.Marker(el)
        //         .setLngLat([
        //           data.location_data.marker_data.mlongitude,
        //           data.location_data.marker_data.mlatitide
        //         ])
        //         //.setPopup(new mapboxgl.Popup().setHTML(data.tag))
        //         .addTo(this.map);
        //     });
        // })
    }
    initializemapbox() {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            accessToken: 'pk.eyJ1IjoibmFiZWVsc2FsZWVtIiwiYSI6ImNrY3p4MWhrZzBiNWwyd3FtOGx3aTZsbjEifQ.z6RLknl-YnJe2eKqMjPElg',
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [73.024955, 33.650753],
            zoom: 10,
        });
        this.mapArray.forEach((marker) => {
            // create a DOM element for the marker
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(/assets/icons/asasamarker.png)';
            el.innerHTML = marker.tag;
            el.style.fontStyle = 'bold';
            el.style.textAlign = 'center';
            el.style.color = 'white';
            el.style.width = marker.size[0] + 'px';
            el.style.height = marker.size[1] + 'px';
            el.style.fontSize = '10px';
            el.style.fontWeight = '700';
            el.style.fontFamily = 'quartzo';
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"](el)
                .setLngLat([
                marker.lat,
                marker.lng,
            ])
                .setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]().setHTML(marker.tag))
                .addTo(this.map);
        });
        // this.map.addSource
        this.mapboxOverlay();
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["FullscreenControl"]());
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NavigationControl"]());
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["GeolocateControl"]({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
        }));
    }
    mapboxOverlay() {
        const slider = document.getElementById('slider');
        const sliderValue = document.getElementById('slider-value');
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('myImageSource', {
                type: 'image',
                url: 'assets/i-10-islamabad.jpg',
                coordinates: [
                    [73.024955, 33.650753],
                    [73.041134, 33.659291],
                    [73.051520, 33.645466],
                    [73.035384, 33.636927],
                ],
            });
            this.map.addLayer({
                id: 'myImageSource',
                source: 'myImageSource',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                // Adjust the layers opacity. layer here is arbitrary - this could
                // be another layer name found in your style or a custom layer
                // added on the fly using `addSource`.
                // e.target;
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('myImageSource', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('f-7', {
                type: 'image',
                url: 'assets/f-7.png',
                coordinates: [
                    [73.042912, 33.722351],
                    [73.061492, 33.731482],
                    [73.070957, 33.719287],
                    [73.052850, 33.709633],
                ],
            });
            this.map.addLayer({
                id: 'f-7',
                source: 'f-7',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('f-7', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('phase-2', {
                type: 'image',
                url: 'assets/phase 2.png',
                coordinates: [
                    [73.114200, 33.565860],
                    [73.126250, 33.565800],
                    [73.125652, 33.552467],
                    [73.112955, 33.552230] // Bahria Town Phase III Phase 3  
                ],
            });
            this.map.addLayer({
                id: 'phase-2',
                source: 'phase-2',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('phase-2', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        // this.map.on('load', () => {
        //   // tslint:disable-next-line: no-unused-expression
        //   this.map.addSource('phase-3', {
        //     type: 'image',
        //     url: 'assets/phase 3.png',
        //     coordinates: [
        //       [73.104769, 33.563229], // Phase 2 Gulrez Housing Scheme
        //       [73.127969, 33.560081], // Phase 2 Bahria Town, Rawalpindi 
        //       [73.121127, 33.544900], // Soan River
        //       [73.093428, 33.550266] // Golden Jubilee Residential CHS
        //     ],
        //   });
        //   this.map.addLayer({
        //     id: 'phase-3',
        //     source: 'phase-3',
        //     type: 'raster',
        //     paint: {
        //       'raster-opacity': this.opacity,
        //     },
        //   });
        //   slider.addEventListener('input', (e) => {
        //     const input = (document.getElementById('slider') as HTMLInputElement)
        //       .value;
        //     this.map.setPaintProperty(
        //       'phase-3',
        //       'raster-opacity',
        //       parseInt('' + input + '', 10) / 100
        //     );
        //     // Value indicator
        //     sliderValue.textContent = '' + input + '' + '%';
        //   });
        // });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('e-16', {
                type: 'image',
                url: 'assets/maps_images/E-16-crop.png',
                coordinates: [
                    [72.877392, 33.652982],
                    [72.898120, 33.652946],
                    [72.898034, 33.637977],
                    [72.877349, 33.638049]
                ],
            });
            this.map.addLayer({
                id: 'e-16',
                source: 'e-16',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('e-16', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('e-18', {
                type: 'image',
                url: 'assets/maps_images/E-18-crop.png',
                coordinates: [
                    [72.834467, 33.635597],
                    [72.858070, 33.647030],
                    [72.877725, 33.620232],
                    [72.854551, 33.609438]
                ],
            });
            this.map.addLayer({
                id: 'e-18',
                source: 'e-18',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('e-18', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('enclave', {
                type: 'image',
                url: 'assets/enclave_map-crop.png',
                coordinates: [
                    [33.701923, 73.200201],
                    [33.703352, 73.264891],
                    [33.674785, 73.264236],
                    [33.674999, 73.196210]
                ],
            });
            this.map.addLayer({
                id: 'enclave',
                source: 'enclave',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('enclave', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mapservice_service__WEBPACK_IMPORTED_MODULE_2__["MapserviceService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 8, vars: 0, consts: [["id", "map", 1, "match-parent"], [1, "map-overlay", "top"], [1, "map-overlay-inner"], ["id", "slider-value"], ["id", "slider", "type", "range", "min", "0", "max", "100", "step", "0", "value", "100"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Layer opacity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".match-parent[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 600px;\r\n  }\r\n  .map-overlay[_ngcontent-%COMP%] {\r\n    font: bold 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n    position: absolute;\r\n    width: 20%;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    }\r\n  .map-overlay-inner[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n    border-radius: 3px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UsbUVBQW1FO0lBQ25FLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxtQkFBbUI7SUFDbkI7RUFFQTtJQUNBLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2gtcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcbiAgLm1hcC1vdmVybGF5IHtcclxuICAgIGZvbnQ6IGJvbGQgMTJweC8yMHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAubWFwLW92ZXJsYXktaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _services_mapservice_service__WEBPACK_IMPORTED_MODULE_2__["MapserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newpass/newpass.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newpass/newpass.component.ts ***!
  \**********************************************/
/*! exports provided: NewpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpassComponent", function() { return NewpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");








function NewpassComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewpassComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewpassComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewpassComponent_div_19_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewpassComponent_div_19_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class NewpassComponent {
    constructor(authServ, formBuilder, router, route) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
        });
        this.initialize();
    }
    initialize() {
        this.newpassForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get f() { return this.newpassForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.newpassForm.invalid) {
            return;
        }
        const user = {
            email: this.email,
            newpassword: this.newpassForm.value.password
        };
        this.authServ.newpassword(user).subscribe(data => {
            console.log("server response: ");
            console.log(data);
            const status = data.success;
            const msg = data.status;
            if (status) {
                alert(msg);
                this.router.navigate(['login-component']);
            }
            else {
                alert(msg);
            }
        });
    }
}
NewpassComponent.ɵfac = function NewpassComponent_Factory(t) { return new (t || NewpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NewpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewpassComponent, selectors: [["app-newpass"]], decls: 29, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-lock", "icon"], ["id", "password", "type", "password", "placeholder", "Enter new password", "formControlName", "password", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["id", "inputPass", "type", "password", "placeholder", "Confirm new password", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/login-component", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function NewpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Password change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewpassComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewpassComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newpassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{    \r\n  margin-left: 15px;\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n  margin-left: 15px;\r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  width: 55px;\r\n  font-size: 12px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:45%;\r\n  margin-left: 80px;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 220px ;\r\n}\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cGFzcy9uZXdwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBLG1CQUN1QixTQUFTO0NBQy9CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0VBQ2xCOztBQUNGO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFDQTtDQUNDLFdBQVc7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25ld3Bhc3MvbmV3cGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgY29sb3I6ICMzOGJhYTI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbmlucHV0eyAgICBcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuaTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOGJiYTM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuLndvcmQge1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMjAgcHg7XHJcbiAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xyXG59XHJcbi5lbWFpbElucHV0e1xyXG5tYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4uaW5wdXQtZmllbGQgeyBcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0cGFkZGluZzogMTBweDsgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuLmlucHV0LWljb25zIGkgeyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbi5he1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuLnYye1xyXG4gIG1hcmdpbi10b3A6IDQwcHggO1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbntcclxuXHRoZWlnaHQ6YXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJ0bntcclxuICAvKiBwYWRkaW5nOiAwcHg7ICovXHJcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuMXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWltZ3tcclxuICB3aWR0aDo0NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmxlZnR7XHJcbm1hcmdpbi10b3A6IDE0NXB4IDtcclxufVxyXG4ucmlnaHR7XHJcbm1hcmdpbi10b3A6IDIyMHB4IDtcclxufVxyXG4uaW5wdXQtYXJlYTF7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewpassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newpass',
                templateUrl: './newpass.component.html',
                styleUrls: ['./newpass.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AuthenticationService {
    // currentUser = {};
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        // API_URL: string = 'http://localhost:4000';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.url = 'https://shaisecommercestore.herokuapp.com/api'; // environment.url;
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }
    getAll() {
        return this.httpClient.get(`${this.url}/user`);
    }
    // Function to Register the new user
    register(user) {
        return this.httpClient.post(`${this.url}/users/signup`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    /////////////////////////////////////
    /* API Call to verify otp code */
    //Verifying the email address while signing the user up
    verifyOTPEmail(user) {
        return this.httpClient.post(`${this.url}/users/verifyemail`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Verifying the user using otp code to his gmail to change his/her password
    verifyOTPCode(user) {
        return this.httpClient.post(`${this.url}/users/verifyotpcode`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Adding new password after forgetting the old password
    newpassword(user) {
        return this.httpClient.post(`${this.url}/users/newpassword`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // Function to Login the already existed user
    login(user) {
        console.log('Hello', user);
        return this.httpClient.post(`${this.url}/users/login`, user);
        // .subscribe((data: any) => {
        //   localStorage.setItem('access_token', data.token)
        //   this.getUserProfile(data._id).subscribe((data) => {
        //     this.currentUser = data;
        //     this.router.navigate(['users/profile/' + data.msg._id]);
        //   })
        // })
    }
    verifyEmail(body) {
        return this.httpClient.post(`${this.url}/users/verifyemail`, body);
    }
    getAccessToken() {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }
    ////////// Logout Function ////////////////
    logout() {
        if (localStorage.removeItem('access_token') == null) {
            this.router.navigate(['users/login']);
        }
    }
    ///////////////////////////////////////////
    ///////// Get Profile Function ////////////
    getUserProfile(id) {
        return this.httpClient.get(`${this.url}/user/profile/${id}`, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ///////////////////////////////////////////
    ///////// Error Handling /////////////////
    handleError(error) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/mapservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/mapservice.service.ts ***!
  \************************************************/
/*! exports provided: MapserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapserviceService", function() { return MapserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';



// import { Map } from './map';
class MapserviceService {
    constructor(http) {
        this.http = http;
        this.apiurl = "https://asasa.com/api/property";
    }
    readData() {
        return this.http.get(this.apiurl);
    }
}
MapserviceService.ɵfac = function MapserviceService_Factory(t) { return new (t || MapserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MapserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapserviceService, factory: MapserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");








function SignupComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_19_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
} }
function SignupComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_24_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_24_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
} }
function SignupComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_30_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_30_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SignupComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
    }
    // registerresponse: RegisterResponse;
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    registerUser() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value));
        console.log(this.registerForm.value);
        this.authService.register(this.registerForm.value).subscribe((data) => {
            console.log(data);
            // this.registerresponse = data;
            const email = this.registerForm.value.email;
            const msg = data.msg;
            const status = data.status;
            // console.log('Status: ' + status);
            if (status) {
                this.registerForm.reset();
                alert(msg);
                this.router.navigate(['signupotp-component', email]);
            }
            else {
                alert(msg);
            }
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 45, vars: 13, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Username", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["type", "text", "formControlName", "email", "id", "email", "placeholder", "Enter Email", 1, "form-control", "emailInput", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-lock", "fa-lg"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "form-control", "inputs", 3, "ngClass"], ["password", ""], ["type", "password", "name", "confirm", "id", "confirm", "placeholder", "Confirm Password", 1, "form-control", "inputs"], ["confirm", ""], ["id", "message"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], [1, "lastdiv"], ["routerLink", "/login-component"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_14_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_div_19_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignupComponent_div_24_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignupComponent_div_30_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Already Registered! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Login!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".lastdiv[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 40px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  color:#38baa2;\r\n  }\r\nh2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 10px;\r\n}\r\n.input-field[_ngcontent-%COMP%] { \r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  margin-left: 40px;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:45%;\r\n  margin-left: 80px;\r\n}\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 160px ;\r\n}\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBLG1CQUN1QixTQUFTO0NBQy9CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0VBQ2xCO0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjtBQUNBOzs7Ozs7OztvdVFBUW91UTtBQUNsdVEscUJBQXFCO0FBQ25CO2dCQUNZO0FBQ2Q7O0dBRUM7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXN0ZGl2e1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IzM4YmFhMjtcclxuICB9XHJcbmgye1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuaTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOGJiYTM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuLndvcmQge1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMjAgcHg7XHJcbiAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xyXG59XHJcbi5lbWFpbElucHV0e1xyXG5tYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uaW5wdXQtZmllbGQgeyBcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0cGFkZGluZzogMTBweDsgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuLmlucHV0LWljb25zIGkgeyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbi5he1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuLnYye1xyXG4gIG1hcmdpbi10b3A6IDQwcHggO1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbntcclxuXHRoZWlnaHQ6YXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4vKiBcclxuLmJnLWltYWdlIHsgICAgXHJcbiAgaGVpZ2h0OiA2NTBweDsgXHJcbiAgd2lkdGg6IDUwMHB4OyBcclxuICBtYXgtd2lkdGg6IDY1MHB4OyBcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9hc2FzYTA2LnBuZyk7XHJcblxyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeEFRRUJVUEVCRVdFaEFRRlJZWUZSZ1ZGaFVWRlJnWUZSWVdGaGNYRmhVWUhTZ2dHQnNsR3hZVklURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHaTBsSHlVdExTMHRMUzB0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFPRUE0UU1CRVFBQ0VRRURFUUgveEFBYkFBRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUJRWUJCQWNEQXYvRUFFUVFBQUlCQWdJR0JRZ0hCd01GQVFBQUFBQUJBZ01SQkNFRkJoSXhRVkVpWVhHUnNSTXlORk55Z1pMUkZCVVdNNkhCOENOU1luT0NzdUVIb3NJMVFrT2o4U1QveEFBYkFRRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUFRTUNCQVVHQi8vRUFESVJBUUFDQVFNREFRWUZBd1VCQUFBQUFBQUJBZ01FRVJJRklURkJGQlV5TTFHQkV5SmhjYkZDVXBFak5LSFI4RVAvMmdBTUF3RUFBaEVERVFBL0FPNGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdHd01LVjl3UkU3K0gwRWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSHpPU1NiYnNsbTI5eUNKbUlqdW9tc3VzanJYbzBXMVNXVW54bjhvK0piV3JnNjNYYzU0VThOUFFPbjU0WjdMdk9pOThlSzY0L0ltMWQxT2sxbHNNN1duZUhRY0hpNFZZS3BUa3BSZjZzK1RLdHRub2NlU3VTT1ZYdWlGaklBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJCYTNZeXBSdysxVGxzeWM0cTYzMnpmNUdWWWhwYTdKZkhpM3JLbWZYK0w5ZlA4UGtXOEljVDIzUDhBM1NzMnFHbEtsU0ZXVmVwZFFzN3lzckt6dm43aXUwT3BvTlJlMWJUa253aHRaTllYaUg1T25sUlh1Yyt0OGwxR1ZhN05MV2EyY3M4YStQNVFCbTVvRXBEUStscW1HbnRRZDR2em92ZEw1UHJJbU4yeHA5VmZEYmVyb21pdEowOFJEYnB2dFhHTDVQNWxNeHM5SGh6MHpWM3EzU0Y3SUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDdWE5ZWpMK1pId2taMDh1ZDFQNUtnRnJ6MzZQUlZwS0xnbTFHVFRhNE5yZGZtTm1VWHRGZU1UMmVZWUFTQUFObkFZMnBRbXFsT1ZwTHVhNU5jVVJNYnJjT1cySzNLcm9XZ3RPVThUSExvMVV1bEJ2OFZ6UlZOZG5vdE5xNjVvL1ZMbUxiQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUt4cjNXajVDTUxyYWMwMHVOa25kL2laMGN6cWQ0akZ4VVF0Y0FBQUFBQUFCNlVhMG9TVTRTY1pSM05ieU5tVkwycE84TDdxN3JISEVXcDFPalcvQ1hXdXZxSzdWMmVnMG11cmwvTGJ5c0NNSFFaQUFBQUFBQUFBQUFBQUFBQUFBQUNCMWgxaWhoK2hDMDYzTGhIcmw4ak90ZDJocTliWEYrV084cUJpY1JPckp6cVMycFMzdC9ySkZrUnM4L2t5V3ZQS3p5SllkbTVvN1JsYkVPMUtON2IzdWl1MS9rUk03THNPbXZsK0Zhc0RxWFRXZGFvNVBsSG94NzkvZ1lUZVhXeGRMckh4eWxxZXJtRWlyZVJUN2J2eE1lVXR1TkZnaitsbWVydUVlWGtZcnN1aHlsTTZMQlA5TUl6RzZtVVhuU25LRDVQcFIvSFA4U1l2TFZ5OUxwUHdUc3F1bGREVnNNLzJrZWp3a3M0djVQdE00dEV1Vm4wbVhGNWp0OVVlWk5abE8yYXlhQkV6SGRjOVhOWjlxMUhFTzBzbEdmQjlVdVQ2eXUxWGIwZXZpMzVNbmxiVXl0MW1Ra0FBQUFBQUFBQUFBQUFBQXhjQ3A2eDYwS042T0hkNVpxVTF1WFZIbStzc3JWeWRacjRyK1RIL2xTNVNiZDI3dDcyODIrMHNjT1ptWjNsZ0NhMWQwRkxFeTJwWGpSaTgzKzkvREg1bU5wMmIyajBrNXAzbnc2RmhjTkNuRlFoRlJpdHlSVEwwTk1kYVJ0V0hyY015NFFYQ1FENHEwb3lUakpLVVdyTk5YVFhKb1JMRzFZdEcwd29lcytyM2tQMnRLN290NXJlNGY0TGEyM2NIVzZMOFA4QVBYd3JwbTVvQ0ZuMWQxbWRPMUt1NzArRXVNZXA4MTRGZHF1cm85Zk5meVpQQzhRcUtTVFRUVDNOYnZjVnU1Rm9tTjRmWVNBQUFBQUFBQUFBQUFBQW9lc21zc3FqbFJvdHhwcTZrOTBwV3lhNmtXVnE0V3MxMDJuaFR0Q3NsamxBRzFvekJTcjFZMG83NVBOOGtzMis0aVoyVzRNVTVja1ZoMUhCNGFOS0VhY0ZhTVZaZk1wbVhxc2VPTWRZclY3R015eVJlTjBuczVRM1h0dFd2M0xpYUdYVzk1cmo3eTE4bWZqNFF0REdWcW1JcVVLdWNZcmFUVW5tcnBLNlZrbjJEVXphTlBYTlcwN3o1alpvWXM5NzVyWXJlbmZ0S0gxZzBuVnBUVXNIVmxLVk83cXhpM0tDVzlPU1dTNG05MHVNbDZUR283YitKYStxenpTKytHM2YxaElhcGE1Vk1RNVFyd1ZvVzZVZCtlNjhlUGF1NHYxdGNlbTR4TnZMWjBYVUxaTzE0KzY2UWxkWFR1bnVLYXpFeHZEcmJsU21wSnhrcnhhczA5elRKUk1STWJTNWpwN1JydzFaMC84QXRlY0gvQy96Vm1pK3R0M21OWGcvQnliZW5vamlXcjJBbnoyVGVyK3NNOE05aWQ1VVh2WEdQWEg1R0ZxN3QvU2EyMktlTnU4Znc2SlNxS1NVbHVrazEyTXFlaXJNV2plSDJFZ0FBQUFBQUFBQUFBQWFrOUcwRzd1bEJ0NzNzeEozbFZPREhQb3BtdStIaFRxMDFDQ2luQjMyVWx4Nml5amk5VHBXdHE3UXJabTVpNDZnNFRLcFhlKyt3dTVTZmlpdTh1ejBySDJtL3dCbHdLM1pSbWxzVGExTmNjMzJjdjF5T1gxSFVUU3NVajFVWmIvMG9lam8rUGxwVjNLVFRqczdMODFkaS9XOW1sWFZYL0JqRFdJMzM4K3JTcnA2L2lmaXpNN2JlRlgwNVdWR3Q1WEQxR3ZLSjN6NlNhc21tbm55ZVo2L3A5WnpZWXBucjQyZWUxa3hoejg4TnZLcjE1YjdjVHF6V1BFTldrK3NyRnFuQ0VsK3huc3kyV3EwWkpkSjJ2Q2NNN3F6ZnZ0d1BKOWJ2YUo0MzcvMnU1bzZ4TmQ2L2RlZEJZelpsNUdUdXBlYjJyZmJ0M25QNmRxWm1aeHo0OUhXMCtUdnhsWUVkbHVxMXIxaE5xZ3F2R2xKZDBuYnhzWjBudTVuVThlK1BuOUZETFpjQk9hbjBJenhPek9La3RpV1RTYTRjR1kyOE43cDFhMnk3VDlGNityS0hxWWZESDVGVzh1OUdESDZRMjRvaGJIWmtKQUFBQUFBQUFBQUFBQXdCUjlmL3ZhZnNQeExhT0gxWDRxcXNadVM2SnFaQzJFai9GS1Qvd0J6WGdrVTM4dlNkUGpiRENkWmkzbFAwbnBhbkNkV3JVbHN4aFUySHZlYXNsa2NUVjZYTm0xUEdzYnVYbHoxcmFac3Ftc3VzRHF5VkttMnFTU2VUODY5bXJyaGJrZC9vL1RLNGE4OGtiMi9oeDlmcTdaSjQwbnNnSjF6MERsUlNXcFdxa1RLNmxWeDFaMGZVbGczQ28zQ0ZTZTFIWnluczlGK2R3VGEzVzU4enhmV05aU3VwM3JHKzBiZm83bWx4VCtGM2JlQXBWNk5lTXBTalVwd25lRGQxVVVjbmJhNHQ3bnpOS3VwdzJ0V2E5cDNqZjZTc3BNMHZFdWtvN3J0bzNXU0NlRXJKOElOOTJhOERLdmxyYXV1K0cwT1lGN3lxZjFJOUwvb2w0eE1MK0hSNlo4NzdPaGxUMFFBQUFBQUFBQUFBQUFBQUJnQ2o2Ly9BSHRQMkg0bHRQRGg5VitLcXJHYmt1aWFsMUw0U1A4QURLU2ZmZndhS2JlWG8rbjIzd1FuV1l0LzFjajF2eGNzTGo2MFpRVlNsVWxDcHN5eXoyVTlwUHR1dmNia2FTTStPTFZuYTBkbm05Vk00ODlxejQ4dFRBYUxsaTZjblNxUWNJdlpoNVJTYzFrbmFVMHNySnJkZE0xTS9VYTZPOVl5Vm5mMVZWMDA1WW5qS0kwdG8rdGhuYXJHeWJhakpPOFpXNVA1blUwdlVNT3BqZWsvWnJYMDFzZnhJcXJWTnVmQldqcE9CMWh3MHFOTitWakY3TVk3TW1sSk5KS3pSOCsxbWcxRVpyZmxtWFhya2lhN1EzS2E4cFVoRDk2Y1ZseXVydnV1elMwc1RiUFdOdlZGUHpaSWhma2V0OE80ajlZUFJhMzh1WGdaVjhxTlQ4cTM3T1hGN3lhd2FrZWwvd0JFdkdKaGZ3NlBUUG5mWjBJcWVpQUFBQUFBQUFBQUFBQUFBTUFVZlgvNzJuN0Q4UzJuaHcrcS9GVlZqTnlWdzFCeGlYbEtEZS9wcnVTbDRJcnZEczlLeSthU3VKVzdDbC82azZ2UEUwVlhwUnZWbzN1bHZsRGpibTF2N3piMHViaGJqTG1kUjAwM3J6cjVqK0hQOVZOWUZobTZGWEtuS1YxTGZadXl6NnNrYW5XK20yenhHYW5tSS80YzdUNWRsM3hNNmNvTlZWRnc0N1ZtdnhQSVliNUszLzA5OTIxTjZ6SGR5VFMrSnB5clZIU2lvVTlyb3BacXl5dXUyMS9lZlJOSlc5Y05ZeVR2TFVtc2I5alFtRmxXeEVJckt6Mm0rU2puK1Z2ZVU5U3p4ZzA5cG4vMjZZMmgyN1ZUUjdsTDZUSmRGSzFQcnZ2bDJXeVhhenpQUzlOTlluSmFPOCtIUzBPR2QrZHZzdFIxM1RSK3NIb3RiK1hMd0pyNVVhbjVWdjJjdUwzbEU5cVUvd0Q5YTY0Uy9KL2tZWDhPaDB6NTMyZEVLbm9nQUFBQUFBQUFBQUFBQUFEQUZIMS8rOXArdy9FdHA0Y1BxdnhWVll6Y2xzNlB4a3FOV05XTytENzF1YTk2dVJNYnJjT1djZDR0RHFHQnhjSzFPTlNEdkdTN3VhZldVekcwdlU0c2xjbFl0RFlhSVdLUHJYL3A3U3hMZFhEdFVhanpjYmRDVDU1ZWErei9BQ2JlTFZUU05yZDRjelVkUGkwOHNmYWYrRlgxaDBGcE40ZU5CMFpTdGxOdzZlMm9wV2EyYysyNjNtaHBOSmh4YXEyV2ZFK1AwYVZzT2FuYWEvNDdxN2c5UmRJVlhaWWFjZXVhMkYvdXNkMjJveFY5V05NV2EzaXMvZnM2RnFoL3Ayc05lZUptcHVWcndpdWoyU2x2YTZsYjNuTTFWNlo1amVQRGZ3YUNZbmxrL3dBTC9HS1Nzc2tpbDBvOE1oS1AxZzlGcmZ5NWVCTmZLalUvS3Qremx4ZThvbmRTL1M0K3pMd01MK0cvMDM1MzJkRktub3dBQUFBQUFBQUFBQUFBQURBRkgxLysrcCt3L0V0cDRjUHF2eFZWWXpja0NKUzJyK201NFdmR1ZLVDZVZnpqMStKamF1N2QwbXJuRFA2T2g0UEdRclFWU25KU2kvMVo4bVZURDBXUExYSkc5R3dRc0FBQUQ0cTFWRlhrMGx6ZVFSTXhIbDlvQ1AxZzlGcmZ5NWVCTmZLblUvS3Qremx4ZThvbmRTL1M0K3pMd01MK0cvMHo1MzJkRktub3dBQUFBQUFBQUFBQUFBQURBRkcxL2Y3YW43RC9BTGkyamhkVitPcXJtYmxBQUliT0J4MVdoTGJwU2NYeDVQdFhFaVkzWFljMThVNzBsYU1EcnFyV3IwOCtjTjN3djVtRTBkWEYxV1AvQUtSL2hLMHRhc0c5OVJ4ZlhDZmlsWXg0UzI0NmhnbjFmVTlhY0d2L0FDMzdJVCtRNHlUcjhFZjFmeWpNYnJwQksxR201UG5QSmR5ek1vbzFjblZhUjJwQ3RZclMxV3ZVaktyTzhZeVRzc29yUGd1ejNtWEhidzUxdFZmSmVKdlBiZGVsck5nL1hMNFovSXI0eTdudDJDUDZ2NWFlbWRZTUxVdzlXRUtxY3BRa2t0bVdiYTYwVEZaM1ZaOVpodGptSWxRUzE1NU82bCtseDltWGdZWDhOL3BuenZzNktWUFJnQUFBQUFBQUFBQUFBQUFHQUtycmJvYXZYcVFuU2lwSlJzODByTzkrUGIrQlpXWWh5dGZwY21XMFRWQS9aZkYrclh4SXk1UTUvdS9QOUQ3TDR2MWErSkRsQjd2ei9SbjdMWXoxYStLSTV3bjNkbitoOWxzWDZ0ZkZFYzRSN3V6ZlJqN0w0djFhK0tJNXdlN3MzMForeTJMOVd2aVE1UWU3cy8wUHN2aS9WcjRrT1VIdTdQOEFSajdMNHYxYStKRG1lNzgvMForeStNOVd2aVE1UWU3cy93QkdQc3ZpL1ZyNG9qbEI3dnovQUVQc3ZpL1ZyNGtPY0h1L1A5RDdMNHYxYStKRG5DZmQrYjZKYlZqUVdJbzRoVktrVkdLakpiMDgzMkdOclEyOURwTW1MSnl0NFhNcmRsZ0RJR0FNZ0FBQUFBQStaeVNWMjdKYzl3Uk03TkJhYndyZXo1ZUYrMzh5ZU1xUGFzTXp0eWh2eGQ4eUY4VHY0YW1MMHBRcFBacVZZeGZKdk1uYVZWOCtPazdXbUhoOWY0VDE4TzhjWlllMTRQN29iZUR4dEtzbktsTlRTZG0xekkybUZ0TWxiOTZ6dXhpOUlVcVAzdFNNTDdydlB1SjJtVVh6VXA4YzdHRXg5S3Q5MVVqTzIrei9BQ0d5YVpxWCtDZDN2VXFLS2NwTktLemJlU1JIZG5hWXJHOG8vd0N2OEo2K0hlVHhscisxNFBIT0dZYWR3cmFTclFiYnNzK0xIR1V4cXNNenRGb2I4cHBLN2RrczJ5TzYvZmFOMml0TjRYYTJmTHd2Mi9tVHhsUjdWaDMyNVEzNHUrYTNFTDRuZGtKYStMeDFLa3IxSnhoZm03ZHcyVjN5MHA4VTdQbkNhUm8xdnU2a1p0Y0U4KzRuYVVVelV2OEFETGFaQzFvNGpUR0hweTJaMW9LUzNxK1pPMHFMYW5GV2RyV2h0VUs4Wngyb1NVb3ZpbmRCYlc4V2plck5hckdDY3BOUml0N2JzdThndGFLeHZMVnd1bGFGV1d6VHF4bExrbm1UTVNycHFNZDUycmJkOVl2U1ZHaTdWYWtZTjhHOCs0UkVwdm54NDUydGJaNzRiRVFxUjJvU1VvdmluY2huUzliUnZWNmhrQUFBQUNtNjAxcW1JeE1jRkIyamx0Y20ycjU4MGxtV1Y3ZDNIMXQ3Wk0wWWF0eWVwdUgyTmxTbXAyODV0Yit1TnJXSTV6dXRucG1MajIzM2ErcDJLcVFxVk1ITjM4bmZaNm5GMmFYVnVaTm9qeXIwR1M5Yld4VzlFSmhsaDNpS3YwMXlqMG51MnQ5M3YyVmZkYXhsMzI3Tk92NGM1YmZqVHNrVlMwUHU4cEwvQU55LzRtUDVteEZkRC9kL1AvU2RwMDZPRHd0U3JRemhaeldia203V1dmTGNZOTVudTNxMXBnd3phbmhBNkEwSDlNMnNUaUpTZTFKMlNkbTJzbTIrWEN5NUdVMjI3TkRTNlgyamZMazlXTk82SCtoT09Kdzhta3BXczg3TjlmRlBkWVJiZnNhblRleS82bU9XenJiaXBWY0hScVJ1b1ZMT2E2M0c2VDk5L3dBQlh0S3pYNUxYd1Z0RStmTFR3MVBST3hIYm5QYnN0cTZxNytQbXh0M0V6eVUwcm91TVRhM2Yvd0IraVIwWG83UnRXYThqSnVjWGRKeW5GNVo3cEpYTVptMnpad1lkSmVZNFM4dGE2OVN0aUlZS0R0R1Z0cnJieno1cEpYc1RYdDNZYTY5c21TTU1OdDZtNGZZMlZLZTMrOWRiL1p0YXhIT2QxdnV6SHgyNzd0YlUvRTFLZFdwZzZqdnNYY2VxelNhWFU3cGsyK3F2UVpMVXZPRzNvdEdNcnFuVG5VZTZFWlNmOUtiL0FDTUlkVEpiaFdiZlNGTDBKb3A0K2M4UmlKUFp2YXllOTc3SjhJcE16bWVNT0xwOVA3VmFjbVNVblgxUWlwcXBoNnNxYmpubjByUG1udjd5T2JhbnBzUmFMWTUyZXV0bWtLbEhEeGdwZnRLdlJjbzVaSmRKcmwva1ZqZVdXdXpXeFlvckU5NWEyaTlVYVRwS1ZaeWM1cTdzN0pYenk1aWJLOFBUcVRYZS9scFllblBSK05qU1VuS2xXdHY0cHRwTi93QVNaTS9taFJTTGFYVVJYMGxzNmRqUEY0eU9FVXRtbkJYbGJzdTMxdTFrdTBWN1J1dDFNV3o1NHhlSWg4NmMxWnAwYVRyVUhLTXFWbTd1OTdjVnlZcmJmc2pVNkN1T25QSFBlSG5xL29LT0tqTEU0aVVwT2NuWkoydmJLN2ZiZFc2aGEyekRTNlNNOFRreVMrc0pRZUF4MGFVWk4wcTlsbnZ6eVY3Y1UrUEpqekRLbFowdW9pa1R2RXJtaXQyV1FBQUFCVHRhYUZTaGlZNDJuRzhjdHJrbWxiUGttc2l5dmpaeDliUytQTEdhc05xZXVkRHllMG95MjdlYmJLL3RickVjSld6MVBGeDNqeWl0VDZ6bmpKMUplZE9NNVAzeVRabGFPelU2ZmViWjdXbjlXOWo5S2FNcXljcWtHNXJKdlprbTdaWnRiekdJc3Z5NmpSM21adEhmOWtmanErakhUa3FjSnFwYm81U1dmRGU3R1VjdCs3WHkzMGMxbmp2dWtkV3NIT3JnS2xPV1NxT1hrNzM1S3o3Tm94bVlpV3pvOGRyYWFhejYrR25vSFRmMFBhdzJJaEtLakp0TkxOWDRXNHA3MHliUnYzVTZiVSt6ZjZXU0hqclByQkhFeFZLa25zSjNiZVRienRaY2lhMTJZYTNXeGxqalh3bTZHUG9Vc0ZRamlGZUZTQ1Z0bmFUc3VLTWRwbWV6ZXJteFk4Rkl5ZXNJejZUb2oxY3U2ZnpKMnMxZnhORkxRVHBTeGxMNkhHU1Y0Nzc3MDN0UFBPMnp2Sjc3ZDFFY0xhaXY0S1YxcXc5U2ppSVkybXJxTnRycWNlZkpOTzF5S3pHMnpiMXVPMlBMR2FyYmV1VkRZMmxHVzNiemJXVi9hM0VjVms5VXg4ZC9WRWFvNGgxTWJLcFB6cFFtMzczRXl0NGFtaHZOczgyc3MrSDBqUnhzS3RLbTNsRnhsZFc4OVNXWGN5dmJaMUs1cVo2MnJYOWxhMExwU1dBblBENGlMMmIzdWx4M1hTNHhhTTVqazVtbnp6cGJUanlSMlNHSjF0MnB4cDRXazZqbCs5ZGR5WGlJcDlXeGJxSEswVnhSdTJOYXRIVksrSGpKSzlXbDBtbzU3MTBsSDljQ0t6dEt6VzRiWk1VVzlZYTJpOWJxU3BxTmRTak9LdGtycDI4Qk5WV0hxTkswMnlkcGFXSG5QU0dNalZVWEdqU3R2NEtMY2t2YWJKOFFwck50VnFJdHQrV0c5Zy8rclZQWS93Q01TSitGZmovM3Mvc210WVBSYXZzTXhyNWJ1citUYjltcnFoNkpEK3IrNWsyVjZENU1JN1dQMC9DOXNmNzBaVjhTMXRYL0FMakgrNjFsYnFzZ0FBR0dCaVVVMVpxNlpLSmlKaG9yUTJHVHVxRk8vUFpRNUtZMCtQZmVJaDYwZEhVWVRkU05PTVp5dmRwWnUrOGJzcTRLVm5lSWVEMERoSG41Q0hjT1VxNTBtR2Y2UmFCd25xSWR3NVNScE1NVDhLUWpGSldTc2x1UkRZaUlqdERYeFdBcFZmdktjWjIzYlNUSjNtR0Y4VkxmRkR6K3FNTnM3SGtZYkxkMnRsTE5EbExEMmZGdHR4ZlZYUmxDY1kwNVVvdUZQelUxa3V3YnpDYllNZG9pc3g0ZUgxQmhQVVE3aHlsaDdKaC90YkdFMGRScE85T25HRGU5cFo5NG1abFpqdzQ4Znd3MlhGTldhdW56SVdiYngzYVgxTmhiN1hrS2QvWlJQS1ZQcytMZmZqRDBwYVBvd202a2FjVk41TnBaNS84QXdieXlyZ3gxdHZFZDJjSmdLVkc3cFU0dzI3YlZsYTlyMnYzdnZFenVuSGlwVGZqRzI3NnhXQ3BWVmFwVGpOTDk1SmlKbUMrS2wvaWpkODRYUjlHbDkzVGpDL0pKUHZFek1vcGh4MCtHR3pZaGEwcTJpY1BPVGxPakNVbnhjVTJUeWxUT0RITTd6RU5talFqQmJNSXFNVndTc2lOMWxheFdOb2g1eHdWSlZIV1VFcWozeTR2M2s3c1l4VWkzTGJ1OWExS000dUVsZU1zbW51YUlaV3JGb21KZk9HdzhLY1ZDRVZHSzNKYmlVVnBGSTJxK0srQnBUbkdwS0NjNGVhM3ZYSElib3RpcmFZbWZNTmdoWXlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFmL1onKTsgKi9cclxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAvKiB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59ICovXHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxlZnQtaW1ne1xyXG4gIHdpZHRoOjQ1JTtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4ubGVmdHtcclxubWFyZ2luLXRvcDogMTQ1cHggO1xyXG59XHJcbi5yaWdodHtcclxubWFyZ2luLXRvcDogMTYwcHggO1xyXG59XHJcbi5pbnB1dC1hcmVhMXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/signupotp/signupotp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/signupotp/signupotp.component.ts ***!
  \**************************************************/
/*! exports provided: SignupotpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupotpComponent", function() { return SignupotpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");








function SignupotpComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code should not be greater than 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be a valid number sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupotpComponent_div_19_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupotpComponent_div_19_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupotpComponent_div_19_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupotpComponent_div_19_div_4_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SignupotpComponent {
    constructor(authServ, formBuilder, router, route) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
            // console.log(this.email);
        });
        this.initialize();
    }
    initialize() {
        this.signupotpForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    get f() { return this.signupotpForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signupotpForm.invalid) {
            return;
        }
        const user = {
            email: this.email,
            otpcode: this.signupotpForm.value.code
        };
        this.authServ.verifyOTPEmail(user).subscribe(data => {
            console.log(data);
            const status = data.status;
            const msg = data.msg;
            if (status) {
                alert('\nMessage: ' + msg + '\n\n Status: ' + status);
                this.router.navigate(['']);
            }
            else {
                alert(msg);
            }
        });
    }
}
SignupotpComponent.ɵfac = function SignupotpComponent_Factory(t) { return new (t || SignupotpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SignupotpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupotpComponent, selectors: [["app-signupotp"]], decls: 25, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["type", "text", "formControlName", "code", "name", "code", "id", "code", "placeholder", "Enter 6-digit verify code", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/register-component", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SignupotpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Verification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupotpComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupotpComponent_div_19_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupotpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.code.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.code.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  }\r\n  \r\n  .btn1[_ngcontent-%COMP%]{\r\n    \r\n    width: 100px;\r\n    font-size: 13px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n    \r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%]{\r\n    color: #38baa2;\r\n    font-weight: 600;\r\n    margin-left: 200px;\r\n    margin-top: -10px;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]{\r\n    border: 2px solid #0000001a !important;\r\n    border-radius: 50rem!important;\r\n  }\r\n  \r\n  i[_ngcontent-%COMP%]:before {\r\n    position: relative;\r\n    top: 30%;\r\n    font-size: 22px;\r\n    color: #38bba3;\r\n    margin-right: 1px;\r\n  }\r\n  \r\n  .word[_ngcontent-%COMP%] {\r\n      color: #38baa2;\r\n      letter-spacing: 1px;\r\n      padding: 20 px;\r\n      font: bold 14px arial,sans-serif;\r\n      \r\n  }\r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n  margin-left: 12px;\r\n  }\r\n  \r\n  .input-field[_ngcontent-%COMP%] { \r\n      width: 100%; \r\n      padding: 10px; \r\n      text-align: center; \r\n  }\r\n  \r\n  .input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n      position: absolute; \r\n  }\r\n  \r\n  .input-container[_ngcontent-%COMP%] { \r\n      display: flex;\r\n      width: 100%;\r\n      margin-bottom: 15px;\r\n    }\r\n  \r\n  .a[_ngcontent-%COMP%]{\r\n      text-align: left;\r\n  }\r\n  \r\n  .vl[_ngcontent-%COMP%]{\r\n    border-left: 2.2px solid #38baa2;\r\n    height: 250px;\r\n    margin-left: 22px;\r\n  }\r\n  \r\n  .v2[_ngcontent-%COMP%]{\r\n    margin-top: 40px ;\r\n    color: #38baa2;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .login[_ngcontent-%COMP%]{\r\n      height:auto;\r\n    min-height: 100vh;\r\n  }\r\n  \r\n  .left-img[_ngcontent-%COMP%]{\r\n    width:45%;\r\n    margin-left: 80px;\r\n  }\r\n  \r\n  .inputs[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n  }\r\n  \r\n  .left[_ngcontent-%COMP%]{\r\n  margin-top: 145px ;\r\n  }\r\n  \r\n  .right[_ngcontent-%COMP%]{\r\n  margin-top: 220px ;\r\n  }\r\n  \r\n  .input-area1[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwb3RwL3NpZ251cG90cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0Qyw4QkFBOEI7RUFDaEM7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUNBO01BQ0ksY0FBYztNQUNkLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsZ0NBQWdDO01BQ2hDLHVCQUF1QjtFQUMzQjs7RUFDQTtFQUNBLGlCQUFpQjtFQUNqQjs7RUFDQTtNQUNJLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCOztFQUNBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUNBLG1CQUMwQixTQUFTO01BQy9CLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCOztFQUNGO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLFdBQVc7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztFQUNBOztJQUVFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cG90cC9zaWdudXBvdHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRue1xyXG4gICAgLyogcGFkZGluZzogMHB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bjF7XHJcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xyXG4gIH1cclxuICBcclxuICBoMntcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDAxYSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG4gIH1cclxuICBpOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMzhiYmEzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgfVxyXG4gIC53b3JkIHtcclxuICAgICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgLyogYmFja2dyb3VuZDouICNmZmY7ICovXHJcbiAgfVxyXG4gIC5lbWFpbElucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAuaW5wdXQtZmllbGQgeyBcclxuICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9IFxyXG4gIC5pbnB1dC1pY29ucyBpIHsgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgfSBcclxuICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgLmF7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC52bHtcclxuICAgIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gIH1cclxuICAudjJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5sb2dpbntcclxuICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnQtaW1ne1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmxlZnR7XHJcbiAgbWFyZ2luLXRvcDogMTQ1cHggO1xyXG4gIH1cclxuICAucmlnaHR7XHJcbiAgbWFyZ2luLXRvcDogMjIwcHggO1xyXG4gIH1cclxuICAuaW5wdXQtYXJlYTF7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupotpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signupotp',
                templateUrl: './signupotp.component.html',
                styleUrls: ['./signupotp.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


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
const environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoiYmFiYXJic2NzMzI2MSIsImEiOiJja2N2dHR2MGUwN21iMnhydXlvcXA2MTlmIn0.gympgF_-zALE5J5MyZH3fQ'
    },
    url: 'https://shaisecommercestore.herokuapp.com/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Office\Asasa.com\Front end\src\Asasa-1.0.0-17-08-2020--master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map