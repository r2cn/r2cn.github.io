webpackJsonp([28],{

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

/***/ 458:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by zhaochengtao on 2016/12/14.
	 */
	module.exports = {
	    materialAdd: '/pms/management/material/add.do',
	    materialDelete: '/pms/management/material/delete.do',
	    materialEdit: '/pms/management/material/edit.do',
	    materialShow: '/pms/management/material/show.do',
	    materialList: '/pms/management/material/list.do',
	    materialUnitList: '/pms/management/materialUnit/list.do',
	    materialTypeList: '/pms/management/materialType/list.do',
	    materialUnitAndTypeList: '/pms/management/materialUnitAndType/list.do',
	    materialSettleTypeList: '/pms/management/materialSettleType/list.do',
	    materialUnitAdd: '/pms/management/materialUnit/add.do',
	    materialUnitEdit: '/pms/management/materialUnit/edit.do',
	    materialUnitShow: '/pms/management/materialUnit/show.do',
	    materialUnitDelete: '/pms/management/materialUnit/delete.do',
	    materialTypeAdd: '/pms/management/materialType/add.do',
	    materialTypeDelete: '/pms/management/materialType/delete.do',
	    materialTypeShow: '/pms/management/materialType/show.do',
	    materialTypeEdit: '/pms/management/materialType/edit.do',
	    supplierList: '/pms/management/supplier/list.do',
	    supplierDelete: '/pms/management/supplier/delete.do',
	    supplierEdit: '/pms/management/supplier/edit.do',
	    supplierAdd: '/pms/management/supplier/add.do',
	    supplierShow: '/pms/management/supplier/show.do',
	    userList: '/pms/user/list.do',
	    userDelete: '/pms/user/delete.do',
	    userAddView: '/pms/user/addView.do',
	    userEditView: '/pms/user/editView.do',
	    userEdit: '/pms/user/edit.do',
	    userAdd: '/pms/user/add.do',
	    roleList: '/pms/role/list.do',
	    roleDelete: '/pms/role/delete.do',
	    roleAddView: '/pms/role/addView.do',
	    roleEditView: '/pms/role/editView.do',
	    roleEdit: '/pms/role/edit.do',
	    roleAdd: '/pms/role/add.do',
	    /*报表*/
	    settleOrder: '/pms/report/settle/order.do',
	    settleDetail: '/pms/report/settle/order/detail.do',
	    settleType: '/pms/report/type/list.do',
	    settleTypeDetail: '/pms/report/settle/type/list/detail.do',
	    materialReport: '/pms/report/material/list.do',
	    materialReportDetail: '/pms/report/material/list/detail.do',
	    purchaseList: '/pms/report/purchase/list.do',
	    purchaseListDetail: '/pms/report/purchase/list/detail.do',
	    settlement: '/pms/report/settlement/list.do',
	    settlementDetail: '/pms/report/settlement/list/detail.do'
	};

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(587)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(589),
	  /* template */
	  __webpack_require__(590),
	  /* scopeId */
	  "data-v-facdab94",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\reports\\materialReports\\materialListDetail.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] materialListDetail.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-facdab94", Component.options)
	  } else {
	    hotAPI.reload("data-v-facdab94", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(588);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("38a2b5e2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-facdab94&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./materialListDetail.vue", function() {
	     var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-facdab94&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./materialListDetail.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.rowSpan span[data-v-facdab94] {\n  line-height: 60px;\n}\n.button-bar .el-button[data-v-facdab94] {\n  float: right;\n}\n.button-bar .el-row[data-v-facdab94] {\n  float: left;\n  line-height: 36px;\n}\n", ""]);

	// exports


/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(utils, urls) {'use strict';

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

	exports.default = {
		data: function data() {
			var crumbs = [{ path: '/', name: '首页' }, { path: '', name: '报表' }, { path: '/reports/materialReports/materialList', name: '物料类别汇总' }, { path: '/reports/materialReports/materialListDetail', name: '物料类别详情' }];
			return {
				crumbs: crumbs,
				formSearch: {
					date: [],
					status: '',
					purchaseno: ''
				},
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick: function onClick(picker) {
							var end = new Date();
							var start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick: function onClick(picker) {
							var end = new Date();
							var start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick: function onClick(picker) {
							var end = new Date();
							var start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				filter: '',
				detail: [],
				totalAmount: 0,
				pageData: {
					pageNo: 1,
					pageSize: 10,
					totalCount: 0,
					totalPage: 1
				}
			};
		},

		methods: {
			onSubmit: function onSubmit() {
				this.refresh();
			},

			/*分页回调*/
			handleSizeChange: function handleSizeChange(val) {
				console.log('\u6BCF\u9875 ' + val + ' \u6761');
				this.pageData.pageSize = val;
				this.refresh();
			},
			handleCurrentChange: function handleCurrentChange(val) {
				console.log('\u5F53\u524D\u9875: ' + val);
				this.pageData.pageNo = val;
				this.refresh();
			},
			refresh: function refresh() {
				var requestData = {
					"pageNo": this.pageData.pageNo,
					"pageSize": this.pageData.pageSize,
					"materialTypeId": this.$route.query.id
				};
				utils.post(urls.materialReportDetail, requestData, this).then(function (data) {
					if (data.code == 200) {
						this.pageData.pageNo = data.result.pageNo;
						this.pageData.pageSize = data.result.pageSize;
						this.pageData.totalCount = data.result.totalCount;
						this.pageData.totalPage = data.result.totalPage;
						this.detail = data.result.pmsMaterialTypeReportDetailVos;
						this.totalAmount = data.result.totalAmount;
					}
				});
			},
			handleExport: function handleExport() {
				utils.export('/pms/report/material/type/detail/export.do', { "materialTypeId": this.$route.query.id });
			}
		},
		created: function created() {
			this.refresh();
		},

		computed: (0, _vuex.mapState)({ user: function user(state) {
				return state.user;
			} })
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(457), __webpack_require__(458)))

/***/ },

/***/ 590:
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
	    staticClass: "search-bar"
	  }, [_c('el-form', {
	    staticClass: "demo-form-inline",
	    attrs: {
	      "inline": true,
	      "model": _vm.formSearch
	    }
	  }, [_c('el-form-item', [_c('el-date-picker', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formSearch.date),
	      expression: "formSearch.date"
	    }],
	    staticStyle: {
	      "width": "220px"
	    },
	    attrs: {
	      "type": "daterange",
	      "align": "right",
	      "placeholder": "选择日期范围",
	      "picker-options": _vm.pickerOptions
	    },
	    domProps: {
	      "value": (_vm.formSearch.date)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formSearch.date = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formSearch.purchaseno),
	      expression: "formSearch.purchaseno"
	    }],
	    attrs: {
	      "placeholder": "请输入物料名称"
	    },
	    domProps: {
	      "value": (_vm.formSearch.purchaseno)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formSearch.purchaseno = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.onSubmit
	    }
	  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "table-content"
	  }, [_c('div', {
	    staticClass: "button-bar"
	  }, [_c('el-button', {
	    on: {
	      "click": _vm.handleExport
	    }
	  }, [_vm._v("导出")]), _vm._v(" "), _c('el-row', [_c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_vm._v("总计："), _c('span', {
	    staticClass: "orange"
	  }, [_vm._v("¥" + _vm._s(_vm._f("number")(_vm.totalAmount)))])])], 1)], 1), _vm._v(" "), _c('el-table', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "data": _vm.detail,
	      "height": "442",
	      "border": ""
	    }
	  }, [_c('el-table-column', {
	    attrs: {
	      "label": "序号",
	      "width": "70"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm.$index + 1 + _vm.pageData.pageSize * (_vm.pageData.pageNo - 1)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialName",
	      "label": "物料名称",
	      "min-width": "120"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialUnitName",
	      "label": "进货单位",
	      "min-width": "120"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "purchasePrice",
	      "label": "采购均价",
	      "min-width": "80"
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
	      "min-width": "80"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "payment",
	      "label": "结算金额",
	      "min-width": "80"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("number")(_vm.row.payment)))])
	        
	      },
	      staticRenderFns: []
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "pagination"
	  }, [_c('el-pagination', {
	    attrs: {
	      "current-page": _vm.pageData.pageNo,
	      "page-sizes": [10, 20, 30, 40],
	      "page-size": _vm.pageData.pageSize,
	      "layout": "total, sizes, prev, pager, next, jumper",
	      "total": _vm.pageData.totalCount
	    },
	    on: {
	      "size-change": _vm.handleSizeChange,
	      "current-change": _vm.handleCurrentChange
	    }
	  })], 1)], 1)])]), _vm._v(" "), _c('transition', {
	    on: {
	      "leave": _vm.refresh
	    }
	  }, [_c('router-view')], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-facdab94", module.exports)
	  }
	}

/***/ }

});