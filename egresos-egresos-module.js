(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["egresos-egresos-module"],{

/***/ "./src/app/egresos/beneficiarios/beneficiarios.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/egresos/beneficiarios/beneficiarios.component.ts ***!
  \******************************************************************/
/*! exports provided: BeneficiariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariosComponent", function() { return BeneficiariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BeneficiariosComponent {
    constructor() { }
    ngOnInit() {
    }
}
BeneficiariosComponent.ɵfac = function BeneficiariosComponent_Factory(t) { return new (t || BeneficiariosComponent)(); };
BeneficiariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeneficiariosComponent, selectors: [["app-beneficiarios"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function BeneficiariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeneficiariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-beneficiarios',
                templateUrl: './beneficiarios.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/egresos/egresos-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/egresos/egresos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EgresosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosRoutingModule", function() { return EgresosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficiarios/beneficiarios.component */ "./src/app/egresos/beneficiarios/beneficiarios.component.ts");
/* harmony import */ var _tipos_egresos_tipos_egresos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipos-egresos/tipos-egresos.component */ "./src/app/egresos/tipos-egresos/tipos-egresos.component.ts");
/* harmony import */ var _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participantes/participantes.component */ "./src/app/egresos/participantes/participantes.component.ts");
/* harmony import */ var _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./egresos/egresos.component */ "./src/app/egresos/egresos/egresos.component.ts");








const routes = [
    {
        path: '',
        children: [
            { path: 'beneficiarios', component: _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_2__["BeneficiariosComponent"] },
            { path: 'tipos', component: _tipos_egresos_tipos_egresos_component__WEBPACK_IMPORTED_MODULE_3__["TiposEgresosComponent"] },
            { path: 'participantes', component: _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_4__["ParticipantesComponent"] },
            { path: 'egresos', component: _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_5__["EgresosComponent"] },
        ],
    },
];
class EgresosRoutingModule {
}
EgresosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EgresosRoutingModule });
EgresosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EgresosRoutingModule_Factory(t) { return new (t || EgresosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EgresosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgresosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/egresos/egresos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/egresos/egresos.module.ts ***!
  \*******************************************/
/*! exports provided: EgresosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosModule", function() { return EgresosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _egresos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egresos-routing.module */ "./src/app/egresos/egresos-routing.module.ts");
/* harmony import */ var _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beneficiarios/beneficiarios.component */ "./src/app/egresos/beneficiarios/beneficiarios.component.ts");
/* harmony import */ var _tipos_egresos_tipos_egresos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tipos-egresos/tipos-egresos.component */ "./src/app/egresos/tipos-egresos/tipos-egresos.component.ts");
/* harmony import */ var _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./participantes/participantes.component */ "./src/app/egresos/participantes/participantes.component.ts");
/* harmony import */ var _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./egresos/egresos.component */ "./src/app/egresos/egresos/egresos.component.ts");








class EgresosModule {
}
EgresosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EgresosModule });
EgresosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EgresosModule_Factory(t) { return new (t || EgresosModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _egresos_routing_module__WEBPACK_IMPORTED_MODULE_2__["EgresosRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EgresosModule, { declarations: [_beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_3__["BeneficiariosComponent"],
        _tipos_egresos_tipos_egresos_component__WEBPACK_IMPORTED_MODULE_4__["TiposEgresosComponent"],
        _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_5__["ParticipantesComponent"],
        _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__["EgresosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _egresos_routing_module__WEBPACK_IMPORTED_MODULE_2__["EgresosRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgresosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_3__["BeneficiariosComponent"],
                    _tipos_egresos_tipos_egresos_component__WEBPACK_IMPORTED_MODULE_4__["TiposEgresosComponent"],
                    _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_5__["ParticipantesComponent"],
                    _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__["EgresosComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _egresos_routing_module__WEBPACK_IMPORTED_MODULE_2__["EgresosRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/egresos/egresos/egresos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/egresos/egresos/egresos.component.ts ***!
  \******************************************************/
/*! exports provided: EgresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosComponent", function() { return EgresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EgresosComponent {
    constructor() { }
    ngOnInit() {
    }
}
EgresosComponent.ɵfac = function EgresosComponent_Factory(t) { return new (t || EgresosComponent)(); };
EgresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgresosComponent, selectors: [["app-egresos"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function EgresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgresosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-egresos',
                templateUrl: './egresos.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/egresos/participantes/participantes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/egresos/participantes/participantes.component.ts ***!
  \******************************************************************/
/*! exports provided: ParticipantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantesComponent", function() { return ParticipantesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParticipantesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParticipantesComponent.ɵfac = function ParticipantesComponent_Factory(t) { return new (t || ParticipantesComponent)(); };
ParticipantesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipantesComponent, selectors: [["app-participantes"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function ParticipantesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-participantes',
                templateUrl: './participantes.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/egresos/tipos-egresos/tipos-egresos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/egresos/tipos-egresos/tipos-egresos.component.ts ***!
  \******************************************************************/
/*! exports provided: TiposEgresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposEgresosComponent", function() { return TiposEgresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TiposEgresosComponent {
    constructor() { }
    ngOnInit() {
    }
}
TiposEgresosComponent.ɵfac = function TiposEgresosComponent_Factory(t) { return new (t || TiposEgresosComponent)(); };
TiposEgresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TiposEgresosComponent, selectors: [["app-tipos-egresos"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function TiposEgresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiposEgresosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tipos-egresos',
                templateUrl: './tipos-egresos.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=egresos-egresos-module.js.map