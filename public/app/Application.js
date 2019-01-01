angular.module('Underscore', []).factory('_', () => { return window._ })

let ColorsModule = angular.module('Colors', ['Underscore'])
// let FavoritesModule = angular.module('Favorites', ['Colors'])
// let SchemaModule = angular.module('Schema', ['Colors'])
let SearchModule = angular.module('Search', ['Colors'])

let app = angular.module('ColorsApp', [
    'ngRoute',
    'Colors',
    // 'Favorites',
    'Underscore',
    // 'Schema',
    'Search'
])