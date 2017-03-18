$(window).load(function() {
  $('.leoslider').leoslider({
    animation: "slide"
  });
});

var myApp = angular.module('SAZInteriorsApp', []);

myApp.controller('SAZInteriorsCtrl', ['$scope', function($scope) {
  $scope.currUrl = window.location.href;
}]);
