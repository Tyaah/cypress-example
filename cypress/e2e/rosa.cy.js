describe('Rosa booking app', () => {
  it('should book an appointement', { defaultCommandTimeout: 8000 }, () => {
    cy.visit('https://staging-patient-search-hps.rosa.be');

    // refuse cookies
    cy.get('[data-cy="cookie-policy__refuse"]').click();

    // fill in name of doctor
    cy.get('[data-cy="patientBooking_hpSearch"]').type('Cedric Staging Dentist');

    // click on the doctor
    cy.get('[data-cy="profile-picture__default-avatar-cedric-staging-dentist"]').click();

    // make an appointment
    cy.get('[data-cy="hp-detail__book-booking-widget-cta"]').click();

    // take first available location
    cy.get('[data-cy="booking-steps__step-title"]').should('have.text', 'Choose a location');
    cy.get('[data-cy="step-radio-option__title"]').first().click();

    // select yes on First time question
    cy.get('[data-cy="booking-steps__step-title"]').should('have.text', 'Is it the first time you see this practitioner?');
    cy.get('[data-cy="step-radio-option__title"]').first().click();

    // select first option on Reason
    cy.get('[data-cy="booking-steps__step-title"]').should('have.text', 'Choose a reason for your visit');
    cy.get('[data-cy="step-radio-option__title"]').first().click();

    // select first availability
    cy.get('[data-cy^="availability-results__day-slots__slot-"]').first().click();

    // click continue on the review screen
    cy.get('[data-cy="booking-review__next-btn"]').click();
  })
})