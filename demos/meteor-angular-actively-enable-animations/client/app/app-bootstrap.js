'use strict';

angular.module('Demo', [
    'angular-meteor',
    'ngAnimate'
    ])

/*
 * configure the $animate service during bootstrap.
 */    
.config(['$animateProvider', function configureAnimate(animateProvider) {

                // By default, the $animate service will check for animation styling
                // on every structural change. This requires a lot of animateFrame-based
                // DOM-inspection. However, we can tell $animate to only check for 
                // animations on elements that have a specific class name RegExp pattern
                // present. In this case, we are requiring the "animated" class.
                // --
                // NOTE: I have personally seen a performance boost using this approach
                // on some complex page. The AngularJS documentation also says that 
                // this can also be really beneficial for low-powered mobile devices,
                // but I don't do much mobile.
                animateProvider.classNameFilter( /\banimated\b/ );

}])
     
/*
 * control the root of the application.
 */
.controller("AppController", ['$scope', function AppController(scope) {

                // These are the lists we will be swapping in / out.
                var listA = generateListItems("A", 100);
                var listB = generateListItems("B", 100);

                // I hold the reference to the currently selected list.
                scope.activeList = listA;

                // ---
                // PUBLIC METHODS.
                // ---

                scope.showListA = function () {
                    console.log("showListA");
                    scope.activeList = listA;
                };

                scope.showListB = function () {
                    console.log("showListB");
                    scope.activeList = listB;
                };

                // ---
                // PRIVATE METHODS.
                // ---

                function generateListItems(suffix, count) {
                    var list = [];
                    for (var i = 1 ; i <= count ; i++) {
                        list.push( `List item ${i} for ${suffix}.` );
                    }
                    return list;
                }

            }]
);
