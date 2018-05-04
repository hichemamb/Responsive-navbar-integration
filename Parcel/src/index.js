import 'flexboxgrid';
import './style/style.scss';


var barMenu = document.querySelector('.Header-barMenu');
var cross = document.querySelector('.Header-modalCross');
var modal = document.querySelector('.Header-modal');


barMenu.addEventListener('click',function(){
  modal.style.display='block';
  modal.style.animationName='slideNav';
});


cross.addEventListener('click',function(){


  modal.style.animationName='slideNav2';
  setTimeout(function(){ modal.style.display='none';}, 1000);


});
