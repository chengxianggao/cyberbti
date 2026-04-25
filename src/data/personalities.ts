export type RadarData = {
  subject: string;
  A: number;
  fullMark: number;
};

export type Personality = {
  id: string;
  englishId: string;
  chineseName: string;
  quote: string;
  audioText: string;
  audioUrl?: string;
  image: string;
  imageClassName?: string;
  description: string;
  traits: string[];
  hobbies: string[];
  career: string;
  romance: string;
  lucky: string;
  funFact: string;
  radar: RadarData[];
};

export const personalities: Personality[] = [
  {
    "id": "WOLF",
    "englishId": "WOLF",
    "chineseName": "吴京",
    "quote": "犯我中华者，虽远必诛！贱不贱呐，真的太贱了！",
    "audioText": "犯我中华者，虽远必诛！贱不贱呐，真的太贱了！",
    "audioUrl": "./audio/wolf.mp3",
    "image": "./images/wujing.png",
    "imageClassName": "scale-[1.25] translate-y-2 -translate-x-[2px] origin-bottom group-hover:scale-[1.3]",
    "description": "你的血型是战狼型。走在路上看到红灯都想敬个礼。你的字典里没有'退缩'两个字，不管生活给你怎么样的毒打，你都会挺起胸膛大喊一句：'这特么才叫硬汉！' 唯一能打败你的，可能是手机长辈群里的假新闻。",
    "traits": ["硬汉", "热血", "行动力强"],
    "hobbies": ["锻炼", "保护弱小", "弘扬正能量"],
    "career": "特种兵 / 爱国主义宣传大使",
    "romance": "你的爱情充满了安全感和责任感，你愿意为你爱的人赴汤蹈火。",
    "lucky": "今天宜迎难而上，没有任何困难能阻挡你的脚步。",
    "funFact": "“任何邪恶，终将绳之以法”不仅是一句台词，更是你的精神写照。",
    "radar": [
      { "subject": "战斗力", "A": 100, "fullMark": 100 },
      { "subject": "热血度", "A": 100, "fullMark": 100 },
      { "subject": "信仰值", "A": 100, "fullMark": 100 },
      { "subject": "执行力", "A": 95, "fullMark": 100 },
      { "subject": "内耗", "A": 5, "fullMark": 100 }
    ]
  },
  {
    "id": "GOOD",
    "englishId": "GOOD",
    "chineseName": "峰哥",
    "quote": "这也不失为一件好事",
    "audioText": "这也不失为一件好事",
    "audioUrl": "./audio/good.mp3",
    "image": "./images/good.png",
    "description": "顶级自适应装甲拥有者。不管是股票跌停还是出门踩狗屎，只要你大脑里的处理器一转，都能转化成'这是好事儿啊'的阿Q精神。如果是核弹爆发，你可能会觉得'这下冬天再也不冷了呢，是好事'。",
    "traits": ["精神胜利", "绝不内耗", "极致乐观"],
    "hobbies": ["丧事喜办", "寻找闪光点", "反向安慰"],
    "career": "顶级心理疏导师 / 反向鸡汤大师",
    "romance": "和你的恋爱将充满松弛感，毕竟就算分手了你可能也会觉得“这是好事儿啊”。",
    "lucky": "今天一切顺利。如果不顺利……那就说明这是好事儿啊！",
    "funFact": "一句经典的“这是好事儿啊”让他成为了当代年轻人在面对挫折时最管用的精神海绵。",
    "radar": [
      { "subject": "乐观度", "A": 100, "fullMark": 100 },
      { "subject": "精神胜利法", "A": 100, "fullMark": 100 },
      { "subject": "抗打击力", "A": 90, "fullMark": 100 },
      { "subject": "现实感", "A": 30, "fullMark": 100 },
      { "subject": "抽象度", "A": 85, "fullMark": 100 }
    ]
  },
  {
    "id": "THINK",
    "englishId": "THINK",
    "chineseName": "罗翔",
    "quote": "你这行为，判个无期不过分吧？",
    "audioText": "你这行为，判个无期不过分吧？",
    "audioUrl": "./audio/think.mp3",
    "image": "./images/think.png",
    "description": "你的大脑就是一部行走的《刑法》。你看谁都像是张三。普通人觉得生活里的碰瓷是倒霉，你却觉得这是一个绝佳的紧急避险案例。你是个理性的带哥，但内心深处也向往着能在法庭外来一场狂徒张三的表演。",
    "traits": ["法外狂徒", "人间清醒", "降维打击"],
    "hobbies": ["普法", "哲学思辨", "讲张三的故事"],
    "career": "刑法教授 / 哲学带师 / 人生导师",
    "romance": "你对感情有极高的界限感，但也可能因为不自觉地普法而让约会气氛彻底走向法庭辩论。",
    "lucky": "今天宜多读书少说话，避免用法律大棒殴打无知网友。",
    "funFact": "用最幽默平实的语言讲述最残酷严肃的案件，张三的一生可谓是一部人类犯罪百科全书。",
    "radar": [
      { "subject": "知识储备", "A": 100, "fullMark": 100 },
      { "subject": "思维深度", "A": 100, "fullMark": 100 },
      { "subject": "口才", "A": 95, "fullMark": 100 },
      { "subject": "感性", "A": 40, "fullMark": 100 },
      { "subject": "张三召唤", "A": 100, "fullMark": 100 }
    ]
  },
  {
    "id": "RAW",
    "englishId": "WCNM",
    "chineseName": "刘海柱",
    "quote": "你哪个道上的？黄老邪啊？我特么一扳手干碎你！",
    "audioText": "你哪个道上的？黄老邪啊？我特么一扳手干碎你！",
    "audioUrl": "./audio/raw.mp3",
    "image": "./images/raw.png",
    "description": "人形自走脏话输出机。脾气比C4还要炸，点火就着。你的社交哲学是'能动手尽量别吵吵，能骂娘绝不好好说话'。但看似狂躁的外表下，其实藏着的是正义感爆棚的灵魂，看到不服就要管！",
    "traits": ["口吐芬芳", "性情中人", "嫉恶如仇"],
    "hobbies": ["修自行车", "路见不平", "大中华大吼"],
    "career": "东北街道话事人 / 物理系法师",
    "romance": "虽然表面粗暴，其实有一颗炽热护短的心，你的霸道护妻/夫让对方安全感直接拉满。",
    "lucky": "今天出门忌火气太大，切记不要动不动就抄扳手。",
    "funFact": "作为一个戴草帽的修车匠，却是整条街最让人望而生畏的正义使者。",
    "radar": [
      { "subject": "素质水平", "A": 10, "fullMark": 100 },
      { "subject": "正义感", "A": 100, "fullMark": 100 },
      { "subject": "战斗力", "A": 90, "fullMark": 100 },
      { "subject": "真实度", "A": 100, "fullMark": 100 },
      { "subject": "讲理程度", "A": 20, "fullMark": 100 }
    ]
  },
  {
    "id": "PURE",
    "englishId": "PURE",
    "chineseName": "丁真",
    "quote": "测底子。测你的马！妈妈生的！",
    "audioText": "测底子。测你的马！妈妈生的！",
    "audioUrl": "./audio/pure.mp3",
    "image": "./images/pure.png",
    "description": "一眼丁真，鉴定为：绝世好裤裆。你身上有一种不顾死活的纯真，当你微笑着看着别人的时候，别人都觉得你想问你要烟抽。你在这个复杂的世界里活得就像个行走的表情包。",
    "traits": ["纯真无邪", "一眼丁真", "电子宠物"],
    "hobbies": ["放牛", "抽电子烟", "当表情包"],
    "career": "顶级理塘形象大使 / 表情包巨头",
    "romance": "你那不羁又干净的笑容，总能勾起互联网老阿姨/老叔叔莫名其妙的保护欲。",
    "lucky": "今天宜装纯真，遇到不想回答的问题就微笑回应。",
    "funFact": "从一夜爆红纯真小伙到全网表情包顶流，他可能是中文互联网被二创最多的神。",
    "radar": [
      { "subject": "纯真度", "A": 100, "fullMark": 100 },
      { "subject": "造梗力", "A": 95, "fullMark": 100 },
      { "subject": "城府", "A": 5, "fullMark": 100 },
      { "subject": "幸运值", "A": 95, "fullMark": 100 },
      { "subject": "电子烟用量", "A": 100, "fullMark": 100 }
    ]
  },
  {
    "id": "IKUN",
    "englishId": "JNTM",
    "chineseName": "Ikun",
    "quote": "开庭带上你的键盘！食不食油饼？",
    "audioText": "开庭带上你的键盘！食不食油饼？",
    "audioUrl": "./audio/ikun.mp3",
    "image": "./images/ikun.png",
    "description": "自带BGM的节奏大师。一旦周围出现'鸡'、'你'、'太'、'美'这样的字眼，你的DNA就会疯狂暴动并想要做出铁山靠。你可以被全网嘲讽，但你永远是最高流的那个神，你太美了，真的太美了！",
    "traits": ["多才多艺", "铁山靠", "小黑子"],
    "hobbies": ["唱跳", "rap", "发律师函"],
    "career": "两年半个人练习生 / 背带裤收藏家",
    "romance": "在浪漫的时刻，你也许会忍不住给对方表演一段梳中分下的铁山靠。",
    "lucky": "今天宜练习时长两年半，你的才华终将让宇宙震惊。",
    "funFact": "一条背带裤、一个篮球，成就了中文互联网上最伟大、最坚韧的鬼畜素材集。",
    "radar": [
      { "subject": "才艺值", "A": 100, "fullMark": 100 },
      { "subject": "抗压度", "A": 85, "fullMark": 100 },
      { "subject": "造梗力", "A": 100, "fullMark": 100 },
      { "subject": "身法", "A": 90, "fullMark": 100 },
      { "subject": "起诉率", "A": 95, "fullMark": 100 }
    ]
  },
  {
    "id": "CHAD",
    "englishId": "+HAO",
    "chineseName": "嘉豪",
    "quote": "这也就是我，换别人早不行了。",
    "audioText": "这也就是我，换别人早不行了。",
    "audioUrl": "./audio/chad.mp3",
    "image": "./images/chad.png",
    "description": "如果自信能发电，你一个人就能照亮整个西半球。哪怕你今天穿了双洞洞鞋配西装裤，你也会觉得大街上的异性都在为你倾倒。只要你不尴尬，尴尬的永远是周围想连夜买站票逃离的人。",
    "traits": ["极度普信", "盲目自信", "油田开采者"],
    "hobbies": ["耍帅", "油腻搭讪", "沉浸式自恋"],
    "career": "野生霸总 / 土味情话祖师爷",
    "romance": "你以为自己是高配版霸道总裁，其实给对方的体验是随时想报交警大队查超载的油罐车。",
    "lucky": "今天忌照镜子，容易被自己的盛世美颜帅得无法自拔。",
    "funFact": "实力诠释了什么叫“明明那么普通，却可以那么自信”的最高境界。",
    "radar": [
      { "subject": "普信度", "A": 100, "fullMark": 100 },
      { "subject": "油腻值", "A": 95, "fullMark": 100 },
      { "subject": "自知之明", "A": 5, "fullMark": 100 },
      { "subject": "自信心", "A": 100, "fullMark": 100 },
      { "subject": "清爽度", "A": 10, "fullMark": 100 }
    ]
  },
  {
    "id": "CURSE",
    "englishId": "SUCKER",
    "chineseName": "孙笑川",
    "quote": "都是我干的，行了吧？你吼那么大声干嘛？",
    "audioText": "都是我干的，行了吧？你吼那么大声干嘛？",
    "audioUrl": "./audio/curse.mp3",
    "image": "./images/curse.png",
    "description": "宇宙级究极背锅王。俄乌冲突全因为你，火星撞地球肯定也是你推的。你就像是一块海绵，吸收了互联网所有的恶意，但依然能笑嘻嘻地说：'行，都tm怪我。带哥们，我佛了'。",
    "traits": ["万恶之源", "顶级背锅侠", "抽象大帝"],
    "hobbies": ["被全网通缉", "挨骂", "无端背锅"],
    "career": "互联网万能甩锅对象 / 抽象派鼻祖",
    "romance": "就算你谈恋爱被劈腿，最后全网也都会认为是你网恋骗钱在先。",
    "lucky": "今天无论你干什么，大家都会觉得这是你犯下的滔天大罪。",
    "funFact": "一种神秘的网络现象，只要哪里发生了坏事，评论区一定能完美推理出是你干的。",
    "radar": [
      { "subject": "抽象度", "A": 100, "fullMark": 100 },
      { "subject": "抗压能力", "A": 95, "fullMark": 100 },
      { "subject": "背锅力", "A": 100, "fullMark": 100 },
      { "subject": "人缘", "A": 10, "fullMark": 100 },
      { "subject": "攻击力", "A": 20, "fullMark": 100 }
    ]
  },
  {
    "id": "IRON",
    "englishId": "JIAN",
    "chineseName": "阿诺",
    "quote": "虽然我一百八十斤，但我还是个宝宝~",
    "audioText": "虽然我一百八十斤，但我还是个宝宝~",
    "audioUrl": "./audio/iron.mp3",
    "image": "./images/iron.png",
    "description": "金刚芭比本比。你长着一具能去漫威当反派的彪悍肉身，开口却能夹得让林志玲都自愧不如。只要一撒娇，周围的空气都会因为承受不了这种反差而结冰，真正的魔法物理双修坦克！",
    "traits": ["猛男娇羞", "魔鬼反差萌", "物理超度"],
    "hobbies": ["举铁", "夹子音", "猛男落泪"],
    "career": "野生金刚芭比 / 情感电台知心猛男",
    "romance": "在恋爱里你是个粘人精，虽然你一撒娇对方可能会以为一头熊正在索要蜂蜜。",
    "lucky": "今天宜去健身房，并在卧推时发出不可名状的娇嗲声。",
    "funFact": "强壮的肌肉结构和夹子音产生了极强的化学反应，让每一个看见的人大脑宕机。",
    "radar": [
      { "subject": "物理防御", "A": 95, "fullMark": 100 },
      { "subject": "夹子音", "A": 95, "fullMark": 100 },
      { "subject": "反差感", "A": 100, "fullMark": 100 },
      { "subject": "心理承受", "A": 30, "fullMark": 100 },
      { "subject": "猛男值", "A": 85, "fullMark": 100 }
    ]
  },
  {
    "id": "PRESS",
    "englishId": "BASG",
    "chineseName": "刘华强",
    "quote": "给你机会你不中用啊！这瓜保熟吗？",
    "audioText": "给你机会你不中用啊！这瓜保熟吗？",
    "audioUrl": "./audio/press.mp3",
    "image": "./images/press.png",
    "description": "人形低气压制造机。只要你往那一站，周围人就开始反思自己今天是不是做错事了。你去水果摊买个小番茄，老板都怕你从怀里掏出一把西瓜刀。讲道理不如你的压迫性注视好使一万倍。",
    "traits": ["气场压制", "不买生瓜", "极度强势"],
    "hobbies": ["买西瓜", "骑小电驴", "极限施压"],
    "career": "水果摊毁灭者 / 对话终结者",
    "romance": "在你的感情中，如果对方让你不爽，你会用看仇人的眼神问对方：“这爱保熟吗？”",
    "lucky": "今天宜去菜市场买瓜，老板绝对不敢给你吸铁石秤。",
    "funFact": "“你这瓜保熟吗？”成为了互联网上极具压迫感和试探性的终极名台词。",
    "radar": [
      { "subject": "压迫感", "A": 100, "fullMark": 100 },
      { "subject": "武力值", "A": 95, "fullMark": 100 },
      { "subject": "挑瓜能力", "A": 100, "fullMark": 100 },
      { "subject": "亲和力", "A": 10, "fullMark": 100 },
      { "subject": "找茬度", "A": 100, "fullMark": 100 }
    ]
  },
  {
    "id": "HOMELANDER",
    "englishId": "BABY",
    "chineseName": "祖国人",
    "quote": "我想干嘛就干嘛！我TM想干嘛就干嘛！月牙冲天！",
    "audioText": "我想干嘛就干嘛！我TM想干嘛就干嘛！月牙冲天！",
    "audioUrl": "./audio/homelander.mp3",
    "image": "./images/homelander.png",
    "description": "能力超群的宇宙第一巨婴。顺风局你是拯救世人的傲天神明，逆风局你不仅会掀桌子还会把桌子吃下去然后用激光眼滋人。你急需被别人仰望和夸赞，一旦有人骂你一句，你就会在被窝里哭着想把地球炸了。",
    "traits": ["极度自负", "激光眼", "宇宙巨婴"],
    "hobbies": ["虚伪演讲", "喝母乳", "月牙冲天"],
    "career": "被迫营业的神 / 重度缺爱变态狂",
    "romance": "跟你谈恋爱不仅需要超凡的耐心，可能还需要随时准备好一套防弹防激光的西装。",
    "lucky": "今天宜控制面部肌肉，不要一言不合就露出令人惊悚的假笑。",
    "funFact": "那强压怒火的僵硬笑容，成为了无数打工人面对甲方时的完美精神平替。",
    "radar": [
      { "subject": "战斗力", "A": 100, "fullMark": 100 },
      { "subject": "自恋度", "A": 100, "fullMark": 100 },
      { "subject": "精神稳定", "A": 10, "fullMark": 100 },
      { "subject": "巨婴度", "A": 100, "fullMark": 100 },
      { "subject": "演技", "A": 95, "fullMark": 100 }
    ]
  },
  {
    "id": "REBEL",
    "englishId": "BADEGG",
    "chineseName": "哪吒",
    "quote": "去他个鸟命！我命由我不由天！",
    "audioText": "去他个鸟命！我命由我不由天！",
    "audioUrl": "./audio/rebel.mp3",
    "image": "./images/rebel.png",
    "description": "长了三头六臂的终极反骨仔。别人的顺从是本能，你的反抗是生理反应。叫往东偏往西，让你打狗你偏追鸡。一身天不怕地不怕的戾气，哪怕对面是如来佛祖，你也敢上去揪他的耳垂看看是不是真的。",
    "traits": ["天生反骨", "中二病", "不服就干"],
    "hobbies": ["掀桌子", "逆天改命", "和龙太子掐架"],
    "career": "反派毁灭者 / 职业掀桌委员会主席",
    "romance": "你讨厌腻歪和控制，越是让你往左走，你越是要向右来个托马斯全旋再走。",
    "lucky": "今天宜逆天改命，遇到不公平的事情一定要一脚踢翻。",
    "funFact": "靠着一句“我命由我不由天”，治好了无数网友的精神内耗。",
    "radar": [
      { "subject": "反骨度", "A": 100, "fullMark": 100 },
      { "subject": "战斗力", "A": 95, "fullMark": 100 },
      { "subject": "听劝程度", "A": 5, "fullMark": 100 },
      { "subject": "冲动值", "A": 100, "fullMark": 100 },
      { "subject": "命硬", "A": 100, "fullMark": 100 }
    ]
  },
  {
    "id": "TAO",
    "englishId": "HHHH",
    "chineseName": "桃黑黑",
    "quote": "你看我扎不扎你就完了！就爱整活儿！",
    "audioText": "你看我扎不扎你就完了！就爱整活儿！",
    "audioUrl": "./audio/taoheihei.mp3",
    "image": "./images/taoheihei.png",
    "description": "互联网在逃抽象带师。你脑子里的回路就像是一团缠绕乱麻，常常能说出碳基生物难以理解的迷惑发言。你的存在证明了一件事：神经病不仅具有传染性，而且还能带来极大的欢乐。",
    "traits": ["抽象行为", "脑回路清奇", "神鬼莫测"],
    "hobbies": ["整花活", "抽象舞蹈", "令人迷惑"],
    "career": "互联网一级保护废物 / 搞笑男神/女神",
    "romance": "你的伴侣必须要对抽象艺术有极强的包容力，否则半夜可能会被你突然的整活儿吓出心脏病。",
    "lucky": "今天宜发风言风语，说不定大家会以为你在搞微行为艺术。",
    "funFact": "每一个看似毫无意义的搞怪背后，都隐藏着当代年轻人释放压力的野生法则。",
    "radar": [
      { "subject": "整活能力", "A": 100, "fullMark": 100 },
      { "subject": "抽象度", "A": 100, "fullMark": 100 },
      { "subject": "精神状态", "A": 10, "fullMark": 100 },
      { "subject": "逻辑性", "A": 5, "fullMark": 100 },
      { "subject": "欢乐值", "A": 95, "fullMark": 100 }
    ]
  },
  {
    "id": "FAKE",
    "englishId": "BAOGUO",
    "chineseName": "马保国",
    "quote": "年轻人不讲武德，耗子尾汁！大意了，没有闪！",
    "audioText": "年轻人不讲武德，耗子尾汁！大意了，没有闪！",
    "audioUrl": "./audio/fake.mp3",
    "image": "./images/fake.png",
    "description": "浑元形意太极大成者。一张嘴就是老江湖，虽然战绩是一胜难求，但赛后复盘绝对是天下第一。你的字典里没有'失败'，只有'我大意了'。这世俗要是举办精神胜利法大赛，你绝对能拿十八连冠。",
    "traits": ["接化发", "闪电五连鞭", "嘴硬之王"],
    "hobbies": ["赛后复盘", "甩包袱", "传授人生经验"],
    "career": "宇宙第一武功高人（自封） / 被打脸艺术家",
    "romance": "和人约会迟到了你会说：“我大意了啊，堵车没有闪过去。”这谁能顶得住？",
    "lucky": "今天宜口若悬河，遇到强敌要讲武德，打不过就碰瓷。",
    "funFact": "“年轻人不讲武德”和“耗子尾汁”已经被纳入当代互联网的《新华字典》。 ",
    "radar": [
      { "subject": "实战力", "A": 10, "fullMark": 100 },
      { "subject": "嘴炮力", "A": 100, "fullMark": 100 },
      { "subject": "复盘力", "A": 100, "fullMark": 100 },
      { "subject": "脸皮厚度", "A": 100, "fullMark": 100 },
      { "subject": "闪避率", "A": 0, "fullMark": 100 }
    ]
  },
  {
    "id": "YUJIE",
    "englishId": "DAIPAI",
    "chineseName": "东北雨姐",
    "quote": "老baby们，就这活儿，不得我来呀！干就完了！",
    "audioText": "老baby们，就这活儿，不得我来呀！干就完了！",
    "audioUrl": "./audio/yujie.mp3",
    "image": "./images/yujie.png",
    "description": "地表最强重装战术母星。搬砖、扛猪、劈柴你样样精通，你家那口子在你面前就像个娇弱的小娇妻。你身上有一种不管明天世界末日还是股市崩盘，今天也要把这顿包子炖了的彪悍与踏实。",
    "traits": ["硬核悍妇", "六边形战士", "雷厉风行"],
    "hobbies": ["扛起一切", "抡大锤", "极限重活"],
    "career": "全能特种冰 / 重金属家庭主厨",
    "romance": "你不需要被保护，你就是能扛起整片天和两头猪的那个神，对象在你旁边负责喊666就行。",
    "lucky": "今天宜扛大包，发泄多余的牛劲。",
    "funFact": "其硬核剽悍的形象与娇小丈夫形成了鲜明反差，被称为“乡村重卡”。",
    "radar": [
      { "subject": "力量值", "A": 100, "fullMark": 100 },
      { "subject": "行动速度", "A": 100, "fullMark": 100 },
      { "subject": "娇弱度", "A": 0, "fullMark": 100 },
      { "subject": "养家力", "A": 100, "fullMark": 100 },
      { "subject": "踏实感", "A": 100, "fullMark": 100 }
    ]
  },
  {
    "id": "CHENZE",
    "englishId": "LAOTIE",
    "chineseName": "陈泽",
    "quote": "不是，哥们！是不是有病这人？别太荒谬了！",
    "audioText": "不是，哥们！是不是有病这人？别太荒谬了！",
    "audioUrl": "./audio/chenze.mp3",
    "image": "./images/chenze.png",
    "description": "赛博世界最真实的嘴替。每天最爱干的事就是以看戏的姿态吐槽这荒谬的世界。主打一个真实坦率，虽然有时候粗鲁得像个没开化的大猩猩，但却让人觉得莫名亲切和解压。",
    "traits": ["暴躁老哥", "真实输出", "全网嘴替"],
    "hobbies": ["犀利吐槽", "阴阳怪气", "指点江山"],
    "career": "网络高级喷子 / 荒谬世界观察员",
    "romance": "你的爱意全藏在那一句句假装嫌弃的“不是哥们”和“你要不要看看你在干嘛”里面。",
    "lucky": "今天宜开口锐评，你的一针见血会受到周围人的热烈共鸣。",
    "funFact": "极具辨识度的“不是哥们”成为了无数人面对无语事件时的起手式。",
    "radar": [
      { "subject": "真实度", "A": 100, "fullMark": 100 },
      { "subject": "暴躁度", "A": 90, "fullMark": 100 },
      { "subject": "装杯度", "A": 15, "fullMark": 100 },
      { "subject": "吐槽力", "A": 100, "fullMark": 100 },
      { "subject": "解压感", "A": 85, "fullMark": 100 }
    ]
  },
  {
    "id": "NAILONG",
    "englishId": "FOOL",
    "chineseName": "奶龙",
    "quote": "好耶！奶龙出击！为什么都在骂我！",
    "audioText": "好耶！奶龙出击！为什么都在骂我！",
    "audioUrl": "./audio/nailong.mp3",
    "image": "./images/nailong.png",
    "description": "互联网头号呆萌肉沙包。胖嘟嘟的外表让人忍不住想揉捏，但不知为何你似乎天生就带有让人想'梆梆给你两拳'的奇妙仇恨值。虽然经常挨骂被恶搞，你依然能傻呵呵地拍拍大肚皮继续干饭。",
    "traits": ["宇宙第一呆", "挨揍沙包", "贪吃蛇转世"],
    "hobbies": ["白给", "卖萌挨打", "炫火锅"],
    "career": "职业发泄玩具 / 表情包顶流胖子",
    "romance": "你就像一只随时随地可能因为太胖卡在门框里的宠物，对方对你只有无限的无语和宠溺。",
    "lucky": "今天宜躲避攻击，毕竟你这体型很容易成为无差别物理攻击的火力吸引点。",
    "funFact": "这到底是什么品种的生物？为什么大家看到它都有一种莫名的攻击欲？！",
    "radar": [
      { "subject": "可爱度", "A": 90, "fullMark": 100 },
      { "subject": "食欲", "A": 100, "fullMark": 100 },
      { "subject": "欠揍度", "A": 100, "fullMark": 100 },
      { "subject": "治愈（气人）力", "A": 95, "fullMark": 100 },
      { "subject": "智商", "A": 20, "fullMark": 100 }
    ]
  }
];
