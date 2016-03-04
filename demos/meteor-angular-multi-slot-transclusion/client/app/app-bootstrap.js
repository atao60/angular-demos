'use strict';

angular.module("Demo", [
    'angular-meteor'
])

.directive('demoPane', function () {
    return {
        restrict: 'E',
        transclude: {
            'title': '?paneTitle',
            'body': 'paneBody',
            'footer': '?paneFooter'
        },
        template: `
            <div style="border: 1px solid black;">
              <div class="title" ng-transclude="title">Fallback Title</div>
              <div ng-transclude="body"></div>
              <div class="footer" ng-transclude="footer">Fallback Footer</div>
            </div>
            `
            };
})

.directive('demoForm', function () {
    
    function controller() {
      this.title = 'Lorem Ipsum';
      this.link = "https://google.com";
      this.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
    }
    
    return {
        restrict: 'E',
        controllerAs: 'ctrl',
        controller: controller,
        template: `
          <div>
            <input ng-model="ctrl.title" aria-label="title"> <br/>
            <textarea ng-model="ctrl.text" aria-label="text"></textarea> <br/>
            <demo-pane>
              <pane-title><a ng-href="{{ctrl.link}}">{{title}}</a></pane-title>
              <pane-body><p>{{ctrl.text}}</p></pane-body>
            </demo-pane>
          </div>
          `
    };
    
});

