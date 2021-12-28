
myApp.controller('phoneController', function($scope) {
 
  $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    },{
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: {
            name: 'Samsung',
            country: 'Республика Корея'
        }
    },{
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: {
            name: 'Xiaomi',
            country: 'Китай'
        }
    }];
    $scope.somestyle = { background: 'pink', color: '#333' };
    $scope.someclass = "myclass";


    $scope.left = 0
    $scope.style = {position:"relative", left:`0px`, background:"rgb(190 255 201)", width:'fit-content', transition:'1s'}
    $scope.ngstyle = function(){
        $scope.left+=40;
        $scope.style.left = `${$scope.left}px`
    };
    $scope.focusOrBlur = "blur"
    $scope.styleButton = {background: 'lightgray'}
    $scope.focus = function(){
        $scope.styleButton.background = "rgb(190 255 201)"
        $scope.focusOrBlur = "focus"
    }
    $scope.blur = function(){
        $scope.styleButton.background = "lightgray"
        $scope.focusOrBlur = "blur"
    }
    

});