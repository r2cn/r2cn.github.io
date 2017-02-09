webpackJsonp([45],{

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

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(664)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(666),
	  /* template */
	  __webpack_require__(667),
	  /* scopeId */
	  "data-v-12ce95d9",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\settings\\handleUser\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12ce95d9", Component.options)
	  } else {
	    hotAPI.reload("data-v-12ce95d9", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(665);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("0e9f79e1", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12ce95d9&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12ce95d9&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(utils, urls) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vuex = __webpack_require__(436);

	exports.default = {
		data: function data() {
			var crumbs = [{ path: '/', name: '首页' }, { path: '', name: '基础管理' }, { path: '/settings/handleUser/index', name: '员工管理' }];
			return {
				crumbs: crumbs,
				username: '',
				userList: [],
				pageData: {
					pageNo: 1,
					pageSize: 10,
					totalCount: 0,
					totalPage: 1
				}
			};
		},

		methods: {
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
			addUser: function addUser() {
				this.$router.push({
					path: '/settings/handleUser/add/index',
					query: {
						name: 'add'
					}
				});
			},
			userInfo: function userInfo(userId) {
				this.$router.push({
					path: '/settings/handleUser/add/index',
					query: {
						name: 'info',
						userId: userId
					}
				});
			},
			onSubmit: function onSubmit() {},

			/*删除员工*/
			deleteUser: function deleteUser(userId) {
				var that = this;
				this.$confirm('确认删除该员工?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(function () {
					var requestData = { "userIdStr": userId };
					utils.postJSON(urls.userDelete, requestData, that).then(function (data) {
						if (data.code == 200) {
							that.$message({
								message: "删除成功",
								type: 'success'
							});
							that.refresh();
						} else {
							that.$message({
								message: data.message,
								type: 'warning'
							});
						}
					});
				}, function () {});
			},
			refresh: function refresh() {
				var requestData = {
					"username": this.username ? this.username : '',
					"pageNo": this.pageData.pageNo,
					"pageSize": this.pageData.pageSize
				};
				utils.postJSON(urls.userList, requestData, this).then(function (data) {
					if (data.code == 200) {
						this.userList = data.result.userList;
						this.pageData.pageNo = data.result.pageNo;
						this.pageData.pageSize = data.result.pageSize;
						this.pageData.totalCount = data.result.totalCount;
						this.pageData.totalPage = data.result.totalPage;
					}
				});
			}
		},
		created: function created() {
			this.refresh();
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(457), __webpack_require__(458)))

/***/ },

/***/ 667:
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
	      "inline": true
	    }
	  }, [_c('el-form-item', [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.username),
	      expression: "username"
	    }],
	    attrs: {
	      "placeholder": "请输入姓名/账号/手机号"
	    },
	    domProps: {
	      "value": (_vm.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.username = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.refresh
	    }
	  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "table-content"
	  }, [_c('div', {
	    staticClass: "button-bar"
	  }, [_c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": _vm.addUser
	    }
	  }, [_vm._v("添加")])], 1), _vm._v(" "), _c('el-table', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "data": _vm.userList,
	      "height": "440",
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
	      "prop": "userName",
	      "label": "员工账号",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "userRealname",
	      "label": "员工姓名",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "roleName",
	      "label": "员工岗位",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "userPhone",
	      "label": "手机号码",
	      "min-width": "100"
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
	                _vm.userInfo(_vm.row.userId)
	              }
	            }
	          }, [_vm._v("查看")]), _vm._v(" "), _c('el-button', {
	            attrs: {
	              "type": "primary",
	              "size": "small"
	            },
	            on: {
	              "click": function($event) {
	                _vm.deleteUser(_vm.row.userId)
	              }
	            }
	          }, [_vm._v("删除")])], 1)
	        
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
	     require("vue-hot-reload-api").rerender("data-v-12ce95d9", module.exports)
	  }
	}

/***/ }

});