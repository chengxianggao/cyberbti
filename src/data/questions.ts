export type Question = {
  id: number;
  text: string;
  traitMap: Record<string, number>;
};

export const questions: Question[] = [
  // 1-15 (Originals & refined)
  { id: 1, text: "遇到看不惯的人和事，我绝对不忍，当场就要开麦硬刚或者想办法一扳手解决。", traitMap: { RAW: 3, CHENZE: 3, PRESS: 2, REBEL: 2, HOMELANDER: 2, NAILONG: -3, PURE: -3, GOOD: -2 } },
  { id: 2, text: "我永远觉得我是人群中最闪耀、最有魅力的那个。只要我不尴尬，尴尬的就是别人。", traitMap: { CHAD: 3, FAKE: 2, IKUN: 2, TAO: 2, CURSE: -2, CHENZE: -1, THINK: -2 } },
  { id: 3, text: "无论遭遇多倒霉、离谱的事，我都能迅速给自己做心理按摩，真心觉得“这其实也是件好事”。", traitMap: { GOOD: 3, FAKE: 2, HOMELANDER: -3, CHENZE: -2, RAW: -2, WOLF: -1, REBEL: -2 } },
  { id: 4, text: "我做事讲究严密的逻辑思辨，就算是看个笑话我也忍不住想拔高到法律或者哲学的层面去深度解构。", traitMap: { THINK: 3, PRESS: 1, WOLF: 1, RAW: -3, TAO: -2, NAILONG: -2, CURSE: -1 } },
  { id: 5, text: "为了完成目标或守护我心中的正义感，我可以像硬汉一样咬碎牙往肚子里咽，绝不叫苦。", traitMap: { WOLF: 3, IRON: 3, YUJIE: 3, REBEL: 2, NAILONG: -3, PURE: -3, CURSE: -2 } },
  { id: 6, text: "我骨子里就有一种非常不顾死活的纯真，哪怕世界再复杂，我也有我的放牛小世界。", traitMap: { PURE: 3, NAILONG: 2, GOOD: 2, PRESS: -3, CHENZE: -2, THINK: -2 } },
  { id: 7, text: "我的脑回路极其清奇，总是充满各种离谱的抽象梗，不管场合多严肃，我都忍不住想整花活儿。", traitMap: { TAO: 3, IKUN: 2, CHAD: 1, WOLF: -3, THINK: -3, PRESS: -3 } },
  { id: 8, text: "生活中不管哪里出了事，总有一口锅莫名其妙地飞向我，甚至有时候我觉得确实全赖我。", traitMap: { CURSE: 3, NAILONG: 2, HOMELANDER: -3, FAKE: -3, PRESS: -2, WOLF: -2 } },
  { id: 9, text: "我外表看着稳重甚至强悍，但私下里却极度渴望被哄被宠，是个喜欢撒娇或叠词词的反差怪。", traitMap: { IRON: 3, HOMELANDER: 2, WOLF: -3, PRESS: -3, RAW: -3, YUJIE: -2 } },
  { id: 10, text: "我要绝对掌控局面，如果你不听话，我就会极具压迫感地死死盯着你，让你心里发毛。", traitMap: { PRESS: 3, HOMELANDER: 3, WOLF: 2, GOOD: -3, PURE: -3, NAILONG: -3 } },
  { id: 11, text: "我对一切被规定好的“天经地义的规矩”天生反感，遇到教条第一反应就是想把桌子掀了。", traitMap: { REBEL: 3, RAW: 2, HOMELANDER: 2, THINK: -3, YUJIE: -2, WOLF: -2, GOOD: -1 } },
  { id: 12, text: "如果出了丢脸的事或吃亏了，我嘴绝对是全身最硬的地方，还要疯狂复盘“我大意了啊没有闪”。", traitMap: { FAKE: 3, CHAD: 2, CHENZE: -2, RAW: -2, PURE: -3, WOLF: -1 } },
  { id: 13, text: "我极其看不惯生活中那些虚假做作的场面，会在旁边冷眼旁观甚至当面锐评“别太荒谬了哥们”。", traitMap: { CHENZE: 3, THINK: 2, REBEL: 1, GOOD: -2, FAKE: -2, CHAD: -2 } },
  { id: 14, text: "踏实干活才是我的底色，哪怕天塌下来我也能像战神一样先把活干完、把饭炫了。", traitMap: { YUJIE: 3, IRON: 2, WOLF: 2, NAILONG: 1, CHAD: -3, IKUN: -2, TAO: -2 } },
  { id: 15, text: "我非常在乎自己在网上的形象和才艺展示，如果有黑子敢否定我，我会立刻反击或者给他发律师函。", traitMap: { IKUN: 3, FAKE: 2, HOMELANDER: 1, CURSE: -2, CHAD: -1 } },
  
  // 16-25 (New behavioral cues)
  { id: 16, text: "如果有人在群里发了一个无聊的烂梗，我通常是第一个发阴阳怪气表情包甚至直接回怼的人。", traitMap: { CHENZE: 3, RAW: 2, REBEL: 2, PURE: -2, NAILONG: -2, GOOD: -3 } },
  { id: 17, text: "我一看到肌肉男猛女之类的视频，就会忍不住幻想自己也能拥有那种充满力量感的身材底子。", traitMap: { IRON: 3, YUJIE: 3, WOLF: 2, NAILONG: -3, PURE: -2, TAO: -2 } },
  { id: 18, text: "就算是去水果摊买个小西红柿，只要我脸一放下来，老板秤都不敢抖一下。", traitMap: { PRESS: 3, WOLF: 2, HOMELANDER: 2, GOOD: -3, PURE: -3 } },
  { id: 19, text: "我觉得只要自己的精神世界足够丰富，哪怕现实过得一塌糊涂我也能找到一种赢了的感觉。", traitMap: { GOOD: 3, FAKE: 3, NAILONG: 1, PRESS: -3, WOLF: -2, CHENZE: -2 } },
  { id: 20, text: "我很享受那种虽然我不说话，但周围人都在围着我转、试图研究并在意我情绪的感觉。", traitMap: { HOMELANDER: 3, CHAD: 2, IKUN: 2, YUJIE: -3, WOLF: -2 } },
  { id: 21, text: "比起精心策划的活动，我更喜欢突然脑子一抽，做出一些让所有朋友都大跌眼镜的奇葩举动。", traitMap: { TAO: 3, REBEL: 2, IKUN: 2, THINK: -3, PRESS: -3, WOLF: -3 } },
  { id: 22, text: "有人说我呆萌也行，说我蠢也行，其实我就是懒得懂那些人情世故，不如多炫一顿火锅。", traitMap: { NAILONG: 3, PURE: 2, GOOD: 1, PRESS: -3, WOLF: -3, THINK: -3 } },
  { id: 23, text: "如果遇到别人求助，我通常会先从理性和法律的角度分析他们是不是自己也有很大的过失。", traitMap: { THINK: 3, CHENZE: 2, FAKE: 1, YUJIE: -2, IRON: -2, PURE: -3 } },
  { id: 24, text: "当我受到挫折时，我宁愿去网吧通宵打游戏发泄，也绝对不在任何人面前流下一滴眼泪。", traitMap: { WOLF: 3, REBEL: 3, RAW: 2, IRON: -3, HOMELANDER: -2, GOOD: -2 } },
  { id: 25, text: "别人眼中的我是个雷厉风行的女汉子/猛男，其实我也会因为一片落叶或者一顿好饭感动半天。", traitMap: { YUJIE: 3, IRON: 3, PURE: 1, THINK: -3, PRESS: -2 } },

  // 26-40 (Deeper Scenarios)
  { id: 26, text: "碰到网络喷子我也绝不惯着他，必须要跟他大战三百回合，互飙国粹，直到他闭嘴为止。", traitMap: { RAW: 3, REBEL: 2, CHENZE: 1, GOOD: -3, PURE: -3, NAILONG: -2 } },
  { id: 27, text: "我就算在朋友圈发个无聊的日常，都觉得这会引发朋友圈的一次小规模地震，毕竟我很重要。", traitMap: { CHAD: 3, HOMELANDER: 2, IKUN: 2, CURSE: -2, PURE: -2 } },
  { id: 28, text: "我不怕被背叛或者受欺负，因为我的认知底座非常强大，一切杀不死我的都会让我更加抽象。", traitMap: { CURSE: 3, GOOD: 2, TAO: 2, THINKS: -2, HOMELANDER: -3 } },
  { id: 29, text: "如果遇到上级分配了不讲理的活，我会带头大拍桌子，老子不干了，要干你自己干！", traitMap: { REBEL: 3, RAW: 3, PRESS: 1, YUJIE: -2, GOOD: -3, WOLF: -1 } },
  { id: 30, text: "很多时候事情没办好，我觉得根本不是我的问题，就是因为这届网友或者这届队友真的不行。", traitMap: { FAKE: 3, HOMELANDER: 2, CHAD: 2, YUJIE: -3, IRON: -2 } },
  { id: 31, text: "有人说我对感情很执着，只要我看上的人哪怕对方已经有对象了，我也绝不会轻言放弃。", traitMap: { HOMELANDER: 3, WOLF: 2, CHAD: 1, PURE: -2, GOOD: -1 } },
  { id: 32, text: "我喜欢讲大道理，不管是在饭桌上还是在酒桌上，我都能随时随地地给别人上一堂人生大课。", traitMap: { THINK: 3, FAKE: 2, PRESS: 1, RAW: -3, TAO: -3, NAILONG: -3 } },
  { id: 33, text: "哪怕只有一点点表现的机会，我也一定会抓住，不仅要表现，还要给自己加上招牌的动作和台词。", traitMap: { IKUN: 3, TAO: 2, CHAD: 2, PURE: -2, CHENZE: -2 } },
  { id: 34, text: "我觉得现在的互联网风气太乱了，需要一套真正的硬核规矩和雷霆手段来好好治理一下。", traitMap: { WOLF: 3, PRESS: 2, THINK: 2, REBEL: -3, TAO: -3 } },
  { id: 35, text: "我并不在乎穿的衣服贵不贵，我觉得有一种随性、纯粹、哪怕有点土的气质才是最吸引人的。", traitMap: { PURE: 3, NAILONG: 2, YUJIE: 1, CHAD: -3, IKUN: -2 } },
  { id: 36, text: "如果我朋友被欺负了，我不止要动嘴，我甚至还想动用物理或魔法手段帮他超度对面的人。", traitMap: { IRON: 3, YUJIE: 3, RAW: 2, GOOD: -3, PURE: -3 } },
  { id: 37, text: "我就算是被骂成筛子，我也觉得他们是在蹭我的热度，无所谓，黑红也是红。", traitMap: { CURSE: 3, FAKE: 2, IKUN: 2, THINK: -3, WOLF: -3 } },
  { id: 38, text: "我特别喜欢那种极具穿透力、甚至有些疯癫的音乐或舞蹈，那感觉太对我胃口了。", traitMap: { TAO: 3, IKUN: 2, REBEL: 1, PRESS: -3, THINK: -3 } },
  { id: 39, text: "生活已经够苦了，我为什么还要每天装得那么正经？吃吃喝喝摆摆烂惹满身脂肪不香吗？", traitMap: { NAILONG: 3, GOOD: 2, PURE: 1, WOLF: -3, PRESS: -3, YUJIE: -3 } },
  { id: 40, text: "不管是在网上冲浪还是现实社交，我听到蠢话的第一反映就是深吸一口气，然后说：“不是，哥们？”", traitMap: { CHENZE: 3, THINK: 1, RAW: 1, GOOD: -2, NAILONG: -2 } }
];
