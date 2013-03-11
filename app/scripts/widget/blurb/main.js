define(function(){

	var LANGUAGE_DEFAULT = 'en';

	var blurbs = {

		'0001':{
			'en':'Home',
			'cn':'主页',
			'jp':'ホーム'
		},
		'0002':{
			'en':'About',
			'cn':'关于我们',
			'jp':'ペイントピアについて'
		},
		'0003':{
			'en':'Events',
			'cn':'活动',
			'jp':'イベント'
		},
		'0004':{
			'en':'Gallery',
			'cn':'展示',
			'jp':'ギャラリー'
		},
		'0005':{
			'en':'Merchandise',
			'cn':'商品',
			'jp':'ペイントピアグッズ'
		},
		'0006':{
			'en':'Contact us',
			'cn':'联系我们',
			'jp':'お問い合せ'
		},
		'0007':{
			'en':"Creative art events for everyone. It’s fun, relaxing and friendly.",
			'cn':'极具创意的艺术聚会，让您充分体验它带来的无限乐趣，身心的放松和友好的氛围。',
			'jp':'楽しく、仲良く、リラックスしながら、みんなでアートイベントを創り上げよう。'
		},
		'0008':{
			'en':'Read more about our events',
			'cn':'阅读更多关于活动详情。',
			'jp':'イベントについてもっと読む'
		},
		'0009':{
			'en':'Sign up',
			'cn':'注册',
			'jp':'入会する'
		},
		'0010':{
			'en':"As a Paintopia member you get invited to our various events. Membership is free.",
			'cn':"作为Paintopia的会员，您将获邀参加我们举办的各种活动。免费入会。",
			'jp':"ペイントピア会員として、様々なイベントに参加できます。会費は無料です。"
		},
		'0011':{
			'en':'Team building',
			'cn':'团队建设',
			'jp':'チーム・ビルディング'
		},
		'0012':{
			'en':'Learn more',
			'cn':'了解更多',
			'jp':'もっと見る'
		},
		'0013':{
			'en':'A Paintopia event is a popular team building activity.',
			'cn':'Paintopia是时下最为流行和广受赞誉的团队建设项目。',
			'jp':'ペイントピア イベントは、人気の高いチーム・ビルディング・アクティビティです'
		},
		'0014':{
			'en':'Host or sponsor an event',
			'cn':'主办方或赞助活动',
			'jp':'イベントを主催する、またはスポンサーになる'
		},
		'0015':{
			'en':'Get exposure to your brand or guests to your venue by sponsoring a Paintopia event.',
			'cn':'参与赞助Paintopia，推广您的商业品牌，为您的商业场所聚集人气',
			'jp':'自社ブランドを露出する、またはペイントピアのスポンサーになりお客様を集める'
		},
		'0016':{
			'en':'Upcoming events',
			'cn':'活动预告',
			'jp':'今後のイベント'
		},
		'0017':{
			'en':'See all',
			'cn':'全部目录',
			'jp':'全て見る'
		},
		'0018':{
			'en':"The Paintopia event lets you try painting in a fun and relaxing way, and make new friends.<br>We host regular member events in Shanghai and Tokyo. Everyone is welcome to join. <a href=\"./contact.html\">Sign up here.</a><br>Paintopia is also a great team building event. We can tailor make a half or full day with art competitions and games, or just a regular painting with a glass of wine.<br>If your company wishes to sponsor a Paintopia event we can offer various sponsor packages. Restaurant and hotel sponsors can simply offer a space for one of our events.<br>Contact founder Tiffany Chang for more information",
			'cn':"通过绘画这种简单有趣的方式，Paintopia为您扩展社交圈和人际网提供了一个全新的平台。<br>我们定期在上海和东京举办各类会员活动，欢迎大家加入。 <a href=\"./contact.html\">点击注册</a><br>于此同时，做为一个绝佳的团队建设项目，Paintopia可以为您的公司量身打造半天/全天的艺术竞技和游戏，当然，也许您所要求的只是一次搭配着精致美酒小食的普通绘画体验，我们同样也能满足。<br>另外，我们为赞助商提供各类赞助套餐。例如餐厅和酒店赞助商只需提供活动空间做为赞助即可。<br>了解更多活动详情，请联系：Tiffany Chang",
			'jp':"ペイントピアに参加すると、絵を描くのが楽しくなり、リラックスできて、友達の輪も広がります。東京と上海で定期的にイベントを開催していて、誰でも気軽に参加できます。<a href=\"./contact.html\">Sign up here.</a><br>ペイントピアは優れたチーム・ビルディング・プログラムでもあり、半日または1日で、アートコンテストやゲーム形式、ワインを楽しみながら絵を描くプログラムなど、リクエストに応じてアレンジすることができます。また、企業向けの様々なスポンサープランもご用意しています。レストランやホテルの場合、イベント会場の提供だけでもOKです。より詳しい情報をお知りになりたい場合は、ティファニー・チャンまでご連絡ください。"
		},
		'0019':{
			'en':'Send her an email',
			'cn':'发送邮件给她',
			'jp':'彼女にメールを送る'
		},
		'0020':{
			'en':'Paintopia founder Tiffany Chang.',
			'cn':'Paintopia 发起人 Tiffany Chang',
			'jp':'ペイントピア ファウンダー　ティファニー・チャン'
		},
		'0021':{
			'en':'where we are',
			'cn':'主办城市',
			'jp':'開催都市'
		},
		'0022':{
			'en':'Shanghai and Tokyo',
			'cn':'上海和东京',
			'jp':'上海と東京'
		},
		'0023':{
			'en':'We currently organize events in Shanghai and in Tokyo. If you are interested in setting up Paintopia in your city, please send us an email at tchang@paintopia.com.',
			'cn':'我们目前只针对上海和东京组织活动。如果您希望在您所在的城市举办Paintopia，请您发送邮件告诉我们： tchang@paintopia.com.',
			'jp':'現在、東京と上海でイベントを行っています。あなたの街でもペイントピアを開催できますので、ご興味のある方はtchang@paintopia.comまでメール送付をお願いします。'
		},
		'0024':{
			'en':'helping others',
			'cn':'帮助他人',
			'jp':'人を助ける'
		},
		'0025':{
			'en':'Paintopia for charity',
			'cn':'Paintopia 慈善事业',
			'jp':'チャリティーとしてのペイントピア'
		},
		'0026':{
			'en':'Many of our events are for charity. One of our fundamental reasons for being is so that we can give back to the community that we work in.',
			'cn':'实际上，我们开展的大多数活动都具有慈善性质，因为我们创始Paintopia的根本原因就在于感恩大众，回馈社会。',
			'jp':'イベントの多くはチャリティーを目的としています。なぜならば、活動を行っている地域に還元できる存在であることが、主要な活動目的の一つだからです。'
		},
		'0027':{
			'en':'the origin',
			'cn':'起源',
			'jp':'始まり'
		},
		'0028':{
			'en':'How we got started',
			'cn':'创建之初',
			'jp':'ペイントピアの始まり'
		},
		'0029':{
			'en':'Paintopia was started in 2012 by Tiffany Chang, who has organized similar art events for the past few years in Shanghai. Outside of Paintopia, Tiffany works in the luxury industry in China.',			
			'cn':'Paintopia是由Tiffany Chang女士在2012年创建于上海。Tiffany Chang女士现就投身于中国地区高端奢侈品行业，同时拥有极高的艺术修养和天赋，已成功在上海组织举办过若干次艺术活动。',
			'jp':'ペイントピアはティファニー・チャンが2012年に始めました。彼女は上海で過去数年間アートイベントを手掛けてきました。彼女はまた、世界トップのラグジュアリーブランドグループの中国マーケティング責任者としても活躍しています。'
		},
		'0030':{
			'en':'Become a member - it\'s free',
			'cn':'免费入会',
			'jp':'無料で会員になれます'
		},
		'0031':{
			'en':"We hold monthly events, in Shanghai and in Tokyo. The events run for about 3-4 hours, and you can come and go as you please. No stress. Paint at your own speed and however you like. It’s not a competition, and you don’t have to share what you are painting with others. After the event you bring your painting home with you. Membership is free, and means that you get invites to special Paintopia events, and receive regular updates via email. Use the form to the right to sign up.",
			'cn':"我们在上海和东京每个月举行一次活动。活动持续约3－4小时，您可以随意来去，没有任何压力和约束。绘画的速度根据您的喜好自己掌握。它不是一个比赛，您也不需要和别人分享您的画。活动结束后您可以将自己的作品带回家。入会是免费的，同时，您会被邀请参加其他特别活动，并且定期收到活动更新的邮件。请使用此格式正确注册。",
			'jp':"東京と上海で毎月イベントを開催しています。イベントの開催時間は3～4時間ですが、好きな時間に来て帰ることができるので、ストレスは全くありません。あなたのスピードで、好きなように絵を描いてください。<br>コンテストではないので、自分が描いた絵を他の人に見せる必要はありません。<br>描いた絵は、イベントが終わったら家に持ち帰ることができます。会費は無料で、ペイントピアの様々なイベントに参加したり、定期的に送られる会員向けメールを読むことができます。会員になりたい方は、このフォームに必要事項を記入し、送付してください。"
		},
		'0032':{
			'en':'Signup as a member',
			'cn':'注册成为会员',
			'jp':'会員になる'
		},
		'0033':{
			'en':'First name',
			'cn':'名',
			'jp':'姓'
		},
		'0034':{
			'en':'Last name',
			'cn':'姓',
			'jp':'名'
		},
		'0035':{
			'en':'Birthday (optional)',
			'cn':'生日（非必填项目）',
			'jp':'誕生日（任意）'
		},
		'0036':{
			'en':'Email address',
			'cn':'邮箱地址',
			'jp':'メールアドレス'
		},
		'0037':{
			'en':'Please enter data in the required fields.',
			'cn':'请输入所需字段',
			'jp':'必須項目の入力をお願いします'
		},
		'0038':{
			'en':'Please fill in a proper email address.',
			'cn':'请填写正确的邮箱地址',
			'jp':'有効なメールアドレスを入力してください'
		},
		'0039':{
			'en':'Thank you! You are now a member of Paintopia.',
			'cn':'谢谢！您现在已经是Paintopia的会员。',
			'jp':'ありがとうございます！これであなたもペイントピアの会員です。'
		},
		'0040':{
			'en':'Team building with Paintopia',
			'cn':'Paintopia团队建设',
			'jp':'ペイントピアでチーム・ビルディング'
		},
		'0041':{
			'en':"Many companies use Paintopia for a team building event. We can organize events from 20 people. We will find a nice venue and arrange food and drinks. We can organize art competitions, games or just let your staff enjoy painting with a glass of wine.<br>Send us an email at events@paintopia.com.",
			'cn':"很多企业公司选择Paintopia作为团队建设必不可少的项目。针对20位以上的团队建设，我们会安排理想的活动场地，提供精致的食品饮料。不论是艺术竞技游戏，或是简单的绘画体验，我们都能一一满足。预订活动请发送邮件至events@paintopia.com.",
			'jp':"多くの企業が、ペイントピアのチーム・ビルディング・プログラムを採用しています。プログラムは参加者20名からご用意しています。食事、飲物付きの素敵な会場もご用意できます。アートコンテストやゲーム、ワイングラスを片手に絵を描くことを楽しむなど、様々なプログラムを企画します。ご興味のある方は、events@paintopia.comまでメール送付をお願いします。"
		},
		'0042':{
			'en':"If your company wishes to sponsor a Paintopia event we can offer various sponsor packages. Restaurant and hotel sponsors can simply offer a space for one of our events. Send us an email at sponsor@paintopia.com.",
			'cn':"我们为赞助商提供各类赞助套餐。例如餐厅和酒店赞助商只需提供活动空间即可。赞助事宜请发送邮件至：sponsor@paintopia.com.",
			'jp':"企業向けの様々なスポンサープログラムもご用意しています。レストランやホテルの場合、スポンサーとしてイベント会場を提供するだけでもOKです。ご興味のある方は、sponsor@paintopia.comまでメール送付をお願いします。"
		},
		'0043':{
			'en':"Paintopia also works with these fine companies",
			'cn':"Paintopia与知名企业的合作",
			'jp':"ペイントピアは一流企業と共に活動しています"
		},
		'0044':{
			'en':"Paintopia events",
			'cn':"Paintopia 活动",
			'jp':"ペイントピア イベント"
		},
		'0045':{
			'en':"We hold monthly events, in Shanghai and in Tokyo. The events run for about 3-4 hours, and you can come and go as you please. No stress. Paint at your own speed and however you like.<br>It’s not a competition, and you don’t have to share what you are painting with others.<br>After the event you bring your painting home, with you.",
			'cn':"我们在上海和东京每个月举行一次活动。活动持续大约3－4小时，你可以随意来去，没有任何压力。画画的速度你自己决定，只要你喜欢。它不是一个竞争，您不需要和别人分享您的画。活动结束后您可以将自己的作品带回家。每个月，我们都会在上海和东京举办一次活动。活动时间约为3－4小时，您可以随意来去，没有任何压力和约束。绘画的速度根据您的喜好自己掌握。它不是一个比赛，您也不需要和别人分享。活动结束后您可以将自己的作品带回家做为纪念。",
			'jp':"東京と上海で毎月イベントを開催しています。イベントの開催時間は3～4時間ですが、好きな時間に来て帰ることができるので、ストレスは全くありません。あなたのスピードで、好きなように絵を描いてください。<br>コンテストではないので、自分が描いた絵を他の人に見せる必要はありません。<br>描いた絵は、イベントが終わったら家に持ち帰ることができます。"
		},
		'0046':{
			'en':"Sign up for this event",
			'cn':"报名参加此活动",
			'jp':"イベントに参加する"
		},
		'0047':{
			'en':"Paintopia Tokyo kick off event, Tokyo. Co-host is Konishiki",
			'cn':"Paintopia东京开幕活动。联合主办：Konishiki",
			'jp':"ペイントピア 東京初イベント、東京。KONISHIKIと共同開催します。"
		},
		'0048':{
			'en':"Our very first event in Tokyo is co-hosted by celebrated sumo wrestler Konishiki.<br>The event starts takes place at Oakwood premier residence in Midtown, Tokyo, between 2-5 pm.",
			'cn':"Paintopia东京首次暨开幕活动是为著名相扑选手小锦联合举办。活动于下午2－5pm在东京市中心OAKWOOD举行。",
			'jp':"東京初イベントは、元大関のKONISHIKIと共同開催します。<br>東京ミッドタウンのオークウッドで、14：00-17：00に行われます。"
		},
		'0049':{
			'en':"American Club, Tokyo",
			'cn':"东京，美国俱乐部",
			'jp':"アメリカンクラブ、東京"
		},
		'0050':{
			'en':"An open event for anyone who loves to paint. Admissions fee is 4,000 yen. Pay when you get there.<br>American Club, 2-1-2 Azabudai  Minato",
			'cn':"对绘画爱好者的开放日活动。参加费用4000日元，抵达现场后支付。地址在美国俱乐部，2-1-2 Azabudai  Minato。",
			'jp':"絵が好きな人は誰でもイベントに参加できます。参加費は4,000円です。当日お支払ください。アメリカンクラブ、港区麻布台2-1-2"
		},
		'0052':{
			'en':"Event",
			'cn':"项目",
			'jp':"イベント"
		},
		'0053':{
			'en':"Phone number",
			'cn':"手机号码",
			'jp':"電話番号"
		},
		'0054':{
			'en':"I also want to be a Paintopia member (it’s free).",
			'cn':"我也想成为Paintopia会员（免费）",
			'jp':"ペイントピア会員になりたい（会費無料）"
		},
		'0055':{
			'en':"Sign up",
			'cn':"报名",
			'jp':"参加する"
		},
		'0056':{
			'en':"Thank you!",
			'cn':"谢谢您！",
			'jp':"ありがとうございました！"
		},
		'0057':{
			'en':"Paintopia merchandise",
			'cn':"Paintopia 商品",
			'jp':"ペイントピアグッズ"
		},
		'0058':{
			'en':"If you like the Paintopia merchandise come to one of our events.",
			'cn':"如果您喜欢paintopia的商品来参加我们的活动吧。",
			'jp':"ペイントピアグッズが欲しい方は、ぜひイベントに参加してください"
		},
		'0059':{
			'en':"Our pretty bags – yours to keep when you visit an event.",
			'cn':"我们漂亮的袋子－在活动中您可以拥有。",
			'jp':"オシャレなバッグ－次回イベントに参加する時までお取りおきしておきます"
		},
		'0060':{
			'en':"Contact us for more information",
			'cn':"更多详情请联系我们",
			'jp':"もっと知りたい場合の連絡先"
		},
		'0061':{
			'en':"Send an email to",
			'cn':"通过邮件",
			'jp':"メールを送る"
		},
		'0062':{
			'en':"Call us",
			'cn':"通过电话",
			'jp':"電話する"
		},
		'0063':{
			'en': "Become a member",
			'cn': "成为会员",
			'jp': "会員になる"
		},
		'0064':{
			'en': "Proud to have worked with",
			'cn': "Proud to have worked with",
			'jp': "Proud to have worked with"
		}

	};

	return function(blurb, lng){
		lng = lng || LANGUAGE_DEFAULT;
		var dict = blurbs[blurb];
		if(dict){
			return dict[lng];
		}
		return "";
	};
});