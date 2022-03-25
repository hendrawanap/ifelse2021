"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_views_pages_QuizQuestions_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": () => (/* binding */ ScriptLoader)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": () => (/* binding */ getTinymce)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": () => (/* binding */ bindHandlers),
/* harmony export */   "bindModelHandlers": () => (/* binding */ bindModelHandlers),
/* harmony export */   "initEditor": () => (/* binding */ initEditor),
/* harmony export */   "isValidKey": () => (/* binding */ isValidKey),
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "isTextarea": () => (/* binding */ isTextarea),
/* harmony export */   "mergePlugins": () => (/* binding */ mergePlugins),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    created: function () {
        this.elementId = this.$props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": () => (/* binding */ editorProps)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizQuestions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizQuestions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/admin/api/index.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "QuizQuestions",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      addErrors: {
        question: false,
        answerA: false,
        answerB: false,
        answerC: false,
        answerD: false,
        answerE: false
      },
      addQuestion: '',
      addAnswerKey: 'A',
      addChoices: [{
        label: '',
        value: 'A'
      }, {
        label: '',
        value: 'B'
      }, {
        label: '',
        value: 'C'
      }, {
        label: '',
        value: 'D'
      }, {
        label: '',
        value: 'E'
      }],
      addIsUploading: false,
      collapse: false,
      collapseAdd: false,
      quizzes: [],
      dataset: [],
      selectedID: [],
      addQuizId: null,
      isMounted: true
    };
  },
  methods: {
    updateAnswerKey: function updateAnswerKey(v) {
      this.addAnswerKey = v.target.value;
    },
    getSelected: function getSelected(id) {
      return this.selectedID.includes(id) ? 'success' : 'error';
    },
    updateQuizId: function updateQuizId(v) {
      console.log(v.target.value);
      this.addQuizId = v.target.value;
    },
    rowClicked: function rowClicked(item, index, colName, e) {
      var id = item.ID;

      if (!this.selectedID.includes(id)) {
        this.selectedID.push(id);
      } else {
        this.selectedID = this.selectedID.filter(function (d) {
          return d !== id;
        });
      }
    },
    getDataset: function getDataset() {
      return this.dataset.map(function (d) {
        var choice = d.choices.find(function (c) {
          return d.answer_key === c.key;
        });
        return {
          ID: d.id,
          Pertanyaan: d.mce_question,
          Jawaban: choice ? choice.key + '. ' + choice.value : 'Error',
          'Quiz Terkait': d.quiz.label
        };
      });
    },
    resetFields: function resetFields() {
      var _this = this;

      this.isMounted = false;
      this.addQuestion = '';
      this.addAnswerKey = 'A';
      this.addChoices = [{
        label: '',
        value: 'A'
      }, {
        label: '',
        value: 'B'
      }, {
        label: '',
        value: 'C'
      }, {
        label: '',
        value: 'D'
      }, {
        label: '',
        value: 'E'
      }];
      setTimeout(function () {
        _this.isMounted = true;
      }, 100);
    },
    publishQuestion: function publishQuestion(e) {
      e.preventDefault();
      this.addIsUploading = true;
      var data = {
        mce_question: this.addQuestion,
        answer_key: this.addAnswerKey,
        choices: this.addChoices.map(function (c) {
          return {
            key: c.value,
            value: c.label
          };
        }),
        quiz_id: this.addQuizId
      };
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.post(_api__WEBPACK_IMPORTED_MODULE_0__.default.quizQuestionAdd, data).then(function (r) {
        if (r.data.status === 'success') {
          var currQuiz = self.quizzes.find(function (q) {
            return q.id === data.quiz_id;
          });
          var newQuestion = {
            ID: r.data.id,
            Pertanyaan: data.mce_question,
            Jawaban: self.addAnswerKey + '. ' + data.choices.find(function (c) {
              return c.key === self.addAnswerKey;
            }).value,
            'Quiz Terkait': currQuiz ? currQuiz.label : 'Error'
          };
          self.dataset.push(newQuestion);
          self.addIsUploading = false;
          self.resetFields();
        }
      })["catch"](function (e) {
        self.addIsUploading = false;
      });
    },
    removeQuestionIDs: function removeQuestionIDs() {
      var data = {
        question_id: this.selectedID
      };
      var self = this;
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.setHeader('Content-Type', 'application/json');
      _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.post(_api__WEBPACK_IMPORTED_MODULE_0__.default.quizQuestionRemove, data).then(function (r) {
        if (r.data.status === 'success') {
          self.dataset = self.dataset.filter(function (d) {
            return !self.selectedID.includes(d.id);
          });
        }

        self.selectedID = [];
      })["catch"](function (e) {
        console.log(e);
      });
    },
    editorInit: function editorInit() {
      return {
        height: 500,
        menubar: false,
        plugins: ['lists link image paste help wordcount'],
        toolbar: 'undo redo | formatselect | link image | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
      };
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.quizQuestions).then(function (r) {
      if (r.data.error) return;
      _this2.dataset = r.data.map(function (d) {
        var choice = d.choices.find(function (c) {
          return d.answer_key === c.key;
        });
        return {
          ID: d.id,
          Pertanyaan: d.mce_question,
          Jawaban: choice ? choice.key + '. ' + choice.value : 'Error',
          'Quiz Terkait': d.quiz.label
        };
      });
    });
    _js_store_Connection__WEBPACK_IMPORTED_MODULE_2__.default.get(_api__WEBPACK_IMPORTED_MODULE_0__.default.quiz).then(function (r) {
      _this2.quizzes = r.data;
    });
  }
});

/***/ }),

/***/ "./resources/admin/views/pages/QuizQuestions.vue":
/*!*******************************************************!*\
  !*** ./resources/admin/views/pages/QuizQuestions.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizQuestions_vue_vue_type_template_id_2f5820e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true& */ "./resources/admin/views/pages/QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true&");
/* harmony import */ var _QuizQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizQuestions.vue?vue&type=script&lang=js& */ "./resources/admin/views/pages/QuizQuestions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuizQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuizQuestions_vue_vue_type_template_id_2f5820e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuizQuestions_vue_vue_type_template_id_2f5820e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f5820e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/views/pages/QuizQuestions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/views/pages/QuizQuestions.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/admin/views/pages/QuizQuestions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizQuestions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizQuestions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/admin/views/pages/QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/admin/views/pages/QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestions_vue_vue_type_template_id_2f5820e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestions_vue_vue_type_template_id_2f5820e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestions_vue_vue_type_template_id_2f5820e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/views/pages/QuizQuestions.vue?vue&type=template&id=2f5820e4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isMounted
    ? _c(
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
                [_vm._v("\n            Tambah Pertanyaan\n        ")]
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
                        "border-color": _vm.addIsUploading ? "warning" : ""
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
                            { on: { submit: _vm.publishQuestion } },
                            [
                              _c(
                                "CRow",
                                { staticClass: "mb-3" },
                                [
                                  _c("CCol", { attrs: { sm: "3" } }, [
                                    _vm._v(
                                      "\n                               Pertanyaan\n                           "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "9" } },
                                    [
                                      _c("Editor", {
                                        attrs: {
                                          "api-key":
                                            "1p6b2ohxm4p6m2d0mwuljypf214adlk57nglwpu4le4fsx5a",
                                          init: _vm.editorInit(),
                                          "output-format": "html"
                                        },
                                        model: {
                                          value: _vm.addQuestion,
                                          callback: function($$v) {
                                            _vm.addQuestion = $$v
                                          },
                                          expression: "addQuestion"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.addChoices, function(choice) {
                                return _c("CInput", {
                                  key: choice.value,
                                  attrs: {
                                    label: "Jawaban " + choice.value + ":",
                                    required: "",
                                    horizontal: ""
                                  },
                                  model: {
                                    value: choice.label,
                                    callback: function($$v) {
                                      _vm.$set(choice, "label", $$v)
                                    },
                                    expression: "choice.label"
                                  }
                                })
                              }),
                              _vm._v(" "),
                              _c("CSelect", {
                                attrs: {
                                  label: "Jawaban Benar:",
                                  horizontal: "",
                                  required: "",
                                  value: _vm.addAnswerKey,
                                  options: _vm.addChoices.map(function(c) {
                                    return {
                                      label: c.value + ". " + c.label,
                                      value: c.value
                                    }
                                  })
                                },
                                on: { change: _vm.updateAnswerKey }
                              }),
                              _vm._v(" "),
                              _c("CSelect", {
                                attrs: {
                                  label: "Quiz Terkait :",
                                  placeholder: "Pilih Quiz yang sesuai",
                                  horizontal: "",
                                  required: "",
                                  value: _vm.addQuizId,
                                  options: _vm.quizzes.map(function(q) {
                                    return {
                                      label: q.label + "ID: " + q.id,
                                      value: q.id
                                    }
                                  })
                                },
                                on: { change: _vm.updateQuizId }
                              }),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  attrs: {
                                    type: "submit",
                                    size: "sm",
                                    color: "success"
                                  }
                                },
                                [_vm._v("Publish")]
                              ),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  attrs: {
                                    type: "button",
                                    size: "sm",
                                    color: "danger"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.resetFields()
                                    }
                                  }
                                },
                                [_vm._v("Reset")]
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
                    _vm._v(
                      "\n                Pertanyaan Tersedia\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CButton",
                        {
                          staticClass: "mb-2",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.collapse = !_vm.collapse
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Filter Quiz\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.selectedID.length
                        ? [
                            _c(
                              "CButton",
                              {
                                staticClass: "mr-2 float-right",
                                attrs: { type: "button", color: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.removeQuestionIDs()
                                  }
                                }
                              },
                              [_vm._v("Hapus")]
                            ),
                            _vm._v(" "),
                            _c(
                              "CDropdown",
                              {
                                staticClass: "mr-1 float-right",
                                attrs: {
                                  "toggler-text": "Tambahkan ke..",
                                  color: "primary"
                                }
                              },
                              _vm._l(_vm.quizzes, function(quiz) {
                                return _c("CDropdownItem", { key: quiz.id }, [
                                  _vm._v(_vm._s(quiz.title))
                                ])
                              }),
                              1
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "CCollapse",
                        { attrs: { show: _vm.collapse, duration: 400 } },
                        [
                          _c(
                            "CCard",
                            { attrs: { "body-wrapper": "" } },
                            [
                              _c("CCardText", [
                                _vm._v("Collapse contents Here")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CDataTable", {
                        attrs: {
                          wrap: "",
                          hover: "",
                          fixed: "",
                          fields: [
                            "ID",
                            "Pertanyaan",
                            "Jawaban",
                            "Quiz Terkait"
                          ],
                          items: _vm.dataset,
                          "items-per-page": 10,
                          pagination: "",
                          "clickable-rows": "",
                          "column-filter": { external: false, lazy: true }
                        },
                        on: { "row-clicked": _vm.rowClicked },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "ID",
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
                                            color: _vm.selectedID.includes(
                                              item.ID
                                            )
                                              ? "success"
                                              : ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(item.ID) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          3428157242
                        )
                      }),
                      _vm._v(" "),
                      _vm.selectedID.length
                        ? [
                            _c(
                              "CButton",
                              {
                                staticClass: "mr-2 float-right",
                                attrs: { type: "button", color: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.removeQuestionIDs()
                                  }
                                }
                              },
                              [_vm._v("Hapus")]
                            ),
                            _vm._v(" "),
                            _c(
                              "CDropdown",
                              {
                                staticClass: "mr-1 float-right",
                                attrs: {
                                  "toggler-text": "Tambahkan ke..",
                                  color: "primary"
                                }
                              },
                              _vm._l(_vm.quizzes, function(quiz) {
                                return _c("CDropdownItem", { key: quiz.id }, [
                                  _vm._v(_vm._s(quiz.title))
                                ])
                              }),
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCardText",
                              { staticClass: "float-left mr-3" },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.selectedID.length) +
                                    " terpilih\n                    "
                                )
                              ]
                            )
                          ]
                        : _vm._e()
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);