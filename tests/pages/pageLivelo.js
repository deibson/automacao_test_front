const page = require('./page')

class PageLivelo extends page {

    open () {
        return super.open()
    }

    clear () {
        return super.clear()
    }

    get menu () {
        return $('#ul-menus__listLeft')
    }

    component (menu, component) {
        let elementName = component.normalize('NFD').
            replace(/[\u0300-\u036f]/g, '-')

        if (elementName.indexOf('-') !== -1) {
            const substr1 = elementName.substr(0, elementName.search('-') - 1)
            const substr2 = elementName.substr(elementName.search('-') + 1, elementName.length)
            const obj1 = menu.$(`//*[contains(text(), "${substr1}")]`)
            const obj2 = menu.$(`//*[contains(text(), "${substr2}")]`)

            if (obj1.elementId === obj2.elementId) {
                elementName = (elementName.substr(0, elementName.search('-') - 1) > substr2.length) ?
                    substr1 :
                    substr2
            }
            return menu.$(`//*[contains(text(), "${elementName}")]`)
        }
        return menu.$(`//*[contains(text(), "${component}")]`)
    }

    selectMenu (colletion, category, segment, option) {
        let component = this.component(this.menu, colletion)
        component.moveTo()
        component = this.component(component, category)
        component.moveTo()
        component = this.component(component, segment)
        component.moveTo()
        component = this.component(component, option)
        component.click()
    }
}

module.exports = new PageLivelo()
