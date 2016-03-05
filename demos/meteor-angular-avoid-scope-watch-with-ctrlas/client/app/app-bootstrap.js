'use strict';

angular.module('Demo', [
    'angular-meteor'
])

.directive('incDemo', function () {
    
    var controller = function controller() {

        // a local variable is required
        var fooCount = 0;
        
        /*
           The setter is called only when the property "fooCount" is changed, not when
           the local variable "fooCount" is directly changed.
         */
        Object.defineProperty(controller.prototype,
            "fooCount", 
            {
                get: function () {
                    console.log(`Current value of fooCount: ${fooCount}`); // <--- the local variable "fooCount"
                    return fooCount; // <--- the local variable "fooCount"
                },
                set: function (newValue) {
                    fooCount = newValue; // <--- the local variable "fooCount"
                    console.log(`Modified value of fooCount: ${fooCount}`); // <--- the local variable "fooCount"
                },
                enumerable: true,
                configurable: true
            }
        );

        /* 
           set here the new value through the property setter, not directly with the local variable.
         */
        this.incrementFoo = function incrementFoo() {
            this.fooCount++; // <--- the property "fooCount"
            console.log(`----> ${fooCount} <----`); // <--- the local variable "fooCount"
        };

    };
    

    /*
        Notice that we are aliasing the view-model as "demoCtrl". Behind
        the scenes, this is doing nothing more than setting up the following
        scope-level binding:

        $scope.demoCtrl = {{ controller-instance }}
     
     */
    return {
        restrict: 'E',
        controllerAs: 'demoCtrl',
        controller: controller,
        template: `
            <div>
                <p>
                    <a ng-click="demoCtrl.incrementFoo()">Increment Foo</a>: 
                    {{demoCtrl.fooCount}}.
                </p>
            </div>
            `
    };
});
