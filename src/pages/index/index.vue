<style lang="less">
	.indexDialog .el-dialog__body{
		padding:0!important;
		embed{
			display:block;
		}
	}
</style>
<style lang="less" scoped>
	.pmsc-body .content{
		background: transparent;
	}
	.el-row {
		padding-left: 10px;
		padding-right: 20px;
		margin-bottom: 20px;
		&:first-child {
			margin-top: 20px;
		}
		&:last-child {
			margin-bottom: 0;
		}
	}
	.el-col {
		border-radius: 4px;
		margin-bottom: 20px;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.grid-content{
		height: 150px;
		color: #fff;
	    &:hover{
			opacity: 0.8;
	     }
		.amount{
			padding-top: 35px;
			text-align: center;
			font-size: 38px;
			width: 100%;
			overflow: hidden;
			.unit{
				font-size: 16px;
				padding: 0 10px;
			}
		}
		.title{
			padding-top: 25px;
			font-size: 18px;
			text-align: center;
		}
	}
	.bg-green {
		background: #6fd600;
		box-shadow: 0 0 1px 2px #64c000;
	}
	.bg-ligthgreen {
		background: #00d7c1;
		box-shadow: 0 0 1px 2px #00c1ad;
	}
	.bg-blue {
		background: #02b9ff;
		box-shadow: 0 0 1px 2px #02a6e5;
	}
	.bg-purple {
		background: #9f6dfa;
		box-shadow: 0 0 1px 2px #8f62e1;
	}
	.bg-red {
		background: #ff6249;
		box-shadow: 0 0 1px 2px #e55842;
	}
	.bg-orange {
		background: #ffc20c;
		box-shadow: 0 0 1px 2px #e5ae0b;
	}
	.teachVideo{
		position: fixed;
	    bottom: 15px;
	    right: 30px;
	    display: block;
	    width: 100px;
	    height: 100px;
	    background-color: #02b9ff;
	    border-radius: 100%;
	    color: #fff;
	    line-height: 100px;
	    text-align: center;
	    font-weight: bold;
	    font-size: 18px;
	    box-shadow: 5px 5px 20px #777;
	    cursor: pointer;
	}
</style>
<template>
<div>
	<common-layout :crumbs=crumbs>
		<!--v-loading.fullscreen="user.lock"-->
		<div class="content" slot="content">
			<el-row :gutter="20">
				<el-col :span="8" v-for="(item, index) in tableData">
					<router-link :to="item.path">
						<div class="grid-content" :class="index <colorList.length?colorList[index]:colorList[index % colorList.length]">
							<div class="amount">
								<span class="unit" v-if="item.prefix">{{item.tag}}</span>{{item.num}}<span class="unit" v-if="!item.prefix">{{item.tag}}</span>
							</div>
							<div class="title">{{item.title}}</div>
						</div>
					</router-link>
				</el-col>
			</el-row>
			<span class="teachVideo" @click="showDialog">教学视频</span>
		</div>
	</common-layout>
	<el-dialog v-model="dialogVisible" title="教学视频" @close="closeDialog" size="large" class="indexDialog">
		<video ref="video1" id="video1" src="http://cloud.video.taobao.com/play/u/144283918/p/1/e/6/t/1/50003146422.mp4" width="100%" height="453" class="edui-faked-video" controls autobuffer autoplay>

		</video>
		<!--<embed  type="application/x-shockwave-flash" class="edui-faked-video" autoplay="0" pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://tbm.alicdn.com/L4gbHiFHyuiwBEQ5M1M/J4b1iin1Vm9UW6mi6Aq%40%40sd.mp4" width="100%" height="453" wmode="transparent" play="0" loop="true" menu="false" allowscriptaccess="never" allowfullscreen="true" autostart="false">-->
	</el-dialog>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
		data() {
			var crumbs = [
                  {path:'/',name: '首页'}
                ];
			return {
				crumbs,
                tableData:[],
                dialogVisible:false,
				colorList:["bg-green","bg-ligthgreen","bg-blue","bg-purple","bg-red","bg-orange"]//可用的背景颜色列表
			}
		},
        methods: {
        	showDialog(){
        		this.dialogVisible = true;
        	},
        	closeDialog(){
        		this.dialogVisible = false;
                this.$refs.video1.pause()
        	},
            fetchData(){
                //获取订单信息
                this.$http({
                    url:'/pms/index/show.do',
                    method:'POST'
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result;
                        let modules = this.user.pmsModuleList;
                        let firstIndex = -1;
                        this.tableData.forEach(function(n,key){
                            switch(key){
	                            case 0://PMS005
		                            firstIndex = modules.findIndex(module => module.pmsModuleCode == 'PMS005');
                                    if(firstIndex > -1){
                                        n.path ='/reports/settleOrder/settleOrderList'
                                    }else{
                                        n.path=''
                                    }
		                            break;
	                            case 1://PMS004
                                    firstIndex = modules.findIndex(module => module.pmsModuleCode == 'PMS004');
                                    if(firstIndex > -1){
                                        n.path ='/checkout'
                                    }else{
                                        n.path=''
                                    }
		                            break;
	                            case 2://PMS002
                                    firstIndex = modules.findIndex(module => module.pmsModuleCode == 'PMS002');
                                    if(firstIndex > -1){
                                        n.path ='/purchase'
                                    }else{
                                        n.path=''
                                    }
		                            break;
	                            case 3://PMS003
		                            firstIndex = modules.findIndex(module => module.pmsModuleCode == 'PMS003');
                                    if(firstIndex > -1){
                                        n.path ='/receives'
                                    }else{
                                        n.path=''
                                    }
		                            break;
	                            case 4://PMS006
                                     firstIndex = modules.findIndex(module => module.pmsModuleCode == 'PMS006');
                                    if(firstIndex > -1){
                                        n.path ='/settings/handlePurchase/index'
                                    }else{
                                        n.path=''
                                    }
		                            break;
	                            case 5://PMS006
                                     firstIndex = modules.findIndex(module => module.pmsModuleCode == 'PMS006');
                                    if(firstIndex > -1){
                                        n.path ='/settings/handleMateriel/index'
                                    }else{
                                        n.path=''
                                    }
		                            break;
                            }
                        })
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
            }
        },
	    created(){
            this.fetchData()
	    },
        computed: mapState({
            user: state => state.user
        })
    }
</script>