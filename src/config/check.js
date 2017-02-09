/**
 * Created by Administrator on 2015/3/4 0004.
 */
function Check(select){
    this.select = select;
}
var checkOk = '<b class="icon-checkOk"></b>';
var checkWr = '<b class="icon-checkWr"></b>';
var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
var number = /^[0-9]+(.[0-9]{1})?$/;
var username = /^[a-zA-Z][\w]{4,20}$/;
var workid = /^[A-Za-z0-9]+$/;
var nikenName = /^([\u4e00-\u9fa5]|[A-Za-z0-9])+$/;
var charactor = /^([\u4e00-\u9fa5]|[A-Za-z])+$/;
//字母数字下划线
var user = /^\w{4,20}$/;
//密码
var password = /^\w{6,20}$/;
//文本句子 中文 数字 字母 标点符号 空格
var longtext = /^([\u4e00-\u9fa5]|[A-Za-z0-9]|\s|[,.，。！？(（）)、；;:：…【】〗〖》《『』［］“”/\-—_+"'])+$/;
var longtext2 = /^[^\*\+\-\/!=<>]+$/;
//禁止使用引号，防止在html代码运行的时候被注入攻击而显示出错
var toMark = /^[^"']+$/;
//文本句子 中文 数字 字母 标点符号 不含空格
var longtext_notSpace = /^([\u4e00-\u9fa5]|[A-Za-z0-9]|[,.，。！？(（）)、；;:：…【】〗〖》《『』［］“”/\-—_+"'])+$/;
var capital = /^[A-Z]+$/;
//最多2位小数的浮点数
var float = /^-?\d+\.?\d{0,2}$/;
//最多1位小数的浮点数
var float_1 = /^-?\d+\.?\d{0,1}$/;
//整数
var integer = /^-?[0-9]+$/;
//非负浮点数
var positive_float = /^\d+(\.\d+)?$/;
//浮点数
var all_float = /^-?\d+(\.\d+)?$/;
//中文英文数字
var cnennumber = /^([\u4e00-\u9fa5]|[A-Za-z0-9])+$/;
//中文英文
var cnen = /^([\u4e00-\u9fa5]|[A-Za-z])+$/;
//中文英文和空格
var cn_enspace = /^([\u4e00-\u9fa5]|[A-Za-z]|\s)+$/;
//中文英文数字-_
var cn_ennumber = /^([\u4e00-\u9fa5]|[A-Za-z0-9]|\-|_)+$/;
//中文英文数字和空格
var cn_ennumberspace = /^([\u4e00-\u9fa5]|[A-Za-z0-9]|\s)+$/;
//中文英文数字-_和空格
var cn_ennumber_space = /^([\u4e00-\u9fa5]|[A-Za-z0-9]|\s|\-|_)+$/;
//英文数字-_
var ennumber = /^([A-Za-z0-9])+$/;
//英文数字-_
var en_number = /^([A-Za-z0-9]|\-|_)+$/;
//大写英文数字-_
var EN_number = /^[A-Z0-9]+$/;
//中文英文数字-_
var notSpace = /^[^ ]{6,20}$/;
//大于0的数字且只有2位小数
var gtzero= /^\d{0,9}\.?\d{1,2}$/;
//正整数
var positiveInteger= /^\+?[1-9][0-9]*$/;
//中文和分号
var cn_fenhao = /^([\u4e00-\u9fa5]|[;；])+$/;
//阿拉伯数字
var ala_number = /^[0-9]+$/;
function trim(str){
	return str.replace(/(^\s+)|(\s+$)/g,"");
}
function checked(text,func,checkType){
    var str = checkType.test(trim(text));
    if(func){
        func(str);
    }
    return str;
}
String.prototype.gblen = function() {    
    var len = 0;    
    for (var i=0; i<this.length; i++) {    
        if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {    
             len += 2;    
         } else {    
             len ++;    
         }    
     }    
    return len;    
}  
Check.prototype = {
	checked:function(text,func,checkType){
	    var str = checkType.test(trim(text));
	    if(func){
	        func(str);
	    }
	    return str;
	},
    checkPhone:function(text,func){
        var res = checked(text,func,mobile);
        return res;
    },
    checkMail:function(text,func){
        var res = checked(text,func,email);
        return res;
    },
    checkNum:function(text,func){
        var res = checked(text,func,number);
        return res;
    },
    checkUserName:function(text,func){
    	var res = checked(text,func,username);
    	return res;
    },
    checkUser:function(text,func){
    	var res = checked(text,func,user);
    	return res;
    },
    checkPassword:function(text,func){
    	var res = checked(text,func,password);
    	return res;
    },
    checkWorkid:function(text,func){
    	var res = checked(text,func,workid);
    	return res;
    },
    checkName:function(text,func){
    	var res = checked(text,func,nikenName);
    	return res;
    },
    checkCapital:function(text,func){
    	var res = checked(text,func,capital);
    	return res;
    },
    checkFloat:function(text,func){
    	var res = checked(text,func,float);
    	return res;
    },
    checkCharactor:function(text,func){
    	var res = checked(text,func,charactor);
    	return res;
    },
    checkText:function(text,func){
    	var res = checked(text,func,longtext);
    	return res;
    },
    checkCnennumber:function(text,func){
    	var res = checked(text,func,cnennumber);
    	return res;
    },
    checkCnen:function(text,func){
    	var res = checked(text,func,cnen);
    	return res;
    },
    checkSize:function(res,sizeStart,sizeEnd,func){
        var result=trim(res);
        var str = result.gblen() <= parseInt(sizeEnd) && result.gblen()>= parseInt(sizeStart);
        if(func){
            func(str);
        }
        return str;
    }
    
};

if ( typeof module != 'undefined' && module.exports ) {
    module.exports = Check;
} else { 
    window.Check = Check;
}
