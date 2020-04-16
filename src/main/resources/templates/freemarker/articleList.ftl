[#ftl]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>阿保保险</title>
    <link rel="stylesheet" href="${webRes}/css/index.css">
    <link rel="stylesheet" href="${webRes}/css/articleList.css">
    <script src="${webRes}/js/jquery-3.1.1.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="${webRes}/js/index.js"></script>
    <script>
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = clientWidth / 7.2 + 'px';
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
        $(function() {
            // $("p#pTitle").each(function(){
            //     console.info($(this).text())
            //     var str = $(this).text();
            //     if(str.length>24){
            //         str = str.substring(0,24)+"</br>"+str.substring(24);
            //         $(this).text(str);
            //     }
            // });
            // $("#cache4").mouseout(function(){
            //     $(this).removeClass("mouseDown");
            // }).mousedown(function(){
            //     $(this).addClass("mouseDown");
            // });
        });
        function gotoUrl(count){
            console.info('count='+count);
            window.location="/ftl/ftl2";
        }
    </script>
</head>
<body>
    <div class="ArticleList">
        <div class="container">
            [#list content_list as a]
                [#if (a.biaotituUrl)??&&(a.biaotituUrl!='')]
                    <div class="item">
                        <div class="left">
                            <p id="pTitle" class="bold">${a.title}</p>
                            <p class="time">${a.releaseTime?string('yyyy-MM-dd')}</p>
                        </div>
                        <div class="right">
                            <img src="${a.biaotituUrl}" alt="">
                        </div>
                    </div>
                [#else]
                    <div class="item">
                        <div class="left">
                            <p id="pTitleNoImage" class="bold">${a.title}</p>
                            <p class="time">${a.releaseTime?string('yyyy-MM-dd')}</p>
                        </div>
                    </div>
                [/#if]
            [/#list]
            <div class="page">
                [#if left_page_url??]
                    <div id="u435" class="ax_default mouseOver" style="line-height: 20px;border-width: 0px;">
                        <div id="u435_div" class="buttonColor" style="display: block;"></div>
                        <div id="u435_text" class="text" style="overflow-wrap: break-word; text-transform: none;border-width: 0px;">
                            <p id="cache4" style=""><span id="cache5" style=""><a href="javascript:void(0);" onclick="gotoUrl(-1)">上一页</a></span></p>
                        </div>
                    </div>

                [#else]
                [/#if]
                <div id="u436" class="ax_default">
                    <div id="u436_div" class=""></div>
                    <div id="u436_text" class="text ">
                        <p><span style="color:#0079FE;">${current}</span><span style="color:#999999;">/${total}</span></p>
                    </div>
                </div>
                [#if right_page_url??]
                    <div id="u434" class="ax_default mouseOver" style="line-height: 20px;border-width: 0px;">
                        <div id="u434_div" class="buttonColor"  style="display: block;"></div>
                        <div id="u434_text" class="text" style="overflow-wrap: break-word; text-transform: none;border-width: 0px;">
                            <p id="cache2" style=""><span id="cache3" style="">><a href="javascript:void(0);" onclick="gotoUrl(1)">下一页</a></span></p>
                        </div>
                    </div>
                [#else]
                [/#if]
            </div>
        </div>

    </div>
</body>
</html>
