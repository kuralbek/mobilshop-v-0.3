
/* const y = document.getElementById('click1');
const z = document.getElementById('show1');
const x = document.getElementById('show2');

z.style.display = 'none';
x.style.display = 'none';
y.style.transition =  .5 + 'ease all'; */
/* y.addEventListener ('click', ()=>{
        console.log('ssss');
        y.style.transition = '0.5s ease all';
        if( (z.style.display == 'none') || (x.style.display == 'none') ){
            z.style.display = 'block';
            x.style.display = 'block';
        }else{
            z.style.display = 'none';
            x.style.display = 'none';
        }
});
 const kor = document.getElementById('check'); */
 const showone = document.getElementById('showOne');
 const showsecond = document.getElementById('showToSecond');
 const showthird = document.getElementById('showtothird');
//  form2.style.display = 'none';
/* showone.style.display = 'none';
showsecond.style.display = 'none';
showthird.style.display = 'none';
 */
 function kCklick(id){
     if(id==1){
          console.log(1); 
         showOneMobile();
         
     }else if(id == 2){
         console.log(2);
         showSecondMobile();
     }else if(id == 3){
         console.log(3);
         showThirdMobile()
     }
 }


 function showOneMobile(){
    
     if(showone.style.display == 'block'){
        showone.style.display = 'none';
     }else{
        showone.style.display = 'block';
     }
 }
 function showSecondMobile(){
    
    if(showsecond.style.display == 'block'){
       showsecond.style.display = 'none';
    }else{
       showsecond.style.display = 'block';
    }
}
function showThirdMobile(){
    
    if(showthird.style.display == 'block'){
       showthird.style.display = 'none';
    }else{
       showthird.style.display = 'block';
    }
}