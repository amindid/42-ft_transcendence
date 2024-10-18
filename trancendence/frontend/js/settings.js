
export class SettingComponent extends HTMLElement
{
	constructor()
	{
		super();
	}
	connectedCallback()
	{
		this.innerHTML = `<link rel="stylesheet" href="../css/settings.css">
		<script src="../js/settings.js"> </script>
		<div class="settings">
			<sound-notificartion>
			</sound-notificartion>
			<div class="settings1">
				<div class="img_">
					<img src="../images/img-settings.png" alt="img" height="120%" width="100%">
				</div>
				<div class="div1_">
					<div class="div2_">
						<div class="div3_">
							<img src="../images/image-player.svg" alt="profile" width="100%" height="100%">
						</div>
					</div>
				</div>
				<div class="change_profile">
					<img src="../images/Camera.svg" alt="profile" width="70%" height="70%">
				</div>
				<div class="div-account-details">
					<div class="empty"></div>
					<div class="account-details_">
						<div id="plyername">
							<h1> EMOHAMEDD </h1>
						</div>
						<div id="account-details">
							<div id="print-account-details">
								<h1> Account details</h1>
							</div>
							<div id="edit">
								<div id="username">
									<div id="printusername">
										<h1> Username </h1>
									</div>
									<div id="edit_username">
										<input class="input_username" type="text"> </input>
									</div>
								</div>
								<div id="username">
									<div id="printusername">
										<h1> Full Name </h1>
									</div>
									<div id="edit_username">
										<input class="input_username" type="text"> </input>
									</div>
								</div>
								<div id="username">
									<div id="printemail">
										<h1> Email </h1>
									</div>
									<div id="edit_username">
										<input class="input_username" type="text" readonly> </input>
									</div>
								</div>
								<div id="logout_delete">
									<div class="logout">
										<h2> LOG OUT</h2>
									</div>
									<div class="delete">
										<h2> DELETE MY ACCOUNT</h2>
									</div>
								</div>
								<div id="switch">
										<a id="click-switch">
											<img src="../images/icon-park-outline_switch.svg" alt="icon" width="60%" height="100%">
										</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`
	}
}

customElements.define("setting-component", SettingComponent);

// function to_settings2()
// {	
// 	const bodyContent = document.querySelector("setting-component");
// 	fetch('../html/settings2.html')
// 	.then(response => response.text())
// 	.then(data => {
// 		bodyContent.innerHTML = data;
// 	})
// 	.catch(error => {
// 		console.error('Error fetching the HTML file:', error);
// 	});
// }
