var Links = {
  setColor : function(color){
    // var link = document.querySelectorAll('a');
    // var i = 0;
    // while(i<link.length){
    //   link[i].style.color='powderblue';
    //   i = i + 1;
    // }
    $('a').css('color', color);  //라이브러리 jquery로 위의 코드 대체
  }
}
var Body = {
  setColor : function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color)
  },
  setBackgroundColor : function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  var link = document.querySelectorAll('a');
  i = 0;
  if(self.value ==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value ='day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value ='night';
    Links.setColor('blue');
  }
}
