"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_users_Users_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/users/Users.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/users/Users.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersData */ "./resources/admin/views/users/UsersData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Users',
  data: function data() {
    return {
      items: _UsersData__WEBPACK_IMPORTED_MODULE_0__.default,
      fields: [{
        key: 'username',
        label: 'Name',
        _classes: 'font-weight-bold'
      }, {
        key: 'registered'
      }, {
        key: 'role'
      }, {
        key: 'status'
      }],
      activePage: 1
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      }
    }
  },
  methods: {
    getBadge: function getBadge(status) {
      switch (status) {
        case 'Active':
          return 'success';

        case 'Inactive':
          return 'secondary';

        case 'Pending':
          return 'warning';

        case 'Banned':
          return 'danger';

        default:
          'primary';
      }
    },
    rowClicked: function rowClicked(item, index) {
      this.$router.push({
        path: "users/".concat(index + 1)
      });
    },
    pageChange: function pageChange(val) {
      this.$router.push({
        query: {
          page: val
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/admin/views/users/UsersData.js":
/*!**************************************************!*\
  !*** ./resources/admin/views/users/UsersData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var usersData = [{
  username: 'Samppa Nori',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Estavan Lykos',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Chetan Mohamed',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Derick Maximinus',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Friderik Dávid',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Yiorgos Avraamu',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Avram Tarasios',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned',
  _classes: 'table-success'
}, {
  username: 'Quintin Ed',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Enéas Kwadwo',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Agapetus Tadeáš',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Carwyn Fachtna',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active',
  _classes: 'table-success'
}, {
  username: 'Nehemiah Tatius',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Ebbe Gemariah',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Eustorgios Amulius',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Leopold Gáspár',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Pompeius René',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Paĉjo Jadon',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Micheal Mercurius',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  username: 'Ganesha Dubhghall',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Hiroto Šimun',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Vishnu Serghei',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Zbyněk Phoibos',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  username: 'Einar Randall',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive',
  _classes: 'table-danger'
}, {
  username: 'Félix Troels',
  registered: '2012/03/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Aulus Agmundr',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Pending'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersData);

/***/ }),

/***/ "./resources/admin/views/users/Users.vue":
/*!***********************************************!*\
  !*** ./resources/admin/views/users/Users.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_abc5f490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=abc5f490& */ "./resources/admin/views/users/Users.vue?vue&type=template&id=abc5f490&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/admin/views/users/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Users_vue_vue_type_template_id_abc5f490___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_abc5f490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/users/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/users/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/admin/views/users/Users.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/users/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/users/Users.vue?vue&type=template&id=abc5f490&":
/*!******************************************************************************!*\
  !*** ./resources/admin/views/users/Users.vue?vue&type=template&id=abc5f490& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_abc5f490___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_abc5f490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_abc5f490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=abc5f490& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/users/Users.vue?vue&type=template&id=abc5f490&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/users/Users.vue?vue&type=template&id=abc5f490&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/users/Users.vue?vue&type=template&id=abc5f490& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", xl: "8" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [_vm._v("\n        Users\n      ")]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CDataTable", {
                    attrs: {
                      hover: "",
                      striped: "",
                      items: _vm.items,
                      fields: _vm.fields,
                      "items-per-page": 5,
                      "clickable-rows": "",
                      "active-page": _vm.activePage,
                      pagination: { doubleArrows: false, align: "center" }
                    },
                    on: {
                      "row-clicked": _vm.rowClicked,
                      "page-change": _vm.pageChange
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "status",
                        fn: function(data) {
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "CBadge",
                                  {
                                    attrs: {
                                      color: _vm.getBadge(data.item.status)
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(data.item.status) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);