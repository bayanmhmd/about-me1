  var mark = 0;
var name = prompt('what is your name?');
name =name.toLowerCase();
     console.log("name" ,name);
alert('Welcome  '    +      name);
        
var answer = prompt('Do i love mansaf?');
 answer =answer.toLowerCase();
console.log("Hello world!");
      if(answer == 'yes'){
          alert('I am sorry , i dont like it ');
          mark = mark +1;
    }    
    else if(answer == 'no'){
      alert('You right');
    }       else{
      alert(' i love healthy food');
    }
var ans = prompt('Do i read books?');
  ans =ans.toLowerCase();
console.log("ans",ans);
if(ans == 'yes'){
  alert('Great , i do');
  mark =mark +1;

   
}    
else if(ans == 'no'){
  alert('I like to keep have a knowladge ');
}       else{
  alert('keep reading like me');
    }
var answ = prompt('Do i love sports and walking?');
 answ =answ.toLowerCase();
console.log("answ",answ);
if(answ == 'yes'){
 alert('Yes, but  i am fat *_* , any way my favourite its a basketball ');
 mark = mark+1;
}    
else if(answ == 'no'){
  alert('oooo i dont want to  be fat  - __ -');
}       else{
  alert('i like walk');

}
var an= prompt('Do i like romantic movies?');
 an =an.toLowerCase();
 console.log("an",an);
if(an == 'yes'){
  alert('i am sorry , i dont like it ');
  mark = mark +1;
}    
else if(an == 'no'){
  alert('You right, i like horror and action movies');
}       else{
  alert('i like horror and action movies');
}
var a =prompt('Do you think i want to live in paris?');
  a =a.toLowerCase();
console.log("a",a);
if(a == 'yes'){
  alert('i wish but no money ');
  mark=mark +1;
}    
else if(a == 'no'){
  alert('You right');
}       else{
  alert(' i would like to live in USA');
}

////////////////////// 6 question /////////////////
for (i=0 ; i<4 ;i++ ){
  var pray = prompt (" guess how many time i pray ?");
  if (pray>5 ){
     alert ("too high");
  } else if (pray<5){
     alert ("too low");
  }else if (pray==5){
     alert ("correct answer ")
     mark=mark +1
     break;
  }
  if (i==3){
     alert ("I pray 5 times daily");
  }
}





// /////////////////////////////////////////// 7 questions /////////////////////

var  child =  ['one', 'two', 'three', 'four','five','six']
 var childhood= prompt('How many child i want to have in future?  Use letters');



for(var i = 0; i < child.length; i++)
{
   switch(childhood) 
   {
    case  'one':
    case  'two':
    case   'three': 
    case  'four':
    case   'five':
    case  'six':
        alert('correct answer , keep guessing ');
         childhood= prompt('How many child i want to have in future?');
         mark= mark +1 ;       
      break;

    default:

             childhood= prompt('How many child i want to have in future?');
             alert('Your answer wrong ,try again ');

             break;

   }

   alert( 'mark' +mark);
   }
