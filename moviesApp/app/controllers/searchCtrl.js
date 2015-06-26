function searchCtrl($scope, $http, apiUrl, $log, $location) {

    $scope.message = "Geef een titel op";
    $scope.searchMovie = function (title) {
        console.log(title);

        var url = apiUrl + 'Movies/search?title=' + title;

        $http.get(url).success(function (data) {
            $log.debug(data);
            $scope.results = data;
        });


    };
    $scope.selectMovie = function (id) {
        $scope.selectedId = id;
    };


    $scope.addMovie = function (id) {
        var url = apiUrl + 'Movies/' + id;
        $http.post(url).success(function () {
            $location.url('/collection');
        });
    }
}
    angular.module('movieApp.controllers')
        .controller('searchCtrl', searchCtrl);


