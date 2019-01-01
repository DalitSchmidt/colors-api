SearchModule.controller('SearchController', ['$scope', 'APIColorsFactory', function( $scope, APIColorsFactory ) {
    $scope.results = []

    $scope.searchColor = function() {
        let color = $scope.hex

        APIColorsFactory.searchColor( color ).then(colors =>
            $scope.results = colors.data.colors
        )
    }

    $scope.$watch('hex', function ( newVal ) {
        if ( typeof newVal !== 'undefined' && newVal.length > 1 ) {
            $scope.searchColor()
        }
    })
}])