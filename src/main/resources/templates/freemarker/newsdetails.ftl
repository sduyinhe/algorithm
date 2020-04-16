[#ftl]
<!DOCTYPE html>
<html lang="zh" style="font-size: 53.3333px;">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title></title>
	</head>
	<body>
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<link rel="stylesheet" type="text/css" href="${mobileRes}/css/reset.css" />
	<link rel="stylesheet" type="text/css" href="${mobileRes}/css/public.css" />
		<!-- 头部导航 -->
		[#assign type="1" channelTitle='新闻详情'/]
		<!-- 头部导航 -->
		<script type="text/javascript">
		</script>
		<link rel="stylesheet" href="${mobileRes}/css/wtt-common.css" />
		<link rel="stylesheet" type="text/css" href="${mobileRes}/css/newsdetails.css" />
		<link rel="stylesheet" type="text/css" href="${mobileRes}/css/newsList.css"/>
		<div class="newsdetails" id="newsdetails">
			<div class="inner">
				<h4 class="Regular bigtitle">${content.title!}</h4>
				<div class="from">
					<div class="left">
						[#if (content.source)??&&(content.source.sourceName)??&&(content.source.sourceName)!='']
						<a href="${(content.source.sourceLink)!}">
							<span class="Regular">来源：${(content.source.sourceName)!}</span>
						</a>
						[#else]
						<a href="http://www.jeecms.com" target="_blank"><span>来源：赵世杰测试</span></a>
						[/#if]

					</div>
					<div class="center">
						<span class="Regular" >${content.releaseTimeString!}</span>
					</div>
					<div class="right">
						<div class="image" style="background-image: url('${mobileRes}/images/icon/liualnliang-s.png');"></div>
						<span class="Regular" >${content.views!}</span>
					</div>
				</div>
				<div class="txt">
					${txt!}
				</div>
			</div>
		</div>
		[#assign contentId=content.id ups=content.ups/]
		<div class="relate">
			<div class="r-title">
				<h4 class="Light">相关推荐</h4>
				<span class="Light"></span>
			</div>

			<a class="read-more Light" href="${(content.channel.url)!'http://www.baidu.com'}">
				阅读更多资讯
			</a>
		</div>
		[#assign contentId=content.id /]
	</body>
</html>
