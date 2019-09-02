function draw(){
  for(i=0;i<60;i++){
    D = (i<10) ? '0'+i : i;
    $('#s').append('<li data-item='+D+'>'+D+'</li>');
  }
  for(i=0;i<60;i++){
     D = (i<10) ? '0'+i : i;
    $('#m').append('<li data-item='+D+'>'+D+'</li>');
  }
  for(i=0;i<24;i++){
     D = (i<10) ? '0'+i : i;
    $('#h').append('<li data-item='+D+'>'+D+'</li>');
  }
}
function place(){
  hdeg = 15;
  msdeg = 6;
  $('#s li').each(function(index){
    $(this).css({transform: 'rotateZ('+msdeg * index +'deg) translateX('+ parseInt(200) +'px)'});
  });
  $('#m li').each(function(index){
    $(this).css({transform: 'rotateZ('+msdeg * index +'deg) translateX('+ parseInt(170) +'px)'});
  });
  $('#h li').each(function(index){
    $(this).css({transform: 'rotateZ('+hdeg * index +'deg) translateX('+ parseInt(140) +'px)'});
  });
}
//TIMER
function sec(ts){
  TS = ts % 60;
  if(TS == 0){    
    d = new Date();
    min(d.getMinutes());
  };
  deg = 360/60 * ts;
  $('#s li').removeClass('active');
  $('#s li').eq(TS).addClass('active');
  $('#s').css({transform: 'rotateZ(-'+deg+'deg)'});
  ts++
  setTimeout(function(){sec(ts)},TIME*1000);
}
function min(tm){
  TM = tm % 60;
  if(tm == 0){
    d = new Date();
    hour(d.getHours())
  } ;
  deg = 360/60 * tm;
  $('#m li').removeClass('active');
  $('#m li').eq(TM).addClass('active');
  $('#m').css({transform: 'rotateZ(-'+deg+'deg)'});
  tm++;
  // setTimeout(function(){min(tm)}, TIME * 60000);
}
function hour(th){
  TH = th % 24;
  deg = 360/24 * th;
  $('#h li').removeClass('active');
  $('#h li').eq(TH).addClass('active');
  $('#h').css({transform: 'rotateZ(-'+deg+'deg)'});
  th++;
  // setTimeout(function(){hour(th)}, TIME * 3600000);
}
//CLOCK
function clock(){
  d = new Date();
  H = d.getHours();
  M = d.getMinutes();
  S = d.getSeconds();
  hour(H,0);
  min(M,0);
  sec(S,0);
  // setTimeout(function(){clock();},1000);
}

$(document).ready(function(){
  draw();
  place();
  TIME = 1;
  //TIMER
  /*
  TIME = 1;
  sec(0,1);
  */
  //CLOCK
  clock();
  //LIGHT
  $("h1").click(function(){
    $(this).toggleClass('off');
  });
});