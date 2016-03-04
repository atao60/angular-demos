'use strict';

angular.module("Demo", [
    'angular-meteor'
])

.directive('demoPane', function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: { title:'@' },
        templateUrl: 'client/demoPane.html'
    };
})

.directive('demoForm', function () {
    
    function controller() {
        this.title = 'Lorem Ipsum';
        this.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
    }
    
    return {
        restrict: 'E',
        controllerAs: 'ctrl',
        controller: controller,
        templateUrl: 'client/demoForm.html'
    };
});

