// this controller handles the functionality of working with the map
// ['ngMap']
angular.module('divestop.map', [])
  // the controller is called OurMapController so it doesn't interfere with the ngMap MapController
  .controller("OurMapController", function($scope, SharedProperties, DiveSites, AppMap) {
    $scope.newSite = SharedProperties.newSite; // Object with properties lat, lng
    $scope.showForm = SharedProperties.showForm;
    $scope.moveNewMarker = AppMap.moveNewMarker;
    
    SharedProperties.newSiteMarker = new google.maps.Marker();


    $scope.toggle = false;
    $scope.toggleMe = function() {
      console.log('toggling')
      $scope.toggle = !$scope.toggle;

      if($scope.toggle) {
        console.log("showing marker")
         AppMap.showNewMarker();
       } else {
         AppMap.hideNewMarker();
       }

      return $scope.toggle;
    }

    // $scope.toggleForm = function() {
    //   var toggle = true;
    //   console.log(toggle);
    //   $scope.showForm.state = !$scope.showForm.state;
    //   if($scope.showForm.state) {
    //     AppMap.showNewMarker();
    //   } else {
    //     AppMap.hideNewMarker();
    //   }
    // };
});
