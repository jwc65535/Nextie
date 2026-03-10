import { describe, expect, it } from 'vitest'

import { VERSION } from '../src/index.js'

describe('core smoke', () => {
  it('exports VERSION as 0.0.1 string', () => {
    expect(VERSION).toBe('0.0.1')
    expect(typeof VERSION).toBe('string')
  })
})
