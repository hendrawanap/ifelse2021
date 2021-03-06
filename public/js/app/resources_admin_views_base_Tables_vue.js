"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_base_Tables_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Table.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Table.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      "default": function _default() {
        return ['username', 'registered', 'role', 'status'];
      }
    },
    caption: {
      type: String,
      "default": 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge: function getBadge(status) {
      return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Tables.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Tables.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue */ "./resources/admin/views/base/Table.vue");
/* harmony import */ var _users_UsersData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/UsersData */ "./resources/admin/views/users/UsersData.js");
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
  name: 'Tables',
  components: {
    CTableWrapper: _Table_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    shuffleArray: function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    },
    getShuffledUsersData: function getShuffledUsersData() {
      return this.shuffleArray(_users_UsersData__WEBPACK_IMPORTED_MODULE_1__.default.slice(0));
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
  username: 'Friderik D??vid',
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
  username: 'En??as Kwadwo',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  username: 'Agapetus Tade????',
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
  username: 'Leopold G??sp??r',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Pompeius Ren??',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Pa??jo Jadon',
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
  username: 'Hiroto ??imun',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  username: 'Vishnu Serghei',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  username: 'Zbyn??k Phoibos',
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
  username: 'F??lix Troels',
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

/***/ "./resources/admin/views/base/Table.vue":
/*!**********************************************!*\
  !*** ./resources/admin/views/base/Table.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_b6f8b5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=b6f8b5ae& */ "./resources/admin/views/base/Table.vue?vue&type=template&id=b6f8b5ae&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/admin/views/base/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Table_vue_vue_type_template_id_b6f8b5ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_b6f8b5ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/base/Table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/base/Tables.vue":
/*!***********************************************!*\
  !*** ./resources/admin/views/base/Tables.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tables_vue_vue_type_template_id_20c6bdcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables.vue?vue&type=template&id=20c6bdcc& */ "./resources/admin/views/base/Tables.vue?vue&type=template&id=20c6bdcc&");
/* harmony import */ var _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables.vue?vue&type=script&lang=js& */ "./resources/admin/views/base/Tables.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Tables_vue_vue_type_template_id_20c6bdcc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tables_vue_vue_type_template_id_20c6bdcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/base/Tables.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/base/Table.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/admin/views/base/Table.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/base/Tables.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/admin/views/base/Tables.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Tables.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/base/Table.vue?vue&type=template&id=b6f8b5ae&":
/*!*****************************************************************************!*\
  !*** ./resources/admin/views/base/Table.vue?vue&type=template&id=b6f8b5ae& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b6f8b5ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b6f8b5ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b6f8b5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=b6f8b5ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Table.vue?vue&type=template&id=b6f8b5ae&");


/***/ }),

/***/ "./resources/admin/views/base/Tables.vue?vue&type=template&id=20c6bdcc&":
/*!******************************************************************************!*\
  !*** ./resources/admin/views/base/Tables.vue?vue&type=template&id=20c6bdcc& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_20c6bdcc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_20c6bdcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_20c6bdcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tables.vue?vue&type=template&id=20c6bdcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Tables.vue?vue&type=template&id=20c6bdcc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Table.vue?vue&type=template&id=b6f8b5ae&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Table.vue?vue&type=template&id=b6f8b5ae& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "CCard",
    [
      _c(
        "CCardHeader",
        [
          _vm._t("header", function() {
            return [
              _c("CIcon", { attrs: { name: "cil-grid" } }),
              _vm._v(" " + _vm._s(_vm.caption) + "\n    ")
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c("CDataTable", {
            attrs: {
              hover: _vm.hover,
              striped: _vm.striped,
              border: _vm.border,
              small: _vm.small,
              fixed: _vm.fixed,
              items: _vm.items,
              fields: _vm.fields,
              "items-per-page": _vm.small ? 10 : 5,
              dark: _vm.dark,
              pagination: ""
            },
            scopedSlots: _vm._u([
              {
                key: "status",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "td",
                      [
                        _c(
                          "CBadge",
                          { attrs: { color: _vm.getBadge(item.status) } },
                          [_vm._v(_vm._s(item.status))]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Tables.vue?vue&type=template&id=20c6bdcc&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/base/Tables.vue?vue&type=template&id=20c6bdcc& ***!
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
    "div",
    [
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { lg: "6" } },
            [
              _c("CTableWrapper", {
                attrs: { items: _vm.getShuffledUsersData() },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function() {
                      return [
                        _c("CIcon", { attrs: { name: "cil-grid" } }),
                        _vm._v(" Simple Table\n                    "),
                        _c("div", { staticClass: "card-header-actions" }, [
                          _c(
                            "a",
                            {
                              staticClass: "card-header-action",
                              attrs: {
                                href:
                                  "https://coreui.io/vue/docs/components/nav",
                                rel: "noreferrer noopener",
                                target: "_blank"
                              }
                            },
                            [
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v("docs")
                              ])
                            ]
                          )
                        ])
                      ]
                    },
                    proxy: true
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { lg: "6" } },
            [
              _c("CTableWrapper", {
                attrs: {
                  items: _vm.getShuffledUsersData(),
                  striped: "",
                  caption: "Striped Table"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { lg: "6" } },
            [
              _c("CTableWrapper", {
                attrs: {
                  items: _vm.getShuffledUsersData(),
                  small: "",
                  caption: "Condensed Table"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { lg: "6" } },
            [
              _c("CTableWrapper", {
                attrs: {
                  items: _vm.getShuffledUsersData(),
                  fixed: "",
                  border: "",
                  caption: "Bordered Table"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "12" } },
            [
              _c("CTableWrapper", {
                attrs: {
                  items: _vm.getShuffledUsersData(),
                  hover: "",
                  striped: "",
                  border: "",
                  small: "",
                  fixed: "",
                  caption: "Combined All Table"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "12" } },
            [
              _c("CTableWrapper", {
                attrs: {
                  items: _vm.getShuffledUsersData(),
                  hover: "",
                  striped: "",
                  border: "",
                  small: "",
                  fixed: "",
                  dark: "",
                  caption: "Combined All dark Table"
                }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);