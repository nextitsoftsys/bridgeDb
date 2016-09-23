angular.module('bridgedb')
.controller('loginCtrl',function($scope,$location,$http){

    $scope.login=function(){
        var formData  = {
                'email' : this.email,
                'password' : this.pwd
                
        }
    // Accessing the Angular $http Service to send data via REST Communication to Node Server.
    $http.post('http://localhost:8082/login',formData).success(function (data,status) {
      console.log(data)
   if(data=='incorrect email'|| data=='not found'&& status==200){
       alert('Invalid Email and Password');
            $location.path('login');
            }else if (data=='correct'&& status==200) {
            $location.path('profile')  ;
            }
    }).catch(function (data) {
      $scope.loading=false;
      alert("internal server error");
    });
    $scope.user='',
   $scope.password=''
    }
       
  	 
    
})