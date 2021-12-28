myApp.directive("phonesList", function () {
    return function (scope, element, attrs) {
        var data = scope[attrs["phonesList"] || attrs['source']];
        if (angular.isArray(data)) {
            var divElem = angular.element("<div>");
            element.append(divElem);
            data.forEach(function(elem){
               divElem.append(angular.element('<p>').text(elem.name + " - " +elem.price + '$'))
            })
            
        }
    }
});
myApp.directive("secondphonesList", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["secondphonesList"]];
        },
        restrict: "A",
        templateUrl: "/assets/phonesListDirective.html"
    }
});