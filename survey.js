const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  answers.push(answer); //0
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);//1
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);//2
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        answers.push(answer);//3
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers.push(answer);//4
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers.push(answer);//5
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answers.push(answer);//6

              console.log(` \n ${answers[0]} likes listening to ${answers[2]} while ${answers[1]} and devouring ${answers[4]}, for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});