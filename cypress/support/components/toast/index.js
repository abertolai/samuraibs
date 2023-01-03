import { el } from "./elements";

class Toast {
  shouldHaveText(expectMessage) {
    cy.get(el.toast)
      .should("be.visible")
      .find("p")
      .should("have.text", expectMessage);
  }
}

export default new Toast();
