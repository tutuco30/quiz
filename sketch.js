var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.uptade(1)
    //chame o método de atualização que está dentro da classe quiz (questionário)
  }
  if(gameState === 1){
    clear();
    quiz.play()
    //chame o método play que está dentro da classe quiz (questionário)
  }
}
