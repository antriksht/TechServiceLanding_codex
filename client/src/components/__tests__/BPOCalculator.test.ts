import { describe, expect, it } from 'vitest';
import { computeSavings } from '../BPOCalculator';

describe('computeSavings', () => {
  it('calculates savings correctly', () => {
    expect(computeSavings(5, 20)).toBe(178200);
  });
});
