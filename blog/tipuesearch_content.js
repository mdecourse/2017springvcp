var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2017Spring 車輛工程系計算機程式 課程倉儲: http://github.com/mdecourse/2017springvcp 課程投影片: http://mdecourse.github.io/2017springvcp 課程網誌: http://mdecourse.github.io/2017springvcp/blog","tags":"misc"},{"url":"./w8-program-and-version-control.html","title":"W8 分組期中報告程式編寫與管理","text":"本週將分別以 C 及 Python 編寫 8 個基本的程式應用. 接著利用 各組的 Fossil SCM 倉儲進行管理. 程式一: 輸入圓半徑, 計算圓面積與圓周長 以 C 編寫: // 程式 midterm_ex1.c // 引入 stdio 標準輸出入標頭檔案 #include // 定義主函式 int main() { // 宣告變數 int rad; float PI = 3.14, area, ci; // 格式化列印出提示字串後, 取使用者的半徑輸入 printf(\"\\nEnter radius of circle: \"); scanf(\"%d\", &rad;); // 根據使用者的半徑輸入, 計算圓面積 area = PI * rad * rad; printf(\"\\nArea of circle : %f \", area); // 計算圓周長度 ci = 2 * PI * rad; printf(\"\\nCircumference : %f \", ci); // 配合主函式的整數回傳資料型別, 傳回整數 return (0); } 以 Python3 編寫: # 程式 midterm_ex1.py import math radius = float(input(\"請輸入圓半徑:\") print(\"圓面積為:\", math.pi*radius*radius) print(\"圓周長為:\", 2*math.pi.radius) 接著在 SciTE 編輯器中執行無誤之後, 準備將上述兩個程式提交推送到倉儲. 假如近端沒有倉儲檔案 以 clone 複製倉儲檔案 fossil clone https://account@server_ip_or_domain_name cloned.fossil fossil 要求輸入 account 對應的密碼 將遠端自己擁有管理權限的 Fossil Server clone 到近端存為 cloned.fossil 檔案之後, 接著就是將此倉儲資料庫檔案在工作目錄中開啟, 因此在對應目錄下以 mkdir wd 建立 working directory 後, 以 cd wd 進入工作目錄, 然後下 fossil open 將此倉儲檔案的內容打開: 以 open 開啟倉儲檔案 fossil open ./../cloned.fossil 之所以在 cloned.fossil 加入 ./../ 是因為這個先前複製下來的倉儲檔案位於目前所在目錄 wd 的上一個目錄中, 因此必須要指定是開啟位於上一個目錄中的 cloned.fossil, 並將此倉儲內容在 wd 目錄中打開. 完成倉儲檔案在工作目錄的開啟之後, 假如是在 Windows 操作系統環境中, 該工作目錄中會有一個 FOSSIL 檔案, 而若在 Ubuntu 操作系統環境中, 則會產生一個 .fslckout 檔案, 且 FOSSIL 或 .fslckout 檔案為 SQLite 格式的資料庫檔案, 用來儲存 Fossil SCM 系統的各式改版註記資料. 在工作目錄中進行改版 在工作目錄中所進行的改版, 以文字檔案為主, 但也可以放入其他二位元檔案, 只是 Fossil SCM 中的二位元檔案無法像文字檔一樣, 在每次改版後, 明確列出各次改版內容的差異. 以 commit 指令進行提交 接著再進行改版後, 執行 fossil commit -m \"改版註記訊息\", 註記每次改版內容的字串, 主要用來簡要說明各次改版的內容, 之後使用者可以根據此提交註記訊息來辨識各版次的改版階段, 也能使用 checkout 指令, 將倉儲檔案回復到先前的特定版次狀態. 最後, 因為前面採用特定用戶身份進行 fossil clone, 因此 fossil 會以內建的 autosync 設定為 on 的情況, 自動執行倉儲改版內容的推送. 基本算術題目 Calculate Area and Circumference of Circle (計算圓面積與圓周長) Calculate Area of Scalene Triangle (計算不等邊三角形面積) Calculate Area of Equilatral Triangle (計算正三角形面積) Calculate Area of Right angle Triangle (計算直角三角形面積) Calculate Area of Rectangle (計算長方形面積) 期中自評表 學生自評部份 (80%) + 各組 Fossil SCM 上的佐證紀錄 (20%) 每週都準時上下課 (20 分) 上面 5 個題目, 寫出對應的 C 與 Python 程式 (每一題 6 分) 請各組員根據上述自評表, 在各組的 Fossil SCM 倉儲中完成期中報告與自評分數 線上 C 與 Python3 程式執行 C 程式： https://github.com/dadadel/codelauncher (在 Ubuntu 使用 gcc, 在 Windows 必須改為 Tiny C compiler) Python3 程式: 網際 Python3 執行環境","tags":"Course"},{"url":"./fossil-scm-version-control.html","title":"W5 利用 Fossil SCM 對 C 與 Python3 程式進行版次管理","text":"本週開始將利用 Fossil SCM 伺服器管理各組所寫的 C 與 Python3 程式. 課程中將使用 C 程式設計語言基礎 研習 ANSI C 程式, 並採用 Lean Python 研習 Python3 程式, 透過 http://www.c4learn.com/c-programs/ 中的範例進行練習. 首先, 從課本中找出, 以 C 程式, 利用 for 迴圈與格式化列印所完成的 99 乘法計算程式, 存為 99.c /* ==================== 99 multiplication table ==================== */ #include int main() { int x, y; for( x = 1; x <= 9; x++ ) { for( y = 1; y <= 9; y++ ) { printf(\"%d\", x*y ); } printf(\"\\n\"); } return 0; } 接下來以 Python3 編寫能夠執行相同功能的程式: for i in range(1, 10): for j in range(1, 10): print(i*j, end=\"\") print() 同時找出先前所寫的 hello.c 與 hello.py: hello.c: /* ==================== Say Hello World!. ==================== */ #include void main() { /* 印出 Hello */ printf(\"Hello World!\"); } hello.py: print(\"hello world\") 接下來我們將要先利用各學員近端的 Fossil SCM Server 練習如何對上述4個檔案進行版次管理: Fossil SCM autosync on 改版 fossil clone https://username@192.168.1.68 vcp.fossil 輸入與 username 對應的密碼. 在工作目錄中開啟倉儲檔案. fossil open vcp.fossil 在倉儲對應的工作目錄中進行改版. 納入所有的改版內容 fossil add . 提交, 並讓 Fossil SCM 自動完成推送 fossil commit -m \"message\" Fossil SCM autosync off 改版 fossil clone https://192.168.1.68 vcp.fossil 輸入與 username 對應的密碼. 在工作目錄中開啟倉儲檔案. fossil open vcp.fossil 在倉儲對應的工作目錄中進行改版. 納入所有的改版內容 fossil add . 利用 fossil remote-url off 切斷內建的帳號綁定 提交, 並以手動完成推送 fossil commit -m \"message\" 手動推送 fossil push https://username@192.168.1.68 輸入與 username 對應的密碼後完成推送, 並回應是否要將推送權限資料儲存在近端. 其他說明 假設當使用者啟動近端隨身碟中的 start.bat 時, Fossil SCM Server 在 https://192.168.1.68 中啟動 vcp.fossil 倉儲, 接下來則要利用: fossil clone https://yen@192.168.1.68 vcp.fossil 將 URL 中的倉儲克隆到近端的 vcp.fossil 倉儲檔中. 接著則要在近端 vcp.fossil 所在目錄下, 建立一個名稱為 wd 的工作目錄. 以 cd wd 進入工作目錄之後, 可以利用 fossil open ./../vcp.fossil 將倉儲解開. 因為當使用者在不指定用戶的情況下進行 fossil clone, Fossil SCM 會以內定的 autosync 用戶作為指定使用者, 同時會在完成克隆後顯示在命令列中. 接下來, 使用者將上述兩個 .c 與 兩個 .py 程式, 從原本的儲存位置, 複製到 wd 工作目錄中. 意即原本 vcp.fossil 倉儲中並沒有任何納管的資料內容, 透過操作系統的檔案複製, 將四個程式檔案放入工作目錄後, 必須利用 fossil add . 納入所有的改版內容. 接下來則要進行倉儲改版提交與推送的流程. 所謂的改版提交, 表示要在倉儲資料庫中對改版內容進行\"註記\", 也就是改版標記, 並且輸入對應的提交訊息, 以便讓協同者, 可以透過提交註記, 分辨每一次的改版大要. 由於 Fossil SCM 的設定中, 內建 autosync 為 on, 也就是改版的提交會自動與推送同步進行, 假如接下來, 使用者採用 fossil clone 時系統內建的使用者, 則只要完成改版提交, Fossil 會自動進行推送的動作. 但是, 假如使用者要使用其他俱備提交推送權限的帳號執行後續的動作, 則需要利用: fossil remote-url off 抹除 autosync 為 on 所綁定的使用者帳號, 但是提交之後 ,必須手動進行推送. Fossil SCM 提交: fossil commit -m \"add four demo program files\" Fossil SCM 推送 fossil push https://username@192.168.1.68 接著輸入與 username 對應的密碼, 即可完成改版推送的流程. 完成之後的結果 https://mde2a1.kmol.info/dir?ci=tip","tags":"Course"},{"url":"./fossil-scm-server.html","title":"W3 啟動區網中的 Fossil SCM server","text":"利用 fossil.exe 可以建立倉儲檔案, 也可以配合 stunnel, 採用批次檔自動建立 stunnel.conf 的方式, 讓 Fossil SCM 伺服器能在區域網路中, 以 https 模式連接. 修改 start.bat 當使用者 下載 可攜程式系統後, 可以使用手動方式設定 stunnel/config/stunnel.conf 檔案, 順利使用 tmp/fossil_repo 目錄啟動 fossil server, 自第3週起, 我們則要使用批次檔的指令, 以自動的方式取得電腦連外 IP 位址, 並且自動設定 stunnel.conf, 自動以 chrome 連接到本機所啟動的 fossil SCM server. 修改後的 start.bat 如下, 所啟動的 fossil server 位於 y:\\tmp\\fossil_repo\\vcp.fossil 倉儲: REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; set path3=\"C:\\Program Files (x86)\\Google\\Chrome\\Application\" path=%path%;%path1%;%path2%;%path3% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\vcp.fossil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe REM set proxy REG IMPORT setup_proxy.reg REM 以 chrome 連線到 https://%NetworkIP%:443 REM chrome --proxy-server=\"140.130.17.17:3128\" --proxy-bypass-list=\"192.168.1.*;*.edu.tw\" https://%NetworkIP% chrome https://%NetworkIP% http://mde.tw https://mde2a1.kmol.info https://mde2a2.kmol.info https://vimeo.com/user24079973 http://mde.tw/2017springcd/blog/ http://mde.tw/2017springwcm/blog/ http://mde.tw/2017springvcp/blog/ http://service.mde.tw Exit setup_proxy.reg 設定 Windows proxy 組態檔案: Windows Registry Editor Version 5.00 [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings] \"MigrateProxy\"=dword:00000001 \"ProxyEnable\"=dword:00000001 \"ProxyHttp1.1\"=dword:00000000 \"ProxyServer\"=\"http://140.130.17.17:3128\" \"ProxyOverride\"=\"192.168.1.*;*.edu.tw\" disable_proxy.reg 去除 Windows proxy 設定組態檔案: Windows Registry Editor Version 5.00 [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings] \"ProxyEnable\"=dword:00000000 與上述設定對應的 stop.bat: @echo off set Disk=y REM 關閉 SciTE taskkill /IM SciTE.exe /F REM 關閉 python taskkill /IM python.exe /F REM 關閉 stunnel taskkill /IM stunnel.exe /F REM 關閉 fossil taskkill /IM fossil.exe /F REM 關閉 cmd 指令視窗 taskkill /IM cmd.exe /F REM disable proxy %Disk%: REG IMPORT disable_proxy.reg REM 清除 log 資料 path=%PATH%; REM del /Q /F V:\\tmp\\*.* REM 終止虛擬硬碟與目錄的對應 subst %Disk%: /D REM taskkill /IM mingw32 /F EXIT 建立 vcp.fossil 使用 fossil.exe 建立 y:\\tmp\\fossil_repo\\vcp.fossil 首先確定使用可攜系統啟動的 dos command, 進入 y:\\ cd tmp cd fossil_repo 進入 y:\\tmp\\fossil_repo 目錄後, 以 fossil init 建立 vcp.fossil 倉儲檔案 fossil init vcp.fossil 建立 vcp.fossil, 系統會顯示管理者的帳號與密碼, 必須紀錄起來, 例如: user/1234567 之後再確認上述 start.bat 已經新增 chrome.exe 的執行目錄為 path3, 並納入 path 指令中, 並且已經利用: start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\vcp.fossil 以 fossil server 指令啟動 vcp.fossil 以帳號密碼登入 fossil SCM server 當完成 vcp.fossil 建立, 且重新啟動 start.bat 之後, Chrome 會自動連接到本機的 fossil SCM server, 此時要確認連結至廣域網路的 proxy 設定, 已經將 192.168.1.* 內部網路區段設為例外, 不使用 proxy 連線. fossil SCM 管理 更換登入密碼: Admin - Users 更改網站名稱: Admin - Configuration 設定時區: Admin - Timeline - Use Universal Coordinated Time (UTC) 允許使用者註冊: Admin - Access - Allow users to register themselves 查詢 vcp.fossil 倉儲中的用戶帳號設定: fossil sql -R vcp.fossil \"select login, pw from user;\" fossil SCM 基本操作 假設 vcp.fossil 位於 y:\\tmp\\fossil_repo 目錄, 而希望利用 y:\\tmp\\fossil_wd 目錄作為 working directory. cd y:\\tmp\\fossil_wd 進入工作目錄 fossil open ./../fossil_repo/vcp.fossil 在工作目錄中開啟位於 fossil_repo 目錄下的 vcp.fossil 倉儲檔案 利用 SciTE 在 y:\\tmp\\fossil_wd 目錄中新增 for_printf1.c 檔案, 以 tools - go 確認可以執行後, 希望納入 vcp.fossil 倉儲中進行版次管理. fossil add . 表示要在隨後, 以 recursive 方式納入本目錄中所有的改版變更. 確定 for_printf1.c 改版完成後, 準備提交. fossil commit -m \"add for_printf1.c\" 利用 vcp.fossil 倉儲的網際介面檢查是否已經完成改版提交. 若要刪除 y:\\tmp\\fossil_wd 目錄中的 FOSSIL 目錄, 則使用: fossil close fossil push","tags":"Course"},{"url":"./web-based-python.html","title":"網際 Python3 程式環境","text":"利用 Brython 建立可以直接在瀏覽器中執行簡單 Python3 程式的環境. window.onload=function(){ brython(1); } from browser import document, html container1 = document['container1'] 利用伺服器執行 Python3 程式 Jupyterhub: https://8888.kmol.info:9443 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇\"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .py Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) for1.py temp1.py ver_and_kw.py","tags":"Course"},{"url":"./c-dll-and-python3.html","title":"C dll 程式庫與 Python3","text":"利用 Tiny C compiler 編譯 Windows 10 64 位元 dll 動態連結庫, 並由 Python 程式呼叫執行. 利用 Tiny C 編譯 Tiny C 從 http://download.savannah.gnu.org/releases/tinycc/ 下載 Win64 C 程式編譯器, 並 下載 Tiny C compiler 0.9.26 版程式原始碼. 利用下列批次檔案進行編譯. compileTCC.bat 檔案內容: echo Use TCC to compile TCC echo Set CC=tcc set CC=tcc set target=-DTCC_TARGET_PE -DTCC_TARGET_X86_64 set P=64 echo tools: tiny_impdef.exe, tiny_libmaker.exe %CC% %target% win32/tools/tiny_impdef.c -o tiny_impdef.exe %CC% %target% win32/tools/tiny_libmaker.c -o tiny_libmaker.exe echo Compile libtcc.dll if not exist libtcc\\nul mkdir libtcc %CC% %target% -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE libtcc.c -o libtcc.dll tiny_impdef libtcc.dll -o libtcc/libtcc.def echo Compile tc.exe %CC% %target% tcc.c -o tc.exe -ltcc -Llibtcc echo Compile libcc1.a %CC% %target% -c lib/libtcc1.c %CC% %target% -c win32/lib/crt1.c %CC% %target% -c win32/lib/wincrt1.c %CC% %target% -c win32/lib/dllcrt1.c %CC% %target% -c win32/lib/dllmain.c %CC% %target% -c win32/lib/chkstk.S %CC% %target% -c lib/alloca86_64.S tiny_libmaker lib/libtcc1.a libtcc1.o alloca86_64.o crt1.o wincrt1.o dllcrt1.o dllmain.o chkstk.o 編譯 dll 動態程式庫 首先, 建立一個 multiply.c 程式: #include <stdio.h> int multiply(int, int); __declspec(dllexport) int multiply(int num1, int num2) { return num1 * num2; } 利用下列指令, 將 multiply.c 編譯為動態連結庫 myltiply.dll tcc -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE multiply.c -o multiply.dll 接著利用下列 Python3 程式, 透過 ctypes 模組導入 multiply.dll, 並且執行動態連結程式庫中的 multiply() 函式. import ctypes lib = ctypes.CDLL('multiply.dll') result = lib.multiply(3, 2) print(result)","tags":"Course"},{"url":"./why-computer-programming.html","title":"為什麼要學習計算機程式?","text":"車輛工程系學習計算機程式做什麼? (電動汽車世代來臨) - 隨著現代汽車傳動控制的電子化、電機化、網路化與智能化, 計算機程式相關技術在汽車領域的應用將會愈來愈重要. (電腦輔助設計普及) - 現代汽車的協同設計研發大量採用 Computer Aided Design (CAD, 利用電腦實現設計的具像表達, 直接建構模擬系統或 API 延伸), Finite Element Analysis (利用電腦實現設計的強度與碰撞分析), Data Acquisition (數據擷取), and Numerical Analysis (數值分析). (虛擬與擴增實境整合) - 現代汽車行路對於網路化與數位化地圖與即時路況資料的依賴愈來愈多, 這些資料需要透過許多電腦程式的整合運行. Python 為解譯式、泛用型程式語言 Python 可以作為互動式計算機 Python 語法可以透過 Brython, 直接在瀏覽器中執行 Python 可以直接在 Jupyterlab 環境中執行 計算機程式抽象層級: Controller Area Network (CAN) https://github.com/hardbyte/python-can http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/how-google-self-driving-car-works (2011) (2013) (2013) (2013) (2014) (2015) (2016) (2017) (2017) http://blog.teamtreehouse.com/havent-started-programming-yet if computers are at all a part of your life, then learning to program is going to improve your life. Learning to program can make you more productive, efficient and effective. http://theconversation.com/why-everyone-should-have-to-learn-computer-programming-62328 數位化系統 (電腦) 無所不在, 希望高效且客製化運用這些系統, 就必須學習與電腦溝通 https://www.codementor.io/learn-programming/beginner-programming-language-job-salary-community http://cacm.acm.org/blogs/blog-cacm/176450-python-is-now-the-most-popular-introductory-teaching-language-at-top-u-s-universities/fulltext","tags":"Course"},{"url":"./2017spring-ve-cp.html","title":"2017Spring 車輛工程系計算機程式","text":"為了運行速度, 我們學 C; 為了開發效率, 我們學 Python, 想要同時得到運行速度與開發效率, 我們學習 C + Python! 更具體的說: 在 2017Spring 的計算機程式課程中, 我們學習簡單的 ANSI C 與 Python3. 2017 Spring 車輛工程系計算機程式 (五) 18:30-20:00上課日期: w1-2/24 - 請每人準備一個隨身碟, 下載 可攜程式系統 (50MB) (或從倉儲中 下載 ), 從校園網路 下載 Lean Python.pdf (7MB, 英文 100 頁), 下載 C 程式語言基礎.pdf (194 KB, 中文 94 頁) (或從倉儲中 下載 ), 下載 Programming in ANSI C.pdf (或從倉儲中 下載 ) (600KB, 英文 258 頁), 了解如何啟動系統, 了解如何關閉系統, 了解如何執行 C 程式, 了解如何執行 Python3 程式, 了解為何要學習 C 與 Python3 程式語言. W1影片 ShareX 簡介 w2-3/3 - ANSI C: Part A Section 1 - C 程式歷史與架構 | Python3: Ch1 Getting Started, 了解 Python 解譯器互動模式, 利用 dir() 列出物件屬性, 基本函式定義, 註解與程式碼縮排 w3-3/10 - ANSI C: Part A Section 2 - C 常數與變數 | Python3: Ch2 Python Objects, 了解 Python 物件型別與基本用法 w4-3/17 - 課程內容回顧與練習, 分別利用 C 與 Python3 寫一個華氏與攝氏溫度轉換程式, 並比較兩者的差異. w5-3/24 - ANSI C: Part A Section 3 - 變數賦值與表達式 | Python3: Ch3 Program Structure, 了解 Python 程式架構 w6-3/31 (放假) w7-4/7 - 課程內容回顧與練習, 簡單介紹能在瀏覽器中執行的 Brython w8-4/14 - ANSI C: Part A Section 4, 5, 6 | Python3: Ch4 - 6, 分組整理出一份漂亮的計算機程式初學者教材?如何整理?如何呈現?從 tiny2017_50MB 進展到 tiny2017_1GB . w9-4/21 (期中考週) - 課程回顧與期中簡報 w10-4/28 ANSI C： Part A Section 1-6 再回顧 | Python3: Ch 1-6, 從 C、Python3 到 Brython, 導入 mini2017 之後, 帶出 Github 與 github pages, 我們學到什麼? w11-5/5 檢討分組期中報告與期中簡報, 我們學計算機程式的初衷為了什麼? 利用 Leo Editor、Pelican Blog、Reveal.js 與 Ethercalc 替換 MS Words、PowerPoint 與 Excel? w12-5/12 - 是的, 我們確實隱瞞了許多複雜的細節, 了解如何利用 Tiny C compiler 編譯自己, 了解如何將 C 程式, 以 Tiny C 編譯為動態程式庫, 然後從 Python3 程式中進行呼叫. w13-5/19 - 分組練習, 準備期末專題報告與簡報 w14-5/26 - 分組練習, 準備期末專題報告與簡報 w15-6/2 - 分組練習, 準備期末專題報告與簡報 w16-6/9 - 分組練習, 準備期末專題報告與簡報 w17-6/16 - 分組練習, 準備期末專題報告與簡報 w18-6/23 (期末考週), 分組期末簡報 參考書: Programming for Engineers - A Foundational Approach to Learning C and Matlab Beginning C Beginning C for Arduino C Quick Syntax Reference Python Recipes Handbook Programming with Python","tags":"Course"}]};