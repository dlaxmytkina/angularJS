

myApp.controller('filterController', function ($scope) {
    $scope.lowercaseText = "lowErCAseTExt";
    $scope.sortparam = '-price';
    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200
    }, {
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400
    }, {
        name: 'Mi 5',
        year: 2015,
        price: 300
    }, {
        name: 'iPhone 13',
        year: 2021,
        price: 1200
    }, {
        name: 'Huawei p40',
        year: 2017,
        price: 500
    }];
    $scope.check = function(){
        if($scope.myForm.$invalid){
            $scope.invalidForm = true
        } else {
            $scope.invalidForm = false
        }
    }
});
myApp.filter('old', function () {
    return function (phone) {
        if (phone.year <= 2016) {
            return '(устарел)'
        }
    }
})