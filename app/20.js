webpackJsonp([20],{

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

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(547)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(549),
	  /* template */
	  __webpack_require__(550),
	  /* scopeId */
	  "data-v-04c2e0de",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\checkout\\detail.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-04c2e0de", Component.options)
	  } else {
	    hotAPI.reload("data-v-04c2e0de", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(548);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("679c12f9", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04c2e0de&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04c2e0de&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.order-bar[data-v-04c2e0de] {\n  color: #99a9bf;\n  font-size: 18px;\n  padding: 14px 0;\n}\n.order-bar .right[data-v-04c2e0de] {\n  font-size: 14px;\n}\n.tabs-bar[data-v-04c2e0de] {\n  padding: 0;\n}\n.el-tabs[data-v-04c2e0de] {\n  display: block;\n}\n.button-bar[data-v-04c2e0de] {\n  border: none !important;\n  padding: 0 0 12px 0 !important;\n}\n.button-bar .form-filter[data-v-04c2e0de] {\n  float: right;\n}\n.button-bar .form-filter .el-form-item[data-v-04c2e0de] {\n  margin-bottom: 0;\n}\n.button-bar .form-filter .el-select[data-v-04c2e0de] {\n  width: 110px;\n}\n.submit-con[data-v-04c2e0de] {\n  padding: 20px 0;\n  color: #475669;\n}\n.submit-con .orange[data-v-04c2e0de] {\n  color: #ff6600;\n}\n.submit-con .left[data-v-04c2e0de],\n.submit-con .middle[data-v-04c2e0de] {\n  line-height: 36px;\n  height: 36px;\n}\n.submit-con .middle[data-v-04c2e0de] {\n  text-align: center;\n}\n.submit-con .middle .tooltips[data-v-04c2e0de] {\n  padding-left: 10px;\n}\n.submit-con .right[data-v-04c2e0de] {\n  text-align: right;\n}\n", ""]);

	// exports


/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(utils) {'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _vuex = __webpack_require__(436);

	var _moment = __webpack_require__(307);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
					data: function data() {
									var crumbs = [{ path: '/', name: '首页' }, { path: '/checkout', name: '结算单' }, { path: '/checkout/detail', name: '与供应商结算' }];
									var formSearch = {
													status: ''
									};
									var tableData = [];
									var orderData = {};
									var pmsSettlementAmountVo = {};
									return {
													crumbs: crumbs,
													formSearch: formSearch,
													tableData: tableData,
													orderData: orderData,
													pmsSettlementAmountVo: pmsSettlementAmountVo,
													loading: true,
													receiptId: "",
													role: "1"
									};
					},

					methods: {
									/*提交列表查询*/
									onSubmit: function onSubmit() {
													this.fetchData();
									},

									/*TABS页面切换回调*/
									handleChangeTab: function handleChangeTab(tab, event) {
													if (tab.name == 1) {
																	this.$router.push({ name: 'checkoutDetail', params: { id: this.receiptId, role: "1" } });
													}
													if (tab.name == 0) {
																	this.$router.push({ name: 'checkoutDetail', params: { id: this.receiptId, role: "0" } });
													}
													this.receiptId = this.$route.params.id;
													this.role = this.$route.params.role;
													if (this.role == 1) {
																	this.crumbs = [{ path: '/', name: '首页' }, { path: '/checkout', name: '结算单' }, { path: '/checkout/detail', name: '与供应商结算' }];
													} else {
																	this.crumbs = [{ path: '/', name: '首页' }, { path: '/checkout', name: '结算单' }, { path: '/checkout/detail', name: '与采购员结算' }];
													}
													this.fetchData();
									},
									handleExport: function handleExport() {
													utils.export('/pms/settlement/order/show/export.do', { receiptId: this.receiptId, settlementReceiver: this.role });
									},
									handlePrint: function handlePrint() {
													this.$router.push({ name: 'checkoutPrint', params: { id: this.receiptId, role: this.role } });
									},
									handleView: function handleView(userid) {
													this.$router.push({ name: 'checkoutViewMaterial', params: { id: this.receiptId, role: this.role, userid: userid } });
									},
									handleCheckout: function handleCheckout(userid) {
													this.$router.push({ name: 'doCheckout', params: { id: this.receiptId, role: this.role, userid: userid } });
									},
									handleBackToList: function handleBackToList() {
													this.$router.push({ path: '/checkout' });
									},
									fetchData: function fetchData() {
													var _this = this;

													this.loading = true;
													var requestData = { "receiptId": this.receiptId, "settlementStatus": this.formSearch.status, "settlementReceiver": this.role };
													//获取订单信息
													this.$http({
																	url: '/pms/settlement/order/data.do',
																	method: 'POST',
																	body: { requestData: JSON.stringify(requestData) },
																	emulateJSON: true
													}).then(function (res) {
																	return res.body;
													}).then(function (data) {
																	if (data.code == 200) {
																					_this.orderData = data.result;
																	} else {
																					_this.$message({
																									message: data.message,
																									type: 'warning'
																					});
																	}
													});
													//获取列表信息
													this.$http({
																	url: '/pms/settlement/order/show.do',
																	method: 'POST',
																	body: { requestData: JSON.stringify(requestData) },
																	emulateJSON: true
													}).then(function (res) {
																	return res.body;
													}).then(function (data) {
																	if (data.code == 200) {
																					_this.tableData = data.result.pmsSettlementOrderVos;
																					_this.pmsSettlementAmountVo = data.result.pmsSettlementAmountVo;
																	} else {
																					_this.tableData = [];
																					_this.$message({
																									message: data.message,
																									type: 'warning'
																					});
																	}
																	_this.loading = false;
													});
									}
					},
					created: function created() {
									this.receiptId = this.$route.params.id;
									this.role = this.$route.params.role;
									if (this.role == 1) {
													this.crumbs = [{ path: '/', name: '首页' }, { path: '/checkout', name: '结算单' }, { path: '/checkout/detail', name: '与供应商结算' }];
									} else {
													this.crumbs = [{ path: '/', name: '首页' }, { path: '/checkout', name: '结算单' }, { path: '/checkout/detail', name: '与采购员结算' }];
									}
									this.fetchData();
					},

					computed: (0, _vuex.mapState)({
									user: function user(state) {
													return state.user;
									}
					})
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(457)))

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('common-layout', {
	    attrs: {
	      "crumbs": _vm.crumbs
	    }
	  }, [_c('div', {
	    staticClass: "content",
	    slot: "content"
	  }, [_c('div', {
	    staticClass: "table-content"
	  }, [_c('div', {
	    staticClass: "order-bar"
	  }, [_c('el-row', {
	    attrs: {
	      "justify": "space-between"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 6
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("结算")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 18
	    }
	  }, [_c('div', {
	    staticClass: "grid-content right"
	  }, [_c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }, [_vm._v("采购单号：" + _vm._s(_vm.orderData.purchaseNo))]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }, [_vm._v("开单人：" + _vm._s(_vm.orderData.purchaserName))]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }, [_vm._v("开单时间：" + _vm._s(_vm._f("moment")(_vm.orderData.purchaseTime)))])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }, [_vm._v("收货人：" + _vm._s(_vm.orderData.receiverName))]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }, [_vm._v("收货时间：" + _vm._s(_vm._f("moment")(_vm.orderData.receivedTime)))])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_vm._v("备注：" + _vm._s(_vm.orderData.remark))])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "tabs-bar"
	  }, [_c('el-tabs', {
	    attrs: {
	      "type": "card",
	      "active-name": _vm.role
	    },
	    on: {
	      "tab-click": _vm.handleChangeTab
	    }
	  }, [_c('el-tab-pane', {
	    attrs: {
	      "label": "与供应商结算",
	      "name": "1"
	    }
	  }), _vm._v(" "), _c('el-tab-pane', {
	    attrs: {
	      "label": "与采购员结算",
	      "name": "0"
	    }
	  })], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "button-bar"
	  }, [_c('el-button', {
	    on: {
	      "click": _vm.handleExport
	    }
	  }, [_vm._v("导出")]), _vm._v(" "), _c('el-button', {
	    on: {
	      "click": _vm.handlePrint
	    }
	  }, [_vm._v("打印")]), _vm._v(" "), _c('el-form', {
	    staticClass: "form-filter",
	    attrs: {
	      "inline": true,
	      "model": _vm.formSearch
	    }
	  }, [_c('el-form-item', [_c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formSearch.status),
	      expression: "formSearch.status"
	    }],
	    attrs: {
	      "clearable": "",
	      "placeholder": "状态"
	    },
	    domProps: {
	      "value": (_vm.formSearch.status)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formSearch.status = $event
	      }
	    }
	  }, [_c('el-option', {
	    attrs: {
	      "label": "未结清",
	      "value": "0"
	    }
	  }), _vm._v(" "), _c('el-option', {
	    attrs: {
	      "label": "已结清",
	      "value": "1"
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.onSubmit
	    }
	  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
	    directives: [{
	      name: "loading",
	      rawName: "v-loading",
	      value: (_vm.loading),
	      expression: "loading"
	    }],
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "element-loading-text": "玩命加载中",
	      "data": _vm.tableData,
	      "height": "340",
	      "border": ""
	    }
	  }, [_c('el-table-column', {
	    attrs: {
	      "type": "index",
	      "label": "序号",
	      "width": "100"
	    }
	  }), _vm._v(" "), (_vm.role == 1) ? _c('el-table-column', {
	    attrs: {
	      "prop": "name",
	      "label": "供应商名称",
	      "min-width": "120"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.role == 0) ? _c('el-table-column', {
	    attrs: {
	      "prop": "name",
	      "label": "采购员姓名",
	      "min-width": "120"
	    }
	  }) : _vm._e(), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchaseCount",
	      "label": "采购项数",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "totalPayment",
	      "label": "合计金额（元）",
	      "min-width": "150"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("number")(_vm.row.totalPayment)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "payment",
	      "label": "实付金额（元）",
	      "min-width": "150"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("number")(_vm.row.payment)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "settlementStatus",
	      "label": "状态",
	      "min-width": "120"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-tag', {
	            attrs: {
	              "type": _vm.row.settlementStatus == 0 ? 'primary' : 'success',
	              "close-transition": ""
	            }
	          }, [_vm._v(_vm._s(_vm.row.settlementStatus == 0 ? '未结清' : '已结清'))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "操作",
	      "min-width": "120",
	      "fixed": "right"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [(_vm.row.settlementStatus == 0) ? _c('el-button', {
	            attrs: {
	              "type": "orange",
	              "size": "small"
	            },
	            on: {
	              "click": function($event) {
	                _vm.handleCheckout(_vm.row.id)
	              }
	            }
	          }, [_vm._v("结算")]) : _vm._e(), _vm._v(" "), (_vm.row.settlementStatus == 1) ? _c('el-button', {
	            attrs: {
	              "type": "primary",
	              "size": "small"
	            },
	            on: {
	              "click": function($event) {
	                _vm.handleView(_vm.row.id)
	              }
	            }
	          }, [_vm._v("查看")]) : _vm._e()], 1)
	        
	      },
	      staticRenderFns: []
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "submit-con"
	  }, [_c('el-row', {
	    staticClass: "row-bg",
	    attrs: {
	      "type": "flex",
	      "justify": "space-between"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 4
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t总计："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.totalPayment))]), _vm._v("元\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 4
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t已付："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.payment))]), _vm._v("元\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 4
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t未付："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.nonPayment))]), _vm._v("元\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 4
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t数量："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.purchaseCount))]), _vm._v("项\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }, [_c('div', {
	    staticClass: "grid-content right"
	  }, [_c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": _vm.handleBackToList
	    }
	  }, [_vm._v("确认")])], 1)])], 1)], 1)], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-04c2e0de", module.exports)
	  }
	}

/***/ }

});