const test = require('tape')
const chai = require('chai')
const request = require('supertest')
const app = require('../server')


test('First test case', (t) => {

    t.end()
})
test('GET /contacts', (t) => {
    request(app).get('/contacts')
        .expect(200)
        .then((res) => {
            let contact = res.body
            let contactList = contactList[1]
            t.notEqual(undefined, contactList.id)
            t.end()
        })

})
test('POST /contacts', (t) => {
    request(app).post('/contacts')
        .send({ id: 12, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.' })
        .expect(200)
        .then((res) => {
            let contact = res.body

            t.equal('fluke', contact.name)
            t.end()
        })
})

test('PUT /contacts', (t) => {
    request(app).put('/contacts/id')
        .send({ id: 12, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.' })
        .expect(203)
        .then((res) => {
            let contact = res.body

            t.equal('fluke', contact.name)
            t.end()
        })
})