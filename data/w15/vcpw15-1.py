# vcpw15-1.py
import pygame, sys
from pygame.locals import *
# 起始 pygame
pygame.init()
# 設定執行視窗大小
DISPLAYSURF = pygame.display.set_mode((400, 300))
# 設定執行視窗標題
pygame.display.set_caption('Hello world')
# 進入永久執行迴圈
while True:
    # 等待取使用者的事件輸入
    for event in pygame.event.get():
        # 使用者要求退出 pygame
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    # 其餘狀況持續顯示畫面
    pygame.display.update()