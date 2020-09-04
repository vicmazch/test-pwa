(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/api-rest-shared.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/api-rest-shared.service.ts ***!
  \************************************************************/
/*! exports provided: ApiRestSharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestSharedService", function() { return ApiRestSharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






const ROOT_URL = '/API-ADMIN-DE/v1/api';
class ApiRestSharedService {
    constructor(http) {
        this.http = http;
    }
    getCatalogo(_nc) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].name === 'MOCK') {
            let responseMock = {
                body: [
                    {
                        idItem: 1,
                        nombreCatalogo: 'CAT_ADEUDO',
                        claveSIM: 'CATEGORIA ADEUNO UNO',
                        nombreItem: 'CATEGORIA ADEUNO UNO',
                    },
                    {
                        idItem: 2,
                        nombreCatalogo: 'CAT_ADEUDO',
                        claveSIM: 'CATEGORIA ADEUDO DOS',
                        nombreItem: 'CATEGORIA ADEUDO DOS',
                    },
                    {
                        idItem: 3,
                        nombreCatalogo: 'CAT_ADEUDO',
                        claveSIM: 'CATEGORIA ADEUDO TRES',
                        nombreItem: 'CATEGORIA ADEUDO TRES',
                    },
                ],
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(responseMock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
        }
        else {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENVIRONMENT"].urlWS}${ROOT_URL}/catalogo/obtenerCatalogos`, { params: { nombre: _nc } });
        }
    }
}
ApiRestSharedService.ɵfac = function ApiRestSharedService_Factory(t) { return new (t || ApiRestSharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ApiRestSharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiRestSharedService, factory: ApiRestSharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiRestSharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map