app.controller('triviaCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
        $scope.myScore = 0;

        $scope.questions = [ ];
       
                $scope.grabJson = function() {
            $http.get('https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple').then(function(data) {
                 console.log(data.data.results["0"].question);
                 
                 console.log($scope.quests);
                 $scope.quests = data;
               })
      };

                        //
                        // var output = document.getElementById('output');
                        // output.innerHTML = data.data.results["0"].question;
                  
    }

]);
