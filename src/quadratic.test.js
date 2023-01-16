import { describe, expect, it } from '@jest/globals';

import { quadratic } from './quadratic'

describe('quadratic', () => {
  it('calculates the root if only a', () => {
    expect(quadratic(1, 0, 0)).toEqual([0])
  });

  it('calculates the root if a and b', () => {
    expect(quadratic(1, 2, 0)).toEqual([0, -2])
  });

  it('calculates the root if a, b, and c', () => {
    expect(quadratic(1, 2, 1)).toEqual([-1])
  });
});
