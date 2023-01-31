import dashPage from "../support/pages/dashboard";
import { customer, samurai, appointment } from "../support/factories/dash";

describe("dashboard", function () {
  context("quando o cliente faz um agendamento no app mobile", function () {
    before(function () {
      cy.postUser(samurai);
      cy.postUser(customer);

      cy.apiLogin(customer);
      cy.setProviderId(samurai.email);
      cy.createAppointment(appointment.hour);
    });

    it("o mesmo deve ser exibido no dashboard", function () {
      const date = Cypress.env("appointmentDate");
      //cy.uiLogin(samurai);
      cy.apiLogin(samurai, true);

      dashPage.calendarShouldBeVisible();
      dashPage.selectDay(date);
      dashPage.appointmentShouldBeVisible(customer, appointment.hour);
    });
  });
});
