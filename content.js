

function first() {
    let firstButton = document.querySelector('[class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view mn-connection-card__dropdown-trigger artdeco-button--tertiary artdeco-button--muted artdeco-button--circle p1"]')
    console.log("first button: ", firstButton)
    if (firstButton) {
        firstButton.click()
    }

}

function second() {
    let secondButton = document.querySelector('[class="display-flex align-items-center t-14 t-black--light t-normal"]')
    console.log("second button: ", secondButton)
    if (secondButton) { 
        secondButton.click()
    }
}

function third() {
    let thirdButton = document.querySelector('[class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view artdeco-modal__confirm-dialog-btn"]')
    console.log("third button: ", thirdButton)
    if (thirdButton) {
        thirdButton.click()
    }
}
for (let i =0; i<100; i++) {
setTimeout(first, 4000 + i*3000)
setTimeout(second, 5000 + i*3000)
setTimeout(third, 6000 + i*3000)
}