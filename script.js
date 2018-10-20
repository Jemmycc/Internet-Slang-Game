//set up count donw timmer

document.getElementById('display').innerHTML =
    01 + ":" + 30;
startTimer();

function startTimer() {
    var presentTime = document.getElementById('display').innerHTML;
    var timeLeft = document.getElementById("time-left");
    var timeArray = presentTime.split(/[:]+/);
    var incompletedImg = document.getElementById("incompleted-img");
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));

    if (s == 59) { m = m - 1 }
    //if(m<0){alert('timer completed')}
    document.getElementById('display').innerHTML = m + ":" + s;

    if (isGameOver == true)
        return;

    if (m == 0 && s == 0) {
        timeLeft.textContent = "Time-up!";
        playAudio("ring-05");
        incompletedImg.className = "unhidden";
        return;
    }

    if (m == 1 && s == 0) {
        timeLeft.textContent = "1 minute left!";
        setTimeout(function () { timeLeft.textContent = "" }, 3000);
    }
    else if (m == 0 && s == 30) {
        timeLeft.textContent = "30 seconds left!";
        setTimeout(function () { timeLeft.textContent = "" }, 3000);
    }

    setTimeout(startTimer, 1000);
}


function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}



//show or hid the message and audio.
function unhideText() {
    var timeMessage = document.getElementById("time-left");
    timeMessage.className = "unhidden";
    playAudio(ring - 05);
}

function hideText() {
    var timeMessage = document.getElementById("time-left");
    timeMessage.className = "hidden";
}




//set up object for the multiple choices
function MultipleChoice(example, question, choice, correct) {
    this.example = example;
    this.question = question;
    this.choice = choice.slice();
    this.correct = correct;
    this.wasCorrect = false;

    this.checkAnswer = function (indx) {
        if (indx == this.correct) {
            this.wasCorrect = true;
            return true;
        }
        else {
            this.wasCorrect = false;
            return false;

        }
    }

    this.load = function () {
        document.getElementById("example").innerHTML = this.example;
        document.getElementById("question").innerHTML = this.question;
        document.getElementById("choice1").innerHTML = this.choice[0];
        document.getElementById("choice2").innerHTML = this.choice[1];
        document.getElementById("choice3").innerHTML = this.choice[2];
        document.getElementById("choice4").innerHTML = this.choice[3];
    }
}

var currentQuestion;
var currentIndx = -1;
var example = "";
var question = "";
var choice = [];
var correct = -1;
var questions = [];
var radAnswer = [];
var nCorrect = 0;
var inCorrect = 0;
var isGameOver = false;
var completedImg = document.getElementById("completed-img");


example = "Hey @FluentUEnglish!Can you DM me your kitchen’s pic ? Thx!";
question = "What does 'DM' mean? ";
choice[0] = "Sending a direct message to a person you follow.";
choice[1] = "Danger Mouse (TV series), a British animated television series.";
choice[2] = "Send me the file to my front door.";
choice[3] = "Dimensional modeling.";
correct = 0;

questions[0] = new MultipleChoice(example, question, choice, correct);

example = "I still don’t know what kind of bug I found in my sink. Bump!";
question = "What does 'Bump' mean? ";
choice[0] = "To encounter something that is an obstacle or hindrance.";
choice[1] = "Sudden damage.";
choice[2] = "To knock against something.";
choice[3] = "To move a post or thread to the top of the list.";
correct = 3;

questions[1] = new MultipleChoice(example, question, choice, correct);

example = "Even President Obama has done an AMA!";
question = "What does 'AMA' mean? ";
choice[0] = "American Medical Association.";
choice[1] = "Ask Me Anything.";
choice[2] = "Against Medical Advice.";
choice[3] = "Airplane meeting.";
correct = 1;

questions[2] = new MultipleChoice(example, question, choice, correct);

example = "Ignore him, he’s just trolling you.";
question = "What does 'trolling' mean?";
choice[0] = "Isolate you, like keeping you in a cave.";
choice[1] = "Trying to start disagreements or upset people.";
choice[2] = "Telling you that you look like a dwarf.";
choice[3] = "Thinking you are as cute as the movie 'Trolls'.";
correct = 1;

questions[3] = new MultipleChoice(example, question, choice, correct);

example = "When the pics of Grumpy Cat were shown, he immediately became a meme.";
question = "What does 'meme' mean?";
choice[0] = "A cultural item such as an image, video, or phrase, that is spread via the internet.";
choice[1] = "An idea, behavior, or usage that spreads from person to person within a culture.";
choice[2] = "A new icon that the crowd wants to follow.";
choice[3] = "The most memorable invention.";
correct = 0;

questions[4] = new MultipleChoice(example, question, choice, correct);

example = "A: I just realized the Apple logo looks like an apple!<br> B: …*Facepalm*";
question = "What does 'Facepalm' mean?";
choice[0] = "An anti-aging face cream.";
choice[1] = "Ugh, idiot.";
choice[2] = "Compare the size of face and palm.";
choice[3] = "Sure, agree!";
correct = 1;

questions[5] = new MultipleChoice(example, question, choice, correct);

example = "What just happened?! I can’t even.";
question = "What does he mean?";
choice[0] = "I am speechless.";
choice[1] = "I can’t contribute.";
choice[2] = "I can’t agree.";
choice[3] = "I am not able to be there soon.";
correct = 0;

questions[6] = new MultipleChoice(example, question, choice, correct);

example = "Currently, both players are upset, because both have lags.";
question = "What does 'lag' mean?";
choice[0] = "When an online game is slow.";
choice[1] = "They moved slow.";
choice[2] = "Learning the game very slowly.";
choice[3] = "Commiting a crime.";
correct = 0;

questions[7] = new MultipleChoice(example, question, choice, correct);

example = "IMHO, Cher is still the best singer.";
question = "What does 'IMHO' mean?";
choice[0] = "Image how.";
choice[1] = "In my honest offer.";
choice[2] = "In my happy objection.";
choice[3] = "In my humble opinion.";
correct = 3;

questions[8] = new MultipleChoice(example, question, choice, correct);

example = "It’s my thought. DAE?";
question = "What does 'DAE' mean?";
choice[0] = "Disagree anyone else?";
choice[1] = "Dial an exchange.";
choice[2] = "Does anyone else?";
choice[3] = "Damage already extends.";
correct = 2;

questions[9] = new MultipleChoice(example, question, choice, correct);

example = "TL;DR: This quiz is about Internet slang.";
question = "What does 'TL;DR' mean?";
choice[0] = "Tired; Driving.";
choice[1] = "Time to leave; don't rush";
choice[2] = "Too long ago; dpn't remember";
choice[3] = "Too Long; Didn't Read.";
correct = 3;

questions[10] = new MultipleChoice(example, question, choice, correct);

example = "A lot of people would kill to know what the 'secret formula' might be to go viral.";
question = "What does 'viral' mean?";
choice[0] = "Caused by a virus.";
choice[1] = "Becoming very popular by circulating quickly from person to person.";
choice[2] = "Getting sick.";
choice[3] = "The file should not be opened.";
correct = 1;

questions[11] = new MultipleChoice(example, question, choice, correct);

//load the questions.
playAudio("ring-03");
nextQuestion();


//load the question
function nextQuestion() {
    currentIndx++;
    document.getElementById("response").innerHTML = "";



    //reset the question number
    if (currentIndx < questions.length) {
        document.getElementById("question-number").innerHTML = (currentIndx + 1);
        currentQuestion = questions[currentIndx];
        currentQuestion.load();
    }
    else {
        isGameOver = true;
        completedImg.className = "unhidden";
        playAudio("ring-04");
    }
    //reset the radio button
    radAnswer = document.getElementsByName("radAnswer");
    for (var i = 0; i < radAnswer.length; i++) {
        radAnswer[i].checked = false;
    }
}

// find out which radio button was clicked.
function checkAnswer() {
    var indx = -1;
    var i;
    radAnswer = document.getElementsByName("radAnswer");
    for (i = 0; i < radAnswer.length && indx == -1; i++) {
        //see if this is the checked button
        if (radAnswer[i].checked == true) {
            indx = i;
        }
    }
    //check the selected one is matching the correct answer
    if (currentQuestion.checkAnswer(indx) == true) {
        //    if (indx === currentQuestion.correct) {
        setTimeout(function () { displayResponse(true) }, 300);
        playAudio("ring-01");
    }
    else {
        setTimeout(function () { displayResponse(false) }, 300);
        playAudio("ring-02");
    }
    //     setTimeout(function () { nextQuestion() }, 2500);
}

function displayResponse(isCorrect) {
    if (isCorrect === true) {
        document.getElementById("response").innerHTML = "<strong>You are awesome!</strong>";
        document.getElementById("correct").innerHTML = ++nCorrect;
    }
    else {
        document.getElementById("response").innerHTML = "<strong>WRONG!</strong> The correct answer is : " + currentQuestion.choice[currentQuestion.correct];
        document.getElementById("incorrect").innerHTML = ++inCorrect;
    }
}

function playAudio(elName) {
    var yourRing = document.getElementById(elName);
    yourRing.play();
}

function startQuiz() {
    window.location.href = "./quiz.html";
}
