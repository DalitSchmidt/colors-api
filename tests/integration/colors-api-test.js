process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../../app')
const faker = require('faker')
const db = require('../../models')

chai.use( chaiHttp )

describe('Colors REST API', () => {
    describe('GET /colors', () => {
        it('Should GET all the colors and count them', done => {
            chai.request( server ).get('/api/colors').end((err, res) => {
                res.should.have.status(200)
                res.body.colors.should.be.a('array')
                res.body.count.should.be.a('number')
                done()
            })
        })

        it('Should return empty results for the colors', done => {
            db.color.destroy({
                where: {},
                truncate: true
            }).then(success => {
                chai.request(server).
                get('/api/colors').
                end((err, res) => {
                    res.should.have.status(204)
                    done()
                })
            })
        })
    })
})