import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login',
                name: "登录",
                meta: {auth: false},
                component: resolve => require(['../pages/login/'], resolve)
            },
            {//首页
                path: '/',
                name: "home",
                component: resolve => require(['../pages/index/'], resolve)
            },
            {//采购单首页
                path: '/purchase',
                name: "开采购单",
                component: resolve => require(['../pages/purchase/index.vue'], resolve)
            },
            {//新增采购单
                path: '/purchase/create',
                name: "purchaseCreate",
                component: resolve => require(['../pages/purchase/create.vue'], resolve)
            },
            {//编辑采购单
                path: '/purchase/create/:id',
                name: "purchaseEdit",
                component: resolve => require(['../pages/purchase/create.vue'], resolve)
            },
            {//查看采购单详情
                path: '/purchase/view/:id',
                name: "purchaseView",
                component: resolve => require(['../pages/purchase/view.vue'], resolve)
            },
            {//打印采购单
                path: '/purchase/print/:id',
                name: "purchasePrint",
                component: resolve => require(['../pages/purchase/print.vue'], resolve)
            },
            {//收货单首页
                path: '/receives',
                name: "收货单",
                component: resolve => require(['../pages/receives/index.vue'], resolve)
            },
            {//收货
                path: '/receives/create/:id',
                name: "receivesPO",
                component: resolve => require(['../pages/receives/create.vue'], resolve)
            },
            {//查看收货单详情 source 1根据采购单 2直接新增的收货单
                path: '/receives/view/:id/source/:source',
                name: "receivesView",
                component: resolve => require(['../pages/receives/view.vue'], resolve)
            },
            {//编辑已收货的采购单 1根据采购单 2直接新增的收货单
                path: '/receives/edit/:id/source/:source',
                name: "receivesEdit",
                component: resolve => require(['../pages/receives/edit.vue'], resolve)
            },
            {//打印收货单
                path: '/receives/print/:id',
                name: "receivesPrint",
                component: resolve => require(['../pages/receives/print.vue'], resolve)
            },
            {//直接新增收货单首页
                path: '/receives/direct',
                name: "directReceiveList",
                component: resolve => require(['../pages/receives/direct.vue'], resolve)
            },
            {//直接新增收货单并收货
                path: '/receives/direct/create',
                name: "directReceiveCreate",
                component: resolve => require(['../pages/receives/directCreate.vue'], resolve)
            },
            {//结算单首页
                path: '/checkout',
                name: "checkoutList",
                component: resolve => require(['../pages/checkout/index.vue'], resolve)
            },
            {//结算记录：结算首页-点击查看
                path: '/checkout/view/:id',
                name: "checkoutView",
                component: resolve => require(['../pages/checkout/view.vue'], resolve)
            },
            {//结算首页-点击查看-打印
                path: '/checkout/viewPrint/:id',
                name: "checkoutViewPrint",
                component: resolve => require(['../pages/checkout/viewPrint.vue'], resolve)
            },
            {//打印结算单
                path: '/checkout/detailprint/:id/role/:role',
                name: "checkoutPrint",
                component: resolve => require(['../pages/checkout/detailprint.vue'], resolve)
            },
            {//结算首页-点击查看-再点击查看-结算记录查看物料详情
                path: '/checkout/viewMaterial/:id/role/:role/user/:userid',
                name: "checkoutViewMaterial",
                component: resolve => require(['../pages/checkout/viewMaterial.vue'], resolve)
            },
            {//结算首页-点击查看-再点击查看-结算记录查看物料详情-打印
                path: '/checkout/viewMaterialPrint/:id/role/:role/user/:userid',
                name: "checkoutViewMaterialPrint",
                component: resolve => require(['../pages/checkout/viewMaterialPrint.vue'], resolve)
            },
            {//结算列表：1 与供应商结算supplier  0与采购员结算purchaser
                path: '/checkout/detail/:id/role/:role',
                name: "checkoutDetail",
                component: resolve => require(['../pages/checkout/detail.vue'], resolve)
            },
            {//结算操作：1 与供应商结算supplier  0与采购员结算purchaser
                path: '/checkout/settle/:id/role/:role/user/:userid',
                name: "doCheckout",
                component: resolve => require(['../pages/checkout/settle.vue'], resolve)
            },
            {
                path: '/reports',
                name: "报表",
                component: resolve => require(['../pages/reports/'], resolve)
            },
            {
                path: '/reports/settleOrder/settleOrderList',
                name: "结算单汇总",
                component: resolve => require(['../pages/reports/settleOrder/settleOrderList.vue'], resolve)
            },
            {
                path: '/reports/settleOrder/settleOrderDetail',
                name: "结算单详情",
                component: resolve => require(['../pages/reports/settleOrder/settleOrderDetail.vue'], resolve)
            },
            {
                path: '/reports/settleType/settleTypeList',
                name: "结算方式汇总",
                component: resolve => require(['../pages/reports/settleType/settleTypeList.vue'], resolve)
            },
            {
                path: '/reports/settleType/settleTypeDetail',
                name: "结算方式详情",
                component: resolve => require(['../pages/reports/settleType/settleTypeDetail.vue'], resolve)
            },
            {
                path: '/reports/materialReports/materialList',
                name: "物料类别汇总",
                component: resolve => require(['../pages/reports/materialReports/materialList.vue'], resolve)
            },
            {
                path: '/reports/materialReports/materialListDetail',
                name: "物料类别详情",
                component: resolve => require(['../pages/reports/materialReports/materialListDetail.vue'], resolve)
            },
            {
                path: '/reports/purReports/purchaseList',
                name: "采购汇总",
                component: resolve => require(['../pages/reports/purchaseReports/purchaseList.vue'], resolve)
            },
            {
                path: '/reports/purReports/purchaseListDetail',
                name: "采购详情",
                component: resolve => require(['../pages/reports/purchaseReports/purchaseListDetail.vue'], resolve)
            },
            {
                path: '/reports/settlement/settlementList',
                name: "结算对象汇总",
                component: resolve => require(['../pages/reports/settlement/settlementList.vue'], resolve)
            },
            {
                path: '/reports/settlement/settlementDetail',
                name: "结算对象详情",
                component: resolve => require(['../pages/reports/settlement/settlementDetail.vue'], resolve)
            },
            {
                path: '/settings',
                name: "基础管理",
                component: resolve => require(['../pages/settings/'], resolve)
            },
            {
                path: '/settings/handlePurchase/index',
                name: "供应商管理",
                component: resolve => require(['../pages/settings/handlePurchase/index.vue'], resolve),
                children: [
                    {
                        path: '/settings/handlePurchase/add/index',
                        name: "新增供应商",
                        component: resolve => require(['../pages/settings/handlePurchase/add/index.vue'], resolve)
                    }
                ]
            },
            {
                path: '/settings/handleMateriel/index',
                name: "物料管理",
                component: resolve => require(['../pages/settings/handleMateriel/index.vue'], resolve),
                children: [
                    {
                        path: '/settings/handleMateriel/add/index',
                        name: "新增物料",
                        component: resolve => require(['../pages/settings/handleMateriel/add/index.vue'], resolve),
                        children: [
                            {
                                path: '/settings/handleMateriel/type/add/index',
                                name: "新增类别",
                                component: resolve => require(['../pages/settings/handleType/add/index.vue'], resolve)
                            },
                            {
                                path: '/settings/handleMateriel/unit/add/index',
                                name: "新增单位",
                                component: resolve => require(['../pages/settings/handleUnit/add/index.vue'], resolve)
                            }
                        ]
                    },
                    {
                        path: '/settings/handleMateriel/template/index',
                        name: "导入物料模板",
                        component: resolve => require(['../pages/settings/handleMateriel/template/index.vue'], resolve)
                    },
                ]
            },
            {
                path: '/settings/handleUnit/index',
                name: "单位管理",
                component: resolve => require(['../pages/settings/handleUnit/index.vue'], resolve),
                children: [
                    {
                        path: '/settings/handleUnit/add/index',
                        name: "新增单位",
                        component: resolve => require(['../pages/settings/handleUnit/add/index.vue'], resolve)
                    }
                ]
            },
            {
                path: '/settings/handleType/index',
                name: "类别管理",
                component: resolve => require(['../pages/settings/handleType/index.vue'], resolve),
                children: [
                    {
                        path: '/settings/handleType/add/index',
                        name: "新增类别",
                        component: resolve => require(['../pages/settings/handleType/add/index.vue'], resolve)
                    }
                ]
            },
            {
                path: '/settings/handleRole/index',
                name: "岗位管理",
                component: resolve => require(['../pages/settings/handleRole/index.vue'], resolve),
                children: [
                    {
                        path: '/settings/handleRole/add/index',
                        name: "新增岗位",
                        component: resolve => require(['../pages/settings/handleRole/add/index.vue'], resolve)
                    }
                ]
            },
            {
                path: '/settings/handleUser/index',
                name: "员工管理",
                component: resolve => require(['../pages/settings/handleUser/index.vue'], resolve),
                children: [
                    {
                        path: '/settings/handleUser/add/index',
                        name: "新增员工",
                        component: resolve => require(['../pages/settings/handleUser/add/index.vue'], resolve)
                    }
                ]
            },
            {
                path: '*',
                redirect: '/login'
            }
        ]
    }
]