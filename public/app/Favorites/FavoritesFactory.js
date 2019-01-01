FavoritesModule.factory('FavoritesFactory', ['LocalStorageFactory', function( LocalStorageFactory ) {
    let list = []

    return {
        init: function() {
            return list = LocalStorageFactory.init()
        },

        getItems: function() {
            return list
        },

        addItem: function( color ) {
            LocalStorageFactory.addItem( color )

            return this
        },

        deleteItem: function( item_id ) {
            LocalStorageFactory.removeByIndex( item_id )
        }
    }
}])