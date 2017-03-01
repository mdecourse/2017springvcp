import requests
from bs4 import BeautifulSoup
data = []
url="http://www.tse.com.tw/ch/trading/exchange/STOCK_DAY_AVG/STOCK_DAY_AVGMAIN.php"
qdict = {'query_year' : '2017',
    'query_month' : '2',
    'CO_ID' : '2330',
    'query-button' : '查詢'}
res = requests.post(url, data=qdict)
res.encoding = 'utf-8'
soup = BeautifulSoup(res.text, "html.parser")
# 假如只是要取得原查詢網頁中的表格
for table in soup.select('table'):
    print(table)
# 以下則為更通用的資料查詢
# 請參考: http://stackoverflow.com/questions/23377533/python-beautifulsoup-parsing-table
# soup 為查詢取得之 html 資料
#print(soup)
# 若頁面中有多 table 時, 要取特定 table 資料時, 以 attrs 界定
# table = soup.find('table', attrs={'class':'certainTable'})
# 因為查詢取回的資料中只有一個 table
table = soup.find('table')
table_body = table.find('tbody')
rows = table_body.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    # 去除空白資料
    data.append([ele for ele in cols if ele]) 
print(data)
# 之後可以使用資料庫儲存 data 資料, 以增加資料的可用性
