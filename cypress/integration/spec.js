/// <reference types="cypress" />
describe('type into an iframe (wysiwyg editor)', () => {
	const MESSAGE = 'this is my message'

	before(() => {
		cy.visit('http://localhost:5000')
		cy.get('iframe#mytextarea_ifr').then(function($iframe) {
			const $body = $iframe.contents().find('body')

			// Clearing the editor first will prevent the error from getting thrown
			// cy.wrap($body)
			// 	.find('p')
			// 	.clear()

			cy.wrap($body)
				.find('p')
				.type(MESSAGE)
		})
	})

	it('should type a value into the editor', () => {
		cy.get('iframe#mytextarea_ifr').then(function($iframe) {
			const $body = $iframe.contents().find('body')
			cy.wrap($body).should('include.text', MESSAGE)
		})
	})
})
