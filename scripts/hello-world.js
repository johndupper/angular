angular.module('todoListApp')
    .directive('helloWorld', function() {
    return {
        template: 'This is the Hello World directive.',
        // restrict to either element or attribute
        restrict: 'E' // use as an element only
    };
});

/*

- standalone element:
<hello-world></hello-world>

- existing element attribute:
<div hello-world></div>

*/