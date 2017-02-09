webpackJsonp([12],{

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(505)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(507),
	  /* template */
	  __webpack_require__(508),
	  /* scopeId */
	  "data-v-996f8782",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\receives\\direct.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] direct.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-996f8782", Component.options)
	  } else {
	    hotAPI.reload("data-v-996f8782", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(506);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("0bd7fb4b", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-996f8782&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./direct.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-996f8782&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./direct.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.el-tabs[data-v-996f8782] {\n  display: block;\n}\n.search-bar[data-v-996f8782] {\n  padding-top: 0;\n}\n.search-bar .el-button[data-v-996f8782] {\n  float: left;\n}\n.search-bar .form-inline[data-v-996f8782] {\n  float: right;\n}\n", ""]);

	// exports


/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	exports.default = {
		data: function data() {
			var crumbs = [{ path: '/', name: '首页' }, { path: '/receives/direct', name: '直接新增收货单' }];
			var formSearch = {
				date: '',
				status: '',
				purchaseno: ''
			};
			var tableData = [];
			var pickerOptions = {
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
			};
			var pageData = {
				pageNo: 1,
				pageSize: 10,
				totalCount: 0,
				totalPage: 1
			};
			return {
				crumbs: crumbs,
				formSearch: formSearch,
				tableData: tableData,
				pickerOptions: pickerOptions,
				pageData: pageData,
				loading: true
			};
		},

		methods: {
			/*提交列表查询*/
			createRO: function createRO() {
				this.$router.push({ path: '/receives/direct/create' });
			},
			onSubmit: function onSubmit() {
				this.fetchData();
			},
			handleView: function handleView(id) {
				this.$router.push({ name: 'receivesView', params: { id: id, source: 2 } });
			},

			/*分页回调*/
			handleSizeChange: function handleSizeChange(val) {
				this.pageData.pageSize = val;
				this.fetchData();
			},
			handleCurrentChange: function handleCurrentChange(val) {
				this.pageData.pageNo = val;
				this.fetchData();
			},

			/*表格过滤列回调*/
			filterStatus: function filterStatus(value, row) {
				return row.receiptStatus === value;
			},
			fetchData: function fetchData() {
				var _this = this;

				this.loading = true;
				var requestData = { "filter": this.formSearch.purchaseno, "pageNo": this.pageData.pageNo, "pageSize": this.pageData.pageSize };
				requestData.startTime = this.formSearch.date.length > 0 && this.formSearch.date[0] ? (0, _moment2.default)(this.formSearch.date[0]).format('YYYY-MM-DD') : '';
				requestData.endTime = this.formSearch.date.length > 1 && this.formSearch.date[1] ? (0, _moment2.default)(this.formSearch.date[1]).format('YYYY-MM-DD') : '';
				this.$http({
					url: '/pms/receipt/direct/list.do',
					method: 'POST',
					body: { requestData: JSON.stringify(requestData) },
					emulateJSON: true
				}).then(function (res) {
					return res.body;
				}).then(function (data) {
					if (data.code == 200) {
						_this.tableData = data.result.pmsReceiptOrderVos;
						_this.pageData.pageNo = data.result.pageNo;
						_this.pageData.pageSize = data.result.pageSize;
						_this.pageData.totalCount = data.result.totalCount;
						_this.pageData.totalPage = data.result.totalPage;
					} else {
						_this.tableData = [];
						_this.$message({
							message: data.message,
							type: 'warning'
						});
					}
					_this.loading = false;
				});
			},

			/*TABS页面切换回调*/
			handleChangeTab: function handleChangeTab(tab, event) {
				if (tab.name == 1) {
					this.$router.push({ path: '/receives' });
				}
			}
		},
		created: function created() {
			this.fetchData();
		},

		computed: (0, _vuex.mapState)({ user: function user(state) {
				return state.user;
			} })
	};

/***/ },

/***/ 508:
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
	    staticClass: "tabs-bar"
	  }, [_c('el-tabs', {
	    attrs: {
	      "type": "card",
	      "active-name": "2"
	    },
	    on: {
	      "tab-click": _vm.handleChangeTab
	    }
	  }, [_c('el-tab-pane', {
	    attrs: {
	      "label": "根据采购单收货",
	      "name": "1"
	    }
	  }), _vm._v(" "), _c('el-tab-pane', {
	    attrs: {
	      "label": "直接新增收货单",
	      "name": "2"
	    }
	  })], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "search-bar clearfix"
	  }, [_c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": _vm.createRO
	    }
	  }, [_vm._v("新增收货单")]), _vm._v(" "), _c('el-form', {
	    staticClass: "form-inline",
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
	      "placeholder": "选择收货日期范围",
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
	      "placeholder": "请输入采购单号"
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
	  }, [_c('el-table', {
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
	      "prop": "purchaseNo",
	      "label": "采购单号",
	      "min-width": "150"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "receiveTime",
	      "label": "收货日期",
	      "min-width": "120"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm._f("moment")(_vm.row.receiveTime)))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "label": "收货人",
	      "min-width": "120"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_vm._v(_vm._s(_vm.row.receiverName ? _vm.row.receiverName : '--'))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "receiptStatus",
	      "label": "状态",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-tag', {
	            attrs: {
	              "type": _vm.row.receiptStatus == 0 ? 'primary' : 'success',
	              "close-transition": ""
	            }
	          }, [_vm._v(_vm._s(_vm.row.receiptStatus == 0 ? '未收货' : _vm.row.status == 1 ? '已发货未收货' : '已收货'))])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "操作",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('span', [_c('el-button', {
	            attrs: {
	              "type": "primary",
	              "size": "small"
	            },
	            on: {
	              "click": function($event) {
	                _vm.handleView(_vm.row.receiptId)
	              }
	            }
	          }, [_vm._v("查看")])], 1)
	        
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
	  })], 1)], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-996f8782", module.exports)
	  }
	}

/***/ }

});