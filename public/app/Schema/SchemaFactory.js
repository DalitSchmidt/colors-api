SchemaModule.factory('SchemaFactory', ['APIColorsFactory', 'LocalStorageFactory', function( APIColorsFactory, LocalStorageFactory ) {
    let list = []

    return {
        init: function() {
            return list = LocalStorageFactory.init()
        },

        searchColor: function( color ) {
            return APIColorsFactory.searchColor( color )
        },

        getColors: function() {
            return list
        },

        addColor: function( color ) {
            LocalStorageFactory.addItem( color )
            
			return this
        },

        deleteColor: function( item_id ) {
            LocalStorageFactory.removeByIndex( item_id )
        }
    }
}])