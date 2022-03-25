"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_QuizAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "QuizAdd",
  data: function data() {
    return {
      startAt: '',
      endAt: '',
      total: 15,
      duration: 900,
      title: '',
      isUploading: false,
      hasError: false,
      agendas: [],
      agenda: null,
      isMounted: false,
      excerpt: ''
    };
  },
  methods: {
    updateAgenda: function updateAgenda(agenda) {
      this.agenda = agenda.target.value;
    },
    setStart: function setStart(newVal) {
      this.startAt = newVal;
    },
    setEnd: function setEnd(newVal) {
      this.endAt = newVal;
    },
    setTitle: function setTitle(newVal) {
      this.title = newVal;
    },
    setTotal: function setTotal(newVal) {
      this.total = newVal;
    },
    setDuration: function setDuration(newVal) {
      this.duration = newVal;
    },
    setExcerpt: function setExcerpt(newVal) {
      this.excerpt = newVal;
    },
    resetValues: function resetValues() {
      this.startAt = '';
      this.endAt = '';
      this.total = 15;
      this.duration = 900;
      this.title = '';
      this.excerpt = '';
    },
    publish: function publish() {
      var _this = this;

      var isPublished = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = {
        startAt: this.startAt,
        endAt: this.endAt,
        total: this.total,
        duration: this.duration,
        excerpt: this.excerpt,
        title: this.title,
        isPublished: isPublished,
        agendaId: this.agenda
      };
      console.log(data);
      this.isUploading = true;
      this.hasError = false;
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.setHeader('Content-Type', 'application/x-www-form-encoded');
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.post(_api__WEBPACK_IMPORTED_MODULE_0__.default.quizAdd, data).then(function (r) {
        self.isUploading = false;

        if (r.data.error) {
          self.hasError = true;
          return;
        } else {
          _this.$router.push('/quiz');
        }

        self.hasError = false;
      })["catch"](function (e) {
        self.isUploading = false;
        self.hasError = true;
      });
    },
    draft: function draft() {
      this.publish(false);
    }
  },
  mounted: function mounted() {
    var self = this;
    _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.agenda).then(function (r) {
      if (!r.data.error) {
        self.agendas = r.data.map(function (d) {
          return {
            value: d.id,
            label: d.title
          };
        });
        self.isMounted = true;
      }
    });
    _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.setHeader('Content-Type', 'application/x-www-form-encoded');
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/QuizAdd.vue":
/*!*************************************************!*\
  !*** ./resources/admin/views/pages/QuizAdd.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizAdd_vue_vue_type_template_id_e4024d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true& */ "./resources/admin/views/pages/QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true&");
/* harmony import */ var _QuizAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizAdd.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/QuizAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuizAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuizAdd_vue_vue_type_template_id_e4024d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuizAdd_vue_vue_type_template_id_e4024d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e4024d10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/QuizAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/QuizAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/admin/views/pages/QuizAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/admin/views/pages/QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAdd_vue_vue_type_template_id_e4024d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAdd_vue_vue_type_template_id_e4024d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAdd_vue_vue_type_template_id_e4024d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizAdd.vue?vue&type=template&id=e4024d10&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                              label: "Judul Quiz",
                              horizontal: "",
                              value: _vm.title
                            },
                            on: { change: _vm.setTitle }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              description:
                                "Label ini akan tampil pada halaman semua quiz maba",
                              label: "Label Singkat",
                              horizontal: "",
                              value: _vm.excerpt
                            },
                            on: { change: _vm.setExcerpt }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              description:
                                "Sebutkan dalam detik (15 menit = 900 detik)",
                              label: "Waktu Pengerjaan",
                              type: "number",
                              horizontal: "",
                              value: _vm.duration
                            },
                            on: { change: _vm.setDuration }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Total Soal",
                              description:
                                "Sebutkan total soal yang akan diambil dari acakan",
                              type: "number",
                              horizontal: "",
                              value: _vm.total
                            },
                            on: { change: _vm.setTotal }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Dibuka pada",
                              type: "datetime-local",
                              value: _vm.startAt,
                              horizontal: ""
                            },
                            on: { change: _vm.setStart }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Ditutup pada",
                              type: "datetime-local",
                              value: _vm.endAt,
                              horizontal: ""
                            },
                            on: { change: _vm.setEnd }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              placeholder: "Pilih Rangkaian...",
                              label: "Rangkaian Terkait",
                              options: _vm.agendas,
                              horizontal: ""
                            },
                            on: { change: _vm.updateAgenda }
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
                                on: { click: _vm.publish }
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
                                on: { click: _vm.draft }
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