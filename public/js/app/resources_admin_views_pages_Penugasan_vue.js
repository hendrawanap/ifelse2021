"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_Penugasan_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Penugasan.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Penugasan.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Penugasan",
  data: function data() {
    return {
      tasks: []
    };
  },
  methods: {
    getDataset: function getDataset() {
      return this.tasks;
    },
    details: function details(id) {
      this.$router.push('/penugasan/' + id);
    },
    togglePublish: function togglePublish(item) {
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.taskTogglePublish + item.id).then(function (r) {
        if (r.data.status) {
          item.isPublished = !item.isPublished;
        }
      });
    },
    retrieve: function retrieve() {
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.tasks).then(function (r) {
        self.tasks = r.data.map(function (r) {
          return {
            id: r.id,
            "ID": r.id,
            "Title": r.title,
            'Dimulai Pada': r.start_at,
            'Selesai Pada': r.end_at,
            'Jumlah Field': r.fields.length,
            'Rangkaian': r.agenda.title,
            'isPublished': r.is_published
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

/***/ "./resources/admin/views/pages/Penugasan.vue":
/*!***************************************************!*\
  !*** ./resources/admin/views/pages/Penugasan.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Penugasan_vue_vue_type_template_id_04dbb194_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Penugasan.vue?vue&type=template&id=04dbb194&scoped=true& */ "./resources/admin/views/pages/Penugasan.vue?vue&type=template&id=04dbb194&scoped=true&");
/* harmony import */ var _Penugasan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Penugasan.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/Penugasan.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Penugasan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Penugasan_vue_vue_type_template_id_04dbb194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Penugasan_vue_vue_type_template_id_04dbb194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "04dbb194",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/Penugasan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/Penugasan.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/admin/views/pages/Penugasan.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penugasan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Penugasan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Penugasan.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penugasan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/Penugasan.vue?vue&type=template&id=04dbb194&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/views/pages/Penugasan.vue?vue&type=template&id=04dbb194&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penugasan_vue_vue_type_template_id_04dbb194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penugasan_vue_vue_type_template_id_04dbb194_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penugasan_vue_vue_type_template_id_04dbb194_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Penugasan.vue?vue&type=template&id=04dbb194&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Penugasan.vue?vue&type=template&id=04dbb194&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Penugasan.vue?vue&type=template&id=04dbb194&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/Penugasan.vue?vue&type=template&id=04dbb194&scoped=true& ***!
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
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { sm: "12", md: "12" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [
                _vm._v("\n                Penugasan Tersedia\n            ")
              ]),
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
                        "Title",
                        "Dimulai Pada",
                        "Selesai Pada",
                        "Jumlah Field",
                        "Rangkaian",
                        "Aksi"
                      ],
                      items: _vm.getDataset(),
                      "items-per-page": 10,
                      pagination: "",
                      "clickable-rows": ""
                    },
                    scopedSlots: _vm._u([
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
                                    attrs: { "data-id": "", color: "warning" },
                                    on: {
                                      click: function($event) {
                                        return _vm.details(item.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Detail")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "CButton",
                                  {
                                    attrs: {
                                      "data-id": "",
                                      color: !item.isPublished
                                        ? "success"
                                        : "danger"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.togglePublish(item)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        item.isPublished ? "Tutup" : "Buka"
                                      )
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