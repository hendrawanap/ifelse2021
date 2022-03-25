"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_GroupEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/GroupEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/GroupEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "GroupDetails",
  data: function data() {
    return {
      name: '',
      id: '',
      line_group: '',
      dataset: {},
      error: ''
    };
  },
  methods: {
    resetFields: function resetFields() {
      this.name = this.dataset.name;
      this.id = this.dataset.id;
      this.line_group = this.dataset.line_group;
    },
    update: function update() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.error = '';

                if (!(!_this.name || !_this.line_group)) {
                  _context.next = 4;
                  break;
                }

                _this.error = 'Field Harus Terisi';
                return _context.abrupt("return");

              case 4:
                _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.setHeader('Content-Type', 'application/x-www-form-encoded');
                _context.next = 7;
                return _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.post(_api__WEBPACK_IMPORTED_MODULE_1__.default.groupEdit + _this.$route.params.id, {
                  name: _this.name,
                  line_group: _this.line_group
                });

              case 7:
                res = _context.sent;
                console.log(res);

                if (!res.data.error) {
                  _context.next = 13;
                  break;
                }

                if (res.data.error === 'validation') {
                  _this.error = 'Validation Error';
                } else {
                  _this.error = 'ID Not Found';
                }

                _context.next = 15;
                break;

              case 13:
                _context.next = 15;
                return _this.$router.push('/kemahasiswaan/kelompok/');

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.get(_api__WEBPACK_IMPORTED_MODULE_1__.default.group + _this2.$route.params.id);

            case 2:
              res = _context2.sent;

              if (res.data) {
                _this2.dataset = res.data;
                _this2.name = _this2.dataset.name;
                _this2.id = _this2.dataset.id;
                _this2.line_group = _this2.dataset.line_group;
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/GroupEdit.vue":
/*!***************************************************!*\
  !*** ./resources/admin/views/pages/GroupEdit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupEdit_vue_vue_type_template_id_6225dd15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true& */ "./resources/admin/views/pages/GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true&");
/* harmony import */ var _GroupEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupEdit.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/GroupEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GroupEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GroupEdit_vue_vue_type_template_id_6225dd15_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupEdit_vue_vue_type_template_id_6225dd15_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6225dd15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/GroupEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/GroupEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/admin/views/pages/GroupEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/GroupEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/views/pages/GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupEdit_vue_vue_type_template_id_6225dd15_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupEdit_vue_vue_type_template_id_6225dd15_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupEdit_vue_vue_type_template_id_6225dd15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/GroupEdit.vue?vue&type=template&id=6225dd15&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            [
              _c(
                "CCard",
                { attrs: { "border-color": _vm.error ? "danger" : "" } },
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Edit Data")]),
                    _vm._v(" untuk Kelompok ID 1"),
                    _c("p", { staticClass: "float-right text-danger" }, [
                      _vm._v(_vm._s(_vm.error))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              description: "Pastikan nama kelompok tidak typo",
                              label: "Nama Kelompok",
                              horizontal: ""
                            },
                            model: {
                              value: _vm.name,
                              callback: function($$v) {
                                _vm.name = $$v
                              },
                              expression: "name"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              description: "Pastikan Link berupa URL",
                              label: "Link Group LINE",
                              horizontal: ""
                            },
                            model: {
                              value: _vm.line_group,
                              callback: function($$v) {
                                _vm.line_group = $$v
                              },
                              expression: "line_group"
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
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.update()
                            }
                          }
                        },
                        [_vm._v("Kumpulkan")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { color: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.resetFields()
                            }
                          }
                        },
                        [_vm._v("Reset")]
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