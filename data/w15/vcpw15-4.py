# vcpw15-4.py
import pygame, sys
from pygame.locals import *

pygame.init()
DISPLAYSURF = pygame.display.set_mode((400, 300))
pygame.display.set_caption('Pygame 中文標題')

WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
BLUE = (0, 0, 128)

#fontObj = pygame.font.Font('freesansbold.ttf', 32)
fontObj = pygame.font.Font('fireflysung.ttf', 32)
textSurfaceObj = fontObj.render('視窗中的中文字元', True, GREEN, BLUE)
textRectObj = textSurfaceObj.get_rect()
textRectObj.center = (250, 150)

while True:
    DISPLAYSURF.fill(WHITE)
    DISPLAYSURF.blit(textSurfaceObj, textRectObj)
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    pygame.display.update()
    