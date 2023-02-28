import { describe, it, expect } from 'vitest'
import { hello } from './index'

describe('hello', () => {
  it('Should return hello', () => {
    expect(hello()).toBe('hello')
  })
})
