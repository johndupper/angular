angular.module('todoListApp', [])

    .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello from the mainCtrl!");
    };
})
    .controller('coolCtrl', function($scope) {
    $scope.whoAmI = function() {
        console.log("Hello from the coolCtrl!")
    };
});


/*

MODULE
- to create an angular module, pass an empty array as the argument
    - without the [], angular thinks we are trying to call an existing module instead of creating one

CONTROLLER
- controllers are able to:
    - control the state of the application
    - handle data
    - manage changes to UI
- .controller() is how we attach logic to our module
- a controller function is essentially a property of our module
- we can use an event handler to fire this method and attach it to any element ( ex: ng-click="helloWorld()" )
- controller inheritence: if coolCtrl is INSIDE mainCtrl - coolCtrl has access to .helloWorld()
  but mainCtrl does not have access to whoAmI()











*/