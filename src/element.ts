type Element = HTMLElement | DocumentFragment;

/**
 * Creates an element with the given tag name and attributes.
 * @param tag
 * @param attributes
 * @param elements
 */
export function el(tag: string, attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLElement {
    const elem = document.createElement(tag);

    // Assigns the attributes to the element
    Object.keys(attributes).forEach((key: string) => elem.setAttribute(key, attributes[key]));

    // Append children to elem
    elements.forEach((child) => {
        if (child) {
            elem.appendChild(child);
        }
    });
    
    return elem;
}

/**
 * Creates a fragment element with the given tag name and attributes.
 * @param value
 */
export function fragment(value: string): DocumentFragment {
    const fragment = document.createDocumentFragment();
    fragment.textContent = value;

    return fragment;
}

/**
 * Creates a button element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function button(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLButtonElement {
    const button = el('button', attributes, ...elements) as HTMLButtonElement;

    return button;
}

/**
 * Creates a div element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function div(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLDivElement {
    return el('div', attributes, ...elements) as HTMLDivElement;
}

/**
 * Creates a ul element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function ul(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLUListElement {
    return el('ul', attributes, ...elements) as HTMLUListElement;
}

/**
 * Creates a span element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function span(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLUListElement {
    return el('span', attributes, ...elements) as HTMLUListElement;
}

/**
 * Creates list items element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function li(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLLIElement {
    return el('li', attributes, ...elements) as HTMLLIElement;
}

/**
 * Creates an anchor element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function a(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLAnchorElement {
    return el('a', attributes, ...elements) as HTMLAnchorElement;
}

/**
 * Creates a image element with the given attributes and children.
 * @param attributes
 * @param elements
 */
export function img(attributes: {[key: string]: string} = {}, ...elements: (Element | null)[]): HTMLImageElement {
    return el('img', attributes, ...elements) as HTMLImageElement;
}