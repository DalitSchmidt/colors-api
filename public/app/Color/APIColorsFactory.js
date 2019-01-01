ColorsModule.factory('APIColorsFactory', ['$http', function( $http ) {
    return {
        searchColor: function( color ) {
            return $http.get(`http://localhost:3000/api/colors/search/${color}`)
        }
    }
}])