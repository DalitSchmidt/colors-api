const validate = require('jsonschema').validate

class Model {
    constructor( DB, entity, schema ) {
        let file = entity.toLowerCase()
        this.db = new DB( file )
        this.schema = {
            id: entity,
            type: 'object',
            properties: JSON.stringify( schema )
        }
    }

    save( data, callback ) {
        let valid = validate( data, this.schema )

        if ( !valid ) {
            callback( new Error('Invalid schema') )
            return
        }

        this.db.write( data, ( err, id ) => callback( err, id ) )
    }

    destroy( id, callback ) {
        this.db.destroy( id, callback )
    }

    read( callback ) {
        this.db.read( callback )
    }

    fetch( id, callback ) {
        this.db.fetch( id, callback )
    }
}

module.exports = Model