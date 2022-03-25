"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_PenugasanAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanAdd.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanAdd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PenugasanAdd",
  data: function data() {
    return {
      description: '',
      startAt: '',
      endAt: '',
      total: 1,
      title: '',
      isUploading: false,
      hasError: false,
      fields: [{
        id: 1,
        label: 'Link Drive 1'
      }],
      agendaId: 1,
      options: []
    };
  },
  methods: {
    assignOptions: function assignOptions() {
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.get(_api__WEBPACK_IMPORTED_MODULE_1__.default.agenda).then(function (r) {
        if (!r.data.error) {
          self.options = r.data.map(function (a) {
            return {
              label: a.title,
              value: a.id
            };
          });
        }
      });
    },
    changeTotal: function changeTotal() {
      var val = this.total;

      if (this.fields.length < val) {
        for (var i = this.fields.length; i < val; i++) {
          this.fields.push({
            id: i + 1,
            label: 'Link Drive ' + (i + 1)
          });
        }
      } else if (this.fields.length > val) {
        this.fields.splice(val);
      }
    },
    resetValues: function resetValues() {
      this.startAt = '';
      this.endAt = '';
      this.fields = [{
        id: 1,
        label: 'Link Drive 1'
      }];
      this.total = 1;
      this.description = '';
      this.title = '';
      this.agendaId = 1;
    },
    publish: function publish() {
      var isPublished = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = {
        startAt: this.startAt,
        endAt: this.endAt,
        description: this.description,
        fields: JSON.stringify(this.fields),
        title: this.title,
        agendaId: this.agendaId,
        isPublished: isPublished
      };
      this.isUploading = true;
      this.hasError = false;
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.removeHeader('Content-Type');
      var auth = _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.getHeaders()['Authorization'];
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api__WEBPACK_IMPORTED_MODULE_1__.default.taskAdd, data, {
        headers: {
          'Authorization': auth,
          'Content-Type': 'application/json'
        }
      }).then(function (r) {
        self.isUploading = false;

        if (r.data.error) {
          self.hasError = true;
          return;
        }

        self.hasError = false;
        self.resetValues();
        self.$router.push('/penugasan');
      })["catch"](function (e) {
        self.isUploading = false;
        self.hasError = true;
      });
    }
  },
  mounted: function mounted() {
    this.assignOptions();
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/PenugasanAdd.vue":
/*!******************************************************!*\
  !*** ./resources/admin/views/pages/PenugasanAdd.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PenugasanAdd_vue_vue_type_template_id_2059693b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true& */ "./resources/admin/views/pages/PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true&");
/* harmony import */ var _PenugasanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PenugasanAdd.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/PenugasanAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PenugasanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PenugasanAdd_vue_vue_type_template_id_2059693b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PenugasanAdd_vue_vue_type_template_id_2059693b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2059693b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/PenugasanAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/PenugasanAdd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/admin/views/pages/PenugasanAdd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PenugasanAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/admin/views/pages/PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanAdd_vue_vue_type_template_id_2059693b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanAdd_vue_vue_type_template_id_2059693b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanAdd_vue_vue_type_template_id_2059693b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanAdd.vue?vue&type=template&id=2059693b&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "12" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": _vm.hasError ? "danger" : "" } },
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Quiz Form")]),
                    _vm._v(" "),
                    _vm.isUploading
                      ? _c(
                          "span",
                          { staticClass: "float-right text-secondary" },
                          [_vm._v("Is Uploading..")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.hasError
                      ? _c("span", { staticClass: "float-right text-danger" }, [
                          _vm._v("Some Error Occurred")
                        ])
                      : _vm._e()
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
                              description: "Berikan judul yang sesuai",
                              label: "Judul Penugasan",
                              horizontal: "",
                              required: ""
                            },
                            model: {
                              value: _vm.title,
                              callback: function($$v) {
                                _vm.title = $$v
                              },
                              expression: "title"
                            }
                          }),
                          _vm._v(" "),
                          _c("CTextarea", {
                            attrs: {
                              rows: "10",
                              description: "Berikan Keterangan Tugas",
                              label: "Deskripsi",
                              horizontal: "",
                              required: ""
                            },
                            model: {
                              value: _vm.description,
                              callback: function($$v) {
                                _vm.description = $$v
                              },
                              expression: "description"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Total Field",
                              description:
                                "Sebutkan total field yang akan disediakan saat pengisian",
                              type: "number",
                              horizontal: "",
                              required: ""
                            },
                            on: { change: _vm.changeTotal },
                            model: {
                              value: _vm.total,
                              callback: function($$v) {
                                _vm.total = $$v
                              },
                              expression: "total"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.fields, function(field) {
                            return _c("CInput", {
                              key: field.id,
                              attrs: {
                                label: "Label untuk " + field.id,
                                horizontal: ""
                              },
                              model: {
                                value: field.label,
                                callback: function($$v) {
                                  _vm.$set(field, "label", $$v)
                                },
                                expression: "field.label"
                              }
                            })
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Dibuka pada",
                              type: "datetime-local",
                              required: "",
                              horizontal: ""
                            },
                            model: {
                              value: _vm.startAt,
                              callback: function($$v) {
                                _vm.startAt = $$v
                              },
                              expression: "startAt"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Ditutup pada",
                              type: "datetime-local",
                              required: "",
                              horizontal: ""
                            },
                            model: {
                              value: _vm.endAt,
                              callback: function($$v) {
                                _vm.endAt = $$v
                              },
                              expression: "endAt"
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Pilih Rangkaian Terkait",
                              description:
                                "Pilihan ini akan memengaruhi profil mahasiswa",
                              options: _vm.options,
                              horizontal: ""
                            },
                            on: {
                              change: function($event) {
                                _vm.agendaId = $event.target.value
                              }
                            }
                          })
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _vm.isUploading
                        ? [
                            _c(
                              "CButton",
                              {
                                staticClass: "mr-2",
                                attrs: {
                                  type: "submit",
                                  disabled: "",
                                  size: "sm",
                                  color: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.publish()
                                  }
                                }
                              },
                              [
                                _c("CIcon", {
                                  attrs: { name: "cil-check-circle" }
                                }),
                                _vm._v(" Publish")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CButton",
                              {
                                staticClass: "mr-2",
                                attrs: {
                                  type: "button",
                                  disabled: "",
                                  size: "sm",
                                  color: "secondary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.publish(false)
                                  }
                                }
                              },
                              [
                                _c("CIcon", { attrs: { name: "cil-file" } }),
                                _vm._v(" Draft")
                              ],
                              1
                            )
                          ]
                        : [
                            _c(
                              "CButton",
                              {
                                staticClass: "mr-2",
                                attrs: {
                                  type: "submit",
                                  size: "sm",
                                  color: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.publish()
                                  }
                                }
                              },
                              [
                                _c("CIcon", {
                                  attrs: { name: "cil-check-circle" }
                                }),
                                _vm._v(" Publish")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CButton",
                              {
                                staticClass: "mr-2",
                                attrs: {
                                  type: "button",
                                  size: "sm",
                                  color: "secondary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.publish(false)
                                  }
                                }
                              },
                              [
                                _c("CIcon", { attrs: { name: "cil-file" } }),
                                _vm._v(" Draft")
                              ],
                              1
                            )
                          ],
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" },
                          on: { click: _vm.resetValues }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    2
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