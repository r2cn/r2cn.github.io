webpackJsonp([40],{

/***/ 457:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by zhaochengtao on 2016/12/14.
	 */
	module.exports = {
	    post: function post(url, params, _this) {
	        var http = _this.$http || this.$http;
	        var message = _this.$message || this.$message;
	        var requestData = params ? { requestData: JSON.stringify(params) } : null;
	        return http({
	            method: 'POST',
	            url: url,
	            body: requestData,
	            emulateJSON: true
	        }).then(function (res) {
	            return res.body;
	        }).then(function (data) {
	            if (data.code != 200) {
	                message({
	                    message: data.message,
	                    type: 'warning'
	                });
	            }
	            return data;
	        });
	    },
	    postJSON: function postJSON(url, params, _this) {
	        var http = _this.$http || this.$http;
	        var message = _this.$message || this.$message;
	        var requestData = params ? params : null;
	        return http({
	            method: 'POST',
	            url: url,
	            body: requestData,
	            emulateJSON: true
	        }).then(function (res) {
	            return res.body;
	        }).then(function (data) {
	            if (data.code != 200) {
	                message({
	                    message: data.message,
	                    type: 'warning'
	                });
	            }
	            return data;
	        });
	    },

	    /*
	    * {url} String 请求的报表导出URL
	    * {params} Object 请求参数
	    * */
	    export: function _export(url, params) {
	        var requestUrl = url;
	        for (var key in params) {
	            if (requestUrl.indexOf("?") == -1) {
	                requestUrl = requestUrl + '?' + key + '=' + params[key];
	            } else {
	                requestUrl = requestUrl + '&' + key + '=' + params[key];
	            }
	        }
	        window.location.href = requestUrl;
	    },
	    message: function message() {}
	};

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(643)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(645),
	  /* template */
	  __webpack_require__(646),
	  /* scopeId */
	  "data-v-530cf5a4",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\settings\\handleMateriel\\template\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-530cf5a4", Component.options)
	  } else {
	    hotAPI.reload("data-v-530cf5a4", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(644);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("2d774e64", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-530cf5a4&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-530cf5a4&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.po-dialog .el-upload[data-v-530cf5a4] {\n  margin: 0 auto;\n}\n.po-dialog .el-alert[data-v-530cf5a4] {\n  width: 360px;\n  margin: 0 auto;\n  margin-top: 10px;\n}\n", ""]);

	// exports


/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(utils) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(436);

	exports.default = {
	    data: function data() {
	        return {
	            importedData: [], //导入内容
	            dialogVisible: '',
	            showTemplateLoading: true,
	            templateUrl: '',
	            uploadDescShow: false,
	            uploadDesc: ''
	        };
	    },

	    methods: {
	        close: function close() {
	            this.$router.push('/settings/handleMateriel/index');
	        },

	        /*导入相关*/
	        handleRemove: function handleRemove(file, fileList) {
	            //importedData.clear()
	            this.importedData = [];
	        },
	        handleSuccess: function handleSuccess(response, file, fileList) {
	            if (response.code == 200) {
	                //here array concat/append to importedData
	                utils.postJSON('/pms/import/material/template/query.do', { uploadId: response.result }, this).then(function (data) {
	                    this.uploadDescShow = true;
	                    this.uploadDesc = '\u672C\u6B21\u5BFC\u5165\u7269\u6599' + data.result.pmsUpload.totalNum + '\u4E2A\uFF0C\u5176\u4E2D\u6210\u529F' + data.result.pmsUpload.successNum + '\u4E2A\uFF0C\u5931\u8D25' + data.result.pmsUpload.errorNum + '\u4E2A';
	                });
	            } else {
	                this.$message({
	                    message: response.message,
	                    type: 'warning'
	                });
	            }
	        },
	        handleError: function handleError(err, response, file) {
	            this.$message({
	                message: err,
	                type: 'warning'
	            });
	            console.log(err);
	        },
	        handleCancelUpload: function handleCancelUpload() {
	            this.dialogVisible = false;
	            this.uploadDescShow = false;
	            //remove all importedData
	            this.importedData = [];
	        },
	        handleConfirmUpload: function handleConfirmUpload() {
	            this.dialogVisible = false;
	            this.uploadDescShow = false;
	            //concat all importedData to tableData
	        },
	        loadTemplate: function loadTemplate() {
	            var _this = this;

	            //加载导入模板地址
	            this.$http({
	                url: '/pms/download/material/template/export.do',
	                method: 'POST'
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.showTemplateLoading = false;
	                    _this.templateUrl = data.result;
	                } else {
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	        }
	    },
	    created: function created() {
	        this.loadTemplate();
	    },

	    computed: (0, _vuex.mapState)({ user: function user(state) {
	            return state.user;
	        } })
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(457)))

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-dialog', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dialogVisible),
	      expression: "dialogVisible"
	    }],
	    staticClass: "po-dialog",
	    attrs: {
	      "title": "导入物料",
	      "size": "small"
	    },
	    domProps: {
	      "value": (_vm.dialogVisible)
	    },
	    on: {
	      "close": _vm.close,
	      "input": function($event) {
	        _vm.dialogVisible = $event
	      }
	    }
	  }, [_c('el-upload', {
	    attrs: {
	      "action": "/pms/import/material/template.do",
	      "type": "drag",
	      "multiple": false,
	      "on-remove": _vm.handleRemove,
	      "on-success": _vm.handleSuccess,
	      "on-error": _vm.handleError
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-upload"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "el-dragger__text"
	  }, [_vm._v("将Excel文件拖到此处，或"), _c('em', [_vm._v("点击上传")]), _c('p', [_vm._v("每次导入最多200条")])]), _vm._v(" "), _c('div', {
	    staticClass: "el-upload__tip",
	    slot: "tip"
	  }, [(_vm.showTemplateLoading) ? _c('div', {
	    staticClass: "upload-tips"
	  }, [_c('i', {
	    staticClass: "el-icon-loading"
	  }), _vm._v("正在生成导入模板...")]) : _vm._e(), _vm._v(" "), (!_vm.showTemplateLoading) ? _c('div', {
	    staticClass: "upload-tips"
	  }, [_vm._v("仅支持Excel格式，首次使用请先"), _c('a', {
	    attrs: {
	      "href": _vm.templateUrl
	    }
	  }, [_vm._v("下载模板")])]) : _vm._e()])]), _vm._v(" "), (_vm.uploadDescShow) ? _c('el-alert', {
	    attrs: {
	      "title": "导入完成",
	      "type": "success",
	      "description": _vm.uploadDesc,
	      "show-icon": ""
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "dialog-footer",
	    slot: "footer"
	  }, [_c('el-button', {
	    on: {
	      "click": _vm.handleCancelUpload
	    }
	  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.handleConfirmUpload
	    }
	  }, [_vm._v("确认导入")])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-530cf5a4", module.exports)
	  }
	}

/***/ }

});