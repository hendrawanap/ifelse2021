"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_PresensiDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PresensiDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PresensiDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PresensiDetails",
  data: function data() {
    return {
      list: []
    };
  },
  methods: {
    getDataset: function getDataset() {
      return this.list;
    },
    refreshDataset: function refreshDataset() {
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.attendances + this.$route.params.id).then(function (r) {
        if (!r.data.error) {
          self.list = r.data.map(function (d, i) {
            return {
              "No": i + 1,
              "NIM": d.student.nim,
              "Kelompok": d.student.group.name,
              "Nama": d.student.name,
              "Waktu Presensi": d.attended_at
            };
          });
        }
      });
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
      var headers = ['No', 'NIM', 'Nama', 'Kelompok', 'Waktu Presensi'];
      var dataArray = [];
      var newDataset = this.getDataset().sort(function (a, b) {
        return ('' + a.Kelompok).localeCompare(b.Kelompok + '');
      });
      var ind = 1;

      for (var i in newDataset) {
        var _data = newDataset[i];
        dataArray.push([ind++, _data.NIM, _data.Nama, _data.Kelompok, _data['Waktu Presensi']]);
      }

      jsonArray = [headers].concat(dataArray);
      var json = jsonArray.map(function (row) {
        return row.map(function (cell) {
          return "\"".concat(cell, "\"");
        }).join(',');
      }).join('\r\n');
      this.exportToCSV(json, 'Presensi');
    }
  },
  mounted: function mounted() {
    this.refreshDataset();
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/PresensiDetails.vue":
/*!*********************************************************!*\
  !*** ./resources/admin/views/pages/PresensiDetails.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PresensiDetails_vue_vue_type_template_id_0280183f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true& */ "./resources/admin/views/pages/PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true&");
/* harmony import */ var _PresensiDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PresensiDetails.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/PresensiDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PresensiDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PresensiDetails_vue_vue_type_template_id_0280183f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PresensiDetails_vue_vue_type_template_id_0280183f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0280183f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/PresensiDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/PresensiDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/admin/views/pages/PresensiDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PresensiDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PresensiDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PresensiDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PresensiDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/admin/views/pages/PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PresensiDetails_vue_vue_type_template_id_0280183f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PresensiDetails_vue_vue_type_template_id_0280183f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PresensiDetails_vue_vue_type_template_id_0280183f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/PresensiDetails.vue?vue&type=template&id=0280183f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { sm: "12", md: "12" } },
        [
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _vm._v(
                    "\n                Data Mahasiswa yang Sudah Presensi\n                "
                  ),
                  _c(
                    "CButton",
                    {
                      staticClass: "float-right",
                      attrs: { size: "sm", color: "primary" },
                      on: { click: _vm.createJSON }
                    },
                    [_vm._v("Download")]
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
                      wrap: "",
                      hover: "",
                      fixed: "",
                      fields: [
                        "No",
                        "NIM",
                        "Kelompok",
                        "Nama",
                        "Waktu Presensi"
                      ],
                      items: _vm.getDataset(),
                      "items-per-page": 10,
                      pagination: ""
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);