import { el } from "./elements";

class Toast {
  shouldHaveText(expectMessage) {
    cy.get(el.toast, { timeout: 10000 })
      .should("be.visible")
      .should("have.css", "opacity", "1", { timeout: 1500 })
      .find("p")
      .should("have.text", expectMessage);
  }
}

export default new Toast();
