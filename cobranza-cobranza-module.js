(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cobranza-cobranza-module"],{

/***/ "./src/app/cobranza/adeudos/adeudos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/cobranza/adeudos/adeudos.component.ts ***!
  \*******************************************************/
/*! exports provided: AdeudosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdeudosComponent", function() { return AdeudosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdeudosComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdeudosComponent.ɵfac = function AdeudosComponent_Factory(t) { return new (t || AdeudosComponent)(); };
AdeudosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdeudosComponent, selectors: [["app-adeudos"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function AdeudosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdeudosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adeudos',
                templateUrl: './adeudos.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/cartera-vencida/cartera-vencida.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cobranza/cartera-vencida/cartera-vencida.component.ts ***!
  \***********************************************************************/
/*! exports provided: CarteraVencidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteraVencidaComponent", function() { return CarteraVencidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api_rest_cobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-rest-cobranza.service */ "./src/app/cobranza/services/api-rest-cobranza.service.ts");
/* harmony import */ var _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/api-rest-shared.service */ "./src/app/shared/services/api-rest-shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component */ "./src/app/graficas/ngx-grouped-vertical-bar-chart/ngx-grouped-vertical-bar-chart.component.ts");
/* harmony import */ var _graficas_ngx_advanced_pie_chart_ngx_advanced_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../graficas/ngx-advanced-pie-chart/ngx-advanced-pie-chart.component */ "./src/app/graficas/ngx-advanced-pie-chart/ngx-advanced-pie-chart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function CarteraVencidaComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_c_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_c_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_c_r1.porcent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _c_r1.porcent)("background-color", _c_r1.color);
} }
const _c0 = function () { return { standalone: true }; };
class CarteraVencidaComponent {
    constructor(apiRestCobranzaService, apiRestSharedService) {
        this.apiRestCobranzaService = apiRestCobranzaService;
        this.apiRestSharedService = apiRestSharedService;
        // CATALOGOS
        this.colors = [
            '#7E72A8',
            '#AE9AF5',
            '#D1F58D',
            '#A85177',
            '#F582B3',
            '#49BDFD',
            '#42D4E3',
            '#55FADC',
            '#42E398',
            '#49FD76',
        ];
        this.indexCategories = {
            0: 'CAT 0',
            CAT1: 'Categoría 1',
            CAT2: 'Categoría 2',
            CAT3: 'Categoría 3',
        };
        this.cat_anios = ['2020', '2019', '2018', '2017', '2016', '2015'];
        // NGMODEL
        this.chart_1_anio = '2019';
        this.chart_2_anio = '2019';
        this.colorsChart_1 = [
            '#49BDFD',
            '#42D4E3',
            '#55FADC',
            '#42E398',
            '#49FD76',
        ];
        this.colorsChart_2 = [
            '#165BF6',
            '#1381D4',
            '#21C8EB',
            '#13D4C0',
            '#16F69F',
        ];
        this.getCatalogoCategoriasAdeudo();
    }
    ngOnInit() {
        this.getMontosCategoriaAnio();
        this.getMontosCategoriaMes();
    }
    chart_1_selectAnio(eve) {
        console.log('::::: CHART_1_ANIO: ', eve);
        if (!eve)
            this.chart_1_anio = '2019';
        this.getMontosCategoriaMes();
    }
    chart_1_selectCat(eve) {
        console.log('::::: CHART_1_CAT: ', JSON.stringify(eve));
        this.getMontosCategoriaMes();
    }
    chart_2_selectAnio(eve) {
        console.log('::::: CHART_2_ANIO: ', eve);
        if (!eve)
            this.chart_2_anio = '2019';
        this.getMontosCategoriaAnio();
    }
    chart_2_selectCat(eve) {
        console.log('::::: CHART_2_CAT: ', JSON.stringify(eve));
        this.getMontosCategoriaAnio();
    }
    /** ########## SERVICES ########## */
    getCatalogoCategoriasAdeudo() {
        this.apiRestSharedService.getCatalogo('CAT_ADEUDO').subscribe((success) => {
            if (!!success)
                this.cat_categoriasAdeudo = success.body;
        }, (error) => { });
    }
    getMontosCategoriaMes() {
        const dataRequest = {
            anio: this.chart_1_anio,
            catAdeudo: this.chart_1_cat ? this.chart_1_cat.claveSIM : '',
        };
        this.apiRestCobranzaService.getMontosCategoriaMes(dataRequest).subscribe((success) => {
            if (!!success)
                this.chart_1 = this.generateChart_1(success === null || success === void 0 ? void 0 : success.body);
        }, (error) => { });
    }
    getMontosCategoriaAnio() {
        const dataRequest = {
            anio: this.chart_2_anio ? this.chart_2_anio : '2019',
            catAdeudo: this.chart_2_cat ? this.chart_2_cat.claveSIM : '',
        };
        this.apiRestCobranzaService.getMontoCategoriaAnio(dataRequest).subscribe((success) => {
            if (!!success) {
                this.chart_2 = this.generateChart_2a(success === null || success === void 0 ? void 0 : success.body);
                this.chart_2b = this.generateChart_2b(success === null || success === void 0 ? void 0 : success.body);
            }
        }, (error) => { });
    }
    /** ########## FORMATTING ########## */
    generateChart_1(data) {
        const indexMounts = {
            1: 'Enero',
            2: 'Febrero',
            3: 'Marzo',
            4: 'Abril',
            5: 'Mayo',
            6: 'Junio',
            7: 'Julio',
            8: 'Agosto',
            9: 'Septiembre',
            10: 'Octubre',
            11: 'Noviembre',
            12: 'Diciembre',
        };
        const items = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](indexMounts, (_value, _key) => {
            const objFinal = {
                name: _value,
                series: lodash__WEBPACK_IMPORTED_MODULE_1__["map"](lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](data, (_i) => _i.mes == _key), (_item) => {
                    return {
                        name: _item === null || _item === void 0 ? void 0 : _item.categoriaAdeudo /**this.indexCategories[_item?.categoriaAdeudo] */,
                        value: _item === null || _item === void 0 ? void 0 : _item.totalMontoVencido,
                        noAdeudos: _item === null || _item === void 0 ? void 0 : _item.totalCantidadAdeudos,
                    };
                }),
            };
            return objFinal;
        });
        console.log('::::: CHART_1: ', JSON.stringify(items));
        return items;
    }
    generateChart_2a(data) {
        const items = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](data, (_item, index) => {
            return {
                name: _item === null || _item === void 0 ? void 0 : _item.categoriaAdeudo,
                value: _item === null || _item === void 0 ? void 0 : _item.totalMontoVencido,
            };
        });
        console.log('::::: CHART_2A: ', JSON.stringify(items));
        return items;
    }
    generateChart_2b(data) {
        const totalAdeudos = data.reduce((acc, _ie) => {
            return acc + _ie.totalCantidadAdeudos;
        }, 0);
        const items = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](data, (_item, index) => {
            return {
                name: _item === null || _item === void 0 ? void 0 : _item.categoriaAdeudo,
                value: _item === null || _item === void 0 ? void 0 : _item.totalCantidadAdeudos,
                porcent: this.generatePorcent(totalAdeudos, _item === null || _item === void 0 ? void 0 : _item.totalCantidadAdeudos),
                color: this.colors[index],
            };
        });
        const objFinal = { total: totalAdeudos, data: items };
        console.log('::::: CHART_2B: ', JSON.stringify(objFinal));
        return objFinal;
    }
    generatePorcent(total, monto) {
        return total && monto ? `${Math.round((monto * 100) / total)}%` : '0%';
    }
}
CarteraVencidaComponent.ɵfac = function CarteraVencidaComponent_Factory(t) { return new (t || CarteraVencidaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_rest_cobranza_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestCobranzaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestSharedService"])); };
CarteraVencidaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarteraVencidaComponent, selectors: [["app-cartera-vencida"]], decls: 53, vars: 22, consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col", "col-sm-12"], [1, "card"], [1, "card-heading", "border", "bottom"], [1, "card-title"], [1, "card-block", "mb-5"], [1, "col-sm-12_", "mb-5", "mt-1"], [1, "form-inline", "no-gutters"], [1, "col-md-1"], [1, "col-md-2"], ["notFoundText", "Sin resultados", "loadingText", "Cargando...", 3, "items", "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "col-md-3"], ["bindLabel", "nombreItem", "notFoundText", "Sin resultados", "loadingText", "Cargando...", "placeholder", "Seleccione...", 3, "items", "ngModel", "ngModelOptions", "ngModelChange", "change"], [3, "data", "colors"], [1, "col-md-8"], [1, "col-md-4", "border", "left", "border-hide-sm"], [1, "mrg-btm-5"], [1, "no-mrg-vertical", "font-size-35"], [1, "text-semibold"], ["class", "mrg-top-10", 4, "ngFor", "ngForOf"], [1, "mrg-top-10"], [1, "no-mrg-btm"], [1, "inline-block", "mrg-btm-10", "font-size-13", "text-semibold"], [1, "pull-right", "pdd-right-10", "font-size-13"], [1, "progress", "progress-primary"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"]], template: function CarteraVencidaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cartera vencida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Montos Anuales de Cartera Vencida por Categor\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarteraVencidaComponent_Template_ng_select_ngModelChange_17_listener($event) { return ctx.chart_1_anio = $event; })("change", function CarteraVencidaComponent_Template_ng_select_change_17_listener($event) { return ctx.chart_1_selectAnio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarteraVencidaComponent_Template_ng_select_ngModelChange_21_listener($event) { return ctx.chart_1_cat = $event; })("change", function CarteraVencidaComponent_Template_ng_select_change_21_listener($event) { return ctx.chart_1_selectCat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-ngx-grouped-vertical-bar-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Antig\u00FCedad de Adeudos por A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarteraVencidaComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.chart_2_anio = $event; })("change", function CarteraVencidaComponent_Template_ng_select_change_36_listener($event) { return ctx.chart_2_selectAnio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarteraVencidaComponent_Template_ng_select_ngModelChange_40_listener($event) { return ctx.chart_2_cat = $event; })("change", function CarteraVencidaComponent_Template_ng_select_change_40_listener($event) { return ctx.chart_2_selectCat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-ngx-advanced-pie-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cantidad de Adeudos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CarteraVencidaComponent_div_51_Template, 9, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.cat_anios)("ngModel", ctx.chart_1_anio)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.cat_categoriasAdeudo)("ngModel", ctx.chart_1_cat)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart_1)("colors", ctx.colorsChart_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.cat_anios)("ngModel", ctx.chart_2_anio)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.cat_categoriasAdeudo)("ngModel", ctx.chart_2_cat)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chart_2)("colors", ctx.colorsChart_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chart_2b == null ? null : ctx.chart_2b.total, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chart_2b == null ? null : ctx.chart_2b.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _graficas_ngx_grouped_vertical_bar_chart_ngx_grouped_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["NgxGroupedVerticalBarChartComponent"], _graficas_ngx_advanced_pie_chart_ngx_advanced_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["NgxAdvancedPieChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarteraVencidaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cartera-vencida',
                templateUrl: './cartera-vencida.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_api_rest_cobranza_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestCobranzaService"] }, { type: _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestSharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/cobranza-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cobranza/cobranza-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CobranzaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobranzaRoutingModule", function() { return CobranzaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cartera_vencida_cartera_vencida_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartera-vencida/cartera-vencida.component */ "./src/app/cobranza/cartera-vencida/cartera-vencida.component.ts");
/* harmony import */ var _cobranza_cobranza_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cobranza/cobranza.component */ "./src/app/cobranza/cobranza/cobranza.component.ts");
/* harmony import */ var _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingresos/ingresos.component */ "./src/app/cobranza/ingresos/ingresos.component.ts");
/* harmony import */ var _adeudos_adeudos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adeudos/adeudos.component */ "./src/app/cobranza/adeudos/adeudos.component.ts");
/* harmony import */ var _notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones/notificaciones.component */ "./src/app/cobranza/notificaciones/notificaciones.component.ts");
/* harmony import */ var _prueba_jvc_pruebajvc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prueba-jvc/pruebajvc.component */ "./src/app/cobranza/prueba-jvc/pruebajvc.component.ts");










const routes = [
    {
        path: '',
        children: [
            { path: 'carteraVencida', component: _cartera_vencida_cartera_vencida_component__WEBPACK_IMPORTED_MODULE_2__["CarteraVencidaComponent"] },
            { path: 'notificaciones', component: _notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_6__["NotificacionesComponent"] },
            { path: 'cobranza', component: _cobranza_cobranza_component__WEBPACK_IMPORTED_MODULE_3__["CobranzaComponent"] },
            { path: 'ingresos', component: _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_4__["IngresosComponent"] },
            { path: 'adeudos', component: _adeudos_adeudos_component__WEBPACK_IMPORTED_MODULE_5__["AdeudosComponent"] },
            { path: 'pruebajvc', component: _prueba_jvc_pruebajvc_component__WEBPACK_IMPORTED_MODULE_7__["PruebajvcComponent"] },
        ],
    },
];
class CobranzaRoutingModule {
}
CobranzaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CobranzaRoutingModule });
CobranzaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CobranzaRoutingModule_Factory(t) { return new (t || CobranzaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CobranzaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CobranzaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cobranza/cobranza.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cobranza/cobranza.module.ts ***!
  \*********************************************/
/*! exports provided: CobranzaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobranzaModule", function() { return CobranzaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _cobranza_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cobranza-routing.module */ "./src/app/cobranza/cobranza-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _cartera_vencida_cartera_vencida_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartera-vencida/cartera-vencida.component */ "./src/app/cobranza/cartera-vencida/cartera-vencida.component.ts");
/* harmony import */ var _cobranza_cobranza_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cobranza/cobranza.component */ "./src/app/cobranza/cobranza/cobranza.component.ts");
/* harmony import */ var _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ingresos/ingresos.component */ "./src/app/cobranza/ingresos/ingresos.component.ts");
/* harmony import */ var _adeudos_adeudos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adeudos/adeudos.component */ "./src/app/cobranza/adeudos/adeudos.component.ts");
/* harmony import */ var _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graficas/graficas.module */ "./src/app/graficas/graficas.module.ts");
/* harmony import */ var _prueba_jvc_pruebajvc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prueba-jvc/pruebajvc.component */ "./src/app/cobranza/prueba-jvc/pruebajvc.component.ts");
/* harmony import */ var _notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notificaciones/notificaciones.component */ "./src/app/cobranza/notificaciones/notificaciones.component.ts");










// MODULES

// SERRVICES



class CobranzaModule {
}
CobranzaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CobranzaModule });
CobranzaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CobranzaModule_Factory(t) { return new (t || CobranzaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _cobranza_routing_module__WEBPACK_IMPORTED_MODULE_3__["CobranzaRoutingModule"],
            _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__["GraficasModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CobranzaModule, { declarations: [_cartera_vencida_cartera_vencida_component__WEBPACK_IMPORTED_MODULE_5__["CarteraVencidaComponent"],
        _cobranza_cobranza_component__WEBPACK_IMPORTED_MODULE_6__["CobranzaComponent"],
        _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_7__["IngresosComponent"],
        _adeudos_adeudos_component__WEBPACK_IMPORTED_MODULE_8__["AdeudosComponent"],
        _prueba_jvc_pruebajvc_component__WEBPACK_IMPORTED_MODULE_10__["PruebajvcComponent"],
        _notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_11__["NotificacionesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _cobranza_routing_module__WEBPACK_IMPORTED_MODULE_3__["CobranzaRoutingModule"],
        _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__["GraficasModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CobranzaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _cartera_vencida_cartera_vencida_component__WEBPACK_IMPORTED_MODULE_5__["CarteraVencidaComponent"],
                    _cobranza_cobranza_component__WEBPACK_IMPORTED_MODULE_6__["CobranzaComponent"],
                    _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_7__["IngresosComponent"],
                    _adeudos_adeudos_component__WEBPACK_IMPORTED_MODULE_8__["AdeudosComponent"],
                    _prueba_jvc_pruebajvc_component__WEBPACK_IMPORTED_MODULE_10__["PruebajvcComponent"],
                    _notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_11__["NotificacionesComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _cobranza_routing_module__WEBPACK_IMPORTED_MODULE_3__["CobranzaRoutingModule"],
                    _graficas_graficas_module__WEBPACK_IMPORTED_MODULE_9__["GraficasModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cobranza/cobranza/cobranza.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cobranza/cobranza/cobranza.component.ts ***!
  \*********************************************************/
/*! exports provided: CobranzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobranzaComponent", function() { return CobranzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CobranzaComponent {
    constructor() { }
    ngOnInit() { }
}
CobranzaComponent.ɵfac = function CobranzaComponent_Factory(t) { return new (t || CobranzaComponent)(); };
CobranzaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CobranzaComponent, selectors: [["app-cobranza"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function CobranzaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CobranzaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cobranza',
                templateUrl: './cobranza.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/ingresos/ingresos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cobranza/ingresos/ingresos.component.ts ***!
  \*********************************************************/
/*! exports provided: IngresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresosComponent", function() { return IngresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IngresosComponent {
    constructor() { }
    ngOnInit() {
    }
}
IngresosComponent.ɵfac = function IngresosComponent_Factory(t) { return new (t || IngresosComponent)(); };
IngresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IngresosComponent, selectors: [["app-ingresos"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "_center-items"], [1, "_en-construccion-bc"]], template: function IngresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngresosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ingresos',
                templateUrl: './ingresos.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/notificaciones/notificaciones.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cobranza/notificaciones/notificaciones.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesComponent", function() { return NotificacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api_rest_cobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-rest-cobranza.service */ "./src/app/cobranza/services/api-rest-cobranza.service.ts");
/* harmony import */ var _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/api-rest-shared.service */ "./src/app/shared/services/api-rest-shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _graficas_ngx_vertical_bar_chart_v2_ngx_vertical_bar_chart_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../graficas/ngx-vertical-bar-chart-v2/ngx-vertical-bar-chart-v2.component */ "./src/app/graficas/ngx-vertical-bar-chart-v2/ngx-vertical-bar-chart-v2.component.ts");








const _c0 = function () { return { standalone: true }; };
class NotificacionesComponent {
    constructor(apiRestCobranzaService, apiRestSharedService) {
        this.apiRestCobranzaService = apiRestCobranzaService;
        this.apiRestSharedService = apiRestSharedService;
        this.chart_1 = {
            data: [],
            sizeView: undefined,
            showXAxis: false,
            showYAxis: true,
            gradient: true,
            showLegend: true,
            legendTitle: 'Medios Entrega',
            showXAxisLabel: false,
            xAxisLabel: '',
            showYAxisLabel: true,
            yAxisLabel: 'Montos de Cartas Emitidas',
            colorScheme: {
                domain: ['#165BF6', '#1381D4', '#21C8EB', '#13D4C0', '#16F69F'],
            },
        };
        // NGMODEL
        this.chart_1_anio = '2019';
        // CATALOGOS
        this.catalogos = {
            ANIOS: {
                apiRest: false,
                data: ['2020', '2019', '2018', '2017', '2016', '2015'],
            },
            MESES: {
                apiRest: false,
                data: [
                    { clave: 1, nombre: 'Enero' },
                    { clave: 2, nombre: 'Febrero' },
                    { clave: 3, nombre: 'Marzo' },
                    { clave: 4, nombre: 'Abril' },
                    { clave: 5, nombre: 'Mayo' },
                    { clave: 6, nombre: 'Junio' },
                    { clave: 7, nombre: 'Julio' },
                    { clave: 8, nombre: 'Agosto' },
                    { clave: 9, nombre: 'Septiembre' },
                    { clave: 10, nombre: 'Octubre' },
                    { clave: 11, nombre: 'Noviembre' },
                    { clave: 12, nombre: 'Diciembre' },
                ],
            },
            COLONIA: { apiRest: true, data: [] },
            ESTATUS_NOTIFICACION: { apiRest: true, data: [] },
            MONTOS_ADEUDOS: {
                apiRest: false,
                data: [
                    '10,000 - 20,000',
                    '20,000 - 40,000',
                    '50,000 - 70,000',
                    '70,000 -',
                ],
            },
            CAT_ADEUDO: { apiRest: true, data: [] },
        };
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.catalogos, (v, k) => {
            if (v === null || v === void 0 ? void 0 : v.apiRest)
                this.getCatalogo(k);
        });
    }
    ngOnInit() {
        this.getMedioEntregaNotificacion();
    }
    chart_1_selectFilter(eve, filter) {
        var _a, _b;
        console.log('::::: CHART_1_FILTER: ', filter, eve);
        if (!eve && filter == 'anio')
            this.chart_1_anio = '2019';
        if ((this.chart_1_mesDel &&
            this.chart_1_mesAl &&
            ((_a = this.chart_1_mesDel) === null || _a === void 0 ? void 0 : _a.clave) <= ((_b = this.chart_1_mesAl) === null || _b === void 0 ? void 0 : _b.clave)) ||
            (!this.chart_1_mesDel && !this.chart_1_mesAl))
            this.getMedioEntregaNotificacion();
    }
    /** ########## SERVICES ########## */
    getCatalogo(flag_cat) {
        this.apiRestSharedService.getCatalogo(flag_cat).subscribe((success) => {
            if (!!success)
                this.catalogos[flag_cat].data = success.body;
        }, (error) => { });
    }
    getMedioEntregaNotificacion() {
        const dataRequest = {
            anio: this.chart_1_anio ? this.chart_1_anio : '2019',
            categoriaAdeudo: this.chart_1_cat ? this.chart_1_cat.claveSIM : '',
            mesInicio: this.chart_1_mesDel ? this.chart_1_mesDel.clave : '',
            mesFin: this.chart_1_mesAl ? this.chart_1_mesAl.clave : '',
            colonia: this.chart_1_col ? this.chart_1_col.claveSIM : '',
            estatusNotificacion: this.chart_1_estatus
                ? this.chart_1_estatus.claveSIM
                : '',
        };
        this.apiRestCobranzaService
            .getMedioEntregaNotificacion(dataRequest)
            .subscribe((success) => {
            if (!!success)
                this.chart_1.data = this.generateChart_1(success === null || success === void 0 ? void 0 : success.body);
        }, (error) => { });
    }
    /** ########## FORMATTING ########## */
    generateChart_1(data) {
        const items = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](data, (_item, index) => {
            return {
                name: _item === null || _item === void 0 ? void 0 : _item.medioNotificacion,
                value: _item === null || _item === void 0 ? void 0 : _item.totalMontoAdeudoNotificado,
                noNot: _item === null || _item === void 0 ? void 0 : _item.cantidadNotificaciones,
            };
        });
        console.log('::::: CHART_1: ', JSON.stringify(items));
        return items;
    }
}
NotificacionesComponent.ɵfac = function NotificacionesComponent_Factory(t) { return new (t || NotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_rest_cobranza_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestCobranzaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestSharedService"])); };
NotificacionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificacionesComponent, selectors: [["app-notificaciones"]], decls: 40, vars: 25, consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col", "col-sm-12"], [1, "card"], [1, "card-heading", "border", "bottom"], [1, "card-title"], [1, "card-block", "mb-5"], [1, "col-sm-12_", "mb-5", "mt-1"], [1, "form-inline", "no-gutters"], [1, "col-md-1"], [1, "col-md-2"], ["notFoundText", "Sin resultados", "loadingText", "Cargando...", 3, "items", "ngModel", "ngModelOptions", "ngModelChange", "change"], ["bindLabel", "nombre", "notFoundText", "Sin resultados", "loadingText", "Cargando...", "placeholder", "Seleccione...", 3, "items", "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "col-md-12", "my-1"], ["bindLabel", "nombreItem", "notFoundText", "Sin resultados", "loadingText", "Cargando...", 3, "items", "ngModel", "ngModelOptions", "ngModelChange", "change"], ["bindLabel", "nombreItem", "notFoundText", "Sin resultados", "loadingText", "Cargando...", "placeholder", "Seleccione...", 3, "items", "ngModel", "ngModelOptions", "ngModelChange", "change"], [3, "params"]], template: function NotificacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Notificaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Medios de Entrega de Notificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificacionesComponent_Template_ng_select_ngModelChange_17_listener($event) { return ctx.chart_1_anio = $event; })("change", function NotificacionesComponent_Template_ng_select_change_17_listener($event) { return ctx.chart_1_selectFilter($event, "anio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mes Del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificacionesComponent_Template_ng_select_ngModelChange_21_listener($event) { return ctx.chart_1_mesDel = $event; })("change", function NotificacionesComponent_Template_ng_select_change_21_listener($event) { return ctx.chart_1_selectFilter($event, "mesDel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mes Al");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificacionesComponent_Template_ng_select_ngModelChange_25_listener($event) { return ctx.chart_1_mesAl = $event; })("change", function NotificacionesComponent_Template_ng_select_change_25_listener($event) { return ctx.chart_1_selectFilter($event, "medAl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Colonias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificacionesComponent_Template_ng_select_ngModelChange_30_listener($event) { return ctx.chart_1_col = $event; })("change", function NotificacionesComponent_Template_ng_select_change_30_listener($event) { return ctx.chart_1_selectFilter($event, "colonia"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificacionesComponent_Template_ng_select_ngModelChange_34_listener($event) { return ctx.chart_1_cat = $event; })("change", function NotificacionesComponent_Template_ng_select_change_34_listener($event) { return ctx.chart_1_selectFilter($event, "catAdeudo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Estatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificacionesComponent_Template_ng_select_ngModelChange_38_listener($event) { return ctx.chart_1_estatus = $event; })("change", function NotificacionesComponent_Template_ng_select_change_38_listener($event) { return ctx.chart_1_selectFilter($event, "estatus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-ngx-vertical-bar-chart-v2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogos == null ? null : ctx.catalogos.ANIOS == null ? null : ctx.catalogos.ANIOS.data)("ngModel", ctx.chart_1_anio)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogos == null ? null : ctx.catalogos.MESES == null ? null : ctx.catalogos.MESES.data)("ngModel", ctx.chart_1_mesDel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogos == null ? null : ctx.catalogos.MESES == null ? null : ctx.catalogos.MESES.data)("ngModel", ctx.chart_1_mesAl)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogos == null ? null : ctx.catalogos.COLONIA == null ? null : ctx.catalogos.COLONIA.data)("ngModel", ctx.chart_1_col)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogos == null ? null : ctx.catalogos.CAT_ADEUDO == null ? null : ctx.catalogos.CAT_ADEUDO.data)("ngModel", ctx.chart_1_cat)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.catalogos == null ? null : ctx.catalogos.ESTATUS_NOTIFICACION == null ? null : ctx.catalogos.ESTATUS_NOTIFICACION.data)("ngModel", ctx.chart_1_estatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx.chart_1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _graficas_ngx_vertical_bar_chart_v2_ngx_vertical_bar_chart_v2_component__WEBPACK_IMPORTED_MODULE_6__["NgxVerticalBarChartV2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYnJhbnphL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificacionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notificaciones',
                templateUrl: './notificaciones.component.html',
                styleUrls: ['./notificaciones.component.scss'],
            }]
    }], function () { return [{ type: _services_api_rest_cobranza_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestCobranzaService"] }, { type: _shared_services_api_rest_shared_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestSharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/prueba-jvc/ApiEjemploService.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/cobranza/prueba-jvc/ApiEjemploService.service.ts ***!
  \******************************************************************/
/*! exports provided: ApiEjemploService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiEjemploService", function() { return ApiEjemploService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




//const localUrl = 'assets/data/smartphone.json';
//const apiUrl = 'http://localhost:8080/API-ADMIN/v1/api/';
const apiUrl = 'http://localhost:8080/API-ADMIN/v1/api/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Authorization: 'jwt-token',
    }),
};
class ApiEjemploService {
    constructor(http) {
        this.http = http;
    }
    /*
    GetNotarias(): Observable<Notaria> {
      return this.http.get<Notaria>(this.baseurl + '/bugtracking/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }
  */
    getNotarias() {
        return this.http.get(apiUrl + 'prueba/notaria');
    }
}
ApiEjemploService.ɵfac = function ApiEjemploService_Factory(t) { return new (t || ApiEjemploService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiEjemploService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiEjemploService, factory: ApiEjemploService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiEjemploService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/prueba-jvc/pruebajvc.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cobranza/prueba-jvc/pruebajvc.component.ts ***!
  \************************************************************/
/*! exports provided: PruebajvcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebajvcComponent", function() { return PruebajvcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ApiEjemploService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiEjemploService.service */ "./src/app/cobranza/prueba-jvc/ApiEjemploService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PruebajvcComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notaria_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notaria_r1.idNotario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notaria_r1.notario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notaria_r1.notaria);
} }
class PruebajvcComponent {
    constructor(api) {
        this.api = api;
        this.NotariasList = [];
    }
    ngOnInit() {
        this.getNotarias();
    }
    getNotarias() {
        this.api.getNotarias().subscribe((data) => {
            //console.log('--->>>>' + JSON.stringify(data));
            this.NotariasList = data.body;
            console.log('--->>>>' + JSON.stringify(this.NotariasList));
        }, (err) => { });
    }
}
PruebajvcComponent.ɵfac = function PruebajvcComponent_Factory(t) { return new (t || PruebajvcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ApiEjemploService_service__WEBPACK_IMPORTED_MODULE_1__["ApiEjemploService"])); };
PruebajvcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruebajvcComponent, selectors: [["app-pruebajvc"]], decls: 17, vars: 1, consts: [[1, "container", "wrapper"], [1, "row"], [1, "col-md-12"], [1, "inner"], [1, "table", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function PruebajvcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista Notarias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Notario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NotariaBBV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PruebajvcComponent_tr_16_Template, 7, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.NotariasList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PruebajvcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pruebajvc',
                templateUrl: './pruebajvc.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _ApiEjemploService_service__WEBPACK_IMPORTED_MODULE_1__["ApiEjemploService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cobranza/services/api-rest-cobranza.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/cobranza/services/api-rest-cobranza.service.ts ***!
  \****************************************************************/
/*! exports provided: ApiRestCobranzaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestCobranzaService", function() { return ApiRestCobranzaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






const ROOT_URL = '/API-COBRANZA-DE/v1/api/cartera';
class ApiRestCobranzaService {
    constructor(http) {
        this.http = http;
    }
    getMontosCategoriaMes(data) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        categoriaAdeudo: 'CAT1',
                        mes: 7,
                        totalMontoVencido: 1000,
                        totalCantidadAdeudos: 30,
                    },
                    {
                        categoriaAdeudo: 'CAT1',
                        mes: 8,
                        totalMontoVencido: 3040,
                        totalCantidadAdeudos: 170,
                    },
                    {
                        categoriaAdeudo: 'CAT2',
                        mes: 8,
                        totalMontoVencido: 1400,
                        totalCantidadAdeudos: 36,
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
        }
        else {
            //   return this.http.get<any>(
            //     `${ENVIRONMENT.urlWS}${ROOT_URL}/montoCategoriaMes`,
            //     { params: {} }
            //   );
            return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].urlWS}${ROOT_URL}/montoCategoriaMes`, data ? data : {});
        }
    }
    getMontoCategoriaAnio(data) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        categoriaAdeudo: 'CAT1',
                        anio: 2020,
                        totalMontoVencido: 4040,
                        totalCantidadAdeudos: 200,
                    },
                    {
                        categoriaAdeudo: 'CAT2',
                        anio: 2020,
                        totalMontoVencido: 1400,
                        totalCantidadAdeudos: 36,
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
        }
        else {
            return this.http.request('POST', `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].urlWS}${ROOT_URL}/montoCategoriaAnio`, {
                body: JSON.stringify(data),
                params: {},
            });
            //   return this.http.get<any>(
            //     `${ENVIRONMENT.urlWS}${ROOT_URL}/montoCategoriaAnio`,
            //       {params: {} }
            //   );
        }
    }
    getMedioEntregaNotificacion(data) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        medioNotificacion: 'Carta',
                        totalMontoAdeudoNotificado: 5622,
                        cantidadNotificaciones: 219,
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
        }
        else {
            return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].urlWS}${ROOT_URL}/medioEntregaNotificacion`, data ? data : {});
        }
    }
}
ApiRestCobranzaService.ɵfac = function ApiRestCobranzaService_Factory(t) { return new (t || ApiRestCobranzaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ApiRestCobranzaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiRestCobranzaService, factory: ApiRestCobranzaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiRestCobranzaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=cobranza-cobranza-module.js.map