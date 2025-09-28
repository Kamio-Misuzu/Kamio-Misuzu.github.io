export interface TimelineEvent {
	date: string;
	title: string;
	description: string;
	icon?: string;
	category?: string;
	type:  "" | "work" | "project" | "award"| "paper" | "certificate" ;
	image?: string;
    achievement: string;
}

export const timelineEvents: TimelineEvent[] = [
	{
		date: "2025年9月",
		title: "保研去向",
		description: "深圳大学计算机与软件学院计算机科学与技术，其实我知道这次保研的去向并不那么理想，我不禁觉得或许人生的轨迹在冥冥之中已经注定",
		icon: "material-symbols:code-rounded",
		category: "",
		type: "",
		image: "",
        achievement: ""
	},
    {
		date: "2025年9月",
		title: "一些感受",
		description: "也是意料中拿到了学校的保研资格, 目前在寻找导师中..., 回顾三年发现, 每年综测都是第二(综测第一年年都另有其人), 年年与国家奖学金无望😂",
		icon: "material-symbols:code-rounded",
		category: "",
		type: "",
		image: "",
        achievement: ""

	},

    {
		date: "2025年9月",
		title: "保研情况",
		description: "也是意料中拿到了学校的保研资格, 目前在寻找导师中..., 回顾三年发现, 每年综测都是第二(综测第一年年都另有其人), 年年与国家奖学金无望😂",
		icon: "material-symbols:code-rounded",
		category: "",
		type: "",
		image: "",
        achievement: ""

	},

    {
		date: "2025年6月",
		title: "Signal, Image and Video Processing期刊论文",
		description: "",
		icon: "material-symbols:code-rounded",
		category: "论文",
		type: "paper",
		image: "",
        achievement: "under review"

	},

    {
		date: "2025年5月",
		title: "省级大创-第二负责人-“桂界遗梦”——数字IP驱动的桂林非遗沉浸式文化体验传承元宇宙",
		description: "还在建设中...",
		icon: "material-symbols:code-rounded",
		category: "项目",
		type: "project",
		image: "",
        achievement: "未结项"

	},

    {
		date: "2024年10月-2025年6月",
		title: "华为ict大赛",
		description: "参加了初赛(不知道排名), 初赛复赛(昇腾AI赛道第一名), 省复赛前三名参加国赛(南宁)好像也是一等奖, 之后就去参加球赛(深圳)了",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "全球一等奖"

	},

    {
		date: "2025年3月",
		title: "TOSN2025期刊论文",
		description: "和同学合力砍下一篇期刊论文(导师外二作), 一种混合CNN-VMamba架构,结合ResNet-34和视觉状态空间块,共同捕捉用于凝视估计的局部面部特征和全局上下文相关性。",
		icon: "material-symbols:code-rounded",
		category: "论文",
		type: "paper",
		image: "",
        achievement: "已发表"

	},


    {
		date: "2024年12月-2025-5月",
		title: "“蓝桥杯”全国软件和信息技术专业人才大赛B组",
		description: "蓝桥杯吧, 这其实也是第二次打了, 第一次没怎么刷过题目, 就拿了省二, 第二次就刷了写题目将近500道题目吧(其实也是偶尔才刷刷, 而且又不整理, 刷了就忘),"+
        "第二次打拿了省一就去参加国赛了, 其实参加国赛之前一题目都没刷过, 因为感觉刷了也没用就不刷了((⊙﹏⊙)), 最后也是拿下国三",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "全国三等奖"

	},

    {
		date: "2025年2月",
		title: "美国大学生数学建模竞赛",
		description: "美赛emmm, 是寒假时期, 我们指导老师当时在给我们视频指导的时候, 我听到一半睡着了2333(非常抱歉因为实在太困了), "+
        "写这个美赛的时候跟国赛的感觉完全不一样, 题目给人模棱两可, 一点思路都没有, ",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "Honorable Mention"

	},
    {
		date: "2024年11月",
		title: "cait会议论文",
		description: "",
		icon: "material-symbols:code-rounded",
		category: "论文",
		type: "paper",
		image: "",
        achievement: "已发表"

	},

    {
		date: "2024年10月",
		title: "vsip会议论文",
		description: "第一篇会议论文, 基于改进的Yolov8模型的道路裂缝检测, 虽然写的比较烂, 但是也是人生中第一次发表论文了(其实当时是很激动的)",
		icon: "material-symbols:code-rounded",
		category: "论文",
		type: "paper",
		image: "",
        achievement: "已发表"

	},

    {
		date: "2024年10月",
		title: "全国大学生数学建模竞赛(二)",
		description: "是的, 我又参与了一次全国大学生数学建模竞赛, 这次我和另外两个同届的同学一起, 历时三天(熬夜一天),"+
        "\n其实我们的完成度也不高, 代码也是反复改版了好几次, 途中等代码跑完结果我们都在玩、刷视频等等, 但是论文写的挺不错的(大概😰)",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "全国二等奖"

	},

    {
		date: "2024年9月",
		title: "GPA | 大二",
		description: "90.24 / 100, 拿到校级二等奖学金, 今年奖学金名额相比去年的一等奖学金少了一个名额",
		icon: "material-symbols:code-rounded",
		category: "教育背景",
		type: "",
		image: "",
        achievement: "校级二等奖学金"
	},

	{
		date: "2024年8月-10月",
		title: "软著",
		description: "道路裂缝检测系统软著",
		icon: "material-symbols:code-rounded",
		category: "",
		type: "certificate",
		image: "",
        achievement: ""
	},

    {
		date: "2024年5-10月",
		title: "挑战杯《“集群突击”群体智能开放挑战赛虚实联动比赛》",
		description: "这里其实大部分是研究生学长带飞, 我和另外几个本科生主要是参与的作用",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "全国二等奖"

	},

    {
		date: "2024年5月",
		title: "国家级大创-第二负责人-GazeScreen:基于网络摄像头的2D屏幕眼动追踪系统",
		description: "应邀同学的大创",
		icon: "material-symbols:code-rounded",
		category: "项目",
		type: "project",
		image: "",
        achievement: "半步结项"

	},

    {
		date: "2024年5月",
		title: "省级大创-第一负责人-基于轻量化神经网络的实时道路安全检测系统",
		description: "大概5月份左右, 开展了一项目标检测的大创内容, 本项目开发了一个基于改进的Yolov8模型的道路裂缝检测系统,通过将训练后的模型pt文件转换"+
        "成onnx最后转换成nccn文件,并且借用开源项目”ncnn-android-yolov8”将其部分改进,能够实现通过手机摄像头实时采集图片或接收用户上传图片/视频,检测到其中是否存在裂缝的情况。",
		icon: "material-symbols:code-rounded",
		category: "项目",
		type: "project",
		image: "",
        achievement: "已结项"

	},

    {
		date: "2024年4月",
		title: "导师-李玉洁",
		description: "当时3月份的时候, 学院举行了URP导师选择计划, 因此我加入了李玉洁导师的门下, 导师人很好, 非常nice",
		icon: "material-symbols:code-rounded",
		category: "",
		type: "",
		image: "",
        achievement: ""

	},

    {
		date: "2023年10月",
		title: "全国大学生数学建模(一)",
		description: "和我的两个学长一起的, 当时由于我的失误, 我在论文中加入了我们的比赛编号导致最后只有参与奖",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "参与奖"

	},

    {
		date: "2023年10月",
		title: "全国大学生数学竞赛",
		description: "大学第一次参加竞赛, 赛前是在校内获得过三等奖(当时写题目时候一堆公式都忘记了, 答案都是蒙的, 大题是乱写的)," +
             "\n之后参加全国大学生数学竞赛拿到省一(这个时候状态还行, 但是其实跟之前学高数的时候相比差太多了, 毕竟过了一个暑假很多都不会了)",
		icon: "material-symbols:code-rounded",
		category: "竞赛",
		type: "award",
		image: "",
        achievement: "省级一等奖"

	},

    {
		date: "2023年9月",
		title: "GPA | 大一",
		description: "87.45 / 100, 拿到校级一等奖学金",
		icon: "material-symbols:code-rounded",
		category: "教育背景",
		type: "",
		image: "",
        achievement: "校级一等奖学金"
	},

	{
		date: "2023年6月",
		title: "英语四级",
		description: "英语四级👌",
		icon: "material-symbols:code-rounded",
		category: "英语",
		type: "certificate",
		image: "",
        achievement: ""
	},

    {
		date: "2023年4月",
		title: "开始接触深度学习",
		description: "这个时间段开始接触深度学习了",
		icon: "material-symbols:code-rounded",
		category: "深度学习",
		type: "",
		image: "",
        achievement: ""
	},

    {
		date: "2022年9月",
		title: "大学入学",
		description: "入学桂林电子科技大学人工智能学院",
		icon: "material-symbols:code-rounded",
		category: "教育背景",
		type: "",
		image: "",
        achievement: ""
	},

	{
		date: "2022年6月",
		title: "高中毕业",
		description: "玉山一中毕业",
		icon: "material-symbols:code-rounded",
		category: "教育背景",
		type: "",
		image: "",
        achievement: ""
	},

];
