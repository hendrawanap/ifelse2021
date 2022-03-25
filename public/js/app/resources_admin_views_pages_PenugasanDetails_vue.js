"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_PenugasanDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PenugasanDetails",
  data: function data() {
    return {
      dataset: [],
      fields: [],
      title: 'download'
    };
  },
  methods: {
    getDataset: function getDataset() {
      return this.dataset;
    },
    getFields: function getFields() {
      return [{
        key: 'nim',
        label: "NIM"
      }, {
        key: 'name',
        label: "Nama"
      }, {
        key: 'group',
        label: "Nama Kelompok"
      }, {
        key: 'submission',
        label: "Data"
      }, {
        key: 'submitted_at',
        label: "Dikumpulkan Pada"
      }];
    },
    gotoProfile: function gotoProfile(item, id) {
      this.$router.push('/kemahasiswaan/data/' + item.id);
    },
    exportToCSV: function exportToCSV(json, title) {
      var blob = new Blob([json], {
        type: 'application/csv'
      });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = title + '.csv';
      link.click();
      URL.revokeObjectURL(link.href);
    },
    createJSON: function createJSON() {
      var jsonArray = [];
      var headers = ['NIM', 'Nama', 'Kelompok'];
      var dataArray = [];

      for (var i in this.fields) {
        headers.push(this.fields[i].label);
      }

      headers.push('Dikumpulkan Pada');
      var newDataset = this.dataset.sort(function (a, b) {
        return ('' + a.group).localeCompare(b.group + '');
      });

      for (var _i in newDataset) {
        var _data = newDataset[_i];
        var submissions = Object.values(_data.submission);
        dataArray.push([_data.nim, _data.name, _data.group].concat(_toConsumableArray(submissions), [_data.submitted_at]));
      }

      jsonArray = [headers].concat(dataArray);
      var json = jsonArray.map(function (row) {
        return row.map(function (cell) {
          return "\"".concat(cell, "\"");
        }).join(',');
      }).join('\r\n');
      this.exportToCSV(json, this.title);
    }
  },
  mounted: function mounted() {
    var self = this;
    _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.tasks + this.$route.params.id).then(function (r) {
      if (!r.data.error) {
        self.fields = r.data.fields;
        self.title = r.data.title;
        self.dataset = r.data.submissions.map(function (d) {
          return {
            'id': d.student.id,
            'nim': d.student.nim,
            'name': d.student.name,
            'group': d.student.group.name,
            'submission': d.submission,
            'submitted_at': d.submitted_at
          };
        });
      }
    });
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/PenugasanDetails.vue":
/*!**********************************************************!*\
  !*** ./resources/admin/views/pages/PenugasanDetails.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PenugasanDetails_vue_vue_type_template_id_01a6195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true& */ "./resources/admin/views/pages/PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true&");
/* harmony import */ var _PenugasanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PenugasanDetails.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/PenugasanDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PenugasanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PenugasanDetails_vue_vue_type_template_id_01a6195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PenugasanDetails_vue_vue_type_template_id_01a6195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "01a6195c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/PenugasanDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/PenugasanDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/views/pages/PenugasanDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PenugasanDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/admin/views/pages/PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanDetails_vue_vue_type_template_id_01a6195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanDetails_vue_vue_type_template_id_01a6195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PenugasanDetails_vue_vue_type_template_id_01a6195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PenugasanDetails.vue?vue&type=template&id=01a6195c&scoped=true& ***!
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
                  _c(
                    "CCardHeader",
                    [
                      _vm._v(" Data Penugasan\n                    "),
                      _c(
                        "CButton",
                        {
                          staticClass: "float-right",
                          attrs: { color: "primary", size: "sm" },
                          on: { click: _vm.createJSON }
                        },
                        [
                          _vm._v(
                            "\n                        Download Penugasan\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          hover: "",
                          fixed: "",
                          fields: _vm.getFields(),
                          items: _vm.getDataset(),
                          "items-per-page": 10,
                          pagination: "",
                          "clickable-rows": "",
                          columnFilter: { external: false, lazy: true },
                          sorter: { external: false, resetable: true },
                          tableFilter: { external: false, lazy: true }
                        },
                        on: { "row-clicked": _vm.gotoProfile },
                        scopedSlots: _vm._u([
                          {
                            key: "submission",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _vm._l(
                                      Object.values(item.submission),
                                      function(submission) {
                                        return _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: submission,
                                              target: "_blank"
                                            }
                                          },
                                          [_vm._v(_vm._s(submission))]
                                        )
                                      }
                                    ),
                                    _vm._v(",\n                            ")
                                  ],
                                  2
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