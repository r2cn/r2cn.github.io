webpackJsonp([9],{

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

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(488)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(490),
	  /* template */
	  __webpack_require__(491),
	  /* scopeId */
	  "data-v-3611947b",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\receives\\view.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] view.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3611947b", Component.options)
	  } else {
	    hotAPI.reload("data-v-3611947b", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(489);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("5ac32422", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3611947b&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3611947b&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.order-bar[data-v-3611947b] {\n  color: #99a9bf;\n  font-size: 18px;\n  padding: 20px 0;\n}\n.order-bar .right[data-v-3611947b] {\n  font-size: 14px;\n}\n.submit-con[data-v-3611947b] {\n  padding: 20px 0;\n  color: #475669;\n}\n.submit-con .orange[data-v-3611947b] {\n  color: #ff6600;\n}\n.submit-con .left[data-v-3611947b],\n.submit-con .middle[data-v-3611947b] {\n  line-height: 36px;\n  height: 36px;\n}\n.submit-con .middle[data-v-3611947b] {\n  text-align: center;\n}\n.submit-con .middle .tooltips[data-v-3611947b] {\n  padding-left: 10px;\n}\n.submit-con .right[data-v-3611947b] {\n  text-align: right;\n}\n", ""]);

	// exports


/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(utils) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(436);

	exports.default = {
	    data: function data() {
	        var crumbs = [{ path: '/', name: '首页' }, { path: '/receives', name: '收货单' }, { path: '/receives/view/', name: '收货记录' }];
	        var tableData = [];
	        var orderData = {};
	        var receiptId = '';
	        var source = 1;
	        return {
	            crumbs: crumbs,
	            tableData: tableData,
	            orderData: orderData,
	            receiptId: receiptId,
	            source: source
	        };
	    },

	    methods: {
	        handleBackToList: function handleBackToList() {
	            if (this.source == 1) {
	                this.$router.push({ path: '/receives' });
	            } else {
	                this.$router.push({ path: '/receives/direct' });
	            }
	        },
	        handleExport: function handleExport() {
	            utils.export('/pms/receipt/order/detail/export.do', { "receiptId": this.receiptId });
	        },
	        handlePrint: function handlePrint() {
	            this.$router.push({ name: 'receivesPrint', params: { id: this.receiptId } });
	        },
	        handleEdit: function handleEdit() {
	            this.$router.push({ name: 'receivesEdit', params: { id: this.receiptId, source: this.source } });
	        },
	        fetchData: function fetchData() {
	            var _this = this;

	            var requestData = { "receiptId": this.receiptId };
	            this.$http({
	                url: '/pms/receipt/order/detail.do',
	                method: 'POST',
	                body: { requestData: JSON.stringify(requestData) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.tableData = data.result.pmsReceiptVo.pmsReceiptDetailVos;
	                    _this.orderData.createUserName = data.result.pmsReceiptVo.createUserName;
	                    _this.orderData.purchaseNo = data.result.pmsReceiptVo.purchaseNo;
	                    _this.orderData.purchaseRemark = data.result.pmsReceiptVo.purchaseRemark;
	                    _this.orderData.createTime = data.result.pmsReceiptVo.createTime;
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
	        this.source = this.$route.params.source;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(457)))

/***/ },

/***/ 491:
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
	  }, [_vm._v("收货记录")])]), _vm._v(" "), _c('el-col', {
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
	  }, [_vm._v("开单时间：" + _vm._s(_vm._f("moment")(_vm.orderData.createTime)))])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_vm._v("收货时间：" + _vm._s(_vm.orderData.createTime))])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_vm._v("开单人：" + _vm._s(_vm.orderData.createUserName))])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "button-bar"
	  }, [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.handleEdit
	    }
	  }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
	    on: {
	      "click": _vm.handleExport
	    }
	  }, [_vm._v("导出")]), _vm._v(" "), _c('el-button', {
	    on: {
	      "click": _vm.handlePrint
	    }
	  }, [_vm._v("打印")])], 1), _vm._v(" "), _c('el-table', {
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
	      "width": "80"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialName",
	      "label": "物料名称",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialTypeName",
	      "label": "类别",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchasePrice",
	      "label": "进价",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("number")(_vm.row.purchasePrice)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchaseCount",
	      "label": "采购数量",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "receivedCount",
	      "label": "收货数量",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialUnitName",
	      "label": "单位",
	      "min-width": "80"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "totalFee",
	      "label": "合计",
	      "min-width": "120"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("number")(_vm.row.totalFee)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "payStatus",
	      "label": "是否付款",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-tag', {
	            attrs: {
	              "type": _vm.row.payStatus == 0 ? 'primary' : 'success',
	              "close-transition": ""
	            }
	          }, [_vm._v(_vm._s(_vm.row.payStatus == 0 ? '未付款' : '已付款'))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchaserName",
	      "label": "采购员",
	      "min-width": "120"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "supplierName",
	      "label": "供应商",
	      "min-width": "120"
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
	      "span": 8
	    }
	  }, [_c('div', {
	    staticClass: "grid-content left"
	  }, [_vm._v("\n\t\t\t\t\t\t\t\t数量："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v(_vm._s(_vm.tableData.length))]), _vm._v("项\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 8
	    }
	  }), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 8
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
	     require("vue-hot-reload-api").rerender("data-v-3611947b", module.exports)
	  }
	}

/***/ }

});