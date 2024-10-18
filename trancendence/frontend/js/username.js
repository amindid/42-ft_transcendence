export class UserName extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = '<div class="user-name"> AMINE </div>';
	}
}

customElements.define("user-name", UserName);