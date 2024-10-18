import { SoundNotification } from './sound_notification.js' ;

export class Home extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML = `<link rel="stylesheet" href="../css/home.css">
		<div class="section2">
			<sound-notificartion>
			</sound-notificartion>
			<!-- <div class="section2-1">
				<div class="micbar">
					<img src="../images/mic_icon.svg" alt="mic">
					<img src="../images/mute_icon.svg" alt="mic">
					<img src="../images/info_btn.svg" alt="mic">
				</div>
				<div class="diamond-notification">
					<div class="diamond">
						<div>
							<h1>1</h1>
						</div>
						<div>
							<img src="../images/diamond.svg" alt="diamond" >
						</div>
					</div>
					<div class="notification circle">
						<img src="../images/material-symbols_inbox.svg" alt="diamond" >
					</div>
				</div>
			</div> -->
		<div id="section2-2">
			<div id="player">
				<div class="runk">
					<h1>10</h1>
				</div>
				<div class="color1">
					<div class="color2">
						<div class="imgplayer">
							<img src="../images/image-player.svg" alt="profile" width="100%" height="100%">
						</div>
					</div>
				</div>
				<div class="playername">
					<div id="rectangl">
			
					</div>
				</div>
			</div>
			<div class="PLAY_">
				<div class="PLAY_1">
					<h1>play</h1>
				</div>
			</div>
			<div class="play">
				<div class="tournement">
					<img src="../images/tournement.svg" alt="game" width="100%" height="100%">
				</div>
				<div class="local">
					<img src="../images/local.svg" alt="game" width="100%" height="100%">
					
				</div>
				<div class="online">
					<img src="../images/online.svg" alt="game" width="100%" height="100%">
		
				</div>
			</div>
		</div>
		</div>
		`

		// function print_data_user()
		// {
		// 	fetch('http://localhost:2000/users/')
		// 		.then(response => response.json())
		// 		.then(users => {
		// 			const user_name = document.getElementById('rectangl');
		// 			user_name.innerHTML = '';
		// 			users.forEach(user => {
		// 				if (user.id == 1)
		// 				{
		// 					user_name.innerHTML = `<h1> ${user.name} </h1>`
		// 				}
		// 			});
		// 		})
		// };
		// print_data_user();
	}
}

customElements.define("home-element", Home);
