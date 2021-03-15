class PageProduct {

    get addProduct () {
        return $('#CC-prodDetails-addToCart > button')
    }

    get nameProduct () {
        return $('#wi4300078-product-header-info-catalog-id > div > h2')
    }

    get spotsProduct () {
        return $('#div-listPrice-02 > div > div > div > span:nth-child(1)')
    }

    dataProduct () {
        this.addProduct.waitForDisplayed
        return {
            name: this.nameProduct.getText(),
            spots: this.spotsProduct.getText()
        }
    }

    addProducts () {
        this.addProduct.click()
    }
}

module.exports = new PageProduct()
