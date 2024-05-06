// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('tests if 855-322-1234 is a valid phone number', () => {
  expect(isPhoneNumber('855-322-1234')).toBe(true);
});

test('tests if 122-456-5432 is a valid phone number', () => {
  expect(isPhoneNumber('122-456-5432')).toBe(true);
});

test('tests if 122-456-543 is not a valid phone number', () => {
  expect(isPhoneNumber('122-456-543')).toBe(false);
});

test('tests if phone number is not a valid phone number', () => {
  expect(isPhoneNumber('phone number')).toBe(false);
});

test('tests if bob@yahoo.com is a valid email', () => {
  expect(isEmail('bob@yahoo.com')).toBe(true);
});

test('tests if joe123@gmail.com is a valid email', () => {
  expect(isEmail('joe123@gmail.com')).toBe(true);
});

test('tests if @bob.com is not a valid email', () => {
  expect(isEmail('@bob.com')).toBe(false);
});

test('tests if bobby@ is not a valid email', () => {
  expect(isEmail('bobby@')).toBe(false);
});

test('tests if bobby123 is a strong password', () => {
  expect(isStrongPassword('bobby123')).toBe(true);
});

test('tests if orangejuice_555 is a strong password', () => {
  expect(isStrongPassword('orangejuice_555')).toBe(true);
});

test('tests if jo1 is not a strong password', () => {
  expect(isStrongPassword('jo1')).toBe(false);
});

test('tests if applejuiceisawesomeandverytasty is not a strong password', () => {
  expect(isStrongPassword('applejuiceisawesomeandverytasty')).toBe(false);
});

test('tests if 01/05/2015 is a valid date', () => {
  expect(isDate('01/05/2015')).toBe(true);
});

test('tests if 5/3/1968 is a valid date', () => {
  expect(isDate('5/3/1968')).toBe(true);
});

test('tests if 01/05/205 is not a valid date', () => {
  expect(isDate('01/05/205')).toBe(false);
});

test('tests if 01/045/2019 is not a valid date', () => {
  expect(isDate('01/045/2019')).toBe(false);
});

test('tests if #ff2 is a valid hex color', () => {
  expect(isHexColor('#ff2')).toBe(true);
});

test('tests if #000000 is a valid hex color', () => {
  expect(isHexColor('#000000')).toBe(true);
});

test('tests if lol is not a valid hex color', () => {
  expect(isHexColor('lol')).toBe(false);
});

test('tests if #ffff is not a valid hex color', () => {
  expect(isHexColor('#ffff')).toBe(false);
});
