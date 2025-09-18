describe('Testler.cy.jsx', () => {
  
  it('Login doğru veriler girildiğinde doğru çalışıyor mu?', () => {
    cy.visit('http://localhost:5174/')
    cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
    cy.contains("I agree to terms of service and privacy policy").click()
    cy.contains("Sign In").click()
    cy.url().should('include', '/success')
    cy.contains("Hoş Geldiniz!")
  })

  it('Email yanlış girilince hata mesajı alınıyor mu?', () => {
    cy.visit('http://localhost:5174/')
    cy.get('[data-cy="email-input"]').type("erdem.guntaywit.com.tr")
    cy.contains("Please enter a valid email address").should('be.visible')
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
    cy.contains("Password must be at least 4 characters long and contain at least 1 uppercase letter, 1 lowercase letter and 1 number.").should('not.exist')
    cy.get('.invalid-feedback').should('have.length', 1)
    cy.contains("I agree to terms of service and privacy policy").click()
    cy.contains("Sign In").should('be.disabled')
  })

  it('Email ve password aynı anda yanlış girilince 2 hata mesajı alınıyor mu?', () => {
    cy.visit('http://localhost:5174/')
    cy.get('[data-cy="email-input"]').type("erdem.guntaywit.com.tr")
    cy.contains("Please enter a valid email address").should('be.visible')
    cy.get('[data-cy="password-input"]').type("fxIHGXesEwH_I")
    cy.contains("Password must be at least 4 characters long and contain at least 1 uppercase letter, 1 lowercase letter and 1 number.").should('be.visible')
    cy.get('.invalid-feedback').should('have.length', 2)
    cy.contains("I agree to terms of service and privacy policy").click()
    cy.contains("Sign In").should('be.disabled')
  })

  it('checkbox işaretlenmemiş iken buton disabled oluyor mu?', () => {
    cy.visit('http://localhost:5174/')
    cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
    cy.get('[data-cy="button-input"]').should('be.disabled')
  })
})