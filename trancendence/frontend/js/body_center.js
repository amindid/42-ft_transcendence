// import { Toper } from "./toper.js";
// import { PlayMods } from "./play-mods.js";
// import { UserName } from "./username.js";
// import { PlayerPhoto } from "./playerPhoto.js";
import { renderToper } from './toper.js'
import { renderPlayerPhoto } from './playerPhoto.js'
import { renderPlayMods } from './play-mods.js'
class BodyCenter {
	constructor() {
		// super();
		this.render();
	}
	// connectedCallback(){
		// this.render();
	// }
	render () {
		const body_center = document.createDocumentFragment();
		const content = document.createElement('span');
		content.className = 'contenue';
		content.appendChild(renderToper());
		content.appendChild(renderPlayerPhoto());
		const userName = document.createElement('div');
		userName.className = 'user-name';
		userName.textContent = "amine";
		content.appendChild(userName);
		content.appendChild(renderPlayMods());
		body_center.appendChild(content);
		return body_center;
	}
}
// customElements.define("body-center", BodyCenter, {extends: 'span'});

export function renderBodyCenter() {
	const body_center = new BodyCenter();
	return body_center.render();
}