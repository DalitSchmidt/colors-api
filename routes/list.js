const express = require('express')
const router = express.Router()
const models = require('./../models')

/**
 * Bring the list and join the colors
 */
router.get('/', function( req, res ) {
    models.sequelize.query("SELECT lists.id, colors.hex, colors.rgb, colors.name FROM lists JOIN colors ON lists.color_id = colors.id", {
        type: models.sequelize.QueryTypes.SELECT,
        model: models.list
    }).then( colors => {
        if ( colors === null )
            res.status(204).send()
        else
            res.json( colors )
    })
})

/**
 * Creates new item in the list
 */
router.post('/', function(req, res) {
    let new_item = req.body

    models.list.create( new_item ).then( item => {
        res.status(201).json( item )
    }).catch(error => {
        res.status(422).json(error)
    })
})

module.exports = router