var tipuesearch = {"pages":[{"text":"2017Spring 車輛工程系計算機程式 課程倉儲: http://github.com/mdecourse/2017springvcp 課程投影片: http://mdecourse.github.io/2017springvcp 課程網誌: http://mdecourse.github.io/2017springvcp/blog","title":"About","url":"./pages/about/","tags":"misc"},{"text":"有關本課程 window.onload=function(){ brython(1); } 車輛工程系能（該)做什麼? 車 + 人 + 環境 (主體與所使用工具一定只能在地面?) 汽車設計製造與維修 ( hybrid, electrical, traditional) 交通管理 監控與防盜 http://www.mxeduc.org.tw/ScienceAward/history/projectDoc/12th/production.htm https://www.zhihu.com/question/47440579 Automated Guided Vehicle Systems Vehicle Dynamics 雲監控與汽車防盜 from browser import document, html container1 = document['container1'] 利用伺服器執行 Python3 程式 Jupyterhub: https://8888.kmol.info:9443 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇\"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .py Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) for1.py temp1.py ver_and_kw.py","title":"2017Spring 車輛工程系計算機程式","url":"./2017spring-che-liang-gong-cheng-xi-ji-suan-ji-cheng-shi.html","tags":"Misc"}]};