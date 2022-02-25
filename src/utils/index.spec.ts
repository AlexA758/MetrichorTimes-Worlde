import { dayOfYear } from '.';


describe('utils', () => {

  describe('dayOfYear', () => {
    it('Calculates the day out of 365 for any date', () => {
      // 2022 is not a leap year so this should work
      expect(dayOfYear(new Date(2022, 0, 1))).toBe(1) // January 1st
      expect(dayOfYear(new Date(2022, 0, 31))).toBe(31)
      expect(dayOfYear(new Date(2022, 1, 1))).toBe(32) // February 1st
      expect(dayOfYear(new Date(2022, 11, 1))).toBe(335)
      expect(dayOfYear(new Date(2022, 11, 31))).toBe(365)
    })
  })

  // TODO: Your utility/helper function tests could go here

})
