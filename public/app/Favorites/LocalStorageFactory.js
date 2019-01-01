FavoritesModule.factory('LocalStorageFactory', function( $window ) {
    const CELL_NAME = 'colors'
    let ls = $window.localStorage
    let data = []

    function sync() {
        let list = angular.toJson( data )
        ls.setItem( CELL_NAME, list )
    }

    return {
        init: function() {
            let list = ls.getItem( CELL_NAME )

            if ( list === null ) {
                ls.setItem( CELL_NAME, '[]' )
            } else
                data = angular.fromJson( list )

            return data
        },

        addItem: function( item ) {
            data.push( item )
            sync()

            return this
        },

        removeItem: function( item ) {
            data.splice( data.indexOf( item ), 1 )
            sync()
            
			return this
        },

        getList: function() {
            return data
        },

        removeByProperty( propName, value ) {
            for ( var i = 0; i < data.length; i++ ) {
                if ( typeof data [ i ] == 'object' && data[ i ][ propName ] === value )
                    break
            }

            data.splice( i, 1 )
            sync()
            
			return this
        },

        removeByIndex: function( index ) {
            data.splice( index, 1 )
            sync()
            
			return this
        }
    }
})