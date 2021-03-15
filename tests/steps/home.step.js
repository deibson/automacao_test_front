const { Given, When, Then,  } = require('@cucumber/cucumber')
const pageLivelo = require('../pages/pageLivelo')
const pageCategory = require('../pages/pageCategory')
const pageProduct = require('../pages/pageProduct')
const pageCar = require('../pages/pageCar')
let dataProduct;

Given('que eu acesso a página Livelo', () => {
    pageLivelo.open()
    pageLivelo.clear()
})

When('que eu selecino um menu {string}, {string}, {string}, {string}', (colletion, category, segment, option) => {
    pageLivelo.selectMenu(colletion, category, segment, option)
})

Then('que eu verifico a classificação {string}', (option) => {
    pageCategory.checkCategory(option)
})

When('que eu seleciono um produto', () => {
    pageCategory.selectProduct()
})

Then('que eu adiciono um produto no carrinho', () => {
    dataProduct = pageProduct.dataProduct()
    pageProduct.addProducts()
})

Then('que eu verifico o produto no carrinho', () => {
    pageCar.verifyStore(dataProduct)
})

Then('que eu removo o poduto do carrinho', () => {
    pageCar.removeProduct()
})

