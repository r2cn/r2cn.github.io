webpackJsonp([15],{

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

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(522)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(524),
	  /* template */
	  __webpack_require__(525),
	  /* scopeId */
	  "data-v-0ae4dc36",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\checkout\\view.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] view.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0ae4dc36", Component.options)
	  } else {
	    hotAPI.reload("data-v-0ae4dc36", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(523);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("5ff65f70", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ae4dc36&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ae4dc36&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.order-bar[data-v-0ae4dc36] {\n  color: #99a9bf;\n  font-size: 18px;\n  padding: 20px 0;\n}\n.order-bar .right[data-v-0ae4dc36] {\n  font-size: 14px;\n}\n.button-bar .form-filter[data-v-0ae4dc36] {\n  float: right;\n}\n.button-bar .form-filter .el-form-item[data-v-0ae4dc36] {\n  margin-bottom: 0;\n}\n.button-bar .form-filter .el-select[data-v-0ae4dc36] {\n  width: 110px;\n}\n.submit-con[data-v-0ae4dc36] {\n  padding: 20px 0;\n  color: #475669;\n}\n.submit-con .orange[data-v-0ae4dc36] {\n  color: #ff6600;\n}\n.submit-con .left[data-v-0ae4dc36],\n.submit-con .middle[data-v-0ae4dc36] {\n  line-height: 36px;\n  height: 36px;\n}\n.submit-con .middle[data-v-0ae4dc36] {\n  text-align: center;\n}\n.submit-con .middle .tooltips[data-v-0ae4dc36] {\n  padding-left: 10px;\n}\n.submit-con .right[data-v-0ae4dc36] {\n  text-align: right;\n}\n", ""]);

	// exports


/***/ },

/***/ 524:
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

	exports.default = {
	    data: function data() {
	        var crumbs = [{ path: '/', name: '首页' }, { path: '/checkout', name: '结算单' }, { path: '/checkout/view/', name: '结算记录' }];
	        var formSearch = {
	            status: ''
	        };
	        var tableData = [];
	        var orderData = {};
	        var pmsSettlementAmountVo = {};
	        var receiptId = '';
	        return {
	            crumbs: crumbs,
	            formSearch: formSearch,
	            tableData: tableData,
	            orderData: orderData,
	            pmsSettlementAmountVo: pmsSettlementAmountVo,
	            receiptId: receiptId
	        };
	    },

	    methods: {
	        onSubmit: function onSubmit() {
	            this.fetchData();
	        },
	        handleBackToList: function handleBackToList() {
	            this.$router.push({ path: '/checkout' });
	        },
	        handleExport: function handleExport() {
	            utils.export('/pms/settlement/result/list/export.do', { receiptId: this.receiptId, settlementReceiver: this.formSearch.status });
	        },
	        handlePrint: function handlePrint() {
	            this.$router.push({ name: 'checkoutViewPrint', params: { id: this.receiptId } });
	        },
	        handleView: function handleView(id, settlementReceiver) {
	            this.$router.push({ name: 'checkoutViewMaterial', params: { id: this.receiptId, role: settlementReceiver, userid: id } });
	        },
	        fetchData: function fetchData() {
	            var _this = this;

	            var requestData = { "receiptId": this.receiptId, "settlementReceiver": this.formSearch.status };
	            this.$http({
	                url: '/pms/settlement/order/data.do',
	                method: 'POST',
	                body: { requestData: JSON.stringify(requestData) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.orderData.purchaseTime = data.result.purchaseTime;
	                    _this.orderData.purchaseNo = data.result.purchaseNo;
	                    _this.orderData.receivedTime = data.result.receivedTime;
	                    _this.orderData.receiverName = data.result.receiverName;
	                } else {
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	            this.$http({
	                url: '/pms/settlement/result/list.do',
	                method: 'POST',
	                body: { requestData: JSON.stringify(requestData) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.tableData = data.result.pmsSettlementResultVos;
	                    _this.pmsSettlementAmountVo = data.result.pmsSettlementAmountVo;
	                } else {
	                    _this.tableData = [];
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	        }
	    },
	    created: function created() {
	        this.receiptId = this.$route.params.id;
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

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('common-layout', {
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
	  }, [_c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("结算记录")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_c('div', {
	    staticClass: "grid-content right"
	  }, [_c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_vm._v("采购单号：" + _vm._s(_vm.orderData.purchaseNo))]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_vm._v("结清时间：" + _vm._s(_vm._f("moment")(_vm.orderData.receivedTime)))])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_vm._v("结算人：" + _vm._s(_vm.orderData.receiverName))])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
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
	      "placeholder": "结算对象"
	    },
	    domProps: {
	      "value": (_vm.formSearch.status)
	    },
	    on: {
	      "change": _vm.onSubmit,
	      "input": function($event) {
	        _vm.formSearch.status = $event
	      }
	    }
	  }, [_c('el-option', {
	    attrs: {
	      "label": "供应商",
	      "value": "1"
	    }
	  }), _vm._v(" "), _c('el-option', {
	    attrs: {
	      "label": "采购员",
	      "value": "0"
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.onSubmit
	    }
	  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "data": _vm.tableData,
	      "height": "380",
	      "border": ""
	    }
	  }, [_c('el-table-column', {
	    attrs: {
	      "type": "index",
	      "label": "序",
	      "width": "55"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "supplierName",
	      "label": "供应商名称",
	      "min-width": "120"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchaserName",
	      "label": "采购员",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "totalPayment",
	      "label": "需付金额",
	      "min-width": "100"
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
	      "prop": "realPayment",
	      "label": "实付金额",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("number")(_vm.row.realPayment)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "settlementTypeName",
	      "label": "支付方式",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "settlementReceiver",
	      "label": "结算对象",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-tag', {
	            attrs: {
	              "type": _vm.row.settlementReceiver == 0 ? 'primary' : 'success',
	              "close-transition": ""
	            }
	          }, [_vm._v(_vm._s(_vm.row.settlementReceiver == 0 ? '采购员' : '供应商'))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "settlementTime",
	      "label": "结算时间",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("moment")(_vm.row.settlementTime)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "操作",
	      "min-width": "80",
	      "fixed": "right"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-button', {
	            attrs: {
	              "type": "primary",
	              "size": "small"
	            },
	            on: {
	              "click": function($event) {
	                _vm.handleView(_vm.row.id, _vm.row.settlementReceiver)
	              }
	            }
	          }, [_vm._v("查看")])
	        
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
	  }, [_vm._v("\n\t\t\t\t\t\t\t\t总计："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.totalPayment))]), _vm._v("元\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 4
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t\t实付："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.payment))]), _vm._v("元\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 4
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t\t数量："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.pmsSettlementAmountVo.purchaseCount))]), _vm._v("项\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_c('div', {
	    staticClass: "grid-content right"
	  }, [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.handleBackToList
	    }
	  }, [_vm._v("返回列表")])], 1)])], 1)], 1)], 1)])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0ae4dc36", module.exports)
	  }
	}

/***/ }

});