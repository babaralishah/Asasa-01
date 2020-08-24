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











const routes = [
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
    { path: 'login-component', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup-component', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'forgetpass-component', component: _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpassComponent"] },
    { path: 'forgetpassverify-component/:email', component: _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_6__["ForgetpassverifyComponent"] },
    { path: 'newpass-component/:email', component: _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_7__["NewpassComponent"] },
    { path: 'signupotp-component/:email', component: _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_8__["SignupotpComponent"] }
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








function AppComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_51_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_51_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function AppComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_56_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_56_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_56_div_2_Template, 2, 0, "div", 42);
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 72, vars: 12, consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-lg"], [1, "container-fluid", "px-0"], [1, "row", "w-100"], [1, "col-5"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-nav", "mt-2", "mt-lg-0"], [1, "nav-item", "active", "pull-left"], ["href", "#", 1, "nav-link", 3, "click"], [1, "nav-item"], [1, "col-md-3"], [1, "col-4"], ["id", "navbarTogglerDemo03", 1, "collapse", "justify-content-end", "navbar-collapse", 3, "ngClass"], ["routerLink", "/map", 1, "btn", "btn-info", "rounded-pill"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-info", "rounded-pill"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "pull-right"], ["aria-hidden", "true"], [1, "row"], [1, "col-sm-6", "col-md-6", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-5", "col-md-5", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["id", "inputEmail", "type", "email", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], [1, "fa", "fa-lock", "icon"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], [1, "custom-control", "custom-checkbox", "mb-3"], ["id", "customCheck1", "type", "checkbox", "checked", "", 1, "custom-control-input"], ["routerLink", "/forgetpass-component"], ["routerLink", "/register-component"], [1, "invalid-feedback"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.isShown = !ctx.isShown; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() { return ctx.isShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Book Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_46_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_div_51_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AppComponent_div_56_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Not Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Sign up!");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  }\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  height: 5 0px;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;  }\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    display: table;\r\n  }\r\n\r\n.example-label[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 8px;\r\n    min-width: 120px;\r\n  }\r\n\r\n.example-button-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 490px;\r\n  }\r\n\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin: 8px 8px 8px 0;\r\n  }\r\n\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n.example-button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color: #38baa2;\r\n    font-weight: 600;\r\n    margin-left: 60px;\r\n    margin-top: -10px;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border: 2px solid #0000001a !important;\r\n    border-radius: 50rem!important;\r\n  }\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n    position: relative;\r\n    top: 30%;\r\n    font-size: 22px;\r\n    color: #38bba3;\r\n    margin-right: 1px;\r\n  }\r\n\r\n.word[_ngcontent-%COMP%] {\r\n      color: #38baa2;\r\n      letter-spacing: 1px;\r\n      padding: 20 px;\r\n      font: bold 14px arial,sans-serif;\r\n      \r\n  }\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\n  margin-left: 12px;\r\n  }\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n    width: 100%; \r\n    padding: 10px; \r\n    text-align: center; \r\n  }\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n    position: absolute; \r\n  }\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n    display: flex;\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n  }\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n    border-left: 2.2px solid #38baa2;\r\n    height: 250px;\r\n    margin-left: 1px;\r\n  }\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n    margin-top: 40px ;\r\n    color: #38baa2;\r\n    font-weight: bold;\r\n  }\r\n\r\n.login[_ngcontent-%COMP%]{\r\n    height:auto;\r\n    min-height: 100vh;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n    margin-left: 50px;\r\n    width:75%}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n  }\r\n\r\n.left[_ngcontent-%COMP%]{\r\n  margin-top: 145px ;\r\n  }\r\n\r\n.right[_ngcontent-%COMP%]{\r\n  margin-top: 160px ;\r\n  }\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n  }\r\n\r\n.modal-content[_ngcontent-%COMP%]{\r\n  margin-left: -200px;\r\n width:880px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7QUFFRjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCLEdBQUc7O0FBRWxDO0lBQ0ksY0FBYztFQUNoQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHNDQUFzQztJQUN0Qyw4QkFBOEI7RUFDaEM7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztBQUNBO01BQ0ksY0FBYztNQUNkLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsZ0NBQWdDO01BQ2hDLHVCQUF1QjtFQUMzQjs7QUFDQTtFQUNBLGlCQUFpQjtFQUNqQjs7QUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUNBLG1CQUN3QixTQUFTO0lBQy9CLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25COztBQUNGO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBQ0E7Ozs7Ozs7O3N1UUFRb3VROztBQUNsdVEscUJBQXFCOztBQUNuQjttQkFDYTs7QUFDZjs7S0FFQzs7QUFFSDtJQUNFLGlCQUFpQjtJQUNqQixTQUFTOztBQUVYO0lBQ0UsaUJBQWlCO0VBQ25COztBQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztBQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjs7QUFDRjtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4gIC5idG57XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbi5idXR0b24ge1xyXG4gIGhlaWdodDogNSAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7ICB9XHJcbiAgXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBjb2xvcjogIzM4YmFhMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDAxYSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG4gIH1cclxuICBpOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMzhiYmEzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgfVxyXG4gIC53b3JkIHtcclxuICAgICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgLyogYmFja2dyb3VuZDouICNmZmY7ICovXHJcbiAgfVxyXG4gIC5lbWFpbElucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAuaW5wdXQtZmllbGQgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9IFxyXG4gIC5pbnB1dC1pY29ucyBpIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIH0gXHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAuYXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC52bHtcclxuICAgIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgfVxyXG4gIC52MntcclxuICAgIG1hcmdpbi10b3A6IDQwcHggO1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgLyogXHJcbiAgLmJnLWltYWdlIHsgICAgXHJcbiAgICBoZWlnaHQ6IDY1MHB4OyBcclxuICAgIHdpZHRoOiA1MDBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDY1MHB4OyBcclxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYXNhc2EwNi5wbmcpO1xyXG4gIFxyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4QVFFQlVQRUJFV0VoQVFGUllZRlJnVkZoVVZGUmdZRlJZV0ZoY1hGaFVZSFNnZ0dCc2xHeFlWSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR2hBUUdpMGxIeVV0TFMwdExTMHRLeTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQU9FQTRRTUJFUUFDRVFFREVRSC94QUFiQUFFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQlFZQkJBY0RBdi9FQUVRUUFBSUJBZ0lHQlFnSEJ3TUZBUUFBQUFBQkFnTVJCQ0VGQmhJeFFWRWlZWEdSc1JNeU5GTnlnWkxSRkJVV002SEI4Q05TWW5PQ3N1RUhvc0kxUWtPajhTVC94QUFiQVFFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQVFNQ0JBVUdCLy9FQURJUkFRQUNBUU1EQVFZRkF3VUJBQUFBQUFBQkFnTUVFUklGSVRGQkZCVXlNMUdCRXlKaGNiRkNVcEVqTktIUjhFUC8yZ0FNQXdFQUFoRURFUUEvQU80Z0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR0d3TUtWOXdSRTcrSDBFZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIek9TU2Jic2xtMjl5Q0ptSWp1b21zdXNqclhvMFcxU1dVbnhuOG8rSmJXcmc2M1hjNTRVOE5QUU9uNTRaN0x2T2k5OGVLNjQvSW0xZDFPazFsc003V25lSFFjSGk0VllLcFRrcFJmNnMrVEt0dG5vY2VTdVNPVlh1aUZqSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkJhM1l5cFJ3KzFUbHN5YzRxNjMyemY1R1ZZaHBhN0pmSGkzckttZlgrTDlmUDhQa1c4SWNUMjNQOEEzU3MycUdsS2xTRldWZXBkUXM3eXNyS3p2bjdpdTBPcG9OUmUxYlRrbndodFpOWVhpSDVPbmxSWHVjK3Q4bDFHVmE3TkxXYTJjczhhK1A1UUJtNW9FcERRK2xxbUdudFFkNHZ6b3ZkTDVQckltTjJ4cDlWZkRiZXJvbWl0SjA4UkRicHZ0WEdMNVA1bE14czlIaHowelYzcTNTRjdJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN1YTllakwrWkh3a1owOHVkMVA1S2dGcnozNlBSVnBLTGdtMUdUVGE0TnJkZm1ObVVYdEZlTVQyZVlZQVNBQU5uQVkycFFtcWxPVnBMdWE1TmNVUk1icmNPVzJLM0tyb1dndE9VOFRITG8xVXVsQnY4VnpSVk5kbm90TnE2NW8vVkxtTGJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS3hyM1dqNUNNTHJhYzAwdU5rbmQvaVowY3pxZDRqRnhVUXRjQUFBQUFBQUI2VWEwb1NVNFNjWlIzTmJ5Tm1WTDJwTzhMN3E3ckhIRVdwMU9qVy9DWFd1dnFLN1YyZWcwbXVybC9MYnlzQ01IUVpBQUFBQUFBQUFBQUFBQUFBQUFBQ0IxaDFpaGgraEMwNjNMaEhybDhqT3RkMmhxOWJYRitXTzhxQmljUk9ySnpxUzJwUzN0L3JKRmtSczgva3lXdlBLenlKWWRtNW83UmxiRU8xS043YjN1aXUxL2tSTTdMc09tdmwrRmFzRHFYVFdkYW81UGxIb3g3OS9nWVRlWFd4ZExySHh5bHFlcm1FaXJlUlQ3YnZ4TWVVdHVORmdqK2xtZXJ1RWVYa1lyc3VoeWxNNkxCUDlNSXpHNm1VWG5TbktENVBwUi9IUDhTWXZMVnk5THBQd1RzcXVsZERWc00vMmtlandrczR2NVB0TTR0RXVWbjBtWEY1anQ5VWVaTlpsTzJheWFCRXpIZGM5WE5aOXExSEVPMHNsR2ZCOVV1VDZ5dTFYYjBldmkzNU1ubGJVeXQxbVFrQUFBQUFBQUFBQUFBQUFBeGNDcDZ4NjBLTjZPSGQ1WnFVMXVYVkhtK3NzclZ5ZFpyNHIrVEgvbFM1U2JkMjd0NzI4Miswc2NPWm1aM2xnQ2ExZDBGTEV5MnBYalJpODMrOS9ESDVtTnAyYjJqMGs1cDNudzZGaGNOQ25GUWhGUml0eVJUTDBOTWRhUnRXSHJjTXk0UVhDUUQ0cTBveVRqSktVV3JOTlhUWEpvUkxHMVl0RzB3b2VzK3Iza1AydEs3b3Q1cmU0ZjRMYTIzY0hXNkw4UDhBUFh3cnBtNW9DRm4xZDFtZE8xS3U3MCtFdU1lcDgxNEZkcXVybzlmTmZ5WlBDOFFxS1NUVFRUM05idmNWdTVGb21ONGZZU0FBQUFBQUFBQUFBQUFBb2VzbXNzcWpsUm90eHBxNms5MHBXeWE2a1dWcTRXczEwMm5oVHRDc2xqbEFHMW96QlNyMVkwbzc1UE44a3MyKzRpWjJXNE1VNWNrVmgxSEI0YU5LRWFjRmFNVlpmTXBtWHFzZU9NZFlyVjdHTXl5UmVOMG5zNVEzWHR0V3YzTGlhR1hXOTVyajd5MThtZmo0UXRER1ZxbUlxVUt1Y1lyYVRVbm1ycEs2VmtuMkRVemFOUFhOVzA3ejVqWm9Zczk3NXJZcmVuZnRLSDFnMG5WcFRVc0hWbEtWTzdxeGkzS0NXOU9TV1M0bTkwdU1sNlRHbzdiK0phK3F6elMrK0czZjFoSWFwYTVWTVE1UXJ3Vm9XNlVkK2U2OGVQYXU0djF0Y2VtNHhOdkxaMFhVTFpPMTQrNjZRbGRYVHVudUthekV4dkRyYmxTbXBKeGtyeGFzMDl6VEpSTVJNYlM1anA3UnJ3MVowLzhBdGVjSC9DL3pWbWkrdHQzbU5YZy9CeWJlbm9qaVdyMkFuejJUZXIrc004TTlpZDVVWHZYR1BYSDVHRnE3dC9TYTIyS2VOdThmdzZKU3FLU1VsdWtrMTJNcWVpck1XamVIMkVnQUFBQUFBQUFBQUFBYWs5RzBHN3VsQnQ3M3N4SjNsVk9ESFBvcG11K0hoVHEwMUNDaW5CMzJVbHg2aXlqaTlUcFd0cTdRclptNWk0Nmc0VEtwWGUrK3d1NVNmaWl1OHV6MHJIMm0vd0Jsd0szWlJtbHNUYTFOY2MzMmN2MXlPWDFIVVRTc1VqMVVaYi8wb2VqbytQbHBWM0tUVGpzN0w4MWRpL1c5bWxYVlgvQmpEV0kzMzgrclNycDYvaWZpek03YmVGWDA1V1ZHdDVYRDFHdktKM3o2U2FzbW1ubnllWjYvcDlaellZcG5yNDJlZTFreGh6ODhOdktyMTViN2NUcXpXUEVOV2src3JGcW5DRWwreG5zeTJXcTBaSmRKMnZDY003cXpmdnR3UEo5YnZhSjQzNy8ydTVvNnhOZDYvZGVkQll6Wmw1R1R1cGViMnJmYnQzblA2ZHFabVp4ejQ5SFcwK1R2eGxZRWRsdXExcjFoTnFncXZHbEpkMG5ieHNaMG51NW5VOGUrUG45RkRMWmNCT2FuMEl6eE96T0trdGlXVFNhNGNHWTI4TjdwMWEyeTdUOUY2K3JLSHFZZkRINUZXOHU5R0RINlEyNG9oYkhaa0pBQUFBQUFBQUFBQUFBd0JSOWYvdmFmc1B4TGFPSDFYNHFxc1p1UzZKcVpDMkVqL0ZLVC93QnpYZ2tVMzh2U2RQamJEQ2RaaTNsUDBucGFuQ2RXclVsc3hoVTJIdmVhc2xrY1RWNlhObTFQR3NidVhsejFyYVpzcW1zdXNEcXlWS20ycVNTZVQ4NjltcnJoYmtkL28vVEs0YTg4a2IyL2h4OWZxN1pKNDBuc2dKMXowRGxSU1dwV3FrVEs2bFZ4MVowZlVsZzNDbzNDRlNlMUhaeW5zOUYrZHdUYTNXNTh6eGZXTlpTdXAzckcrMGJmbzdtbHhUK0YzYmVBcFY2TmVNcFNqVXB3bmVEZDFVVWNuYmE0dDduek5LdXB3MnRXYTlwM2pmNlNzcE0wdkV1a283cnRvM1dTQ2VFcko4SU45MmE4REt2bHJhdXUrRzBPWUY3eXFmMUk5TC9vbDR4TUwrSFI2Wjg3N09obFQwUUFBQUFBQUFBQUFBQUFBQmdDajYvL0FIdFAySDRsdFBEaDlWK0txckdia3VpYWwxTDRTUDhBREtTZmZmd2FLYmVYbytuMjN3UW5XWXQvMWNqMXZ4Y3NMajYwWlFWU2xVbENwc3l5ejJVOXBQdHV2Y2JrYVNNK09MVm5hMGRubTlWTTQ4OXF6NDh0VEFhTGxpNmNuU3FRY0l2Wmg1UlNjMWtuYVUwc3JKcmRkTTFNL1VhNk85WXlWbmYxVlYwMDVZbmpLSTB0byt0aG5hckd5YmFqSk84Wlc1UDVuVTB2VU1PcGplay9aclgwMXNmeElxclZOdWZCV2pwT0IxaHcwcU5OK1ZqRjdNWTdNbWxKTkpLelI4KzFtZzFFWnJmbG1YWHJraWE3UTNLYThwVWhEOTZjVmx5dXJ2dXV6UzBzVGJQV052VkZQelpJaGZrZXQ4TzRqOVlQUmEzOHVYZ1pWOHFOVDhxMzdPWEY3eWF3YWtlbC93QkV2R0poZnc2UFRQbmZaMElxZWlBQUFBQUFBQUFBQUFBQUFNQVVmWC83Mm43RDhTMm5odytxL0ZWVmpOeVZ3MUJ4aVhsS0RlL3BydVNsNElydkRzOUt5K2FTdUpXN0NsLzZrNnZQRTBWWHBSdlZvM3VsdmxEamJtMXY3emIwdWJoYmpMbWRSMDAzcnpyNWorSFA5Vk5ZRmhtNkZYS25LVjFMZlp1eXo2c2thblcrbTJ6eEdhbm1JLzRjN1Q1ZGwzeE02Y29OVlZGdzQ3Vm12eFBJWWI1SzMvMDk5MjFONnpIZHlUUytKcHlyVkhTaW9VOXJvcFpxeXl1dTIxL2VmUk5KVzljTll5VHZMVW1zYjlqUW1GbFd4RUlyS3oybStTam4rVnZlVTlTenhnMDlwbi8yNlkyaDI3VlRSN2xMNlRKZEZLMVBydnZsMld5WGF6elBTOU5OWW5KYU84K0hTME9HZCtkdnN0UjEzVFIrc0hvdGIrWEx3SnI1VWFuNVZ2MmN1TDNsRTlxVS93RDlhNjRTL0ova1lYOE9oMHo1MzJkRUtub2dBQUFBQUFBQUFBQUFBQURBRkgxLys5cCt3L0V0cDRjUHF2eFZWWXpjbHM2UHhrcU5XTldPK0Q3MXVhOTZ1Uk1icmNPV2NkNHREcUdCeGNLMU9OU0R2R1M3dWFmV1V6RzB2VTRzbGNsWXREWWFJV0tQclgvcDdTeExkWER0VWFqemNiZENUNTVlYSt6L0FDYmVMVlRTTnJkNGN6VWRQaTA4c2ZhZitGWDFoMEZwTjRlTkIwWlN0bE53NmUyb3BXYTJjKzI2M21ocE5KaHhhcTJXZkUrUDBhVnNPYW5hYS80N3E3ZzlSZElWWFpZYWNldWEyRi91c2QyMm94VjlXTk1XYTNpcy9mczZGcWgvcDJzTmVlSm1wdVZyd2l1ajJTbHZhNmxiM25NMVY2WjVqZVBEZndhQ1lubGsvd0FML0dLU3Nza2lsMG84TWhLUDFnOUZyZnk1ZUJOZktqVS9LdCt6bHhlOG9uZFMvUzQrekx3TUwrRy8wMzUzMmRGS25vd0FBQUFBQUFBQUFBQUFBREFGSDEvKytwK3cvRXRwNGNQcXZ4VlZZemNrQ0pTMnIrbTU0V2ZHVktUNlVmemoxK0pqYXU3ZDBtcm5EUDZPaDRQR1FyUVZTbkpTaS8xWjhtVlREMFdQTFhKRzlHd1FzQUFBRDRxMVZGWGswbHplUVJNeEhsOW9DUDFnOUZyZnk1ZUJOZktuVS9LdCt6bHhlOG9uZFMvUzQrekx3TUwrRy8wejUzMmRGS25vd0FBQUFBQUFBQUFBQUFBREFGRzEvZjdhbjdEL0FMaTJqaGRWK09xcm1ibEFBSWJPQngxV2hMYnBTY1h4NVB0WEVpWTNYWWMxOFU3MGxhTURycXJXcjA4K2NOM3d2NW1FMGRYRjFXUC9BS1IvaEswdGFzRzk5UnhmWENmaWxZeDRTMjQ2aGduMWZVOWFjR3YvQUMzN0lUK1E0eVRyOEVmMWZ5ak1icnBCSzFHbTVQblBKZHl6TW9vMWNuVmFSMnBDdFlyUzFXdlVqS3JPOFl5VHNzb3JQZ3V6M21YSGJ3NTF0VmZKZUp2UGJkZWxyTmcvWEw0Wi9JcjR5N250MkNQNnY1YWVtZFlNTFV3OVdFS3FjcFFra3RtV2JhNjBURlozVlo5Wmh0am1JbFFTMTU1TzZsK2x4OW1YZ1lYOE4vcG56dnM2S1ZQUmdBQUFBQUFBQUFBQUFBQUdBS3JyYm9hdlhxUW5TaXBKUnM4MHJPOStQYitCWldZaHl0ZnBjbVcwVFZBL1pmRityWHhJeTVRNS91L1A5RDdMNHYxYStKRGxCN3Z6L1JuN0xZejFhK0tJNXduM2RuK2g5bHNYNnRmRkVjNFI3dXpmUmo3TDR2MWErS0k1d2U3czMwWit5Mkw5V3ZpUTVRZTdzLzBQc3ZpL1ZyNGtPVUh1N1A4QVJqN0w0djFhK0pEbWU3OC8wWit5K005V3ZpUTVRZTdzL3dCR1BzdmkvVnI0b2psQjd2ei9BRVBzdmkvVnI0a09jSHUvUDlEN0w0djFhK0pEbkNmZCtiNkpiVmpRV0lvNGhWS2tWR0tqSmIwODMyR05yUTI5RHBNbUxKeXQ0WE1yZGxnRElHQU1nQUFBQUFBK1p5U1YyN0pjOXdSTTdOQmFid3JlejVlRiszOHllTXFQYXNNenR5aHZ4ZDh5RjhUdjRhbUwwcFFwUFpxVll4Zkp2TW5hVlY4K09rN1dtSGg5ZjRUMThPOGNaWWUxNFA3b2JlRHh0S3NuS2xOVFNkbTF6STJtRnRNbGI5Nnp1eGk5SVVxUDN0U01MN3J2UHVKMm1VWHpVcDhjN0dFeDlLdDkxVWpPMit6L0FDR3lhWnFYK0NkM3ZVcUtLY3BOS0t6YmVTUkhkbmFZckc4by93Q3Y4SjYrSGVUeGxyKzE0UEhPR1lhZHdyYVNyUWJic3MrTEhHVXhxc016dEZvYjhwcEs3ZGtzMnlPNi9mYU4yaXRONFhhMmZMd3YyL21UeGxSN1ZoMzI1UTM0dSthM0VMNG5ka0phK0x4MUtrcjFKeGhmbTdkdzJWM3kwcDhVN1BuQ2FSbzF2dTZrWnRjRTgrNG5hVVV6VXY4QURMYVpDMW80alRHSHB5Mloxb0tTM3ErWk8wcUxhbkZXZHJXaHRVSzhaeDJvU1VvdmluZEJiVzhXamVyTmFyR0NjcE5SaXQ3YnN1OGd0YUt4dkxWd3VsYUZXV3pUcXhsTGtubVRNU3JwcU1kNTJyYmQ5WXZTVkdpN1Zha1lOOEc4KzRSRXB2bng0NTJ0Ylo3NGJFUXFSMm9TVW92aW5jaG5TOWJSdlY2aGtBQUFBQ202MDFxbUl4TWNGQjJqbHRjbTJyNTgwbG1XVjdkM0gxdDdaTTBZYXR5ZXB1SDJObFNtcDI4NXRiK3VOcldJNXp1dG5wbUxqMjMzYStwMktxUXFWTUhOMzhuZlo2bkYyYVhWdVpOb2p5cjBHUzliV3hXOUVKaGxoM2lLdjAxeWowbnUydDkzdjJWZmRheGwzMjdOT3Y0YzViZmpUc2tWUzBQdThwTC9BTnkvNG1QNW14RmREL2QvUC9TZHAwNk9Ed3RTclF6aFp6V2JrbTdXV2ZMY1k5NW51M3ExcGd3emFuaEE2QTBIOU0yc1RpSlNlMUoyU2RtMnNtMitYQ3k1R1UyMjdORFM2WDJqZkxrOVdOTzZIK2hPT0p3OG1rcFdzODdOOWZGUGRZUmJmc2FuVGV5LzZtT1d6cmJpcFZjSFJxUnVvVkxPYTYzRzZUOTkvd0FCWHRLelg1TFh3VnRFK2ZMVHcxUFJPeEhiblBic3RxNnE3K1BteHQzRXp5VTByb3VNVGEzZi93QitpUjBYbzdSdFdhOGpKdWNYZEp5bkY1WjdwSlhNWm0yelp3WWRKZVk0Uzh0YTY5U3RpSVlLRHRHVnRycmJ6ejVwSlhzVFh0M1lhNjlzbVNNTU50Nm00ZlkyVktlMys5ZGIvWnRheEhPZDF2dXpIeDI3N3RiVS9FMUtkV3BnNmp2c1hjZXF6U2FYVTdwazIrcXZRWkxVdk9HM290R01ycW5UblVlNkVaU2Y5S2IvQUNNSWRUSmJoV2JmU0ZMMEpvcDQrYzhSaUpQWnZheWU5NzdKOElwTXptZU1PTHA5UDdWYWNtU1VuWDFRaXBxcGg2c3Fiam5uMHJQbW52N3lPYmFucHNSYUxZNTJldXRta0tsSER4Z3BmdEt2UmNvNVpKZEpybC9rVmplV1d1eld4WW9yRTk1YTJpOVVhVHBLVlp5YzVxN3M3Slh6eTVpYks4UFRxVFhlL2xwWWVuUFIrTmpTVW5LbFd0djRwdHBOL3dBU1pNL21oUlNMYVhVUlgwbHM2ZGpQRjR5T0VVdG1uQlhsYnN1MzF1MWt1MFY3UnV0MU1XejU0eGVJaDg2YzFacDBhVHJVSEtNcVZtN3U5N2NWeVlyYmZzalU2Q3VPblBIUGVIbnEvb0tPS2pMRTRpVXBPY25aSjJ2Yks3ZmJkVzZoYTJ6RFM2U004VGt5UytzSlFlQXgwYVVaTjBxOWxudnp5VjdjVStQSmp6REtsWjB1b2lrVHZFcm1pdDJXUUFBQUJUdGFhRlNoaVk0Mm5HOGN0cmttbGJQa21zaXl2alp4OWJTK1BMR2FzTnFldWREeWUwb3kyN2ViYksvdGJyRWNKV3oxUEZ4M2p5aXRUNnpuakoxSmVkT001UDN5VFpsYU96VTZmZWJaN1duOVc5ajlLYU1xeWNxa0c1ckp2WmttN1padGJ6R0lzdnk2alIzbVp0SGY5a2ZqcStqSFRrcWNKcXBibzVTV2ZEZTdHVWN0KzdYeTMwYzFuanZ1a2RXc0hPcmdLbE9XU3FPWGs3MzVLejdOb3htWWlXem84ZHJhYWF6NitHbm9IVGYwUGF3MkloS0tqSnROTE5YNFc0cDcweWJSdjNVNmJVK3pmNldTSGpyUHJCSEV4VktrbnNKM2JlVGJ6dFpjaWExMllhM1d4bGpqWHdtNkdQb1VzRlFqaUZlRlNDVnRuYVRzdUtNZHBtZXplcm14WThGSXllc0l6NlRvajFjdTZmekoyczFmeE5GTFFUcFN4bEw2SEdTVjQ3NzcwM3RQUE8yenZKNzdkMUVjTGFpdjRLVjFxdzlTamlJWTJtcnFOdHJxY2VmSk5PMXlLekcyemIxdU8yUExHYXJiZXVWRFkybEdXM2J6YldWL2EzRWNWazlVeDhkL1ZFYW80aDFNYktwUHpwUW0zNzNFeXQ0YW1odk5zODJzcytIMGpSeHNLdEttM2xGeGxkVzg5U1dYY3l2YloxSzVxWjYyclg5bGEwTHBTV0FuUEQ0aUwyYjN1bHgzWFM0eGFNNWprNW1uenpwYlRqeVIyU0dKMXQycHhwNFdrNmpsKzlkZHlYaUlwOVd4YnFISzBWeFJ1Mk5hdEhWSytIakpLOVdsMG1vNTcxMGxIOWNDS3p0S3pXNGJaTVVXOVlhMmk5YnFTcHFOZFNqT0t0a3JwMjhCTlZXSHFOSzAyeWRwYVdIblBTR01qVlVYR2pTdHY0S0xja3ZhYko4UXByTnRWcUl0dCtXRzlnLytyVlBZL3dDTVNKK0Zmai8zcy9zbXRZUFJhdnNNeHI1YnVyK1RiOW1ycWg2SkQrcis1azJWNkQ1TUk3V1AwL0M5c2Y3MFpWOFMxdFgvQUxqSCs2MWxicXNnQUFHR0JpVVUxWnE2WktKaUpob3JRMkdUdXFGTy9QWlE1S1kwK1BmZUloNjBkSFVZVGRTTk9NWnl2ZHBadSs4YnNxNEtWbmVJZUQwRGhIbjVDSGNPVXE1MG1HZjZSYUJ3bnFJZHc1U1JwTU1UOEtRakZKV1NzbHVSRFlpSWp0RFh4V0FwVmZ2S2NaMjNiU1RKM21HRjhWTGZGRHorcU1OczdIa1liTGQydGxMTkRsTEQyZkZ0dHhmVlhSbENjWTA1VW91RlB6VTFrdXdiekNiWU1kb2lzeDRlSDFCaFBVUTdoeWxoN0poL3RiR0UwZFJwTzlPbkdEZTlwWjk0bVpsWmp3NDhmd3cyWEZOV2F1bnpJV2JieDNhWDFOaGI3WGtLZC9aUlBLVlBzK0xmZmpEMHBhUG93bTZrYWNWTjVOcFo1LzhBd2J5eXJneDF0dkVkMmNKZ0tWRzdwVTR3MjdiVmxhOXIydjN2dkV6dW5IaXBUZmpHMjc2eFdDcFZWYXBUak5MOTVKaUptQytLbC9pamQ4NFhSOUdsOTNUakMvSkpQdkV6TW9waHgwK0dHelloYTBxMmljUE9UbE9qQ1VueGNVMlR5bFRPREhNN3pFTm1qUWpCYk1JcU1Wd1NzaU4xbGF4V05vaDV4d1ZKVkhXVUVxajN5NHYzazdzWXhVaTNMYnU5YTFLTTR1RWxlTXNtbnVhSVpXckZvbUpmT0d3OEtjVkNFVkdLM0piaVVWcEZJMnErSytCcFRuR3BLQ2M0ZWEzdlhISWJvdGlyYVltZk1OZ2hZeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWYvWicpOyAqL1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgICAvKiB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIH0gKi9cclxuICBcclxuICAubGVmdC1pbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIHdpZHRoOjc1JX1cclxuICBcclxuICAuaW5wdXRze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5sZWZ0e1xyXG4gIG1hcmdpbi10b3A6IDE0NXB4IDtcclxuICB9XHJcbiAgLnJpZ2h0e1xyXG4gIG1hcmdpbi10b3A6IDE2MHB4IDtcclxuICB9XHJcbiAgLmlucHV0LWFyZWExe1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbi5tb2RhbC1jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XHJcbiB3aWR0aDo4ODBweFxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "./src/app/forgetpass/forgetpass.component.ts");
/* harmony import */ var _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forgetpassverify/forgetpassverify.component */ "./src/app/forgetpassverify/forgetpassverify.component.ts");
/* harmony import */ var _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./newpass/newpass.component */ "./src/app/newpass/newpass.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signupotp/signupotp.component */ "./src/app/signupotp/signupotp.component.ts");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20__);


// import {MaterialModule} from '@angular/material';






















Object(_angular_common__WEBPACK_IMPORTED_MODULE_19__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__["en_US"] }], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            // MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpassComponent"],
        _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_14__["ForgetpassverifyComponent"],
        _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_15__["NewpassComponent"],
        _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_17__["SignupotpComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBRootModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        // MaterialModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                    _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpassComponent"],
                    _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_14__["ForgetpassverifyComponent"],
                    _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_15__["NewpassComponent"],
                    _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_17__["SignupotpComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
                    // MaterialModule
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_18__["en_US"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


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
            const status = data.status;
            const email = this.forgetPassForm.value.email;
            if (status) {
                alert('Check your Email and change your password!!');
                this.router.navigate(['forgetpassverify-component', email]);
            }
        });
    }
}
ForgetpassComponent.ɵfac = function ForgetpassComponent_Factory(t) { return new (t || ForgetpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgetpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpassComponent, selectors: [["app-forgetpass"]], decls: 26, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["id", "inputEmail", "type", "text", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "customCheck1", "type", "checkbox", "checked", "", 1, "custom-control-input"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/login-component", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetpassComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%]{\r\n  \r\n  width: 100px;\r\n  font-size: 13px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:61%}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 220px ;\r\n}\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7O0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7O0FBRVg7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG59XHJcbmk6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzhiYmEzO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi53b3JkIHtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cclxufVxyXG4uZW1haWxJbnB1dHtcclxubWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuLmlucHV0LWZpZWxkIHsgXHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdHBhZGRpbmc6IDEwcHg7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0gXHJcbi5pbnB1dC1pY29ucyBpIHsgXHJcblx0cG9zaXRpb246IGFic29sdXRlOyBcclxufSBcclxuLmlucHV0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4uYXtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi52bHtcclxuICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi52MntcclxuICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW57XHJcblx0aGVpZ2h0OmF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgLyogcGFkZGluZzogMHB4OyAqL1xyXG4gIC8qIGhlaWdodDogMzBweDsgKi9cclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bjF7XHJcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmxlZnQtaW1ne1xyXG4gIHdpZHRoOjYxJX1cclxuXHJcbi5pbnB1dHN7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmxlZnR7XHJcbm1hcmdpbi10b3A6IDE0NXB4IDtcclxufVxyXG4ucmlnaHR7XHJcbm1hcmdpbi10b3A6IDIyMHB4IDtcclxufVxyXG4uaW5wdXQtYXJlYTF7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"] });
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
            const status = data.status;
            const msg = data.msg;
            if (status) {
                alert('\nMessage: ' + msg + '\n\n Status: ' + status);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%]{\r\n  \r\n  width: 100px;\r\n  font-size: 13px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  \r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:61%}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 220px ;\r\n}\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3ZlcmlmeS9mb3JnZXRwYXNzdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7O0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7O0FBRVg7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzc3ZlcmlmeS9mb3JnZXRwYXNzdmVyaWZ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bntcclxuICAvKiBwYWRkaW5nOiAwcHg7ICovXHJcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuMXtcclxuICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xyXG59XHJcblxyXG5oMntcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG59XHJcbmk6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzhiYmEzO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi53b3JkIHtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cclxufVxyXG4uZW1haWxJbnB1dHtcclxubWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuLmlucHV0LWZpZWxkIHsgXHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdHBhZGRpbmc6IDEwcHg7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0gXHJcbi5pbnB1dC1pY29ucyBpIHsgXHJcblx0cG9zaXRpb246IGFic29sdXRlOyBcclxufSBcclxuLmlucHV0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4uYXtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi52bHtcclxuICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi52MntcclxuICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW57XHJcblx0aGVpZ2h0OmF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5sZWZ0LWltZ3tcclxuICB3aWR0aDo2MSV9XHJcblxyXG4uaW5wdXRze1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5sZWZ0e1xyXG5tYXJnaW4tdG9wOiAxNDVweCA7XHJcbn1cclxuLnJpZ2h0e1xyXG5tYXJnaW4tdG9wOiAyMjBweCA7XHJcbn1cclxuLmlucHV0LWFyZWExe1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59Il19 */"] });
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
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';








function LoginComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_19_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function LoginComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_24_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_24_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.minlength);
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
        // console.log('user login data: ',this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe(data => {
            console.log(data);
            const status = data.status;
            const msg = data.msg;
            console.log("Status: " + status);
            // console.log("Message: " + msg);
            if (status) {
                alert('SUCCESS!! :-)');
            }
            else {
                alert('Invalid email or password!');
            }
        });
    }
    // getting input labels values from user end (login.html)
    get f() { return this.loginForm.controls; }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 39, vars: 9, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["id", "inputEmail", "type", "email", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], [1, "fa", "fa-lock", "icon"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-info", "rounded-pill"], [1, "custom-control", "custom-checkbox", "mb-3"], ["id", "customCheck1", "type", "checkbox", "checked", "", 1, "custom-control-input"], ["routerLink", "/forgetpass-component"], ["routerLink", "/signup-component"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Log - in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Not Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%]{\r\ncolor:#38baa2;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n.input-field[_ngcontent-%COMP%] { \r\n  margin-left: 20px;\r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: 900;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:61%}\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 160px ;\r\n}\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7Q0FDbEIsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBLG1CQUN1QixTQUFTO0NBQy9CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0VBQ2xCO0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjtBQUNBOzs7Ozs7OztvdVFBUW91UTtBQUNsdVEscUJBQXFCO0FBQ25CO2dCQUNZO0FBQ2Q7O0dBRUM7QUFFSDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFNBQVM7QUFFWDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuY29sb3I6IzM4YmFhMjtcclxufVxyXG5oMntcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG59XHJcbmk6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzhiYmEzO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi53b3JkIHtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cclxufVxyXG4uZW1haWxJbnB1dHtcclxubWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuLmlucHV0LWZpZWxkIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdHBhZGRpbmc6IDEwcHg7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0gXHJcbi5pbnB1dC1pY29ucyBpIHsgXHJcblx0cG9zaXRpb246IGFic29sdXRlOyBcclxufSBcclxuLmlucHV0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4uYXtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi52bHtcclxuICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi52MntcclxuICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5sb2dpbntcclxuXHRoZWlnaHQ6YXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4vKiBcclxuLmJnLWltYWdlIHsgICAgXHJcbiAgaGVpZ2h0OiA2NTBweDsgXHJcbiAgd2lkdGg6IDUwMHB4OyBcclxuICBtYXgtd2lkdGg6IDY1MHB4OyBcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9hc2FzYTA2LnBuZyk7XHJcblxyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeEFRRUJVUEVCRVdFaEFRRlJZWUZSZ1ZGaFVWRlJnWUZSWVdGaGNYRmhVWUhTZ2dHQnNsR3hZVklURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHaTBsSHlVdExTMHRMUzB0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFPRUE0UU1CRVFBQ0VRRURFUUgveEFBYkFBRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUJRWUJCQWNEQXYvRUFFUVFBQUlCQWdJR0JRZ0hCd01GQVFBQUFBQUJBZ01SQkNFRkJoSXhRVkVpWVhHUnNSTXlORk55Z1pMUkZCVVdNNkhCOENOU1luT0NzdUVIb3NJMVFrT2o4U1QveEFBYkFRRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUFRTUNCQVVHQi8vRUFESVJBUUFDQVFNREFRWUZBd1VCQUFBQUFBQUJBZ01FRVJJRklURkJGQlV5TTFHQkV5SmhjYkZDVXBFak5LSFI4RVAvMmdBTUF3RUFBaEVERVFBL0FPNGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdHd01LVjl3UkU3K0gwRWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSHpPU1NiYnNsbTI5eUNKbUlqdW9tc3VzanJYbzBXMVNXVW54bjhvK0piV3JnNjNYYzU0VThOUFFPbjU0WjdMdk9pOThlSzY0L0ltMWQxT2sxbHNNN1duZUhRY0hpNFZZS3BUa3BSZjZzK1RLdHRub2NlU3VTT1ZYdWlGaklBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJCYTNZeXBSdysxVGxzeWM0cTYzMnpmNUdWWWhwYTdKZkhpM3JLbWZYK0w5ZlA4UGtXOEljVDIzUDhBM1NzMnFHbEtsU0ZXVmVwZFFzN3lzckt6dm43aXUwT3BvTlJlMWJUa253aHRaTllYaUg1T25sUlh1Yyt0OGwxR1ZhN05MV2EyY3M4YStQNVFCbTVvRXBEUStscW1HbnRRZDR2em92ZEw1UHJJbU4yeHA5VmZEYmVyb21pdEowOFJEYnB2dFhHTDVQNWxNeHM5SGh6MHpWM3EzU0Y3SUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDdWE5ZWpMK1pId2taMDh1ZDFQNUtnRnJ6MzZQUlZwS0xnbTFHVFRhNE5yZGZtTm1VWHRGZU1UMmVZWUFTQUFObkFZMnBRbXFsT1ZwTHVhNU5jVVJNYnJjT1cySzNLcm9XZ3RPVThUSExvMVV1bEJ2OFZ6UlZOZG5vdE5xNjVvL1ZMbUxiQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUt4cjNXajVDTUxyYWMwMHVOa25kL2laMGN6cWQ0akZ4VVF0Y0FBQUFBQUFCNlVhMG9TVTRTY1pSM05ieU5tVkwycE84TDdxN3JISEVXcDFPalcvQ1hXdXZxSzdWMmVnMG11cmwvTGJ5c0NNSFFaQUFBQUFBQUFBQUFBQUFBQUFBQUNCMWgxaWhoK2hDMDYzTGhIcmw4ak90ZDJocTliWEYrV084cUJpY1JPckp6cVMycFMzdC9ySkZrUnM4L2t5V3ZQS3p5SllkbTVvN1JsYkVPMUtON2IzdWl1MS9rUk03THNPbXZsK0Zhc0RxWFRXZGFvNVBsSG94NzkvZ1lUZVhXeGRMckh4eWxxZXJtRWlyZVJUN2J2eE1lVXR1TkZnaitsbWVydUVlWGtZcnN1aHlsTTZMQlA5TUl6RzZtVVhuU25LRDVQcFIvSFA4U1l2TFZ5OUxwUHdUc3F1bGREVnNNLzJrZWp3a3M0djVQdE00dEV1Vm4wbVhGNWp0OVVlWk5abE8yYXlhQkV6SGRjOVhOWjlxMUhFTzBzbEdmQjlVdVQ2eXUxWGIwZXZpMzVNbmxiVXl0MW1Ra0FBQUFBQUFBQUFBQUFBQXhjQ3A2eDYwS042T0hkNVpxVTF1WFZIbStzc3JWeWRacjRyK1RIL2xTNVNiZDI3dDcyODIrMHNjT1ptWjNsZ0NhMWQwRkxFeTJwWGpSaTgzKzkvREg1bU5wMmIyajBrNXAzbnc2RmhjTkNuRlFoRlJpdHlSVEwwTk1kYVJ0V0hyY015NFFYQ1FENHEwb3lUakpLVVdyTk5YVFhKb1JMRzFZdEcwd29lcytyM2tQMnRLN290NXJlNGY0TGEyM2NIVzZMOFA4QVBYd3JwbTVvQ0ZuMWQxbWRPMUt1NzArRXVNZXA4MTRGZHF1cm85Zk5meVpQQzhRcUtTVFRUVDNOYnZjVnU1Rm9tTjRmWVNBQUFBQUFBQUFBQUFBQW9lc21zc3FqbFJvdHhwcTZrOTBwV3lhNmtXVnE0V3MxMDJuaFR0Q3NsamxBRzFvekJTcjFZMG83NVBOOGtzMis0aVoyVzRNVTVja1ZoMUhCNGFOS0VhY0ZhTVZaZk1wbVhxc2VPTWRZclY3R015eVJlTjBuczVRM1h0dFd2M0xpYUdYVzk1cmo3eTE4bWZqNFF0REdWcW1JcVVLdWNZcmFUVW5tcnBLNlZrbjJEVXphTlBYTlcwN3o1alpvWXM5NzVyWXJlbmZ0S0gxZzBuVnBUVXNIVmxLVk83cXhpM0tDVzlPU1dTNG05MHVNbDZUR283YitKYStxenpTKytHM2YxaElhcGE1Vk1RNVFyd1ZvVzZVZCtlNjhlUGF1NHYxdGNlbTR4TnZMWjBYVUxaTzE0KzY2UWxkWFR1bnVLYXpFeHZEcmJsU21wSnhrcnhhczA5elRKUk1STWJTNWpwN1JydzFaMC84QXRlY0gvQy96Vm1pK3R0M21OWGcvQnliZW5vamlXcjJBbnoyVGVyK3NNOE05aWQ1VVh2WEdQWEg1R0ZxN3QvU2EyMktlTnU4Znc2SlNxS1NVbHVrazEyTXFlaXJNV2plSDJFZ0FBQUFBQUFBQUFBQWFrOUcwRzd1bEJ0NzNzeEozbFZPREhQb3BtdStIaFRxMDFDQ2luQjMyVWx4Nml5amk5VHBXdHE3UXJabTVpNDZnNFRLcFhlKyt3dTVTZmlpdTh1ejBySDJtL3dCbHdLM1pSbWxzVGExTmNjMzJjdjF5T1gxSFVUU3NVajFVWmIvMG9lam8rUGxwVjNLVFRqczdMODFkaS9XOW1sWFZYL0JqRFdJMzM4K3JTcnA2L2lmaXpNN2JlRlgwNVdWR3Q1WEQxR3ZLSjN6NlNhc21tbm55ZVo2L3A5WnpZWXBucjQyZWUxa3hoejg4TnZLcjE1YjdjVHF6V1BFTldrK3NyRnFuQ0VsK3huc3kyV3EwWkpkSjJ2Q2NNN3F6ZnZ0d1BKOWJ2YUo0MzcvMnU1bzZ4TmQ2L2RlZEJZelpsNUdUdXBlYjJyZmJ0M25QNmRxWm1aeHo0OUhXMCtUdnhsWUVkbHVxMXIxaE5xZ3F2R2xKZDBuYnhzWjBudTVuVThlK1BuOUZETFpjQk9hbjBJenhPek9La3RpV1RTYTRjR1kyOE43cDFhMnk3VDlGNityS0hxWWZESDVGVzh1OUdESDZRMjRvaGJIWmtKQUFBQUFBQUFBQUFBQXdCUjlmL3ZhZnNQeExhT0gxWDRxcXNadVM2SnFaQzJFai9GS1Qvd0J6WGdrVTM4dlNkUGpiRENkWmkzbFAwbnBhbkNkV3JVbHN4aFUySHZlYXNsa2NUVjZYTm0xUEdzYnVYbHoxcmFac3Ftc3VzRHF5VkttMnFTU2VUODY5bXJyaGJrZC9vL1RLNGE4OGtiMi9oeDlmcTdaSjQwbnNnSjF6MERsUlNXcFdxa1RLNmxWeDFaMGZVbGczQ28zQ0ZTZTFIWnluczlGK2R3VGEzVzU4enhmV05aU3VwM3JHKzBiZm83bWx4VCtGM2JlQXBWNk5lTXBTalVwd25lRGQxVVVjbmJhNHQ3bnpOS3VwdzJ0V2E5cDNqZjZTc3BNMHZFdWtvN3J0bzNXU0NlRXJKOElOOTJhOERLdmxyYXV1K0cwT1lGN3lxZjFJOUwvb2w0eE1MK0hSNlo4NzdPaGxUMFFBQUFBQUFBQUFBQUFBQUJnQ2o2Ly9BSHRQMkg0bHRQRGg5VitLcXJHYmt1aWFsMUw0U1A4QURLU2ZmZndhS2JlWG8rbjIzd1FuV1l0LzFjajF2eGNzTGo2MFpRVlNsVWxDcHN5eXoyVTlwUHR1dmNia2FTTStPTFZuYTBkbm05Vk00ODlxejQ4dFRBYUxsaTZjblNxUWNJdlpoNVJTYzFrbmFVMHNySnJkZE0xTS9VYTZPOVl5Vm5mMVZWMDA1WW5qS0kwdG8rdGhuYXJHeWJhakpPOFpXNVA1blUwdlVNT3BqZWsvWnJYMDFzZnhJcXJWTnVmQldqcE9CMWh3MHFOTitWakY3TVk3TW1sSk5KS3pSOCsxbWcxRVpyZmxtWFhya2lhN1EzS2E4cFVoRDk2Y1ZseXVydnV1elMwc1RiUFdOdlZGUHpaSWhma2V0OE80ajlZUFJhMzh1WGdaVjhxTlQ4cTM3T1hGN3lhd2FrZWwvd0JFdkdKaGZ3NlBUUG5mWjBJcWVpQUFBQUFBQUFBQUFBQUFBTUFVZlgvNzJuN0Q4UzJuaHcrcS9GVlZqTnlWdzFCeGlYbEtEZS9wcnVTbDRJcnZEczlLeSthU3VKVzdDbC82azZ2UEUwVlhwUnZWbzN1bHZsRGpibTF2N3piMHViaGJqTG1kUjAwM3J6cjVqK0hQOVZOWUZobTZGWEtuS1YxTGZadXl6NnNrYW5XK20yenhHYW5tSS80YzdUNWRsM3hNNmNvTlZWRnc0N1ZtdnhQSVliNUszLzA5OTIxTjZ6SGR5VFMrSnB5clZIU2lvVTlyb3BacXl5dXUyMS9lZlJOSlc5Y05ZeVR2TFVtc2I5alFtRmxXeEVJckt6Mm0rU2puK1Z2ZVU5U3p4ZzA5cG4vMjZZMmgyN1ZUUjdsTDZUSmRGSzFQcnZ2bDJXeVhhenpQUzlOTlluSmFPOCtIUzBPR2QrZHZzdFIxM1RSK3NIb3RiK1hMd0pyNVVhbjVWdjJjdUwzbEU5cVUvd0Q5YTY0Uy9KL2tZWDhPaDB6NTMyZEVLbm9nQUFBQUFBQUFBQUFBQUFEQUZIMS8rOXArdy9FdHA0Y1BxdnhWVll6Y2xzNlB4a3FOV05XTytENzF1YTk2dVJNYnJjT1djZDR0RHFHQnhjSzFPTlNEdkdTN3VhZldVekcwdlU0c2xjbFl0RFlhSVdLUHJYL3A3U3hMZFhEdFVhanpjYmRDVDU1ZWErei9BQ2JlTFZUU05yZDRjelVkUGkwOHNmYWYrRlgxaDBGcE40ZU5CMFpTdGxOdzZlMm9wV2EyYysyNjNtaHBOSmh4YXEyV2ZFK1AwYVZzT2FuYWEvNDdxN2c5UmRJVlhaWWFjZXVhMkYvdXNkMjJveFY5V05NV2EzaXMvZnM2RnFoL3Ayc05lZUptcHVWcndpdWoyU2x2YTZsYjNuTTFWNlo1amVQRGZ3YUNZbmxrL3dBTC9HS1Nzc2tpbDBvOE1oS1AxZzlGcmZ5NWVCTmZLalUvS3Qremx4ZThvbmRTL1M0K3pMd01MK0cvMDM1MzJkRktub3dBQUFBQUFBQUFBQUFBQURBRkgxLysrcCt3L0V0cDRjUHF2eFZWWXpja0NKUzJyK201NFdmR1ZLVDZVZnpqMStKamF1N2QwbXJuRFA2T2g0UEdRclFWU25KU2kvMVo4bVZURDBXUExYSkc5R3dRc0FBQUQ0cTFWRlhrMGx6ZVFSTXhIbDlvQ1AxZzlGcmZ5NWVCTmZLblUvS3Qremx4ZThvbmRTL1M0K3pMd01MK0cvMHo1MzJkRktub3dBQUFBQUFBQUFBQUFBQURBRkcxL2Y3YW43RC9BTGkyamhkVitPcXJtYmxBQUliT0J4MVdoTGJwU2NYeDVQdFhFaVkzWFljMThVNzBsYU1EcnFyV3IwOCtjTjN3djVtRTBkWEYxV1AvQUtSL2hLMHRhc0c5OVJ4ZlhDZmlsWXg0UzI0NmhnbjFmVTlhY0d2L0FDMzdJVCtRNHlUcjhFZjFmeWpNYnJwQksxR201UG5QSmR5ek1vbzFjblZhUjJwQ3RZclMxV3ZVaktyTzhZeVRzc29yUGd1ejNtWEhidzUxdFZmSmVKdlBiZGVsck5nL1hMNFovSXI0eTdudDJDUDZ2NWFlbWRZTUxVdzlXRUtxY3BRa2t0bVdiYTYwVEZaM1ZaOVpodGptSWxRUzE1NU82bCtseDltWGdZWDhOL3BuenZzNktWUFJnQUFBQUFBQUFBQUFBQUFHQUtycmJvYXZYcVFuU2lwSlJzODByTzkrUGIrQlpXWWh5dGZwY21XMFRWQS9aZkYrclh4SXk1UTUvdS9QOUQ3TDR2MWErSkRsQjd2ei9SbjdMWXoxYStLSTV3bjNkbitoOWxzWDZ0ZkZFYzRSN3V6ZlJqN0w0djFhK0tJNXdlN3MzMForeTJMOVd2aVE1UWU3cy8wUHN2aS9WcjRrT1VIdTdQOEFSajdMNHYxYStKRG1lNzgvMForeStNOVd2aVE1UWU3cy93QkdQc3ZpL1ZyNG9qbEI3dnovQUVQc3ZpL1ZyNGtPY0h1L1A5RDdMNHYxYStKRG5DZmQrYjZKYlZqUVdJbzRoVktrVkdLakpiMDgzMkdOclEyOURwTW1MSnl0NFhNcmRsZ0RJR0FNZ0FBQUFBQStaeVNWMjdKYzl3Uk03TkJhYndyZXo1ZUYrMzh5ZU1xUGFzTXp0eWh2eGQ4eUY4VHY0YW1MMHBRcFBacVZZeGZKdk1uYVZWOCtPazdXbUhoOWY0VDE4TzhjWlllMTRQN29iZUR4dEtzbktsTlRTZG0xekkybUZ0TWxiOTZ6dXhpOUlVcVAzdFNNTDdydlB1SjJtVVh6VXA4YzdHRXg5S3Q5MVVqTzIrei9BQ0d5YVpxWCtDZDN2VXFLS2NwTktLemJlU1JIZG5hWXJHOG8vd0N2OEo2K0hlVHhscisxNFBIT0dZYWR3cmFTclFiYnNzK0xIR1V4cXNNenRGb2I4cHBLN2RrczJ5TzYvZmFOMml0TjRYYTJmTHd2Mi9tVHhsUjdWaDMyNVEzNHUrYTNFTDRuZGtKYStMeDFLa3IxSnhoZm03ZHcyVjN5MHA4VTdQbkNhUm8xdnU2a1p0Y0U4KzRuYVVVelV2OEFETGFaQzFvNGpUR0hweTJaMW9LUzNxK1pPMHFMYW5GV2RyV2h0VUs4Wngyb1NVb3ZpbmRCYlc4V2plck5hckdDY3BOUml0N2JzdThndGFLeHZMVnd1bGFGV1d6VHF4bExrbm1UTVNycHFNZDUycmJkOVl2U1ZHaTdWYWtZTjhHOCs0UkVwdm54NDUydGJaNzRiRVFxUjJvU1VvdmluY2huUzliUnZWNmhrQUFBQUNtNjAxcW1JeE1jRkIyamx0Y20ycjU4MGxtV1Y3ZDNIMXQ3Wk0wWWF0eWVwdUgyTmxTbXAyODV0Yit1TnJXSTV6dXRucG1MajIzM2ErcDJLcVFxVk1ITjM4bmZaNm5GMmFYVnVaTm9qeXIwR1M5Yld4VzlFSmhsaDNpS3YwMXlqMG51MnQ5M3YyVmZkYXhsMzI3Tk92NGM1YmZqVHNrVlMwUHU4cEwvQU55LzRtUDVteEZkRC9kL1AvU2RwMDZPRHd0U3JRemhaeldia203V1dmTGNZOTVudTNxMXBnd3phbmhBNkEwSDlNMnNUaUpTZTFKMlNkbTJzbTIrWEN5NUdVMjI3TkRTNlgyamZMazlXTk82SCtoT09Kdzhta3BXczg3TjlmRlBkWVJiZnNhblRleS82bU9XenJiaXBWY0hScVJ1b1ZMT2E2M0c2VDk5L3dBQlh0S3pYNUxYd1Z0RStmTFR3MVBST3hIYm5QYnN0cTZxNytQbXh0M0V6eVUwcm91TVRhM2Yvd0IraVIwWG83UnRXYThqSnVjWGRKeW5GNVo3cEpYTVptMnpad1lkSmVZNFM4dGE2OVN0aUlZS0R0R1Z0cnJieno1cEpYc1RYdDNZYTY5c21TTU1OdDZtNGZZMlZLZTMrOWRiL1p0YXhIT2QxdnV6SHgyNzd0YlUvRTFLZFdwZzZqdnNYY2VxelNhWFU3cGsyK3F2UVpMVXZPRzNvdEdNcnFuVG5VZTZFWlNmOUtiL0FDTUlkVEpiaFdiZlNGTDBKb3A0K2M4UmlKUFp2YXllOTc3SjhJcE16bWVNT0xwOVA3VmFjbVNVblgxUWlwcXBoNnNxYmpubjByUG1udjd5T2JhbnBzUmFMWTUyZXV0bWtLbEhEeGdwZnRLdlJjbzVaSmRKcmwva1ZqZVdXdXpXeFlvckU5NWEyaTlVYVRwS1ZaeWM1cTdzN0pYenk1aWJLOFBUcVRYZS9scFllblBSK05qU1VuS2xXdHY0cHRwTi93QVNaTS9taFJTTGFYVVJYMGxzNmRqUEY0eU9FVXRtbkJYbGJzdTMxdTFrdTBWN1J1dDFNV3o1NHhlSWg4NmMxWnAwYVRyVUhLTXFWbTd1OTdjVnlZcmJmc2pVNkN1T25QSFBlSG5xL29LT0tqTEU0aVVwT2NuWkoydmJLN2ZiZFc2aGEyekRTNlNNOFRreVMrc0pRZUF4MGFVWk4wcTlsbnZ6eVY3Y1UrUEpqekRLbFowdW9pa1R2RXJtaXQyV1FBQUFCVHRhYUZTaGlZNDJuRzhjdHJrbWxiUGttc2l5dmpaeDliUytQTEdhc05xZXVkRHllMG95MjdlYmJLL3RickVjSld6MVBGeDNqeWl0VDZ6bmpKMUplZE9NNVAzeVRabGFPelU2ZmViWjdXbjlXOWo5S2FNcXljcWtHNXJKdlprbTdaWnRiekdJc3Z5NmpSM21adEhmOWtmanErakhUa3FjSnFwYm81U1dmRGU3R1VjdCs3WHkzMGMxbmp2dWtkV3NIT3JnS2xPV1NxT1hrNzM1S3o3Tm94bVlpV3pvOGRyYWFhejYrR25vSFRmMFBhdzJJaEtLakp0TkxOWDRXNHA3MHliUnYzVTZiVSt6ZjZXU0hqclByQkhFeFZLa25zSjNiZVRienRaY2lhMTJZYTNXeGxqalh3bTZHUG9Vc0ZRamlGZUZTQ1Z0bmFUc3VLTWRwbWV6ZXJteFk4Rkl5ZXNJejZUb2oxY3U2ZnpKMnMxZnhORkxRVHBTeGxMNkhHU1Y0Nzc3MDN0UFBPMnp2Sjc3ZDFFY0xhaXY0S1YxcXc5U2ppSVkybXJxTnRycWNlZkpOTzF5S3pHMnpiMXVPMlBMR2FyYmV1VkRZMmxHVzNiemJXVi9hM0VjVms5VXg4ZC9WRWFvNGgxTWJLcFB6cFFtMzczRXl0NGFtaHZOczgyc3MrSDBqUnhzS3RLbTNsRnhsZFc4OVNXWGN5dmJaMUs1cVo2MnJYOWxhMExwU1dBblBENGlMMmIzdWx4M1hTNHhhTTVqazVtbnp6cGJUanlSMlNHSjF0MnB4cDRXazZqbCs5ZGR5WGlJcDlXeGJxSEswVnhSdTJOYXRIVksrSGpKSzlXbDBtbzU3MTBsSDljQ0t6dEt6VzRiWk1VVzlZYTJpOWJxU3BxTmRTak9LdGtycDI4Qk5WV0hxTkswMnlkcGFXSG5QU0dNalZVWEdqU3R2NEtMY2t2YWJKOFFwck50VnFJdHQrV0c5Zy8rclZQWS93Q01TSitGZmovM3Mvc210WVBSYXZzTXhyNWJ1citUYjltcnFoNkpEK3IrNWsyVjZENU1JN1dQMC9DOXNmNzBaVjhTMXRYL0FMakgrNjFsYnFzZ0FBR0dCaVVVMVpxNlpLSmlKaG9yUTJHVHVxRk8vUFpRNUtZMCtQZmVJaDYwZEhVWVRkU05PTVp5dmRwWnUrOGJzcTRLVm5lSWVEMERoSG41Q0hjT1VxNTBtR2Y2UmFCd25xSWR3NVNScE1NVDhLUWpGSldTc2x1UkRZaUlqdERYeFdBcFZmdktjWjIzYlNUSjNtR0Y4VkxmRkR6K3FNTnM3SGtZYkxkMnRsTE5EbExEMmZGdHR4ZlZYUmxDY1kwNVVvdUZQelUxa3V3YnpDYllNZG9pc3g0ZUgxQmhQVVE3aHlsaDdKaC90YkdFMGRScE85T25HRGU5cFo5NG1abFpqdzQ4Znd3MlhGTldhdW56SVdiYngzYVgxTmhiN1hrS2QvWlJQS1ZQcytMZmZqRDBwYVBvd202a2FjVk41TnBaNS84QXdieXlyZ3gxdHZFZDJjSmdLVkc3cFU0dzI3YlZsYTlyMnYzdnZFenVuSGlwVGZqRzI3NnhXQ3BWVmFwVGpOTDk1SmlKbUMrS2wvaWpkODRYUjlHbDkzVGpDL0pKUHZFek1vcGh4MCtHR3pZaGEwcTJpY1BPVGxPakNVbnhjVTJUeWxUT0RITTd6RU5talFqQmJNSXFNVndTc2lOMWxheFdOb2g1eHdWSlZIV1VFcWozeTR2M2s3c1l4VWkzTGJ1OWExS000dUVsZU1zbW51YUlaV3JGb21KZk9HdzhLY1ZDRVZHSzNKYmlVVnBGSTJxK0srQnBUbkdwS0NjNGVhM3ZYSElib3RpcmFZbWZNTmdoWXlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFmL1onKTsgKi9cclxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAvKiB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59ICovXHJcblxyXG4uYnRue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGVmdC1pbWd7XHJcbiAgd2lkdGg6NjElfVxyXG5cclxuLmlucHV0c3tcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4ubGVmdHtcclxubWFyZ2luLXRvcDogMTQ1cHggO1xyXG59XHJcbi5yaWdodHtcclxubWFyZ2luLXRvcDogMTYwcHggO1xyXG59XHJcbi5pbnB1dC1hcmVhMXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"] });
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
            // console.log(this.email);
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
        // this.authServ.verifyOTPEmail(user).subscribe(data => {
        //   console.log(data);
        // });
        this.authServ.newpassword(user).subscribe(data => {
            console.log("server response: ");
            console.log(data);
            const status = data.status;
            const msg = data.msg;
            // console.log(this.newpassForm.value.password);
            // const email = this.newpassForm.value.email;
            // if (status) {
            // console.log(this.newpassForm.value.password);
            alert('\nMessage: ' + msg + '\n\n Status: ' + status);
            // this.router.navigate(['newpass-component',this.email]);
            // } else {
            // alert(msg);
            // }
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{    \r\n  margin-left: 15px;\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 12px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] { \r\n  margin-left: 15px;\r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  width: 55px;\r\n  font-size: 12px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:61%}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 220px ;\r\n}\r\n\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cGFzcy9uZXdwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBLG1CQUN1QixTQUFTO0NBQy9CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0VBQ2xCOztBQUNGO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFDQTtDQUNDLFdBQVc7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTOztBQUVYO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25ld3Bhc3MvbmV3cGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgY29sb3I6ICMzOGJhYTI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbmlucHV0eyAgICBcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuaTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOGJiYTM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuLndvcmQge1xyXG4gICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMjAgcHg7XHJcbiAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xyXG59XHJcbi5lbWFpbElucHV0e1xyXG5tYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4uaW5wdXQtZmllbGQgeyBcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0cGFkZGluZzogMTBweDsgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuLmlucHV0LWljb25zIGkgeyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbi5he1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuLnYye1xyXG4gIG1hcmdpbi10b3A6IDQwcHggO1xyXG4gIGNvbG9yOiAjMzhiYWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbntcclxuXHRoZWlnaHQ6YXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJ0bntcclxuICAvKiBwYWRkaW5nOiAwcHg7ICovXHJcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuMXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWltZ3tcclxuICB3aWR0aDo2MSV9XHJcblxyXG4uaW5wdXRze1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5sZWZ0e1xyXG5tYXJnaW4tdG9wOiAxNDVweCA7XHJcbn1cclxuLnJpZ2h0e1xyXG5tYXJnaW4tdG9wOiAyMjBweCA7XHJcbn1cclxuLmlucHV0LWFyZWExe1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59Il19 */"] });
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
        return this.httpClient.post(`${this.url}/user/signup`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    /////////////////////////////////////
    /* API Call to verify otp code */
    //Verifying the email address while signing the user up
    verifyOTPEmail(user) {
        return this.httpClient.post(`${this.url}/user/verifyemail`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Verifying the user using otp code to his gmail to change his/her password
    verifyOTPCode(user) {
        return this.httpClient.post(`${this.url}/user/password/verifyotpcode`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Adding new password after forgetting the old password
    newpassword(user) {
        return this.httpClient.post(`${this.url}/user/password/newpassword`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // Function to Login the already existed user
    login(user) {
        // console.log('Hello', user.email);
        return this.httpClient.post(`${this.url}/user/login`, user);
        // .subscribe((data: any) => {
        //   localStorage.setItem('access_token', data.token)
        //   this.getUserProfile(data._id).subscribe((data) => {
        //     this.currentUser = data;
        //     this.router.navigate(['users/profile/' + data.msg._id]);
        //   })
        // })
    }
    verifyEmail(body) {
        return this.httpClient.post(`${this.url}/user/password/verifyemail`, body);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_19_div_1_Template, 2, 0, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_24_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_24_div_2_Template, 2, 0, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_30_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_30_div_2_Template, 2, 0, "div", 26);
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
    // check() {
    //   if (document.getElementById('password') ==
    //     document.getElementById('confirm')) {
    //     document.getElementById('message').style.color = 'green';
    //     document.getElementById('message').innerHTML = 'matching';
    //     console.log('check function 01');
    //   } else {
    //     document.getElementById('message').style.color = 'red';
    //     document.getElementById('message').innerHTML = 'password not matching';
    //     console.log('check function 02');
    //   }
    // }
    registerUser() {
        // this.check();
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value));
        // this.authService.getAll().subscribe((data) => {
        //   console.log(data);
        // })
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
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 45, vars: 13, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Username", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["type", "text", "formControlName", "email", "id", "email", "placeholder", "Enter Email", 1, "form-control", "emailInput", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-lock", "fa-lg"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "form-control", "inputs", 3, "ngClass"], ["password", ""], ["type", "password", "name", "confirm", "id", "confirm", "placeholder", "Confirm Password", 1, "form-control", "inputs"], ["confirm", ""], ["id", "message"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/login-component"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Already Registered! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Login!");
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%]{\r\n  color:#38baa2;\r\n  }\r\nh2[_ngcontent-%COMP%]{\r\n  color: #38baa2;\r\n  font-weight: 600;\r\n  margin-left: 200px;\r\n  margin-top: -10px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  border: 2px solid #0000001a !important;\r\n  border-radius: 50rem!important;\r\n}\r\ni[_ngcontent-%COMP%]:before {\r\n  position: relative;\r\n  top: 30%;\r\n  font-size: 22px;\r\n  color: #38bba3;\r\n  margin-right: 1px;\r\n}\r\n.word[_ngcontent-%COMP%] {\r\n    color: #38baa2;\r\n    letter-spacing: 1px;\r\n    padding: 20 px;\r\n    font: bold 14px arial,sans-serif;\r\n    \r\n}\r\n.emailInput[_ngcontent-%COMP%]{\r\nmargin-left: 10px;\r\n}\r\n.input-field[_ngcontent-%COMP%] { \r\n\twidth: 100%; \r\n\tpadding: 10px; \r\n\ttext-align: center; \r\n}\r\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n\tposition: absolute; \r\n}\r\n.input-container[_ngcontent-%COMP%] { \r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-bottom: 15px;\r\n  }\r\n.a[_ngcontent-%COMP%]{\r\n\ttext-align: left;\r\n}\r\n.vl[_ngcontent-%COMP%]{\r\n  border-left: 2.2px solid #38baa2;\r\n  height: 250px;\r\n  margin-left: 22px;\r\n}\r\n.v2[_ngcontent-%COMP%]{\r\n  margin-top: 40px ;\r\n  color: #38baa2;\r\n  font-weight: bold;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n\theight:auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  font-size: 14px;\r\n  background-color: #38baa2 ;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n}\r\n.left-img[_ngcontent-%COMP%]{\r\n  width:61%}\r\n.inputs[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\nmargin-top: 145px ;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\nmargin-top: 160px ;\r\n}\r\n.input-area1[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBLG1CQUN1QixTQUFTO0NBQy9CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0VBQ2xCO0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjtBQUNBOzs7Ozs7OztvdVFBUW91UTtBQUNsdVEscUJBQXFCO0FBQ25CO2dCQUNZO0FBQ2Q7O0dBRUM7QUFFSDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFNBQVM7QUFFWDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gIGNvbG9yOiMzOGJhYTI7XHJcbiAgfVxyXG5oMntcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG59XHJcbmk6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzhiYmEzO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi53b3JkIHtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cclxufVxyXG4uZW1haWxJbnB1dHtcclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmlucHV0LWZpZWxkIHsgXHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdHBhZGRpbmc6IDEwcHg7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0gXHJcbi5pbnB1dC1pY29ucyBpIHsgXHJcblx0cG9zaXRpb246IGFic29sdXRlOyBcclxufSBcclxuLmlucHV0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4uYXtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi52bHtcclxuICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi52MntcclxuICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICBjb2xvcjogIzM4YmFhMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW57XHJcblx0aGVpZ2h0OmF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLyogXHJcbi5iZy1pbWFnZSB7ICAgIFxyXG4gIGhlaWdodDogNjUwcHg7IFxyXG4gIHdpZHRoOiA1MDBweDsgXHJcbiAgbWF4LXdpZHRoOiA2NTBweDsgXHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYXNhc2EwNi5wbmcpO1xyXG5cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhBUUVCVVBFQkVXRWhBUUZSWVlGUmdWRmhVVkZSZ1lGUllXRmhjWEZoVVlIU2dnR0JzbEd4WVZJVEVoSlNrckxpNHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HaEFRR2kwbEh5VXRMUzB0TFMwdEt5MHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBT0VBNFFNQkVRQUNFUUVERVFIL3hBQWJBQUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFCUVlCQkFjREF2L0VBRVFRQUFJQkFnSUdCUWdIQndNRkFRQUFBQUFCQWdNUkJDRUZCaEl4UVZFaVlYR1JzUk15TkZOeWdaTFJGQlVXTTZIQjhDTlNZbk9Dc3VFSG9zSTFRa09qOFNUL3hBQWJBUUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFBUU1DQkFVR0IvL0VBRElSQVFBQ0FRTURBUVlGQXdVQkFBQUFBQUFCQWdNRUVSSUZJVEZCRkJVeU0xR0JFeUpoY2JGQ1VwRWpOS0hSOEVQLzJnQU1Bd0VBQWhFREVRQS9BTzRnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHR3dNS1Y5d1JFNytIMEVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUh6T1NTYmJzbG0yOXlDSm1JanVvbXN1c2pyWG8wVzFTV1VueG44bytKYldyZzYzWGM1NFU4TlBRT241NFo3THZPaTk4ZUs2NC9JbTFkMU9rMWxzTTdXbmVIUWNIaTRWWUtwVGtwUmY2cytUS3R0bm9jZVN1U09WWHVpRmpJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQmEzWXlwUncrMVRsc3ljNHE2MzJ6ZjVHVllocGE3SmZIaTNyS21mWCtMOWZQOFBrVzhJY1QyM1A4QTNTczJxR2xLbFNGV1ZlcGRRczd5c3JLenZuN2l1ME9wb05SZTFiVGtud2h0Wk5ZWGlINU9ubFJYdWMrdDhsMUdWYTdOTFdhMmNzOGErUDVRQm01b0VwRFErbHFtR250UWQ0dnpvdmRMNVBySW1OMnhwOVZmRGJlcm9taXRKMDhSRGJwdnRYR0w1UDVsTXhzOUhoejB6VjNxM1NGN0lBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3VhOWVqTCtaSHdrWjA4dWQxUDVLZ0ZyejM2UFJWcEtMZ20xR1RUYTROcmRmbU5tVVh0RmVNVDJlWVlBU0FBTm5BWTJwUW1xbE9WcEx1YTVOY1VSTWJyY09XMkszS3JvV2d0T1U4VEhMbzFVdWxCdjhWelJWTmRub3ROcTY1by9WTG1MYkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFLeHIzV2o1Q01McmFjMDB1TmtuZC9pWjBjenFkNGpGeFVRdGNBQUFBQUFBQjZVYTBvU1U0U2NaUjNOYnlObVZMMnBPOEw3cTdySEhFV3AxT2pXL0NYV3V2cUs3VjJlZzBtdXJsL0xieXNDTUhRWkFBQUFBQUFBQUFBQUFBQUFBQUFDQjFoMWloaCtoQzA2M0xoSHJsOGpPdGQyaHE5YlhGK1dPOHFCaWNST3JKenFTMnBTM3QvckpGa1JzOC9reVd2UEt6eUpZZG01bzdSbGJFTzFLTjdiM3VpdTEva1JNN0xzT212bCtGYXNEcVhUV2RhbzVQbEhveDc5L2dZVGVYV3hkTHJIeHlscWVybUVpcmVSVDdidnhNZVV0dU5GZ2orbG1lcnVFZVhrWXJzdWh5bE02TEJQOU1Jekc2bVVYblNuS0Q1UHBSL0hQOFNZdkxWeTlMcFB3VHNxdWxkRFZzTS8ya2Vqd2tzNHY1UHRNNHRFdVZuMG1YRjVqdDlVZVpOWmxPMmF5YUJFekhkYzlYTlo5cTFIRU8wc2xHZkI5VXVUNnl1MVhiMGV2aTM1TW5sYlV5dDFtUWtBQUFBQUFBQUFBQUFBQUF4Y0NwNng2MEtONk9IZDVacVUxdVhWSG0rc3NyVnlkWnI0citUSC9sUzVTYmQyN3Q3MjgyKzBzY09abVozbGdDYTFkMEZMRXkycFhqUmk4Mys5L0RINW1OcDJiMmowazVwM253NkZoY05DbkZRaEZSaXR5UlRMME5NZGFSdFdIcmNNeTRRWENRRDRxMG95VGpKS1VXck5OWFRYSm9STEcxWXRHMHdvZXMrcjNrUDJ0SzdvdDVyZTRmNExhMjNjSFc2TDhQOEFQWHdycG01b0NGbjFkMW1kTzFLdTcwK0V1TWVwODE0RmRxdXJvOWZOZnlaUEM4UXFLU1RUVFQzTmJ2Y1Z1NUZvbU40ZllTQUFBQUFBQUFBQUFBQUFvZXNtc3NxamxSb3R4cHE2azkwcFd5YTZrV1ZxNFdzMTAybmhUdENzbGpsQUcxb3pCU3IxWTBvNzVQTjhrczIrNGlaMlc0TVU1Y2tWaDFIQjRhTktFYWNGYU1WWmZNcG1YcXNlT01kWXJWN0dNeXlSZU4wbnM1UTNYdHRXdjNMaWFHWFc5NXJqN3kxOG1majRRdERHVnFtSXFVS3VjWXJhVFVubXJwSzZWa24yRFV6YU5QWE5XMDd6NWpab1lzOTc1cllyZW5mdEtIMWcwblZwVFVzSFZsS1ZPN3F4aTNLQ1c5T1NXUzRtOTB1TWw2VEdvN2IrSmErcXp6UysrRzNmMWhJYXBhNVZNUTVRcndWb1c2VWQrZTY4ZVBhdTR2MXRjZW00eE52TFowWFVMWk8xNCs2NlFsZFhUdW51S2F6RXh2RHJibFNtcEp4a3J4YXMwOXpUSlJNUk1iUzVqcDdScncxWjAvOEF0ZWNIL0MvelZtaSt0dDNtTlhnL0J5YmVub2ppV3IyQW56MlRlcitzTThNOWlkNVVYdlhHUFhINUdGcTd0L1NhMjJLZU51OGZ3NkpTcUtTVWx1a2sxMk1xZWlyTVdqZUgyRWdBQUFBQUFBQUFBQUFhazlHMEc3dWxCdDczc3hKM2xWT0RIUG9wbXUrSGhUcTAxQ0NpbkIzMlVseDZpeWppOVRwV3RxN1FyWm01aTQ2ZzRUS3BYZSsrd3U1U2ZpaXU4dXowckgybS93Qmx3SzNaUm1sc1RhMU5jYzMyY3YxeU9YMUhVVFNzVWoxVVpiLzBvZWpvK1BscFYzS1RUanM3TDgxZGkvVzltbFhWWC9CakRXSTMzOCtyU3JwNi9pZml6TTdiZUZYMDVXVkd0NVhEMUd2S0ozejZTYXNtbW5ueWVaNi9wOVp6WVlwbnI0MmVlMWt4aHo4OE52S3IxNWI3Y1RxeldQRU5XaytzckZxbkNFbCt4bnN5MldxMFpKZEoydkNjTTdxemZ2dHdQSjlidmFKNDM3LzJ1NW82eE5kNi9kZWRCWXpabDVHVHVwZWIycmZidDNuUDZkcVptWnh6NDlIVzArVHZ4bFlFZGx1cTFyMWhOcWdxdkdsSmQwbmJ4c1owbnU1blU4ZStQbjlGRExaY0JPYW4wSXp4T3pPS2t0aVdUU2E0Y0dZMjhON3AxYTJ5N1Q5RjYrcktIcVlmREg1Rlc4dTlHREg2UTI0b2hiSFprSkFBQUFBQUFBQUFBQUF3QlI5Zi92YWZzUHhMYU9IMVg0cXFzWnVTNkpxWkMyRWovRktUL3dCelhna1UzOHZTZFBqYkRDZFppM2xQMG5wYW5DZFdyVWxzeGhVMkh2ZWFzbGtjVFY2WE5tMVBHc2J1WGx6MXJhWnNxbXN1c0RxeVZLbTJxU1NlVDg2OW1ycmhia2Qvby9USzRhODhrYjIvaHg5ZnE3Wko0MG5zZ0oxejBEbFJTV3BXcWtUSzZsVngxWjBmVWxnM0NvM0NGU2UxSFp5bnM5Ritkd1RhM1c1OHp4ZldOWlN1cDNyRyswYmZvN21seFQrRjNiZUFwVjZOZU1wU2pVcHduZURkMVVVY25iYTR0N256Tkt1cHcydFdhOXAzamY2U3NwTTB2RXVrbzdydG8zV1NDZUVySjhJTjkyYThES3ZscmF1dStHME9ZRjd5cWYxSTlML29sNHhNTCtIUjZaODc3T2hsVDBRQUFBQUFBQUFBQUFBQUFCZ0NqNi8vQUh0UDJINGx0UERoOVYrS3FyR2JrdWlhbDFMNFNQOEFES1NmZmZ3YUtiZVhvK24yM3dRbldZdC8xY2oxdnhjc0xqNjBaUVZTbFVsQ3BzeXl6MlU5cFB0dXZjYmthU00rT0xWbmEwZG5tOVZNNDg5cXo0OHRUQWFMbGk2Y25TcVFjSXZaaDVSU2Mxa25hVTBzckpyZGRNMU0vVWE2TzlZeVZuZjFWVjAwNVluaktJMHRvK3RobmFyR3liYWpKTzhaVzVQNW5VMHZVTU9wamVrL1pyWDAxc2Z4SXFyVk51ZkJXanBPQjFodzBxTk4rVmpGN01ZN01tbEpOSkt6UjgrMW1nMUVacmZsbVhYcmtpYTdRM0thOHBVaEQ5NmNWbHl1cnZ1dXpTMHNUYlBXTnZWRlB6WkloZmtldDhPNGo5WVBSYTM4dVhnWlY4cU5UOHEzN09YRjd5YXdha2VsL3dCRXZHSmhmdzZQVFBuZlowSXFlaUFBQUFBQUFBQUFBQUFBQU1BVWZYLzcybjdEOFMybmh3K3EvRlZWak55VncxQnhpWGxLRGUvcHJ1U2w0SXJ2RHM5S3krYVN1Slc3Q2wvNms2dlBFMFZYcFJ2Vm8zdWx2bERqYm0xdjd6YjB1YmhiakxtZFIwMDNyenI1aitIUDlWTllGaG02RlhLbktWMUxmWnV5ejZza2FuVyttMnp4R2FubUkvNGM3VDVkbDN4TTZjb05WVkZ3NDdWbXZ4UElZYjVLMy8wOTkyMU42ekhkeVRTK0pweXJWSFNpb1U5cm9wWnF5eXV1MjEvZWZSTkpXOWNOWXlUdkxVbXNiOWpRbUZsV3hFSXJLejJtK1NqbitWdmVVOVN6eGcwOXBuLzI2WTJoMjdWVFI3bEw2VEpkRksxUHJ2dmwyV3lYYXp6UFM5Tk5ZbkphTzgrSFMwT0dkK2R2c3RSMTNUUitzSG90YitYTHdKcjVVYW41VnYyY3VMM2xFOXFVL3dEOWE2NFMvSi9rWVg4T2gwejUzMmRFS25vZ0FBQUFBQUFBQUFBQUFBREFGSDEvKzlwK3cvRXRwNGNQcXZ4VlZZemNsczZQeGtxTldOV08rRDcxdWE5NnVSTWJyY09XY2Q0dERxR0J4Y0sxT05TRHZHUzd1YWZXVXpHMHZVNHNsY2xZdERZYUlXS1ByWC9wN1N4TGRYRHRVYWp6Y2JkQ1Q1NWVhK3ovQUNiZUxWVFNOcmQ0Y3pVZFBpMDhzZmFmK0ZYMWgwRnBONGVOQjBaU3RsTnc2ZTJvcFdhMmMrMjYzbWhwTkpoeGFxMldmRStQMGFWc09hbmFhLzQ3cTdnOVJkSVZYWllhY2V1YTJGL3VzZDIyb3hWOVdOTVdhM2lzL2ZzNkZxaC9wMnNOZWVKbXB1VnJ3aXVqMlNsdmE2bGIzbk0xVjZaNWplUERmd2FDWW5say93QUwvR0tTc3NraWwwbzhNaEtQMWc5RnJmeTVlQk5mS2pVL0t0K3pseGU4b25kUy9TNCt6THdNTCtHLzAzNTMyZEZLbm93QUFBQUFBQUFBQUFBQUFEQUZIMS8rK3Ardy9FdHA0Y1BxdnhWVll6Y2tDSlMycittNTRXZkdWS1Q2VWZ6ajErSmphdTdkMG1ybkRQNk9oNFBHUXJRVlNuSlNpLzFaOG1WVEQwV1BMWEpHOUd3UXNBQUFENHExVkZYazBsemVRUk14SGw5b0NQMWc5RnJmeTVlQk5mS25VL0t0K3pseGU4b25kUy9TNCt6THdNTCtHLzB6NTMyZEZLbm93QUFBQUFBQUFBQUFBQUFEQUZHMS9mN2FuN0QvQUxpMmpoZFYrT3FybWJsQUFJYk9CeDFXaExicFNjWHg1UHRYRWlZM1hZYzE4VTcwbGFNRHJxcldyMDgrY04zd3Y1bUUwZFhGMVdQL0FLUi9oSzB0YXNHOTlSeGZYQ2ZpbFl4NFMyNDZoZ24xZlU5YWNHdi9BQzM3SVQrUTR5VHI4RWYxZnlqTWJycEJLMUdtNVBuUEpkeXpNb28xY25WYVIycEN0WXJTMVd2VWpLck84WXlUc3NvclBndXozbVhIYnc1MXRWZkplSnZQYmRlbHJOZy9YTDRaL0lyNHk3bnQyQ1A2djVhZW1kWU1MVXc5V0VLcWNwUWtrdG1XYmE2MFRGWjNWWjlaaHRqbUlsUVMxNTVPNmwrbHg5bVhnWVg4Ti9wbnp2czZLVlBSZ0FBQUFBQUFBQUFBQUFBR0FLcnJib2F2WHFRblNpcEpSczgwck85K1BiK0JaV1loeXRmcGNtVzBUVkEvWmZGK3JYeEl5NVE1L3UvUDlEN0w0djFhK0pEbEI3dnovUm43TFl6MWErS0k1d24zZG4raDlsc1g2dGZGRWM0Ujd1emZSajdMNHYxYStLSTV3ZTdzMzBaK3kyTDlXdmlRNVFlN3MvMFBzdmkvVnI0a09VSHU3UDhBUmo3TDR2MWErSkRtZTc4LzBaK3krTTlXdmlRNVFlN3Mvd0JHUHN2aS9WcjRvamxCN3Z6L0FFUHN2aS9WcjRrT2NIdS9QOUQ3TDR2MWErSkRuQ2ZkK2I2SmJWalFXSW80aFZLa1ZHS2pKYjA4MzJHTnJRMjlEcE1tTEp5dDRYTXJkbGdESUdBTWdBQUFBQUErWnlTVjI3SmM5d1JNN05CYWJ3cmV6NWVGKzM4eWVNcVBhc016dHlodnhkOHlGOFR2NGFtTDBwUXBQWnFWWXhmSnZNbmFWVjgrT2s3V21IaDlmNFQxOE84Y1pZZTE0UDdvYmVEeHRLc25LbE5UU2RtMXpJMm1GdE1sYjk2enV4aTlJVXFQM3RTTUw3cnZQdUoybVVYelVwOGM3R0V4OUt0OTFVak8yK3ovQUNHeWFacVgrQ2QzdlVxS0tjcE5LS3piZVNSSGRuYVlyRzhvL3dDdjhKNitIZVR4bHIrMTRQSE9HWWFkd3JhU3JRYmJzcytMSEdVeHFzTXp0Rm9iOHBwSzdka3MyeU82L2ZhTjJpdE40WGEyZkx3djIvbVR4bFI3VmgzMjVRMzR1K2EzRUw0bmRrSmErTHgxS2tyMUp4aGZtN2R3MlYzeTBwOFU3UG5DYVJvMXZ1NmtadGNFOCs0bmFVVXpVdjhBRExhWkMxbzRqVEdIcHkyWjFvS1MzcStaTzBxTGFuRldkcldodFVLOFp4Mm9TVW92aW5kQmJXOFdqZXJOYXJHQ2NwTlJpdDdic3U4Z3RhS3h2TFZ3dWxhRldXelRxeGxMa25tVE1TcnBxTWQ1MnJiZDlZdlNWR2k3VmFrWU44RzgrNFJFcHZueDQ1MnRiWjc0YkVRcVIyb1NVb3ZpbmNoblM5YlJ2VjZoa0FBQUFDbTYwMXFtSXhNY0ZCMmpsdGNtMnI1ODBsbVdWN2QzSDF0N1pNMFlhdHllcHVIMk5sU21wMjg1dGIrdU5yV0k1enV0bnBtTGoyMzNhK3AyS3FRcVZNSE4zOG5mWjZuRjJhWFZ1Wk5vanlyMEdTOWJXeFc5RUpobGgzaUt2MDF5ajBudTJ0OTN2MlZmZGF4bDMyN05PdjRjNWJmalRza1ZTMFB1OHBML0FOeS80bVA1bXhGZEQvZC9QL1NkcDA2T0R3dFNyUXpoWnpXYmttN1dXZkxjWTk1bnUzcTFwZ3d6YW5oQTZBMEg5TTJzVGlKU2UxSjJTZG0yc20yK1hDeTVHVTIyN05EUzZYMmpmTGs5V05PNkgraE9PSnc4bWtwV3M4N045ZkZQZFlSYmZzYW5UZXkvNm1PV3pyYmlwVmNIUnFSdW9WTE9hNjNHNlQ5OS93QUJYdEt6WDVMWHdWdEUrZkxUdzFQUk94SGJuUGJzdHE2cTcrUG14dDNFenlVMHJvdU1UYTNmL3dCK2lSMFhvN1J0V2E4akp1Y1hkSnluRjVaN3BKWE1abTJ6WndZZEplWTRTOHRhNjlTdGlJWUtEdEdWdHJyYnp6NXBKWHNUWHQzWWE2OXNtU01NTnQ2bTRmWTJWS2UzKzlkYi9adGF4SE9kMXZ1ekh4Mjc3dGJVL0UxS2RXcGc2anZzWGNlcXpTYVhVN3BrMitxdlFaTFV2T0czb3RHTXJxblRuVWU2RVpTZjlLYi9BQ01JZFRKYmhXYmZTRkwwSm9wNCtjOFJpSlBadmF5ZTk3N0o4SXBNem1lTU9McDlQN1ZhY21TVW5YMVFpcHFwaDZzcWJqbm4wclBtbnY3eU9iYW5wc1JhTFk1MmV1dG1rS2xIRHhncGZ0S3ZSY281WkpkSnJsL2tWamVXV3V6V3hZb3JFOTVhMmk5VWFUcEtWWnljNXE3czdKWHp5NWliSzhQVHFUWGUvbHBZZW5QUitOalNVbktsV3R2NHB0cE4vd0FTWk0vbWhSU0xhWFVSWDBsczZkalBGNHlPRVV0bW5CWGxic3UzMXUxa3UwVjdSdXQxTVd6NTR4ZUloODZjMVpwMGFUclVIS01xVm03dTk3Y1Z5WXJiZnNqVTZDdU9uUEhQZUhucS9vS09LakxFNGlVcE9jblpKMnZiSzdmYmRXNmhhMnpEUzZTTThUa3lTK3NKUWVBeDBhVVpOMHE5bG52enlWN2NVK1BKanpES2xaMHVvaWtUdkVybWl0MldRQUFBQlR0YWFGU2hpWTQybkc4Y3Rya21sYlBrbXNpeXZqWng5YlMrUExHYXNOcWV1ZER5ZTBveTI3ZWJiSy90YnJFY0pXejFQRngzanlpdFQ2em5qSjFKZWRPTTVQM3lUWmxhT3pVNmZlYlo3V245VzlqOUthTXF5Y3FrRzVySnZaa203Wlp0YnpHSXN2eTZqUjNtWnRIZjlrZmpxK2pIVGtxY0pxcGJvNVNXZkRlN0dVY3QrN1h5MzBjMW5qdnVrZFdzSE9yZ0tsT1dTcU9YazczNUt6N05veG1ZaVd6bzhkcmFhYXo2K0dub0hUZjBQYXcySWhLS2pKdE5MTlg0VzRwNzB5YlJ2M1U2YlUremY2V1NIanJQckJIRXhWS2tuc0ozYmVUYnp0WmNpYTEyWWEzV3hsampYd202R1BvVXNGUWppRmVGU0NWdG5hVHN1S01kcG1lemVybXhZOEZJeWVzSXo2VG9qMWN1NmZ6SjJzMWZ4TkZMUVRwU3hsTDZIR1NWNDc3NzAzdFBQTzJ6dko3N2QxRWNMYWl2NEtWMXF3OVNqaUlZMm1ycU50cnFjZWZKTk8xeUt6RzJ6YjF1TzJQTEdhcmJldVZEWTJsR1czYnpiV1YvYTNFY1ZrOVV4OGQvVkVhbzRoMU1iS3BQenBRbTM3M0V5dDRhbWh2TnM4MnNzK0gwalJ4c0t0S20zbEZ4bGRXODlTV1hjeXZiWjFLNXFaNjJyWDlsYTBMcFNXQW5QRDRpTDJiM3VseDNYUzR4YU01ams1bW56enBiVGp5UjJTR0oxdDJweHA0V2s2amwrOWRkeVhpSXA5V3hicUhLMFZ4UnUyTmF0SFZLK0hqSks5V2wwbW81NzEwbEg5Y0NLenRLelc0YlpNVVc5WWEyaTlicVNwcU5kU2pPS3RrcnAyOEJOVldIcU5LMDJ5ZHBhV0huUFNHTWpWVVhHalN0djRLTGNrdmFiSjhRcHJOdFZxSXR0K1dHOWcvK3JWUFkvd0NNU0orRmZqLzNzL3NtdFlQUmF2c014cjVidXIrVGI5bXJxaDZKRCtyKzVrMlY2RDVNSTdXUDAvQzlzZjcwWlY4UzF0WC9BTGpIKzYxbGJxc2dBQUdHQmlVVTFacTZaS0ppSmhvclEyR1R1cUZPL1BaUTVLWTArUGZlSWg2MGRIVVlUZFNOT01aeXZkcFp1Kzhic3E0S1ZuZUllRDBEaEhuNUNIY09VcTUwbUdmNlJhQnducUlkdzVTUnBNTVQ4S1FqRkpXU3NsdVJEWWlJanREWHhXQXBWZnZLY1oyM2JTVEozbUdGOFZMZkZEeitxTU5zN0hrWWJMZDJ0bExORGxMRDJmRnR0eGZWWFJsQ2NZMDVVb3VGUHpVMWt1d2J6Q2JZTWRvaXN4NGVIMUJoUFVRN2h5bGg3SmgvdGJHRTBkUnBPOU9uR0RlOXBaOTRtWmxaanc0OGZ3dzJYRk5XYXVueklXYmJ4M2FYMU5oYjdYa0tkL1pSUEtWUHMrTGZmakQwcGFQb3dtNmthY1ZONU5wWjUvOEF3Ynl5cmd4MXR2RWQyY0pnS1ZHN3BVNHcyN2JWbGE5cjJ2M3Z2RXp1bkhpcFRmakcyNzZ4V0NwVlZhcFRqTkw5NUppSm1DK0tsL2lqZDg0WFI5R2w5M1RqQy9KSlB2RXpNb3BoeDArR0d6WWhhMHEyaWNQT1RsT2pDVW54Y1UyVHlsVE9ESE03ekVObWpRakJiTUlxTVZ3U3NpTjFsYXhXTm9oNXh3VkpWSFdVRXFqM3k0djNrN3NZeFVpM0xidTlhMUtNNHVFbGVNc21udWFJWldyRm9tSmZPR3c4S2NWQ0VWR0szSmJpVVZwRkkycStLK0JwVG5HcEtDYzRlYTN2WEhJYm90aXJhWW1mTU5naFl5QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBZi9aJyk7ICovXHJcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgLyogd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlOyAqL1xyXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufSAqL1xyXG5cclxuLmJ0bntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmxlZnQtaW1ne1xyXG4gIHdpZHRoOjYxJX1cclxuXHJcbi5pbnB1dHN7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmxlZnR7XHJcbm1hcmdpbi10b3A6IDE0NXB4IDtcclxufVxyXG4ucmlnaHR7XHJcbm1hcmdpbi10b3A6IDE2MHB4IDtcclxufVxyXG4uaW5wdXQtYXJlYTF7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"] });
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    width: 100px;\r\n    font-size: 14px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n  }\r\n  \r\n  .btn1[_ngcontent-%COMP%]{\r\n    \r\n    width: 100px;\r\n    font-size: 13px;\r\n    background-color: #38baa2 ;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n    \r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%]{\r\n    color: #38baa2;\r\n    font-weight: 600;\r\n    margin-left: 200px;\r\n    margin-top: -10px;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]{\r\n    border: 2px solid #0000001a !important;\r\n    border-radius: 50rem!important;\r\n  }\r\n  \r\n  i[_ngcontent-%COMP%]:before {\r\n    position: relative;\r\n    top: 30%;\r\n    font-size: 22px;\r\n    color: #38bba3;\r\n    margin-right: 1px;\r\n  }\r\n  \r\n  .word[_ngcontent-%COMP%] {\r\n      color: #38baa2;\r\n      letter-spacing: 1px;\r\n      padding: 20 px;\r\n      font: bold 14px arial,sans-serif;\r\n      \r\n  }\r\n  \r\n  .emailInput[_ngcontent-%COMP%]{\r\n  margin-left: 12px;\r\n  }\r\n  \r\n  .input-field[_ngcontent-%COMP%] { \r\n      width: 100%; \r\n      padding: 10px; \r\n      text-align: center; \r\n  }\r\n  \r\n  .input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \r\n      position: absolute; \r\n  }\r\n  \r\n  .input-container[_ngcontent-%COMP%] { \r\n      display: flex;\r\n      width: 100%;\r\n      margin-bottom: 15px;\r\n    }\r\n  \r\n  .a[_ngcontent-%COMP%]{\r\n      text-align: left;\r\n  }\r\n  \r\n  .vl[_ngcontent-%COMP%]{\r\n    border-left: 2.2px solid #38baa2;\r\n    height: 250px;\r\n    margin-left: 22px;\r\n  }\r\n  \r\n  .v2[_ngcontent-%COMP%]{\r\n    margin-top: 40px ;\r\n    color: #38baa2;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .login[_ngcontent-%COMP%]{\r\n      height:auto;\r\n    min-height: 100vh;\r\n  }\r\n  \r\n  .left-img[_ngcontent-%COMP%]{\r\n    width:61%}\r\n  \r\n  .inputs[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n  }\r\n  \r\n  .left[_ngcontent-%COMP%]{\r\n  margin-top: 145px ;\r\n  }\r\n  \r\n  .right[_ngcontent-%COMP%]{\r\n  margin-top: 220px ;\r\n  }\r\n  \r\n  .input-area1[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwb3RwL3NpZ251cG90cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0Qyw4QkFBOEI7RUFDaEM7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUNBO01BQ0ksY0FBYztNQUNkLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsZ0NBQWdDO01BQ2hDLHVCQUF1QjtFQUMzQjs7RUFDQTtFQUNBLGlCQUFpQjtFQUNqQjs7RUFDQTtNQUNJLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCOztFQUNBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUNBLG1CQUMwQixTQUFTO01BQy9CLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCOztFQUNGO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLFdBQVc7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxTQUFTOztFQUVYO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztFQUNBOztJQUVFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cG90cC9zaWdudXBvdHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRue1xyXG4gICAgLyogcGFkZGluZzogMHB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bjF7XHJcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xyXG4gIH1cclxuICBcclxuICBoMntcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDAxYSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xyXG4gIH1cclxuICBpOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMzhiYmEzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgfVxyXG4gIC53b3JkIHtcclxuICAgICAgY29sb3I6ICMzOGJhYTI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwIHB4O1xyXG4gICAgICBmb250OiBib2xkIDE0cHggYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgLyogYmFja2dyb3VuZDouICNmZmY7ICovXHJcbiAgfVxyXG4gIC5lbWFpbElucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAuaW5wdXQtZmllbGQgeyBcclxuICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9IFxyXG4gIC5pbnB1dC1pY29ucyBpIHsgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgfSBcclxuICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgLmF7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC52bHtcclxuICAgIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gIH1cclxuICAudjJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4IDtcclxuICAgIGNvbG9yOiAjMzhiYWEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5sb2dpbntcclxuICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnQtaW1ne1xyXG4gICAgd2lkdGg6NjElfVxyXG4gIFxyXG4gIC5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmxlZnR7XHJcbiAgbWFyZ2luLXRvcDogMTQ1cHggO1xyXG4gIH1cclxuICAucmlnaHR7XHJcbiAgbWFyZ2luLXRvcDogMjIwcHggO1xyXG4gIH1cclxuICAuaW5wdXQtYXJlYTF7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH0iXX0= */"] });
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