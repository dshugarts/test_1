myApp.controller('GaugeController', ['$location', 'UserService', function($location, UserService, DataService, ScoringService) {
    console.log('Gaugeontroller created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  //  self.dataArray = ScoringService.dataArray;
    id = UserService.userObject.id;
  //  self.myScore = ScoringService.myScore;
    

  var yLabels = {
    18: 'Level 1', 36 : 'Level 2', 54 : 'Level 3'
}
  
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
        $location.path('/new_dash');
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
  
      self.logout = function() {
        $location.path('/home');
      }

        new Chart(document.getElementById("dash-bar"), {
        type: 'bar',
        data: {
          labels: ['Neck', 'Shoulders', 'Trunk', 'Hips', 'Legs', 'Ankles'],
          datasets: [{ 
              data: [40, 36, 28, 32, 35, 40],
              label: "Core | 6 Level",
              borderColor: 'rgba(22,134,180,1.0)',
              backgroundColor: 'rgba(22,134,180,1.0)',
              fill: true
            }, { 
              data: [18, 18, 18, 18, 18, 18],
              label: "Today's Session Effort",
              borderColor: 'rgba(160,101,9, 0.8)',
              backgroundColor: 'rgba(160,101,9, 0.8)',
              fill: true
            }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 54,
                stepSize: 18,
                callback: function(value, index, values) {
                  // for a value (tick) equals to 8
                  return yLabels[value];
                  // 'junior-dev' will be returned instead and displayed on your chart
              }
              },
            }]
        },
          title: {
            display: false,
            text: '',
            position: 'bottom'
          },
          legend: {
              position: 'bottom'
          },
          layout: {
            padding: {
              top: 10
            }
          }
        }

      });


  }]);