webpackJsonp([1],{

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(431)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(435),
	  /* template */
	  __webpack_require__(437),
	  /* scopeId */
	  "data-v-e10150fa",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\login\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e10150fa", Component.options)
	  } else {
	    hotAPI.reload("data-v-e10150fa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(432);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("3df42c98", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e10150fa&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e10150fa&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.login[data-v-e10150fa] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #3a4d62;\n  background-image: url(" + __webpack_require__(433) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  -moz-background-size: cover;\n    -o-background-size: cover;\n       background-size: cover;\n  text-align: center;\n  /*footer*/\n}\n.login[data-v-e10150fa]:after {\n  content: ' ';\n  width: 0;\n  height: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\n.login .header[data-v-e10150fa] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 60px;\n  line-height: 60px;\n  color: #fff;\n  text-align: center;\n  font-size: 28px;\n}\n.login .header .item[data-v-e10150fa] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.login .header .left[data-v-e10150fa] {\n  left: 10px;\n  padding-left: 46px;\n  background: url(" + __webpack_require__(434) + ") no-repeat center left;\n  -moz-background-size: 40px;\n    -o-background-size: 40px;\n       background-size: 40px;\n}\n.login .header .right[data-v-e10150fa] {\n  right: 10px;\n}\n.login .header .right i[data-v-e10150fa] {\n  font-size: 32px;\n  display: inline-block;\n  vertical-align: text-bottom;\n  padding-right: 0px;\n  line-height: 31px;\n}\n.login .footer[data-v-e10150fa] {\n  display: none;\n  color: #fff;\n  padding-bottom: 20px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n@media screen and (min-height: 768px) {\n.login .footer[data-v-e10150fa] {\n    display: block;\n}\n}\n.login .footer ul[data-v-e10150fa] {\n  text-align: center;\n}\n.login .footer ul li[data-v-e10150fa] {\n  display: inline-block;\n  margin: 0 10px;\n  font-size: 14px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.login .footer ul li a[data-v-e10150fa] {\n  height: 21px;\n  display: inline-block;\n  cursor: pointer;\n  color: #fff;\n}\n.login .footer .gov[data-v-e10150fa] {\n  color: #fff;\n}\n.login .footer .gov[data-v-e10150fa]:hover {\n  text-decoration: underline;\n}\n.login .footer ul li a[data-v-e10150fa]:hover {\n  color: #ff8d1c;\n}\n.login .footer p[data-v-e10150fa] {\n  font-size: 12px;\n  font-size: 0.8rem;\n  text-align: center;\n  margin-top: 14px;\n  margin-top: 1rem;\n  line-height: 24px;\n}\n.login .footer p img[data-v-e10150fa] {\n  padding: 0 6px;\n  margin-bottom: -3px;\n}\n.login .thinLine[data-v-e10150fa] {\n  width: 140px;\n  width: 10rem;\n  height: 1px;\n  background-color: #eaeaea;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n.form-login[data-v-e10150fa] {\n  width: 560px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 50px 90px 80px 90px;\n  display: inline-block;\n  vertical-align: middle;\n  background-color: #fcfcfb;\n  -webkit-border-radius: 8px;\n     -moz-border-radius: 8px;\n          border-radius: 8px;\n}\n.form-login h3[data-v-e10150fa] {\n  color: #404040;\n  font-size: 28px;\n  text-align: center;\n  margin-bottom: 46px;\n}\n.form-login .chrome-hack[data-v-e10150fa] {\n  display: none;\n}\n.form-login .el-button--primary[data-v-e10150fa]:focus,\n.form-login .el-button--primary[data-v-e10150fa]:hover {\n  background: #475669;\n  border-color: #475669;\n  color: #fff;\n}\n.form-login .button-login[data-v-e10150fa] {\n  width: 100%;\n  background-color: #3a4d62;\n  border-color: #3a4d62;\n  padding: 15px 19px;\n}\n.form-login .left[data-v-e10150fa] {\n  text-align: left;\n}\n.form-login .box[data-v-e10150fa] {\n  margin: 22px 0;\n}\n", ""]);

	// exports


/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bg3.jpg";

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "logo.png";

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var _vuex = __webpack_require__(436);

	exports.default = {
	    data: function data() {
	        var checkUser = function checkUser(rule, value, callback) {
	            if (!value) {
	                return callback(new Error('请输入用户名'));
	            } else {
	                callback();
	            }
	        };
	        var validatePass = function validatePass(rule, value, callback) {
	            if (value === '') {
	                callback(new Error('请输入密码'));
	            } else {
	                callback();
	            }
	        };
	        return {
	            ruleForm2: {
	                rememberme: false,
	                rememberps: false,
	                password: '',
	                username: '',
	                captchaObj: {}
	            },
	            rules2: {
	                password: [{ validator: validatePass, trigger: 'blur' }],
	                username: [{ validator: checkUser, trigger: 'blur' }]
	            },
	            loading: false,
	            loginMsg: "立刻登录"
	        };
	    },

	    methods: _extends({}, (0, _vuex.mapActions)(['SIGNIN', 'AUTHORIZE']), {
	        submit: function submit() {
	            var _this = this;

	            this.loading = true;
	            this.loginMsg = '登录中...';
	            var validate = this.captchaObj.getValidate();
	            this.$http({
	                url: '/pms/account/signin.do',
	                method: 'POST',
	                body: {
	                    username: this.ruleForm2.username,
	                    password: this.ruleForm2.password,
	                    geetest_challenge: validate.geetest_challenge,
	                    geetest_validate: validate.geetest_validate,
	                    geetest_seccode: validate.geetest_seccode
	                },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    //vuex store/user 内定义的mutations
	                    _this.SIGNIN(data.result);
	                    _this.AUTHORIZE(data.result.pmsModuleList);
	                    _this.setStorage();
	                    _this.$router.replace({ path: '/' });
	                } else {
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	                _this.loading = false;
	                _this.loginMsg = '立刻登录';
	            }, function (response) {
	                // 响应错误回调
	                _this.loading = false;
	                _this.loginMsg = '立刻登录';
	            }).catch(function (response) {
	                this.loading = false;
	                this.loginMsg = '立刻登录';
	            });
	        },
	        handleReset2: function handleReset2() {
	            this.$refs.ruleForm2.resetFields();
	        },
	        handleSubmit2: function handleSubmit2(ev) {
	            var _this2 = this;

	            this.$refs.ruleForm2.validate(function (valid) {
	                if (valid) {
	                    if (_this2.captchaObj && _this2.captchaObj.getValidate instanceof Function) {
	                        var captCha = _this2.captchaObj.getValidate();
	                        if (captCha) {
	                            _this2.submit();
	                        } else {
	                            _this2.$message({
	                                message: '请先拖动滑块完成验证',
	                                type: 'warning'
	                            });
	                        }
	                    } else {
	                        _this2.$message({
	                            message: '网络异常，请检查网络设置或刷新重试',
	                            type: 'error'
	                        });
	                    }
	                } else {
	                    console.log('error submit!!');
	                    return false;
	                }
	            });
	        },
	        handleKeyDown: function handleKeyDown(e) {
	            if (e.keyCode == 13) {
	                this.handleSubmit2();
	            }
	        },

	        //加载滑块验证码
	        getCaptcha: function getCaptcha() {
	            var that = this;
	            this.$http({
	                url: "/pms/slidecheck/getCode.do?t=" + new Date().getTime(), // 加随机数防止缓存
	                method: "POST"
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                // 使用initGeetest接口
	                // 参数1：配置参数
	                // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
	                initGeetest({
	                    gt: data.gt,
	                    challenge: data.challenge,
	                    product: "float",
	                    offline: !data.success
	                }, that.handlerEmbed);
	            });
	        },
	        handlerEmbed: function handlerEmbed(captchaObj) {
	            // 将验证码加到id为captcha的元素里
	            captchaObj.appendTo("#float-captcha");
	            this.captchaObj = captchaObj;
	        },

	        //检查是否有记住用户名密码
	        getStorage: function getStorage() {
	            var storage = window.localStorage;
	            var getUid = storage["username"];
	            var getPwd = storage["password"];
	            var getrememberme = storage["rememberme"];
	            var getrememberps = storage["rememberps"];
	            if (getrememberme == "1") {
	                this.ruleForm2.rememberme = true;
	                this.ruleForm2.username = getUid;
	                if (getrememberps == "1") {
	                    this.ruleForm2.rememberps = true;
	                    this.ruleForm2.password = getPwd;
	                }
	            }
	        },
	        setStorage: function setStorage() {
	            var storage = window.localStorage;
	            if (!!this.ruleForm2.rememberme) {
	                storage["rememberme"] = 1;
	                storage["username"] = this.ruleForm2.username;
	                if (!!this.ruleForm2.rememberps) {
	                    storage["rememberps"] = 1;
	                    storage["password"] = this.ruleForm2.password;
	                } else {
	                    storage["rememberps"] = 0;
	                    storage["password"] = "";
	                }
	            } else {
	                storage["rememberme"] = 0;
	                storage["username"] = "";
	            }
	        }
	    }),
	    created: function created() {
	        window.addEventListener("keydown", this.handleKeyDown);
	        this.getCaptcha();
	        this.getStorage();
	    },

	    beforeDestroy: function beforeDestroy() {
	        window.removeEventListener("keydown", this.handleKeyDown);
	    }
	};

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "login"
	  }, [_vm._m(0), _vm._v(" "), _c('el-form', {
	    ref: "ruleForm2",
	    staticClass: "form-login",
	    attrs: {
	      "model": _vm.ruleForm2,
	      "rules": _vm.rules2
	    }
	  }, [_c('h3', [_vm._v("登录客到账号")]), _vm._v(" "), _c('input', {
	    staticClass: "chrome-hack",
	    attrs: {
	      "type": "text"
	    }
	  }), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "username"
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.trim",
	      value: (_vm.ruleForm2.username),
	      expression: "ruleForm2.username",
	      modifiers: {
	        "trim": true
	      }
	    }],
	    attrs: {
	      "size": "large",
	      "placeholder": "登录名/手机号/员工号"
	    },
	    domProps: {
	      "value": (_vm.ruleForm2.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm2.username = (typeof $event === 'string' ? $event.trim() : $event)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "password"
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm2.password),
	      expression: "ruleForm2.password"
	    }],
	    attrs: {
	      "size": "large",
	      "type": "password",
	      "auto-complete": "off",
	      "placeholder": "请输入密码"
	    },
	    domProps: {
	      "value": (_vm.ruleForm2.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm2.password = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "box"
	  }, [_c('div', {
	    staticClass: "box-captcha",
	    attrs: {
	      "id": "float-captcha"
	    }
	  })]), _vm._v(" "), _c('el-form-item', {
	    staticClass: "left"
	  }, [_c('el-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm2.rememberme),
	      expression: "ruleForm2.rememberme"
	    }],
	    domProps: {
	      "value": (_vm.ruleForm2.rememberme)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm2.rememberme = $event
	      }
	    }
	  }, [_vm._v("记住用户名")]), _vm._v(" "), _c('el-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm2.rememberps),
	      expression: "ruleForm2.rememberps"
	    }],
	    domProps: {
	      "value": (_vm.ruleForm2.rememberps)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm2.rememberps = $event
	      }
	    }
	  }, [_vm._v("记住密码")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    staticClass: "button-login",
	    attrs: {
	      "size": "large",
	      "type": "primary",
	      "disabled": _vm.loading
	    },
	    on: {
	      "click": _vm.handleSubmit2
	    }
	  }, [_vm._v(_vm._s(_vm.loginMsg))])], 1)], 1), _vm._v(" "), _vm._m(1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('div', {
	    staticClass: "item left"
	  }, [_vm._v("客到采购管理系统")]), _vm._v(" "), _c('div', {
	    staticClass: "item right"
	  }, [_c('i', {
	    staticClass: "icon-nav_ico_phone"
	  }), _vm._v(" "), _c('span', [_vm._v("400 - 1688 - 927")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "footer",
	    attrs: {
	      "id": "footer"
	    }
	  }, [_c('ul', [_c('li', [_c('a', {
	    attrs: {
	      "href": "http://grkj.cn",
	      "target": "_blank"
	    }
	  }, [_vm._v("关于我们")])]), _vm._v("|\n\t\t\t"), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://ht.kd.cc/agreements/ctrz.html",
	      "target": "_blank"
	    }
	  }, [_vm._v("餐厅入驻")])]), _vm._v("|\n\t\t\t"), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://ht.kd.cc/agreements/fwxy.html",
	      "target": "_blank"
	    }
	  }, [_vm._v("商家服务协议")])]), _vm._v("|\n\t\t\t"), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://ht.kd.cc/agreements/yszc.html",
	      "target": "_blank"
	    }
	  }, [_vm._v("商家隐私政策")])]), _vm._v("|\n\t\t\t"), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://kd.cc/agent.html",
	      "target": "_blank"
	    }
	  }, [_vm._v("代理商入驻")])]), _vm._v("|\n\t\t\t"), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://partner.kd.cc/",
	      "target": "_blank"
	    }
	  }, [_vm._v("代理商后台")])]), _vm._v("|\n\t\t\t"), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://grkj.cn/business.html",
	      "target": "_blank"
	    }
	  }, [_vm._v("联系我们")])])]), _vm._v(" "), _c('p', [_vm._v("Copyright©2015-2018 KD.CC 版权所有"), _c('img', {
	    attrs: {
	      "src": __webpack_require__(438)
	    }
	  }), _c('a', {
	    staticClass: "gov",
	    attrs: {
	      "target": "_blank",
	      "href": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002001294"
	    }
	  }, [_vm._v("苏公网安备  32059002001294号")]), _vm._v("    苏ICP备14055937号")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e10150fa", module.exports)
	  }
	}

/***/ },

/***/ 438:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAPHXrvPpku/oo/Pnqvr0zdiuff784P//4+TQlfTfi/Hfx9ynWfPpq+rYg+GwZ+3egOTCbeS8WdmvgtOTcMqEW8N/Pt2pU+OsU+e1XOnIXue8bOvSmNucUd6nXOzZjf/5wejGfO/Zf//50Pjagv7Yj+rDevv/3uvJef767O3NhuzdsvjOev/vhuS2guS2gOO8ad+vZ5ppXPDWu//3l62LerSUfp9oVeGzaNusYuTBj9u6h/2/VNmobdGudum9Wf/SWM4AAgAAbua6W+7WcumwSunGXurKX+vAV+nBYOKxUea3V96ZRN6jSdWQRuXAU+/NZNQhGTkUOOWyUtQDCZN4WtYfGFE2UdpJKNydQ//bXv7FUtM4ItZlMAAAZtc+INd1OP0sD/LLbt6TPe1xMAAEdwAAeQICa7tMJgAAgPPkcvfidOzNaOfEZuK2X/LJVui5T+i/TuCkTO6+UOSzWum3Uuy5T+7IWunKbdqWSuvFXeW8Uu/KYdKDPdaOPPHTad6DMtYaF+u7XPN8KNV0KNc9IeOvS9ieWM8sGr2QXtYxH/jEWOigPfyOLNeRU6yic7mLWP/vbeOTPf/YTe3CYvCvSJNgNnN2grSjZtSWPdEMEfufRs8XEcEMC6m0kc2sUskAAmx5ik4OTlZOb9bAeMlZKv++YFxfeMwnEwwAXWAeUAAAYcVSJEIkRMQYCl5ZZuOqStkABo2Gd8YnE/BeHtdfM+W1Xcw+LQAAeOeCP3J6gtNAJmkCNrEODtVIKss9IUwAOcY+HYSPmbYAEAAbjv/SZuqCPdOHPdlOKt22afvSb+VgI4FYOqN9UoRpSsRrM55fMOKpV+RvNtttN78AEQAQemtzhGl+jr26fs3CcdeKRvSwQBcwiZWQg9EVCv/iY+tfKXx6edjMd8q2eHlkYPLYeOCORwsGZ8W9h9NlPeJGHqeNWTYaTfaCNtO8h7WAP25iYvekOcWufOmXNM54OgAIkf+1SfrERJSMdXKFlNuGOJKNfhw+l7SZWKOZhPzMZNp07osAAAA/dFJOUwBpq3xBW6wIGgK6QetEk+fh7PRIFF2cxuTk8LyM0sYnQfvsTDCy5inEIZWDwb7HseDb+xw10cv3+fWfmMPlb0PdBigAAAF2SURBVBjTY2CAAA5GM1NGDgZkoMBmfuHMubNGbMoIMfbOoGnnT6ec7A+awA4T49AJD20OiTnhOHteuCpUVN3izfrewMCOiDlzl11bqyYPFjT5kfl6S0hX46yYBQ9uOG1SAYkZ2/xOff9qY1hrfJhj/COnh7qaQEG7j/8y/751XDrT/9m9lJtOdx20gYLWnz99/fA942BswuVb95+kvbhtBRS0/ZX0Jz3j2L79W3dfevn8ztNkQ6Cg5ZdvP9MOJ8auSdiZeCX9evRxA6CgfuT/d0cO7F23eUXE9j1XH58K1gIK6iVfPHooNW71olUr43bsitq2QQMoqNjeNylpSejCGfOXL54+pSeyTQkoyFrt69fSHTU5eqrDRIcGPy93FpDrWaX8a+sCmoLtA+p9KisEecHe5OZ3c/P2qPKssff1dsnlAStk4Mp2ySux9/Is9Slyds7JYoKEJp9QQX6xa5mrR3mhuwAzJzRARUTFxGUlJOWkZYTBQgAlso7dQYeMaQAAAABJRU5ErkJggg=="

/***/ }

});