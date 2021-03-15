const assert = require('assert');

class PageCategory {

    get productListing () {
        return $('#CC-productListing > h2')
    }

    get produto () {
        return $('#wi6200020-endeca-product-listing-points-id > div:nth-child(1) > .product-list__element--link')
    }

    checkCategory (option) {
        this.productListing.waitForDisplayed
        assert.equal(this.productListing.getText(), option)
    }

    selectProduct () {
        this.produto.moveTo()
        this.produto.click()
    }
}

module.exports = new PageCategory()
