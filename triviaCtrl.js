app.controller('triviaCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
        $scope.myScore = 0;

        $scope.questions = [
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What does CPU stand for?",
                "correct_answer": "Central Processing Unit",
                "incorrect_answers": ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
            }

        ];
        $scope.grabJson = function() {
                    $http.get('https://opentdb.com/api.php?amount=30&category=18&difficulty=medium&type=multiple').then(function(data) {
                         myQuestion = (data.data.results["0"].question);
                         console.log(myQuestion);
                         rightAnswer = (data.data.results["0"].correct_answer);
                        //  wrongAnswer = (data.data.results["0"].incorrect_answers[0,1,2]);
                         document.querySelector('.results').innerHTML = myQuestion;
                         document.querySelector('.right').innerHTML = rightAnswer;


                        //
                        // var output = document.getElementById('output');
                        // output.innerHTML = data.data.results["0"].question;
                    })
    }
}
]);
