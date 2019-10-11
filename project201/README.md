# project201
driver : bayan 
nav : omar

'use strict';
var user = prompt(" what is your name ? ")
alert("Hallo " + user)
var counter = 0;
function q1(name) {
    var questions = [
        ["Do you know what my name is?",
            " Good ",
            " Right , Actually my name is omar",
        ],
        [
            'do you knew where I\'m from ?',
            'that\'s great',
            'no problem',],
        ['do you knew what\'s my favorite color?',
            'Amazing !',
            'Ooh ! you must knew !',
        ],
        ['do you know what is my studies ?',
            'good',
            'Iam Industrial Engineering',
        ],
        ['do knew where was my last job ?',
            'great you got it ! ',
            'I worked in Ministry Of Municipals Affairs '
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
q1();
function q2(money) {
    for (var sum = 0; sum < 4; sum++) {
        var money = prompt(" how much i have money right now? ! ")
        if (money == 15) {
            alert("Yes exactly!");
            counter = counter + 1;
            console.log(money);
            break;
        } else if (money > 15) {
            alert(" not all time");
            console.log(money);
        } else if (money < 15) {
            alert(" too low ");
            console.log(money);
        }
    }
    alert('Actully i have more and more O_o')
    return (money);
}
q2();
function q3(TV) {
    var Show = ['God father ', 'beaky blinders', 'let us talk ', 'The town', 'dead wood'];
    for (var times = 0; times < 4; times++) {
        var TV = prompt("I like many tv show and movies ,guess what is it !");
        switch (TV) {
            case Show[0]:
            case Show[1]:
            case Show[2]:
            case Show[3]:
            case Show[4]:

                alert(" You\'re right i like God father ' , 'beaky blinders' ,'let us talk ' ,'The town' ,'dead wood ");
                counter = counter + 1;
                console.log(TV);
                times = 4;
                break;
            default:
                alert("you have another chance just tyr ")
                console.log(TV);
                break;
        }
    }
    return (TV);
}
q3();
alert(" Your marks : " + counter);
alert("Thanks to be here " + user);


