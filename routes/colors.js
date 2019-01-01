const express = require('express')
const router = express.Router()
const models = require('./../models')

function hexToRgb( hex ) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ].join(',') : null;
}

/**
 * Get the list of all the colors in the DB
 */
router.get('/', function(req, res) {
    models.Color.findAndCountAll().then(results => {
        if ( results === null )
            res.status(204).send()
        else
            res.json({
                count: results.count,
                colors: results.rows
            })
    })
})

/**
 * Find a single color by it's id
 */
router.get('/:color_id', function(req, res) {
    let color_id = req.params.color_id

    models.Color.findById(color_id).then(color => {
        if (color === null)
            res.status(204).send()
        else
            res.json(color)
    })
})

/**
 * Search the color by the hex code (with a WildCard), limit results for 10
 */
router.get('/search/:color_hex', function( req, res ) {
    let color_hex = req.params.color_hex

    let query = {
        where: { hex: { $like: `%${color_hex}%` } },
        attributes: ['id', 'name', 'hex'],
        limit: 10
    }

    models.Color.findAndCountAll( query ).then(colors => {
        if ( colors === null )
            res.status(204).send()
        else
            res.json({
                count: colors.count,
                colors: colors.rows
            })
    })
})

/**
 * Creates new color in the colors DB
 */
router.post('/', function(req, res) {
    let color = req.body

    /**
        The request body (the color var) of new color contains only the name and the hex
        But in the schema of color, we also have to insert RGB code
        So! We have to write a function that convert HEX to RGB and add it to the object
        we send to the method ".create()" in order that the schema will be valid
        We can not insert a record without a RGB! right?
     **/

    color.rgb = hexToRgb( color.hex )

    models.Color.create( color ).then(new_color => {
        res.status(201).json( new_color )
    }).catch(error => {
        res.status(422).json( error )
    })
})

module.exports = router