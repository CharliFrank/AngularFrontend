angular.module('rumi.profile', [])
  .controller('RumiProfile', function ($scope, RumiService, $window, FileUploader) {
    this.user = RumiService.getUserInfo();
    this.myRumis = [];
    this.profileImage = "views/user-image.jpg";
    
    this.createRumi = function() {
      $window.location.href = '/#/create';
    }

    this.getRumis = async function() {
      this.myRumis = await RumiService.getUserRumis($window.localStorage.getItem('id'));
      console.log(this.myRumis)
    }
  })