(function(angular) {
'use strict';

  angular.module('ngPrettyJson')
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put('ng-prettyjson/ng-prettyjson-panel.tmpl.html',
    '<div>' +
    '  <div layout="row" layout-align="end end">' + 
    '    <md-button class="md-icon-button" ng-click="edit()" ng-show="edition && !editActivated"><md-icon class="material-icons">edit</md-icon></md-button>' +
    '    <md-button class="md-icon-button" ng-click="edit()" ng-show="edition && editActivated"><md-icon class="material-icons">close</md-icon></md-button>' +
    '    <md-button class="md-icon-button" ng-click="update()" ng-show="editActivated && parsable"><md-icon class="material-icons">save</md-icon></md-button>' +                       
    '  </div>' +
    '  <pre class="pretty-json ace_editor ace-tm" id="{{id}}"></pre>' +
    '</div>' );
  }]);

})(window.angular);