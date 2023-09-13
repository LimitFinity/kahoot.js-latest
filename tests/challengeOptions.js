var Kahoot = require("../index.js");
var client = new Kahoot({
  options: {
    ChallengeUseStreakBonus: true,
    ChallengeScore: 1111,
    ChallengeAlwaysCorrect: true
  }
});
//client.loggingMode = true;
const PIN = require("fs").readFileSync("PIN.json");
console.log("joining game...");
client.join("0" + parseInt(PIN), "ChallengeStreakTestFAIL6");
client.on("Joined", () => {
  console.log("joined the game. waiting for quiz to start");
});
client.on("QuizStart", quiz => {
  console.log("quiz has started. waiting for questions..");
  //console.log(quiz);
});
client.on("QuestionStart", question => {
  console.log(`question ${question.questionIndex} started. answering.`);
  // console.log(question);
  // find correct answer
  const choices = question.choices;
  let foo = [];
  for(let i in choices){
    if(choices[i].correct){
      if(question.type == "open_ended" || question.type == "word_cloud"){
        question.answer(choices[i].answer);
        return;
      }else if(question.type == "jumble"){
        question.answer([0,1,2,3]);
        return;
      }else if(question.type == "multiple_select_quiz"){
        foo.push(i);
        continue;
      }else{
        question.answer(i);
      }
      return;
    }
  }
  if(foo.length){
    question.answer(foo);
  }else{
    question.answer(0);
  }
});
client.on("QuestionReady",question=>{
  console.log("recieved question");
  //console.log(question);
});
client.on("QuestionEnd",q=>{
  console.log("question ended");
  //console.log(q);
});
client.on("QuizEnd", (o) => {
  console.log("the quiz has finished.");
  console.log(o);
});
client.on("Podium",t=>{
  console.log("podium");
  console.log(t);
});
client.on("Disconnect",(r)=>{
  console.log("diconnected: " + r);
});
