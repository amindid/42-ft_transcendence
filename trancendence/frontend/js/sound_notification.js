
export class SoundNotification extends HTMLElement
{
	constructor()
	{
		super();
	}
	connectedCallback()
	{
		this.innerHTML = `
				<div class="micbar">
					<img src="../images/mic_icon.svg" alt="mic">
					<img src="../images/mute_icon.svg" alt="mic">
					<img src="../images/info_btn.svg" alt="mic">
				</div>
				<div class="diamond-notification">
					<div class="diamond">
						<div>
							<h1>1337</h1>
						</div>
						<div>
							<img src="../images/diamond.svg" alt="diamond" >
						</div>
					</div>
					<div class="notification circle">
						<img src="../images/material-symbols_inbox.svg" alt="diamond" >
					</div>
				</div>`;
	}
}

customElements.define("sound-notificartion", SoundNotification);
