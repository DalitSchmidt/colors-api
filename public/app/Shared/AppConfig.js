app.config( ($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/search', {
            templateUrl : 'app/Search/_search.html',
            controller: 'SearchController'
        })
        .when('/favorites', {
            templateUrl : 'app/Favorites/_favorites.html',
            controller: 'FavoritesController'
        })
        .when('/color/add', {
            templateUrl : 'app/Color/_add_color.html',
            controller: 'AddColorController'
        })
        .when('/color/:color_id', {
            templateUrl : 'app/Color/_color_information.html',
            controller: 'ColorInfoController'
        })
        .when('/schema/:color_id', {
            templateUrl : 'app/Schema/_schema.html'
        })
        .when('/search/:color_id', {
            templateUrl : 'app/Search/_search.html'
        })
        .otherwise({
            redirectTo: '/search'
        })
})