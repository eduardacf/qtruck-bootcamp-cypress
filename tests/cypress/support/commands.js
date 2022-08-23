Cypress.Commands.add('apiResetUser', (instagram) => {
  cy.request({
      url: 'http://localhost:3333/helpers-reset',
      method: 'DELETE',
      qs: { instagram: instagram }
  }).then(response => {
      expect(response.status).to.eql(204)
  })
})

Cypress.Commands.add('apiCreateUser', (payload)=> {
  cy.apiResetUser(payload.instagram)

  cy.request({
      url: 'http://localhost:3333/signup',
      method: 'POST',
      body: payload
  }).then(response => {
      expect(response.status).to.eql(201)
  })
})
