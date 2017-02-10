/**
 * Created by Administrator on 2017/2/10.
 */
var data=[
    // 凶猛
    [
        {
            index: 1,
            name: "狂怒",
            tier: 0,
            ranks: 5,
            desc: "攻击速度增加 #% 。",
            rankInfo: [0.8, 1.6, 2.4, 3.2, 4.0]
        },
        {
            index: 3,
            name: "巫术",
            tier: 0,
            ranks: 5,
            desc: "技能伤害提升：#% 。",
            rankInfo: [0.4, 0.8, 1.2, 1.6, 2.0]
        },
        {
            index: 5,
            name: "新鲜血液",
            tier: 1,
            ranks: 1,
            desc: "你对一名英雄发起的第一次普攻将造成10+1x等级的额外伤害（冷却时间：6秒）",
            rankInfo: []
        },
        {
            index: 6,
            name: "盛宴",
            tier: 1,
            ranks: 1,
            desc: "击杀一个单位回复20生命值（30秒冷却时间）。",
            rankInfo: []
        },
        {
            index: 7,
            name: "揭示弱点",
            tier: 1,
            ranks: 1,
            desc: "对敌方英雄造成伤害的同时，会使你的友军对其伤害提升3%。",
            rankInfo: []
        },
        {
            index: 9,
            name: "吸血习性",
            tier: 2,
            ranks: 5,
            desc: "增加生命偷取和法术吸血：#% 。",
            rankInfo: [0.4, 0.8, 1.2, 1.6, 2.0]
        },
        {
            index: 11,
            name: "先天资质",
            tier: 2,
            ranks: 5,
            desc: "18级时增长# 点攻击力 与 # 点法术强度。",
            rankInfo: [2, 4, 6, 8, 10],
            rankInfo2: [3, 6, 9, 12, 15],
            perLevel: [.11, .22, .33, .44, .55],
            perLevel2: [.16, .32, .5, .66, .88]
        },
        {
            index: 13,
            name: "赏金猎人",
            tier: 3,
            ranks: 1,
            desc: "你击杀过的每名敌方英雄，都会使你造成的伤害提升1.5%（上限：敌方英雄数x1.5%） 。",
            rankInfo: []
        },
        {
            index: 14,
            name: "双刃剑",
            tier: 3,
            ranks: 1,
            desc: "造成5%额外伤害，承受2.5%的额外伤害。",
            rankInfo: []
        },
        {
            index: 15,
            name: "战斗专注",
            tier: 3,
            ranks: 1,
            desc: "与敌方英雄作战时，在5秒里持续获得最都5%伤害提升。",
            rankInfo: []
        },
        {
            index: 17,
            name: "粉碎重击",
            tier: 4,
            ranks: 5,
            desc: "增加 # 点护甲穿透。",
            rankInfo: [1.4, 2.8, 4.2, 5.6, 7]
        },
        {
            index: 19,
            name: "敏锐思维",
            tier: 4,
            ranks: 5,
            desc: "增加 # 点法术穿透。",
            rankInfo: [1.4, 2.8, 4.2, 5.6, 7]
        },
        {
            index: 21,
            name: "战争领主的嗜血",
            tier: 5,
            ranks: 1,
            desc: "对抗敌方英雄时，基于你的已损失生命值提供更多生命偷取（最大值：20%）。对抗小兵时会获得50%收益（远程英雄为25%收益）。",
            rankInfo: []
        },
        {
            index: 22,
            name: "战争热诚",
            tier: 5,
            ranks: 1,
            desc: "普攻在命中敌方英雄时会产生热诚效果（近战攻击为2层）。热诚效果持续4秒（最多可叠加10层）并且每层效果会使你的攻击力提升1-6。",
            rankInfo: []
        },
        {
            index: 23,
            name: "冥火之触",
            tier: 5,
            ranks: 1,
            desc: "你的伤害型技能会使地方英雄在4秒里持续承受魔法伤害。伤害值：8+60%额外攻击力和25%法术强度。冥火之触的持续时长会基于技能类型而减少：-群体技能：2秒持续时长。-持续伤害技能：1秒持续时长。",
            rankInfo: []
        }
    ],
    // 诡诈
    [
        {
            index: 1,
            name: "漫游者",
            tier: 0,
            ranks: 5,
            desc: "非战斗状态下的移动速度加成 #% 。",
            rankInfo: [0.6, 1.2, 1.8, 2.4, 3]
        },
        {
            index: 3,
            name: "野蛮",
            tier: 0,
            ranks: 5,
            desc: "普通攻击和单体目标技能对小兵和野怪造成 # 额外伤害。",
            rankInfo: [1, 2, 3, 4, 5]
        },
        {
            index: 5,
            name: "符能亲和",
            tier: 1,
            ranks: 1,
            desc: "野怪提供的增益效果的持续时间延长15% 。",
            rankInfo: []
        },

        {
            index: 6,
            name: "秘密储备",
            tier: 1,
            ranks: 1,
            desc: "你的药水与合剂的持续时间延长10%。你的药水会替换成相应的饼干，可在消耗时立刻回复15生命值和法力值。",
            rankInfo: []
        },
        {
            index: 7,
            name: "刺客",
            tier: 1,
            ranks: 1,
            desc: "在附近没有友方英雄时，造成的伤害提升2%。",
            rankInfo: []
        },
        {
            index: 9,
            name: "无情",
            tier: 2,
            ranks: 5,
            desc: "对生命值低于40%的英雄造成 #% 额外伤害。",
            rankInfo: [1, 2, 3, 4, 5]
        },
        {
            index: 11,
            name: "冥想",
            tier: 2,
            ranks: 5,
            desc: "每隔5秒，回复你 #% 的已损失法力值。",
            rankInfo: [0.3, 0.6, 0.9, 1.2, 1.5]
        },
        {
            index: 13,
            name: "翠神的赠礼",
            tier: 3,
            ranks: 1,
            desc: "踏入草丛时会使你的下一个伤害型攻击或技能造成相当于你目标3%当前生命值的额外魔法伤害（冷却时间：9秒）",
            rankInfo: []
        },
        {
            index: 14,
            name: "探云手",
            tier: 3,
            ranks: 1,
            desc: "每有友军击杀了附近的一个敌方小兵时，你就会获得1金币。每当你用普攻命中一名敌方英雄时，你就会获得额外的3金币（如果你的近战英雄，则获得10金币）（冷却时间5秒）",
            rankInfo: []
        },
        {
            index: 15,
            name: "危险游戏",
            tier: 3,
            ranks: 1,
            desc: "击杀或协助击杀英雄时，会使你回复5%的已损失生命值和已损失法力值。",
            rankInfo: []
        },
        {
            index: 17,
            name: "精密",
            tier: 4,
            ranks: 5,
            desc: "+ #护甲穿透和 # + # x等级的法术穿透。",
            rankInfo: [1.7, 3.4, 5.1, 6.8, 8.5],
            rankInfo2: [0.6, 1.2, 1.8, 2.4, 3.0],
            rankInfo3: [0.06, 0.12, 0.18, 0.24, 0.3]
        },
        {
            index: 19,
            name: "智谋",
            tier: 4,
            ranks: 5,
            desc: "+ #%冷却缩减, 同时冷却缩减上限提升到 #% 。",
            rankInfo: [1, 2, 3, 4, 5],
            rankInfo2: [41, 42, 43, 44, 45]
        },
        {
            index: 21,
            name: "风暴骑手的狂涌",
            tier: 5,
            ranks: 1,
            desc: "如果你在2.5秒内对敌方英雄造成了相当于其30%最大生命值的伤害，那么你就会获得40%移动速度和75%的减速抗性，持续3秒。（冷却时间：10秒）",
            rankInfo: []
        },
        {
            index: 22,
            name: "雷霆领主的法令",
            tier: 5,
            ranks: 1,
            desc: "你对相同敌方英雄进行的第三次攻击或伤害型技能会召唤一次闪电打击，造成范围魔法伤害。伤害值：10x等级+你30%的额外攻击力+你10%法术强度（冷却时间：25-15秒，基于等级）",
            rankInfo: []
        },
        {
            index: 23,
            name: "风语者的祝福",
            tier: 5,
            ranks: 1,
            desc: "你的治疗技能和护盾技能的数额提升10%。此外，如果你的护盾技能和治疗技能施放在除你之外的其他友方目标身上，就会使目标的护甲提升5-22（基于等级），并且魔法抗性提升该数值的一半，持续3秒。",
            rankInfo: []
        }
    ],
    // 坚决
    [
        {
            index: 1,
            name: "愈合",
            tier: 0,
            ranks: 5,
            desc: "+生命回复：# 每5秒。",
            rankInfo: [0.4, 0.8, 1.2, 1.6, 2.0]
        },
        {
            index: 3,
            name: "不屈",
            tier: 0,
            ranks: 5,
            desc: "+额外护甲和魔法抗性： #% 。",
            rankInfo: [1, 2, 3, 4, 5]
        },
        {
            index: 5,
            name: "探索者",
            tier: 1,
            ranks: 1,
            desc: "在草丛和河道时+15移动速度。",
            rankInfo: []
        },
        {
            index: 6,
            name: "硬化皮肤",
            tier: 1,
            ranks: 1,
            desc: "来自英雄和野怪的普攻伤害减少2。",
            rankInfo: []
        },
        {
            index: 7,
            name: "围城大师",
            tier: 1,
            ranks: 1,
            desc: "在友方防御塔附近时获得8护甲和魔法抗性。",
            rankInfo: []
        },
        {
            index: 9,
            name: "符能盔甲",
            tier: 2,
            ranks: 5,
            desc: "你受到的所有护盾效果、治疗效果、生命回复和生命偷取+ #% ",
            rankInfo: [1.6, 3.2, 4.8, 6.4, 8]
        },
        {
            index: 11,
            name: "老兵伤痕",
            tier: 2,
            ranks: 5,
            desc: "+#生命值。",
            rankInfo: [10, 20, 30, 40, 50]
        },
        {
            index: 13,
            name: "洞悉",
            tier: 3,
            ranks: 1,
            desc: "你的召唤师技能的冷却时间缩短15% 。",
            rankInfo: []
        },
        {
            index: 14,
            name: "耐久",
            tier: 3,
            ranks: 1,
            desc: "+50%生命回复，并在生命值低于25%时提升至+200% 。",
            rankInfo: []
        },
        {
            index: 15,
            name: "无畏",
            tier: 3,
            ranks: 1,
            desc: "在承受敌方英雄的伤害时获得10%+2x等级的额外护甲和魔法抗性（冷却时间：9秒）。",
            rankInfo: []
        },
        {
            index: 17,
            name: "灵敏",
            tier: 4,
            ranks: 5,
            desc: "+减速抗性和韧性：#%",
            rankInfo: [3, 6, 9, 12, 15]
        },
        {
            index: 19,
            name: "传奇卫士",
            tier: 4,
            ranks: 5,
            desc: "附近每有一名敌方英雄，就会为你提供 #点护甲和魔法抗性。",
            rankInfo: [0.6, 1.2, 1.8, 2.4, 3.0]
        },
        {
            index: 21,
            name: "不灭之握",
            tier: 5,
            ranks: 1,
            desc: "在战斗中每过4秒，你的下一次对敌方英雄发起的普攻就会造成你3%最大生命值的额外伤害并治疗你1.5%的最大生命值（如果你的远程英雄，则效果减半。伤害类型为魔法伤害）。",
            rankInfo: []
        },
        {
            index: 22,
            name: "巨像的勇气",
            tier: 5,
            ranks: 1,
            desc: "在用硬控效果命中一名敌方英雄后，获得一层持续4秒的护盾，护盾生命值等于（10+10x等级+你最大生命值的7%）x附近的敌方英雄数量（冷却时间：30秒）。",
            rankInfo: []
        },
        {
            index: 23,
            name: "顽石誓约",
            tier: 5,
            ranks: 1,
            desc: "+4%伤害减免。你会替最靠近你的一名友军承受来自敌方英雄的6%伤害。当你生命值低于5%时，就无法帮友军吸收伤害了。",
            rankInfo: []
        }
    ]
];
function Calculator(){

}
Calculator.prototype = {
    MAX_POINTS:70,
    TIER_REQS:[0, 5, 6, 11, 12, 17],
    TREE_OFFSET:345,
    SPACING:{margin_left: 70, margin_top: 40, margin_keystone: 35, spacing_x: 13, spacing_y: 20},
    BUTTON_SIZE:54,
    state:[{}, {}, {}],
    totalPoints:0,
    buttonClasses:["unavailable", "available", "full"],
    rankClasses:["num-unavailable", "num-available", "num-full"],
    counterClasses:["counter-unavailable", "counter-available", "counter-full"],
    treeOffsets:[],
    // There are max 4 points per mastery, or 3 bits each. There is a 1 bit padding
    // that is a flag to determine whether the following 5 bits are a sequence of
    // mastery codes or an index increase. We greedily take masteries until the next
    // one would put us over capacity, at which point we flush the buffer. You will
    // always flush at the end of a tree.
    maxbits : 5,
    exportChars:"WvlgUCsA7pGZ3zSjakbP2x0mTB6htH8JuKMq1yrnwEQDLY5IVNXdcioe9fF4OR_-",
    // Because we used a random string, we need to reverse it
    importChars:{},
    treeNames:[
        "职业通用技能树",
        "精灵光明技能树",
        "精灵黑暗技能树"
    ],
    data:data,
    init:function (treeNames,data) {
        /*init settings*/
        //this.treeNames =treeNames;
        //this.data =data;
        this.treeOffsets =[0,
            this.data[0].length,
            this.data[0].length + this.data[1].length];
        //解密规则
        this.makeImportChars();
        var context =this;
        // Calculator
        context.drawCalculator();
        // Panel
        $("#reset-tallent").click(function(){
            context.resetStates()
        });
        $('#btn-copy').click(function(){
            var hash = context.exportMasteries();
            // Do not show link for empty trees
            if (hash.length <= 3) hash = '';
            hash = '?' + hash;
            var shareUrl = document.location.href;
            if(shareUrl.indexOf("?") > -1){
                shareUrl = shareUrl.substring(0,shareUrl.indexOf("?"));
            }
            shareUrl = shareUrl +hash;
            $('#share-box').show().find('.share-text').val(shareUrl);
            window._bd_share_config.share.bdText='#R2天赋加点#分享' + shareUrl;
        })
        $('#share-box .share-text').click(function (argument) {
            $(this).focus().select();
        })
        for (var tree = 0; tree < 3; tree++) {
            $("#tree-summaries").append(
                $("<div>")
                    .addClass("tree-summary")
                    .addClass(context.treeNames[tree])
                    .attr("data-idx", tree)
                    .text(context.treeNames[tree] + ": " + 0)
                    .css({
                        left: context.TREE_OFFSET * tree + 20,
                        cursor: "pointer"
                    })
                    .mouseover(function(){
                        context.customTooltip($("#tooltip").show(), "双击恢复本天赋树");
                    })
                    .mouseout(function(){
                        $("#tooltip").hide();
                    })
                    .dblclick(function(){
                        context.resetTree($(this).attr("data-idx"), true);
                        // if (MUSIC) action_sound = sounds_return;
                        context.updateButtons();
                        context.updateLabels();
                        // if (MUSIC) updateMusic();
                        context.updateLink();
                    })
            )
        }

        // Once set up, load if hash present
        if (document.location.hash != "" && document.location.hash.indexOf("?") > -1){
            context.updateMasteries();
        } else{
            return;
        }

        // Listen for hash changes
        //$(window).bind('hashchange', updateMasteries);
    },
    drawCalculator:function(){
        for (var tree = 0; tree < 3; tree++)
            for (var index = 0; index < this.data[tree].length; index++)
                this.drawButton(tree, index);

        // make tooltip
        var tip, maxDims = {width: $("#calculator").parent().width(), height: $("#calculator").parent().height()};
        $("#calculator")
            .contextmenu(function(event){ event.preventDefault() })
            .append(
                $("<div>")
                    .attr('id', "tooltip")
                    .append($("<strong>"))
                    .append(
                        $("<div>")
                            .addClass("rank")
                    )
                    .append(
                        $("<div>")
                            .addClass("req")
                    )
                    .append(
                        $("<p>")
                            .addClass("tooltip-text")
                            .addClass("first")
                    )
                    .append(
                        $("<p>")
                            .addClass("tooltip-text")
                            .addClass("second")
                            .append(
                                $("<div>")
                                    .addClass("nextRank")
                                    .text("下一层:")
                            )
                            .append(
                                $("<div>")
                                    .addClass("content")
                            )
                    )
            );

        // mousemove event global since it follows tooltip visibility
        var anchor = $("#calculator");
        tip = $("#tooltip");
        $('.tallent__con')
            .mousemove(function(event){
                // var oE=ev||event;
                if (tip.is(":visible")) {
                    // boundary checking for tooltip (right and bottom sides)
                    var pos = anchor.offset();
                    var offsetX = 20, offsetY = 20;
                    if (event.pageX - pos.left + tip.width() > maxDims.width - 30)
                        offsetX = -tip.width() - 20;
                    if (event.pageY - pos.top + tip.height() > maxDims.height )
                        offsetY = -tip.height() - 20;
                    tip.css({
                        left: event.pageX - pos.left + offsetX,
                        // left:'100px',
                        top:  event.pageY - pos.top + offsetY
                    });

                }

            });


        $("#points>.count").text(this.MAX_POINTS+'\/70');
    },
    drawButton:function(tree, index) {
        var spritePos = this.masterySpritePos(tree, index); // 图标在雪碧图的位置
        var buttonPos = this.masteryButtonPosition(tree, index); //按钮的位置
        var status = this.data[tree][index].tier == 0 ? "available" : "unavailable"; //第一行的话默认状态
        var rank = 0;
        var tier = this.data[tree][index].tier; //第几行
        var context =this;
        $("#calculator").append(
            $("<div>")
                .addClass("button")
                .addClass(status)
                //.data("buttonFrame", buttonFrame)
                .css({
                    left: buttonPos.x+"px",
                    top: buttonPos.y+"px",
                    // Sprite has three columns: 0px is color, -54 is desaturated and -108px is black and white
                    //-2的时候是满点的。。56的时候是能点但是未满  108 + 2 是不能点
                    backgroundPosition: (status == "full" ? -2 : status == "available" ? -2 - context.BUTTON_SIZE : -2 - 2*context.BUTTON_SIZE) + "px " +
                    (spritePos - 2) + "px"
                })
                .append(
                    $("<div>")
                        .addClass("buttonFrame")
                        .css({ // Why? Well: it works
                            // full->line 2 -> -152  4->
                            backgroundPosition: (status == "full" ? (tier%2 == 1 ? (tier == 1 ? -152 : -76 * tier) : -76) : status == "available" ? -76 : 0) + "px " +
                            (status == "full" ? (tier == 3 ? -76 : (tier == 5 ? -152 : 0) ) : 0) + "px"
                        })
                )
                .append(
                    $("<div>")
                        .addClass("counter")
                        .addClass("counter-"+status)
                        .text("0/" + data[tree][index].ranks)
                        .css({visibility: data[tree][index].tier % 2 == 0 ? "visible" : "hidden"}) // L
                )
                .mouseover(function(event){
                    var tooltipText = context.masteryTooltip(tree, index, rank);
                    context.formatTooltip($("#tooltip").show(), tooltipText);
                    $(this).data("hover", true);
                    $(this).parent().mousemove();
                })
                .mouseout(function(){
                    $("#tooltip").hide();
                    $(this).data("hover", false);
                })
                .mousedown(function(event){
                    switch (event.which) {
                        case 1:
                            // Left click
                            context.deltaMastery(tree, index, rank, +1);
                            break;
                        case 3:
                            context.deltaMastery(tree, index, rank, -1);
                            break;
                    }
                })
                .mousewheel(function(event, delta){
                    context.deltaMastery(tree, index, rank, delta);
                })
                .data("update", function() {
                    rank = context.state[tree][index] || 0;
                    if (rank > 0) { // used to be "== data[tree][index].ranks"
                        status = "full";
                    } else {
                        // check if available
                        if (context.masteryPointReq(tree, index) <= context.treePoints(tree))
                            status = "available";
                        else
                            status = "unavailable";


                        // check if points can be spent
                        if (context.totalPoints >= context.MAX_POINTS)
                            if (context.masteryTierFull(tree, index) >= 0) // used to be "rank > 0"
                                status = "available";
                            else
                                status = "unavailable";
                    }
                    // change status class
                    if ( !$(this).hasClass(status) ) {
                        $(this)
                            .removeClass(context.buttonClasses.join(" "))
                            .addClass(status)
                            .css({
                                backgroundPosition: (status == "full" ? -2 : status == "available" ? -2 - context.BUTTON_SIZE : -2 - 2*context.BUTTON_SIZE) + "px " +
                                (spritePos - 2) + "px"
                            });
                    }
                    // adjust counter
                    var counter = $(this).find(".counter").text(rank + "/" + context.data[tree][index].ranks);
                    if ( !counter.hasClass("counter-"+status) ) {
                        counter
                            .removeClass(context.counterClasses.join(" "))
                            .addClass("counter-"+status)
                        //.css({visibility: data[tree][index].tier % 2 == 0 ? "visible" : "hidden"}) // L
                    }
                    $(this).find(".buttonFrame").css({
                        backgroundPosition: (status == "full" ? (tier%2 == 1 ? (tier == 1 ? -152 : -76 * tier) : -76) : status == "available" ? -76 : 0) + "px " +
                        (status == "full" ? (tier == 3 ? -76 : (tier == 5 ? -152 : 0) ) : 0) + "px"
                    });

                    // change keystone status
                    /*
                     var keystoneLink = $(this).data("keystoneLink");
                     if (keystoneLink != null) {
                     if ( !keystoneLink.hasClass(status) ) {
                     keystoneLink
                     .removeClass(buttonClasses.join(" "))
                     .addClass(status);
                     }
                     }*/
                    // force tooltip redraw
                    if ($(this).data("hover"))
                        $(this).mouseover();
                })
        );
    },
    deltaMastery:function(tree, index, rank, deltaR) {
        if (this.isValidState(tree, index, rank, deltaR)) {
            var previous = this.masteryTierFull(tree, index);
            // If we're removing points from alternative mastery
            if (previous >= 0 && deltaR > 0)
            {
                this.setState(tree, previous, this.state[tree][previous], -deltaR);
                // if (MUSIC && action_sound == sounds_unlock) action_sound = sounds_add;
            }
            else {
                // Check if we should go 0-5 instantly
                if (deltaR > 0 && this.masteryTierEmpty(tree, this.data[tree][index].tier) && this.data[tree][index].ranks > 1 && this.totalPoints + this.data[tree][index].ranks <= this.MAX_POINTS)
                    deltaR = this.data[tree][index].ranks;
                // Check if it is the last point spent
                // if (MUSIC && totalPoints + deltaR == MAX_POINTS) sounds_30.play();
            }
            this.setState(tree, index, rank, deltaR);
        }
    },
    customTooltip:function(tooltip, tooltipText) {
        tooltip.addClass("custom");
        tooltip.children(":not(p.first)").hide();
        tooltip.find("p.first").text(tooltipText);
    },
    formatTooltip:function(tooltip, tooltipText) {
        tooltip.removeClass("custom");

        var head = tooltip.find("strong").text(tooltipText.header).show();
        if ( !head.hasClass(this.treeNames[tooltipText.tree]) ) {
            head
                .removeClass(this.treeNames.join(" "))
                .addClass(this.treeNames[tooltipText.tree]);
        }

        var rank = tooltip.find(".rank").text(tooltipText.rank).show();
        if ( !rank.hasClass(tooltipText.rankClass) ) {
            rank
                .removeClass(this.rankClasses.join(" "))
                .addClass(tooltipText.rankClass)
        }

        tooltip.find(".req").text(tooltipText.req).show();
        tooltip.find("p.first").html(tooltipText.body);

        var second = tooltip.find("p.second");
        if (tooltipText.bodyNext == null) {
            second.hide();
        } else {
            second
                .show()
                .find(".content")
                .html(tooltipText.bodyNext);
        }
    },
    masteryTooltip:function(tree, index, rank) {
        var mastery = data[tree][index];
        // second flags whether there are two tooltips (one for next rank)
        var showNext = !(rank < 1 || rank >= mastery.ranks);

        // parse text
        var text = {
            tree: tree,
            header: mastery.name,
            rank: "等级: " + rank + "/" + mastery.ranks,
            // var rankClasses = ["num-unavailable", "num-available", "num-full"];
            // var counterClasses = ["counter-unavailable", "counter-available", "counter-full"];
            rankClass: (rank == mastery.ranks ? this.rankClasses[2] : (this.isValidState(tree, index, rank, 1) ? this.rankClasses[1] : this.rankClasses[0])), //提示技能等级情况
            req: this.masteryTooltipReq(tree, index),
            body: this.masteryTooltipBody(mastery, rank),
            bodyNext: showNext ? this.masteryTooltipBody(mastery, rank+1) : null
        };

        return text;
    },
    masteryTooltipBody:function(mastery, rank)  {
        // Rank 1 is index 0, but Rank 0 is also index 0
        rank = Math.max(0, rank - 1);
        var desc = mastery.desc;
        desc = desc.replace(/#/, mastery.rankInfo[rank]);
        desc = desc.replace(/\n/g, "<br>");
        desc = desc.replace(/\|(.+?)\|/g, "<span class='highlight'>$1</span>");
        if (mastery.rankInfo2) {
            desc = desc.replace(/#/, mastery.rankInfo2[rank]);
        }
        if (mastery.perLevel) {
            desc = desc.replace(/#/, Math.round(mastery.perLevel[rank]*100)/100);
        }
        if (mastery.perLevel2) {
            desc = desc.replace(/#/, Math.round(mastery.perLevel[rank]*100)/100);
        }
        return desc;
    },
    masteryTooltipReq:function(tree, index) {
        var missing = [];
        var pointReq = this.masteryPointReq(tree, index) //返回需要的天赋点数
        if (pointReq > this.treePoints(tree)) // 需要的点数 大于 已有点数
        // missing.push("需要" + pointReq + "点天赋投入" + treeNames[tree][0].toUpperCase() + treeNames[tree].slice(1));
            missing.push("需要" + pointReq + "点天赋投入" + this.treeNames[tree]);
        if ((this.state[tree][index] || 0) < this.data[tree][index].ranks) {
            var existing = this.masteryTierFull(tree, index); //同级的另外一个技能
            if (existing >= 0) //If we can put more points here, but it will remove points in your current mastery
                missing.push("选择这个将会移除在" + this.data[tree][existing].name + "的天赋点数。");
        }
        return missing.join("\n");
    },
    masteryButtonPosition:function(tree, index) {
        var idx = data[tree][index].index - 1; //1 - 1 第1个 第2个  3 - 1
        var ix = idx % 4;
        var iy = data[tree][index].tier; //状态
        var x = 0, y = 0;
        //var SPACING = {margin_left: 44, margin_top: 20, margin_keystone: 35, spacing_x: 13, spacing_y: 20}
        // padding for tree
        // var TREE_OFFSET = 276;
        x += this.TREE_OFFSET * tree; // 0
        // base padding
        x += this.SPACING.margin_left;

        if (iy % 2 == 1 && iy != 5) {
            x += this.SPACING.margin_keystone; // 偶数行的偏移
        }

        y += this.SPACING.margin_top;
        // padding for spacing
        x += ix * (this.BUTTON_SIZE + this.SPACING.spacing_x); //x 的最终偏移 单行第2个为2 * (54 + 13) 偶数为 1* (54+13)
        y += iy * (this.BUTTON_SIZE + this.SPACING.spacing_y); // y的最终偏移 为 (54+上边距) * 行数

        var dwOffset = 25;
        if(tree==0){
            if(index==2||index==7||index==12){x=40 + dwOffset;}
            if(index==3||index==8||index==13){x=111 + dwOffset;}
            if(index==4||index==9||index==14){x=183 + dwOffset;}
            if(index==0||index==5||index==10){x=79 + dwOffset;}
            if(index==1||index==6||index==11){x=155 + dwOffset;}
        }
        if(tree==1){
            if(index==2||index==7||index==12){x=396 + dwOffset;}
            if(index==3||index==8||index==13){x=467 + dwOffset;}
            if(index==4||index==9||index==14){x=538 + dwOffset;}
            if(index==0||index==5||index==10){x=435 + dwOffset;}
            if(index==1||index==6||index==11){x=511 + dwOffset;}
        }
        if(tree==2){
            if(index==2||index==7||index==12){x=732 + dwOffset;}
            if(index==3||index==8||index==13){x=803 + dwOffset;}
            if(index==4||index==9||index==14){x=874 + dwOffset;}
            if(index==0||index==5||index==10){x=771 + dwOffset;}
            if(index==1||index==6||index==11){x=847 + dwOffset;}
        }

        return {x: x, y: y};
    },
    masterySpritePos:function(tree, index) {
        //雪碧图的x位置
        // - 54 * ( 0 + 0)
        // return;
        return 0 - this.BUTTON_SIZE * (this.treeOffsets[tree] + index);
    },
    masteryTier:function(tree, index) {
        // 找到第几行
        return data[tree][index].tier;
    },
    masteryPointReq:function(tree, index) {
        // var TIER_REQS = [0, 5, 6, 11, 12, 17];
        //返回某一行需要的前置天赋点数
        return this.TIER_REQS[this.masteryTier(tree, index)];
    },
    // Returns the number of the other mastery in tier if both masteries sum up to the maximum number of points in tier.
    masteryTierFull:function(tree, index) {
        var tier = this.data[tree][index].tier;
        for (var i in this.data[tree])
            if (i != index && this.data[tree][i].tier == tier && (this.state[tree][i] || 0) + (this.state[tree][index] || 0) >= this.data[tree][i].ranks)
                return i;
        return -1;
    },
    // Same as above, but for the case of preventing invalid 0-5 acceleration.
    masteryTierEmpty:function(tree, tier) {
        for (var i in this.data[tree])
            if (this.data[tree][i].tier == tier && (this.state[tree][i] || 0) > 0)
                return false;
        return true;
    },
    treePoints:function(tree, treeTier) {
        var points = 0;

        for (var i in this.state[tree])
            if (!treeTier || treeTier > this.masteryTier(tree, i))
                points += this.state[tree][i];
        return points;
    },
    isValidState:function(tree, index, rank, mod) {
        var mastery = this.data[tree][index];
        if (rank+mod < 0 || rank+mod > mastery.ranks)
            return false;

        // Incrementing
        if (mod > 0) {
            // Check max points
            if (this.totalPoints + mod > this.MAX_POINTS)
            {
                // Check if we can add points here by removing them from the alternative mastery
                if (this.masteryTierFull(tree, index) >= 0)
                    return true;
                else
                    return false;
            }

            // Check this mastery's rank requirements: never account for current rank
            if (this.masteryPointReq(tree, index) > this.treePoints(tree) - rank)
                return false;
        }

        // Decrementing
        if (mod < 0) {
            // Check tree rank requirements
            for (var i in this.state[tree])
                if (i != index)
                // Figure out tier, get req points
                    if (this.state[tree][i] > 0 &&
                        // Calculate points in this tree up to this tier, and
                        // subtract one if we're removing from this portion
                        this.masteryPointReq(tree, i) > this.treePoints(tree, this.masteryTier(tree, i)) - (this.masteryTier(tree, index) < this.masteryTier(tree, i)))
                        return false;

            // Check child requirements
            for (var i in this.state[tree])
                if (i != index)
                    if (this.state[tree][i] > 0 && this.data[tree][i].parent == index)
                        return false;
        }

        return true;
    },
    setState:function(tree, index, rank, mod) {
        this.state[tree][index] = rank + mod;
        this.totalPoints += mod;
        this.updateButtons();
        this.updateLabels();
        // if (MUSIC) updateMusic();
        this.updateLink();
    },
    // If quiet flag is true, does not call updates
    resetStates:function(quiet) {
        for (var tree=0; tree<3; tree++)
            this.resetTree(tree);

        if (quiet != true) {
            this.updateButtons();
            this.updateLabels();
            // if (MUSIC) updateMusic();
            this.updateLink();
            // if (MUSIC) sounds_return.play();
        }
    },
    // Used in both resetStates and via panel
    resetTree:function(tree, update) {
        this.totalPoints -= this.treePoints(tree);
        for (var index in this.state[tree])
            this.state[tree][index] = 0;
    },
    updateButtons:function() {
        $("#calculator .button").each(function(){
            $(this).data("update").call(this, 0);
        });
    },
    updateLabels:function() {
        for (var tree=0; tree<3; tree++) {
            $("div[data-idx="+tree+"]").text(this.treeNames[tree] + ": " + this.treePoints(tree));
            $("#points>.count").text((this.MAX_POINTS - this.totalPoints)+"/70");
        }
    },
    updateLink:function() {
        var hash = this.exportMasteries();
        // Do not show link for empty trees
        if (hash.length <= 3) hash = '';
        hash = '?' + hash;
        var shareUrl = document.location.href;
        if(shareUrl.indexOf("?") > -1){
            shareUrl = shareUrl.substring(0,shareUrl.indexOf("?"));
        }
        shareUrl = shareUrl +hash;
        $('#share-box').find('.share-text').val(shareUrl);
        window._bd_share_config.share.bdText='#R2天赋加点#分享' + shareUrl;
    },
    escapeHtml:function(str){
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;'
        };
        return String(str).replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    },
    bitlen:function(tree, index) {
        if (data[tree][index] == undefined)
            return 0;
        return Math.floor(data[tree][index].ranks/2)+1;
    },
    // returns how many of the next masteries can fit in size bits
    bitfit:function(tree, index, bits) {
        var start = index;
        while (true) {
            var len = this.bitlen(tree, index);
            if (len > bits || len == 0)
                return index - start;
            bits -= len;
            index++;
        }
    },
    exportMasteries:function() {
        var str = "";
        var bits = 0;
        var collected = 0; // number of bits collected in this substr
        var tree, jumpStart = -1; // jumpStart is the start of the index, which we can turn to a bool by comparing >-1
        var context =this;
        var flush = function() {
            str += context.exportChars[(jumpStart>-1) << context.maxbits | bits];
            bits = 0;
            collected = 0;
            jumpStart = -1;
        }
        for (tree = 0; tree < 3; tree++) {
            for (var index = 0; index < context.data[tree].length; index++) {
                var space = context.bitfit(tree, index, context.maxbits - collected);
                // check if we should flush
                if (space < 1) {
                    flush();
                    space = context.bitfit(tree, index, context.maxbits);
                }

                // if we are collecting or the condition is right for collecting:
                // - if we are jumping and this is 0, SKIP.
                if (jumpStart > -1 && !(context.state[tree][index] > 0))
                    continue;
                // otherwise:
                // - either we were collecting already (and haven't flushed)
                // - or we can collect any within the next subset that would fit in
                //   this bit. we do this with some cool filter/map/reduce
                if (collected > 0 ||
                    [0,1,2,3,4]
                        .filter(function(a){ return a < space; })
                        .map(function(a){ return context.state[tree][index+a] || 0; })
                        .some(function(a){ return a > 0; })){
                    // check if we are at the end of a jump
                    if (jumpStart > -1) {
                        bits = index - jumpStart;
                        flush();
                    }

                    // collect more
                    var len = context.bitlen(tree, index);
                    bits = (bits << len) | (context.state[tree][index] || 0);
                    collected += len;
                } else if(jumpStart < 0) {
                    // this is the start of a jump
                    // check for flush
                    if (collected > 0)
                        flush();
                    jumpStart = index;
                }
            }
            // before switching trees, flush unless we just did
            if (jumpStart > -1) {
                bits = index - jumpStart;
                flush();
            } else if (collected > 0) {
                flush();
            }
        }

        return str;
    },
    makeImportChars:function(){
        for (var i=0; i<this.exportChars.length; i++) {
            this.importChars[this.exportChars[i]] = i;
        }
    },
    importMasteries:function(str) {
        this.resetStates(true);
        var tree = 0;
        var index = 0;
        var context = this;
        for (var i=0; i<str.length; i++) {
            var cur = context.importChars[str[i]];
            // check for bad input
            if (cur == undefined)
                return;
            // if the first bit is a 0, we know it's not a jump (using octal)
            if ((cur & 0o40) == 0) {
                // extract data
                var num = context.bitfit(tree, index, context.maxbits); // how many we can fit
                var sizes = [0, 1, 2, 3, 4] // an array of each mastery held in this char
                    .filter(function(a){ return a < num; })
                    .map(function(a){ return context.bitlen(tree, index+a); });
                for (var j=0; j<sizes.length; j++, index++) {
                    // shift amount is the sum of all elements to the right of this one
                    var shift = sizes.slice(j + 1).reduce(function(a, b){ return a + b; }, 0);
                    // shift off the bits we don't want and AND it with a bit mask
                    var value = (cur >> shift) & ((1 << sizes[j]) - 1);

                    context.state[tree][index] = value;
                    context.totalPoints += value;
                }
            } else {
                // jump
                var dist = cur & 0o37;
                index += dist;
            }

            // increment when we're done with a tree
            if (index >= context.data[tree].length) {
                tree++;
                index = 0;
                // break when we're done with all trees
                if (tree >= context.data.length)
                    break;
            }
        }

        context.updateButtons();
        context.updateLabels();
        // if (MUSIC) updateMusic();
        context.updateLink();
    },
    updateMasteries:function() {
        var hashIndex =document.location.hash.indexOf("?");
        var hash = document.location.hash.substring(hashIndex+1,document.location.hash.length-1);
        this.importMasteries(hash);
    }
}
module.exports = Calculator;