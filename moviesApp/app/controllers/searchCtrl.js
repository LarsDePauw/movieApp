function searchCtrl($scope, $http, apiUrl, $log) {

    $scope.message = "Geef een titel op";
    $scope.searchMovie = function (title) {
        console.log(title);

        var url = apiUrl + 'Movies/search?title=' + title;

        $http.get(url).success(function (data) {
            $log.debug(data);
            $scope.results = data;
        });

        $log.debug('run');
    }

}

angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtrl);
