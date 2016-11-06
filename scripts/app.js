angular.module('todoListApp', [])

    .controller('mainCtrl', function($scope) {
    
    $scope.helloWorld = function() {
        console.log("Hello from the mainCtrl!");
    };
    
    $scope.change = function() {
        console.log("An input has changed.");
    };
    
    $scope.todos = [
        {'name': 'item one'},
        {'name': 'item two'},
        {'name': 'item three'},
        {'name': 'item four'},
    ];

});



/*

MODULE
- to create an angular module, pass an empty array the required argument
    - without the [], angular thinks we are trying to call/invoke an existing module instead of creating one


CONTROLLER
- controllers are able to:
    - control the state of the application
    - handle data
    - manage changes to UI
    
- .controller() is how we attach logic to our module
- a controller function is essentially a property of our module
- use an event handler to fire this method and attach it to any element ( ex: ng-click="helloWorld()" )
- controller inheritence: if b_Ctrl is INSIDE a_Ctrl - b_Ctrl has access to a_Ctrl's functions/$scope


DATA MODEL
- data modeling is either one-way or two-way

    // creating a model:  ng-model \\
- attach the ng-model attribute to an element with a name (ex: ng-model="todo")
- "todo.name" creates and assigns the .name property to that element
    
    <label>{{tod.name}}</label> :: takes the current value of todo.name and uses it as the text for the label
    
- "todo.complete" is another property, added to the existing "todo" object
- ng-show="isTrue", ng-hide="isFalse" alternate display property of an element based on a condition

    // repeating content:  ng-repeat \\
- you can wrap your content in a 'repeating' div that will autofill the html to match your data model
- ng-repeatable="someItem in someIterable" --> ng-repeat="todo in todos"

    <div ng-repeatable="item in itemsArray">
        <h1>{{item.name}}</h1>
        <h2>{{item.description}}</h2>
    </div>




*/