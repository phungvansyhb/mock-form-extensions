
export default defineContentScript({
    matches: ['*://*/*'],
    main() {
        const inputs = document.querySelectorAll('input')
        let forms:Record<string,any> = {}
        inputs.forEach(input => {
            forms[input.name] = input.name
        })
        console.log(inputs)
        browser.runtime.sendMessage({forms})
    }
});