# 程式 midterm_ex2.py
import math
side1 = float(input("請輸入第一邊長:"))
side2 = float(input("請輸入第二邊長:"))
angle = float(input("請輸入兩邊長的夾角:"))
degree = math.pi/180.
area = (side1 * side2 * math.sin(angle*degree)) / 2;
print("三邊不等長三角形的面積為:", area)
