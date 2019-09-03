myApp.controller('GaugeController', ['$location', 'UserService', function($location, UserService, DataService, ScoringService) {
    console.log('Gaugeontroller created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  //  self.dataArray = ScoringService.dataArray;
    id = UserService.userObject.id;
  //  self.myScore = ScoringService.myScore;
    
  
    
   const sectors = [{
    color : "red",
        lo : 0,
        hi : 49.9
                  },{
        color : "gold",
        lo : 50,
        hi : 69.9
      },{
        color : "green",
        lo : 70,
        hi : 100
      }];
  
    var g = new JustGage({
      id: "gaugeOne",
      value: 62,
      min: 0,
      max: 100,
      symbol: "%",
      customSectors: sectors,
      pointer: false,
      pointerOptions: {
        toplength: -12,
        bottomlength: 50,
        bottomwidth: 8,
        color: 'black',
      },
      gaugeWidthScale: 0.7,
      title: "Fluid Wellness Score",
      label: "Overall Progress"
    });

    var g = new JustGage({
        id: "gaugeTwo",
        value: 100,
        min: 0,
        max: 100,
        symbol: "%",
        customSectors: sectors,
        pointer: false,
        pointerOptions: {
          toplength: -12,
          bottomlength: 50,
          bottomwidth: 8,
          color: 'black',
        },
        gaugeWidthScale: 0.7,
        title: "Phase 1 Training",
        label: "LEVEL 3 COMPLETE"
      });

      var g = new JustGage({
        id: "gaugeThree",
        value: 81,
        min: 0,
        max: 100,
        symbol: "%",
        customSectors: sectors,
        pointer: false,
        pointerOptions: {
          toplength: -12,
          bottomlength: 50,
          bottomwidth: 8,
          color: 'black',
        },
        gaugeWidthScale: 0.7,
        title: "Phase 2 Training",
        label: "Currently in Level 3"
      });

     
      var g = new JustGage({
        id: "gaugeFour",
        value: 0,
        min: 0,
        max: 100,
        symbol: "%",
        customSectors: sectors,
        pointer: false,
        pointerOptions: {
          toplength: -12,
          bottomlength: 50,
          bottomwidth: 8,
          color: 'black',
        },
        gaugeWidthScale: 0.7,
        title: "Phase 3 Training",
        label: "LOCKED"
      });

      var g = new JustGage({
        id: "gaugeTwoAgain",
        value: 100,
        min: 0,
        max: 100,
        symbol: "%",
        customSectors: sectors,
        pointer: false,
        pointerOptions: {
          toplength: -12,
          bottomlength: 50,
          bottomwidth: 8,
          color: 'black',
        },
        gaugeWidthScale: 0.7,
        title: "Phase 1 Training",
        label: "LEVEL 3 COMPLETE"
      });

      var g = new JustGage({
        id: "gaugeThreeAgain",
        value: 81,
        min: 0,
        max: 100,
        symbol: "%",
        customSectors: sectors,
        pointer: false,
        pointerOptions: {
          toplength: -12,
          bottomlength: 50,
          bottomwidth: 8,
          color: 'black',
        },
        gaugeWidthScale: 0.7,
        title: "Phase 2 Training",
        label: "Currently in Level 3"
      });

     
      var g = new JustGage({
        id: "gaugeFourAgain",
        value: 0,
        min: 0,
        max: 100,
        symbol: "%",
        customSectors: sectors,
        pointer: false,
        pointerOptions: {
          toplength: -12,
          bottomlength: 50,
          bottomwidth: 8,
          color: 'black',
        },
        gaugeWidthScale: 0.7,
        title: "Phase 3 Training",
        label: "LOCKED"
      });
  

      self.phaseOne = function() {
        $location.path('/phase_one');
      }
    
      self.phaseTwo = function() {
        $location.path('/phase_two');
      }
    
      self.phaseThree = function() {
        $location.path('/phase_three');
      }
    
      self.cancelBio = function () {
        self.editing = false;
      }
    
      self.editBio = function () {
        self.editing = true;
      } 
    
      self.studentHome = function() {
        $location.path('/dashboard');
      }

      self.assessments = function() {
        $location.path('/assessments');
      }

      self.nutrition = function() {
        $location.path('/nutrition');
      }

      self.movement = function() {
        $location.path('/movement');
      }
  
  }]);