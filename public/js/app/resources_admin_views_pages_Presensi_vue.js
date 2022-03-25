"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_Presensi_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Presensi.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Presensi.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./resources/admin/functions.js");
/* harmony import */ var _js_router_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/router/api */ "./resources/js/router/api.js");
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");
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
  name: "Presensi",
  data: function data() {
    return {
      collapseAdd: false,
      title: '',
      code: '',
      initials: {
        title: '',
        code: ''
      },
      isUploading: false,
      hasError: false,
      list: []
    };
  },
  methods: {
    saveAttendance: function saveAttendance(e) {
      e.preventDefault();
      this.hasError = false;
      this.isUploading = true;
      var self = this;

      if (this.title && this.code) {
        var data = {
          title: this.title,
          code: this.code
        };
        _js_store_Connection__WEBPACK_IMPORTED_MODULE_4__.default.setHeader('Content-Type', 'application/json');
        _js_store_Connection__WEBPACK_IMPORTED_MODULE_4__.default.post(_api__WEBPACK_IMPORTED_MODULE_1__.default.attendanceAdd, data).then(function (d) {
          if (d.data.error) {
            self.hasError = true;
          } else {
            var id = d.data.id;
            self.list.push({
              id: id,
              'No': self.list.length + 1,
              'Title': self.title,
              'Kode Presensi': self.code,
              'Status': false
            });
            self.resetValues();
          }
        })["catch"](function (e) {
          self.hasError = true;
        });
      }
    },
    getDataset: function getDataset() {
      return this.list;
    },
    generateCode: function generateCode() {
      this.code = _functions__WEBPACK_IMPORTED_MODULE_2__.default.random(8, false);
    },
    changeStatus: function changeStatus(id) {
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_4__.default.setHeader('Content-Type', 'application/json');
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_4__.default.post(_api__WEBPACK_IMPORTED_MODULE_1__.default.attendancesStatus, {
        id: id
      }).then(function (d) {
        if (d.data.error) {
          console.log('Validation Error');
        } else {
          var l = self.list.find(function (l) {
            return l.id === id;
          });

          if (l) {
            l.Status = !l.Status;
          }
        }
      });
    },
    resetValues: function resetValues() {
      this.isUploading = false;
      this.hasError = false;
      this.title = this.initials.title;
      this.code = this.initials.code;
    },
    openDetails: function openDetails(id) {
      console.log(id);
    },
    downloadQR: function downloadQR(code, title) {
      var encoded = encodeURIComponent(window.location.origin + _js_router_api__WEBPACK_IMPORTED_MODULE_3__.default.attendQR + code);
      var qrCodeBaseUri = 'https://api.qrserver.com/v1/create-qr-code/?';
      _functions__WEBPACK_IMPORTED_MODULE_2__.default.downloadImage({
        url: qrCodeBaseUri + "data=".concat(encoded, "&size=450x450&margin=0&download=true"),
        label: title + '_' + code
      });
    },
    retrieve: function retrieve() {
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_4__.default.get(_api__WEBPACK_IMPORTED_MODULE_1__.default.attendances).then(function (r) {
        self.list = r.data.map(function (d, i) {
          return {
            id: d.id,
            'No': i + 1,
            'Title': d.title,
            'Kode Presensi': d.code,
            'Status': d.status
          };
        });
      });
    }
  },
  mounted: function mounted() {
    this.retrieve();
  }
});

/***/ }),

/***/ "./resources/admin/functions.js":
/*!**************************************!*\
  !*** ./resources/admin/functions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var random = function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var allCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // Declare all characters
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  if (!allCase) chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var str = '';

  for (var i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
};

var downloadImage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {
    var url, label;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, label = _ref.label;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, {
              responseType: 'blob'
            }).then(function (response) {
              var blob = new Blob([response.data], {
                type: 'image/png'
              });
              var link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = label;
              link.click();
              URL.revokeObjectURL(link.href);
            })["catch"](console.error);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function downloadImage(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  random: random,
  downloadImage: downloadImage
});

/***/ }),

/***/ "./resources/admin/views/pages/Presensi.vue":
/*!**************************************************!*\
  !*** ./resources/admin/views/pages/Presensi.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Presensi_vue_vue_type_template_id_55d7d1b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true& */ "./resources/admin/views/pages/Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true&");
/* harmony import */ var _Presensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Presensi.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/Presensi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Presensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Presensi_vue_vue_type_template_id_55d7d1b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Presensi_vue_vue_type_template_id_55d7d1b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55d7d1b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/Presensi.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/Presensi.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/admin/views/pages/Presensi.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Presensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Presensi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Presensi.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Presensi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/admin/views/pages/Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Presensi_vue_vue_type_template_id_55d7d1b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Presensi_vue_vue_type_template_id_55d7d1b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Presensi_vue_vue_type_template_id_55d7d1b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Presensi.vue?vue&type=template&id=55d7d1b3&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        "CCol",
        { attrs: { sm: "12" } },
        [
          _c(
            "CButton",
            {
              staticClass: "mb-3",
              attrs: { color: "primary" },
              on: {
                click: function($event) {
                  _vm.collapseAdd = !_vm.collapseAdd
                }
              }
            },
            [_vm._v("\n            Tambah Presensi\n        ")]
          ),
          _vm._v(" "),
          _c(
            "CCollapse",
            { attrs: { show: _vm.collapseAdd, duration: 400 } },
            [
              _c(
                "CCard",
                {
                  attrs: {
                    "border-color": _vm.isUploading
                      ? "warning"
                      : _vm.hasError
                      ? "danger"
                      : ""
                  }
                },
                [
                  _c(
                    "CCardHeader",
                    { attrs: { "body-wrapper": "" } },
                    [_c("CCardText", [_vm._v("Form Pertanyaan")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        { on: { submit: _vm.saveAttendance } },
                        [
                          _c(
                            "CRow",
                            [
                              _c("CCol", { attrs: { sm: "3" } }, [
                                _vm._v(
                                  "\n                                Nama (sebagai pembeda)\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "9" } },
                                [
                                  _c("CInput", {
                                    model: {
                                      value: _vm.title,
                                      callback: function($$v) {
                                        _vm.title = $$v
                                      },
                                      expression: "title"
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
                              _c("CCol", { attrs: { sm: "3" } }, [
                                _vm._v(
                                  "\n                                Kode Presensi\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "6" } },
                                [
                                  _c("CInput", {
                                    model: {
                                      value: _vm.code,
                                      callback: function($$v) {
                                        _vm.code = $$v
                                      },
                                      expression: "code"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          return _vm.generateCode()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Generate\n                                "
                                      )
                                    ]
                                  )
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
                                "CButton",
                                {
                                  staticClass: "mx-3",
                                  attrs: {
                                    type: "submit",
                                    size: "sm",
                                    color: "warning"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Tambahkan\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "danger" },
                                  on: { click: _vm.resetValues }
                                },
                                [
                                  _vm._v(
                                    "\n                                Reset\n                            "
                                  )
                                ]
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCol",
        { attrs: { sm: "12", md: "12" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [
                _vm._v("\n                Presensi Tersedia\n            ")
              ]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CDataTable", {
                    attrs: {
                      wrap: "",
                      hover: "",
                      fixed: "",
                      fields: [
                        "No",
                        "Title",
                        "Kode Presensi",
                        "Status",
                        "Aksi"
                      ],
                      items: _vm.list,
                      "items-per-page": 10,
                      pagination: ""
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
                                      color: item.Status ? "success" : "danger"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.Status ? "Buka" : "Tutup") +
                                        "\n                            "
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
                                  "CButton",
                                  {
                                    attrs: {
                                      color: item.Status ? "danger" : "success",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeStatus(item.id)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.Status ? "Tutup" : "Buka") +
                                        "\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "CButton",
                                  {
                                    attrs: { color: "primary", size: "sm" },
                                    on: {
                                      click: function($event) {
                                        return _vm.downloadQR(
                                          item["Kode Presensi"],
                                          item["Title"]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Download QR\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  { attrs: { to: "/presensi/" + item.id } },
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: { color: "warning", size: "sm" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Detail\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
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