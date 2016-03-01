'use strict';

var app = angular.module('Demo', [
    'angular-meteor'
    ])

.directive('statement', function statementDirective() {
    
    var compile = function compile(element, attributes) {

        element.html(
            element.html().replace( /(strong)/g, "$1, powerful" )
        );

        // NOTE: This works because the methods on the directive 
        // definition object (DDO) are invoked as properties of the 
        // DDO. As such, the "this" binding is the DDO object and can
        // therefore reference other methods on the DDO (such as link).
        return(this.link);

    };
    
    var link = function link(scope, element, attribute) {

        element.hover(
            function handleMouseEnter() {
                element.addClass("active");
            },
            function handleMouseLeave() {
                element.removeClass("active");
            }
        );
    };

    // Return the DDO (directive definition objection).
    return({
        compile: compile,
        link: link,
        restrict: "E"
    });

});
