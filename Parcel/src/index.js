import 'flexboxgrid';
import './style/style.scss';


var carre = document.querySelector('.cross');
var carre2 = document.querySelector('.modalCross');
var modal = document.querySelector('.modal');


carre.addEventListener('click',function(){
  modal.style.display='block';
  modal.style.animationName='slideNav';
});


carre2.addEventListener('click',function(){


  modal.style.animationName='slideNav2';
  setTimeout(function(){ modal.style.display='none';}, 1000);


});
