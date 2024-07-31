const constante= require("../../cypress/utils/constantes")
const selectoresCompra= require("../../cypress/utils/selectoresCompra")
const selectorLogin = require("../../cypress/utils/selectoresLogin");

describe('Casos automation practice', () => {

    beforeEach(() => {
      cy.visit('')
      cy.fixture("user.json").as("users")  
      cy.get("@users").then((user)=>{
        cy.login(user.email,user.password)
      })
    })
    afterEach(function(){
      cy.get(selectorLogin.element5.botonCerrarSesion).should("be.visible").click()
    })
    it('Verificar que el usuario pueda iniciar sesión correctamente y que la identidad del usuario sea verificada después del inicio de sesión.', () => {
      cy.get(selectorLogin.element6.labelUsuario).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.usuario);
      })
    })
    it('Verificar que el sistema impida la finalización de una compra si el usuario no acepta los términos y condiciones.', () => {
      cy.get(selectoresCompra.element1.seccionWomen).click()
      cy.get(selectoresCompra.element13.colorSinDisponibilidad).should("be.visible").click({ force: true })
      cy.get(selectoresCompra.element14.colorDisponible).should("be.visible").click({ force: true })
      cy.get(selectoresCompra.element14.colorDisponible).click({ force: true })
      cy.get(selectoresCompra.element2.botonAddToCart).should("be.visible").click({ force: true })
      cy.get(selectoresCompra.element3.labelProductoAgregado).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeProductoAgregado);
      })
      cy.get(selectoresCompra.element4.botonProceedToCheckout).should("be.visible").click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get(selectoresCompra.element6.popupAceptacionTerminos).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeAceptarTerminos);
      })
      cy.get(selectoresCompra.element7.botonCerrarAceptacionTerminos).should("be.visible").click()
    })
    it('Verificar que un usuario pueda completar el proceso de compra satisfactoriamente desde la selección de 1 producto hasta la confirmación de la compra, (Pay by bank wire) .', () => {
      cy.get(selectoresCompra.element1.seccionWomen).click()
      cy.get(selectoresCompra.element13.colorSinDisponibilidad).click({ force: true })
      cy.get(selectoresCompra.element14.colorDisponible).click({ force: true })
      cy.get(selectoresCompra.element14.colorDisponible).click({ force: true })
      cy.get(selectoresCompra.element2.botonAddToCart).click({ force: true })
      cy.get(selectoresCompra.element3.labelProductoAgregado).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeProductoAgregado);
      })
      cy.get(selectoresCompra.element4.botonProceedToCheckout).click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).click()
      cy.get(selectoresCompra.element8.checkboxTerminosCondiciones).click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).click()
      cy.get(selectoresCompra.element9.botonMetodoBank).click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).click()
      cy.get(selectoresCompra.element10.labelCompraCompletada).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeOrdenCompletada);
      })
    })
    it('Verificar que un usuario pueda completar el proceso de compra satisfactoriamente desde la selección de 2 producto hasta la confirmación de la compra, (Pay by check).', () => {
      cy.get(selectoresCompra.element1.seccionWomen).click()
      cy.get(selectoresCompra.element13.colorSinDisponibilidad).click({ force: true })
      cy.get(selectoresCompra.element14.colorDisponible).click({ force: true })
      cy.get(selectoresCompra.element14.colorDisponible).click({ force: true })
      cy.get(selectoresCompra.element2.botonAddToCart).click({ force: true })
      cy.get(selectoresCompra.element3.labelProductoAgregado).invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeProductoAgregado);
      })
      cy.get(selectoresCompra.element4.botonProceedToCheckout).should("be.visible").click()
      cy.get(selectoresCompra.element11.seccionDresses).should("be.visible").click()
      cy.get(selectoresCompra.element12.prendaSummerDress).should("be.visible").click()
      cy.wait(1000)
      cy.get(selectoresCompra.element15.colorDisponibleSegunda).should("be.visible").click()
      cy.get(selectoresCompra.element2.botonAddToCart).should("be.visible").click()
      cy.get(selectoresCompra.element4.botonProceedToCheckout).should("be.visible").click()
      cy.get(selectoresCompra.element16.precioPrimeraPrenda).should("be.visible").invoke('text').then((text1) => {
        const value1 = parseFloat(text1.replace('$', ''));
        cy.get(selectoresCompra.element17.precioSegundaPrenda).should("be.visible").invoke('text').then((text2) => {
          const value2 = parseFloat(text2.replace('$', ''));
          const total = value1 + value2;
          cy.get('#total_price').invoke('text').then((totalText) => {
            const totalValue = parseFloat(totalText.replace('$', ''));
            cy.get('#total_shipping').invoke('text').then((envio) => {
              const precioEnvio = parseFloat(envio.replace('$', ''));
              expect(total+precioEnvio).to.equal(totalValue);
            })
          })
        })
      })
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get(selectoresCompra.element8.checkboxTerminosCondiciones).click()
      cy.get(selectoresCompra.element5.botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get('.cheque').should("be.visible").click()
      cy.get(selectoresCompra.element18.labelByCheck).should("be.visible").invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeMetodoPago);
      })
      cy.get(selectoresCompra.element5. botonProceedToCheckoutSummary).should("be.visible").click()
      cy.get(selectoresCompra.element10.labelCompraCompletada).should("be.visible").invoke('text').then((texto) => {
        expect(texto.trim()).to.equal(constante.mensajeOrdenCompletada);
      })
    })
  })
