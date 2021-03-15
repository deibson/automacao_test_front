module.exports = class Page {
    open (path = '') {
        return browser.url(`https://www.livelo.com.br/${path}`)
    }

    clear () {
        browser.deleteAllCookies
    }
}
