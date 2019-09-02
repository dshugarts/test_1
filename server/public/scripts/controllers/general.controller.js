myApp.controller('GeneralController', ['$http', 'UserService', 'SignupService', '$location', function ($http, UserService, SignupService, $location) {
  //  console.log('GeneralController created');
    var self = this;
    self.userService = UserService;
    self.signupService = SignupService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.letPass = SignupService.letPass;
    self.disclaimer = SignupService.disclaimer;
    self.collectGoals = SignupService.collectGoals;
    self.general = SignupService.general;
    self.collectBarriers = SignupService.collectBarriers;
    self.goals = SignupService.goals;
    self.collectExtraInfo = SignupService.collectExtraInfo;
    self.schools = SignupService.schools;


    function move() {
        var elem = document.getElementById("myBar"); 
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }

    self.home = function() {
        $location.path('/home');
    }

    self.collectGeneral = function() {
        $location.path('/student_home');
    }

}]);