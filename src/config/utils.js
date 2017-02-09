/**
 * Created by zhaochengtao on 2016/12/14.
 */
module.exports={
    post(url,params,_this){
        let http = _this.$http || this.$http;
        let message = _this.$message || this.$message;
        let requestData = params?{requestData: JSON.stringify(params)}:null;
        return http({
            method:'POST',
            url:url,
            body: requestData,
            emulateJSON:true
        }).then((res)=>res.body).then(function(data){
            if(data.code != 200){
                message({
                    message: data.message,
                    type: 'warning'
                });
            }
            return data;
        })
    },
    postJSON(url,params,_this){
        let http = _this.$http || this.$http;
        let message = _this.$message || this.$message;
        let requestData = params?params:null;
        return http({
            method:'POST',
            url:url,
            body: requestData,
            emulateJSON:true
        }).then((res)=>res.body).then(function(data){
            if(data.code != 200){
                message({
                    message: data.message,
                    type: 'warning'
                });
            }
            return data;
        })
    },
    /*
    * {url} String 请求的报表导出URL
    * {params} Object 请求参数
    * */
    export(url,params){
        let requestUrl =url;
        for(var key in params){
            if(requestUrl.indexOf("?") ==-1){
                requestUrl = requestUrl+'?'+key+'='+params[key]
            }else{
                requestUrl = requestUrl+'&'+key+'='+params[key]
            }
        }
        window.location.href = requestUrl;
    },
    message(){

    }
};