(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["obras-obras-module"],{

/***/ "./src/app/obras/aperturadas/aperturadas.component.ts":
/*!************************************************************!*\
  !*** ./src/app/obras/aperturadas/aperturadas.component.ts ***!
  \************************************************************/
/*! exports provided: AperturadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AperturadasComponent", function() { return AperturadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AperturadasComponent {
    constructor() { }
    ngOnInit() {
    }
}
AperturadasComponent.ɵfac = function AperturadasComponent_Factory(t) { return new (t || AperturadasComponent)(); };
AperturadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AperturadasComponent, selectors: [["app-aperturadas"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function AperturadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AperturadasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aperturadas',
                templateUrl: './aperturadas.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/obras/avances-anticipos-pagos/avances-anticipos-pagos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/obras/avances-anticipos-pagos/avances-anticipos-pagos.component.ts ***!
  \************************************************************************************/
/*! exports provided: AvancesAnticiposPagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvancesAnticiposPagosComponent", function() { return AvancesAnticiposPagosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-rest-obras.service */ "./src/app/obras/services/api-rest-obras.service.ts");
/* harmony import */ var _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api-rest-shared.service */ "./src/app/shared/services/api-rest-shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component */ "./src/app/graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component.ts");







class AvancesAnticiposPagosComponent {
    constructor(apiRestObrasService, apiRestSharedService, formBuilder) {
        this.apiRestObrasService = apiRestObrasService;
        this.apiRestSharedService = apiRestSharedService;
        this.formBuilder = formBuilder;
        this.catalogoAnios = [
            { nombreItem: 2020 },
            { nombreItem: 2019 },
            { nombreItem: 2018 },
            { nombreItem: 2017 },
            { nombreItem: 2016 },
            { nombreItem: 2015 }
        ];
        this.indexMeses = [
            { cve: 1, valor: "Enero" },
            { cve: 2, valor: "Febrero" },
            { cve: 3, valor: "Marzo" },
            { cve: 4, valor: "Abril" },
            { cve: 5, valor: "Mayo" },
            { cve: 6, valor: "Junio" },
            { cve: 7, valor: "Julio" },
            { cve: 8, valor: "Agosto" },
            { cve: 9, valor: "Septiembre" },
            { cve: 10, valor: "Octubre" },
            { cve: 11, valor: "Noviembre" },
            { cve: 12, valor: "Diciembre" }
        ];
        this.catalogoColonias = [];
        this.catalogoEstatusObra = [];
        this.catalogoLocalidad = [];
        this.catalogoContratistas = [];
        this.catalogoTipoPrograma = [];
        this.catalogoDependencia = [];
        this.chart_1 = [];
        this.colorsChart_1 = [
            '#49BDFD',
            '#42D4E3',
            '#55FADC',
            '#42E398',
            '#49FD76',
        ];
    }
    ngOnInit() {
        this.groupForm = this.formBuilder.group({
            anio: [
                { value: null, disabled: false }
            ],
            colonia: [
                { value: null, disabled: false }
            ],
            estatusObra: [
                { value: null, disabled: false }
            ],
            localidad: [
                { value: null, disabled: false }
            ],
            contratista: [
                { value: null, disabled: false }
            ],
            tipoPrograma: [
                { value: null, disabled: false }
            ],
            dependenciaEjecutora: [
                { value: null, disabled: false }
            ]
        });
        this.getCatalogoColonias();
        this.getCatalogoContratista();
        this.getCatalogoEstatusObras();
        this.getCatalogoLocalidad();
        this.getCatalogoTipoPrograma();
        this.getCatalogoDependencia();
        this.fc.anio.setValue(2019);
        this.filterGrafica();
    }
    get fc() {
        return this.groupForm.controls;
    }
    filterGrafica() {
        let dataRequestSearch = {
            anio: this.fc.anio.value,
            estatusObra: this.fc.estatusObra.value,
            nombreContratista: this.fc.contratista.value,
            tipoPrograma: this.fc.tipoPrograma.value,
            dependenciaEjecutora: this.fc.dependenciaEjecutora.value
        };
        if (!this.fc.estatusObra.value) {
            delete dataRequestSearch.estatusObra;
        }
        if (!this.fc.contratista.value) {
            delete dataRequestSearch.nombreContratista;
        }
        if (!this.fc.tipoPrograma.value) {
            delete dataRequestSearch.tipoPrograma;
        }
        if (!this.fc.dependenciaEjecutora.value) {
            delete dataRequestSearch.dependenciaEjecutora;
        }
        this.apiRestObrasService
            .obtenerObraMesMonto(dataRequestSearch)
            .subscribe(success => {
            this.chart_1 = this.generarGrafica(success.body);
        }, error => { });
    }
    generarGrafica(data) {
        let arr = [];
        data.forEach((value) => {
            this.indexMeses.forEach((item) => {
                let data = {};
                if (value.mes == item.cve) {
                    data = {
                        name: item.valor,
                        series: [{
                                name: "Anticipo",
                                value: value.montoAnticipos
                            },
                            {
                                name: "Pagado",
                                value: value.montoEjercido
                            },
                            {
                                name: "Autorizado",
                                value: value.montoAutorizado
                            }]
                    };
                }
                else {
                    data = { name: item.valor, series: [] };
                }
                arr.push(data);
            });
        });
        return arr;
    }
    getCatalogoColonias() {
        const dataRequest = "COLONIA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoColonias = success.body;
            }
        }, error => { });
    }
    getCatalogoEstatusObras() {
        const dataRequest = "ESTATUS_OBRA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoEstatusObra = success.body;
            }
        }, error => { });
    }
    getCatalogoLocalidad() {
        const dataRequest = "LOCALIDAD";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoLocalidad = success.body;
            }
        }, error => { });
    }
    getCatalogoContratista() {
        const dataRequest = "CONTRATISTA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoContratistas = success.body;
            }
        }, error => { });
    }
    getCatalogoTipoPrograma() {
        const dataRequest = "TIPO_PROG";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoTipoPrograma = success.body;
            }
        }, error => { });
    }
    getCatalogoDependencia() {
        const dataRequest = "DEPENDENCIA_EJECUTORA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoDependencia = success.body;
            }
        }, error => { });
    }
}
AvancesAnticiposPagosComponent.ɵfac = function AvancesAnticiposPagosComponent_Factory(t) { return new (t || AvancesAnticiposPagosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__["ApiRestObrasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestSharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
AvancesAnticiposPagosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvancesAnticiposPagosComponent, selectors: [["app-avances-anticipos-pagos"]], decls: 37, vars: 8, consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col", "col-sm-12"], [1, "card"], [1, "card-heading", "border", "bottom"], [1, "card-title"], [1, "card-block", "mb-5"], [1, "col-sm-12_", "mb-5", "mt-1"], [1, "form-inline", "no-gutters", 3, "formGroup"], [1, "col-md-2"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "anio", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "estatusObra", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "contratista", 3, "items", "change"], [1, "col-md-12", "my-1"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "dependenciaEjecutora", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "tipoPrograma", 3, "items", "change"], [3, "data", "colors"]], template: function AvancesAnticiposPagosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Obras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Avances obras, anticipos y pagos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AvancesAnticiposPagosComponent_Template_ng_select_change_17_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Estatus obra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AvancesAnticiposPagosComponent_Template_ng_select_change_21_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contratista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AvancesAnticiposPagosComponent_Template_ng_select_change_25_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dependencia ejecutora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AvancesAnticiposPagosComponent_Template_ng_select_change_30_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tipo programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AvancesAnticiposPagosComponent_Template_ng_select_change_34_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-ngx-grouped-vertical-bar-chart", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoAnios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoEstatusObra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoContratistas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoDependencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoTipoPrograma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart_1)("colors", ctx.colorsChart_1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__["NgxGroupedVerticalBarChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvancesAnticiposPagosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-avances-anticipos-pagos',
                templateUrl: './avances-anticipos-pagos.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__["ApiRestObrasService"] }, { type: _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestSharedService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/obras/contratista/contratista.component.ts":
/*!************************************************************!*\
  !*** ./src/app/obras/contratista/contratista.component.ts ***!
  \************************************************************/
/*! exports provided: ContratistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratistaComponent", function() { return ContratistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-rest-obras.service */ "./src/app/obras/services/api-rest-obras.service.ts");
/* harmony import */ var _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api-rest-shared.service */ "./src/app/shared/services/api-rest-shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component */ "./src/app/graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component.ts");







class ContratistaComponent {
    constructor(apiRestObrasService, apiRestSharedService, formBuilder) {
        this.apiRestObrasService = apiRestObrasService;
        this.apiRestSharedService = apiRestSharedService;
        this.formBuilder = formBuilder;
        this.catalogoAnios = [
            { nombreItem: 2020 },
            { nombreItem: 2019 },
            { nombreItem: 2018 },
            { nombreItem: 2017 },
            { nombreItem: 2016 },
            { nombreItem: 2015 }
        ];
        this.catalogoColonias = [];
        this.catalogoEstatusObra = [];
        this.catalogoLocalidad = [];
        this.catalogoContratistas = [];
        this.catalogoTipoPrograma = [];
        this.chart_1 = [];
        this.colorsChart_1 = [
            '#49BDFD',
            '#42D4E3',
            '#55FADC',
            '#42E398',
            '#49FD76',
        ];
    }
    ngOnInit() {
        this.groupForm = this.formBuilder.group({
            anio: [
                { value: null, disabled: false }
            ],
            colonia: [
                { value: null, disabled: false }
            ],
            estatusObra: [
                { value: null, disabled: false }
            ],
            localidad: [
                { value: null, disabled: false }
            ],
            contratista: [
                { value: null, disabled: false }
            ],
            tipoPrograma: [
                { value: null, disabled: false }
            ]
        });
        this.getCatalogoColonias();
        this.getCatalogoContratista();
        this.getCatalogoEstatusObras();
        this.getCatalogoLocalidad();
        this.getCatalogoTipoPrograma();
        this.fc.anio.setValue(2019);
        this.filterGrafica();
    }
    get fc() {
        return this.groupForm.controls;
    }
    filterGrafica() {
        let dataRequestSearch = {
            anio: this.fc.anio.value,
            colonia: this.fc.colonia.value,
            estatusObra: this.fc.estatusObra.value,
            localidad: this.fc.localidad.value,
            tipoPrograma: this.fc.tipoPrograma.value,
            nombreContratista: this.fc.contratista.value
        };
        if (!this.fc.colonia.value) {
            delete dataRequestSearch.colonia;
        }
        if (!this.fc.estatusObra.value) {
            delete dataRequestSearch.estatusObra;
        }
        if (!this.fc.localidad.value) {
            delete dataRequestSearch.localidad;
        }
        if (!this.fc.tipoPrograma.value) {
            delete dataRequestSearch.tipoPrograma;
        }
        if (!this.fc.contratista.value) {
            delete dataRequestSearch.nombreContratista;
        }
        this.apiRestObrasService
            .obtenerObraPorContratista(dataRequestSearch)
            .subscribe(success => {
            this.chart_1 = this.generarGrafica(success.body);
        }, error => { });
    }
    generarGrafica(data) {
        let arr = [];
        data.forEach(function (value) {
            if (value.nombreContratista != null) {
                let data = {
                    name: value.nombreContratista,
                    series: [{
                            name: "Autorizado",
                            value: value.montoAutorizado
                        },
                        {
                            name: "Ejercido",
                            value: value.montoEjercido
                        },
                        {
                            name: "Por disponer",
                            value: value.montoDisponer
                        }]
                };
                arr.push(data);
            }
        });
        return arr;
    }
    getCatalogoColonias() {
        const dataRequest = "COLONIA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoColonias = success.body;
            }
        }, error => { });
    }
    getCatalogoEstatusObras() {
        const dataRequest = "ESTATUS_OBRA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoEstatusObra = success.body;
            }
        }, error => { });
    }
    getCatalogoLocalidad() {
        const dataRequest = "LOCALIDAD";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoLocalidad = success.body;
            }
        }, error => { });
    }
    getCatalogoContratista() {
        const dataRequest = "CONTRATISTA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoContratistas = success.body;
            }
        }, error => { });
    }
    getCatalogoTipoPrograma() {
        const dataRequest = "TIPO_PROG";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoTipoPrograma = success.body;
            }
        }, error => { });
    }
}
ContratistaComponent.ɵfac = function ContratistaComponent_Factory(t) { return new (t || ContratistaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__["ApiRestObrasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestSharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
ContratistaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContratistaComponent, selectors: [["app-contratista"]], decls: 41, vars: 9, consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col", "col-sm-12"], [1, "card"], [1, "card-heading", "border", "bottom"], [1, "card-title"], [1, "card-block", "mb-5"], [1, "col-sm-12_", "mb-5", "mt-1"], [1, "form-inline", "no-gutters", 3, "formGroup"], [1, "col-md-2"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "anio", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "colonia", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "estatusObra", 3, "items", "change"], [1, "col-md-12", "my-1"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "localidad", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "tipoPrograma", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "contratista", 3, "items", "change"], [3, "data", "colors"]], template: function ContratistaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Obras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Obras por contratista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContratistaComponent_Template_ng_select_change_17_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Colonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContratistaComponent_Template_ng_select_change_21_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Estatus obra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContratistaComponent_Template_ng_select_change_25_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Localidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContratistaComponent_Template_ng_select_change_30_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tipo programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContratistaComponent_Template_ng_select_change_34_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contratista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContratistaComponent_Template_ng_select_change_38_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-ngx-grouped-vertical-bar-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoAnios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoColonias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoEstatusObra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoLocalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoTipoPrograma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoContratistas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart_1)("colors", ctx.colorsChart_1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__["NgxGroupedVerticalBarChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratistaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contratista',
                templateUrl: './contratista.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__["ApiRestObrasService"] }, { type: _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestSharedService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/obras/en-ejecucion/en-ejecucion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/obras/en-ejecucion/en-ejecucion.component.ts ***!
  \**************************************************************/
/*! exports provided: EnEjecucionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnEjecucionComponent", function() { return EnEjecucionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EnEjecucionComponent {
    constructor() { }
    ngOnInit() {
    }
}
EnEjecucionComponent.ɵfac = function EnEjecucionComponent_Factory(t) { return new (t || EnEjecucionComponent)(); };
EnEjecucionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnEjecucionComponent, selectors: [["app-en-ejecucion"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function EnEjecucionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnEjecucionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-en-ejecucion',
                templateUrl: './en-ejecucion.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/obras/liquidadas/liquidadas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/obras/liquidadas/liquidadas.component.ts ***!
  \**********************************************************/
/*! exports provided: LiquidadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidadasComponent", function() { return LiquidadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LiquidadasComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiquidadasComponent.ɵfac = function LiquidadasComponent_Factory(t) { return new (t || LiquidadasComponent)(); };
LiquidadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiquidadasComponent, selectors: [["app-liquidadas"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function LiquidadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiquidadasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-liquidadas',
                templateUrl: './liquidadas.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/obras/obras-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/obras/obras-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ObrasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasRoutingModule", function() { return ObrasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aperturadas_aperturadas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aperturadas/aperturadas.component */ "./src/app/obras/aperturadas/aperturadas.component.ts");
/* harmony import */ var _en_ejecucion_en_ejecucion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-ejecucion/en-ejecucion.component */ "./src/app/obras/en-ejecucion/en-ejecucion.component.ts");
/* harmony import */ var _liquidadas_liquidadas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liquidadas/liquidadas.component */ "./src/app/obras/liquidadas/liquidadas.component.ts");
/* harmony import */ var _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pendientes/pendientes.component */ "./src/app/obras/pendientes/pendientes.component.ts");
/* harmony import */ var _tipo_programa_tipo_programa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipo-programa/tipo-programa.component */ "./src/app/obras/tipo-programa/tipo-programa.component.ts");
/* harmony import */ var _avances_anticipos_pagos_avances_anticipos_pagos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avances-anticipos-pagos/avances-anticipos-pagos.component */ "./src/app/obras/avances-anticipos-pagos/avances-anticipos-pagos.component.ts");
/* harmony import */ var _contratista_contratista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contratista/contratista.component */ "./src/app/obras/contratista/contratista.component.ts");











const routes = [
    {
        path: '',
        children: [
            { path: 'aperturadas', component: _aperturadas_aperturadas_component__WEBPACK_IMPORTED_MODULE_2__["AperturadasComponent"] },
            { path: 'en-ejecucion', component: _en_ejecucion_en_ejecucion_component__WEBPACK_IMPORTED_MODULE_3__["EnEjecucionComponent"] },
            { path: 'liquidadas', component: _liquidadas_liquidadas_component__WEBPACK_IMPORTED_MODULE_4__["LiquidadasComponent"] },
            { path: 'pendientes', component: _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_5__["PendientesComponent"] },
            { path: 'tipo-programa', component: _tipo_programa_tipo_programa_component__WEBPACK_IMPORTED_MODULE_6__["TipoProgramaComponent"] },
            { path: 'avances-anticipos-pagos', component: _avances_anticipos_pagos_avances_anticipos_pagos_component__WEBPACK_IMPORTED_MODULE_7__["AvancesAnticiposPagosComponent"] },
            { path: 'contratista', component: _contratista_contratista_component__WEBPACK_IMPORTED_MODULE_8__["ContratistaComponent"] },
        ],
    },
];
class ObrasRoutingModule {
}
ObrasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObrasRoutingModule });
ObrasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObrasRoutingModule_Factory(t) { return new (t || ObrasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObrasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObrasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/obras/obras.module.ts":
/*!***************************************!*\
  !*** ./src/app/obras/obras.module.ts ***!
  \***************************************/
/*! exports provided: ObrasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasModule", function() { return ObrasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _obras_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obras-routing.module */ "./src/app/obras/obras-routing.module.ts");
/* harmony import */ var _aperturadas_aperturadas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aperturadas/aperturadas.component */ "./src/app/obras/aperturadas/aperturadas.component.ts");
/* harmony import */ var _en_ejecucion_en_ejecucion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-ejecucion/en-ejecucion.component */ "./src/app/obras/en-ejecucion/en-ejecucion.component.ts");
/* harmony import */ var _liquidadas_liquidadas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liquidadas/liquidadas.component */ "./src/app/obras/liquidadas/liquidadas.component.ts");
/* harmony import */ var _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pendientes/pendientes.component */ "./src/app/obras/pendientes/pendientes.component.ts");
/* harmony import */ var _tipo_programa_tipo_programa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tipo-programa/tipo-programa.component */ "./src/app/obras/tipo-programa/tipo-programa.component.ts");
/* harmony import */ var _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graficas/graficas.module */ "./src/app/graficas/graficas.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _avances_anticipos_pagos_avances_anticipos_pagos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./avances-anticipos-pagos/avances-anticipos-pagos.component */ "./src/app/obras/avances-anticipos-pagos/avances-anticipos-pagos.component.ts");
/* harmony import */ var _contratista_contratista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contratista/contratista.component */ "./src/app/obras/contratista/contratista.component.ts");














class ObrasModule {
}
ObrasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObrasModule });
ObrasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObrasModule_Factory(t) { return new (t || ObrasModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _obras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ObrasRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__["GraficasModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObrasModule, { declarations: [_aperturadas_aperturadas_component__WEBPACK_IMPORTED_MODULE_4__["AperturadasComponent"], _en_ejecucion_en_ejecucion_component__WEBPACK_IMPORTED_MODULE_5__["EnEjecucionComponent"], _liquidadas_liquidadas_component__WEBPACK_IMPORTED_MODULE_6__["LiquidadasComponent"], _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_7__["PendientesComponent"], _tipo_programa_tipo_programa_component__WEBPACK_IMPORTED_MODULE_8__["TipoProgramaComponent"], _avances_anticipos_pagos_avances_anticipos_pagos_component__WEBPACK_IMPORTED_MODULE_11__["AvancesAnticiposPagosComponent"], _contratista_contratista_component__WEBPACK_IMPORTED_MODULE_12__["ContratistaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _obras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ObrasRoutingModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
        _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__["GraficasModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObrasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_aperturadas_aperturadas_component__WEBPACK_IMPORTED_MODULE_4__["AperturadasComponent"], _en_ejecucion_en_ejecucion_component__WEBPACK_IMPORTED_MODULE_5__["EnEjecucionComponent"], _liquidadas_liquidadas_component__WEBPACK_IMPORTED_MODULE_6__["LiquidadasComponent"], _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_7__["PendientesComponent"], _tipo_programa_tipo_programa_component__WEBPACK_IMPORTED_MODULE_8__["TipoProgramaComponent"], _avances_anticipos_pagos_avances_anticipos_pagos_component__WEBPACK_IMPORTED_MODULE_11__["AvancesAnticiposPagosComponent"], _contratista_contratista_component__WEBPACK_IMPORTED_MODULE_12__["ContratistaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _obras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ObrasRoutingModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                    _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__["GraficasModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/obras/pendientes/pendientes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/obras/pendientes/pendientes.component.ts ***!
  \**********************************************************/
/*! exports provided: PendientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesComponent", function() { return PendientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PendientesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PendientesComponent.ɵfac = function PendientesComponent_Factory(t) { return new (t || PendientesComponent)(); };
PendientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendientesComponent, selectors: [["app-pendientes"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function PendientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendientesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pendientes',
                templateUrl: './pendientes.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/obras/services/api-rest-obras.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/obras/services/api-rest-obras.service.ts ***!
  \**********************************************************/
/*! exports provided: ApiRestObrasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestObrasService", function() { return ApiRestObrasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





const ROOT_URL = '/API-OBRAS-DE/v1/api/controlObra';
class ApiRestObrasService {
    constructor(http) {
        this.http = http;
    }
    obtenerObra(data) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        anio: 2019,
                        mes: 12,
                        estatusObra: 'ENRE',
                        localidad: 'ATONGO',
                        colonia: '4EboAxqffS4QUgbKt6e4NDH10zOZ76',
                        nombreContratista: 'PASTOR ALVARADO HECTOR JESUS',
                        tipoPrograma: 'OBRAS CAPITALIZABLES',
                        montoAutorizado: 1000,
                        montoAnticipos: 0,
                        montoEjercido: 3000,
                        montoDisponer: 145,
                    },
                    {
                        anio: 2019,
                        mes: 11,
                        estatusObra: 'ENRE',
                        localidad: 'ATONGO',
                        colonia: '4EboAxqffS4QUgbKt6e4NDH10zOZ76',
                        nombreContratista: 'PASTOR ALVARADO HECTOR JESUS',
                        tipoPrograma: 'OBRAS 2',
                        montoAutorizado: 2000,
                        montoAnticipos: 0,
                        montoEjercido: 3000,
                        montoDisponer: 10000,
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock);
        }
        else {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"].urlWS}${ROOT_URL}/obtenerObra`, {
                params: data,
            });
        }
    }
    obtenerObraMesMonto(data) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        anio: 2020,
                        mes: 9,
                        estatusObra: 'ESTATUS OBRA 1',
                        localidad: 'LOCALIDAD',
                        colonia: 'COLONIA',
                        nombreContratista: 'CONTRATISTA',
                        tipoPrograma: 'TIPO PROGRAMA1',
                        montoAutorizado: 16466,
                        montoAnticipos: 6899,
                        montoEjercido: 11321,
                        montoDisponer: 5145,
                    },
                    {
                        anio: 2020,
                        mes: 9,
                        estatusObra: 'ESTATUS OBRA 1',
                        localidad: 'LOCALIDAD',
                        colonia: 'COLONIA',
                        nombreContratista: 'CONTRATISTA',
                        tipoPrograma: 'TIPO PROGRAMA1',
                        montoAutorizado: 16466,
                        montoAnticipos: 6899,
                        montoEjercido: 11321,
                        montoDisponer: 5145,
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock);
        }
        else {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"].urlWS}${ROOT_URL}/obtenerObraMesMonto`, { params: data });
        }
    }
    obtenerObraPorContratista(data) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        anio: 2019,
                        mes: 12,
                        estatusObra: 'ENRE',
                        localidad: 'ATONGO',
                        colonia: '4EboAxqffS4QUgbKt6e4NDH10zOZ76',
                        nombreContratista: 'PASTOR ALVARADO HECTOR JESUS',
                        tipoPrograma: 'OBRAS CAPITALIZABLES',
                        montoAutorizado: 25000,
                        montoAnticipos: 20000,
                        montoEjercido: 1500,
                        montoDisponer: 13000,
                    },
                    {
                        anio: 2019,
                        mes: 12,
                        estatusObra: 'ENRE',
                        localidad: 'ATONGO',
                        colonia: '4EboAxqffS4QUgbKt6e4NDH10zOZ76',
                        nombreContratista: 'PASTOR ALVARADO HECTOR 2',
                        tipoPrograma: 'OBRAS CAPITALIZABLES',
                        montoAutorizado: 25000,
                        montoAnticipos: 25000,
                        montoEjercido: 1000,
                        montoDisponer: 1000,
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock);
        }
        else {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"].urlWS}${ROOT_URL}/obtenerObraPorContratista`, { params: data });
        }
    }
}
ApiRestObrasService.ɵfac = function ApiRestObrasService_Factory(t) { return new (t || ApiRestObrasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiRestObrasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiRestObrasService, factory: ApiRestObrasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiRestObrasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/obras/tipo-programa/tipo-programa.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/obras/tipo-programa/tipo-programa.component.ts ***!
  \****************************************************************/
/*! exports provided: TipoProgramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProgramaComponent", function() { return TipoProgramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-rest-obras.service */ "./src/app/obras/services/api-rest-obras.service.ts");
/* harmony import */ var _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api-rest-shared.service */ "./src/app/shared/services/api-rest-shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component */ "./src/app/graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component.ts");







class TipoProgramaComponent {
    constructor(apiRestObrasService, apiRestSharedService, formBuilder) {
        this.apiRestObrasService = apiRestObrasService;
        this.apiRestSharedService = apiRestSharedService;
        this.formBuilder = formBuilder;
        this.catalogoAnios = [
            { nombreItem: 2020 },
            { nombreItem: 2019 },
            { nombreItem: 2018 },
            { nombreItem: 2017 },
            { nombreItem: 2016 },
            { nombreItem: 2015 }
        ];
        this.indexMeses = [
            { cve: 1, valor: "Enero" },
            { cve: 2, valor: "Febrero" },
            { cve: 3, valor: "Marzo" },
            { cve: 4, valor: "Abril" },
            { cve: 5, valor: "Mayo" },
            { cve: 6, valor: "Junio" },
            { cve: 7, valor: "Julio" },
            { cve: 8, valor: "Agosto" },
            { cve: 9, valor: "Septiembre" },
            { cve: 10, valor: "Octubre" },
            { cve: 11, valor: "Noviembre" },
            { cve: 12, valor: "Diciembre" }
        ];
        /*
        dataRequestSearch ={
          anio:2019,
          colonia:'4EboAxqffS4QUgbKt6e4NDH10zOZ76',
          estatusObra:'ENRE',
          localidad:'ATONGO',
          nombreContratista:'PASTOR ALVARADO HECTOR JESUS',
          tipoPrograma:'OBRAS CAPITALIZABLES'}
         */
        this.catalogoColonias = [];
        this.catalogoEstatusObra = [];
        this.catalogoLocalidad = [];
        this.catalogoContratistas = [];
        this.catalogoTipoPrograma = [];
        this.colorsChart_1 = [
            '#49BDFD',
            '#42D4E3',
            '#55FADC',
            '#42E398',
            '#49FD76',
        ];
        this.chart_1 = [];
    }
    ngOnInit() {
        this.groupForm = this.formBuilder.group({
            anio: [
                { value: null, disabled: false }
            ],
            colonia: [
                { value: null, disabled: false }
            ],
            estatusObra: [
                { value: null, disabled: false }
            ],
            localidad: [
                { value: null, disabled: false }
            ],
            contratista: [
                { value: null, disabled: false }
            ],
            tipoPrograma: [
                { value: null, disabled: false }
            ]
        });
        this.getCatalogoColonias();
        this.getCatalogoContratista();
        this.getCatalogoEstatusObras();
        this.getCatalogoLocalidad();
        this.getCatalogoTipoPrograma();
        this.fc.anio.setValue(2019);
        this.filterGrafica();
    }
    get fc() {
        return this.groupForm.controls;
    }
    filterGrafica() {
        let dataRequestSearch = {
            anio: this.fc.anio.value,
            colonia: this.fc.colonia.value,
            estatusObra: this.fc.estatusObra.value,
            localidad: this.fc.localidad.value,
            nombreContratista: this.fc.contratista.value,
            tipoPrograma: this.fc.tipoPrograma.value
        };
        if (!this.fc.colonia.value) {
            delete dataRequestSearch.colonia;
        }
        if (!this.fc.estatusObra.value) {
            delete dataRequestSearch.estatusObra;
        }
        if (!this.fc.localidad.value) {
            delete dataRequestSearch.localidad;
        }
        if (!this.fc.contratista.value) {
            delete dataRequestSearch.nombreContratista;
        }
        if (!this.fc.tipoPrograma.value) {
            delete dataRequestSearch.tipoPrograma;
        }
        this.apiRestObrasService
            .obtenerObra(dataRequestSearch)
            .subscribe(success => {
            this.chart_1 = this.generarGrafica(success.body);
        }, error => { });
    }
    generarGrafica(data) {
        let arr = [];
        data.forEach((value) => {
            this.indexMeses.forEach((item) => {
                let data = {};
                if (value.mes == item.cve) {
                    data = {
                        name: item.valor,
                        series: [{
                                name: "Autorizado",
                                value: value.montoAutorizado
                            },
                            {
                                name: "Ejercido",
                                value: value.montoEjercido
                            },
                            {
                                name: "Por disponer",
                                value: value.montoDisponer
                            }]
                    };
                }
                else {
                    data = { name: item.valor, series: [] };
                }
                arr.push(data);
            });
        });
        return arr;
    }
    getCatalogoColonias() {
        const dataRequest = "COLONIA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoColonias = success.body;
            }
        }, error => { });
    }
    getCatalogoEstatusObras() {
        const dataRequest = "ESTATUS_OBRA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoEstatusObra = success.body;
            }
        }, error => { });
    }
    getCatalogoLocalidad() {
        const dataRequest = "LOCALIDAD";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoLocalidad = success.body;
            }
        }, error => { });
    }
    getCatalogoContratista() {
        const dataRequest = "CONTRATISTA";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoContratistas = success.body;
            }
        }, error => { });
    }
    getCatalogoTipoPrograma() {
        const dataRequest = "TIPO_PROG";
        this.apiRestSharedService.getCatalogo(dataRequest).subscribe(success => {
            if (success.body) {
                this.catalogoTipoPrograma = success.body;
            }
        }, error => { });
    }
}
TipoProgramaComponent.ɵfac = function TipoProgramaComponent_Factory(t) { return new (t || TipoProgramaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__["ApiRestObrasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestSharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
TipoProgramaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TipoProgramaComponent, selectors: [["app-tipo-programa"]], decls: 41, vars: 9, consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col", "col-sm-12"], [1, "card"], [1, "card-heading", "border", "bottom"], [1, "card-title"], [1, "card-block", "mb-5"], [1, "col-sm-12_", "mb-5", "mt-1"], [1, "form-inline", "no-gutters", 3, "formGroup"], [1, "col-md-2"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "anio", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "colonia", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "estatusObra", 3, "items", "change"], [1, "col-md-12", "my-1"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "localidad", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "contratista", 3, "items", "change"], ["bindLabel", "nombreItem", "bindValue", "nombreItem", "formControlName", "tipoPrograma", 3, "items", "change"], [3, "data", "colors"]], template: function TipoProgramaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Obras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Obras por Tipo Programa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TipoProgramaComponent_Template_ng_select_change_17_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Colonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TipoProgramaComponent_Template_ng_select_change_21_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Estatus obra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TipoProgramaComponent_Template_ng_select_change_25_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Localidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TipoProgramaComponent_Template_ng_select_change_30_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contratista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TipoProgramaComponent_Template_ng_select_change_34_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tipo programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TipoProgramaComponent_Template_ng_select_change_38_listener() { return ctx.filterGrafica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-ngx-grouped-vertical-bar-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoAnios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoColonias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoEstatusObra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoLocalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoContratistas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogoTipoPrograma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart_1)("colors", ctx.colorsChart_1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__["NgxGroupedVerticalBarChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipoProgramaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tipo-programa',
                templateUrl: './tipo-programa.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_api_rest_obras_service__WEBPACK_IMPORTED_MODULE_1__["ApiRestObrasService"] }, { type: _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestSharedService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=obras-obras-module.js.map