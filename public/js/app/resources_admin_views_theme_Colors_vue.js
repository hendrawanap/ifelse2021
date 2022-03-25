"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_theme_Colors_vue"],{

/***/ "./node_modules/@coreui/utils/src/rgb-to-hex.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/rgb-to-hex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-magic-numbers */
const rgbToHex = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  if (color === 'transparent') {
    return '#00000000'
  }

  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)

  if (!rgb) {
    throw new Error(`${color} is not a valid rgb color`)
  }

  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}`
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgbToHex);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorTheme.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorTheme.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorView */ "./resources/admin/views/theme/ColorView.vue");
//
//
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
  name: 'ColorTheme',
  components: {
    ColorView: _ColorView__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    color: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorView.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/rgb-to-hex.js");
//
//
//
//
//
//
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
  name: 'ColorView',
  data: function data() {
    return {
      bgColor: 'rgb(255, 255, 255)'
    };
  },
  computed: {
    hexColor: function hexColor() {
      return (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__.default)(this.bgColor);
    }
  },
  methods: {
    setColor: function setColor() {
      var elem = this.$parent.$el.children[0];
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.bgColor = color || this.bgColor;
    }
  },
  mounted: function mounted() {
    this.setColor();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/Colors.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/Colors.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTheme */ "./resources/admin/views/theme/ColorTheme.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Colors',
  components: {
    ColorTheme: _ColorTheme__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./resources/admin/views/theme/ColorTheme.vue":
/*!****************************************************!*\
  !*** ./resources/admin/views/theme/ColorTheme.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorTheme_vue_vue_type_template_id_3afb0fc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTheme.vue?vue&type=template&id=3afb0fc5& */ "./resources/admin/views/theme/ColorTheme.vue?vue&type=template&id=3afb0fc5&");
/* harmony import */ var _ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorTheme.vue?vue&type=script&lang=js& */ "./resources/admin/views/theme/ColorTheme.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ColorTheme_vue_vue_type_template_id_3afb0fc5___WEBPACK_IMPORTED_MODULE_0__.render,
  _ColorTheme_vue_vue_type_template_id_3afb0fc5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/theme/ColorTheme.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/theme/ColorView.vue":
/*!***************************************************!*\
  !*** ./resources/admin/views/theme/ColorView.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorView_vue_vue_type_template_id_40d31259___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorView.vue?vue&type=template&id=40d31259& */ "./resources/admin/views/theme/ColorView.vue?vue&type=template&id=40d31259&");
/* harmony import */ var _ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorView.vue?vue&type=script&lang=js& */ "./resources/admin/views/theme/ColorView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ColorView_vue_vue_type_template_id_40d31259___WEBPACK_IMPORTED_MODULE_0__.render,
  _ColorView_vue_vue_type_template_id_40d31259___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/theme/ColorView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/theme/Colors.vue":
/*!************************************************!*\
  !*** ./resources/admin/views/theme/Colors.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Colors_vue_vue_type_template_id_f92290e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors.vue?vue&type=template&id=f92290e2& */ "./resources/admin/views/theme/Colors.vue?vue&type=template&id=f92290e2&");
/* harmony import */ var _Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colors.vue?vue&type=script&lang=js& */ "./resources/admin/views/theme/Colors.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Colors_vue_vue_type_template_id_f92290e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Colors_vue_vue_type_template_id_f92290e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/theme/Colors.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/theme/ColorTheme.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/admin/views/theme/ColorTheme.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorTheme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorTheme.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/theme/ColorView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/admin/views/theme/ColorView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/theme/Colors.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/admin/views/theme/Colors.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Colors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/Colors.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/theme/ColorTheme.vue?vue&type=template&id=3afb0fc5&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/views/theme/ColorTheme.vue?vue&type=template&id=3afb0fc5& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_3afb0fc5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_3afb0fc5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_3afb0fc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorTheme.vue?vue&type=template&id=3afb0fc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorTheme.vue?vue&type=template&id=3afb0fc5&");


/***/ }),

/***/ "./resources/admin/views/theme/ColorView.vue?vue&type=template&id=40d31259&":
/*!**********************************************************************************!*\
  !*** ./resources/admin/views/theme/ColorView.vue?vue&type=template&id=40d31259& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_40d31259___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_40d31259___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_40d31259___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorView.vue?vue&type=template&id=40d31259& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorView.vue?vue&type=template&id=40d31259&");


/***/ }),

/***/ "./resources/admin/views/theme/Colors.vue?vue&type=template&id=f92290e2&":
/*!*******************************************************************************!*\
  !*** ./resources/admin/views/theme/Colors.vue?vue&type=template&id=f92290e2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_f92290e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_f92290e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_f92290e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Colors.vue?vue&type=template&id=f92290e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/Colors.vue?vue&type=template&id=f92290e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorTheme.vue?vue&type=template&id=3afb0fc5&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorTheme.vue?vue&type=template&id=3afb0fc5& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "CCol",
    { staticClass: "mb-4", attrs: { xl: "2", md: "4", sm: "6", xs: "12" } },
    [
      _c("div", {
        class: ["theme-color w-75 rounded mb-3", _vm.color],
        style: { paddingTop: "75%" }
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("ColorView")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorView.vue?vue&type=template&id=40d31259&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/ColorView.vue?vue&type=template&id=40d31259& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("table", { staticClass: "w-100" }, [
    _c("tbody", [
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("HEX:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.hexColor))
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("RGB:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.bgColor))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/Colors.vue?vue&type=template&id=f92290e2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/theme/Colors.vue?vue&type=template&id=f92290e2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-drop" } }),
              _vm._v(" Theme colors\n    ")
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
                  _c("ColorTheme", { attrs: { color: "bg-primary" } }, [
                    _c("h6", [_vm._v("Brand Primary Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-secondary" } }, [
                    _c("h6", [_vm._v("Brand Secondary Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-success" } }, [
                    _c("h6", [_vm._v("Brand Success Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-danger" } }, [
                    _c("h6", [_vm._v("Brand Danger Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-warning" } }, [
                    _c("h6", [_vm._v("Brand Warning Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-info" } }, [
                    _c("h6", [_vm._v("Brand Info Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-light" } }, [
                    _c("h6", [_vm._v("Brand Light Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-dark" } }, [
                    _c("h6", [_vm._v("Brand Dark Color")])
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
              _c("CIcon", { attrs: { name: "cil-drop" } }),
              _vm._v(" Grays\n    ")
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
                  _c("ColorTheme", { attrs: { color: "bg-gray-100" } }, [
                    _c("h6", [_vm._v("Brand 100 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-200" } }, [
                    _c("h6", [_vm._v("Brand 200 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-300" } }, [
                    _c("h6", [_vm._v("Brand 300 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-400" } }, [
                    _c("h6", [_vm._v("Brand 400 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-500" } }, [
                    _c("h6", [_vm._v("Brand 500 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-600" } }, [
                    _c("h6", [_vm._v("Brand 600 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-700" } }, [
                    _c("h6", [_vm._v("Brand 700 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-800" } }, [
                    _c("h6", [_vm._v("Brand 800 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-900" } }, [
                    _c("h6", [_vm._v("Brand 900 Color")])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);