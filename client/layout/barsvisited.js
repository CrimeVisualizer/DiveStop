angular.module('divestop.barsvisited', [])
  .controller('BarsVisitedCtrl', function($scope, SharedProperties, DiveSites) {
    // Upload bars information.......

    // Iterate through the 
    var data = {};
    data.bar = ['coral', 'shallow', 'calm','coral1', 'shallow1', 'calm1','coral2', 'shallow2', 'calm2','coral3', 'shallow3', 'calm3','coral4', 'shallow4', 'calm4'];
    data.picture = ["http://www.169barnyc.com/cmsmadesimple/uploads/images/a_169_Bar_pictures_edit_1.jpg"];
    $scope.data = data;

    $scope.showForm = SharedProperties.showForm;

    // $scope.templateUrl = 'divesite/divesite.html';

  });