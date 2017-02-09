webpackJsonp([10],{

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

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// 解压拼音库。
	// @param {Object} dict_combo, 压缩的拼音库。
	// @param {Object} 解压的拼音库。

	function buildPinyinCache(dict_combo) {
	  var hans = void 0;
	  var uncomboed = {};

	  for (var py in dict_combo) {
	    hans = dict_combo[py];
	    for (var i = 0, han, l = hans.length; i < l; i++) {
	      han = hans.charCodeAt(i);
	      if (!uncomboed.hasOwnProperty(han)) {
	        uncomboed[han] = py;
	      } else {
	        uncomboed[han] += "," + py;
	      }
	    }
	  }

	  return uncomboed;
	}

	var PINYIN_DICT = buildPinyinCache(__webpack_require__(460));
	var Pinyin = __webpack_require__(461);
	var pinyin = new Pinyin(PINYIN_DICT);

	module.exports = pinyin.convert.bind(pinyin);
	module.exports.compare = pinyin.compare.bind(pinyin);
	module.exports.STYLE_NORMAL = Pinyin.STYLE_NORMAL;
	module.exports.STYLE_TONE = Pinyin.STYLE_TONE;
	module.exports.STYLE_TONE2 = Pinyin.STYLE_TONE2;
	module.exports.STYLE_TO3NE = Pinyin.STYLE_TO3NE;
	module.exports.STYLE_INITIALS = Pinyin.STYLE_INITIALS;
	module.exports.STYLE_FIRST_LETTER = Pinyin.STYLE_FIRST_LETTER;

/***/ },

/***/ 460:
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  "èr": "二贰",
	  "shí": "十时实蚀",
	  "yǐ": "乙已以蚁倚",
	  "yī": "一衣医依伊揖壹",
	  "chǎng,ān,hàn": "厂",
	  "dīng,zhēng": "丁",
	  "qī": "七戚欺漆柒凄嘁",
	  "bǔ,bo": "卜",
	  "rén": "人仁",
	  "rù": "入褥",
	  "jiǔ": "九久酒玖灸韭",
	  "ér": "儿而",
	  "bā": "八巴疤叭芭捌笆",
	  "jǐ,jī": "几",
	  "le,liǎo": "了",
	  "lì": "力历厉立励利例栗粒吏沥荔俐莉砾雳痢",
	  "dāo": "刀",
	  "nǎi": "乃奶",
	  "sān": "三叁",
	  "yòu": "又右幼诱佑",
	  "yú": "于余鱼娱渔榆愚隅逾舆",
	  "shì": "士示世市式势事侍饰试视柿是适室逝释誓拭恃嗜",
	  "gān,gàn": "干",
	  "gōng": "工弓公功攻宫恭躬",
	  "kuī": "亏盔窥",
	  "tǔ": "土",
	  "cùn": "寸",
	  "dà,dài,tài": "大",
	  "cái": "才材财裁",
	  "xià": "下夏",
	  "zhàng": "丈仗帐胀障杖账",
	  "yǔ,yù,yú": "与",
	  "shàng,shǎng": "上",
	  "wàn,mò": "万",
	  "kǒu": "口",
	  "xiǎo": "小晓",
	  "jīn": "巾斤今金津筋襟",
	  "shān": "山删衫珊",
	  "qiān": "千迁牵谦签",
	  "qǐ": "乞企启起",
	  "chuān": "川穿",
	  "gè,gě": "个各",
	  "sháo": "勺芍",
	  "yì": "亿义艺忆议亦异役译易疫益谊意毅翼屹抑邑绎奕逸肄溢",
	  "jí": "及吉级极即急疾集籍棘辑嫉",
	  "fán": "凡烦矾樊",
	  "xī": "夕西吸希析牺息悉惜稀锡溪熄膝昔晰犀熙嬉蟋",
	  "wán": "丸完玩顽",
	  "me,mó,ma,yāo": "么",
	  "guǎng,ān": "广",
	  "wáng,wú": "亡",
	  "mén": "门们",
	  "shī": "尸失师诗狮施湿虱",
	  "zhī": "之支汁芝肢脂蜘",
	  "jǐ": "己挤脊",
	  "zǐ": "子紫姊籽滓",
	  "wèi": "卫未位味畏胃喂慰谓猬蔚魏",
	  "yě": "也冶野",
	  "nǚ,rǔ": "女",
	  "rèn": "刃认韧纫",
	  "fēi": "飞非啡",
	  "xí": "习席袭媳",
	  "mǎ": "马码玛",
	  "chā,chá,chǎ": "叉",
	  "fēng": "丰封疯峰锋蜂枫",
	  "xiāng": "乡香箱厢湘镶",
	  "jǐng": "井警阱",
	  "wáng,wàng": "王",
	  "kāi": "开揩",
	  "tiān": "天添",
	  "wú": "无吴芜梧蜈",
	  "fū,fú": "夫",
	  "zhuān": "专砖",
	  "yuán": "元园原圆援缘源袁猿辕",
	  "yún": "云匀耘",
	  "zhā,zā,zhá": "扎",
	  "mù": "木目牧墓幕暮慕沐募睦穆",
	  "wǔ": "五午伍武侮舞捂鹉",
	  "tīng": "厅听",
	  "bù,fǒu": "不",
	  "qū,ōu": "区",
	  "quǎn": "犬",
	  "tài": "太态泰汰",
	  "yǒu": "友",
	  "chē,jū": "车",
	  "pǐ": "匹",
	  "yóu": "尤由邮犹油游",
	  "jù": "巨拒具俱剧距惧锯聚炬",
	  "yá": "牙芽崖蚜涯衙",
	  "bǐ": "比彼笔鄙匕秕",
	  "jiē": "皆阶接街秸",
	  "hù": "互户护沪",
	  "qiè,qiē": "切",
	  "wǎ,wà": "瓦",
	  "zhǐ": "止旨址纸指趾",
	  "tún,zhūn": "屯",
	  "shǎo,shào": "少",
	  "rì": "日",
	  "zhōng,zhòng": "中",
	  "gāng": "冈刚纲缸肛",
	  "nèi,nà": "内",
	  "bèi": "贝备倍辈狈惫焙",
	  "shuǐ": "水",
	  "jiàn,xiàn": "见",
	  "niú": "牛",
	  "shǒu": "手守首",
	  "máo": "毛矛茅锚",
	  "qì": "气弃汽器迄泣",
	  "shēng": "升生声牲笙甥",
	  "cháng,zhǎng": "长",
	  "shén,shí": "什",
	  "piàn,piān": "片",
	  "pú,pū": "仆",
	  "huà,huā": "化",
	  "bì": "币必毕闭毙碧蔽弊避壁庇蓖痹璧",
	  "chóu,qiú": "仇",
	  "zhuǎ,zhǎo": "爪",
	  "jǐn,jìn": "仅",
	  "réng": "仍",
	  "fù,fǔ": "父",
	  "cóng,zòng": "从",
	  "fǎn": "反返",
	  "jiè": "介戒届界借诫",
	  "xiōng": "凶兄胸匈汹",
	  "fēn,fèn": "分",
	  "fá": "乏伐罚阀筏",
	  "cāng": "仓苍舱沧",
	  "yuè": "月阅悦跃越岳粤",
	  "shì,zhī": "氏",
	  "wù": "勿务物误悟雾坞晤",
	  "qiàn": "欠歉",
	  "fēng,fěng": "风",
	  "dān": "丹耽",
	  "wū": "乌污呜屋巫诬",
	  "fèng": "凤奉",
	  "gōu,gòu": "勾",
	  "wén": "文闻蚊",
	  "liù,lù": "六",
	  "huǒ": "火伙",
	  "fāng": "方芳",
	  "dǒu,dòu": "斗",
	  "wèi,wéi": "为",
	  "dìng": "订定锭",
	  "jì": "计记技忌际季剂迹既继寄绩妓荠寂鲫冀",
	  "xīn": "心辛欣新薪锌",
	  "chǐ,chě": "尺",
	  "yǐn": "引饮蚓瘾",
	  "chǒu": "丑",
	  "kǒng": "孔恐",
	  "duì": "队对",
	  "bàn": "办半扮伴瓣绊",
	  "yǔ,yú": "予",
	  "yǔn": "允陨",
	  "quàn": "劝",
	  "shū": "书叔殊梳舒疏输蔬抒枢淑",
	  "shuāng": "双霜",
	  "yù": "玉育狱浴预域欲遇御裕愈誉芋郁喻寓豫",
	  "huàn": "幻换唤患宦涣焕痪",
	  "kān": "刊堪勘",
	  "mò": "末沫漠墨默茉陌寞",
	  "jī": "击饥圾机肌鸡积基激讥叽唧畸箕",
	  "dǎ,dá": "打",
	  "qiǎo": "巧",
	  "zhèng,zhēng": "正症挣",
	  "pū": "扑",
	  "bā,pá": "扒",
	  "gān": "甘肝竿柑",
	  "qù": "去",
	  "rēng": "扔",
	  "gǔ": "古谷股鼓",
	  "běn": "本",
	  "jié,jiē": "节结",
	  "shù,shú,zhú": "术",
	  "bǐng": "丙柄饼秉禀",
	  "kě,kè": "可",
	  "zuǒ": "左",
	  "bù": "布步怖部埠",
	  "shí,dàn": "石",
	  "lóng": "龙聋隆咙胧窿",
	  "yà": "轧亚讶",
	  "miè": "灭蔑",
	  "píng": "平评凭瓶萍坪",
	  "dōng": "东冬",
	  "kǎ,qiǎ": "卡",
	  "běi,bèi": "北",
	  "yè": "业页夜液谒腋",
	  "jiù": "旧救就舅臼疚",
	  "shuài": "帅蟀",
	  "guī": "归规闺硅瑰",
	  "zhàn,zhān": "占",
	  "dàn": "旦但诞淡蛋氮",
	  "qiě,jū": "且",
	  "yè,xié": "叶",
	  "jiǎ": "甲钾",
	  "dīng": "叮盯",
	  "shēn": "申伸身深呻绅",
	  "hào,háo": "号",
	  "diàn": "电店垫殿玷淀惦奠",
	  "tián": "田甜恬",
	  "shǐ": "史使始驶矢屎",
	  "zhī,zhǐ": "只",
	  "yāng": "央殃秧鸯",
	  "diāo": "叼雕刁碉",
	  "jiào": "叫轿较窖酵",
	  "lìng": "另",
	  "dāo,tāo": "叨",
	  "sì": "四寺饲肆",
	  "tàn": "叹炭探碳",
	  "qiū": "丘秋蚯",
	  "hé": "禾河荷盒",
	  "fù": "付负妇附咐赴复傅富腹覆赋缚",
	  "dài": "代带贷怠袋逮戴",
	  "xiān": "仙先掀锨",
	  "yí": "仪宜姨移遗夷胰",
	  "bái": "白",
	  "zǎi,zǐ,zī": "仔",
	  "chì": "斥赤翅",
	  "tā": "他它塌",
	  "guā": "瓜刮",
	  "hū": "乎呼忽",
	  "cóng": "丛",
	  "lìng,líng,lǐng": "令",
	  "yòng": "用",
	  "shuǎi": "甩",
	  "yìn": "印",
	  "lè,yuè": "乐",
	  "jù,gōu": "句",
	  "cōng": "匆葱聪囱",
	  "fàn": "犯饭泛范贩",
	  "cè": "册厕测策",
	  "wài": "外",
	  "chù,chǔ": "处",
	  "niǎo": "鸟",
	  "bāo": "包胞苞褒",
	  "zhǔ": "主煮嘱拄",
	  "shǎn": "闪陕",
	  "lán": "兰拦栏蓝篮澜",
	  "tóu,tou": "头",
	  "huì": "汇绘贿惠慧讳诲晦秽",
	  "hàn": "汉旱捍悍焊撼翰憾",
	  "tǎo": "讨",
	  "xué": "穴学",
	  "xiě": "写",
	  "níng,nìng,zhù": "宁",
	  "ràng": "让",
	  "lǐ": "礼李里理鲤",
	  "xùn": "训讯迅汛驯逊殉",
	  "yǒng": "永咏泳勇蛹踊",
	  "mín": "民",
	  "chū": "出初",
	  "ní": "尼",
	  "sī": "司丝私斯撕嘶",
	  "liáo": "辽疗僚聊寥嘹缭",
	  "jiā": "加佳嘉枷",
	  "nú": "奴",
	  "zhào,shào": "召",
	  "biān": "边编鞭蝙",
	  "pí": "皮疲脾啤",
	  "yùn": "孕运韵酝蕴",
	  "fā,fà": "发",
	  "shèng": "圣胜剩",
	  "tái,tāi": "台苔",
	  "jiū": "纠究揪鸠",
	  "mǔ": "母亩牡拇姆",
	  "káng,gāng": "扛",
	  "xíng": "刑形型邢",
	  "dòng": "动冻栋洞",
	  "kǎo": "考烤拷",
	  "kòu": "扣寇",
	  "tuō": "托拖脱",
	  "lǎo": "老",
	  "gǒng": "巩汞拱",
	  "zhí": "执直侄值职植",
	  "kuò": "扩阔廓",
	  "yáng": "扬阳杨洋",
	  "dì,de": "地",
	  "sǎo,sào": "扫",
	  "chǎng,cháng": "场",
	  "ěr": "耳尔饵",
	  "máng": "芒忙盲茫",
	  "xiǔ": "朽",
	  "pǔ,pò,pō,piáo": "朴",
	  "quán": "权全泉拳痊",
	  "guò,guo,guō": "过",
	  "chén": "臣尘辰沉陈晨忱",
	  "zài": "再在",
	  "xié": "协胁斜携鞋谐",
	  "yā,yà": "压",
	  "yàn": "厌艳宴验雁焰砚唁谚堰",
	  "yǒu,yòu": "有",
	  "cún": "存",
	  "bǎi": "百摆",
	  "kuā,kuà": "夸",
	  "jiàng": "匠酱",
	  "duó": "夺踱",
	  "huī": "灰挥恢辉徽",
	  "dá": "达",
	  "sǐ": "死",
	  "liè": "列劣烈猎",
	  "guǐ": "轨鬼诡",
	  "xié,yá,yé,yú,xú": "邪",
	  "jiá,jiā,gā,xiá": "夹",
	  "chéng": "成呈诚承城程惩橙",
	  "mài": "迈麦卖",
	  "huà,huá": "划",
	  "zhì": "至志帜制质治致秩智置挚掷窒滞稚",
	  "cǐ": "此",
	  "zhēn": "贞针侦珍真斟榛",
	  "jiān": "尖奸歼坚肩艰兼煎",
	  "guāng": "光",
	  "dāng,dàng": "当",
	  "zǎo": "早枣澡蚤藻",
	  "tù,tǔ": "吐",
	  "xià,hè": "吓",
	  "chóng": "虫崇",
	  "tuán": "团",
	  "tóng,tòng": "同",
	  "qū,qǔ": "曲",
	  "diào": "吊钓掉",
	  "yīn": "因阴音姻茵",
	  "chī": "吃嗤痴",
	  "ma,má,mǎ": "吗",
	  "yǔ": "屿宇羽",
	  "fān": "帆翻",
	  "huí": "回茴蛔",
	  "qǐ,kǎi": "岂",
	  "zé": "则责",
	  "suì": "岁碎穗祟遂隧",
	  "ròu": "肉",
	  "zhū,shú": "朱",
	  "wǎng": "网往枉",
	  "nián": "年",
	  "diū": "丢",
	  "shé": "舌",
	  "zhú": "竹逐烛",
	  "qiáo": "乔侨桥瞧荞憔",
	  "wěi": "伟伪苇纬萎",
	  "chuán,zhuàn": "传",
	  "pāng": "乓",
	  "pīng": "乒",
	  "xiū,xǔ": "休",
	  "fú": "伏扶俘浮符幅福凫芙袱辐蝠",
	  "yōu": "优忧悠幽",
	  "yán": "延严言岩炎沿盐颜阎蜒檐",
	  "jiàn": "件建荐贱剑健舰践鉴键箭涧",
	  "rèn,rén": "任",
	  "huá,huà,huā": "华",
	  "jià,jiè,jie": "价",
	  "shāng": "伤商",
	  "fèn,bīn": "份",
	  "fǎng": "仿访纺",
	  "yǎng,áng": "仰",
	  "zì": "自字",
	  "xiě,xuè": "血",
	  "xiàng": "向项象像橡",
	  "sì,shì": "似",
	  "hòu": "后厚候",
	  "zhōu": "舟州周洲",
	  "háng,xíng": "行",
	  "huì,kuài": "会",
	  "shā": "杀纱杉砂",
	  "hé,gě": "合",
	  "zhào": "兆赵照罩",
	  "zhòng": "众仲",
	  "yé": "爷",
	  "sǎn": "伞",
	  "chuàng,chuāng": "创",
	  "duǒ": "朵躲",
	  "wēi": "危威微偎薇巍",
	  "xún": "旬寻巡询循",
	  "zá": "杂砸",
	  "míng": "名明鸣铭螟",
	  "duō": "多哆",
	  "zhēng": "争征睁筝蒸怔狰",
	  "sè": "色涩瑟",
	  "zhuàng": "壮状撞",
	  "chōng,chòng": "冲",
	  "bīng": "冰兵",
	  "zhuāng": "庄装妆桩",
	  "qìng": "庆",
	  "liú": "刘留流榴琉硫瘤",
	  "qí,jì,zī,zhāi": "齐",
	  "cì": "次赐",
	  "jiāo": "交郊浇娇骄胶椒焦蕉礁",
	  "chǎn": "产铲阐",
	  "wàng": "妄忘旺望",
	  "chōng": "充",
	  "wèn": "问",
	  "chuǎng": "闯",
	  "yáng,xiáng": "羊",
	  "bìng,bīng": "并",
	  "dēng": "灯登蹬",
	  "mǐ": "米",
	  "guān": "关官棺",
	  "hàn,hán": "汗",
	  "jué": "决绝掘诀爵",
	  "jiāng": "江姜僵缰",
	  "tāng,shāng": "汤",
	  "chí": "池驰迟持弛",
	  "xīng,xìng": "兴",
	  "zhái": "宅",
	  "ān": "安氨庵鞍",
	  "jiǎng": "讲奖桨蒋",
	  "jūn": "军均君钧",
	  "xǔ,hǔ": "许",
	  "fěng": "讽",
	  "lùn,lún": "论",
	  "nóng": "农浓脓",
	  "shè": "设社舍涉赦",
	  "nà,nǎ,nèi,nā": "那",
	  "jìn,jǐn": "尽",
	  "dǎo": "导岛蹈捣祷",
	  "sūn,xùn": "孙",
	  "zhèn": "阵振震镇",
	  "shōu": "收",
	  "fáng": "防妨房肪",
	  "rú": "如儒蠕",
	  "mā": "妈",
	  "xì,hū": "戏",
	  "hǎo,hào": "好",
	  "tā,jiě": "她",
	  "guān,guàn": "观冠",
	  "huān": "欢",
	  "hóng,gōng": "红",
	  "mǎi": "买",
	  "xiān,qiàn": "纤",
	  "jì,jǐ": "纪济",
	  "yuē,yāo": "约",
	  "shòu": "寿受授售兽瘦",
	  "nòng,lòng": "弄",
	  "jìn": "进近晋浸",
	  "wéi": "违围唯维桅",
	  "yuǎn,yuàn": "远",
	  "tūn": "吞",
	  "tán": "坛谈痰昙谭潭檀",
	  "fǔ": "抚斧府俯辅腐甫脯",
	  "huài,pēi,pī,péi": "坏",
	  "rǎo": "扰",
	  "pī": "批披坯霹",
	  "zhǎo": "找沼",
	  "chě": "扯",
	  "zǒu": "走",
	  "chāo": "抄钞超",
	  "bà": "坝爸霸",
	  "gòng": "贡",
	  "zhé,shé,zhē": "折",
	  "qiǎng,qiāng,chēng": "抢",
	  "zhuā": "抓",
	  "xiào": "孝笑效哮啸",
	  "pāo": "抛",
	  "tóu": "投",
	  "kàng": "抗炕",
	  "fén": "坟焚",
	  "kēng": "坑",
	  "dǒu": "抖陡蚪",
	  "ké,qiào": "壳",
	  "fāng,fáng": "坊",
	  "niǔ": "扭纽钮",
	  "kuài": "块快筷",
	  "bǎ,bà": "把",
	  "bào": "报抱爆豹",
	  "jié": "劫杰洁捷截竭",
	  "què": "却确鹊",
	  "huā": "花",
	  "fēn": "芬吩纷氛",
	  "qín": "芹琴禽勤秦擒",
	  "láo": "劳牢",
	  "lú": "芦炉卢庐颅",
	  "gān,gǎn": "杆",
	  "kè": "克刻客课",
	  "sū,sù": "苏",
	  "dù": "杜渡妒镀",
	  "gàng,gāng": "杠",
	  "cūn": "村",
	  "qiú": "求球囚",
	  "xìng": "杏幸性姓",
	  "gèng,gēng": "更",
	  "liǎng": "两",
	  "lì,lí": "丽",
	  "shù": "束述树竖恕庶墅漱",
	  "dòu": "豆逗痘",
	  "hái,huán": "还",
	  "fǒu,pǐ": "否",
	  "lái": "来莱",
	  "lián": "连怜帘莲联廉镰",
	  "xiàn,xuán": "县",
	  "zhù,chú": "助",
	  "dāi": "呆",
	  "kuàng": "旷况矿框眶",
	  "ya,yā": "呀",
	  "zú": "足族",
	  "dūn": "吨蹲墩",
	  "kùn": "困",
	  "nán": "男",
	  "chǎo,chāo": "吵",
	  "yuán,yún,yùn": "员",
	  "chuàn": "串",
	  "chuī": "吹炊",
	  "ba,bā": "吧",
	  "hǒu": "吼",
	  "gǎng": "岗",
	  "bié,biè": "别",
	  "dīng,dìng": "钉",
	  "gào": "告",
	  "wǒ": "我",
	  "luàn": "乱",
	  "tū": "秃突凸",
	  "xiù": "秀袖绣锈嗅",
	  "gū,gù": "估",
	  "měi": "每美",
	  "hé,hē,hè": "何",
	  "tǐ,tī,bèn": "体",
	  "bó,bǎi,bà": "伯",
	  "zuò": "作坐座做",
	  "líng": "伶灵铃陵零龄玲凌菱蛉翎",
	  "dī": "低堤滴",
	  "yòng,yōng": "佣",
	  "nǐ": "你拟",
	  "zhù": "住注驻柱祝铸贮蛀",
	  "zào": "皂灶造燥躁噪",
	  "fó,fú,bì,bó": "佛",
	  "chè": "彻撤澈",
	  "tuǒ": "妥椭",
	  "lín": "邻林临琳磷鳞",
	  "hán": "含寒函涵韩",
	  "chà": "岔衩",
	  "cháng": "肠尝常偿",
	  "dù,dǔ": "肚",
	  "guī,jūn,qiū": "龟",
	  "miǎn": "免勉娩冕缅",
	  "jiǎo,jué": "角",
	  "kuáng": "狂",
	  "tiáo,tiāo": "条",
	  "luǎn": "卵",
	  "yíng": "迎盈营蝇赢荧莹萤",
	  "xì,jì": "系",
	  "chuáng": "床",
	  "kù": "库裤酷",
	  "yìng,yīng": "应",
	  "lěng": "冷",
	  "zhè,zhèi": "这",
	  "xù": "序叙绪续絮蓄旭恤酗婿",
	  "xián": "闲贤弦咸衔嫌涎舷",
	  "jiān,jiàn": "间监",
	  "pàn": "判盼叛畔",
	  "mēn,mèn": "闷",
	  "wāng": "汪",
	  "dì,tì,tuí": "弟",
	  "shā,shà": "沙",
	  "shà,shā": "煞",
	  "càn": "灿",
	  "wò": "沃卧握",
	  "méi,mò": "没",
	  "gōu": "沟钩",
	  "shěn,chén": "沈",
	  "huái": "怀槐徊淮",
	  "sòng": "宋送诵颂讼",
	  "hóng": "宏虹洪鸿",
	  "qióng": "穷琼",
	  "zāi": "灾栽",
	  "liáng": "良梁粮粱",
	  "zhèng": "证郑政",
	  "bǔ": "补捕哺",
	  "sù": "诉肃素速塑粟溯",
	  "shí,zhì": "识",
	  "cí": "词辞慈磁祠瓷雌",
	  "zhěn": "诊枕疹",
	  "niào,suī": "尿",
	  "céng": "层",
	  "jú": "局菊橘",
	  "wěi,yǐ": "尾",
	  "zhāng": "张章彰樟",
	  "gǎi": "改",
	  "lù": "陆录鹿路赂",
	  "ē,ā": "阿",
	  "zǔ": "阻组祖诅",
	  "miào": "妙庙",
	  "yāo": "妖腰邀夭吆",
	  "nǔ": "努",
	  "jìn,jìng": "劲",
	  "rěn": "忍",
	  "qū": "驱屈岖蛆躯",
	  "chún": "纯唇醇",
	  "nà": "纳钠捺",
	  "bó": "驳脖博搏膊舶渤",
	  "zòng,zǒng": "纵",
	  "wén,wèn": "纹",
	  "lǘ": "驴",
	  "huán": "环",
	  "qīng": "青轻倾清蜻氢卿",
	  "xiàn": "现限线宪陷馅羡献腺",
	  "biǎo": "表",
	  "mǒ,mò,mā": "抹",
	  "lǒng": "拢垄",
	  "dān,dàn,dǎn": "担",
	  "bá": "拔跋",
	  "jiǎn": "拣茧俭捡检减剪简柬碱",
	  "tǎn": "坦毯袒",
	  "chōu": "抽",
	  "yā": "押鸦鸭",
	  "guǎi": "拐",
	  "pāi": "拍",
	  "zhě": "者",
	  "dǐng": "顶鼎",
	  "yōng": "拥庸",
	  "chāi,cā": "拆",
	  "dǐ": "抵",
	  "jū,gōu": "拘",
	  "lā": "垃",
	  "lā,lá": "拉",
	  "bàn,pàn": "拌",
	  "zhāo": "招昭",
	  "pō": "坡泼颇",
	  "bō": "拨波玻菠播",
	  "zé,zhái": "择",
	  "tái": "抬",
	  "qí,jī": "其奇",
	  "qǔ": "取娶",
	  "kǔ": "苦",
	  "mào": "茂贸帽貌",
	  "ruò,rě": "若",
	  "miáo": "苗描瞄",
	  "píng,pēng": "苹",
	  "yīng": "英樱鹰莺婴缨鹦",
	  "qié": "茄",
	  "jīng": "茎京经惊晶睛精荆兢鲸",
	  "zhī,qí": "枝",
	  "bēi": "杯悲碑卑",
	  "guì,jǔ": "柜",
	  "bǎn": "板版",
	  "sōng": "松",
	  "qiāng": "枪腔",
	  "gòu": "构购够垢",
	  "sàng,sāng": "丧",
	  "huà": "画话桦",
	  "huò": "或货获祸惑霍",
	  "cì,cī": "刺",
	  "yǔ,yù": "雨语",
	  "bēn,bèn": "奔",
	  "fèn": "奋粪愤忿",
	  "hōng": "轰烘",
	  "qī,qì": "妻",
	  "ōu": "欧殴鸥",
	  "qǐng": "顷请",
	  "zhuǎn,zhuàn,zhuǎi": "转",
	  "zhǎn": "斩盏展",
	  "ruǎn": "软",
	  "lún": "轮仑伦沦",
	  "dào": "到盗悼道稻",
	  "chǐ": "齿耻侈",
	  "kěn": "肯垦恳啃",
	  "hǔ": "虎",
	  "xiē,suò": "些",
	  "lǔ": "虏鲁卤",
	  "shèn": "肾渗慎",
	  "shàng": "尚",
	  "guǒ": "果裹",
	  "kūn": "昆坤",
	  "guó": "国",
	  "chāng": "昌猖",
	  "chàng": "畅唱",
	  "diǎn": "典点碘",
	  "gù": "固故顾雇",
	  "áng": "昂",
	  "zhōng": "忠终钟盅衷",
	  "ne,ní": "呢",
	  "àn": "岸按案暗",
	  "tiě,tiē,tiè,": "帖",
	  "luó": "罗萝锣箩骡螺逻",
	  "kǎi": "凯慨",
	  "lǐng,líng": "岭",
	  "bài": "败拜",
	  "tú": "图徒途涂屠",
	  "chuí": "垂锤捶",
	  "zhī,zhì": "知织",
	  "guāi": "乖",
	  "gǎn": "秆赶敢感橄",
	  "hé,hè,huó,huò,hú": "和",
	  "gòng,gōng": "供共",
	  "wěi,wēi": "委",
	  "cè,zè,zhāi": "侧",
	  "pèi": "佩配沛",
	  "pò,pǎi": "迫",
	  "de,dì,dí": "的",
	  "pá": "爬",
	  "suǒ": "所索锁琐",
	  "jìng": "径竞竟敬静境镜靖",
	  "mìng": "命",
	  "cǎi,cài": "采",
	  "niàn": "念",
	  "tān": "贪摊滩瘫",
	  "rǔ": "乳辱",
	  "pín": "贫",
	  "fū": "肤麸孵敷",
	  "fèi": "肺废沸费吠",
	  "zhǒng": "肿",
	  "péng": "朋棚蓬膨硼鹏澎篷",
	  "fú,fù": "服",
	  "féi": "肥",
	  "hūn": "昏婚荤",
	  "tù": "兔",
	  "hú": "狐胡壶湖蝴弧葫",
	  "gǒu": "狗苟",
	  "bǎo": "饱宝保",
	  "xiǎng": "享响想",
	  "biàn": "变遍辨辩辫",
	  "dǐ,de": "底",
	  "jìng,chēng": "净",
	  "fàng": "放",
	  "nào": "闹",
	  "zhá": "闸铡",
	  "juàn,juǎn": "卷",
	  "quàn,xuàn": "券",
	  "dān,shàn,chán": "单",
	  "chǎo": "炒",
	  "qiǎn,jiān": "浅",
	  "fǎ": "法",
	  "xiè,yì": "泄",
	  "lèi": "泪类",
	  "zhān": "沾粘毡瞻",
	  "pō,bó": "泊",
	  "pào,pāo": "泡",
	  "xiè": "泻卸屑械谢懈蟹",
	  "ní,nì": "泥",
	  "zé,shì": "泽",
	  "pà": "怕帕",
	  "guài": "怪",
	  "zōng": "宗棕踪",
	  "shěn": "审婶",
	  "zhòu": "宙昼皱骤咒",
	  "kōng,kòng,kǒng": "空",
	  "láng,làng": "郎",
	  "chèn": "衬趁",
	  "gāi": "该",
	  "xiáng,yáng": "详",
	  "lì,dài": "隶",
	  "jū": "居鞠驹",
	  "shuā,shuà": "刷",
	  "mèng": "孟梦",
	  "gū": "孤姑辜咕沽菇箍",
	  "jiàng,xiáng": "降",
	  "mèi": "妹昧媚",
	  "jiě": "姐",
	  "jià": "驾架嫁稼",
	  "cān,shēn,cēn,sān": "参",
	  "liàn": "练炼恋链",
	  "xì": "细隙",
	  "shào": "绍哨",
	  "tuó": "驼驮鸵",
	  "guàn": "贯惯灌罐",
	  "zòu": "奏揍",
	  "chūn": "春椿",
	  "bāng": "帮邦梆",
	  "dú,dài": "毒",
	  "guà": "挂卦褂",
	  "kuǎ": "垮",
	  "kuà,kū": "挎",
	  "náo": "挠",
	  "dǎng,dàng": "挡",
	  "shuān": "拴栓",
	  "tǐng": "挺艇",
	  "kuò,guā": "括",
	  "shí,shè": "拾",
	  "tiāo,tiǎo": "挑",
	  "wā": "挖蛙洼",
	  "pīn": "拼",
	  "shèn,shén": "甚",
	  "mǒu": "某",
	  "nuó": "挪",
	  "gé": "革阁格隔",
	  "xiàng,hàng": "巷",
	  "cǎo": "草",
	  "chá": "茶察茬",
	  "dàng": "荡档",
	  "huāng": "荒慌",
	  "róng": "荣绒容熔融茸蓉溶榕",
	  "nán,nā": "南",
	  "biāo": "标彪膘",
	  "yào": "药耀",
	  "kū": "枯哭窟",
	  "xiāng,xiàng": "相",
	  "chá,zhā": "查",
	  "liǔ": "柳",
	  "bǎi,bó,bò": "柏",
	  "yào,yāo": "要",
	  "wāi": "歪",
	  "yán,yàn": "研",
	  "lí": "厘狸离犁梨璃黎漓篱",
	  "qì,qiè": "砌",
	  "miàn": "面",
	  "kǎn": "砍坎",
	  "shuǎ": "耍",
	  "nài": "耐奈",
	  "cán": "残蚕惭",
	  "zhàn": "战站栈绽蘸",
	  "bèi,bēi": "背",
	  "lǎn": "览懒揽缆榄",
	  "shěng,xǐng": "省",
	  "xiāo,xuē": "削",
	  "zhǎ": "眨",
	  "hǒng,hōng,hòng": "哄",
	  "xiǎn": "显险",
	  "mào,mò": "冒",
	  "yǎ,yā": "哑",
	  "yìng": "映硬",
	  "zuó": "昨",
	  "xīng": "星腥猩",
	  "pā": "趴",
	  "guì": "贵桂跪刽",
	  "sī,sāi": "思",
	  "xiā": "虾瞎",
	  "mǎ,mā,mà": "蚂",
	  "suī": "虽",
	  "pǐn": "品",
	  "mà": "骂",
	  "huá,huā": "哗",
	  "yè,yàn,yān": "咽",
	  "zán,zǎ": "咱",
	  "hā,hǎ,hà": "哈",
	  "yǎo": "咬舀",
	  "nǎ,něi,na,né": "哪",
	  "hāi,ké": "咳",
	  "xiá": "峡狭霞匣侠暇辖",
	  "gǔ,gū": "骨",
	  "gāng,gàng": "钢",
	  "tiē": "贴",
	  "yào,yuè": "钥",
	  "kàn,kān": "看",
	  "jǔ": "矩举",
	  "zěn": "怎",
	  "xuǎn": "选癣",
	  "zhòng,zhǒng,chóng": "种",
	  "miǎo": "秒渺藐",
	  "kē": "科棵颗磕蝌",
	  "biàn,pián": "便",
	  "zhòng,chóng": "重",
	  "liǎ": "俩",
	  "duàn": "段断缎锻",
	  "cù": "促醋簇",
	  "shùn": "顺瞬",
	  "xiū": "修羞",
	  "sú": "俗",
	  "qīn": "侵钦",
	  "xìn,shēn": "信",
	  "huáng": "皇黄煌凰惶蝗蟥",
	  "zhuī,duī": "追",
	  "jùn": "俊峻骏竣",
	  "dài,dāi": "待",
	  "xū": "须虚需",
	  "hěn": "很狠",
	  "dùn": "盾顿钝",
	  "lǜ": "律虑滤氯",
	  "pén": "盆",
	  "shí,sì,yì": "食",
	  "dǎn": "胆",
	  "táo": "逃桃陶萄淘",
	  "pàng": "胖",
	  "mài,mò": "脉",
	  "dú": "独牍",
	  "jiǎo": "狡饺绞脚搅",
	  "yuàn": "怨院愿",
	  "ráo": "饶",
	  "wān": "弯湾豌",
	  "āi": "哀哎埃",
	  "jiāng,jiàng": "将浆",
	  "tíng": "亭庭停蜓廷",
	  "liàng": "亮谅辆晾",
	  "dù,duó": "度",
	  "chuāng": "疮窗",
	  "qīn,qìng": "亲",
	  "zī": "姿资滋咨",
	  "dì": "帝递第蒂缔",
	  "chà,chā,chāi,cī": "差",
	  "yǎng": "养氧痒",
	  "qián": "前钱钳潜黔",
	  "mí": "迷谜靡",
	  "nì": "逆昵匿腻",
	  "zhà,zhá": "炸",
	  "zǒng": "总",
	  "làn": "烂滥",
	  "pào,páo,bāo": "炮",
	  "tì": "剃惕替屉涕",
	  "sǎ,xǐ": "洒",
	  "zhuó": "浊啄灼茁卓酌",
	  "xǐ,xiǎn": "洗",
	  "qià": "洽恰",
	  "pài": "派湃",
	  "huó": "活",
	  "rǎn": "染",
	  "héng": "恒衡",
	  "hún": "浑魂",
	  "nǎo": "恼脑",
	  "jué,jiào": "觉",
	  "hèn": "恨",
	  "xuān": "宣轩喧",
	  "qiè": "窃怯",
	  "biǎn,piān": "扁",
	  "ǎo": "袄",
	  "shén": "神",
	  "shuō,shuì,yuè": "说",
	  "tuì": "退蜕",
	  "chú": "除厨锄雏橱",
	  "méi": "眉梅煤霉玫枚媒楣",
	  "hái": "孩",
	  "wá": "娃",
	  "lǎo,mǔ": "姥",
	  "nù": "怒",
	  "hè": "贺赫褐鹤",
	  "róu": "柔揉蹂",
	  "bǎng": "绑膀",
	  "lěi": "垒蕾儡",
	  "rào": "绕",
	  "gěi,jǐ": "给",
	  "luò": "骆洛",
	  "luò,lào": "络",
	  "tǒng": "统桶筒捅",
	  "gēng": "耕羹",
	  "hào": "耗浩",
	  "bān": "班般斑搬扳颁",
	  "zhū": "珠株诸猪蛛",
	  "lāo": "捞",
	  "fěi": "匪诽",
	  "zǎi,zài": "载",
	  "mái,mán": "埋",
	  "shāo,shào": "捎稍",
	  "zhuō": "捉桌拙",
	  "niē": "捏",
	  "kǔn": "捆",
	  "dū,dōu": "都",
	  "sǔn": "损笋",
	  "juān": "捐鹃",
	  "zhé": "哲辙",
	  "rè": "热",
	  "wǎn": "挽晚碗惋婉",
	  "ái,āi": "挨",
	  "mò,mù": "莫",
	  "è,wù,ě,wū": "恶",
	  "tóng": "桐铜童彤瞳",
	  "xiào,jiào": "校",
	  "hé,hú": "核",
	  "yàng": "样漾",
	  "gēn": "根跟",
	  "gē": "哥鸽割歌戈",
	  "chǔ": "础储楚",
	  "pò": "破魄",
	  "tào": "套",
	  "chái": "柴豺",
	  "dǎng": "党",
	  "mián": "眠绵棉",
	  "shài": "晒",
	  "jǐn": "紧锦谨",
	  "yūn,yùn": "晕",
	  "huàng,huǎng": "晃",
	  "shǎng": "晌赏",
	  "ēn": "恩",
	  "ài,āi": "唉",
	  "ā,á,ǎ,à,a": "啊",
	  "bà,ba,pí": "罢",
	  "zéi": "贼",
	  "tiě": "铁",
	  "zuàn,zuān": "钻",
	  "qiān,yán": "铅",
	  "quē": "缺",
	  "tè": "特",
	  "chéng,shèng": "乘",
	  "dí": "敌笛涤嘀嫡",
	  "zū": "租",
	  "chèng": "秤",
	  "mì,bì": "秘泌",
	  "chēng,chèn,chèng": "称",
	  "tòu": "透",
	  "zhài": "债寨",
	  "dào,dǎo": "倒",
	  "tǎng,cháng": "倘",
	  "chàng,chāng": "倡",
	  "juàn": "倦绢眷",
	  "chòu,xiù": "臭",
	  "shè,yè,yì": "射",
	  "xú": "徐",
	  "háng": "航杭",
	  "ná": "拿",
	  "wēng": "翁嗡",
	  "diē": "爹跌",
	  "ài": "爱碍艾隘",
	  "gē,gé": "胳搁",
	  "cuì": "脆翠悴粹",
	  "zàng": "脏葬",
	  "láng": "狼廊琅榔",
	  "féng": "逢",
	  "è": "饿扼遏愕噩鳄",
	  "shuāi,cuī": "衰",
	  "gāo": "高糕羔篙",
	  "zhǔn": "准",
	  "bìng": "病",
	  "téng": "疼腾誊藤",
	  "liáng,liàng": "凉量",
	  "táng": "唐堂塘膛糖棠搪",
	  "pōu": "剖",
	  "chù,xù": "畜",
	  "páng,bàng": "旁磅",
	  "lǚ": "旅屡吕侣铝缕履",
	  "fěn": "粉",
	  "liào": "料镣",
	  "shāo": "烧",
	  "yān": "烟淹",
	  "tāo": "涛掏滔",
	  "lào": "涝酪",
	  "zhè": "浙蔗",
	  "xiāo": "消宵销萧硝箫嚣",
	  "hǎi": "海",
	  "zhǎng,zhàng": "涨",
	  "làng": "浪",
	  "rùn": "润闰",
	  "tàng": "烫",
	  "yǒng,chōng": "涌",
	  "huǐ": "悔毁",
	  "qiāo,qiǎo": "悄",
	  "hài": "害亥骇",
	  "jiā,jia,jie": "家",
	  "kuān": "宽",
	  "bīn": "宾滨彬缤濒",
	  "zhǎi": "窄",
	  "lǎng": "朗",
	  "dú,dòu": "读",
	  "zǎi": "宰",
	  "shàn,shān": "扇",
	  "shān,shàn": "苫",
	  "wà": "袜",
	  "xiáng": "祥翔",
	  "shuí": "谁",
	  "páo": "袍咆",
	  "bèi,pī": "被",
	  "tiáo,diào,zhōu": "调",
	  "yuān": "冤鸳渊",
	  "bō,bāo": "剥",
	  "ruò": "弱",
	  "péi": "陪培赔",
	  "niáng": "娘",
	  "tōng": "通",
	  "néng,nài": "能",
	  "nán,nàn,nuó": "难",
	  "sāng": "桑",
	  "pěng": "捧",
	  "dǔ": "堵赌睹",
	  "yǎn": "掩眼演衍",
	  "duī": "堆",
	  "pái,pǎi": "排",
	  "tuī": "推",
	  "jiào,jiāo": "教",
	  "lüè": "掠略",
	  "jù,jū": "据",
	  "kòng": "控",
	  "zhù,zhuó,zhe": "著",
	  "jūn,jùn": "菌",
	  "lè,lēi": "勒",
	  "méng": "萌盟檬朦",
	  "cài": "菜",
	  "tī": "梯踢剔",
	  "shāo,sào": "梢",
	  "fù,pì": "副",
	  "piào,piāo": "票",
	  "shuǎng": "爽",
	  "shèng,chéng": "盛",
	  "què,qiāo,qiǎo": "雀",
	  "xuě": "雪",
	  "chí,shi": "匙",
	  "xuán": "悬玄漩",
	  "mī,mí": "眯",
	  "la,lā": "啦",
	  "shé,yí": "蛇",
	  "lèi,léi,lěi": "累",
	  "zhǎn,chán": "崭",
	  "quān,juàn,juān": "圈",
	  "yín": "银吟淫",
	  "bèn": "笨",
	  "lóng,lǒng": "笼",
	  "mǐn": "敏皿闽悯",
	  "nín": "您",
	  "ǒu": "偶藕",
	  "tōu": "偷",
	  "piān": "偏篇翩",
	  "dé,děi,de": "得",
	  "jiǎ,jià": "假",
	  "pán": "盘",
	  "chuán": "船",
	  "cǎi": "彩睬踩",
	  "lǐng": "领",
	  "liǎn": "脸敛",
	  "māo,máo": "猫",
	  "měng": "猛锰",
	  "cāi": "猜",
	  "háo": "毫豪壕嚎",
	  "má": "麻",
	  "guǎn": "馆管",
	  "còu": "凑",
	  "hén": "痕",
	  "kāng": "康糠慷",
	  "xuán,xuàn": "旋",
	  "zhe,zhuó,zháo,zhāo": "着",
	  "lǜ,shuài": "率",
	  "gài,gě,hé": "盖",
	  "cū": "粗",
	  "lín,lìn": "淋",
	  "qú,jù": "渠",
	  "jiàn,jiān": "渐溅",
	  "hùn,hún": "混",
	  "pó": "婆",
	  "qíng": "情晴擎",
	  "cǎn": "惨",
	  "sù,xiǔ,xiù": "宿",
	  "yáo": "窑谣摇遥肴姚",
	  "móu": "谋",
	  "mì": "密蜜觅",
	  "huǎng": "谎恍幌",
	  "tán,dàn": "弹",
	  "suí": "随",
	  "yǐn,yìn": "隐",
	  "jǐng,gěng": "颈",
	  "shéng": "绳",
	  "qí": "骑棋旗歧祈脐畦崎鳍",
	  "chóu": "绸酬筹稠愁畴",
	  "lǜ,lù": "绿",
	  "dā": "搭",
	  "kuǎn": "款",
	  "tǎ": "塔",
	  "qū,cù": "趋",
	  "tí,dī,dǐ": "提",
	  "jiē,qì": "揭",
	  "xǐ": "喜徙",
	  "sōu": "搜艘",
	  "chā": "插",
	  "lǒu,lōu": "搂",
	  "qī,jī": "期",
	  "rě": "惹",
	  "sàn,sǎn": "散",
	  "dǒng": "董懂",
	  "gě,gé": "葛",
	  "pú": "葡菩蒲",
	  "zhāo,cháo": "朝",
	  "luò,là,lào": "落",
	  "kuí": "葵魁",
	  "bàng": "棒傍谤",
	  "yǐ,yī": "椅",
	  "sēn": "森",
	  "gùn,hùn": "棍",
	  "bī": "逼",
	  "zhí,shi": "殖",
	  "xià,shà": "厦",
	  "liè,liě": "裂",
	  "xióng": "雄熊",
	  "zàn": "暂赞",
	  "yǎ": "雅",
	  "chǎng": "敞",
	  "zhǎng": "掌",
	  "shǔ": "暑鼠薯黍蜀署曙",
	  "zuì": "最罪醉",
	  "hǎn": "喊罕",
	  "jǐng,yǐng": "景",
	  "lǎ": "喇",
	  "pēn,pèn": "喷",
	  "pǎo,páo": "跑",
	  "chuǎn": "喘",
	  "hē,hè,yè": "喝",
	  "hóu": "喉猴",
	  "pù,pū": "铺",
	  "hēi": "黑",
	  "guō": "锅郭",
	  "ruì": "锐瑞",
	  "duǎn": "短",
	  "é": "鹅额讹俄",
	  "děng": "等",
	  "kuāng": "筐",
	  "shuì": "税睡",
	  "zhù,zhú": "筑",
	  "shāi": "筛",
	  "dá,dā": "答",
	  "ào": "傲澳懊",
	  "pái": "牌徘",
	  "bǎo,bǔ,pù": "堡",
	  "ào,yù": "奥",
	  "fān,pān": "番",
	  "là,xī": "腊",
	  "huá": "猾滑",
	  "rán": "然燃",
	  "chán": "馋缠蝉",
	  "mán": "蛮馒",
	  "tòng": "痛",
	  "shàn": "善擅膳赡",
	  "zūn": "尊遵",
	  "pǔ": "普谱圃浦",
	  "gǎng,jiǎng": "港",
	  "céng,zēng": "曾",
	  "wēn": "温瘟",
	  "kě": "渴",
	  "zhā": "渣",
	  "duò": "惰舵跺",
	  "gài": "溉概丐钙",
	  "kuì": "愧",
	  "yú,tōu": "愉",
	  "wō": "窝蜗",
	  "cuàn": "窜篡",
	  "qún": "裙群",
	  "qiáng,qiǎng,jiàng": "强",
	  "shǔ,zhǔ": "属",
	  "zhōu,yù": "粥",
	  "sǎo": "嫂",
	  "huǎn": "缓",
	  "piàn": "骗",
	  "mō": "摸",
	  "shè,niè": "摄",
	  "tián,zhèn": "填",
	  "gǎo": "搞稿镐",
	  "suàn": "蒜算",
	  "méng,mēng,měng": "蒙",
	  "jìn,jīn": "禁",
	  "lóu": "楼娄",
	  "lài": "赖癞",
	  "lù,liù": "碌",
	  "pèng": "碰",
	  "léi": "雷",
	  "báo": "雹",
	  "dū": "督",
	  "nuǎn": "暖",
	  "xiē": "歇楔蝎",
	  "kuà": "跨胯",
	  "tiào,táo": "跳",
	  "é,yǐ": "蛾",
	  "sǎng": "嗓",
	  "qiǎn": "遣谴",
	  "cuò": "错挫措锉",
	  "ǎi": "矮蔼",
	  "shǎ": "傻",
	  "cuī": "催摧崔",
	  "tuǐ": "腿",
	  "chù": "触矗",
	  "jiě,jiè,xiè": "解",
	  "shù,shǔ,shuò": "数",
	  "mǎn": "满",
	  "liū,liù": "溜",
	  "gǔn": "滚",
	  "sāi,sài,sè": "塞",
	  "pì,bì": "辟",
	  "dié": "叠蝶谍碟",
	  "fèng,féng": "缝",
	  "qiáng": "墙",
	  "piě,piē": "撇",
	  "zhāi": "摘斋",
	  "shuāi": "摔",
	  "mó,mú": "模",
	  "bǎng,bàng": "榜",
	  "zhà": "榨乍诈",
	  "niàng": "酿",
	  "zāo": "遭糟",
	  "suān": "酸",
	  "shang,cháng": "裳",
	  "sòu": "嗽",
	  "là": "蜡辣",
	  "qiāo": "锹敲跷",
	  "zhuàn": "赚撰",
	  "wěn": "稳吻紊",
	  "bí": "鼻荸",
	  "mó": "膜魔馍摹蘑",
	  "xiān,xiǎn": "鲜",
	  "yí,nǐ": "疑",
	  "gāo,gào": "膏",
	  "zhē": "遮",
	  "duān": "端",
	  "màn": "漫慢曼幔",
	  "piāo,piào,piǎo": "漂",
	  "lòu": "漏陋",
	  "sài": "赛",
	  "nèn": "嫩",
	  "dèng": "凳邓瞪",
	  "suō,sù": "缩",
	  "qù,cù": "趣",
	  "sā,sǎ": "撒",
	  "tàng,tāng": "趟",
	  "chēng": "撑",
	  "zēng": "增憎",
	  "cáo": "槽曹",
	  "héng,hèng": "横",
	  "piāo": "飘",
	  "mán,mén": "瞒",
	  "tí": "题蹄啼",
	  "yǐng": "影颖",
	  "bào,pù": "暴",
	  "tà": "踏蹋",
	  "kào": "靠铐",
	  "pì": "僻屁譬",
	  "tǎng": "躺",
	  "dé": "德",
	  "mó,mā": "摩",
	  "shú": "熟秫赎",
	  "hú,hū,hù": "糊",
	  "pī,pǐ": "劈",
	  "cháo": "潮巢",
	  "cāo": "操糙",
	  "yàn,yān": "燕",
	  "diān": "颠掂",
	  "báo,bó,bò": "薄",
	  "cān": "餐",
	  "xǐng": "醒",
	  "zhěng": "整拯",
	  "zuǐ": "嘴",
	  "zèng": "赠",
	  "mó,mò": "磨",
	  "níng": "凝狞柠",
	  "jiǎo,zhuó": "缴",
	  "cā": "擦",
	  "cáng,zàng": "藏",
	  "fán,pó": "繁",
	  "bì,bei": "臂",
	  "bèng": "蹦泵",
	  "pān": "攀潘",
	  "chàn,zhàn": "颤",
	  "jiāng,qiáng": "疆",
	  "rǎng": "壤攘",
	  "jiáo,jué,jiào": "嚼",
	  "rǎng,rāng": "嚷",
	  "chǔn": "蠢",
	  "lù,lòu": "露",
	  "náng,nāng": "囊",
	  "dǎi": "歹",
	  "rǒng": "冗",
	  "hāng,bèn": "夯",
	  "āo,wā": "凹",
	  "féng,píng": "冯",
	  "yū": "迂淤",
	  "xū,yù": "吁",
	  "lèi,lē": "肋",
	  "kōu": "抠",
	  "lūn,lún": "抡",
	  "jiè,gài": "芥",
	  "xīn,xìn": "芯",
	  "chā,chà": "杈",
	  "xiāo,xiào": "肖",
	  "zhī,zī": "吱",
	  "ǒu,ōu,òu": "呕",
	  "nà,nè": "呐",
	  "qiàng,qiāng": "呛",
	  "tún,dùn": "囤",
	  "kēng,háng": "吭",
	  "shǔn": "吮",
	  "diàn,tián": "佃",
	  "sì,cì": "伺",
	  "zhǒu": "肘帚",
	  "diàn,tián,shèng": "甸",
	  "páo,bào": "刨",
	  "lìn": "吝赁躏",
	  "duì,ruì,yuè": "兑",
	  "zhuì": "坠缀赘",
	  "kē,kě": "坷",
	  "tuò,tà,zhí": "拓",
	  "fú,bì": "拂",
	  "nǐng,níng,nìng": "拧",
	  "ào,ǎo,niù": "拗",
	  "kē,hē": "苛",
	  "yān,yǎn": "奄",
	  "hē,a,kē": "呵",
	  "gā,kā": "咖",
	  "biǎn": "贬匾",
	  "jiǎo,yáo": "侥",
	  "chà,shā": "刹",
	  "āng": "肮",
	  "wèng": "瓮",
	  "nüè,yào": "疟",
	  "páng": "庞螃",
	  "máng,méng": "氓",
	  "gē,yì": "疙",
	  "jǔ,jù": "沮",
	  "zú,cù": "卒",
	  "nìng": "泞",
	  "chǒng": "宠",
	  "wǎn,yuān": "宛",
	  "mí,mǐ": "弥",
	  "qì,qiè,xiè": "契",
	  "xié,jiā": "挟",
	  "duò,duǒ": "垛",
	  "jiá": "荚颊",
	  "zhà,shān,shi,cè": "栅",
	  "bó,bèi": "勃",
	  "zhóu,zhòu": "轴",
	  "nüè": "虐",
	  "liē,liě,lié,lie": "咧",
	  "dǔn": "盹",
	  "xūn": "勋",
	  "yo,yō": "哟",
	  "mī": "咪",
	  "qiào,xiào": "俏",
	  "hóu,hòu": "侯",
	  "pēi": "胚",
	  "tāi": "胎",
	  "luán": "峦",
	  "sà": "飒萨",
	  "shuò": "烁",
	  "xuàn": "炫",
	  "píng,bǐng": "屏",
	  "nà,nuó": "娜",
	  "pá,bà": "耙",
	  "gěng": "埂耿梗",
	  "niè": "聂镊孽",
	  "mǎng": "莽",
	  "qī,xī": "栖",
	  "jiǎ,gǔ": "贾",
	  "chěng": "逞",
	  "pēng": "砰烹",
	  "láo,lào": "唠",
	  "bàng,bèng": "蚌",
	  "gōng,zhōng": "蚣",
	  "li,lǐ,lī": "哩",
	  "suō": "唆梭嗦",
	  "hēng": "哼",
	  "zāng": "赃",
	  "qiào": "峭窍撬",
	  "mǎo": "铆",
	  "ǎn": "俺",
	  "sǒng": "耸",
	  "juè,jué": "倔",
	  "yīn,yān,yǐn": "殷",
	  "guàng": "逛",
	  "něi": "馁",
	  "wō,guō": "涡",
	  "lào,luò": "烙",
	  "nuò": "诺懦糯",
	  "zhūn": "谆",
	  "niǎn,niē": "捻",
	  "qiā": "掐",
	  "yè,yē": "掖",
	  "chān,xiān,càn,shǎn": "掺",
	  "dǎn,shàn": "掸",
	  "fēi,fěi": "菲",
	  "qián,gān": "乾",
	  "shē": "奢赊",
	  "shuò,shí": "硕",
	  "luō,luó,luo": "啰",
	  "shá": "啥",
	  "hǔ,xià": "唬",
	  "tuò": "唾",
	  "bēng": "崩",
	  "dāng,chēng": "铛",
	  "xiǎn,xǐ": "铣",
	  "jiǎo,jiáo": "矫",
	  "tiáo": "笤",
	  "kuǐ,guī": "傀",
	  "xìn": "衅",
	  "dōu": "兜",
	  "jì,zhài": "祭",
	  "xiáo": "淆",
	  "tǎng,chǎng": "淌",
	  "chún,zhūn": "淳",
	  "shuàn": "涮",
	  "dāng": "裆",
	  "wèi,yù": "尉",
	  "duò,huī": "堕",
	  "chuò,chāo": "绰",
	  "bēng,běng,bèng": "绷",
	  "zōng,zèng": "综",
	  "zhuó,zuó": "琢",
	  "chuǎi,chuài,chuāi,tuán,zhuī": "揣",
	  "péng,bāng": "彭",
	  "chān": "搀",
	  "cuō": "搓",
	  "sāo": "搔",
	  "yē": "椰",
	  "zhuī,chuí": "椎",
	  "léng,lēng,líng": "棱",
	  "hān": "酣憨",
	  "sū": "酥",
	  "záo": "凿",
	  "qiào,qiáo": "翘",
	  "zhā,chā": "喳",
	  "bǒ": "跛",
	  "há,gé": "蛤",
	  "qiàn,kàn": "嵌",
	  "bāi": "掰",
	  "yān,ā": "腌",
	  "wàn": "腕",
	  "dūn,duì": "敦",
	  "kuì,huì": "溃",
	  "jiǒng": "窘",
	  "sāo,sǎo": "骚",
	  "pìn": "聘",
	  "bǎ": "靶",
	  "xuē": "靴薛",
	  "hāo": "蒿",
	  "léng": "楞",
	  "kǎi,jiē": "楷",
	  "pín,bīn": "频",
	  "zhuī": "锥",
	  "tuí": "颓",
	  "sāi": "腮",
	  "liú,liù": "馏",
	  "nì,niào": "溺",
	  "qǐn": "寝",
	  "luǒ": "裸",
	  "miù": "谬",
	  "jiǎo,chāo": "剿",
	  "áo,āo": "熬",
	  "niān": "蔫",
	  "màn,wàn": "蔓",
	  "chá,chā": "碴",
	  "xūn,xùn": "熏",
	  "tiǎn": "舔",
	  "sēng": "僧",
	  "da,dá": "瘩",
	  "guǎ": "寡",
	  "tuì,tùn": "褪",
	  "niǎn": "撵碾",
	  "liáo,liāo": "撩",
	  "cuō,zuǒ": "撮",
	  "ruǐ": "蕊",
	  "cháo,zhāo": "嘲",
	  "biē": "憋鳖",
	  "hēi,mò": "嘿",
	  "zhuàng,chuáng": "幢",
	  "jī,qǐ": "稽",
	  "lǒu": "篓",
	  "lǐn": "凛檩",
	  "biě,biē": "瘪",
	  "liáo,lào,lǎo": "潦",
	  "chéng,dèng": "澄",
	  "lèi,léi": "擂",
	  "piáo": "瓢",
	  "shà": "霎",
	  "mò,má": "蟆",
	  "qué": "瘸",
	  "liáo,liǎo": "燎",
	  "liào,liǎo": "瞭",
	  "sào,sāo": "臊",
	  "mí,méi": "糜",
	  "ái": "癌",
	  "tún": "臀",
	  "huò,huō,huá": "豁",
	  "pù,bào": "瀑",
	  "chuō": "戳",
	  "zǎn,cuán": "攒",
	  "cèng": "蹭",
	  "bò,bǒ": "簸",
	  "bó,bù": "簿",
	  "bìn": "鬓",
	  "suǐ": "髓",
	  "ráng": "瓤"
	};

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var assign = __webpack_require__(462);
	// XXX: Symbol when web support.
	var PINYIN_STYLE = {
	  NORMAL: 0, // 普通风格，不带音标。
	  TONE: 1, // 标准风格，音标在韵母的第一个字母上。
	  TONE2: 2, // 声调以数字形式在拼音之后，使用数字 0~4 标识。
	  TO3NE: 5, // 声调以数字形式在声母之后，使用数字 0~4 标识。
	  INITIALS: 3, // 仅需要声母部分。
	  FIRST_LETTER: 4 };
	var DEFAULT_OPTIONS = {
	  style: PINYIN_STYLE.TONE, // 风格
	  segment: false, // 分词。
	  heteronym: false };

	// 声母表。
	var INITIALS = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(",");
	// 韵母表。
	//const FINALS = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
	// 带音标字符。
	var PHONETIC_SYMBOL = __webpack_require__(463);
	var RE_PHONETIC_SYMBOL = new RegExp("([" + Object.keys(PHONETIC_SYMBOL).join("") + "])", "g");
	var RE_TONE2 = /([aeoiuvnm])([0-4])$/;

	/*
	 * 格式化拼音为声母（Initials）形式。
	 * @param {String}
	 * @return {String}
	 */
	function initials(pinyin) {
	  for (var i = 0, l = INITIALS.length; i < l; i++) {
	    if (pinyin.indexOf(INITIALS[i]) === 0) {
	      return INITIALS[i];
	    }
	  }
	  return "";
	}

	var Pinyin = function () {
	  function Pinyin(dict) {
	    _classCallCheck(this, Pinyin);

	    this._dict = dict;
	  }

	  // @param {String} hans 要转为拼音的目标字符串（汉字）。
	  // @param {Object} options, 可选，用于指定拼音风格，是否启用多音字。
	  // @return {Array} 返回的拼音列表。


	  _createClass(Pinyin, [{
	    key: "convert",
	    value: function convert(hans, options) {

	      if (typeof hans !== "string") {
	        return [];
	      }

	      options = assign({}, DEFAULT_OPTIONS, options);

	      var pys = [];
	      var nohans = "";

	      for (var i = 0, firstCharCode, words, l = hans.length; i < l; i++) {

	        words = hans[i];
	        firstCharCode = words.charCodeAt(0);

	        if (this._dict[firstCharCode]) {

	          // ends of non-chinese words.
	          if (nohans.length > 0) {
	            pys.push([nohans]);
	            nohans = ""; // reset non-chinese words.
	          }

	          pys.push(this.single_pinyin(words, options));
	        } else {
	          nohans += words;
	        }
	      }

	      // 清理最后的非中文字符串。
	      if (nohans.length > 0) {
	        pys.push([nohans]);
	        nohans = ""; // reset non-chinese words.
	      }
	      return pys;
	    }

	    // 单字拼音转换。
	    // @param {String} han, 单个汉字
	    // @return {Array} 返回拼音列表，多音字会有多个拼音项。

	  }, {
	    key: "single_pinyin",
	    value: function single_pinyin(han, options) {

	      if (typeof han !== "string") {
	        return [];
	      }
	      if (han.length !== 1) {
	        return this.single_pinyin(han.charAt(0), options);
	      }

	      var hanCode = han.charCodeAt(0);

	      if (!this._dict[hanCode]) {
	        return [han];
	      }

	      var pys = this._dict[hanCode].split(",");
	      if (!options.heteronym) {
	        return [Pinyin.toFixed(pys[0], options.style)];
	      }

	      // 临时存储已存在的拼音，避免多音字拼音转换为非注音风格出现重复。
	      var py_cached = {};
	      var pinyins = [];
	      for (var i = 0, py, l = pys.length; i < l; i++) {
	        py = Pinyin.toFixed(pys[i], options.style);
	        if (py_cached.hasOwnProperty(py)) {
	          continue;
	        }
	        py_cached[py] = py;

	        pinyins.push(py);
	      }
	      return pinyins;
	    }

	    /**
	     * 格式化拼音风格。
	     *
	     * @param {String} pinyin TONE 风格的拼音。
	     * @param {ENUM} style 目标转换的拼音风格。
	     * @return {String} 转换后的拼音。
	     */

	  }, {
	    key: "compare",


	    /**
	     * 比较两个汉字转成拼音后的排序顺序，可以用作默认的拼音排序算法。
	     *
	     * @param {String} hanA 汉字字符串 A。
	     * @return {String} hanB 汉字字符串 B。
	     * @return {Number} 返回 -1，0，或 1。
	     */
	    value: function compare(hanA, hanB) {
	      var pinyinA = this.convert(hanA, DEFAULT_OPTIONS);
	      var pinyinB = this.convert(hanB, DEFAULT_OPTIONS);
	      return String(pinyinA).localeCompare(pinyinB);
	    }
	  }], [{
	    key: "toFixed",
	    value: function toFixed(pinyin, style) {
	      var tone = ""; // 声调。
	      var first_letter = void 0;
	      var py = void 0;
	      switch (style) {
	        case PINYIN_STYLE.INITIALS:
	          return initials(pinyin);

	        case PINYIN_STYLE.FIRST_LETTER:
	          first_letter = pinyin.charAt(0);
	          if (PHONETIC_SYMBOL.hasOwnProperty(first_letter)) {
	            first_letter = PHONETIC_SYMBOL[first_letter].charAt(0);
	          }
	          return first_letter;

	        case PINYIN_STYLE.NORMAL:
	          return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
	            return PHONETIC_SYMBOL[$1_phonetic].replace(RE_TONE2, "$1");
	          });

	        case PINYIN_STYLE.TO3NE:
	          return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
	            return PHONETIC_SYMBOL[$1_phonetic];
	          });

	        case PINYIN_STYLE.TONE2:
	          py = pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1) {
	            // 声调数值。
	            tone = PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$2");

	            return PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$1");
	          });
	          return py + tone;

	        case PINYIN_STYLE.TONE:
	        default:
	          return pinyin;
	      }
	    }
	  }, {
	    key: "STYLE_NORMAL",
	    get: function get() {
	      return PINYIN_STYLE.NORMAL;
	    }
	  }, {
	    key: "STYLE_TONE",
	    get: function get() {
	      return PINYIN_STYLE.TONE;
	    }
	  }, {
	    key: "STYLE_TONE2",
	    get: function get() {
	      return PINYIN_STYLE.TONE2;
	    }
	  }, {
	    key: "STYLE_TO3NE",
	    get: function get() {
	      return PINYIN_STYLE.TO3NE;
	    }
	  }, {
	    key: "STYLE_INITIALS",
	    get: function get() {
	      return PINYIN_STYLE.INITIALS;
	    }
	  }, {
	    key: "STYLE_FIRST_LETTER",
	    get: function get() {
	      return PINYIN_STYLE.FIRST_LETTER;
	    }
	  }, {
	    key: "DEFAULT_OPTIONS",
	    get: function get() {
	      return DEFAULT_OPTIONS;
	    }
	  }]);

	  return Pinyin;
	}();

	module.exports = Pinyin;

/***/ },

/***/ 462:
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(_extends({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ },

/***/ 463:
/***/ function(module, exports) {

	"use strict";

	// 带音标字符。
	module.exports = {
	  "ā": "a1",
	  "á": "a2",
	  "ǎ": "a3",
	  "à": "a4",
	  "ē": "e1",
	  "é": "e2",
	  "ě": "e3",
	  "è": "e4",
	  "ō": "o1",
	  "ó": "o2",
	  "ǒ": "o3",
	  "ò": "o4",
	  "ī": "i1",
	  "í": "i2",
	  "ǐ": "i3",
	  "ì": "i4",
	  "ū": "u1",
	  "ú": "u2",
	  "ǔ": "u3",
	  "ù": "u4",
	  "ü": "v0",
	  "ǘ": "v2",
	  "ǚ": "v3",
	  "ǜ": "v4",
	  "ń": "n2",
	  "ň": "n3",
	  "": "m2"
	};

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(493)
	__webpack_require__(495)

	var Component = __webpack_require__(427)(
	  /* script */
	  __webpack_require__(497),
	  /* template */
	  __webpack_require__(498),
	  /* scopeId */
	  "data-v-4e478d60",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\HTML5\\R2\\r2cn.github.io\\src\\pages\\receives\\edit.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4e478d60", Component.options)
	  } else {
	    hotAPI.reload("data-v-4e478d60", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(494);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("1079b74a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e478d60&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e478d60&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.el-table .el-input-con[data-v-4e478d60] {\n  padding: 8px 0;\n}\n.el-table .el-input-con .small-input[data-v-4e478d60] {\n  width: 180px;\n}\n.el-table .el-input-con .el-input-number[data-v-4e478d60] {\n  width: 120px;\n  display: block;\n}\n.el-table .el-input-con .el-form-item[data-v-4e478d60] {\n  margin: 10px 0;\n}\n.order-bar[data-v-4e478d60] {\n  color: #99a9bf;\n  font-size: 18px;\n  padding: 20px 0;\n}\n.order-bar .right[data-v-4e478d60] {\n  font-size: 14px;\n}\n.remark-con[data-v-4e478d60] {\n  padding: 20px 0 100px 0;\n}\n.submit-con[data-v-4e478d60] {\n  border-top: 1px solid #e5e5e5;\n  padding: 20px 10px;\n  color: #475669;\n  position: fixed;\n  left: 110px;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  z-index: 888;\n}\n.submit-con .orange[data-v-4e478d60] {\n  color: #ff6600;\n}\n.submit-con .left[data-v-4e478d60],\n.submit-con .middle[data-v-4e478d60] {\n  line-height: 36px;\n  height: 36px;\n}\n.submit-con .middle[data-v-4e478d60] {\n  text-align: center;\n}\n.submit-con .middle .tooltips[data-v-4e478d60] {\n  padding-left: 10px;\n}\n.submit-con .right[data-v-4e478d60] {\n  text-align: right;\n}\n.po-dialog .el-upload[data-v-4e478d60] {\n  margin: 0 auto;\n}\n.po-dialog .el-alert[data-v-4e478d60] {\n  width: 360px;\n  margin: 0 auto;\n  margin-top: 10px;\n}\n.po-dialog .dialog-body .el-select[data-v-4e478d60] {\n  display: inline-block;\n}\n.po-dialog .el-tabs[data-v-4e478d60] {\n  display: block;\n}\n.upload-tips i.el-icon-loading[data-v-4e478d60] {\n  font-size: 14px;\n}\n.upload-tips a[data-v-4e478d60] {\n  color: #20a0ff;\n}\n", ""]);

	// exports


/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(496);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(425)("497ac6f2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e478d60!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./edit.vue", function() {
	     var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e478d60!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./edit.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "\n.ma-dialog .dialog-body .el-table .el-table__body-wrapper {\n  overflow-x: hidden;\n}\n.ma-dialog .dialog-form {\n  float: right;\n}\n.ma-dialog .dialog-form .el-select {\n  width: 110px;\n}\n.ma-dialog .dialog-footer .left {\n  float: left;\n}\n.ma-dialog .btncon_right {\n  padding-top: 100px;\n  float: right;\n}\n.ma-dialog .paddingLeft {\n  padding-left: 10px;\n  padding-top: 6px;\n}\n", ""]);

	// exports


/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(utils, urls) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(436);

	var _pinyin = __webpack_require__(459);

	var _pinyin2 = _interopRequireDefault(_pinyin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	        var _ref;

	        var crumbs = [{ path: '/', name: '首页' }, { path: '/receives', name: '收货单' }, { path: '/receives/', name: '编辑收货记录' }];
	        var tableData = [];
	        var orderData = {};
	        var materials = [];
	        var dialogVisible = false;
	        var receiptId = '';
	        var source = 1;
	        var dialogMaterials = false; //选择物料弹窗
	        //验证用户输入值 将来考虑实现一个check.js库 如何复用?
	        var checkNumber = function checkNumber(rule, value, callback) {
	            if (value === '') {
	                return callback(new Error('该值不能为空'));
	            }
	            if (isNaN(value)) {
	                callback(new Error('请输入数字值'));
	            } else {
	                if (parseFloat(value) < 0) {
	                    callback(new Error('金额不能小于0'));
	                } else {
	                    callback();
	                }
	            }
	        };
	        return _ref = {
	            crumbs: crumbs,
	            tableData: tableData,
	            orderData: orderData,
	            materials: materials,
	            dialogVisible: dialogVisible,
	            dialogMaterials: dialogMaterials,
	            receiptId: receiptId,
	            source: source,
	            multipleSelection: [],
	            deleteReceiptDetailIds: [],
	            checkedMaterials: [], //选择物料弹窗
	            payStatus: [{ value: 0, name: "否" }, { value: 1, name: "是" }],
	            batchPurchasers: [], //采购员列表
	            batchSuppliers: [], //供应商列表
	            materialsArr: [],
	            dialogForm: {
	                materialType: "",
	                materialName: ""
	            },
	            pmsMaterialTypeVos: [], //物料类别列表
	            batchSelectPurchasers: '', // 批量设置采购员
	            batchSelectSuppliers: '', // 批量设置供应商
	            batchSelectPayStatus: '', // 批量设置是否付款
	            rules: { //验证规则
	                purchasePrice: [{ validator: checkNumber, trigger: 'blur' }],
	                totalFee: [{ validator: checkNumber, trigger: 'blur' }]
	            },
	            loading: true,
	            /*2016 12 28 新增物料 start*/
	            dialogMaterialsFlag: true
	        }, _defineProperty(_ref, 'pmsMaterialTypeVos', []), _defineProperty(_ref, 'pmsMaterialUnitVos', []), _defineProperty(_ref, 'ifShowType', false), _defineProperty(_ref, 'materialTypeAdd', ''), _defineProperty(_ref, 'ifShowUnit', false), _defineProperty(_ref, 'materialUnitAdd', ''), _defineProperty(_ref, 'formAddMaterial', {
	            materialName: '',
	            materialShortName: '',
	            materialTypeId: '',
	            materialUnitId: ''
	        }), _defineProperty(_ref, 'systemSupplierId', ''), _ref;
	    },

	    methods: {
	        handleSelectionChange: function handleSelectionChange(val) {
	            this.multipleSelection = val;
	        },
	        handleCheckAll: function handleCheckAll(val) {
	            //选择物料弹窗
	            this.checkedMaterials = val;
	        },
	        handleExport: function handleExport() {},
	        handlePrint: function handlePrint() {
	            this.$router.push({ name: 'receivesPrint', params: { id: this.receiptId } });
	        },
	        removeItem: function removeItem() {
	            var that = this;
	            this.multipleSelection.forEach(function (n, key) {
	                that.tableData.remove(n);
	                if (n.receiptDetailId) {
	                    that.deleteReceiptDetailIds.push(n.receiptDetailId);
	                }
	            });
	        },
	        loadAll: function loadAll() {
	            var _this = this;

	            //获取所有物料，采购员和供应商列表
	            this.$http({
	                url: '/pms/purchase/material/list.do',
	                method: 'POST',
	                body: { requestData: JSON.stringify({ "materialName": "" }) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.materials = data.result;
	                } else {
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	            this.$http({
	                url: '/pms/management/materialUnitAndType/list.do',
	                method: 'POST'
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.pmsMaterialTypeVos = data.result.pmsMaterialTypeVos;
	                } else {
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	            this.$http({
	                url: '/pms/receipt/user/option.do',
	                method: 'POST'
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this.batchPurchasers = data.result.pmsPurchaserVos;
	                    _this.batchSuppliers = data.result.pmsSupplierVos;
	                    _this.systemSupplierId = data.result.systemSupplierId;
	                } else {
	                    _this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	        },
	        fetchData: function fetchData() {
	            var _this2 = this;

	            //获取编辑的信息
	            this.loading = true;
	            var receiptId = this.$route.params.id;
	            var requestData = { "receiptId": receiptId };
	            this.$http({
	                url: '/pms/receipt/order/detail.do',
	                method: 'POST',
	                body: { requestData: JSON.stringify(requestData) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this2.tableData = data.result.pmsReceiptVo.pmsReceiptDetailVos;
	                    _this2.orderData.createUserName = data.result.pmsReceiptVo.createUserName;
	                    _this2.orderData.purchaseNo = data.result.pmsReceiptVo.purchaseNo;
	                    _this2.orderData.purchaseRemark = data.result.pmsReceiptVo.purchaseRemark;
	                    _this2.orderData.createTime = data.result.pmsReceiptVo.createTime;
	                } else {
	                    _this2.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	                _this2.loading = false;
	            });
	        },
	        handleBackToList: function handleBackToList() {
	            if (this.source == 1) {
	                this.$router.push({ path: '/receives' });
	            } else {
	                this.$router.push({ path: '/receives/direct' });
	            }
	        },
	        handleSubmitPO: function handleSubmitPO() {
	            var _this3 = this;

	            /*奇葩的验证 start*/
	            var that = this;
	            var pass = true;
	            this.tableData.forEach(function (n, key) {
	                var field1 = 'row' + key + 'a';
	                var field2 = 'row' + key + 'b';
	                that.$refs[field1].validate(function (valid) {
	                    if (!valid) {
	                        pass = false;
	                    }
	                });
	                that.$refs[field2].validate(function (valid) {
	                    if (!valid) {
	                        pass = false;
	                    }
	                });
	            });
	            if (!pass) {
	                return false;
	            }
	            /*奇葩的验证 end*/
	            var requestData = {};
	            var requestUrl = '/pms/receipt/detail/edit.do';
	            var retMsg = '编辑收货记录成功';
	            requestData.pmsReceiptDetailVos = [];
	            this.tableData.forEach(function (n, key) {
	                if (!n.supplierId || n.supplierId.length < 32) {
	                    n.supplierId = that.systemSupplierId;
	                    n.supplierName = '系统供应商';
	                }
	                if (!n.purchaserId || n.purchaserId.length < 32) {
	                    n.purchaserId = "0";
	                    n.purchaserName = '系统采购员';
	                }
	                /*2017 01 09 杨龙 未选择物料的行 直接忽略 不再提示*/
	                if (n.materialId && n.materialId != '') {
	                    requestData.pmsReceiptDetailVos.push(n);
	                }
	            });
	            requestData.receiptId = this.receiptId;
	            requestData.deleteReceiptDetailIds = this.deleteReceiptDetailIds;
	            this.$http({
	                url: requestUrl,
	                method: 'POST',
	                body: { requestData: JSON.stringify(requestData) },
	                emulateJSON: true
	            }).then(function (res) {
	                return res.body;
	            }).then(function (data) {
	                if (data.code == 200) {
	                    _this3.$message({
	                        message: retMsg,
	                        type: 'success'
	                    });
	                    if (_this3.source == 1) {
	                        _this3.$router.push({ path: '/receives' });
	                    } else {
	                        _this3.$router.push({ path: '/receives/direct' });
	                    }
	                } else {
	                    _this3.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
	        },
	        handleChangePurchaser: function handleChangePurchaser(item) {
	            if (item.purchaserId != undefined && item.purchaserId != '') {
	                var index = this.batchPurchasers.findIndex(function (el, index, arr) {
	                    return el.purchaserId == item.purchaserId;
	                });
	                if (index > -1) {
	                    //item.purchaserId=this.batchPurchasers[index].purchaserId;
	                    item.purchaserName = this.batchPurchasers[index].purchaserName;
	                }
	            }
	        },
	        handleChangeSupplier: function handleChangeSupplier(item) {
	            if (item.supplierId != undefined && item.supplierId != '') {
	                var index = this.batchSuppliers.findIndex(function (el, index, arr) {
	                    return el.supplierId == item.supplierId;
	                });
	                if (index > -1) {
	                    //item.supplierId=this.batchSuppliers[index].supplierId;
	                    item.supplierName = this.batchSuppliers[index].supplierName;
	                }
	            }
	        },

	        /*validates & computed functions*/
	        handleNewLine: function handleNewLine() {
	            this.tableData.push({
	                "materialId": "",
	                "materialName": "",
	                "materialTypeId": "",
	                "materialTypeName": "--",
	                "materialUnitId": "",
	                "materialUnitName": "--",
	                "no": 0,
	                "payStatus": 0,
	                "purchaseCount": 0,
	                "purchaseId": "",
	                "purchasePrice": 0,
	                "purchaserId": "",
	                "purchaserName": "",
	                "receiptDetailId": "",
	                "receivedCount": 0,
	                "supplierId": "",
	                "supplierName": "",
	                "totalFee": 0,
	                "editable": true
	            });
	        },
	        handleChangeMaterial: function handleChangeMaterial(item) {
	            if (item.materialId != undefined && item.materialId != '') {
	                var index = this.materials.findIndex(function (el, index, arr) {
	                    return el.materialId == item.materialId;
	                });
	                if (index > -1) {
	                    item.materialTypeName = this.materials[index].materialTypeName;
	                    item.materialTypeId = this.materials[index].materialTypeId;
	                    item.materialUnitName = this.materials[index].materialUnitName;
	                    item.materialUnitId = this.materials[index].materialUnitId;
	                    item.materialName = this.materials[index].materialName;

	                    //here 天启 物料列表 返回历史供应商和采购员
	                    item.purchaserId = this.materials[index].purchaserId;
	                    item.purchaserName = this.materials[index].purchaserName;
	                    item.supplierId = this.materials[index].supplierId;
	                    item.supplierName = this.materials[index].supplierName;
	                    //此处修改 记得同步到根据收货单收货，和编辑收货单那里
	                    item.purchasePrice = this.materials[index].purchasePrice;
	                }
	            }
	        },
	        handleChangePrice: function handleChangePrice(row) {
	            var number = +row.purchasePrice;
	            row.totalFee = isNaN(number) ? 0 : parseFloat(number * row.receivedCount).toFixed(2);
	        },
	        handleChangeTotal: function handleChangeTotal(row) {
	            var number = +row.totalFee;
	            if (row.receivedCount > 0) {
	                row.purchasePrice = isNaN(number) ? 0 : (row.totalFee / row.receivedCount).toFixed(2);
	            }
	        },
	        handleChangeCount: function handleChangeCount(row) {
	            var number = +row.purchasePrice;
	            setTimeout(function () {
	                row.totalFee = isNaN(number) ? 0 : parseFloat(number * row.receivedCount).toFixed(2);
	            }, 1000);
	        },

	        /*dialog 批量操纵*/
	        handleCancelDialog: function handleCancelDialog() {
	            this.dialogVisible = false;
	            this.batchSelectPurchasers = '';
	            this.batchSelectSuppliers = '';
	            this.batchSelectPayStatus = '';
	        },
	        handleConfirmDialog: function handleConfirmDialog() {
	            var that = this;
	            this.multipleSelection.forEach(function (n, key) {
	                if (that.batchSelectPurchasers != '' && that.batchSelectPurchasers != undefined) {
	                    n.purchaserId = that.batchSelectPurchasers;
	                }
	                if (that.batchSelectSuppliers != '' && that.batchSelectSuppliers != undefined) {
	                    n.supplierId = that.batchSelectSuppliers;
	                }
	                if (that.batchSelectPayStatus !== '' && that.batchSelectPayStatus != undefined) {
	                    n.payStatus = that.batchSelectPayStatus;
	                }
	            });
	            this.dialogVisible = false;
	            this.batchSelectPurchasers = '';
	            this.batchSelectSuppliers = '';
	            this.batchSelectPayStatus = '';
	        },

	        //选入物料弹窗
	        openDialogMaterials: function openDialogMaterials() {
	            this.dialogMaterials = true;
	            this.materialsArr = this.materials;
	        },
	        handleSearchMaterial: function handleSearchMaterial() {
	            var that = this;
	            this.materialsArr = this.materials.filter(function (item) {
	                return (!that.dialogForm.materialType || that.dialogForm.materialType == '' || item.materialTypeId == that.dialogForm.materialType) && (that.dialogForm.materialName == '' || item.materialName.indexOf(that.dialogForm.materialName) > -1 || item.materialShortName.indexOf(that.dialogForm.materialName) > -1);
	            });
	        },
	        handleGoAddMaterials: function handleGoAddMaterials() {
	            this.dialogMaterialsFlag = false;
	        },
	        handleCancelDialogMaterials: function handleCancelDialogMaterials() {
	            this.checkedMaterials = [];
	            this.$refs.materials.clearSelection();
	            this.dialogMaterials = false;
	        },
	        handleMaterialsClose: function handleMaterialsClose() {
	            this.dialogForm.materialType = '';
	            this.dialogForm.materialName = '';
	            this.dialogMaterialsFlag = true;
	        },
	        handleConfirmDialogMaterials: function handleConfirmDialogMaterials() {
	            var that = this;
	            this.checkedMaterials.forEach(function (n, key) {
	                var arr = [{
	                    "materialId": n.materialId,
	                    "materialName": n.materialName,
	                    "materialTypeId": n.materialTypeId,
	                    "materialTypeName": n.materialTypeName,
	                    "materialUnitId": n.materialUnitId,
	                    "materialUnitName": n.materialUnitName,
	                    "no": that.tableData.length + 1,
	                    "payStatus": 0,
	                    "purchaseCount": 0,
	                    "purchaseId": "",
	                    "purchasePrice": n.purchasePrice,
	                    "purchaserId": n.purchaserId,
	                    "purchaserName": n.purchaserName,
	                    "receiptDetailId": "",
	                    "receivedCount": 0,
	                    "supplierId": n.supplierId,
	                    "supplierName": n.supplierName,
	                    "totalFee": 0,
	                    "editable": false
	                }];
	                that.tableData = that.tableData.concat(arr);
	            });
	            this.checkedMaterials = [];
	            this.$refs.materials.clearSelection();
	            this.dialogMaterials = false;
	        },

	        //2016 12 28 新增物料
	        clickShowType: function clickShowType() {
	            this.ifShowType = true;
	        },
	        addMaterialType: function addMaterialType() {
	            var params = { materialTypeName: this.materialTypeAdd };
	            utils.post(urls.materialTypeAdd, params, this).then(function (data) {
	                if (data.code == 200) {
	                    this.$message({
	                        message: '新增物料类别成功',
	                        type: 'success'
	                    });
	                    this.formAddMaterial.materialTypeId = data.result;
	                    this.refresh();
	                }
	            });
	            this.ifShowType = false;
	        },
	        clickShowUnit: function clickShowUnit() {
	            this.ifShowUnit = true;
	        },
	        addMaterialUnit: function addMaterialUnit() {
	            var params = { materialUnitName: this.materialUnitAdd };
	            utils.post(urls.materialUnitAdd, params, this).then(function (data) {
	                if (data.code == 200) {
	                    this.$message({
	                        message: '新增进货单位成功',
	                        type: 'success'
	                    });
	                    this.formAddMaterial.materialUnitId = data.result;
	                    this.refresh();
	                }
	            });
	            this.ifShowUnit = false;
	        },
	        close: function close() {
	            this.dialogMaterialsFlag = true; //显示选择物料
	        },
	        onSubmit: function onSubmit(ifContinue) {
	            /*新增物料*/
	            utils.post(urls.materialAdd, this.formAddMaterial, this).then(function (data) {
	                var _this4 = this;

	                if (data.code == 200) {
	                    this.formAddMaterial.materialName = '';
	                    this.formAddMaterial.materialShortName = '';
	                    this.formAddMaterial.materialTypeId = '';
	                    this.formAddMaterial.materialUnitId = '';
	                    this.$http({
	                        url: '/pms/purchase/material/list.do',
	                        method: 'POST',
	                        body: { requestData: JSON.stringify({ "materialName": "" }) },
	                        emulateJSON: true
	                    }).then(function (res) {
	                        return res.body;
	                    }).then(function (data) {
	                        if (data.code == 200) {
	                            _this4.materials = data.result;
	                            _this4.materialsArr = _this4.materials.filter(function (item) {
	                                return (!that.dialogForm.materialType || that.dialogForm.materialType == '' || item.materialTypeId == that.dialogForm.materialType) && (that.dialogForm.materialName == '' || item.materialName.indexOf(that.dialogForm.materialName) > -1 || item.materialShortName.indexOf(that.dialogForm.materialName) > -1);
	                            });
	                            if (!ifContinue) {
	                                _this4.dialogMaterialsFlag = true; //显示选择物料
	                            }
	                        } else {
	                            _this4.$message({
	                                message: data.message,
	                                type: 'warning'
	                            });
	                        }
	                    });
	                }
	            });
	        },
	        refresh: function refresh() {
	            utils.post(urls.materialUnitAndTypeList, null, this).then(function (data) {
	                if (data.code == 200) {
	                    this.pmsMaterialTypeVos = data.result.pmsMaterialTypeVos;
	                    this.pmsMaterialUnitVos = data.result.pmsMaterialUnitVos;
	                }
	            });
	        }
	        /*添加物料结束*/

	    },
	    created: function created() {
	        this.loadAll();
	        this.refresh();
	        this.receiptId = this.$route.params.id ? this.$route.params.id : '';
	        this.source = this.$route.params.source;
	        this.fetchData();
	    },

	    watch: {
	        /*简拼*/
	        "formAddMaterial.materialName": function formAddMaterialMaterialName(word) {
	            var materialShortName = '';
	            var result = (0, _pinyin2.default)(word, {
	                style: _pinyin2.default.STYLE_FIRST_LETTER // 设置拼音风格
	            });
	            for (var i = 0; i < result.length; i++) {
	                materialShortName += result[i];
	            }
	            this.formAddMaterial.materialShortName = materialShortName;
	        }
	    },
	    computed: (0, _vuex.mapState)({
	        user: function user(state) {
	            return state.user;
	        },
	        showBatchOption: function showBatchOption(state) {
	            return this.multipleSelection.length > 0;
	        }
	    })
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(457), __webpack_require__(458)))

/***/ },

/***/ 498:
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
	  }, [_vm._v("编辑收货记录")])]), _vm._v(" "), _c('el-col', {
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
	    attrs: {
	      "type": "primary",
	      "disabled": !_vm.showBatchOption
	    },
	    on: {
	      "click": function($event) {
	        _vm.dialogVisible = true
	      }
	    }
	  }, [_vm._v("批量编辑")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "primary",
	      "disabled": !_vm.showBatchOption
	    },
	    on: {
	      "click": _vm.removeItem
	    }
	  }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "primary",
	      "icon": "plus"
	    },
	    on: {
	      "click": _vm.openDialogMaterials
	    }
	  }, [_vm._v("添加物料")])], 1), _vm._v(" "), _c('el-table', {
	    directives: [{
	      name: "loading",
	      rawName: "v-loading",
	      value: (_vm.loading),
	      expression: "loading"
	    }],
	    staticClass: "el-table_my",
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "element-loading-text": "玩命加载中",
	      "data": _vm.tableData,
	      "border": ""
	    },
	    on: {
	      "selection-change": _vm.handleSelectionChange
	    }
	  }, [_c('el-table-column', {
	    attrs: {
	      "type": "selection",
	      "width": "55"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "type": "index",
	      "label": "序",
	      "width": "55"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "label": "物料名称",
	      "min-width": "150",
	      "context": _vm._self
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', [(!_vm.row.editable) ? _c('span', [_vm._v(_vm._s(_vm.row.materialName))]) : _vm._e(), _vm._v(" "), (_vm.row.editable) ? _c('div', {
	            staticClass: "el-input-con"
	          }, [_c('el-form', {
	            attrs: {
	              "model": _vm.row
	            }
	          }, [_c('el-form-item', {
	            attrs: {
	              "prop": "materialId"
	            }
	          }, [_c('el-select', {
	            directives: [{
	              name: "model",
	              rawName: "v-model",
	              value: (_vm.row.materialId),
	              expression: "row.materialId"
	            }],
	            attrs: {
	              "clearable": "",
	              "filterable": "",
	              "placeholder": "物料名称"
	            },
	            domProps: {
	              "value": (_vm.row.materialId)
	            },
	            on: {
	              "change": function($event) {
	                _vm.handleChangeMaterial(_vm.row)
	              },
	              "input": function($event) {
	                _vm.row.materialId = $event
	              }
	            }
	          }, _vm._l((_vm.materials), function(item) {
	            return _c('el-option', {
	              attrs: {
	                "label": item.materialName,
	                "value": item.materialId
	              }
	            })
	          }))], 1)], 1)], 1) : _vm._e()])
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialTypeName",
	      "label": "类别",
	      "min-width": "75"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "label": "进货单价(元)",
	      "min-width": "120"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', {
	            staticClass: "el-input-con"
	          }, [_c('el-form', {
	            ref: 'row' + _vm.$index + 'a',
	            attrs: {
	              "model": _vm.row,
	              "rules": _vm.rules
	            }
	          }, [_c('el-form-item', {
	            attrs: {
	              "prop": "purchasePrice"
	            }
	          }, [_c('el-input', {
	            directives: [{
	              name: "model",
	              rawName: "v-model.number",
	              value: (_vm.row.purchasePrice),
	              expression: "row.purchasePrice",
	              modifiers: {
	                "number": true
	              }
	            }],
	            attrs: {
	              "maxlength": 6
	            },
	            domProps: {
	              "value": (_vm.row.purchasePrice)
	            },
	            on: {
	              "blur": [function($event) {
	                _vm.handleChangePrice(_vm.row)
	              }, function($event) {
	                _vm.$forceUpdate()
	              }],
	              "input": function($event) {
	                _vm.row.purchasePrice = _vm._n($event)
	              }
	            }
	          })], 1)], 1)], 1)
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "采购数量",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', {
	            staticClass: "el-input-con"
	          }, [_c('el-input', {
	            directives: [{
	              name: "model",
	              rawName: "v-model",
	              value: (_vm.row.purchaseCount),
	              expression: "row.purchaseCount"
	            }],
	            attrs: {
	              "disabled": "",
	              "placeholder": "采购数量",
	              "maxlength": 6
	            },
	            domProps: {
	              "value": (_vm.row.purchaseCount)
	            },
	            on: {
	              "input": function($event) {
	                _vm.row.purchaseCount = $event
	              }
	            }
	          })], 1)
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "收货数量",
	      "min-width": "140"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', {
	            staticClass: "el-input-con"
	          }, [_c('el-input-number', {
	            directives: [{
	              name: "model",
	              rawName: "v-model",
	              value: (_vm.row.receivedCount),
	              expression: "row.receivedCount"
	            }],
	            attrs: {
	              "placeholder": "收货数量"
	            },
	            domProps: {
	              "value": (_vm.row.receivedCount)
	            },
	            on: {
	              "change": function($event) {
	                _vm.handleChangeCount(_vm.row)
	              },
	              "input": function($event) {
	                _vm.row.receivedCount = $event
	              }
	            }
	          })], 1)
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialUnitName",
	      "label": "单位",
	      "min-width": "65"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "合计(元)",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', {
	            staticClass: "el-input-con"
	          }, [_c('el-form', {
	            ref: 'row' + _vm.$index + 'b',
	            attrs: {
	              "model": _vm.row,
	              "rules": _vm.rules
	            }
	          }, [_c('el-form-item', {
	            attrs: {
	              "prop": "totalFee"
	            }
	          }, [_c('el-input', {
	            directives: [{
	              name: "model",
	              rawName: "v-model.number",
	              value: (_vm.row.totalFee),
	              expression: "row.totalFee",
	              modifiers: {
	                "number": true
	              }
	            }],
	            attrs: {
	              "maxlength": 8
	            },
	            domProps: {
	              "value": (_vm.row.totalFee)
	            },
	            on: {
	              "blur": [function($event) {
	                _vm.handleChangeTotal(_vm.row)
	              }, function($event) {
	                _vm.$forceUpdate()
	              }],
	              "input": function($event) {
	                _vm.row.totalFee = _vm._n($event)
	              }
	            }
	          })], 1)], 1)], 1)
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "是否付款",
	      "min-width": "100"
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', {
	            staticClass: "el-input-con"
	          }, [_c('el-select', {
	            directives: [{
	              name: "model",
	              rawName: "v-model",
	              value: (_vm.row.payStatus),
	              expression: "row.payStatus"
	            }],
	            domProps: {
	              "value": (_vm.row.payStatus)
	            },
	            on: {
	              "input": function($event) {
	                _vm.row.payStatus = $event
	              }
	            }
	          }, _vm._l((_vm.payStatus), function(item) {
	            return _c('el-option', {
	              attrs: {
	                "label": item.name,
	                "value": item.value
	              }
	            })
	          }))], 1)
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "采购员",
	      "min-width": "130",
	      "show-overflow-tooltip": ""
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-select', {
	            directives: [{
	              name: "model",
	              rawName: "v-model",
	              value: (_vm.row.purchaserId),
	              expression: "row.purchaserId"
	            }],
	            attrs: {
	              "placeholder": "系统采购员"
	            },
	            domProps: {
	              "value": (_vm.row.purchaserId)
	            },
	            on: {
	              "change": function($event) {
	                _vm.handleChangePurchaser(_vm.row)
	              },
	              "input": function($event) {
	                _vm.row.purchaserId = $event
	              }
	            }
	          }, _vm._l((_vm.batchPurchasers), function(item) {
	            return _c('el-option', {
	              attrs: {
	                "label": item.purchaserName,
	                "value": item.purchaserId
	              }
	            })
	          }))
	        
	      },
	      staticRenderFns: []
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "context": _vm._self,
	      "label": "供应商",
	      "min-width": "130",
	      "show-overflow-tooltip": ""
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('el-select', {
	            directives: [{
	              name: "model",
	              rawName: "v-model",
	              value: (_vm.row.supplierId),
	              expression: "row.supplierId"
	            }],
	            attrs: {
	              "placeholder": "系统供应商"
	            },
	            domProps: {
	              "value": (_vm.row.supplierId)
	            },
	            on: {
	              "change": function($event) {
	                _vm.handleChangeSupplier(_vm.row)
	              },
	              "input": function($event) {
	                _vm.row.supplierId = $event
	              }
	            }
	          }, _vm._l((_vm.batchSuppliers), function(item) {
	            return _c('el-option', {
	              attrs: {
	                "label": item.supplierName,
	                "value": item.supplierId
	              }
	            })
	          }))
	        
	      },
	      staticRenderFns: []
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "remark-con"
	  }, [_c('el-button', {
	    attrs: {
	      "type": "primary",
	      "icon": "plus"
	    },
	    on: {
	      "click": _vm.handleNewLine
	    }
	  }, [_vm._v("添加一行")])], 1), _vm._v(" "), _c('div', {
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
	  }), _vm._v(" "), _c('el-col', {
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
	    on: {
	      "click": _vm.handleBackToList
	    }
	  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": _vm.handleSubmitPO
	    }
	  }, [_vm._v("完成编辑")])], 1)])], 1)], 1)], 1)])]), _vm._v(" "), _c('el-dialog', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dialogVisible),
	      expression: "dialogVisible"
	    }],
	    staticClass: "po-dialog",
	    attrs: {
	      "title": "批量编辑",
	      "size": "small"
	    },
	    domProps: {
	      "value": (_vm.dialogVisible)
	    },
	    on: {
	      "input": function($event) {
	        _vm.dialogVisible = $event
	      }
	    }
	  }, [_c('div', {
	    staticClass: "dialog-body"
	  }, [_c('el-tabs', {
	    attrs: {
	      "type": "border-card"
	    }
	  }, [_c('el-tab-pane', {
	    attrs: {
	      "label": "采购员"
	    }
	  }, [_c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.batchSelectPurchasers),
	      expression: "batchSelectPurchasers"
	    }],
	    attrs: {
	      "placeholder": "请选择采购员"
	    },
	    domProps: {
	      "value": (_vm.batchSelectPurchasers)
	    },
	    on: {
	      "input": function($event) {
	        _vm.batchSelectPurchasers = $event
	      }
	    }
	  }, _vm._l((_vm.batchPurchasers), function(item) {
	    return _c('el-option', {
	      attrs: {
	        "label": item.purchaserName,
	        "value": item.purchaserId
	      }
	    })
	  }))], 1), _vm._v(" "), _c('el-tab-pane', {
	    attrs: {
	      "label": "供应商"
	    }
	  }, [_c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.batchSelectSuppliers),
	      expression: "batchSelectSuppliers"
	    }],
	    attrs: {
	      "placeholder": "请选择供应商"
	    },
	    domProps: {
	      "value": (_vm.batchSelectSuppliers)
	    },
	    on: {
	      "input": function($event) {
	        _vm.batchSelectSuppliers = $event
	      }
	    }
	  }, _vm._l((_vm.batchSuppliers), function(item) {
	    return _c('el-option', {
	      attrs: {
	        "label": item.supplierName,
	        "value": item.supplierId
	      }
	    })
	  }))], 1), _vm._v(" "), _c('el-tab-pane', {
	    attrs: {
	      "label": "是否付款"
	    }
	  }, [_c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.batchSelectPayStatus),
	      expression: "batchSelectPayStatus"
	    }],
	    attrs: {
	      "placeholder": "请选择是否已付款"
	    },
	    domProps: {
	      "value": (_vm.batchSelectPayStatus)
	    },
	    on: {
	      "input": function($event) {
	        _vm.batchSelectPayStatus = $event
	      }
	    }
	  }, _vm._l((_vm.payStatus), function(item) {
	    return _c('el-option', {
	      attrs: {
	        "label": item.name,
	        "value": item.value
	      }
	    })
	  }))], 1)], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "dialog-footer",
	    slot: "footer"
	  }, [_c('el-button', {
	    on: {
	      "click": _vm.handleCancelDialog
	    }
	  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.handleConfirmDialog
	    }
	  }, [_vm._v("保存")])], 1)]), _vm._v(" "), _c('el-dialog', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dialogMaterials),
	      expression: "dialogMaterials"
	    }],
	    staticClass: "ma-dialog",
	    attrs: {
	      "title": "请选择物料",
	      "size": "large"
	    },
	    domProps: {
	      "value": (_vm.dialogMaterials)
	    },
	    on: {
	      "close": _vm.handleMaterialsClose,
	      "input": function($event) {
	        _vm.dialogMaterials = $event
	      }
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dialogMaterialsFlag),
	      expression: "dialogMaterialsFlag"
	    }],
	    staticClass: "dialog-body"
	  }, [_c('el-form', {
	    staticClass: "dialog-form",
	    attrs: {
	      "inline": true,
	      "model": _vm.dialogForm
	    }
	  }, [_c('el-form-item', [_c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dialogForm.materialType),
	      expression: "dialogForm.materialType"
	    }],
	    attrs: {
	      "clearable": "",
	      "placeholder": "物料类别"
	    },
	    domProps: {
	      "value": (_vm.dialogForm.materialType)
	    },
	    on: {
	      "change": _vm.handleSearchMaterial,
	      "input": function($event) {
	        _vm.dialogForm.materialType = $event
	      }
	    }
	  }, _vm._l((_vm.pmsMaterialTypeVos), function(item) {
	    return _c('el-option', {
	      attrs: {
	        "label": item.materialTypeName,
	        "value": item.materialTypeId
	      }
	    })
	  }))], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dialogForm.materialName),
	      expression: "dialogForm.materialName"
	    }],
	    attrs: {
	      "placeholder": "请输入物料名称/简拼"
	    },
	    domProps: {
	      "value": (_vm.dialogForm.materialName)
	    },
	    on: {
	      "change": _vm.handleSearchMaterial,
	      "input": function($event) {
	        _vm.dialogForm.materialName = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.handleSearchMaterial
	    }
	  }, [_vm._v("查询")])], 1)], 1), _vm._v(" "), _c('el-table', {
	    ref: "materials",
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "data": _vm.materialsArr,
	      "height": "200",
	      "border": ""
	    },
	    on: {
	      "selection-change": _vm.handleCheckAll
	    }
	  }, [_c('el-table-column', {
	    attrs: {
	      "type": "selection",
	      "width": "55"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "type": "index",
	      "label": "序",
	      "width": "55"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialName",
	      "label": "物料名称",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialShortName",
	      "label": "物料简拼",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialTypeName",
	      "label": "物料类别",
	      "min-width": "100"
	    }
	  }), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "prop": "materialUnitName",
	      "label": "进货单位",
	      "min-width": "100"
	    }
	  })], 1)], 1), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dialogMaterialsFlag),
	      expression: "dialogMaterialsFlag"
	    }],
	    staticClass: "dialog-footer",
	    slot: "footer"
	  }, [_c('el-button', {
	    staticClass: "left",
	    on: {
	      "click": _vm.handleGoAddMaterials
	    }
	  }, [_vm._v("新增物料")]), _vm._v(" "), _c('el-button', {
	    on: {
	      "click": _vm.handleCancelDialogMaterials
	    }
	  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": _vm.handleConfirmDialogMaterials
	    }
	  }, [_vm._v("选入")])], 1), _vm._v(" "), _c('el-form', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.dialogMaterialsFlag),
	      expression: "!dialogMaterialsFlag"
	    }],
	    ref: "formAddMaterial",
	    attrs: {
	      "label-width": "100px"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_c('el-form-item', {
	    attrs: {
	      "label": "物料名称",
	      "required": ""
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formAddMaterial.materialName),
	      expression: "formAddMaterial.materialName"
	    }],
	    attrs: {
	      "placeholder": "请输入物料名称"
	    },
	    domProps: {
	      "value": (_vm.formAddMaterial.materialName)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formAddMaterial.materialName = $event
	      }
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 12
	    }
	  }, [_c('el-form-item', {
	    attrs: {
	      "label": "物料简拼",
	      "required": ""
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formAddMaterial.materialShortName),
	      expression: "formAddMaterial.materialShortName"
	    }],
	    domProps: {
	      "value": (_vm.formAddMaterial.materialShortName)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formAddMaterial.materialShortName = $event
	      }
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 11
	    }
	  }, [_c('el-form-item', {
	    attrs: {
	      "label": "物料类别",
	      "required": ""
	    }
	  }, [(!_vm.ifShowType) ? _c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formAddMaterial.materialTypeId),
	      expression: "formAddMaterial.materialTypeId"
	    }],
	    attrs: {
	      "placeholder": "物料类别"
	    },
	    domProps: {
	      "value": (_vm.formAddMaterial.materialTypeId)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formAddMaterial.materialTypeId = $event
	      }
	    }
	  }, _vm._l((_vm.pmsMaterialTypeVos), function(el) {
	    return _c('el-option', {
	      attrs: {
	        "label": el.materialTypeName,
	        "value": el.materialTypeId
	      }
	    })
	  })) : _vm._e(), _vm._v(" "), (_vm.ifShowType) ? _c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.materialTypeAdd),
	      expression: "materialTypeAdd"
	    }],
	    attrs: {
	      "placeholder": "请添加物料类别"
	    },
	    domProps: {
	      "value": (_vm.materialTypeAdd)
	    },
	    on: {
	      "input": function($event) {
	        _vm.materialTypeAdd = $event
	      }
	    }
	  }) : _vm._e()], 1)], 1), _vm._v(" "), _c('el-col', {
	    staticClass: "paddingLeft",
	    attrs: {
	      "span": 1
	    }
	  }, [(!_vm.ifShowType) ? _c('el-button', {
	    attrs: {
	      "type": "primary",
	      "icon": "edit",
	      "size": "mini"
	    },
	    on: {
	      "click": _vm.clickShowType
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.ifShowType) ? _c('el-button', {
	    attrs: {
	      "type": "primary",
	      "icon": "plus",
	      "size": "mini"
	    },
	    on: {
	      "click": _vm.addMaterialType
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 11
	    }
	  }, [_c('el-form-item', {
	    attrs: {
	      "label": "进货单位",
	      "required": ""
	    }
	  }, [(!_vm.ifShowUnit) ? _c('el-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.formAddMaterial.materialUnitId),
	      expression: "formAddMaterial.materialUnitId"
	    }],
	    attrs: {
	      "placeholder": "进货单位"
	    },
	    domProps: {
	      "value": (_vm.formAddMaterial.materialUnitId)
	    },
	    on: {
	      "input": function($event) {
	        _vm.formAddMaterial.materialUnitId = $event
	      }
	    }
	  }, _vm._l((_vm.pmsMaterialUnitVos), function(el) {
	    return _c('el-option', {
	      attrs: {
	        "label": el.materialUnitName,
	        "value": el.materialUnitId
	      }
	    })
	  })) : _vm._e(), _vm._v(" "), (_vm.ifShowUnit) ? _c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.materialUnitAdd),
	      expression: "materialUnitAdd"
	    }],
	    attrs: {
	      "placeholder": "请添加进货单位"
	    },
	    domProps: {
	      "value": (_vm.materialUnitAdd)
	    },
	    on: {
	      "input": function($event) {
	        _vm.materialUnitAdd = $event
	      }
	    }
	  }) : _vm._e()], 1)], 1), _vm._v(" "), _c('el-col', {
	    staticClass: "paddingLeft",
	    attrs: {
	      "span": 1
	    }
	  }, [(!_vm.ifShowUnit) ? _c('el-button', {
	    attrs: {
	      "type": "primary",
	      "icon": "edit",
	      "size": "mini"
	    },
	    on: {
	      "click": _vm.clickShowUnit
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.ifShowUnit) ? _c('el-button', {
	    attrs: {
	      "type": "primary",
	      "icon": "plus",
	      "size": "mini"
	    },
	    on: {
	      "click": _vm.addMaterialUnit
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 24
	    }
	  }, [_c('el-form-item', {
	    staticClass: "btncon_right"
	  }, [_c('el-button', {
	    on: {
	      "click": _vm.close
	    }
	  }, [_vm._v("返回")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": function($event) {
	        _vm.onSubmit(false)
	      }
	    }
	  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "orange"
	    },
	    on: {
	      "click": function($event) {
	        _vm.onSubmit(true)
	      }
	    }
	  }, [_vm._v("保存并新增")])], 1)], 1)], 1)], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4e478d60", module.exports)
	  }
	}

/***/ }

});