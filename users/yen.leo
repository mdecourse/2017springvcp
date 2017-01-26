<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="yen.20170108171605.1"><vh>@settings</vh>
<v t="yen.20170108171605.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="yen.20170108171605.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="yen.20170108171622.1"><vh>有關 2017springvcp</vh></v>
<v t="yen.20170108171733.1" a="E"><vh>@path ../</vh>
<v t="yen.20170108171733.2"><vh>@button pelican-blog</vh></v>
<v t="yen.20170108171733.3"><vh>@edit README.md</vh></v>
<v t="yen.20170108171733.4"><vh>@edit .gitignore</vh></v>
<v t="yen.20170108171733.5" a="E"><vh>Pelican 設定</vh>
<v t="yen.20170108171733.6"><vh>@edit local_publishconf.py</vh></v>
<v t="yen.20170108171733.7"><vh>@edit pelicanconf.py</vh></v>
</v>
<v t="yen.20170108171733.8"><vh>@clean index.html</vh>
<v t="yen.20170108171733.9" a="E"><vh>html</vh>
<v t="yen.20170108171733.10"><vh>head</vh></v>
<v t="yen.20170108171733.11" a="E"><vh>body</vh>
<v t="yen.20170108171733.12" a="E"><vh>reveal div</vh>
<v t="yen.20170108171733.13" a="E"><vh>slides div</vh>
<v t="yen.20170108171733.14" a="E"><vh>封面投影片</vh>
<v t="yen.20170108171733.15"><vh>封面投影片內容</vh></v>
</v>
<v t="yen.20170108171733.16" a="E"><vh>快捷鍵</vh>
<v t="yen.20170108171733.17"><vh>投影片快捷鍵</vh></v>
</v>
<v t="yen.20170108171733.64"><vh>各式內容引用範例</vh>
<v t="yen.20170108171733.65" a="E"><vh>導入數學符號與方程式</vh>
<v t="yen.20170108171733.66"><vh>LaTeX 格式方程式</vh></v>
</v>
<v t="yen.20170108171733.67" a="E"><vh>導入縮排程式碼</vh>
<v t="yen.20170108171733.68"><vh>引用程式碼</vh></v>
</v>
<v t="yen.20170108171733.69" a="E"><vh>導入影片</vh>
<v t="yen.20170108171733.70"><vh>iframe 導入影片</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
<v t="yen.20170108171733.71" a="E"><vh>@path content</vh>
<v t="yen.20170108171733.72"><vh>@clean 20170108.md</vh>
<v t="yen.20170108212459.1"><vh>ex1 - for 迴圈</vh></v>
<v t="yen.20170108212856.1"><vh>ex2 - input 與單位換算</vh></v>
<v t="yen.20170108220306.1"><vh>filereader</vh></v>
</v>
<v t="yen.20170118204210.1"><vh>@edit 20170118.md</vh></v>
<v t="yen.20170126025904.1"><vh>@edit 20170125.md</vh></v>
<v t="yen.20170108171733.81" a="E"><vh>@path pages</vh>
<v t="yen.20170108171733.82"><vh>@edit pages_1.md</vh></v>
</v>
</v>
<v t="yen.20170108171733.83"><vh>產生 .key 與 .crt</vh></v>
</v>
<v t="yen.20170108171930.1"><vh>@button https server</vh></v>
<v t="yen.20170108171939.1"><vh>@button ipv6 https server</vh></v>
</vnodes>
<tnodes>
<t tx="yen.20170108171605.1"></t>
<t tx="yen.20170108171605.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="yen.20170108171605.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="yen.20170108171622.1">2017 Spring CP 車輛工程系計算機程式

倉儲位置: https://github.com/mdecourse/2017springvcp

每一協同成員都應該要在 users 目錄下有一個 Leo 檔案

</t>
<t tx="yen.20170108171733.1"></t>
<t tx="yen.20170108171733.10">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
2017 Spring 車輛工程系計算機程式
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="https://cad-lab.github.io/cadlab_data/reveal/css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="https://cad-lab.github.io/cadlab_data/reveal/css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="https://cad-lab.github.io/cadlab_data/reveal/lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'https://cad-lab.github.io/cadlab_data/reveal/css/print/pdf.css' : 'https://cad-lab.github.io/cadlab_data/reveal/css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="https://cad-lab.github.io/cadlab_data/reveal/lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="yen.20170108171733.11">&lt;body&gt;
@others
&lt;script src="https://cad-lab.github.io/cadlab_data/reveal/lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cad-lab.github.io/cadlab_data/reveal/js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/zoom-js/zoom.js', async: true },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/notes/notes.js', async: true },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;
</t>
<t tx="yen.20170108171733.12">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="yen.20170108171733.13">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="yen.20170108171733.14">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="yen.20170108171733.15">## 2017Spring 計算機程式課程

### 虎科大車輛工程系

&lt;small&gt;
Created by [KMOLab](http://chiamingyen.github.io/kmolab/blog/)
&lt;/small&gt;

[計算機程式課程網誌](blog/index.html)


</t>
<t tx="yen.20170108171733.16">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="yen.20170108171733.17"># 投影片快捷鍵

* 利用箭頭上下前後換頁
* 按 f 鍵進入全螢幕模式 (full screen)
* 按 s 鍵可以顯示投影片筆記 (show)
* 按 o 鍵可以切換單張或全域檢視 (overview)
* 按 b 或 . 鍵可以切換螢幕黑屏 (black)
* 按 Esc 可以退出全螢幕或全域檢視 (Escape)

</t>
<t tx="yen.20170108171733.2">@language python
import os
#os.system("pelican content -o output -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o blog -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="yen.20170108171733.5"></t>
<t tx="yen.20170108171733.64">&lt;section&gt;
@others
&lt;/section&gt;</t>
<t tx="yen.20170108171733.65">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="yen.20170108171733.66"># 數學符號與方程式

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$
</t>
<t tx="yen.20170108171733.67">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="yen.20170108171733.68">## 利用 Markdown 寫投影片
以下利用 Markdown 格式展示 Python 程式碼:
```
@language python
# use threading and subprocess to threading the make process
import os
import subprocess
import threading

def domake():
    
    path = "../exposed/api/exposed"
    ubuntu = "../Ubuntu"
    
    # create obj path
    
    if not os.path.exists(path+"/../obj"):
        os.makedirs(path+"/../obj")
    
    subprocess.call(["make", "clean"], cwd=path)
    subprocess.call("make", cwd=path)
    subprocess.call(["cp", "{libslvs.so, _slvs.so, slvs.py}", ubuntu], cwd=path)
    subprocess.call(["python3", "circle_ex.py"], cwd=path+"/"+ubuntu)
    
make = threading.Thread(target=domake)
make.start()
```
</t>
<t tx="yen.20170108171733.69">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="yen.20170108171733.70">## 使用 iframe 導入影片

### 導入影片 template

&lt;iframe src="https://player.vimeo.com/video/183950627" width="640" height="492" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;
</t>
<t tx="yen.20170108171733.71"></t>
<t tx="yen.20170108171733.72">@language md
Title: 2017Spring 車輛工程系計算機程式
Date: 2017-01-08 11:00
Category: Course
Tags: syllabus, w1
Slug: 2017spring-ve-cp
Author: yen

為了運行速度, 我們學 C; 為了開發效率, 我們學 Python, 想要同時得到運行速度與開發效率, 我們學習 C + Python! 更具體的說: 在 2017Spring 的計算機程式課程中, 我們學習簡單的 ANSI C 與 Python3.

&lt;!-- PELICAN_END_SUMMARY --&gt;

&lt;!-- 導入 FileSaver 與 filereader --&gt;
&lt;script type="text/javascript" src="./../ace/FileSaver.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="./../ace/filereader.js"&gt;&lt;/script&gt;

&lt;!-- 導入 Brython 標準程式庫 --&gt;
&lt;!-- &lt;script type="text/javascript" src="https://cdn.rawgit.com/brython-dev/brython/master/www/src/brython_dist.js"&gt;
&lt;/script&gt; --&gt;

&lt;!-- 為了讓 import script1 可以正確運行, 停留在 Brython 3.2.9 版 --&gt;

&lt;script type="text/javascript" src="https://cdn.rawgit.com/brython-dev/brython/3.2.9/www/src/brython_dist.js"&gt;
&lt;/script&gt;

&lt;!-- 啟動 Brython --&gt;
&lt;script&gt;
window.onload=function(){
brython(1);
}
&lt;/script&gt;

&lt;!-- 以下可利用 Brython 環境執行 Python3 程式 --&gt;
&lt;!-- 假如需要用圖型表示數字, 則利用 canvas 繪圖 --&gt;
&lt;!-- &lt;canvas id="plotarea" width="600" height="400"&gt;&lt;/canvas&gt; --&gt;

2017 Spring 車輛工程系計算機程式 (五) 18:30-20:00上課日期:

&lt;span style="background-color: #ffff00"&gt;w1-2/24&lt;/span&gt; - 請每人準備一個隨身碟, &lt;span style="background-color: #55ff55"&gt;&lt;a href="http://service.mde.tw/download/?type=files&amp;filename=tiny2017_30MB.7z"&gt;下載&lt;/a&gt;&lt;/span&gt;可攜程式系統 (30MB) (或從倉儲中&lt;a href="./../data/tiny2017.7z"&gt;下載&lt;/a&gt;), 從校園網路&lt;span style="background-color: #55ff55"&gt;&lt;a href="http://link.springer.com/book/10.1007/978-1-4842-2385-7"&gt;下載 Lean Python.pdf&lt;/a&gt;&lt;/span&gt; (7MB, 英文 100 頁), &lt;span style="background-color: #55ff55"&gt;&lt;a href="https://service.mde.tw/download/?type=files&amp;filename=jsliu_c_programming.pdf"&gt;下載 C 程式語言基礎.pdf&lt;/a&gt;&lt;/span&gt; (194 KB, 中文 94 頁) (或從倉儲中&lt;a href="./../data/jsliu_c_programming.pdf"&gt;下載&lt;/a&gt;), &lt;span style="background-color: #55ff55"&gt;&lt;a href="https://service.mde.tw/download/?type=files&amp;filename=Programming-in-ANSI-C.pdf"&gt;下載 Programming in ANSI C.pdf&lt;/a&gt;&lt;/span&gt; (或從倉儲中&lt;a href="./../data/Programming-in-ANSI-C.pdf"&gt;下載&lt;/a&gt;) (600KB, 英文 258 頁), 了解如何啟動系統, 了解如何關閉系統, 了解如何執行 C 程式, 了解如何執行 Python3 程式, 了解為何要學習 C 與 Python3 程式語言.

&lt;span style="background-color: #ffff00"&gt;w2-3/3&lt;/span&gt; - ANSI C: Part A Section 1 - C 程式歷史與架構 | Python3: Ch1 Getting Started, 了解 Python 解譯器互動模式, 利用 dir() 列出物件屬性, 基本函式定義, 註解與程式碼縮排

&lt;span style="background-color: #ffff00"&gt;w3-3/10&lt;/span&gt; - ANSI C: Part A Section 2 - C 常數與變數 | Python3: Ch2 Python Objects, 了解 Python 物件型別與基本用法

&lt;span style="background-color: #ffff00"&gt;w4-3/17&lt;/span&gt; - 課程內容回顧與練習, 分別利用 C 與 Python3 寫一個華氏與攝氏溫度轉換程式, 並比較兩者的差異.

&lt;span style="background-color: #ffff00"&gt;w5-3/24&lt;/span&gt; - ANSI C: Part A Section 3 - 變數賦值與表達式 | Python3: Ch3 Program Structure, 了解 Python 程式架構

&lt;span style="background-color: #ffff00"&gt;w6-3/31&lt;/span&gt;(放假)

&lt;span style="background-color: #ffff00"&gt;w7-4/7&lt;/span&gt; - 課程內容回顧與練習, 簡單介紹能在瀏覽器中執行的 &lt;a href="https://brython.info/"&gt;Brython&lt;/a&gt;

&lt;span style="background-color: #ffff00"&gt;w8-4/14&lt;/span&gt; - ANSI C: Part A Section 4, 5, 6 | Python3: Ch4 - 6, 分組整理出一份漂亮的計算機程式初學者教材?如何整理?如何呈現?從 tiny2017 (30MB) 進展到 mini2017 (2GB)

&lt;span style="background-color: #ffff00"&gt;w9-4/21&lt;/span&gt; (期中考週) - 課程回顧與期中簡報

&lt;span style="background-color: #ffff00"&gt;w10-4/28&lt;/span&gt; ANSI C： Part A Section 1-6 再回顧 | Python3: Ch 1-6, 從 C、Python3 到 Brython, 導入 mini2017 之後, 帶出 Github 與 github pages, 我們學到什麼?

&lt;span style="background-color: #ffff00"&gt;w11-5/5&lt;/span&gt; 檢討分組期中報告與期中簡報, 我們學計算機程式的初衷為了什麼? 利用 Leo Editor、Pelican Blog、Reveal.js 與 Ethercalc 替換 MS Words、PowerPoint 與 Excel?

&lt;span style="background-color: #ffff00"&gt;w12-5/12&lt;/span&gt; - 是的, 我們確實隱瞞了許多複雜的細節, 了解如何利用 &lt;a href="http://bellard.org/tcc/"&gt;Tiny C compiler&lt;/a&gt; 編譯自己, 了解如何將 C 程式, 以 Tiny C 編譯為動態程式庫, 然後從 Python3 程式中進行呼叫.

&lt;span style="background-color: #ffff00"&gt;w13-5/19&lt;/span&gt; - 分組練習, 準備期末專題報告與簡報

&lt;span style="background-color: #ffff00"&gt;w14-5/26&lt;/span&gt; - 分組練習, 準備期末專題報告與簡報

&lt;span style="background-color: #ffff00"&gt;w15-6/2&lt;/span&gt; - 分組練習, 準備期末專題報告與簡報

&lt;span style="background-color: #ffff00"&gt;w16-6/9&lt;/span&gt; - 分組練習, 準備期末專題報告與簡報

&lt;span style="background-color: #ffff00"&gt;w17-6/16&lt;/span&gt; - 分組練習, 準備期末專題報告與簡報

&lt;span style="background-color: #ffff00"&gt;w18-6/23&lt;/span&gt; (期末考週), 分組期末簡報

參考書: &lt;a href="http://link.springer.com/book/10.1007/978-3-642-23303-6"&gt;Programming for Engineers - A Foundational Approach to Learning C and Matlab&lt;/a&gt;

&lt;div id="container1"&gt;&lt;/div&gt;
&lt;script type="text/python3"&gt;
from browser import document, html
container1 = document['container1']
&lt;/script&gt;

### 利用伺服器執行 Python3 程式

Jupyterhub: &lt;a href="https://8888.kmol.info:9443"&gt;https://8888.kmol.info:9443&lt;/a&gt;

### 利用以下的編輯器執行 Python3 程式

在 Firefox 中, 以 Preferences - General - Downloads 選擇"Always ask me where to save files"

在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading

&lt;script src="./../ace/ace.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;
&lt;script src="./../ace/ext-language_tools.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;
&lt;script src="./../ace/mode-python3.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;
&lt;script src="./../ace/snippets/python.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;
&lt;!-- 請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱--&gt;
&lt;script type="text/javascript"&gt;
function doSave(){
    var blob = new Blob([localStorage["py_src"]], {type: "text/plain;charset=utf-8"});
    filename = document.getElementById('filename').value
    saveAs(blob, filename+".py");
}
&lt;/script&gt;

&lt;script type="text/python3" id="script1"&gt;
import sys
import time
import traceback
import javascript

from browser import document as doc, window, alert

has_ace = True
try:
    editor = window.ace.edit("editor")
    session = editor.getSession()
    session.setMode("ace/mode/python")

    editor.setOptions({
     'enableLiveAutocompletion': True,
     'enableSnippets': True,
     'highlightActiveLine': False,
     'highlightSelectedWord': True
    })
except:
    from browser import html
    editor = html.TEXTAREA(rows=20, cols=70)
    doc["editor"] &lt;= editor
    def get_value(): return editor.value
    def set_value(x):editor.value = x
    editor.getValue = get_value
    editor.setValue = set_value
    has_ace = False

if hasattr(window, 'localStorage'):
    from browser.local_storage import storage
else:
    storage = None

def reset_src():
    if storage is not None and "py_src" in storage:
        editor.setValue(storage["py_src"])
    else:
        editor.setValue('for i in range(10):\n\tprint(i)')
    editor.scrollToRow(0)
    editor.gotoLine(0)

def reset_src_area():
    if storage and "py_src" in storage:
        editor.value = storage["py_src"]
    else:
        editor.value = 'for i in range(10):\n\tprint(i)'

class cOutput:

    def __init__(self,target):
        self.target = doc[target]
    def write(self,data):
        self.target.value += str(data)
        

#if "console" in doc:
sys.stdout = cOutput("console")
sys.stderr = cOutput("console")

def to_str(xx):
    return str(xx)

info = sys.implementation.version
doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro)

output = ''

def show_console(ev):
    doc["console"].value = output
    doc["console"].cols = 60
    doc["console"].rows = 10

# load a Python script
def load_script(evt):
    _name = evt.target.value + '?foo=%s' % time.time()
    editor.setValue(open(_name).read())

# run a script, in global namespace if in_globals is True
def run(*args):
    global output
    doc["console"].value = ''
    src = editor.getValue()
    if storage is not None:
       storage["py_src"] = src

    t0 = time.perf_counter()
    try:
        #ns = {'__name__':'__main__'}
        ns = {'__name__':'editor'}
        exec(src, ns)
        state = 1
    except Exception as exc:
        traceback.print_exc(file=sys.stderr)
        state = 0
    output = doc["console"].value

    print('&lt;completed in %6.2f ms&gt;' % ((time.perf_counter() - t0) * 1000.0))
    return state

if has_ace:
    reset_src()
else:
    reset_src_area()
    
def clear_console(ev):
    doc["console"].value = ""

doc['run'].bind('click',run)
doc['show_console'].bind('click',show_console)
doc['clear_console'].bind('click',clear_console)
&lt;/script&gt;

&lt;div id="version"&gt;&lt;/div&gt;
&lt;div id="editor" style="width:600px;height:300px;"&gt;&lt;/div&gt;

&lt;!-- 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合 --&gt;

&lt;form&gt;
    &lt;label&gt;Filename: &lt;input type="text" id="filename" placeholder="input file name"/&gt;.py&lt;/label&gt;
    &lt;input type="submit" value="Save" onclick="doSave();"/&gt;
&lt;/form&gt;
&lt;button id="run"&gt;Run&lt;/button&gt;
&lt;button id="show_console"&gt;Output&lt;/button&gt;
&lt;button id="clear_console"&gt;清除&lt;/button&gt;
&lt;div style="width:100%;height:100%;"&gt;
&lt;textarea id="console" autocomplete="off"&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;div id="common"&gt;&lt;/div&gt;
@others</t>
<t tx="yen.20170108171733.8">@language xml
@tabwidth -4
@others

</t>
<t tx="yen.20170108171733.81"></t>
<t tx="yen.20170108171733.83">sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt

</t>
<t tx="yen.20170108171733.9">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="yen.20170108171930.1">@language python
import os
import subprocess
import threading
import http.server, ssl

def domake():
    # build directory
    os.chdir("./../")
    server_address = ('localhost', 5443)
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print(os.getcwd())
    print("5443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170108171939.1">@language python
import os
import subprocess
import threading
import socket
import http.server, ssl

class HTTPServerV6(http.server.HTTPServer):
    address_family = socket.AF_INET6
  
def domake():
    # build directory
    os.chdir("./../")
    ipv6_address = '2001:288:6004:17:3004::808'
    server_address = (ipv6_address, 6443)
    #httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd = HTTPServerV6(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print("6443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170108212459.1">
&lt;script type="text/python3"&gt;
from browser import document as doc
import script1

def ex1(ev):
    script1.editor.setValue('''#ex1 簡單的 for 迴圈範例
    for i in range(10):
        print(i)
    ''')
    script1.editor.scrollToRow(0)
    script1.editor.gotoLine(0)
doc['ex1'].bind('click',ex1)
&lt;/script&gt;&lt;a id="ex1"&gt;ex1&lt;/a&gt;-for 迴圈
</t>
<t tx="yen.20170108212856.1">
&lt;script type="text/python3"&gt;
from browser import document as doc
import script1

def ex2(ev):
    script1.editor.setValue('''#溫度轉換程式
from browser import document as doc

# 因為此函式與滑鼠互動, 需要 event 當作輸入
def convTemp():
    mystring = ""
    cdegree = input("請輸入攝氏溫度:")
    fdegree = float(cdegree)*9/5 + 32
    output_string = "攝氏 " + str(cdegree) + "度=華氏 " + str(fdegree) + "度" 
    # 利用 print() 將轉換結果送到 console 區
    print(output_string)

#直接呼叫 convTemp() 執行
convTemp()
    ''')
    script1.editor.scrollToRow(0)
    script1.editor.gotoLine(0)
doc['ex2'].bind('click',ex2)
&lt;/script&gt;&lt;a id="ex2"&gt;ex2&lt;/a&gt;-溫度換算</t>
<t tx="yen.20170108220306.1">
&lt;script type="text/python3"&gt;
from browser import document
import script1

def get_file(e):
    data = open("./../python_ex/for1.py").read()
    script1.editor.setValue(data)
    script1.editor.scrollToRow(0)
    script1.editor.gotoLine(0)
    
document["get"].bind("click", get_file)
&lt;/script&gt;

&lt;script type="text/python3"&gt;
from browser import document
import script1

def get_temp1(e):
    data = open("./../python_ex/temp1.py").read()
    script1.editor.setValue(data)
    script1.editor.scrollToRow(0)
    script1.editor.gotoLine(0)
    
document["get_temp1"].bind("click", get_temp1)
&lt;/script&gt;

&lt;script type="text/python3"&gt;
from browser import document
import script1

def get_ver_and_kw(e):
    data = open("./../python_ex/ver_and_kw.py").read()
    script1.editor.setValue(data)
    script1.editor.scrollToRow(0)
    script1.editor.gotoLine(0)
    
document["get_ver_and_kw"].bind("click", get_ver_and_kw)
&lt;/script&gt;

&lt;button id="get"&gt;for1.py&lt;/button&gt;&lt;button id="get_temp1"&gt;temp1.py&lt;/button&gt;&lt;button id="get_ver_and_kw"&gt;ver_and_kw.py&lt;/button&gt;
</t>
</tnodes>
</leo_file>
