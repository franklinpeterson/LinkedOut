

function getElement() {
    const firstButton = document.querySelector('[id="ember44"]')
    console.log("first button: ", firstButton)
    firstButton.click()

}

function second() {
    const secondButton = document.querySelector('[class="display-flex align-items-center t-14 t-black--light t-normal"]')
    console.log("second button: ", secondButton)
    secondButton.click()
}

function third() {
    const thirdButton = document.querySelector('[class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view artdeco-modal__confirm-dialog-btn"]')
    thirdButton.click()
}

function reload () {
    window.location.reload()
}
setTimeout(getElement, 2000)
setTimeout(second, 3000)
setTimeout(third, 4000)
setTimeout(reload, 5000)