"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_QuizDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./resources/admin/views/data.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");


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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "QuizDetails",
  data: function data() {
    return {
      quiz: {},
      data: []
    };
  },
  computed: {
    getDataset: function getDataset() {
      return this.data.map(function (a) {
        return {
          'NIM': a.nim,
          'Nama': a.name,
          'Mulai Pada': a.started_at,
          'Kelompok': a.group,
          'Selesai Pada': a.ended_at,
          'Nilai': a.marking
        };
      });
    }
  },
  methods: {
    togglePublish: function togglePublish() {
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_3__.default.get(_api__WEBPACK_IMPORTED_MODULE_2__.default.quizTogglePublish + this.$route.params.id).then(function (r) {
        if (r.data.status) {
          self.quiz.is_published = !self.quiz.is_published;
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
      var headers = ['NIM', 'Nama', 'Kelompok', 'Mulai Pada', 'Selesai Pada', 'Nilai'];
      var dataArray = [];
      var newDataset = this.data.sort(function (a, b) {
        return ('' + a.group).localeCompare(b.group + '');
      });

      for (var i in newDataset) {
        var _data = newDataset[i];
        dataArray.push([_data.nim, _data.name, _data.group, _data.started_at, _data.ended_at, _data.marking]);
      }

      jsonArray = [headers].concat(dataArray);
      var json = jsonArray.map(function (row) {
        return row.map(function (cell) {
          return "\"".concat(cell, "\"");
        }).join(',');
      }).join('\r\n');
      this.exportToCSV(json, this.quiz.label);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _js_store_Connection__WEBPACK_IMPORTED_MODULE_3__.default.get(_api__WEBPACK_IMPORTED_MODULE_2__.default.quiz + _this.$route.params.id);

            case 2:
              res = _context.sent;
              _this.data = res.data.students;
              _this.quiz = res.data.quiz;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./resources/admin/views/data.js":
/*!***************************************!*\
  !*** ./resources/admin/views/data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fakeQuizzes = [{
  id: 1,
  title: 'Quiz 1',
  start_at: "17 Juli 2021 21:30 WIB",
  end_at: "18 Juli 2021 00:00 WIB",
  status: "Finished",
  submitted: 1,
  mean: 79.2,
  total: 12
}, {
  id: 2,
  title: 'Quiz 1',
  start_at: "17 Juli 2021 21:30 WIB",
  end_at: "18 Juli 2021 00:00 WIB",
  status: "Ongoing",
  submitted: 1,
  mean: 79.2,
  total: 12
}, {
  id: 3,
  title: 'Quiz 1',
  start_at: "17 Juli 2021 21:30 WIB",
  end_at: "18 Juli 2021 00:00 WIB",
  status: "Finished",
  submitted: 1,
  mean: 67.2,
  total: 12
}, {
  id: 4,
  title: 'Quiz 1',
  start_at: "17 Juli 2021 21:30 WIB",
  end_at: "18 Juli 2021 00:00 WIB",
  status: "Ongoing",
  submitted: 1,
  mean: 81.2,
  total: 12
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fakeQuizzes);

/***/ }),

/***/ "./resources/admin/views/pages/QuizDetails.vue":
/*!*****************************************************!*\
  !*** ./resources/admin/views/pages/QuizDetails.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizDetails_vue_vue_type_template_id_426f2319_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizDetails.vue?vue&type=template&id=426f2319&scoped=true& */ "./resources/admin/views/pages/QuizDetails.vue?vue&type=template&id=426f2319&scoped=true&");
/* harmony import */ var _QuizDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizDetails.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/QuizDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuizDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuizDetails_vue_vue_type_template_id_426f2319_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuizDetails_vue_vue_type_template_id_426f2319_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "426f2319",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/QuizDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/QuizDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/admin/views/pages/QuizDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/QuizDetails.vue?vue&type=template&id=426f2319&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/admin/views/pages/QuizDetails.vue?vue&type=template&id=426f2319&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizDetails_vue_vue_type_template_id_426f2319_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizDetails_vue_vue_type_template_id_426f2319_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizDetails_vue_vue_type_template_id_426f2319_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizDetails.vue?vue&type=template&id=426f2319&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizDetails.vue?vue&type=template&id=426f2319&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizDetails.vue?vue&type=template&id=426f2319&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizDetails.vue?vue&type=template&id=426f2319&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                  _c("CCardHeader", [
                    _vm._v(
                      "\n                    Data Peserta\n                    "
                    ),
                    _c(
                      "div",
                      { staticClass: "float-right" },
                      [
                        _c(
                          "CButton",
                          {
                            attrs: { size: "sm", color: "warning" },
                            on: { click: _vm.createJSON }
                          },
                          [_vm._v("Download")]
                        ),
                        _vm._v(" "),
                        _c(
                          "CButton",
                          {
                            staticClass: "float-right ml-2",
                            attrs: {
                              size: "sm",
                              color: _vm.quiz.is_published
                                ? "primary"
                                : "danger"
                            },
                            on: { click: _vm.togglePublish }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.quiz.is_published ? "Tutup" : "Buka")
                            )
                          ]
                        )
                      ],
                      1
                    )
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
                            "NIM",
                            "Nama",
                            "Kelompok",
                            "Mulai Pada",
                            "Selesai Pada",
                            "Nilai"
                          ],
                          items: _vm.getDataset,
                          "items-per-page": 10,
                          pagination: "",
                          "clickable-rows": "",
                          "column-filter": { external: false, lazy: true }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);