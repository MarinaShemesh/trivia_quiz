app.factory('triviaFactory', function($http, $timeout) {
	var myScore = [0];
    var temp = [0];
    var quests=[];
    var answers = [];
    var grabJson = function() {
        $http.get('https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple')
            .then(function(response) {
                quests.push(response.data.results);
                answers.push(quests[0][temp].correct_answer);
                for (var i = 0; i < quests[0][temp].incorrect_answers.length; i++) {
                	answers.push(quests[0][temp].incorrect_answers[i]);
                };
                console.log(quests[0][temp].question);
                console.log(answers);
            }, function (err) {
                   console.error(err)
                });
    };

    var getQuestions = function () {
    	answers.length = 0;
        grabJson();
    }



    var answered = function (slct) {
        if (slct == [quests[0][temp].correct_answer]){
            myScore[0]++
        } else {
            alert("wrong")
        }
        console.log(myScore)

        if (temp < quests[0].length -1){
            temp[0] ++;
            answers.length = 0;
            answers.push(quests[0][temp].correct_answer);
            for (var i = 0; i < quests[0][temp].incorrect_answers.length; i++) {
                answers.push(quests[0][temp].incorrect_answers[i]);
                };
            console.log(quests[0][temp].question);
            console.log(answers)


                // if selected is correct
                //      alert(Good Choice)
                //      myScore ++
                // else
                //      alert(Dead Wrong!!!!)
            }else {
                alert("That was the last question!")
            }
        }

    var triviaObj = {
    	answered: answered,
    	getQuestions: getQuestions,
    	myScore: myScore,
    	temp: temp,
    	quests: quests,
    	answers: answers
    }
    return triviaObj;
    });
