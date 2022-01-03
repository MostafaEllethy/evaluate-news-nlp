import { checkForName } from "../src/client/js/nameChecker";

test('Test NameChecker with Empty value', () => {
    expect(checkForName('')).toBeFalsy()
})

test('Test NameChecker with Wrong value', () => {
    expect(checkForName('')).toBeFalsy()
})

test('Test NameChecker with True value', () => {
    expect(checkForName('Kirk')).toBe('Welcome, Captain!')
})