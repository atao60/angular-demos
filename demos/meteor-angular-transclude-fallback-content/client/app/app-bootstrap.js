'use strict';

angular.module("Demo", [
    'angular-meteor'
])

.directive('myButton', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        template: `<button style="cursor: pointer;">
                     <ng-transclude>
                       <b style="color: red;">Button1</b>
                     </ng-transclude>
                   </button>`
    };
});

