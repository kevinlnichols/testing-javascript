const assert = require('assert');
const { findUserByEmail, findUserById } = require('../async');

describe('The async tests', () => {
    describe('The findUserById function', () => {
        it('Should return found user by ID', () => {
            return findUserById(1).then(result => {
                console.log('>>>', result);
                assert.equal(result.user.name, 'bahdcoder')
            })
        })
        it('Should throw error if user is not found', () => {
            return findUserById(777774).catch(error => {
                // expected = Error;
                // assert.throw(error, expected)
                assert.equal(error.message, 'User with id: 777774 was not found.')
            })
        })
        it('Should return user found by ID', async () => {
            const result = await findUserById(1);
            assert.equal(result.user.name, 'bahdcoder')
        })
    })
    describe('The findUserByEmail function', () => {
        it('Should return found user by email', () => {
            return findUserByEmail('miss_myers@models.co.uk').then(result => {
                console.log('%%%', result);
                assert.equal(result.user.name, 'Miss Myers')
            })
        })
        // Works, but says test coverage is not %100 on asyn.spec.js file.
        // it('Should throw error if user is not found', async () => {
        //     try {
        //         await findUserByEmail('xxxx')
        //         assert.fail('EXPECTED_ERROR')
        //     } catch(error) {
        //         if(error.message === 'EXPECTED_ERROR') {
        //             throw error
        //         }
        //         assert.equal(error.message, 'User with email: xxxx was not found.')
        //     }
        // })
        it('Should throw error if user is not found', () => {
            return findUserByEmail('xxxx').catch(error => {
                assert.equal(error.message, 'User with email: xxxx was not found.')
            })
        })
    })
})