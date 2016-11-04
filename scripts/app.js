// create new angular module, pass an empty array as the argument
// without the [], angular thinks we are trying to call an existing
// module instead of creating one:
angular.module('todoListApp', [])
.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello from the mainCtrl!");
    };
});