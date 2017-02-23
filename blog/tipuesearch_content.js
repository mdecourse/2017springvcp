var tipuesearch = {"pages":[{"text":"2017Spring 車輛工程系計算機程式 課程倉儲: http://github.com/mdecourse/2017springvcp 課程投影片: http://mdecourse.github.io/2017springvcp 課程網誌: http://mdecourse.github.io/2017springvcp/blog","tags":"misc","url":"./pages/about/","title":"About"},{"text":"利用 Brython 建立可以直接在瀏覽器中執行簡單 Python3 程式的環境. window.onload=function(){ brython(1); } from browser import document, html container1 = document['container1'] 利用伺服器執行 Python3 程式 Jupyterhub: https://8888.kmol.info:9443 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇\"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .py Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) for1.py temp1.py ver_and_kw.py","tags":"Course","url":"./web-based-python.html","title":"網際 Python3 程式環境"},{"text":"利用 Tiny C compiler 編譯 Windows 10 64 位元 dll 動態連結庫, 並由 Python 程式呼叫執行. 利用 Tiny C 編譯 Tiny C 從 http://download.savannah.gnu.org/releases/tinycc/ 下載 Win64 C 程式編譯器, 並 下載 Tiny C compiler 0.9.26 版程式原始碼. 利用下列批次檔案進行編譯. compileTCC.bat 檔案內容: echo Use TCC to compile TCC echo Set CC=tcc set CC=tcc set target=-DTCC_TARGET_PE -DTCC_TARGET_X86_64 set P=64 echo tools: tiny_impdef.exe, tiny_libmaker.exe %CC% %target% win32/tools/tiny_impdef.c -o tiny_impdef.exe %CC% %target% win32/tools/tiny_libmaker.c -o tiny_libmaker.exe echo Compile libtcc.dll if not exist libtcc\\nul mkdir libtcc %CC% %target% -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE libtcc.c -o libtcc.dll tiny_impdef libtcc.dll -o libtcc/libtcc.def echo Compile tc.exe %CC% %target% tcc.c -o tc.exe -ltcc -Llibtcc echo Compile libcc1.a %CC% %target% -c lib/libtcc1.c %CC% %target% -c win32/lib/crt1.c %CC% %target% -c win32/lib/wincrt1.c %CC% %target% -c win32/lib/dllcrt1.c %CC% %target% -c win32/lib/dllmain.c %CC% %target% -c win32/lib/chkstk.S %CC% %target% -c lib/alloca86_64.S tiny_libmaker lib/libtcc1.a libtcc1.o alloca86_64.o crt1.o wincrt1.o dllcrt1.o dllmain.o chkstk.o 編譯 dll 動態程式庫 首先, 建立一個 multiply.c 程式: #include <stdio.h> int multiply(int, int); __declspec(dllexport) int multiply(int num1, int num2) { return num1 * num2; } 利用下列指令, 將 multiply.c 編譯為動態連結庫 myltiply.dll tcc -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE multiply.c -o multiply.dll 接著利用下列 Python3 程式, 透過 ctypes 模組導入 multiply.dll, 並且執行動態連結程式庫中的 multiply() 函式. import ctypes lib = ctypes.CDLL('multiply.dll') result = lib.multiply(3, 2) print(result)","tags":"Course","url":"./c-dll-and-python3.html","title":"C dll 程式庫與 Python3"},{"text":"車輛工程系學習計算機程式做什麼? (電動汽車世代來臨) - 隨著現代汽車傳動控制的電子化、電機化、網路化與智能化, 計算機程式相關技術在汽車領域的應用將會愈來愈重要. (電腦輔助設計普及) - 現代汽車的協同設計研發大量採用 Computer Aided Design (CAD, 利用電腦實現設計的具像表達, 直接建構模擬系統或 API 延伸), Finite Element Analysis (利用電腦實現設計的強度與碰撞分析), Data Acquisition (數據擷取), and Numerical Analysis (數值分析). (虛擬與擴增實境整合) - 現代汽車行路對於網路化與數位化地圖與即時路況資料的依賴愈來愈多, 這些資料需要透過許多電腦程式的整合運行. Python 為解譯式、泛用型程式語言 Python 可以作為互動式計算機 Python 語法可以透過 Brython, 直接在瀏覽器中執行 Python 可以直接在 Jupyterlab 環境中執行 計算機程式抽象層級: Controller Area Network (CAN) https://github.com/hardbyte/python-can http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/how-google-self-driving-car-works (2011) (2013) (2013) (2013) (2014) (2015) (2016) (2017) (2017) http://blog.teamtreehouse.com/havent-started-programming-yet if computers are at all a part of your life, then learning to program is going to improve your life. Learning to program can make you more productive, efficient and effective. http://theconversation.com/why-everyone-should-have-to-learn-computer-programming-62328 數位化系統 (電腦) 無所不在, 希望高效且客製化運用這些系統, 就必須學習與電腦溝通 https://www.codementor.io/learn-programming/beginner-programming-language-job-salary-community http://cacm.acm.org/blogs/blog-cacm/176450-python-is-now-the-most-popular-introductory-teaching-language-at-top-u-s-universities/fulltext","tags":"Course","url":"./why-computer-programming.html","title":"為什麼要學習計算機程式?"},{"text":"為了運行速度, 我們學 C; 為了開發效率, 我們學 Python, 想要同時得到運行速度與開發效率, 我們學習 C + Python! 更具體的說: 在 2017Spring 的計算機程式課程中, 我們學習簡單的 ANSI C 與 Python3. 2017 Spring 車輛工程系計算機程式 (五) 18:30-20:00上課日期: w1-2/24 - 請每人準備一個隨身碟, 下載 可攜程式系統 (50MB) (或從倉儲中 下載 ), 從校園網路 下載 Lean Python.pdf (7MB, 英文 100 頁), 下載 C 程式語言基礎.pdf (194 KB, 中文 94 頁) (或從倉儲中 下載 ), 下載 Programming in ANSI C.pdf (或從倉儲中 下載 ) (600KB, 英文 258 頁), 了解如何啟動系統, 了解如何關閉系統, 了解如何執行 C 程式, 了解如何執行 Python3 程式, 了解為何要學習 C 與 Python3 程式語言. w2-3/3 - ANSI C: Part A Section 1 - C 程式歷史與架構 | Python3: Ch1 Getting Started, 了解 Python 解譯器互動模式, 利用 dir() 列出物件屬性, 基本函式定義, 註解與程式碼縮排 w3-3/10 - ANSI C: Part A Section 2 - C 常數與變數 | Python3: Ch2 Python Objects, 了解 Python 物件型別與基本用法 w4-3/17 - 課程內容回顧與練習, 分別利用 C 與 Python3 寫一個華氏與攝氏溫度轉換程式, 並比較兩者的差異. w5-3/24 - ANSI C: Part A Section 3 - 變數賦值與表達式 | Python3: Ch3 Program Structure, 了解 Python 程式架構 w6-3/31 (放假) w7-4/7 - 課程內容回顧與練習, 簡單介紹能在瀏覽器中執行的 Brython w8-4/14 - ANSI C: Part A Section 4, 5, 6 | Python3: Ch4 - 6, 分組整理出一份漂亮的計算機程式初學者教材?如何整理?如何呈現?從 tiny2017_50MB 進展到 tiny2017_1GB . w9-4/21 (期中考週) - 課程回顧與期中簡報 w10-4/28 ANSI C： Part A Section 1-6 再回顧 | Python3: Ch 1-6, 從 C、Python3 到 Brython, 導入 mini2017 之後, 帶出 Github 與 github pages, 我們學到什麼? w11-5/5 檢討分組期中報告與期中簡報, 我們學計算機程式的初衷為了什麼? 利用 Leo Editor、Pelican Blog、Reveal.js 與 Ethercalc 替換 MS Words、PowerPoint 與 Excel? w12-5/12 - 是的, 我們確實隱瞞了許多複雜的細節, 了解如何利用 Tiny C compiler 編譯自己, 了解如何將 C 程式, 以 Tiny C 編譯為動態程式庫, 然後從 Python3 程式中進行呼叫. w13-5/19 - 分組練習, 準備期末專題報告與簡報 w14-5/26 - 分組練習, 準備期末專題報告與簡報 w15-6/2 - 分組練習, 準備期末專題報告與簡報 w16-6/9 - 分組練習, 準備期末專題報告與簡報 w17-6/16 - 分組練習, 準備期末專題報告與簡報 w18-6/23 (期末考週), 分組期末簡報 參考書: Programming for Engineers - A Foundational Approach to Learning C and Matlab Beginning C Beginning C for Arduino C Quick Syntax Reference Python Recipes Handbook Programming with Python","tags":"Course","url":"./2017spring-ve-cp.html","title":"2017Spring 車輛工程系計算機程式"}]};