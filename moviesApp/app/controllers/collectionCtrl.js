function collectionCtrl($scope, apiUrl, $http) {
    var url = apiUrl + 'Movies';

    $http.get(url).success(function (data) {
        $scope.movies = data;
    });
}

angular.module('movieApp.controllers').
    controller('collectionCtrl', collectionCtrl);
