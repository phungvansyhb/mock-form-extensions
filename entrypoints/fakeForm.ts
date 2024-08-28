import { faker } from '@faker-js/faker'

export default defineContentScript({
    matches: ['*://*/*'],
    main() {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.value = faker.animal.cat()
        })
    }
});