<style lang="less" scoped>
    .rowSpan span{
        line-height: 60px;
    }
    .order-bar{
        color: #99a9bf;
        font-size: 18px;
        padding:14px 0;
        .el-row{
            line-height: 32px;
        }
        .right{
            font-size: 14px;
        }
    }
    .total-bar{
        font-size: 14px;
        color: #475669;
        .orange{
            color: #ff6600;
            padding-left: 3px;
        }
    }
</style>
<template>
    <div>
        <common-layout :crumbs=crumbs>
            <div class="content" slot="content">
                <div class="table-content">
                    <div class="order-bar">
                        <el-row justify="space-between">
                            <el-col :span="8"><div class="grid-content left">结算单详情</div></el-col>
                            <el-col :span="16">
                                <div class="grid-content right">
                                    <el-row>
                                        <el-col :span="12">采购单号：{{purchaseNo}}</el-col>
                                        <el-col :span="8">开单人：{{purchaseUserName}}</el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="12">结算时间：{{this.$route.query.time|moment}}</el-col>
                                        <el-col :span="8">结算人：{{this.$route.query.name}}</el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="button-bar">
                        <el-button @click="handleExport">导出</el-button>
                        <!--<el-button>打印</el-button>-->
                    </div>
                    <el-table :data="detail"  border style="width:100%">
                        <el-table-column type="index" label="序号" width="70"></el-table-column>
                        <el-table-column prop="materialName" label="物料名称" min-width="120"></el-table-column>
                        <el-table-column prop="materialTypeName" label="类别" min-width="100"></el-table-column>
                        <el-table-column prop="materialUnitName" label="进货单位" min-width="120"></el-table-column>
                        <el-table-column prop="purchasePrice" label="采购均价" min-width="80" inline-template>
                            <span>{{row.purchasePrice|number}}</span>
                        </el-table-column>
                        <el-table-column prop="purchaseCount" label="采购数量" min-width="80"></el-table-column>
                        <el-table-column prop="totalFee" label="合计金额" min-width="80" inline-template>
                            <span>{{row.totalFee|number}}</span>
                        </el-table-column>
                    </el-table>
                    <div class="total-bar">
                        <el-row type="flex" class="row-bg" justify="start">
                            <el-col :span="4" class="rowSpan">
                             采购 <span class="orange">{{pmsSettlementAmountVo.purchaseCount}}项</span>
                            </el-col>
                            <el-col :span="4" class="rowSpan">
                              总计：<span class="orange">&yen;{{pmsSettlementAmountVo.totalPayment}}</span>
                            </el-col>
                            <el-col :span="4" class="rowSpan">
                                实付：<span class="orange">&yen;{{pmsSettlementAmountVo.payment}}</span>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </common-layout>
        <transition v-on:leave="refresh">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import moment from 'moment';
    export default {
        data() {
            var crumbs = [
                {path: '/', name: '首页'},
                {path: '', name: '报表'},
                {path: '/reports/settleOrder/settleOrderList', name: '结算单汇总'},
                {path: '/reports/settleOrder/settleOrderDetail', name: '结算单详情'},
            ];
            return {
                crumbs,
                filter: '',
                purchaseNo:'',
                purchaseUserName:'',
                pmsSettlementAmountVo:{},
                detail: []
            }
        },
        methods: {
            refresh(){
                let requestData = {
                    receiptId: this.$route.query.id
                };
                utils.post(urls.settleDetail, requestData, this).then(function (data) {
                    if (data.code == 200) {
                        this.pmsSettlementAmountVo = data.result.pmsSettlementAmountVo;
                        this.purchaseUserName = data.result.purchaseUserName;
                        this.purchaseNo = data.result.purchaseNo;
                        this.detail = data.result.pmsSettlementOrderReportDetailVos
                    }
                });
            },
            handleExport(){
                utils.export('/pms/report/settle/order/detail/export.do',{"receiptId":this.$route.query.id})
            }
        },
        created(){
            this.refresh()
        },
        computed: mapState({user: state => state.user}),
    }
</script>