
angular.module('todoListApp', []).controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello from the mainCtrl!");
    };
});

``
// to create an angular module, pass an empty array as the argument
// without the [], angular thinks we are trying to call an existing module instead of creating one

// .controller() is how we attach logic to our module
// a controller function is essentially a property of our module