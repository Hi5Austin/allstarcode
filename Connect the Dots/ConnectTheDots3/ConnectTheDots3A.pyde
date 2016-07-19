#Austin Carvey
#Connect the Dots
#Iteration 3A 
def setup():
    size(400,400)
    background(255,255,255)

def draw():
    ellipse(200,200,1,1)

def mouseClicked():
    ellipse(mouseX,mouseY,1,1)
    originX = 200
    originY = 200
    line(mouseX,mouseY,originX,originY)