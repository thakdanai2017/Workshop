const test = require('tape')
const request = require('supertest')
const app = require('../server')


// test('First test case', (t) => {

//     t.end()
// })
// test('GET /contacts', (t) => {
//     request(app).get('/contacts')
//         .expect(200)
//         .then((res) => {
//             let contact = res.body
//             let contactList = contactList[1]
//             t.notEqual(undefined, contactList.id)
//             t.end()
//         })

// })
test('GET /contacts/id', () => {
    if ('should respond with a single user', (t) => {
            app.request
                .get('/contact/1')
                .end((err, res) => {
                    // there should be no errors
                    should.not.exist(err);
                    // there should be a 200 status code
                    res.status.should.equal(200)
                    res.type.should.equal('application/json');
                    res.body.contacts[0].should.include.keys(
                        'id', 'name', 'email', 'url'
                    );
                    done();
                });
        });
});

// test('POST /contacts', (t) => {
//     request(app).post('/contacts')
//         .send({ id: 12, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.' })
//         .expect(200)
//         .then((res) => {
//             let student = res.body

//             t.equal('fluke', student.name)
//             t.end()
//         })
// })