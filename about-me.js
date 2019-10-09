var user = prompt(" what\'s your name ? ")
alert("Welcome " + user + " you will got fun !")
var counter = 0;
function QU1(name) {
  var questions = [
      ["Do you know what  is my favourit country ?",
          " Great ",
          " It's OK.. Actually  its USA",
      ],
      [
          "Now tell me do you know  how many book i read ?",
          " Great Job..",
          " ooh !! around 5000 book?",
      ],
      [
          "  do you know what my studies are?",
          "  Yes Great Job..",
          " hmmmm , its mathmatice ",
      ],
      [
          " do you know what my favourite  sport ?",
          " yes you are very good ",
          " oki ,, i love basketball ",
      ],
      [
          "Do you know how old I am?",
          " Great You are amazing ",
          " oki but why not? ",
      ]
  ]
  for (var i = 0; i < 5; i++) {
      var exactArray = questions[i];
      var promptQuestion = exactArray[0];
      var posetiveReply = exactArray[1];
      var negativeReply = exactArray[2];
      var defultReply = exactArray[3];
      var name = prompt(promptQuestion);
      promptQuestion = promptQuestion.toLowerCase();
      switch (name) {
          case "yes":
          case "y":
              alert(posetiveReply);
              counter = counter + 1;
              break;
          case "no":
          case "n":
              alert(negativeReply);
              break;
          default:
              alert(defultReply);
              break;
      }
  }
  return name;
}
QU1();
function QU2(dress) {
  for (var sum = 0; sum < 4; sum++) {
      var dress = prompt("Ok now tell me, how much dress i have?")
      if (dress == 20) {
          alert("Yes exactly!");
          counter = counter + 1;
          console.log(dress);
          break;
      } else if (dress > 20 ) {
          alert("mmm , i have another cloth *__*");
          console.log(dress);
      } else if (dress < 20) {
          alert(" It\'s more than");
          console.log(dress);
      }
  }
  alert('i have only 20 dress')
  return (dress);
}
QU2();
function QU3(World) {
  var cities = ['Amman','Istanbul','bursa','roma','karak','qudes','wc'];
  for (var times = 0; times < 6; times++) {
      var World = prompt("I love 7 cities can you till me like one it ?");
      switch (World) {
          case cities[0]:
          case cities[1]:
          case cities[2]:
          case cities[3]:
          case cities[4]:
          case cities[5]:
            case cities[6]:
              alert(" good job ! I i love these cities 'Amman','Istanbul','bursa','roma','karak','qudes','wc'  ");
              counter = counter + 1;
              console.log(World);
              times = 6;
              break;
          default:
              alert("that\'s not correct just try again ")
              console.log(World);
              break;
      }
  }
  return (World);
}
QU3();
alert(" You got this marks " + counter);
alert("Thanks and nice to be here " + user);