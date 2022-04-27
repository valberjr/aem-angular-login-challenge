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


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n<!-- <app-container-right></app-container-right> -->\r\n<!-- <app-label></app-label> -->\r\n<!-- <app-input></app-input> -->\r\n<!-- <app-button></app-button> -->\r\n<!-- <app-login-form></app-login-form> -->\r\n<!-- <app-current-time></app-current-time> -->\r\n<!-- <app-weather></app-weather> -->\r\n";
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


    __webpack_exports__["default"] = "<button class=\"button\" type=\"button\" (click)=\"onClick()\">\n    {{ label }}\n</button>\n";
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


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n    <div class=\"time\">{{ time }}</div>\n    <div class=\"date\">{{ date }}</div>\n</div>\n";
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


    __webpack_exports__["default"] = "<input\n    class=\"input\"\n    [type]=\"type\"\n    [name]=\"name\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"value\"\n    (ngModelChange)=\"onChange($event)\"\n    required\n/>\n";
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


    __webpack_exports__["default"] = "<div *ngIf=\"isInvalidLogin\">{{ label }}</div>\n";
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


    __webpack_exports__["default"] = "<input\n    class=\"search\"\n    type=\"text\"\n    name=\"search\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"value\"\n    (ngModelChange)=\"onChange($event)\"\n/>\n";
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


    __webpack_exports__["default"] = "<div fxLayout=\"column\">\n    <div fxLayoutAlign=\"end\" class=\"city\">{{ weather.location }}</div>\n    <div fxLayoutAlign=\"end\">\n        <img class=\"icon\" [src]=\"weather.imageSrc\" alt=\"weather-icon\" />\n        <div class=\"temp\">{{ weather.temperature }}</div>\n    </div>\n</div>\n";
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
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_33__["PageComponent"], _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_28__["ContainerRightComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_27__["ButtonComponent"], _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_29__["CurrentTimeComponent"], _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_34__["WeatherComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_35__["SearchComponent"], _components_link_link_component__WEBPACK_IMPORTED_MODULE_36__["LinkComponent"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_37__["LabelComponent"]],
      entryComponents: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_33__["PageComponent"], _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_28__["ContainerRightComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_27__["ButtonComponent"], _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_29__["CurrentTimeComponent"], _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_34__["WeatherComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_35__["SearchComponent"], _components_link_link_component__WEBPACK_IMPORTED_MODULE_36__["LinkComponent"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_37__["LabelComponent"]],
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


    __webpack_exports__["default"] = ".button {\n  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);\n  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 50px;\n  padding: 20px 0;\n  margin-top: 5rem;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmYyZDA0IDAlLCAjYzEzMjE2IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuIiwiLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmMmQwNCAwJSwgI2MxMzIxNiAxMDAlKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".time {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 7em;\n  line-height: 7rem;\n  color: #222222;\n}\n\n.date {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW50LXRpbWUvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3VycmVudC10aW1lXFxjdXJyZW50LXRpbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVudC10aW1lL2N1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbnQtdGltZS9jdXJyZW50LXRpbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDdlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA3cmVtO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbiIsIi50aW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDdlbTtcbiAgbGluZS1oZWlnaHQ6IDdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uZGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".input {\n  background: transparent;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 50px;\n  padding: 20px 0;\n  width: 50%;\n  color: white;\n  text-indent: 2em;\n  margin-bottom: 1rem;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXHZhbGJlci52YXNjb25jZWxvc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhci1sb2dpbi1jaGFsbGVuZ2VcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbnB1dFxcaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURDQTtFQUNJLFlBQUE7QUNGSjs7QURDQTtFQUNJLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCIuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
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
          var _this2 = this;

          this.name = this.type === 'text' ? 'username' : 'password';
          this.localStorageService.clear();
          this.valueChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (model) {
            _this2.value = model;

            _this2.localStorageService.add(_this2.name, _this2.value);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnNjc3MifQ== */";
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
        var _this3 = this;

        _classCallCheck(this, LabelComponent);

        this.labelService = labelService;
        this.isInvalidLogin = false;
        this.labelService.getInvalidLogin().subscribe(function (invalid) {
          _this3.isInvalidLogin = invalid;
        });
      }

      _createClass(LabelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
      var _this4 = this;

      _classCallCheck(this, PageComponent);

      this.route = route;
      this.modelManagerService = modelManagerService;
      this.modelManagerService.getData({
        path: this.route.snapshot.data.path
      }).then(function (data) {
        _this4.path = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH_PROP];
        _this4.items = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_PROP];
        _this4.itemsOrder = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_ORDER_PROP];
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


    __webpack_exports__["default"] = ".search {\n  width: 453px;\n  height: 45px;\n  background: #26292c;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 50px;\n  margin-top: 0.5em;\n  text-indent: 2em;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERkE7RUFDSSxZQUFBO0FDQ0o7O0FERkE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICAgIHdpZHRoOiA0NTNweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI5MmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi5zZWFyY2gge1xuICB3aWR0aDogNDUzcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogIzI2MjkyYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIHRleHQtaW5kZW50OiAyZW07XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
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
          var _this5 = this;

          this.valueChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (model) {
            _this5.value = model;
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


    __webpack_exports__["default"] = ".city {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  text-align: center;\n  color: #222222;\n}\n\n.icon {\n  background: transparent;\n  width: 10%;\n}\n\n.temp {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 61px;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL0M6XFxVc2Vyc1xcdmFsYmVyLnZhc2NvbmNlbG9zXFxEb2N1bWVudHNcXEFFTVxcUHJvamV0b3NcXGFlbS1hbmd1bGFyLWxvZ2luLWNoYWxsZW5nZVxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlYXRoZXJcXHdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l0eSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MXB4O1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuIiwiLmNpdHkge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnRlbXAge1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufSJdfQ== */";
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
          var _this6 = this;

          this.weatherService.getWeather().subscribe(function (weather) {
            _this6.weather = weather;
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
          var _this7 = this;

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
              imageSrc: _this7.getWeatherIcon("".concat(res.weather[0].icon, ".png"))
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
      appRoot: '/content/angularapp/us/en/login-2.html',
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