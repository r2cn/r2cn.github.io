/**
 * Created by Administrator on 2017/2/10.
 */
module.exports = [
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
