"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_ProfileDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/ProfileDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/ProfileDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/store/Connection */ "./resources/js/store/Connection.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileDetails",
  data: function data() {
    return {
      avatar: '../../img/avatars/1.jpg',
      studentData: null,
      quizzes: [],
      tasks: [],
      selectedTask: null,
      detailModal: false
    };
  },
  methods: {
    openDetails: function openDetails(item) {
      this.detailModal = true;
      this.selectedTask = this.tasks[item['No'] - 1];
    },
    simpanNilai: function simpanNilai() {
      this.detailModal = false;
    },
    retrieve: function retrieve() {
      var _this = this;

      _js_store_Connection__WEBPACK_IMPORTED_MODULE_1__.default.get(_api__WEBPACK_IMPORTED_MODULE_2__.default.students + this.$route.params.id).then(function (r) {
        if (!r.err) {
          console.log(r);
          _this.studentData = r.data;
          _this.quizzes = r.data.quizzes.map(function (quiz, i) {
            return {
              'No': i + 1,
              'Title': quiz.quiz.label,
              'Agenda': quiz.quiz.agenda_id,
              'Nilai': Math.round(quiz.marking, 2),
              'Dikumpulkan Pada': quiz.ended_at
            };
          });
          _this.tasks = r.data.submissions.map(function (task, i) {
            return {
              'No': i + 1,
              'Title': task.task.title,
              'Agenda': task.task.agenda_id,
              'Status': 'Belum Dinilai',
              'Dikumpulkan Pada': task.submitted_at,
              'submissions': task.task.fields.map(function (submission) {
                return {
                  label: submission.label,
                  content: task.submission[submission.id]
                };
              }),
              'nilai': task.marking
            };
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.retrieve();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/ProfileDetails.vue":
/*!********************************************************!*\
  !*** ./resources/admin/views/pages/ProfileDetails.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileDetails_vue_vue_type_template_id_0d237d1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true& */ "./resources/admin/views/pages/ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true&");
/* harmony import */ var _ProfileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileDetails.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/ProfileDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProfileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileDetails_vue_vue_type_template_id_0d237d1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileDetails_vue_vue_type_template_id_0d237d1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d237d1d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/ProfileDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/ProfileDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/admin/views/pages/ProfileDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/ProfileDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/admin/views/pages/ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDetails_vue_vue_type_template_id_0d237d1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDetails_vue_vue_type_template_id_0d237d1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDetails_vue_vue_type_template_id_0d237d1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/ProfileDetails.vue?vue&type=template&id=0d237d1d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { lg: "12" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", { attrs: { name: "cil-user" } }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Profil Mahasiswa")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { lg: "10" } },
                            [
                              _c(
                                "CForm",
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Nama",
                                      horizontal: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.studentData.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.studentData, "name", $$v)
                                      },
                                      expression: "studentData.name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "NIM",
                                      horizontal: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.studentData.nim,
                                      callback: function($$v) {
                                        _vm.$set(_vm.studentData, "nim", $$v)
                                      },
                                      expression: "studentData.nim"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Whatsapp",
                                      horizontal: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.studentData.whatsapp,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.studentData,
                                          "whatsapp",
                                          $$v
                                        )
                                      },
                                      expression: "studentData.whatsapp"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Alamat",
                                      horizontal: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.studentData.address,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.studentData,
                                          "address",
                                          $$v
                                        )
                                      },
                                      expression: "studentData.address"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Nama Kelompok",
                                      horizontal: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.studentData.group.name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.studentData.group,
                                          "name",
                                          $$v
                                        )
                                      },
                                      expression: "studentData.group.name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Nama Pendamping",
                                      horizontal: "",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.studentData.companion.name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.studentData.companion,
                                          "name",
                                          $$v
                                        )
                                      },
                                      expression: "studentData.companion.name"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", [
                            _vm.studentData.avatar
                              ? _c("img", {
                                  staticClass: "rounded-circle",
                                  staticStyle: {
                                    "aspect-ratio": "1",
                                    "object-fit": "cover",
                                    height: "auto",
                                    width: "100%"
                                  },
                                  attrs: {
                                    src: "/images/" + _vm.studentData.avatar
                                  }
                                })
                              : _vm._e()
                          ])
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
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", { attrs: { name: "cil-task" } }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Quiz Mahasiswa")])
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
                            "Title",
                            "Agenda",
                            "Nilai",
                            "Dikumpulkan Pada"
                          ],
                          items: _vm.quizzes,
                          "items-per-page": 10,
                          pagination: ""
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
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", { attrs: { name: "cil-task" } }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Penugasan Mahasiswa")])
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
                            "Title",
                            "Agenda",
                            "Status",
                            "Dikumpulkan Pada",
                            "Aksi"
                          ],
                          items: _vm.tasks,
                          "items-per-page": 10,
                          pagination: ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "Aksi",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "CButton",
                                  {
                                    attrs: { color: "warning" },
                                    on: {
                                      click: function($event) {
                                        return _vm.openDetails(item)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Detail\n                        "
                                    )
                                  ]
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
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            title: _vm.selectedTask && _vm.selectedTask["Title"],
            color: "info",
            show: _vm.detailModal,
            size: "lg"
          },
          on: {
            "update:show": function($event) {
              _vm.detailModal = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function() {
                return [
                  _c(
                    "CButton",
                    {
                      attrs: { color: "secondary" },
                      on: {
                        click: function($event) {
                          _vm.detailModal = false
                        }
                      }
                    },
                    [_vm._v("Tutup")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      attrs: { color: "info" },
                      on: {
                        click: function($event) {
                          return _vm.simpanNilai()
                        }
                      }
                    },
                    [_vm._v("Simpan")]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm.selectedTask
            ? [
                _c(
                  "CForm",
                  [
                    _vm._l(_vm.selectedTask.submissions, function(
                      submission,
                      index
                    ) {
                      return _c("CInput", {
                        key: "submission" + index,
                        attrs: { label: submission.label, readonly: "" },
                        model: {
                          value: submission.content,
                          callback: function($$v) {
                            _vm.$set(submission, "content", $$v)
                          },
                          expression: "submission.content"
                        }
                      })
                    }),
                    _vm._v(" "),
                    _c("CInput", {
                      attrs: { label: "Nilai" },
                      model: {
                        value: _vm.selectedTask.nilai,
                        callback: function($$v) {
                          _vm.$set(_vm.selectedTask, "nilai", $$v)
                        },
                        expression: "selectedTask.nilai"
                      }
                    })
                  ],
                  2
                )
              ]
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);