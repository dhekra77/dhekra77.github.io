(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular_crud_operations"] = self["webpackChunkangular_crud_operations"] || []).push([["main"], {
    /***/
    8255: function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/user.service */
      3071);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function AppComponent_tr_26_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var blogs_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](blogs_r5.type_adress);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](blogs_r5.type_voie);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](blogs_r5.rue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](blogs_r5.numero);
        }
      }

      function AppComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "type d adresse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "type_voie");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "rue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "numero");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, AppComponent_tr_26_tr_22_Template, 9, 4, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_tr_26_Template_button_click_24_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var user_r3 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r6.showEditUserForm(user_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_tr_26_Template_button_click_26_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var user_r3 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r8.removeUser(user_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r3.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r3.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r3.naissance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", user_r3.Blocs);
        }
      }

      function AppComponent_form_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Add New contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_form_28_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r9.newUser.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_form_28_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r11.newUser.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_form_28_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r12.newUser.naissance = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_form_28_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r13.saveUser(ctx_r13.newUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_form_28_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r14.cancelNewUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r1.newUser.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r1.newUser.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r1.newUser.naissance);
        }
      }

      function AppComponent_form_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Edit contact Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_form_29_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r15.editedUser.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_form_29_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r17.editedUser.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_form_29_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r18.editedUser.naissance = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_form_29_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r19.updateUser;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_form_29_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r20.cancelEdits;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r2.editedUser.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r2.editedUser.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r2.editedUser.naissance);
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(userService) {
          _classCallCheck(this, _AppComponent);

          this.userService = userService;
          this.newUser = {};
          this.editedUser = {};
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.users = this.getUsers();
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.userService.getUsersFromData();
          }
        }, {
          key: "showEditUserForm",
          value: function showEditUserForm(user) {
            if (!user) {
              this.userForm = false;
              return;
            }

            this.editUserForm = true;
            this.editedUser = user;
          }
        }, {
          key: "showAddUserForm",
          value: function showAddUserForm() {
            // resets form if edited user
            if (this.users.length) {
              this.newUser = {};
            }

            this.userForm = true;
            this.isNewUser = true;
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            if (this.isNewUser) {
              // add a new user
              this.userService.addUser(user);
            }

            this.userForm = false;
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            this.userService.updateUser(this.editedUser);
            this.editUserForm = false;
            this.editedUser = {};
          }
        }, {
          key: "removeUser",
          value: function removeUser(user) {
            this.userService.deleteUser(user);
          }
        }, {
          key: "cancelEdits",
          value: function cancelEdits() {
            this.editedUser = {};
            this.editUserForm = false;
          }
        }, {
          key: "cancelNewUser",
          value: function cancelNewUser() {
            this.newUser = {};
            this.userForm = false;
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 34,
        vars: 3,
        consts: [["href", "//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "navbar", "navbar-dark", "bg-dark"], [1, "col-md-12", "mt-4"], [1, "text-center", 2, "color", "aliceblue"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "click"], [1, "container"], [1, "row"], [1, "table", "table-bordered", "table-striped", "table-hover"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["id", "loginbox", 1, "mainbox", "col-md-6", "col-md-offset-3", "col-sm-8", "col-sm-offset-2", 2, "margin-top", "50px"], [4, "ngIf"], [1, "text-center", 2, "color", "rgb(124, 131, 138)"], ["border", "6px", 1, "table", "table-bordered", "table-striped", "table-hover", 2, "background-color", "beige"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "panel", "panel-info"], [1, "panel-heading"], [1, "panel-title"], [1, "panel-body", 2, "padding-top", "30px"], ["id", "login-alert", 1, "alert", "alert-danger", "col-sm-12", 2, "display", "none"], [1, "input-group", 2, "margin-bottom", "25px"], ["type", "text", "placeholder", "First Name", "name", "firstName", 1, "form-control", "mb-0", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "lastName", "name", "lastName", 1, "form-control", "mb-0", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "naissance", "name", "naissance", 1, "form-control", "mb-0", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "User List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_button_click_5_listener() {
              return ctx.showAddUserForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Add New contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Date de naissance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, AppComponent_tr_26_Template, 28, 5, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, AppComponent_form_28_Template, 17, 3, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, AppComponent_form_29_Template, 17, 3, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Test Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.editUserForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.??fac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
        });
      })();
      /***/

    },

    /***/
    3071: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _UserService = /*#__PURE__*/function () {
        function _UserService() {
          _classCallCheck(this, _UserService);

          this.blocs = [{
            id: 1,
            type_adress: 'CFM',
            type_voie: 'CFM',
            rue: 'Rue de Universit??',
            ville: 'paris',
            numero: '123456'
          }, {
            id: 2,
            type_adress: 'bonjour',
            type_voie: 'bonsoir',
            rue: 'rue de la paix',
            ville: 'paris',
            numero: '3899799'
          }];
          this.upersons = [{
            id: 1,
            firstName: 'Dhekra',
            lastName: 'Hasnaoui',
            naissance: '07/01/1997',
            Blocs: this.blocs
          }, {
            id: 2,
            firstName: 'Maman',
            lastName: 'Maman',
            naissance: '07/01/1997',
            Blocs: this.blocs
          }];
        }

        _createClass(_UserService, [{
          key: "getUsersFromData",
          value: function getUsersFromData() {
            return this.upersons;
          }
        }, {
          key: "addUser",
          value: function addUser(user) {
            user.id = this.upersons.length + 1;
            this.upersons.push(user);
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            var index = this.upersons.findIndex(function (u) {
              return user.id === u.id;
            });
            this.upersons[index] = user;
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(user) {
            this.upersons.splice(this.upersons.indexOf(user), 1);
          }
        }]);

        return _UserService;
      }();

      _UserService.??fac = function UserService_Factory(t) {
        return new (t || _UserService)();
      };

      _UserService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: _UserService,
        factory: _UserService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map