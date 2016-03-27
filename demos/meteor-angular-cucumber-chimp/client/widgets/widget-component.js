angular.module('demoapp')

.directive('renderTarget', function () {
    
    function controller(scope, reactive) {
        reactive(this).attach(scope);

        this.subscribe('widgets');

        this.helpers({
            widgets: () => {
                return Widgets.find({});
            }
        });
        
        this.newWidget = {};
                
        this.addWidget = () => {
//            Widgets.insert(this.newWidget);
            Meteor.call('addWidget', this.newWidget);
            this.newWidget = {};
        };
    }        
    
    return {
        restrict: 'E',
        controllerAs: 'rt',
        controller: ['$scope', '$reactive', controller],
        template: `
            <div>
              <h1>Widget Maker</h1>
              <p class="widget-name" ng-repeat="widget in rt.widgets">{{widget.name}}</p>
              <form ng-submit="rt.addWidget()">
                <input type="text" name="widgetName" placeholder="Name your new widget..." ng-model="rt.newWidget.name"/>
                <input type="submit" id="submit" value="Submit" />
              </form>
            </div>
        `
    };
});