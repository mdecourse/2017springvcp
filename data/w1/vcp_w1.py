import os
adata = open("vcp_hw1.txt", encoding="utf-8").read()
alist = adata.splitlines()
n = 0
row = 0
for stud_num in alist:
    row = row + 1
    blist = stud_num.split("\t")
    #print(blist)
    column = 0
    for i in range(len(blist)):
        column = column + 1
        #print(blist[i])
        if "學號:" in blist[i]:
            # 因為學號數字為該行以 : 分割後第 1 索引資料的 0-7  序號字串
            # 且 row 前兩列為行數與講台列, 真正座位從第三列開始, 因此 row-2
            print(blist[i].split(":")[1][:8], "(", row-2, ",", column, ")")
            n = n +1
    #n = n + 1
    #print(stud_num)
print("學生總數:", n)
#print(os.environ)
'''
40528418 ( 1 , 1 )
40528412 ( 1 , 2 )
40528422 ( 1 , 3 )
40528401 ( 1 , 4 )
40528419 ( 1 , 5 )
40528437 ( 1 , 6 )
40528435 ( 2 , 2 )
40528427 ( 2 , 5 )
40528426 ( 2 , 6 )
40528438 ( 3 , 5 )
40528428 ( 3 , 6 )
40528441 ( 3 , 7 )
40528420 ( 3 , 8 )
40528424 ( 4 , 2 )
40528415 ( 4 , 3 )
40528403 ( 4 , 4 )
40528423 ( 5 , 2 )
40528417 ( 5 , 4 )
40528413 ( 5 , 6 )
'''
