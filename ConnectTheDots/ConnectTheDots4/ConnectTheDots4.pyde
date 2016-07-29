#Austin Carvey
#Connect the Dots
#Iteration 4
numberOfDots = 0
lastDotX = 0
lastDotY = 0

def setup():
    size(400,400)
    background(255,255,255)

#you need a draw fuction so i just added it with an ellipse
def draw():
    fill(0,0,0)
    ellipse(1,1,1,1)

def mouseClicked():
    global numberOfDots
    global lastDotX
    global lastDotY
    fill(0,0,0)
    ellipse(mouseX,mouseY,1,1)
    if numberOfDots > 0:
        line(mouseX,mouseY,lastDotX,lastDotY)
    numberOfDots = numberOfDots + 1
    lastDotX = mouseX
    lastDotY = mouseY