class Color {
    constructor( name = null, color = null ) {
        this.color = {}

        if ( color === null ) {
            this.color.rgb = this.getRandomColor()
            this.color.hex = this.rgbToHex( this.color.rgb )
        } else
            this.color = color

        this.color.name = name
    }

    getRandomColor() {
        return {
            R: Math.round( Math.random() * 255 ),
            G: Math.round( Math.random() * 255 ),
            B: Math.round( Math.random() * 255 )
        }
    }

    rgbToHex( color ) {
        return ((1 << 24) + (color.R << 16) + (color.G << 8) + color.B).toString(16).slice(1)
    }

    getColor() {
        return this.color
    }
}

function makeid() {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

var color, colors = []
for ( let i = 1; i <= 100; i++ ) {
    color = new Color(makeid())
    color = color.getColor()

    colors.push({
        name: color.name,
        hex: color.hex,
        rgb: `${color.rgb.R},${color.rgb.G},${color.rgb.B}`
    })
}

module.exports = colors