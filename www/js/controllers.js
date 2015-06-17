angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  

})


.controller('enterinfoCtrl', function($scope) {
  $scope.contact =
      {
          fn: "First",
          ln: "Last",
          co: "Company",
          ph: "Phone",
          em: "Email",
          ad: "Address",
          a2: "Address 2",
          ci: "City",
          st: "State",
          zi: "Zip",
          na: "Country",
          no: "Notes. Lots and lots of notes..."
      };

});
