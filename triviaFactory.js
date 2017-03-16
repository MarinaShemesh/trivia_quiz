app.factory('triviaFactory', function($http, $timeout) {

	var myScore = [0];
    var temp = [0];
    var quests=[];
    var answers = [];
    var wrong = new Audio('http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3');

    var grabJson = function() {
        $http.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
            .then(function(response) {
                quests.push(response.data.results);
                answers.push(quests[0][temp].correct_answer);
                for (var i = 0; i < quests[0][temp].incorrect_answers.length; i++) {
                	answers.push(quests[0][temp].incorrect_answers[i]);
                };
                answers.sort(function(a, b){return 0.5 - Math.random()});
            }, function (err) {
                   console.error(err)
                });
    };

    var getQuestions = function () {
    	answers.length = 0;
        grabJson();
    };

    var getQuestions2 = function () {
        answers.length = 0;
        myScore[0] = 0;
        temp[0]=0;
        grabJson();
    };

    var jump = function (h){
	    var top = document.getElementById(h).offsetTop;
	    window.scrollTo(0, top);
	};

    var answered = function (slct) {
        if (slct == [quests[0][temp].correct_answer]){
            myScore[0]++
        } else {
			wrong.play();
        };
        

        if (temp < quests[0].length -1){
            temp[0] ++;
            answers.length = 0;
            answers.push(quests[0][temp].correct_answer);

            for (var i = 0; i < quests[0][temp].incorrect_answers.length; i++) {
                answers.push(quests[0][temp].incorrect_answers[i]);
            };

            answers.sort(function(a, b){return 0.5 - Math.random()});
            
        }else {
			jump('one');
            };
        };

    var triviaObj = {
    	answered: answered,
    	getQuestions: getQuestions,
        getQuestions2: getQuestions2,
    	myScore: myScore,
    	temp: temp,
    	quests: quests,
    	answers: answers
    }
    return triviaObj;
    });
