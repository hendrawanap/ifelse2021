"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_Berita_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Berita.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Berita.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  name: "Berita",
  data: function data() {
    return {
      dataset: []
    };
  },
  methods: {
    getDataset: function getDataset() {
      return this.dataset.map(function (b) {
        return {
          ID: b.id,
          Judul: b.title,
          "Tanggal Publish": b.published_at,
          Status: b.is_published
        };
      });
    },
    changeStatus: function changeStatus(item) {
      var self = this;
      var data = {
        id: item.ID,
        is_published: item.Status
      };
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.setHeader('Content-Type', 'application/json');
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.post(_api__WEBPACK_IMPORTED_MODULE_1__.default.beritaStatus, data).then(function (d) {
        if (!d.data.error) {
          item.Status = !item.Status;
        }
      });
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.get(_api__WEBPACK_IMPORTED_MODULE_1__.default.berita);

            case 2:
              res = _context.sent;

              if (res.data) {
                _this.dataset = res.data;
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/Berita.vue":
/*!************************************************!*\
  !*** ./resources/admin/views/pages/Berita.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Berita_vue_vue_type_template_id_8e4ca12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Berita.vue?vue&type=template&id=8e4ca12a&scoped=true& */ "./resources/admin/views/pages/Berita.vue?vue&type=template&id=8e4ca12a&scoped=true&");
/* harmony import */ var _Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Berita.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/Berita.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Berita_vue_vue_type_template_id_8e4ca12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Berita_vue_vue_type_template_id_8e4ca12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8e4ca12a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/Berita.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/Berita.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/admin/views/pages/Berita.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Berita.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Berita.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/Berita.vue?vue&type=template&id=8e4ca12a&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/admin/views/pages/Berita.vue?vue&type=template&id=8e4ca12a&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_template_id_8e4ca12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_template_id_8e4ca12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_template_id_8e4ca12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Berita.vue?vue&type=template&id=8e4ca12a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Berita.vue?vue&type=template&id=8e4ca12a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Berita.vue?vue&type=template&id=8e4ca12a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Berita.vue?vue&type=template&id=8e4ca12a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "12", md: "12" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [_vm._v(" Data Berita ")]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          hover: "",
                          fixed: "",
                          fields: [
                            "ID",
                            "Judul",
                            "Tanggal Publish",
                            "Status",
                            "Aksi"
                          ],
                          items: _vm.getDataset(),
                          "items-per-page": 10,
                          pagination: "",
                          "clickable-rows": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "Status",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "CBadge",
                                      {
                                        attrs: {
                                          color: item.Status
                                            ? "success"
                                            : "danger"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              item.Status ? "Publish" : "Draft"
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "Aksi",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: { to: "/berita/edit/" + item.ID }
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("Edit")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CButton",
                                      {
                                        attrs: {
                                          color: item.Status
                                            ? "danger"
                                            : "success"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus(item)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              item.Status ? "Draft" : "Publish"
                                            ) +
                                            "\n                "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);