import { addDays, format } from 'date-fns'

describe('template spec', () => {
  it('should chose a bike, select the days in the calendar, click in the add to booking button and return to the initial page', () => {
    const today = format(new Date(), 'dd')
    const daysAhead = Math.floor(Math.random() * 10) + 1
    const randomDaysAhead = format(addDays(new Date(), daysAhead), 'dd')

    cy.visit('/')
    cy.get('[data-testid="bike-card"]').then(($bikes) => {
      const randomBikeIndex = Math.floor(Math.random() * $bikes.length)
      cy.get('[data-testid="bike-card"]').eq(randomBikeIndex).click()
    })
    cy.get('[data-testid="date-picker-day"]').contains(today).click()
    cy.get('[data-testid="date-picker-day"]').contains(randomDaysAhead).click()
    cy.get('[data-testid="bike-booking-button"]').click()
    cy.get('[data-testid="return-home-button"]').click()
  })
})
