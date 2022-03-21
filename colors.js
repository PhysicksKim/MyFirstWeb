var links = {
  SetColor:function (color){
    var targetHrefText = document.querySelectorAll('a');
    for (i=0; i<targetHrefText.length; i++){
      targetHrefText[i].style.color = color;
    }
  }
}

var jamieBody = {
  SetColor:function (color){
    document.querySelector('body').style.color = color;
  },
  SetBackColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self){
  var targetBodyStyle = document.querySelector('body').style;

  if(self.value === 'changeToNight'){
    jamieBody.SetBackColor('black');
    jamieBody.SetColor('white');
    self.value = 'changeToDay';
    links.SetColor('powderblue');
  }
  else {
    jamieBody.SetBackColor('white');
    jamieBody.SetColor('black');
    self.value = 'changeToNight';
    links.SetColor('blue');
  }
}
