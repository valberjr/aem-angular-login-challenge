function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n<!-- <app-container-right></app-container-right> -->\r\n<!-- <app-label></app-label> -->\r\n<!-- <app-input></app-input> -->\r\n<!-- <app-button></app-button> -->\r\n<!-- <app-login-form></app-login-form> -->\r\n<!-- <app-current-time></app-current-time> -->\r\n<!-- <app-weather></app-weather> -->\r\n<!-- <app-footer></app-footer> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsButtonButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"login-button\" type=\"button\" (click)=\"onClick()\">\n    {{ label }}\n</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container-right/container-right.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container-right/container-right.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContainerRightContainerRightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-container--right\">\n    <img\n        class=\"logo\"\n        src=\"/content/dam/angularapp/e959f2f20202d40e5f950e778d565743.png\"\n        alt=\"logo-compasso\"\n    />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter/counter.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter/counter.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>{{ currentValue }} seconds</p> -->\n<div>\n    <div class=\"counter-item counter-item__span-number-seconds\">\n        {{ currentValue }}\n    </div>\n    <div class=\"counter-item counter-item__span-text-seconds\">seconds</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-time/current-time.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-time/current-time.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCurrentTimeCurrentTimeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"current-time-container\">\n    <div class=\"current-time-hour\">{{ time }}</div>\n    <div class=\"current-time-date\">{{ date }}</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-container\">\n    <p class=\"footer footer__item--p-essa-janela\">\n        Essa janela do navegador é usada para manter sua sessão de autenticação\n        ativa. Deixe-a aberta em segundo plano e abra uma nova janela para\n        continuar a navegar.\n    </p>\n\n    <div class=\"footer footer-vertical-line-before-search\"></div>\n\n    <app-search class=\"footer footer__item--app-search\"></app-search>\n\n    <div class=\"footer footer-vertical-line-after-search\"></div>\n\n    <p class=\"footer footer__item--p-application-refresh\">\n        Application refresh in\n    </p>\n\n    <app-counter class=\"footer footer__item--app-counter\"></app-counter>\n\n    <a\n        class=\"footer footer__item--a-continuar-navegando\"\n        (click)=\"keepBrowsing()\"\n    >\n        Continuar navegando\n    </a>\n\n    <a class=\"footer\" (click)=\"logout()\">logout</a>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"input__div\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"inpu icons\">\n        {{ icon }}\n    </mat-icon>\n    <input\n        class=\"input__input\"\n        [type]=\"type\"\n        [name]=\"name\"\n        [placeholder]=\"placeholder\"\n        [(ngModel)]=\"value\"\n        (ngModelChange)=\"onChange($event)\"\n        required\n    />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/label/label.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/label/label.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLabelLabelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isInvalidLogin\" class=\"login-error\">{{ label }}</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/link/link.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/link/link.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLinkLinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"#\" (click)=\"onClick()\">{{ label }}</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aem-page class=\"structure-page\" [attr.data-cq-page-path]=\"path\" [cqPath]=\"path\" [cqItems]=\"items\" [cqItemsOrder]=\"itemsOrder\"></aem-page>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search__div\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"person search icon\">\n        person_search\n    </mat-icon>\n    <input\n        class=\"search__input\"\n        type=\"text\"\n        name=\"search\"\n        [placeholder]=\"placeholder\"\n        [(ngModel)]=\"value\"\n        (ngModelChange)=\"onChange($event)\"\n    />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather/weather.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather/weather.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWeatherWeatherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"weather-container\">\n    <div>{{ weather.location }}</div>\n    <div class=\"weather-inner-container\">\n        <img class=\"weather-icon\" [src]=\"weather.imageSrc\" alt=\"weather-icon\" />\n        <div class=\"weather-temp\">{{ weather.temperature }}</div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AemPageMatcher, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AemPageMatcher", function () {
      return AemPageMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page/page.component */
    "./src/app/components/page/page.component.ts");

    function AemPageMatcher(url) {
      if (url.length) {
        return {
          consumed: url,
          posParams: {
            path: url[url.length - 1]
          }
        };
      }
    }

    var routes = [{
      matcher: AemPageMatcher,
      component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
      resolve: {
        path: _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageDataResolver"]
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      providers: [_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageDataResolver"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageRouteReuseStrategy"]
      }]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-spa-page-model-manager */
    "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
    /* harmony import */


    var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.updateData = function (pageModel) {
        _this.path = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].PATH_PROP];
        _this.items = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_PROP];
        _this.itemsOrder = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_ORDER_PROP];
      };

      _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].initialize().then(this.updateData);
    });

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "#spa-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/button/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/download/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/image/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/list/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/title/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_button_button_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/button/button.component */
    "./src/app/components/button/button.component.ts");
    /* harmony import */


    var _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/container-right/container-right.component */
    "./src/app/components/container-right/container-right.component.ts");
    /* harmony import */


    var _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/current-time/current-time.component */
    "./src/app/components/current-time/current-time.component.ts");
    /* harmony import */


    var _components_import_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/import-components */
    "./src/app/components/import-components.ts");
    /* harmony import */


    var _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/input/input.component */
    "./src/app/components/input/input.component.ts");
    /* harmony import */


    var _components_model_manager_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/model-manager.service */
    "./src/app/components/model-manager.service.ts");
    /* harmony import */


    var _components_page_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/page/page.component */
    "./src/app/components/page/page.component.ts");
    /* harmony import */


    var _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/weather/weather.component */
    "./src/app/components/weather/weather.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_link_link_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/link/link.component */
    "./src/app/components/link/link.component.ts");
    /* harmony import */


    var _components_label_label_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/label/label.component */
    "./src/app/components/label/label.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/counter/counter.component */
    "./src/app/components/counter/counter.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["SpaAngularEditableComponentsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], // AEM Modules
      _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["AemAngularCoreWcmComponentsTabsV1"], _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_7__["AemAngularCoreWcmComponentsTitleV2"], _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_8__["AemAngularCoreWcmComponentsBreadCrumbV2"], _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_10__["AemAngularCoreWcmComponentsNavigationV1"], _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_2__["AemAngularCoreWcmComponentsButtonV1"], _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_4__["AemAngularCoreWcmComponentsImageV2"], _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_3__["AemAngularCoreWcmComponentsDownloadV1"], _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_5__["AemAngularCoreWcmComponentsListV2"], _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__["AemAngularCoreWcmComponentsAccordionV1"], _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_6__["AemAngularCoreWcmComponentsSeparatorV1"], _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_9__["AemAngularCoreWcmComponentsLanguageNavigationV1"], // Angular Flex
      _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], // Material Modules
      _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"]],
      providers: [_components_model_manager_service__WEBPACK_IMPORTED_MODULE_32__["ModelManagerService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"],
        useValue: '/'
      }],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_33__["PageComponent"], _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_28__["ContainerRightComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_27__["ButtonComponent"], _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_29__["CurrentTimeComponent"], _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_34__["WeatherComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_35__["SearchComponent"], _components_link_link_component__WEBPACK_IMPORTED_MODULE_36__["LinkComponent"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_37__["LabelComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__["FooterComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_39__["CounterComponent"]],
      entryComponents: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_33__["PageComponent"], _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_28__["ContainerRightComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_27__["ButtonComponent"], _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_29__["CurrentTimeComponent"], _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_34__["WeatherComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_35__["SearchComponent"], _components_link_link_component__WEBPACK_IMPORTED_MODULE_36__["LinkComponent"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_37__["LabelComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__["FooterComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/button/button.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/button/button.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsButtonButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-button {\n  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);\n  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 50px;\n  width: 100%;\n  height: 67px;\n  margin-top: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjJkMDQgMCUsICNjMTMyMTYgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxufVxyXG4iLCIubG9naW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmYyZDA0IDAlLCAjYzEzMjE2IDEwMCUpO1xuICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjdweDtcbiAgbWFyZ2luLXRvcDogM2VtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/button/button.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/button/button.component.ts ***!
    \*******************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_label_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/label.service */
    "./src/app/label.service.ts");
    /* harmony import */


    var src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/local-storage.service */
    "./src/app/local-storage.service.ts");

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent(localStorageService, router, labelService) {
        _classCallCheck(this, ButtonComponent);

        this.localStorageService = localStorageService;
        this.router = router;
        this.labelService = labelService;
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          var user = {
            username: this.localStorageService.get('username'),
            password: this.localStorageService.get('password')
          };

          if (user) {
            this.login(this.url, user);
          } else {
            console.log('redirecting to: ... ');
          }
        }
      }, {
        key: "login",
        value: function login(url, user) {
          if (user.username === 'aaa' && user.password === '123') {
            this.router.navigate([this.url]);
          } else {
            this.labelService.setInvalidLogin(true);
          }
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ctorParameters = function () {
      return [{
        type: src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_label_service__WEBPACK_IMPORTED_MODULE_4__["LabelService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ButtonComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ButtonComponent.prototype, "url", void 0);
    ButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./button.component.scss */
      "./src/app/components/button/button.component.scss"))["default"]]
    })], ButtonComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/button-component')(ButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/container-right/container-right.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/container-right/container-right.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContainerRightContainerRightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context {\n  display: block;\n}\n\n.login-container--right {\n  display: flex;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: center;\n  height: 828px;\n  background: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/notebook.jpg') center;\n  background-size: cover;\n}\n\n.logo {\n  width: 30%;\n  padding-top: 3rem;\n}\n\n@media (max-width: 1200px) {\n  div.container--right {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXItcmlnaHQvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFpbmVyLXJpZ2h0XFxjb250YWluZXItcmlnaHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyLXJpZ2h0L2NvbnRhaW5lci1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFHQSxhQUFBO0VBRUEsd0dBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDRko7O0FEV0E7RUFDSTtJQUNJLGFBQUE7RUNSTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXItcmlnaHQvY29udGFpbmVyLXJpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lci0tcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDgyOHB4O1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9ub3RlYm9vay5qcGcnKSBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbi8vICAgICBkaXYubG9naW4tY29udGFpbmVyLXJpZ2h0IHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBkaXYuY29udGFpbmVyLS1yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdC1jb250ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1jb250YWluZXItLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDgyOHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbm90ZWJvb2suanBnXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBkaXYuY29udGFpbmVyLS1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/container-right/container-right.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/container-right/container-right.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ContainerRightComponent */

  /***/
  function srcAppComponentsContainerRightContainerRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerRightComponent", function () {
      return ContainerRightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContainerRightComponent = /*#__PURE__*/function () {
      function ContainerRightComponent() {
        _classCallCheck(this, ContainerRightComponent);
      }

      _createClass(ContainerRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContainerRightComponent;
    }();

    ContainerRightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-container-right',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./container-right.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container-right/container-right.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./container-right.component.scss */
      "./src/app/components/container-right/container-right.component.scss"))["default"]]
    })], ContainerRightComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/container-right-component')(ContainerRightComponent);
    /***/
  },

  /***/
  "./src/app/components/container/container.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/container/container.component.ts ***!
    \*************************************************************/

  /*! no exports provided */

  /***/
  function srcAppComponentsContainerContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");

    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])("angularapp/components/spa")(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["AEMContainerComponent"]);
    /***/
  },

  /***/
  "./src/app/components/counter/counter.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/counter/counter.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCounterCounterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.3em;\n  font-style: normal;\n  font-weight: 400;\n  color: #ffffff;\n}\n\n.counter-item {\n  flex: 1;\n}\n\n.counter-item.counter-item__span-number-seconds {\n  font-family: \"Roboto\";\n  font-size: 48px;\n  text-align: center;\n}\n\n.counter-item.counter-item__span-text-seconds {\n  font-family: \"Mark Pro\";\n  font-size: 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyL0M6XFxVc2Vyc1xcdmFsYmVyLnZhc2NvbmNlbG9zXFxEb2N1bWVudHNcXEFFTVxcUHJvamV0b3NcXGFlbS1hbmd1bGFyLWxvZ2luLWNoYWxsZW5nZVxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvdW50ZXJcXGNvdW50ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ0FKOztBREdBO0VBQ0ksT0FBQTtBQ0FKOztBREVJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURHSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvdW50ZXItaXRlbSB7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgICYuY291bnRlci1pdGVtX19zcGFuLW51bWJlci1zZWNvbmRzIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmNvdW50ZXItaXRlbV9fc3Bhbi10ZXh0LXNlY29uZHMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb3VudGVyLWl0ZW0ge1xuICBmbGV4OiAxO1xufVxuLmNvdW50ZXItaXRlbS5jb3VudGVyLWl0ZW1fX3NwYW4tbnVtYmVyLXNlY29uZHMge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY291bnRlci1pdGVtLmNvdW50ZXItaXRlbV9fc3Bhbi10ZXh0LXNlY29uZHMge1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/counter/counter.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/counter/counter.component.ts ***!
    \*********************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppComponentsCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/local-storage.service */
    "./src/app/local-storage.service.ts");

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent(changeDetector, router, localStorageService) {
        _classCallCheck(this, CounterComponent);

        this.changeDetector = changeDetector;
        this.router = router;
        this.localStorageService = localStorageService;
        this.counterState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reset = false;
      }

      _createClass(CounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "start",
        value: function start() {
          var _this2 = this;

          var time = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
          this.currentValue = this.startAt;
          this.changeDetector.detectChanges();
          this.currentSubscription = time.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(this.startAt), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (v) {
            return _this2.startAt - (v + 1);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            if (!_this2.reset) {
              _this2.stop();

              _this2.localStorageService.clear();

              _this2.router.navigate(['/content/angularapp/us/en/login.html']);
            }
          })).subscribe(function (value) {
            _this2.reset = false;
            _this2.currentValue = value;

            _this2.changeDetector.detectChanges();
          });
        }
      }, {
        key: "stop",
        value: function stop() {
          this.currentSubscription.unsubscribe();
        }
      }]);

      return CounterComponent;
    }();

    CounterComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CounterComponent.prototype, "startAt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CounterComponent.prototype, "counterState", void 0);
    CounterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-counter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter/counter.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./counter.component.scss */
      "./src/app/components/counter/counter.component.scss"))["default"]]
    })], CounterComponent);
    /***/
  },

  /***/
  "./src/app/components/current-time/current-time.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/current-time/current-time.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCurrentTimeCurrentTimeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".current-time-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  color: #222222;\n  line-height: 1;\n}\n.current-time-container div.current-time-hour {\n  font-weight: 700;\n  font-size: 144px;\n}\n.current-time-container div.current-time-date {\n  font-weight: 400;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW50LXRpbWUvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3VycmVudC10aW1lXFxjdXJyZW50LXRpbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVudC10aW1lL2N1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxjQUFBO0FDREo7QURHSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbnQtdGltZS9jdXJyZW50LXRpbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudC10aW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuXHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgICBkaXYuY3VycmVudC10aW1lLWhvdXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDRweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuY3VycmVudC10aW1lLWRhdGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5jdXJyZW50LXRpbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uY3VycmVudC10aW1lLWNvbnRhaW5lciBkaXYuY3VycmVudC10aW1lLWhvdXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0NHB4O1xufVxuLmN1cnJlbnQtdGltZS1jb250YWluZXIgZGl2LmN1cnJlbnQtdGltZS1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/current-time/current-time.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/current-time/current-time.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CurrentTimeComponent */

  /***/
  function srcAppComponentsCurrentTimeCurrentTimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentTimeComponent", function () {
      return CurrentTimeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CurrentTimeComponent = /*#__PURE__*/function () {
      function CurrentTimeComponent() {
        _classCallCheck(this, CurrentTimeComponent);
      }

      _createClass(CurrentTimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var date = new Date();
          var day = date.getDate();
          this.time = date.toLocaleTimeString('pt-BR').replace(/(.*)\D\d+/, '$1');
          var week;

          switch (date.getDay()) {
            case 0:
              week = 'domingo';
              break;

            case 1:
              week = 'segunda-feira';
              break;

            case 2:
              week = 'terça-feira';
              break;

            case 3:
              week = 'quarta-feira';
              break;

            case 4:
              week = 'quinta-feira';
              break;

            case 5:
              week = 'sexta-feira';
              break;

            case 6:
              week = 'sábado';
              break;

            default:
          }

          var month;

          switch (date.getMonth()) {
            case 0:
              month = 'Janeiro';
              break;

            case 1:
              month = 'Fevereiro';
              break;

            case 2:
              month = 'Março';
              break;

            case 3:
              month = 'Abril';
              break;

            case 4:
              month = 'Maio';
              break;

            case 5:
              month = 'Junho';
              break;

            case 6:
              month = 'Julho';
              break;

            case 7:
              month = 'Agosto';
              break;

            case 8:
              month = 'Setembro';
              break;

            case 9:
              month = 'Outubro';
              break;

            case 10:
              month = 'Novembro';
              break;

            case 11:
              month = 'Dezembro';
              break;

            default:
          }

          this.year = date.getFullYear();
          this.date = "".concat(week, ", ").concat(day, " de ").concat(month, " de ").concat(this.year);
        }
      }]);

      return CurrentTimeComponent;
    }();

    CurrentTimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-current-time',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./current-time.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-time/current-time.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./current-time.component.scss */
      "./src/app/components/current-time/current-time.component.scss"))["default"]]
    })], CurrentTimeComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/current-time-component')(CurrentTimeComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-container {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n  width: 100%;\n  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  color: #ffffff;\n}\n\n.footer.footer__item--p-essa-janela {\n  width: 562px;\n  font-size: 12px;\n  text-align: right;\n}\n\n.footer.footer__item--app-search {\n  width: 450px;\n}\n\n.footer.footer__item--p-application-refresh {\n  width: 80px;\n  font-size: 14px;\n  text-align: right;\n}\n\n.footer.footer__item--app-counter {\n  width: 81px;\n}\n\n.footer.footer__item--a-continuar-navegando {\n  background: #ffffff;\n  font-size: 12px;\n  color: #c13216;\n  text-align: center;\n  width: 120px;\n}\n\n.footer.footer__item--a-logout {\n  font-size: 12px;\n}\n\n.footer.footer-vertical-line-before-search {\n  border-left: 1px solid white;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  margin-left: 1.5em;\n}\n\n.footer.footer-vertical-line-after-search {\n  border-left: 1px solid white;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  margin-left: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0RBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0FDRko7O0FESUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRlI7O0FES0k7RUFDSSxZQUFBO0FDSFI7O0FETUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSlI7O0FET0k7RUFDSSxXQUFBO0FDTFI7O0FEUUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTlI7O0FEU0k7RUFDSSxlQUFBO0FDUFI7O0FEVUk7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ1JSOztBRFdJO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MC4xNmRlZywgIzMzMzgzZCAwJSwgIzFjMWQyMCAxMDAlKTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAmLmZvb3Rlcl9faXRlbS0tcC1lc3NhLWphbmVsYSB7XHJcbiAgICAgICAgd2lkdGg6IDU2MnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmLmZvb3Rlcl9faXRlbS0tYXBwLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9vdGVyX19pdGVtLS1wLWFwcGxpY2F0aW9uLXJlZnJlc2gge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmLmZvb3Rlcl9faXRlbS0tYXBwLWNvdW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9vdGVyX19pdGVtLS1hLWNvbnRpbnVhci1uYXZlZ2FuZG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjYzEzMjE2O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mb290ZXJfX2l0ZW0tLWEtbG9nb3V0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mb290ZXItdmVydGljYWwtbGluZS1iZWZvcmUtc2VhcmNoIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLmZvb3Rlci12ZXJ0aWNhbC1saW5lLWFmdGVyLXNlYXJjaCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgICB9XHJcbn1cclxuIiwiLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTAuMTZkZWcsICMzMzM4M2QgMCUsICMxYzFkMjAgMTAwJSk7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZm9vdGVyLmZvb3Rlcl9faXRlbS0tcC1lc3NhLWphbmVsYSB7XG4gIHdpZHRoOiA1NjJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb290ZXIuZm9vdGVyX19pdGVtLS1hcHAtc2VhcmNoIHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuLmZvb3Rlci5mb290ZXJfX2l0ZW0tLXAtYXBwbGljYXRpb24tcmVmcmVzaCB7XG4gIHdpZHRoOiA4MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZvb3Rlci5mb290ZXJfX2l0ZW0tLWFwcC1jb3VudGVyIHtcbiAgd2lkdGg6IDgxcHg7XG59XG4uZm9vdGVyLmZvb3Rlcl9faXRlbS0tYS1jb250aW51YXItbmF2ZWdhbmRvIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2MxMzIxNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG59XG4uZm9vdGVyLmZvb3Rlcl9faXRlbS0tYS1sb2dvdXQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9vdGVyLmZvb3Rlci12ZXJ0aWNhbC1saW5lLWJlZm9yZS1zZWFyY2gge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbn1cbi5mb290ZXIuZm9vdGVyLXZlcnRpY2FsLWxpbmUtYWZ0ZXItc2VhcmNoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogMS41ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../counter/counter.component */
    "./src/app/components/counter/counter.component.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.counterState = 'counter is ticking';
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.counter.startAt = 999;
          this.counter.start();
        }
      }, {
        key: "keepBrowsing",
        value: function keepBrowsing() {
          this.counter.reset = true;
          this.counter.stop();
          this.counter.start();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.counter.stop();
          this.router.navigate(['/content/angularapp/us/en/login.html']);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_counter_counter_component__WEBPACK_IMPORTED_MODULE_4__["CounterComponent"], {
      "static": false
    })], FooterComponent.prototype, "counter", void 0);
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/footer-component')(FooterComponent); // TELA 2
    // - [ok] Temperatura deve ser acessada por requisição de API com localização definida pela localização do usuário que fez o login.
    // - [ok] Contador: começa em 180 segundos quando logada a página, quando zerar deve fazer automaticamente o logout.
    // - [ok] Botão “continuar navegando” reseta o contador e retorna aos 180 segundos
    // - [ok] Botão logout faz o logout e retorna para página inicial.
    // - Busca: após algo ser buscado na área de busca será direcionado para a página de perfil do colaborador.

    /***/
  },

  /***/
  "./src/app/components/import-components.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/import-components.ts ***!
    \*************************************************/

  /*! no exports provided */

  /***/
  function srcAppComponentsImportComponentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./container/container.component */
    "./src/app/components/container/container.component.ts");
    /* harmony import */


    var _responsive_grid_responsive_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./responsive-grid/responsive-grid.component */
    "./src/app/components/responsive-grid/responsive-grid.component.ts");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/title/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/button/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/image/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/download/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/list/v2 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */
    "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/containers/container/v1 */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-container-v1.js");
    /* harmony import */


    var _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @adobe/aem-core-components-angular-spa/core */
    "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-core.js");
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     ~ Copyright 2020 Adobe Systems Incorporated
     ~
     ~ Licensed under the Apache License, Version 2.0 (the "License");
     ~ you may not use this file except in compliance with the License.
     ~ You may obtain a copy of the License at
     ~
     ~     http://www.apache.org/licenses/LICENSE-2.0
     ~
     ~ Unless required by applicable law or agreed to in writing, software
     ~ distributed under the License is distributed on an "AS IS" BASIS,
     ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     ~ See the License for the specific language governing permissions and
     ~ limitations under the License.
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    /**
     * Normal MapTo - maps angular components to aem models
     */


    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/navigation')(_adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__["NavigationV1Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__["NavigationV1IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/separator')(_adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_10__["SeparatorV1Component"]);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/container')(_adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__["ContainerV1Component"], {
      isEmpty: _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__["ContainerIsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/experiencefragment')(_adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__["ContainerV1Component"], {
      isEmpty: _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__["ContainerIsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/download')(_adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__["DownloadV1Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__["DownloadV1IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/languagenavigation')(_adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_13__["LanguageNavigationV1Component"]);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/list')(_adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__["ListV2Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__["ListV2IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/breadcrumb')(_adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbV2Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbV2IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/button')(_adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__["ButtonV1Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__["ButtonV1IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/image')(_adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__["ImageV2Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__["ImageV2IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/title')(_adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__["TitleV2Component"], {
      isEmpty: _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__["TitleV2IsEmptyFn"]
    });
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/accordion')(_adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__["AccordionV1Component"]);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/tabs')(_adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["TabsV1Component"]);
    /**
     * Demonstrating lazy loading external modules and components.
     * Loading the following components with LazyMapTo - so they are loaded only when we need them!
     */

    var TeaserV1Component = function TeaserV1Component() {
      return __webpack_require__.e(
      /*! import() | adobe-aem-core-components-angular-base-authoring-teaser-v1 */
      "adobe-aem-core-components-angular-base-authoring-teaser-v1").then(__webpack_require__.bind(null,
      /*! @adobe/aem-core-components-angular-base/authoring/teaser/v1 */
      "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-teaser-v1.js")).then(function (Module) {
        return Module.TeaserV1Component;
      });
    };

    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/teaser')(TeaserV1Component);

    var CarouselV1Component = function CarouselV1Component() {
      return __webpack_require__.e(
      /*! import() | adobe-aem-core-components-angular-spa-containers-carousel-v1 */
      "adobe-aem-core-components-angular-spa-containers-carousel-v1").then(__webpack_require__.bind(null,
      /*! @adobe/aem-core-components-angular-spa/containers/carousel/v1 */
      "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-carousel-v1.js")).then(function (Module) {
        return Module.CarouselV1Component;
      });
    };

    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/carousel')(CarouselV1Component);
    /**
     * Demonstrates lazy loading an internal component.
     */

    /**
     * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
     */

    var TextEditConfig = {
      emptyLabel: 'Text',
      isEmpty: function isEmpty(cqModel) {
        return !cqModel || !cqModel.text || cqModel.text.trim().length < 1;
      }
    };

    var LazyTextModule = function LazyTextModule() {
      return __webpack_require__.e(
      /*! import() | text-text-component */
      "text-text-component").then(__webpack_require__.bind(null,
      /*! ./text/text.component */
      "./src/app/components/text/text.component.ts")).then(function (Module) {
        return Module.TextComponent;
      });
    };

    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/text')(LazyTextModule, TextEditConfig);
    /***/
  },

  /***/
  "./src/app/components/input/input.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/input/input.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input__div {\n  width: 100%;\n}\n.input__div .mat-icon {\n  position: absolute;\n  padding: 18px;\n  width: 40px;\n}\n.input__input {\n  width: 100%;\n  height: 60px;\n  margin-bottom: 1rem;\n  background: transparent;\n  border: 1px solid #ffffff;\n  border-radius: 50px;\n  color: white;\n  text-indent: 4em;\n}\n::-moz-placeholder {\n  color: white;\n}\n:-ms-input-placeholder {\n  color: white;\n}\n::placeholder {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXHZhbGJlci52YXNjb25jZWxvc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhci1sb2dpbi1jaGFsbGVuZ2VcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbnB1dFxcaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDUjtBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QUREQTtFQUNJLFlBQUE7QUNBSjtBRERBO0VBQ0ksWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dF9fZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnB1dF9faW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtaW5kZW50OiA0ZW07XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi5pbnB1dF9fZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5wdXRfX2RpdiAubWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uaW5wdXRfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1pbmRlbnQ6IDRlbTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/input/input.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/input/input.component.ts ***!
    \*****************************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppComponentsInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/local-storage.service */
    "./src/app/local-storage.service.ts");

    var InputComponent = /*#__PURE__*/function () {
      function InputComponent(localStorageService) {
        _classCallCheck(this, InputComponent);

        this.localStorageService = localStorageService;
        this.valueChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.name = this.type === 'text' ? 'username' : 'password';
          this.icon = this.type === 'text' ? 'person' : 'lock';
          this.localStorageService.clear();
          this.valueChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (model) {
            _this3.value = model;

            _this3.localStorageService.add(_this3.name, _this3.value);
          });
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          this.valueChanged.next(value);
        }
      }]);

      return InputComponent;
    }();

    InputComponent.ctorParameters = function () {
      return [{
        type: src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], InputComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], InputComponent.prototype, "placeholder", void 0);
    InputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-input',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./input.component.scss */
      "./src/app/components/input/input.component.scss"))["default"]]
    })], InputComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/input-component')(InputComponent);
    /***/
  },

  /***/
  "./src/app/components/label/label.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/label/label.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLabelLabelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-error {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  color: #e9b425;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYWJlbC9DOlxcVXNlcnNcXHZhbGJlci52YXNjb25jZWxvc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhci1sb2dpbi1jaGFsbGVuZ2VcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYWJlbFxcbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZXJyb3Ige1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2U5YjQyNTtcclxufVxyXG4iLCIubG9naW4tZXJyb3Ige1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlOWI0MjU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/label/label.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/label/label.component.ts ***!
    \*****************************************************/

  /*! exports provided: LabelComponent */

  /***/
  function srcAppComponentsLabelLabelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelComponent", function () {
      return LabelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_label_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/label.service */
    "./src/app/label.service.ts");

    var LabelComponent = /*#__PURE__*/function () {
      function LabelComponent(labelService) {
        _classCallCheck(this, LabelComponent);

        this.labelService = labelService;
        this.isInvalidLogin = false;
      }

      _createClass(LabelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.labelService.getInvalidLogin().subscribe(function (invalid) {
            _this4.isInvalidLogin = invalid;
          });
        }
      }]);

      return LabelComponent;
    }();

    LabelComponent.ctorParameters = function () {
      return [{
        type: src_app_label_service__WEBPACK_IMPORTED_MODULE_3__["LabelService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LabelComponent.prototype, "label", void 0);
    LabelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-label',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./label.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/label/label.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./label.component.scss */
      "./src/app/components/label/label.component.scss"))["default"]]
    })], LabelComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/label-component')(LabelComponent);
    /***/
  },

  /***/
  "./src/app/components/link/link.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/link/link.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLinkLinkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGluay9saW5rLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/link/link.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/link/link.component.ts ***!
    \***************************************************/

  /*! exports provided: LinkComponent */

  /***/
  function srcAppComponentsLinkLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkComponent", function () {
      return LinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LinkComponent = /*#__PURE__*/function () {
      function LinkComponent() {
        _classCallCheck(this, LinkComponent);
      }

      _createClass(LinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.label === 'logout') {
            console.log('logout ....');
          } else {
            console.log('refresh na página');
          }
        }
      }]);

      return LinkComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LinkComponent.prototype, "label", void 0);
    LinkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-link',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./link.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/link/link.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./link.component.scss */
      "./src/app/components/link/link.component.scss"))["default"]]
    })], LinkComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/link-component')(LinkComponent);
    /***/
  },

  /***/
  "./src/app/components/model-manager.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/model-manager.service.ts ***!
    \*****************************************************/

  /*! exports provided: ModelManagerService */

  /***/
  function srcAppComponentsModelManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelManagerService", function () {
      return ModelManagerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-spa-page-model-manager */
    "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
    /* harmony import */


    var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModelManagerService = /*#__PURE__*/function () {
      function ModelManagerService() {
        _classCallCheck(this, ModelManagerService);
      }

      _createClass(ModelManagerService, [{
        key: "getData",
        value: function getData(cfg) {
          return _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].getData(cfg);
        }
      }]);

      return ModelManagerService;
    }();

    ModelManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ModelManagerService);
    /***/
  },

  /***/
  "./src/app/components/page/page.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/page/page.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/page/page.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/page/page.component.ts ***!
    \***************************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppComponentsPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _model_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../model-manager.service */
    "./src/app/components/model-manager.service.ts");

    var PageComponent = /*#__PURE__*/_createClass(function PageComponent(route, modelManagerService) {
      var _this5 = this;

      _classCallCheck(this, PageComponent);

      this.route = route;
      this.modelManagerService = modelManagerService;
      this.modelManagerService.getData({
        path: this.route.snapshot.data.path
      }).then(function (data) {
        _this5.path = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH_PROP];
        _this5.items = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_PROP];
        _this5.itemsOrder = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_ORDER_PROP];
      });
    });

    PageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _model_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModelManagerService"]
      }];
    };

    PageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-main",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./page.component.scss */
      "./src/app/components/page/page.component.scss"))["default"]]
    })], PageComponent);
    /***/
  },

  /***/
  "./src/app/components/responsive-grid/responsive-grid.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/responsive-grid/responsive-grid.component.ts ***!
    \*************************************************************************/

  /*! no exports provided */

  /***/
  function srcAppComponentsResponsiveGridResponsiveGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");

    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])("wcm/foundation/components/responsivegrid")(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["AEMResponsiveGridComponent"]);
    /***/
  },

  /***/
  "./src/app/components/search/search.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/search/search.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search__div {\n  width: 100%;\n}\n.search__div .mat-icon {\n  position: absolute;\n  padding: 10px;\n  width: 40px;\n}\n.search__input {\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 50px;\n}\n::-moz-placeholder {\n  color: white;\n  text-align: center;\n}\n:-ms-input-placeholder {\n  color: white;\n  text-align: center;\n}\n::placeholder {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NSO0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREZBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoX19kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaF9faW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLnNlYXJjaF9fZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VhcmNoX19kaXYgLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnNlYXJjaF9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.valueChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.placeholder = 'Buscar usuário';
          this.valueChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (model) {
            _this6.value = model;
          });
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          this.valueChanged.next(value);
        }
      }]);

      return SearchComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SearchComponent.prototype, "placeholder", void 0);
    SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/components/search/search.component.scss"))["default"]]
    })], SearchComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/search-component')(SearchComponent);
    /***/
  },

  /***/
  "./src/app/components/weather/weather.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/weather/weather.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWeatherWeatherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".weather-container {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  padding-right: 20%;\n  text-align: right;\n  color: #222222;\n}\n.weather-container .weather-inner-container {\n  display: flex;\n  justify-content: flex-end;\n}\n.weather-container .weather-inner-container img.weather-icon {\n  background: transparent;\n  width: 65px;\n}\n.weather-container .weather-inner-container div.weather-temp {\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 61px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL0M6XFxVc2Vyc1xcdmFsYmVyLnZhc2NvbmNlbG9zXFxEb2N1bWVudHNcXEFFTVxcUHJvamV0b3NcXGFlbS1hbmd1bGFyLWxvZ2luLWNoYWxsZW5nZVxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlYXRoZXJcXHdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQ0NSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUNDWjtBREVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXRoZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG5cclxuICAgIC53ZWF0aGVyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICBpbWcud2VhdGhlci1pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LndlYXRoZXItdGVtcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi53ZWF0aGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcGFkZGluZy1yaWdodDogMjAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4ud2VhdGhlci1jb250YWluZXIgLndlYXRoZXItaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi53ZWF0aGVyLWNvbnRhaW5lciAud2VhdGhlci1pbm5lci1jb250YWluZXIgaW1nLndlYXRoZXItaWNvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNjVweDtcbn1cbi53ZWF0aGVyLWNvbnRhaW5lciAud2VhdGhlci1pbm5lci1jb250YWluZXIgZGl2LndlYXRoZXItdGVtcCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/weather/weather.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/weather/weather.component.ts ***!
    \*********************************************************/

  /*! exports provided: WeatherComponent */

  /***/
  function srcAppComponentsWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
      return WeatherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @adobe/aem-angular-editable-components */
    "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./weather.service */
    "./src/app/components/weather/weather.service.ts");

    var WeatherComponent = /*#__PURE__*/function () {
      function WeatherComponent(weatherService) {
        _classCallCheck(this, WeatherComponent);

        this.weatherService = weatherService;
        this.weather = {};
      }

      _createClass(WeatherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.weatherService.getWeather().subscribe(function (weather) {
            _this7.weather = weather;
          });
        }
      }]);

      return WeatherComponent;
    }();

    WeatherComponent.ctorParameters = function () {
      return [{
        type: _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]
      }];
    };

    WeatherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-weather',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./weather.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather/weather.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./weather.component.scss */
      "./src/app/components/weather/weather.component.scss"))["default"]]
    })], WeatherComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/weather-component')(WeatherComponent);
    /***/
  },

  /***/
  "./src/app/components/weather/weather.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/weather/weather.service.ts ***!
    \*******************************************************/

  /*! exports provided: WeatherService */

  /***/
  function srcAppComponentsWeatherWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var URL_OPEN_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';
    var URL_OPEN_WEATHER_ICON = 'http://openweathermap.org/img/w';

    var WeatherService = /*#__PURE__*/function () {
      function WeatherService(http) {
        _classCallCheck(this, WeatherService);

        this.http = http;
      }

      _createClass(WeatherService, [{
        key: "getWeather",
        value: function getWeather() {
          var _this8 = this;

          var location = {
            lat: -30.0331,
            lon: -51.23,
            appid: 'e35fda9eb8f4d08d4e8919a4ab0a2140',
            lang: 'pt',
            units: 'metric'
          };
          return this.http.get(URL_OPEN_WEATHER, {
            params: {
              lat: location.lat.toString(),
              lon: location.lon.toString(),
              appid: location.appid,
              lang: location.lang,
              units: location.units
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var weather = {
              location: "".concat(res.name, " - RS"),
              temperature: "".concat(res.main.temp.toFixed(0), "\xB0"),
              imageSrc: _this8.getWeatherIcon("".concat(res.weather[0].icon, ".png"))
            };
            return weather;
          }));
        }
      }, {
        key: "getWeatherIcon",
        value: function getWeatherIcon(icon) {
          return "".concat(URL_OPEN_WEATHER_ICON, "/").concat(icon);
        }
      }]);

      return WeatherService;
    }();

    WeatherService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    WeatherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], WeatherService);
    /***/
  },

  /***/
  "./src/app/label.service.ts":
  /*!**********************************!*\
    !*** ./src/app/label.service.ts ***!
    \**********************************/

  /*! exports provided: LabelService */

  /***/
  function srcAppLabelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelService", function () {
      return LabelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LabelService = /*#__PURE__*/function () {
      function LabelService() {
        _classCallCheck(this, LabelService);

        this.invalidLogin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(LabelService, [{
        key: "setInvalidLogin",
        value: function setInvalidLogin(isInvalid) {
          this.invalidLogin.next(isInvalid);
        }
      }, {
        key: "getInvalidLogin",
        value: function getInvalidLogin() {
          return this.invalidLogin.asObservable();
        }
      }]);

      return LabelService;
    }();

    LabelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LabelService);
    /***/
  },

  /***/
  "./src/app/local-storage.service.ts":
  /*!******************************************!*\
    !*** ./src/app/local-storage.service.ts ***!
    \******************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "add",
        value: function add(key, value) {
          localStorage.setItem(key, value);
        }
      }, {
        key: "remove",
        value: function remove(key) {
          localStorage.removeItem(key);
        }
      }, {
        key: "get",
        value: function get(key) {
          return localStorage.getItem(key);
        }
      }, {
        key: "clear",
        value: function clear() {
          localStorage.clear();
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalStorageService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     ~ Copyright 2018 Adobe Systems Incorporated
     ~
     ~ Licensed under the Apache License, Version 2.0 (the "License");
     ~ you may not use this file except in compliance with the License.
     ~ You may obtain a copy of the License at
     ~
     ~     http://www.apache.org/licenses/LICENSE-2.0
     ~
     ~ Unless required by applicable law or agreed to in writing, software
     ~ distributed under the License is distributed on an "AS IS" BASIS,
     ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     ~ See the License for the specific language governing permissions and
     ~ limitations under the License.
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    var environment = {
      appRoot: '/content/angularapp/us/en/login.html',
      production: false,
      publicUrl: '/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    } else {
      // In development mode, redirect from "/" to app root
      if (location.pathname === "/" && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appRoot) {
        location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appRoot;
      }
    }

    var initialStateScriptTag = document.getElementById("__AEM_STATE__");

    if (!!initialStateScriptTag) {
      try {
        var initialState = JSON.parse(initialStateScriptTag.innerHTML); // @ts-ignore

        window.initialModel = initialState.rootModel;
        initialStateScriptTag.remove();
      } catch (err) {
        console.warn("failed to hydrate app", err);
      }
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\valber.vasconcelos\Documents\AEM\Projetos\aem-angular-login-challenge\ui.frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map