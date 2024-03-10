import { addDays, format } from 'date-fns'

describe('template spec', () => {
  it('should chose a bike, select the days in the calendar, rent the bike and displays booking confirmation', () => {
    const today = format(new Date(), 'dd')
    const threeDaysAhead = format(addDays(new Date(), 3), 'dd')

    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="bike-card"]').eq(5).click()
    cy.get('[data-testid="date-picker-day"]').contains(today).click()
    cy.get('[data-testid="date-picker-day"]').contains(threeDaysAhead).click()
    cy.get('[data-testid="bike-booking-button"]').click()
    cy.get('[data-testid="booking-confirmation"]').should('exist')
  })
})
