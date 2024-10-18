import { Home } from './home.js';
// import { BodyCenter } from './body_center.js';


export class BodyComponent extends HTMLElement
{
	constructor()
	{
		super();
	}
	connectedCallback()
	{
		const bodyContent = document.querySelector("body-component");
		bodyContent.innerHTML = "";
		const bodycenter = new BodyCenter;
		bodyContent.appendChild(bodycenter);
	}
}

customElements.define("body-component", BodyComponent);
