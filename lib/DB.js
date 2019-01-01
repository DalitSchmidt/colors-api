const fs = require('fs')

class DB {
    constructor( file ) {
        this.file = `./../data/${file}.json`
    }

    write( data, callback ) {
        fs.readFile(this.file, 'utf8', ( err, fileData ) => {
            if ( err ) {
                callback( err )
                return
            }

            let db = JSON.parse( fileData )
            db.push( data )
            let item_id = db.length
            db = JSON.stringify( db )
            fs.writeFile( this.file, db, err => callback( err, item_id ) )
        })
    }

    fetch( id, callback ) {
        fs.readFile(this.file, 'utf8', ( err, data ) => {
            if ( err ) {
                callback( err )
                return
            }

            let db = JSON.parse( data )
            callback( err, db[ id ] )
        })
    }

    destroy( id, callback ) {
        fs.readFile(this.file, 'utf8', ( err, data ) => {
            if ( err ) {
                callback( err )
                return
            }

            let db = JSON.parse( data )
            db.splice( id, db )
            fs.writeFile( this.file, db, err => callback( err ) )
        })
    }

    read( callback ) {
        fs.readFile(this.file, 'utf8', ( err, data ) => {
            callback( err, JSON.parse( data ) )
        })
    }
}

module.exports = DB