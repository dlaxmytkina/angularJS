myApp.controller('HttpController',
    function ($scope, $http) {
        $scope.load = function (id) {
            $scope.wait = true
            if( id === undefined){
                id = '?page=1';
                $scope.showPages = true;
            }else {
                id = '/' + id;
                $scope.showPages = false;
            }        
            $scope.request(id)
            
        };
        $scope.request = function(id){
            
            $scope.wait = true
            $scope.resultError = false;
            $scope.activePage = id.match(/\d/)[0];
            $http({ method: 'GET', url: `https://reqres.in/api/users${id}` }).
            then(function (response) {
                let data = response.data.data
                if (!Array.isArray(data)) {
                    data = [data]
                }
                $scope.users = data;
                $scope.loaded = true;
                $scope.wait = false
            }, function(error){
                $scope.wait = false
                $scope.loaded = false;
                $scope.resultError = true;
            });
        };
        $scope.activePage = '1';


    }
)