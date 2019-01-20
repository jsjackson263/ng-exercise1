(function() {

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope']; //protect code from minification
    function LunchCheckController($scope) {
      $scope.inputString = "";
      $scope.message = "";

      $scope.checkFoodConsumed = function() {
        //avoid splitting empty strings
        var foods = $scope.inputString;
        if (typeof foods != "undefined") {
          foods = $scope.inputString.split(',');
        } else {
          setMessage("Please enter data first");
          setMessageColor("red");
          setBoxColor("red");
        }

        var foodCount = foods.length;
        foods.forEach(function(item, index, array) {
          if (item == "" || item == " ") {
            foodCount--;
          }
        });

        // console.log("food count: " + foodCount);
        var newColor;
        if (foodCount > 3) {
          setMessage("Too much!");
          setMessageColor("orange");
          setBoxColor("orange");
        } else if(foodCount > 0 && foodCount <= 3) {
          setMessage("Enjoy!");
          setMessageColor("green");
          setBoxColor("green");
        } else {
          setMessage("Please enter data first");
          setMessageColor("red");
          setBoxColor("red");
        }
      }; //end of function 'checkFoodConsumed'

      function setMessage(message) {
        $scope.message = message;
      }

      function setMessageColor(color) {
        $scope.messageColor = {
          "color" : color
        };
      }

      function setBoxColor(color) {
        $scope.boxColor = {
          "border-color": color
        };
      }

  } //end of controller function

})();
