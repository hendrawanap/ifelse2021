"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_PerizinanDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PerizinanDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PerizinanDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  name: "PendataanDetails",
  data: function data() {
    return {
      name: "",
      nim: "",
      kelompok: "",
      line: "",
      residence: "",
      reason: "",
      details: "",
      evidence: "",
      doc: ""
    };
  },
  methods: {
    downloadDoc: function downloadDoc() {},
    downloadBukti: function downloadBukti() {}
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res, pendataan, student;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.get(_api__WEBPACK_IMPORTED_MODULE_1__.default.perizinan + _this.$route.params.id);

            case 2:
              res = _context.sent;

              if (res) {
                pendataan = res.data;
                student = pendataan.student;
                _this.name = student.name;
                _this.nim = student.nim;
                _this.kelompok = student.group.name;
                _this.line = student.line;
                _this.residence = student.address;
                _this.reason = ['Sakit', 'Tugas Kampus', 'Alasan Mendesak', 'Acara Keluarga', 'Acara Keagamaan', 'Bencana Alam', 'Mati Listrik', 'Lainnya'][pendataan.reason];
                _this.details = pendataan.details;
                _this.doc = pendataan.evidences.ev_1.replace(new RegExp('\\\\', 'g'), '');
                _this.evidence = pendataan.evidences.ev_2.map(function (a) {
                  return a.replace(new RegExp('\\\\', 'g'), '');
                });
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

/***/ "./resources/admin/views/pages/PerizinanDetails.vue":
/*!**********************************************************!*\
  !*** ./resources/admin/views/pages/PerizinanDetails.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PerizinanDetails_vue_vue_type_template_id_6f511346_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true& */ "./resources/admin/views/pages/PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true&");
/* harmony import */ var _PerizinanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PerizinanDetails.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/PerizinanDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PerizinanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PerizinanDetails_vue_vue_type_template_id_6f511346_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PerizinanDetails_vue_vue_type_template_id_6f511346_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f511346",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/PerizinanDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/PerizinanDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/views/pages/PerizinanDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PerizinanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PerizinanDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PerizinanDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PerizinanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/admin/views/pages/PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerizinanDetails_vue_vue_type_template_id_6f511346_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerizinanDetails_vue_vue_type_template_id_6f511346_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerizinanDetails_vue_vue_type_template_id_6f511346_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PerizinanDetails.vue?vue&type=template&id=6f511346&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                  _c("CCardHeader", [_vm._v(" Detail ")]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v(" Nama ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.name) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [_vm._v(" NIM ")]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.nim) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v(" Nama Kelompok ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.kelompok) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v(" ID Line ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.line) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v(" Tempat Tinggal ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.residence) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v("Kendala ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.reason) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v("Deskripsi Kendala ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.details) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v("Surat Izin ")
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "9" } }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "/private/" + _vm.doc,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Link\n                            "
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "mb-2" },
                        [
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _vm._v("Bukti Pendukung Kendala")
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "9" } },
                            _vm._l(_vm.evidence, function(ev, index) {
                              return _c(
                                "a",
                                {
                                  attrs: {
                                    href: "/private/" + ev,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Bukti " +
                                      _vm._s(index + 1) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            0
                          )
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
                        "router-link",
                        { attrs: { to: "/perizinan/" } },
                        [
                          _c("CButton", { attrs: { color: "secondary" } }, [
                            _vm._v("Kembali")
                          ])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);