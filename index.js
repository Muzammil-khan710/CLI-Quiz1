var readLineSync=require('readline-sync');
var chalk = require('chalk');
var username=readLineSync.question(chalk.green("Hey There!\nPlease enter your name: "));
console.log(chalk.cyanBright("Welcome "+username+" , Let's see how well you know me...\nEnter a/ b/ c  to answer and for each correct answer you will get a point."));
console.log(chalk.grey("__________________________________________"));
var score=0;


function play(question, answer){
  var userAnser=readLineSync.question(chalk.green(question));
   if(userAnser.toUpperCase()==answer.toUpperCase()){
     console.log(chalk.yellowBright("You are right. You get a point"));
     score++;
   }
   else{
     console.log(chalk.redBright.bold("You are wrong!"));
   }
   console.log(chalk.bgBlack("Your score = "+score));
   console.log(chalk.grey("________________"));

}

var questions=[ {
  question:"Where do I live? \na. Gwalior \nb. Agra \nc. Delhi \n",
  answer:"a",
},{
  question:"What i love to eat? \na. Pizza \nb. Burger \nc. Pasta \n",
  answer:"a",
},{
  question:"Who is my favourite footballer? \na. Neymar \nb. Messi \nc. Ronaldo\n",
  answer:"b",
},{
  question:"Which is my fav movie? \na. Avengers \nb. Mission Impossibe \nc. Inception\n",
  answer:"b",
},{
  question:"Where do I study? \na. Science College \nb. MLB College \nc. Jiwaji University\n",
  answer:"a",
},{
  question:"Which is my favourite web_series? \na. Friends \nb. Lucifer \nc. Money Heist\n",
  answer:"c"
}
];


for(var i=0;i<questions.length;i++){
  var currques=questions[i];
  play(currques.question,currques.answer);
}

if(score>4) {
console.log(chalk.hex('#DEADED')("Congratulations you have come this far !! You are surely my Best Friend ;)"))
}
else  {
  console.log(chalk.yellowBright("Sorry you don't know me well :("))
}