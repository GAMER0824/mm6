var apple
var mmImg
var score = 900
var i1, i2, i3, i4, i5, i6
var up1 = 0, up2 = 0, up3 = 0, up4 = 0, up5 = 0, up6 = 0
var backgroundImg
var wallleft
var wallright
var walltop
var flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false, flag6 = false
var increase
var woodImg



function preload() {
  mmImg = loadImage("mm.png")
  woodImg = loadImage("wood.png")
  backgroundImg = loadImage("kkk.jpg")
  i1Img = loadImage("cash.png")
  i2Img = loadImage("diamonds.png")
 
}

function setup() {
  createCanvas(1200, 800);

  mm = createSprite(200, 400, 50, 50);
  mm.addImage("mm", mmImg)
  mm.scale = 0.3

  cursor(HAND)
  

  wallleft = createSprite(345, 400, 20, 800)
  wallleft.addImage("wood",woodImg)
  wallleft.scale = 0.3

  wallright = createSprite(850, 400, 20, 800)
  wallright.addImage("wood",woodImg)
  wallright.scale = 0.3

  walltop = createSprite(800,27,50,850)
  walltop.addImage("wood",woodImg)
  walltop.rotation = -90
  walltop.scale = 0.9

  i1 = createSprite(1150, 100,80,80)
  i1.addImage("cash", i1Img)
  i1.scale = 0.2
  i1.visible = false

  i2 = createSprite(1150, 205,80,80)
  i2.addImage("diamonds", i2Img)
  i2.scale = 0.05
  i2.visible = false

  i3 = createSprite(1150, 310,80,80)
  i3.shapeColor = "white"
  i3.visible = false

  i4 = createSprite(1150, 415,80,80)
  i4.shapeColor = "white"
  i4.visible = false

  i5 = createSprite(1150, 520,80,80)
  i5.shapeColor = "white"
  i5.visible = false

  i6 = createSprite(1150, 625,80,80)
  i6.shapeColor = "white"
  i6.visible = false

  fill("white")
}

function draw() {
  background(backgroundImg);

 
 if(up1 === 51){
   console.log("up1 51")
   i1.remove()
   textSize(50)
   text("up1 is finish",width/2 -100,height/2)
 }
  if (flag1 === true) {
    if (frameCount % (70 - up1) === 0) {
      score = score + 1
    }
  }


  if (flag2 === true) {
    if (frameCount % (150 - up2) === 0) {
      score = score + 5
    }
  }


  if (flag3 === true) {
    if (frameCount % 220 === 0) {
      score = score + 10
    }
  }

  if (flag4 === true) {
    if (frameCount % 300 === 0) {
      score = score + 20
    }
  }

  if (flag5 === true) {
    if (frameCount % 450 === 0) {
      score = score + 35
    }
  }

  if (flag6 === true) {
    if (frameCount % 500 === 0) {
      score = score + 50
    }
  }

  if (score >= 10) {
    i1.visible = true
  }
  else {
    i1.visible = false
  }

  if (score >= 10) {
    i2.visible = true
  }
  else {
    i2.visible = false
  }

  if (score >= 7) {
    i3.visible = true
  }
  else {
    i3.visible = false
  }

  if (score >= 8) {
    i4.visible = true
  }
  else {
    i4.visible = false
  }

  if (score >= 12) {
    i5.visible = true
  }
  else {
    i5.visible = false
  }

  if (score >= 20) {
    i6.visible = true
  }
  else {
    i6.visible = false
  }



  if (mousePressedOver(i1) && i1.visible === true && score > 10) {
    i1.visible = false
    score -= 10
    flag1 = true
    if(up1 <= 50 )
    up1 = up1 + 1
    console.log("i1 pressed")
  }


  if (mousePressedOver(i2) && i2.visible === true && score > 10) {
    i2.visible = false
    score -= 10
    flag2 = true
    if(up2 <= 100)
    up2 = up2 + 1
  }

  if (mousePressedOver(i3) && i3.visible === true && score > 7) {
    i3.visible = false
    score -= 70
    flag3 = true
    up3 = up3 + 1
  }

  if (mousePressedOver(i4) && i4.visible === true && score > 8) {
    i4.visible = false
    score -= 80
    flag4 = true
    up4 = up4 + 1
  }

  if (mousePressedOver(i5) && i5.visible === true && score > 12) {
    i5.visible = false
    score -= 12
    flag5 = true
    up5 = up5 + 1
  }

  if (mousePressedOver(i6) && i6.visible === true && score > 20) {
    i6.visible = false
    score -= 20
    flag6 = true
    up6 = up6 + 1
  }


  drawSprites();

  fill("white")
  textSize(30)
  text(score + " M&M" , 110, 100)


   if(mouseX <= 1200 && mouseY <= 800){
  if(mouseIsOver(i1) && i1.visible){ 
    text("ttttttttttttttttttttttttttttttttttttttt",width/2 - 100,height/2)   
  }
 }
}

function mouseClicked() {
  if(mouseIsOver(mm))
    score++

}
