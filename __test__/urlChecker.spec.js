import { checkURL } from "../src/client/js/urlChecker";

test('Test UrlChecker with https link', () => {
    expect(checkURL('https://www.google.com/')).toBeTruthy()
})

test('Test UrlChecker with http link', () => {
    expect(checkURL('http://www.google.com/')).toBeTruthy()
})

test('Test UrlChecker with empty input', () => {
    expect(checkURL('')).toBeFalsy()
})

test('Test UrlChecker without protocol', () => {
    expect(checkURL('www.google.com')).toBeFalsy()
})

test('Test UrlChecker with random string', () => {
    expect(checkURL('asd123foo.test')).toBeFalsy()
})