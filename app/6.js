webpackJsonp([6],{

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(471)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(473),
	  /* template */
	  __webpack_require__(474),
	  /* scopeId */
	  "data-v-5b4f3698",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\purchase\\print.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] print.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5b4f3698", Component.options)
	  } else {
	    hotAPI.reload("data-v-5b4f3698", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(472);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("1b7ff10a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b4f3698&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b4f3698&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.table-content[data-v-5b4f3698] {\n  width: 800px;\n  margin: 0 auto;\n}\n.order-bar[data-v-5b4f3698] {\n  color: #99a9bf;\n  font-size: 18px;\n  padding: 20px 0;\n}\n.order-bar .right[data-v-5b4f3698] {\n  font-size: 14px;\n}\n", ""]);

	// exports


/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(436);

	exports.default = {
	    data: function data() {
	        var tableData = [];
	        var orderData = {};
	        return {
	            tableData: tableData,
	            orderData: orderData
	        };
	    },

	    methods: {
	        fetchData: function fetchData() {
	            var _this = this;

	            var purchaseId = this.$route.params.id;
	            var requestData = { "purchaseId": purchaseId };
	            this.$http({
	                url: '/pms/purchase/order/show.do',
	                method: 'POST',
	                body: { requestData: JSON.stringify(requestData) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.tableData = data.result.pmsPurchaseVo.pmsPurchaseDetailVos;
	                    _this.orderData.createUserName = data.result.pmsPurchaseVo.createUserName;
	                    _this.orderData.purchaseNo = data.result.pmsPurchaseVo.purchaseNo;
	                    _this.orderData.purchaseRemark = data.result.pmsPurchaseVo.purchaseRemark;
	                    _this.orderData.createTime = data.result.pmsPurchaseVo.createTime;
	                } else {
	                    _this.tableData = [];
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	        },
	        handleBackToList: function handleBackToList() {
	            this.$router.push({ path: '/purchase' });
	        },
	        handlePrint: function handlePrint() {
	            window.print();
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

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "content"
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
	  }, [_vm._v("采购单")])]), _vm._v(" "), _c('el-col', {
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
	  }, [_vm._v("开单人：" + _vm._s(_vm.orderData.createUserName))])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_vm._v("备注：" + _vm._s(_vm.orderData.purchaseRemark))])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "button-bar"
	  }, [_c('el-button', {
	    on: {
	      "click": _vm.handleBackToList
	    }
	  }, [_vm._v("返回")]), _vm._v(" "), _c('el-button', {
	    on: {
	      "click": _vm.handlePrint
	    }
	  }, [_vm._v("打印")])], 1), _vm._v(" "), _c('el-table', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "data": _vm.tableData,
	      "border": ""
	    }
	  }, [_c('el-table-column', {
	    attrs: {
	      "type": "index",
	      "label": "序号",
	      "width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialName",
	      "label": "物料名称",
	      "min-width": "150"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialTypeName",
	      "label": "物料类别",
	      "min-width": "150"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchaseCount",
	      "label": "采购数量",
	      "min-width": "200"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialUnitName",
	      "label": "进货单位",
	      "min-width": "120"
	    }
	  })], 1)], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5b4f3698", module.exports)
	  }
	}

/***/ }

});