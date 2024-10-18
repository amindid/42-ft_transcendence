export class Test extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = ` TEST TEST`;
	}
}

customElements.define("test-page", Test);