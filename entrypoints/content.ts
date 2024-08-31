// import {ContentScriptContext, ShadowRootContentScriptUi} from 'wxt/client';
import { faker } from '@faker-js/faker'

// const ID_POPUP = 'wxt-popup'

export const ID_HIGH_LIGHT_ELEMENT = 'highlight-box-fake-form'

// export const DATA_POPUP = 'data-popup'

export  type InputType = {
    name: string | string[] | null,
    type: string,
    hidden: boolean,
    value: string | null
    disable : boolean
}


export default defineContentScript({
    matches: ['*://*/*'],
    runAt: 'document_idle',
    async main(ctx) {
        const divElement = document.createElement('section')
        divElement.id = ID_HIGH_LIGHT_ELEMENT
        divElement.style.backgroundColor = 'rgba(17, 240, 236,0.15)'
        divElement.style.outline = '2px solid cyan'
        divElement.style.outlineOffset = '6px'
        divElement.style.shapeOutside = 'rect(4 4 4 4)'
        divElement.style.position = 'absolute'
        divElement.style.pointerEvents = 'none'
        document.body.appendChild(divElement);

        document.addEventListener('mouseover', (event) => {
            if (event.shiftKey) {
                const selectedElement = event.target as HTMLElement;
                if (selectedElement) {
                    const rect = selectedElement.getBoundingClientRect();
                    divElement.style.display = 'block'
                    divElement.style.left = rect.left + 'px'
                    divElement.style.top = rect.top + 'px'
                    divElement.style.width = rect.width + 'px'
                    divElement.style.height = rect.height + 'px'
                }
            } else {
                divElement.style.display = 'none'
            }
        });
        document.addEventListener('click', async (event) => {
            if (event.shiftKey) {
                const selectedElement = event.target as HTMLElement;
                fillInputs(selectedElement)
            }
        })

    },
});

function fillInputs(element: HTMLElement) {
    // check if element is input or contain inputs
    if (element.tagName.toLowerCase() === 'input') {
        const input = element as HTMLInputElement
        randomValue(input)
    } else {
        const inputs = element.querySelectorAll('input')
        inputs.forEach(input => {
            randomValue(input)
        })
    }

}
function randomValue(input : HTMLInputElement) {
    if(!input.disabled && !input.hidden){
        input.value = faker.lorem.word()
    }
}


// function createUI(ctx: ContentScriptContext, position: {
//     top: number,
//     left: number,
//     height: number
// }, data: InputType[]) {
//     return createShadowRootUi(ctx, {
//         name: "shadow-root-ui",
//         position: "overlay",
//         anchor: "body",
//         append: "first",
//         onMount: (uiContainer, _, shadowContainer) => {
//
//             const insertedNode = `<div data-popover id=${ID_POPUP} role="tooltip" class="absolute
//                 z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white  border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
//             <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
//             <h3 class="font-semibold text-gray-900 dark:text-white">Mock form</h3>
//              </div>
//               <div class="px-3 py-2">
//               ${data.length > 0 ?
//                 `<div class="text-gray-900 dark:text-white">${ JSON.stringify(data,null,2)} </div>` :
//                 '<div class="text-gray-900 dark:text-white">No form founded, click on element that contains inputs</div>'}
//               </div>
//             <div data-popper-arrow></div>
//           </div>`
//             const div = document.createElement("div");
//             div.innerHTML = insertedNode;
//             shadowContainer.style.position = "absolute";
//             shadowContainer.style.top = position.top + "px";
//             shadowContainer.style.left = position.left + "px";
//             uiContainer.append(div);
//         },
//     });
// }