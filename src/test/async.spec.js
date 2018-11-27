
const { findUserByEmail, findUserById } = require('../async');

describe('The async tests', () => {
    describe('The findUserById function', () => {
        it('Should return found user by ID', () => {
            return findUserById(1).then(result => {
                expect(result.user.name).toBe('bahdcoder')
            })
        })
        it('Should throw error if user is not found', () => {
            return findUserById(777774).catch(error => {
                expect(error.message).toBe('User with id: 777774 was not found.')
            })
        })
        it('Should return user found by ID', async () => {
            const result = await findUserById(1);
            expect(result.user.name).toBe('bahdcoder')
        })
    })
    describe('The findUserByEmail function', () => {
        it('Should return found user by email', () => {
            return findUserByEmail('miss_myers@models.co.uk').then(result => {
                expect(result.user.name).toBe('Miss Myers')
            })
        })
        it('Should throw error if user is not found', () => {
            return findUserByEmail('xxxx').catch(error => {
                expect(error.message).toBe('User with email: xxxx was not found.')
            })
        })
    })
})