function isTouching(anyrect1,anyrect2){
    if (anyrect1.x - anyrect2.x < anyrect2.width/2 + anyrect1.width/2
      && anyrect2.x - anyrect1.x < anyrect2.width/2 + anyrect1.width/2
      && anyrect1.y - anyrect2.y < anyrect2.height/2 + anyrect1.height/2
      && anyrect2.y - anyrect1.y < anyrect2.height/2 + anyrect1.height/2) {
    return true;
  }
  else {
    return false;
  }
  }
  
  function bounceOff(anyrect1,anyrect2){
    if(anyrect1.x - anyrect2.x < anyrect1.width/2 + anyrect2.width/2 && anyrect2.x - anyrect1.x < anyrect1.width/2 + anyrect2.width/2){
      anyrect1.velocityX = anyrect1.velocityX * (-1);
      //movingrect.velocityY= movingrect.velocityY * (-1);
    }
  
    if(anyrect1.y - anyrect2.y <anyrect1.height/2 + anyrect2.height/2 && anyrect2.y - anyrect1.y < anyrect1.height/2 + anyrect2.height/2){
    //  movingrect.velocityX=movingrect.velocityX * (-1);
      anyrect1.velocityY= anyrect1.velocityY * (-1);
    }
  }