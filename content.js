// Add frontend functionality with a background script and chrome.tabs

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

function runDelete() {
    console.log('LINKEDOUT: "Ran successfully".')
    for (let i =0; i<100; i++) {
        setTimeout(first, 4000 + i*3000)
        setTimeout(second, 5000 + i*3000)
        setTimeout(third, 6000 + i*3000)

    }
}

function runConnect() {
    connect();
}

function connect() {
    let connectButton = document.querySelectorAll('[class="yyosfl1 h8e4ml0 _1xoe5hd0 _139m7k1h0 _1s9oaxg7 _1s9oaxgi yyosfl4 yyosfl3 _1xoe5hd1e cnutht0 cnutht1ew _1k2lxme14 _1ptbkx613c"]')
    i = 0
    for (let button of connectButton) {
        i++;
        setTimeout(() => {
            button.click()
        }, 1500 + i*1500)
        
    }
}








chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "run") {
        runDelete()
    }
    if (message.action === "connect") {
        runConnect()
    }
})