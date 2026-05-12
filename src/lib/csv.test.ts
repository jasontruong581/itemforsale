import { describe, expect, it } from 'vitest'
import { parseCsv } from './csv'

describe('parseCsv', () => {
  it('maps headers to row values', () => {
    const rows = parseCsv('id,name,status\n1,AirPods,available\n2,Kindle,sold')

    expect(rows).toEqual([
      { id: '1', name: 'AirPods', status: 'available' },
      { id: '2', name: 'Kindle', status: 'sold' },
    ])
  })

  it('preserves commas inside quoted cells', () => {
    const rows = parseCsv('id,note\n1,"gọn, đẹp, dễ bán"')

    expect(rows[0]?.note).toBe('gọn, đẹp, dễ bán')
  })
})
