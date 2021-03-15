const assert = require('assert');

class PageCar {

    get car () {
        return $('#CC-cart-list > div.cart-list__header > h1')
    }

    get itemCar () {
        return $('#cc-cart-item-0 > div.cart-list__prodinfo').
            $('//a[@class="cart-list__subtitle body-text body-text--small cart-list__text--blue"]')
    }

    get spotsItemCar () {
        return $('//*[@id="cc-cart-item-0"]/div[3]/span[2]')
    }

    get removeItemCar () {
        return $('//*[@id="cc-cart-item-0"]/div[2]/a[1]')
    }

    verifyStore (dataProduct) {
        this.car.waitForDisplayed({ timeout: 10000 })
        assert.equal(this.car.getText(), 'Seu carrinho')
        assert.equal(this.spotsItemCar.getText().
            replace(/\s/g, ''), dataProduct['spots'].replace(/\s/g, '') + 'Pontos')
    }

    removeProduct () {
        this.removeItemCar.click()
    }
}

module.exports = new PageCar()
