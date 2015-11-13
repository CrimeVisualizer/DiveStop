// Controller for the add site form

angular.module('divestop.addsite', [])
  .controller('AddSiteController', function(SharedProperties, DiveSites, Photos, AppMap, $scope) {
    
    // this.site = {};
    // this.site.vicinity: "916 Grant Avenue, San Francisco"
    // this.site.geometry.locations.J: "37.795484"
    // this.site.geometry.locations.M: "-122.40637400000003"
    // this.site.photos.html_attributes: '<href src="https://maps.google.com/maps/contrib/110129543306744989778">'
    // this.site.name: "Li Po Cocktail Lounge"
    // this.site.vote: 1

    this.site = {};
    this.site.vicinity = 
    this.site.geometry.locations.J = 
    this.site.geometry.locations.M = 
    this.site.photos.html_attributes = 
    this.site.name = 
    this.site.vote = 


    // this.site.features = [];
    // this.site.aquaticLife = [];
    // this.site.photos = [];
    // this.site.coordinates = SharedProperties.newSite;
    // this.showForm = SharedProperties.showForm;
    // this.site.location = "key largo";
    // this.site.comments = "testComment";
    // this.site.gradient = "tG";
    // this.site.thumbUp = $scope.thumbUpClick;
    // this.site.thumbDown = $scope.thumbDownClick;

    // this.templateUrl = 'add/add.html';

    $scope.thumbUpClick = false;
    $scope.thumbUp = function() {
      if(!$scope.thumbDownClick) {
        $scope.thumbUpClick = !$scope.thumbUpClick;
      }
    };

    $scope.thumbDownClick = false;
    $scope.thumbDown = function() {
      if(!$scope.thumbUpClick) {
        $scope.thumbDownClick = !$scope.thumbDownClick;
      }
    };

    var addToArray = function(item, array) {
      if(array.indexOf(item) === -1 && !isBlank(item)){
        array.push(item);
      }
    };

    this.addFeature = function() {
      addToArray(this.newFeature, this.site.features);
      this.newFeature = '';
    };
    this.removeFeature = function(index) {
      this.site.features.splice(index, 1);
    };
    this.addAquaticLife = function() {
      addToArray(this.newAquaticLife, this.site.aquaticLife);
      this.newAquaticLife = '';
    };
    this.removeAquaticLife = function(index) {
      this.site.aquaticLife.splice(index, 1);
    };

    this.clearForm = function() {
      this.site.name = '';
      this.site.maxDepth = '';
      this.site.description = '';
      this.site.features = [];
      this.site.aquaticLife = [];
      this.site.photos = [];
      this.site.coordinates.lat = undefined;
      this.site.coordinates.lng = undefined;
      this.site.thumbUp = 1;
      this.site.thumbDown = 0;
    };

    this.addSite = function() {
      // Deep copy the object so we can stringify coordinates before passing to server
      var newSite = deepCopy(this.site);

      AppMap.addMarker(newSite, SharedProperties.map);

      DiveSites.postNewSite(newSite).then(function(data) {
        this.clearForm();
      }.bind(this));
      
    };

    this.removePhoto = function(index) {
      this.site.photos.splice(index, 1);
    };

    this.addPhoto = function() {
      this.filePath = '';
      Photos.uploadPhoto(this.newPhoto, function(url){
        this.site.photos.push(url);
      }.bind(this));
    };

    var deepCopy = function(obj) {
      return JSON.parse(JSON.stringify(obj));
    };

    var isBlank = function(string) {
      return string.trim() === '';
    };

    this.hideForm = function(){
      SharedProperties.showForm.state = false;
      AppMap.hideNewMarker();
    };

  })
  .directive('fileread', [function () {
    return {
        scope: {
            fileread: '='
        },
        link: function (scope, element, attributes) {
            element.bind('change', function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                    // or all selected files:
                    // scope.fileread = changeEvent.target.files;
                });
            });
        }
    };
  }])
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind('keydown keypress', function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  });
