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


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n<!-- <app-container-right></app-container-right> -->\r\n<!-- <app-input></app-input> -->\r\n<!-- <app-button></app-button> -->\r\n<!-- <app-login-form></app-login-form> -->\r\n<!-- <app-current-time></app-current-time> -->\r\n<!-- <app-weather></app-weather> -->\r\n";
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


    __webpack_exports__["default"] = "<button class=\"button\" type=\"button\" (click)=\"login()\">\n    {{ label }}\n</button>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <img\n        class=\"logo\"\n        src=\"/content/dam/angularapp/e959f2f20202d40e5f950e778d565743.png\"\n        alt=\"logo-compasso\"\n    />\n</div>\n";
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


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\n    <div class=\"time\">{{ time }}</div>\n    <div class=\"date\">{{ date }}</div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"end end\" [ngClass]=\"className\">\n    {{ label }}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginFormLoginFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login\">Login</div>\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <input\n        type=\"text\"\n        class=\"input\"\n        name=\"username\"\n        placeholder=\"usuário\"\n        formControlName=\"username\"\n        required\n    />\n\n    <input\n        type=\"password\"\n        class=\"input\"\n        name=\"password\"\n        placeholder=\"senha\"\n        formControlName=\"password\"\n        required\n    />\n\n    <input type=\"submit\" class=\"button\" value=\"Continuar\" />\n</form>\n";
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


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"city\">{{ weather.location }}</div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img class=\"icon\" [src]=\"weather.imageSrc\" alt=\"weather-icon\" />\n        <div class=\"temp\">{{ weather.temperature }}</div>\n    </div>\n</div>\n";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_button_button_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/button/button.component */
    "./src/app/components/button/button.component.ts");
    /* harmony import */


    var _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/container-right/container-right.component */
    "./src/app/components/container-right/container-right.component.ts");
    /* harmony import */


    var _components_import_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/import-components */
    "./src/app/components/import-components.ts");
    /* harmony import */


    var _components_input_input_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/input/input.component */
    "./src/app/components/input/input.component.ts");
    /* harmony import */


    var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/login-form/login-form.component */
    "./src/app/components/login-form/login-form.component.ts");
    /* harmony import */


    var _components_model_manager_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/model-manager.service */
    "./src/app/components/model-manager.service.ts");
    /* harmony import */


    var _components_page_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/page/page.component */
    "./src/app/components/page/page.component.ts");
    /* harmony import */


    var _components_label_label_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/label/label.component */
    "./src/app/components/label/label.component.ts");
    /* harmony import */


    var _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/current-time/current-time.component */
    "./src/app/components/current-time/current-time.component.ts");
    /* harmony import */


    var _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/weather/weather.component */
    "./src/app/components/weather/weather.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["SpaAngularEditableComponentsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"], // AEM Modules
      _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["AemAngularCoreWcmComponentsTabsV1"], _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_7__["AemAngularCoreWcmComponentsTitleV2"], _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_8__["AemAngularCoreWcmComponentsBreadCrumbV2"], _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_10__["AemAngularCoreWcmComponentsNavigationV1"], _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_2__["AemAngularCoreWcmComponentsButtonV1"], _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_4__["AemAngularCoreWcmComponentsImageV2"], _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_3__["AemAngularCoreWcmComponentsDownloadV1"], _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_5__["AemAngularCoreWcmComponentsListV2"], _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__["AemAngularCoreWcmComponentsAccordionV1"], _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_6__["AemAngularCoreWcmComponentsSeparatorV1"], _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_9__["AemAngularCoreWcmComponentsLanguageNavigationV1"], // Angular Flex
      _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], // Material Modules
      _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]],
      providers: [_components_model_manager_service__WEBPACK_IMPORTED_MODULE_31__["ModelManagerService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"],
        useValue: '/'
      }],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_32__["PageComponent"], _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_27__["ContainerRightComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_29__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_26__["ButtonComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_30__["LoginFormComponent"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_33__["LabelComponent"], _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_34__["CurrentTimeComponent"], _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_35__["WeatherComponent"]],
      entryComponents: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_32__["PageComponent"], _components_container_right_container_right_component__WEBPACK_IMPORTED_MODULE_27__["ContainerRightComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_29__["InputComponent"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_33__["LabelComponent"], _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_34__["CurrentTimeComponent"], _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_35__["WeatherComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
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


    var src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/local-storage.service */
    "./src/app/local-storage.service.ts");

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent(localStorageService, router) {
        _classCallCheck(this, ButtonComponent);

        this.localStorageService = localStorageService;
        this.router = router;
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var user = {
            username: this.localStorageService.get('username'),
            password: this.localStorageService.get('password')
          };

          if (user.username === 'aaa' && user.password === '123') {
            this.router.navigate(['content/angularapp/us/en/home.html']);
          }
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ctorParameters = function () {
      return [{
        type: src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ButtonComponent.prototype, "label", void 0);
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


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 744px;\n  background: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/notebook.jpg') center;\n  background-size: cover;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  margin-top: 3%;\n}\n\n@media screen and (max-width: 600px) {\n  div.container {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXItcmlnaHQvQzpcXFVzZXJzXFx2YWxiZXIudmFzY29uY2Vsb3NcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXItbG9naW4tY2hhbGxlbmdlXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFpbmVyLXJpZ2h0XFxjb250YWluZXItcmlnaHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyLXJpZ2h0L2NvbnRhaW5lci1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtFQUNBLHdHQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci1yaWdodC9jb250YWluZXItcmlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDsgLy8gZGV2ZSBzZXIgbyBmaW5hbFxyXG4gICAgaGVpZ2h0OiA3NDRweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL25vdGVib29rLmpwZycpIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBkaXYuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogNzQ0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ub3RlYm9vay5qcGdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgZGl2LmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".input {\n  background: transparent;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 50px;\n  padding: 20px 0;\n  width: 50%;\n  color: white;\n  text-indent: 2em;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXHZhbGJlci52YXNjb25jZWxvc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhci1sb2dpbi1jaGFsbGVuZ2VcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbnB1dFxcaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FEQ0E7RUFDSSxZQUFBO0FDRko7O0FEQ0E7RUFDSSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWluZGVudDogMmVtO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCIuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtaW5kZW50OiAyZW07XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
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


    __webpack_exports__["default"] = "/* Login Page */\n.login-main-text {\n  display: flex !important;\n  justify-content: center !important;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 60px;\n  line-height: 76px;\n  color: #e0e0e0;\n}\n.login-sub-text {\n  display: flex !important;\n  justify-content: center !important;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  color: #e0e0e0;\n}\n.login-text {\n  display: flex !important;\n  justify-content: center !important;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 38px;\n  color: #e0e0e0;\n}\n/* Home Page */\n.home-mission-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 2.95em;\n  color: #c12d18;\n}\n.home-missao-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  color: #222222;\n}\n.home-to-transform-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 2.97em;\n  color: #c12d18;\n}\n.home-transformar-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  color: #222222;\n}\n.home-building-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 2.98em;\n  color: #c12d18;\n}\n.home-construindo-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  color: #222222;\n}\n.home-that-enable-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 3em;\n  color: #c12d18;\n}\n.home-que-permitam-text {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-size: 1em;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYWJlbC9DOlxcVXNlcnNcXHZhbGJlci52YXNjb25jZWxvc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhci1sb2dpbi1jaGFsbGVuZ2VcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYWJlbFxcbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBQTtBQUVBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRko7QURLQTtFQUNJLHdCQUFBO0VBQ0Esa0NBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEo7QURNQSxjQUFBO0FBRUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKSjtBRE9BO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExvZ2luIFBhZ2UgKi9cclxuXHJcbi5sb2dpbi1tYWluLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzZweDtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4ubG9naW4tc3ViLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLmxvZ2luLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4vKiBIb21lIFBhZ2UgKi9cclxuXHJcbi5ob21lLW1pc3Npb24tdGV4dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIuOTVlbTtcclxuICAgIGNvbG9yOiAjYzEyZDE4O1xyXG59XHJcblxyXG4uaG9tZS1taXNzYW8tdGV4dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcblxyXG4uaG9tZS10by10cmFuc2Zvcm0tdGV4dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIuOTdlbTtcclxuICAgIGNvbG9yOiAjYzEyZDE4O1xyXG59XHJcblxyXG4uaG9tZS10cmFuc2Zvcm1hci10ZXh0IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuXHJcbi5ob21lLWJ1aWxkaW5nLXRleHQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyLjk4ZW07XHJcbiAgICBjb2xvcjogI2MxMmQxODtcclxufVxyXG5cclxuLmhvbWUtY29uc3RydWluZG8tdGV4dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcblxyXG4uaG9tZS10aGF0LWVuYWJsZS10ZXh0IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY29sb3I6ICNjMTJkMTg7XHJcbn1cclxuXHJcbi5ob21lLXF1ZS1wZXJtaXRhbS10ZXh0IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG5cclxuLy8gLmhvbWUtZm9vdGVyLXRleHQge1xyXG4vLyAgICAgLy8gZGlzcGxheTogZmxleDtcclxuLy8gICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuLy8gICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyB9XHJcbiIsIi8qIExvZ2luIFBhZ2UgKi9cbi5sb2dpbi1tYWluLXRleHQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNzZweDtcbiAgY29sb3I6ICNlMGUwZTA7XG59XG5cbi5sb2dpbi1zdWItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZTBlMGUwO1xufVxuXG4ubG9naW4tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLyogSG9tZSBQYWdlICovXG4uaG9tZS1taXNzaW9uLXRleHQge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyLjk1ZW07XG4gIGNvbG9yOiAjYzEyZDE4O1xufVxuXG4uaG9tZS1taXNzYW8tdGV4dCB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5ob21lLXRvLXRyYW5zZm9ybS10ZXh0IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMi45N2VtO1xuICBjb2xvcjogI2MxMmQxODtcbn1cblxuLmhvbWUtdHJhbnNmb3JtYXItdGV4dCB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5ob21lLWJ1aWxkaW5nLXRleHQge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyLjk4ZW07XG4gIGNvbG9yOiAjYzEyZDE4O1xufVxuXG4uaG9tZS1jb25zdHJ1aW5kby10ZXh0IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmhvbWUtdGhhdC1lbmFibGUtdGV4dCB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6ICNjMTJkMTg7XG59XG5cbi5ob21lLXF1ZS1wZXJtaXRhbS10ZXh0IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzIyMjIyMjtcbn0iXX0= */";
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

    var LabelComponent = /*#__PURE__*/function () {
      function LabelComponent() {
        _classCallCheck(this, LabelComponent);
      }

      _createClass(LabelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LabelComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LabelComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LabelComponent.prototype, "className", void 0);
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
  "./src/app/components/login-form/login-form.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/login-form/login-form.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginFormLoginFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 38px;\n  color: #e0e0e0;\n  display: flex;\n  padding-left: 13rem;\n}\n\nform {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 2rem;\n  margin-top: 1rem;\n}\n\n.input {\n  background: transparent;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 50px;\n  padding: 20px 0;\n  width: 50%;\n}\n\n::-moz-placeholder {\n  color: white;\n  padding-left: 1rem;\n}\n\n:-ms-input-placeholder {\n  color: white;\n  padding-left: 1rem;\n}\n\n::placeholder {\n  color: white;\n  padding-left: 1rem;\n}\n\n.button {\n  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);\n  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 50px;\n  padding: 20px 0;\n  margin-top: 5rem;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcdmFsYmVyLnZhc2NvbmNlbG9zXFxEb2N1bWVudHNcXEFFTVxcUHJvamV0b3NcXGFlbS1hbmd1bGFyLWxvZ2luLWNoYWxsZW5nZVxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luLWZvcm1cXGxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRko7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcblxyXG4gICAgY29sb3I6ICNlMGUwZTA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMTNyZW07XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblxyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmYyZDA0IDAlLCAjYzEzMjE2IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiIsIi5sb2dpbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTNyZW07XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICB3aWR0aDogNTAlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjJkMDQgMCUsICNjMTMyMTYgMTAwJSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHdpZHRoOiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/login-form/login-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/login-form/login-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppComponentsLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(formBuilder, router) {
        _classCallCheck(this, LoginFormComponent);

        this.formBuilder = formBuilder;
        this.router = router;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this$loginForm$value = this.loginForm.value,
              username = _this$loginForm$value.username,
              password = _this$loginForm$value.password;

          if (username === 'aaa' && password === '123') {
            this.router.navigate(['content/angularapp/us/en/home.html']);
          }
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-form.component.scss */
      "./src/app/components/login-form/login-form.component.scss"))["default"]]
    })], LoginFormComponent);
    Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/login-form-component')(LoginFormComponent);
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
      var _this3 = this;

      _classCallCheck(this, PageComponent);

      this.route = route;
      this.modelManagerService = modelManagerService;
      this.modelManagerService.getData({
        path: this.route.snapshot.data.path
      }).then(function (data) {
        _this3.path = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH_PROP];
        _this3.items = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_PROP];
        _this3.itemsOrder = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_ORDER_PROP];
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


    __webpack_exports__["default"] = ".city {\n  margin: 10px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  text-align: center;\n  color: #222222;\n}\n\n.icon {\n  background: transparent;\n}\n\n.temp {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 61px;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL0M6XFxVc2Vyc1xcdmFsYmVyLnZhc2NvbmNlbG9zXFxEb2N1bWVudHNcXEFFTVxcUHJvamV0b3NcXGFlbS1hbmd1bGFyLWxvZ2luLWNoYWxsZW5nZVxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlYXRoZXJcXHdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXR5IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGVtcCB7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjFweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbiIsIi5jaXR5IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi50ZW1wIHtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn0iXX0= */";
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
          var _this4 = this;

          this.weatherService.getWeather().subscribe(function (weather) {
            _this4.weather = weather;
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
          var _this5 = this;

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
              imageSrc: _this5.getWeatherIcon("".concat(res.weather[0].icon, ".png"))
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