// import { RightBar } from './right-bar.js';
import { BodyComponent } from './component.js';

// import { BodyCenter } from './body_center.js';
// import { LeftBare } from './left-bar.js';
import { renderRightBar } from './right-bar.js';
import { renderLeftBar } from './left-bar.js';
import { renderBodyCenter } from './body_center.js';

class Dashboard {
	constructor() {
		this.render();
	}
	render() {
		this.changebackground()
		const page = document.createDocumentFragment();
		page.appendChild(renderLeftBar());
		page.appendChild(renderBodyCenter());
		// page.appendChild(new RightBar);
		page.appendChild(renderRightBar());
		// document.body.appendChild(page);
		return page;
	}
	changebackground() {
		const body = document.body
		body.style.backgroundImage = "";
		body.style.alignItems = 'unset';
	}
}
export function renderDashboard() {
	const page = new Dashboard();
	return page.render();
	// new Dashboard();
}