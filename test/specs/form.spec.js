const FormScreen = require("../screens/acess.forms_screens")

let initial = 'Form components'

describe('Acessar forms', () => {
    it('Deve acessa o Forms', async () => {
        await FormScreen.gotToForm()
    });

    it('Deve cadastrar um Forms', async () => {

        await FormScreen.gotToForm()

        const Text = '~text-input'
        const Botton_click = '~Dropdown'
        const selector = 'new UiSelector().text("Appium is awesome").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selector}`)

        await $(Text).setValue('Primeiro Teste')
        await $(Botton_click).click()
        await button.click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await $('~button-Active').click()

        expect (await $('//android.widget.TextView').getText(initial))

    })

})