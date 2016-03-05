### How to avoid $watch in controllers

Based on:
* [Angular JS - you probably shouldn't use $watch in your controllers. ](http://www.benlesh.com/2013/10/title.html) (21/10/2013).
* [Effective Strategies for Avoiding Watches in AngularJS](https://www.accelebrate.com/blog/effective-strategies-avoiding-watches-angularjs/) (11/11/2014)
* [5 Guidelines For Avoiding Scope Soup in Angular](http://www.technofattie.com/2014/03/21/five-guidelines-for-avoiding-scope-soup-in-angular.html) (21/03/2014)
* [ Optimizing code using Object.defineProperty instead of $scope for $watch in AngularJs](http://www.jomendez.com/2015/02/25/optimizing-code-object-defineproperty-scope-watch-angularjs/) (25/02/2015, Jose Mendez)

Refactoring with [Meteor](https://www.meteor.com/) of [Understanding How To Use $scope.$watch() With Controller-As In AngularJS](http://www.bennadel.com/blog/2852-understanding-how-to-use-scope-watch-with-controller-as-in-angularjs.htm) (23/06/2015) with code available from [github](https://github.com/bennadel/JavaScript-Demos/tree/master/demos/watch-controller-as-angularjs).

Use Object.defineProperty, which is supported by IE only since its version 9.

The trick here is to set a new value only through the property setter, never directly to the local variable. 
