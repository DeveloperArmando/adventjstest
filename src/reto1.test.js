import { expect, test, assert, describe } from 'vitest';
import { wrapping } from './reto1';

test('should return an array', () => {
  expect(wrapping([])).toBeInstanceOf(Array);
});

test('should not mutate', () => {
  const originalGifts = ['cat', 'game', 'socks'];
  const gifts = [...originalGifts];
  expect(wrapping(gifts)).not.toBe(gifts);

  assert.deepEqual(gifts, originalGifts, 'matches original');
  console.log(gifts);
});

describe.each([
  {
    gifts: ['cat', 'game', 'socks'],
    expected: [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ]
  },
  {
    gifts: ['midu'],
    expected: ['******\n*midu*\n******']
  },
  {
    gifts: ['a'],
    expected: ['***\n*a*\n***']
  },
  
])('wrapping gift', ({gifts, expected}) => {
  test(`wrapping ${gifts} should return ${expected}`, () => {
    expect(wrapping(gifts)).toEqual(expected);
  })
})

test('wrapping an empty array should return an empty array', () => {
  expect(wrapping([])).toEqual([])
})