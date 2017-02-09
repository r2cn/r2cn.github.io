webpackJsonp([2],{

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(440)
	__webpack_require__(442)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(444),
	  /* template */
	  __webpack_require__(445),
	  /* scopeId */
	  "data-v-f2a2bca8",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\index\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f2a2bca8", Component.options)
	  } else {
	    hotAPI.reload("data-v-f2a2bca8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(441);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("11696692", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f2a2bca8!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f2a2bca8!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.indexDialog .el-dialog__body {\n  padding: 0!important;\n}\n.indexDialog .el-dialog__body embed {\n  display: block;\n}\n", ""]);

	// exports


/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(443);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("2bc1d9be", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f2a2bca8&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f2a2bca8&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.pmsc-body .content[data-v-f2a2bca8] {\n  background: transparent;\n}\n.el-row[data-v-f2a2bca8] {\n  padding-left: 10px;\n  padding-right: 20px;\n  margin-bottom: 20px;\n}\n.el-row[data-v-f2a2bca8]:first-child {\n  margin-top: 20px;\n}\n.el-row[data-v-f2a2bca8]:last-child {\n  margin-bottom: 0;\n}\n.el-col[data-v-f2a2bca8] {\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n          border-radius: 4px;\n  margin-bottom: 20px;\n}\n.grid-content[data-v-f2a2bca8] {\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n          border-radius: 4px;\n  min-height: 36px;\n}\n.row-bg[data-v-f2a2bca8] {\n  padding: 10px 0;\n  background-color: #f9fafc;\n}\n.grid-content[data-v-f2a2bca8] {\n  height: 150px;\n  color: #fff;\n}\n.grid-content[data-v-f2a2bca8]:hover {\n  opacity: 0.8;\n}\n.grid-content .amount[data-v-f2a2bca8] {\n  padding-top: 35px;\n  text-align: center;\n  font-size: 38px;\n  width: 100%;\n  overflow: hidden;\n}\n.grid-content .amount .unit[data-v-f2a2bca8] {\n  font-size: 16px;\n  padding: 0 10px;\n}\n.grid-content .title[data-v-f2a2bca8] {\n  padding-top: 25px;\n  font-size: 18px;\n  text-align: center;\n}\n.bg-green[data-v-f2a2bca8] {\n  background: #6fd600;\n  -webkit-box-shadow: 0 0 1px 2px #64c000;\n     -moz-box-shadow: 0 0 1px 2px #64c000;\n          box-shadow: 0 0 1px 2px #64c000;\n}\n.bg-ligthgreen[data-v-f2a2bca8] {\n  background: #00d7c1;\n  -webkit-box-shadow: 0 0 1px 2px #00c1ad;\n     -moz-box-shadow: 0 0 1px 2px #00c1ad;\n          box-shadow: 0 0 1px 2px #00c1ad;\n}\n.bg-blue[data-v-f2a2bca8] {\n  background: #02b9ff;\n  -webkit-box-shadow: 0 0 1px 2px #02a6e5;\n     -moz-box-shadow: 0 0 1px 2px #02a6e5;\n          box-shadow: 0 0 1px 2px #02a6e5;\n}\n.bg-purple[data-v-f2a2bca8] {\n  background: #9f6dfa;\n  -webkit-box-shadow: 0 0 1px 2px #8f62e1;\n     -moz-box-shadow: 0 0 1px 2px #8f62e1;\n          box-shadow: 0 0 1px 2px #8f62e1;\n}\n.bg-red[data-v-f2a2bca8] {\n  background: #ff6249;\n  -webkit-box-shadow: 0 0 1px 2px #e55842;\n     -moz-box-shadow: 0 0 1px 2px #e55842;\n          box-shadow: 0 0 1px 2px #e55842;\n}\n.bg-orange[data-v-f2a2bca8] {\n  background: #ffc20c;\n  -webkit-box-shadow: 0 0 1px 2px #e5ae0b;\n     -moz-box-shadow: 0 0 1px 2px #e5ae0b;\n          box-shadow: 0 0 1px 2px #e5ae0b;\n}\n.teachVideo[data-v-f2a2bca8] {\n  position: fixed;\n  bottom: 15px;\n  right: 30px;\n  display: block;\n  width: 100px;\n  height: 100px;\n  background-color: #02b9ff;\n  -webkit-border-radius: 100%;\n     -moz-border-radius: 100%;\n          border-radius: 100%;\n  color: #fff;\n  line-height: 100px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n  -webkit-box-shadow: 5px 5px 20px #777;\n     -moz-box-shadow: 5px 5px 20px #777;\n          box-shadow: 5px 5px 20px #777;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(436);

	exports.default = {
	    data: function data() {
	        var crumbs = [{ path: '/', name: '首页' }];
	        return {
	            crumbs: crumbs,
	            tableData: [],
	            dialogVisible: false,
	            colorList: ["bg-green", "bg-ligthgreen", "bg-blue", "bg-purple", "bg-red", "bg-orange"] //可用的背景颜色列表
	        };
	    },

	    methods: {
	        showDialog: function showDialog() {
	            this.dialogVisible = true;
	        },
	        closeDialog: function closeDialog() {
	            this.dialogVisible = false;
	            this.$refs.video1.pause();
	        },
	        fetchData: function fetchData() {
	            var _this = this;

	            //获取订单信息
	            this.$http({
	                url: '/pms/index/show.do',
	                method: 'POST'
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    (function () {
	                        _this.tableData = data.result;
	                        var modules = _this.user.pmsModuleList;
	                        var firstIndex = -1;
	                        _this.tableData.forEach(function (n, key) {
	                            switch (key) {
	                                case 0:
	                                    //PMS005
	                                    firstIndex = modules.findIndex(function (module) {
	                                        return module.pmsModuleCode == 'PMS005';
	                                    });
	                                    if (firstIndex > -1) {
	                                        n.path = '/reports/settleOrder/settleOrderList';
	                                    } else {
	                                        n.path = '';
	                                    }
	                                    break;
	                                case 1:
	                                    //PMS004
	                                    firstIndex = modules.findIndex(function (module) {
	                                        return module.pmsModuleCode == 'PMS004';
	                                    });
	                                    if (firstIndex > -1) {
	                                        n.path = '/checkout';
	                                    } else {
	                                        n.path = '';
	                                    }
	                                    break;
	                                case 2:
	                                    //PMS002
	                                    firstIndex = modules.findIndex(function (module) {
	                                        return module.pmsModuleCode == 'PMS002';
	                                    });
	                                    if (firstIndex > -1) {
	                                        n.path = '/purchase';
	                                    } else {
	                                        n.path = '';
	                                    }
	                                    break;
	                                case 3:
	                                    //PMS003
	                                    firstIndex = modules.findIndex(function (module) {
	                                        return module.pmsModuleCode == 'PMS003';
	                                    });
	                                    if (firstIndex > -1) {
	                                        n.path = '/receives';
	                                    } else {
	                                        n.path = '';
	                                    }
	                                    break;
	                                case 4:
	                                    //PMS006
	                                    firstIndex = modules.findIndex(function (module) {
	                                        return module.pmsModuleCode == 'PMS006';
	                                    });
	                                    if (firstIndex > -1) {
	                                        n.path = '/settings/handlePurchase/index';
	                                    } else {
	                                        n.path = '';
	                                    }
	                                    break;
	                                case 5:
	                                    //PMS006
	                                    firstIndex = modules.findIndex(function (module) {
	                                        return module.pmsModuleCode == 'PMS006';
	                                    });
	                                    if (firstIndex > -1) {
	                                        n.path = '/settings/handleMateriel/index';
	                                    } else {
	                                        n.path = '';
	                                    }
	                                    break;
	                            }
	                        });
	                    })();
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
	        this.fetchData();
	    },

	    computed: (0, _vuex.mapState)({
	        user: function user(state) {
	            return state.user;
	        }
	    })
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('common-layout', {
	    attrs: {
	      "crumbs": _vm.crumbs
	    }
	  }, [_c('div', {
	    staticClass: "content",
	    slot: "content"
	  }, [_c('el-row', {
	    attrs: {
	      "gutter": 20
	    }
	  }, _vm._l((_vm.tableData), function(item, index) {
	    return _c('el-col', {
	      attrs: {
	        "span": 8
	      }
	    }, [_c('router-link', {
	      attrs: {
	        "to": item.path
	      }
	    }, [_c('div', {
	      staticClass: "grid-content",
	      class: index < _vm.colorList.length ? _vm.colorList[index] : _vm.colorList[index % _vm.colorList.length]
	    }, [_c('div', {
	      staticClass: "amount"
	    }, [(item.prefix) ? _c('span', {
	      staticClass: "unit"
	    }, [_vm._v(_vm._s(item.tag))]) : _vm._e(), _vm._v(_vm._s(item.num)), (!item.prefix) ? _c('span', {
	      staticClass: "unit"
	    }, [_vm._v(_vm._s(item.tag))]) : _vm._e()]), _vm._v(" "), _c('div', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(item.title))])])])], 1)
	  })), _vm._v(" "), _c('span', {
	    staticClass: "teachVideo",
	    on: {
	      "click": _vm.showDialog
	    }
	  }, [_vm._v("教学视频")])], 1)]), _vm._v(" "), _c('el-dialog', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dialogVisible),
	      expression: "dialogVisible"
	    }],
	    staticClass: "indexDialog",
	    attrs: {
	      "title": "教学视频",
	      "size": "large"
	    },
	    domProps: {
	      "value": (_vm.dialogVisible)
	    },
	    on: {
	      "close": _vm.closeDialog,
	      "input": function($event) {
	        _vm.dialogVisible = $event
	      }
	    }
	  }, [_c('video', {
	    ref: "video1",
	    staticClass: "edui-faked-video",
	    attrs: {
	      "id": "video1",
	      "src": "http://cloud.video.taobao.com/play/u/144283918/p/1/e/6/t/1/50003146422.mp4",
	      "width": "100%",
	      "height": "453",
	      "controls": "",
	      "autobuffer": "",
	      "autoplay": ""
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f2a2bca8", module.exports)
	  }
	}

/***/ }

});