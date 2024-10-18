class PlayerPhoto {
	constructor(){
		// super();
		this.render();
	}
	// connectedCallback() {
	// 	this.render();
	// }

	render() {
		const content = document.createDocumentFragment();
		const playerphoto = document.createElement('div');
		playerphoto.className = 'photo-box'
		playerphoto.innerHTML = `<div class="hexagon">
		<svg viewBox="0 0 86 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_di_593_16698)">
				<path d="M0.944195 20.1421L10.2761 1.61906H74.2239L83.5558 20.1421L74.1931 41.3813H10.3069L0.944195 20.1421Z" stroke="url(#paint0_linear_593_16698)" stroke-width="1.70833" fill="#51005E"/>
			</g>
			<text class="level" x="43" y="24" dominant-baseline="middle">10</text>
			<defs>
				<filter id="filter0_di_593_16698" x="0" y="0.764893" width="85.3542" height="42.8374" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dx="0.854167" dy="1.36667"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
					<feBlend mode="soft-light" in2="BackgroundImageFix" result="effect1_dropShadow_593_16698"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_16698" result="shape"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dx="0.5125" dy="0.5125"/>
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
					<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
					<feBlend mode="hard-light" in2="shape" result="effect2_innerShadow_593_16698"/>
				</filter>
				<linearGradient id="paint0_linear_593_16698" x1="9.75" y1="2.14724" x2="49.5435" y2="47.3127" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FF00E5"/>
					<stop offset="1" stop-color="#AE009D"/>
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="outer-circle">
		<div class="middle-circle">
			<div class="image-circle">
				<img src="../images/image-player.svg" alt="Inner Circle Image">
			</div>
		</div>
	</div>

	<div class="badge">
		<svg width="100%" height="100%" viewBox="0 0 101 105" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_593_16618)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M31.2612 46.3921H53.4835V87.6005C53.4835 89.0872 51.9188 90.0542 50.589 89.3893L42.3723 85.281L34.1557 89.3893C32.8259 90.0542 31.2612 89.0872 31.2612 87.6005V46.3921Z" fill="#FF00C7"/>
			</g>
			<g filter="url(#filter1_d_593_16618)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M47.9277 46.3921H70.15V87.6005C70.15 89.0872 68.5853 90.0542 67.2555 89.3893L59.0388 85.281L50.8222 89.3893C49.4924 90.0542 47.9277 89.0872 47.9277 87.6005V46.3921Z" fill="#FF00C7"/>
			</g>
			<g filter="url(#filter2_d_593_16618)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5942 53.3364H61.8165V94.5448C61.8165 96.0316 60.2518 96.9986 58.922 96.3337L50.7053 92.2253L42.4887 96.3337C41.1589 96.9986 39.5942 96.0316 39.5942 94.5448V53.3364Z" fill="white"/>
			</g>
			<mask id="mask0_593_16618" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="39" y="53" width="23" height="44">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5942 53.3364H61.8165V94.5448C61.8165 96.0316 60.2518 96.9986 58.922 96.3337L50.7053 92.2253L42.4887 96.3337C41.1589 96.9986 39.5942 96.0316 39.5942 94.5448V53.3364Z" fill="white"/>
			</mask>
			<g mask="url(#mask0_593_16618)">
			<rect x="45.1499" y="53.3364" width="11.1111" height="44.4444" fill="#FF02C7"/>
			</g>
			<path style="mix-blend-mode:multiply" opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M46.7057 23.7014C49.1809 22.2724 52.2305 22.2724 54.7057 23.7014L74.3704 35.0548C76.8456 36.4839 78.3704 39.1249 78.3704 41.983V64.6899C78.3704 67.548 76.8456 70.189 74.3704 71.6181L54.7057 82.9715C52.2305 84.4006 49.1809 84.4006 46.7057 82.9715L27.041 71.6181C24.5658 70.189 23.041 67.548 23.041 64.6899L23.041 41.983C23.041 39.1249 24.5658 36.4839 27.041 35.0548L46.7057 23.7014Z" fill="#7705A4"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M75.7055 32.4683C75.7055 31.6505 76.2034 30.915 76.9627 30.6113L81.0042 28.9947C81.7925 28.6794 82.6499 29.2599 82.6499 30.1089V50.5935C82.6499 51.4113 82.152 52.1467 81.3927 52.4504L75.7055 54.7253V32.4683Z" fill="#BF00C3" stroke="url(#paint0_linear_593_16618)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<mask id="mask1_593_16618" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="74" y="27" width="10" height="29">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M75.7055 32.4683C75.7055 31.6505 76.2034 30.915 76.9627 30.6113L81.0042 28.9947C81.7925 28.6794 82.6499 29.2599 82.6499 30.1089V50.5935C82.6499 51.4113 82.152 52.1467 81.3927 52.4504L75.7055 54.7253V32.4683Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</mask>
			<g mask="url(#mask1_593_16618)">
			<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter3_i_593_16618)">
			<path d="M76.3999 40.6049L84.3059 37.3107C84.6599 37.1632 84.8273 36.7567 84.6798 36.4026C84.5323 36.0486 84.1257 35.8812 83.7717 36.0287L75.4383 39.5009C75.1796 39.6087 76.3999 40.6049 76.3999 40.6049Z" fill="#C200E2"/>
			</g>
			<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter4_i_593_16618)">
			<path d="M76.3999 48.9384L84.3059 45.6442C84.6599 45.4967 84.8273 45.0902 84.6798 44.7361C84.5323 44.3821 84.1257 44.2147 83.7717 44.3622L75.4383 47.8344C75.1796 47.9422 76.3999 48.9384 76.3999 48.9384Z" fill="#C200E2"/>
			</g>
			<g opacity="0.04">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M56.7035 19.2237C52.9907 17.0801 48.4163 17.0801 44.7035 19.2237L26.5667 29.695C22.8538 31.8386 20.5667 35.8001 20.5667 40.0873V61.0299C20.5667 65.3171 22.8538 69.2786 26.5667 71.4222L44.7035 81.8935C48.4163 84.0371 52.9907 84.0371 56.7035 81.8935L74.8403 71.4222C78.5531 69.2786 80.8403 65.3171 80.8403 61.0299L80.8403 40.0873C80.8403 35.8001 78.5531 31.8386 74.8403 29.695L56.7035 19.2237Z" fill="#7705A4" style="mix-blend-mode:multiply"/>
			</g>
			</g>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7057 32.4683C25.7057 31.6505 25.2078 30.915 24.4485 30.6113L20.4069 28.9947C19.6187 28.6794 18.7612 29.2599 18.7612 30.1089V50.5935C18.7612 51.4113 19.2591 52.1467 20.0184 52.4504L25.7057 54.7253V32.4683Z" fill="#BF00C3" stroke="url(#paint1_linear_593_16618)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<mask id="mask2_593_16618" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="17" y="27" width="10" height="29">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7057 32.4683C25.7057 31.6505 25.2078 30.915 24.4485 30.6113L20.4069 28.9947C19.6187 28.6794 18.7612 29.2599 18.7612 30.1089V50.5935C18.7612 51.4113 19.2591 52.1467 20.0184 52.4504L25.7057 54.7253V32.4683Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</mask>
			<g mask="url(#mask2_593_16618)">
			<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter5_i_593_16618)">
			<path d="M25.0112 40.6049L17.1053 37.3107C16.7512 37.1632 16.5838 36.7567 16.7313 36.4026C16.8788 36.0486 17.2854 35.8812 17.6395 36.0287L25.9728 39.5009C26.2316 39.6087 25.0112 40.6049 25.0112 40.6049Z" fill="#C200E2"/>
			</g>
			<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter6_i_593_16618)">
			<path d="M25.0112 48.9384L17.1053 45.6442C16.7512 45.4967 16.5838 45.0902 16.7313 44.7361C16.8788 44.3821 17.2854 44.2147 17.6395 44.3622L25.9728 47.8344C26.2316 47.9422 25.0112 48.9384 25.0112 48.9384Z" fill="#C200E2"/>
			</g>
			<g opacity="0.04">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7037 19.2237C48.4165 17.0801 52.9909 17.0801 56.7037 19.2237L74.8406 29.695C78.5534 31.8386 80.8406 35.8001 80.8406 40.0873V61.0299C80.8406 65.3171 78.5534 69.2786 74.8406 71.4222L56.7037 81.8935C52.9909 84.0371 48.4165 84.0371 44.7037 81.8935L26.5669 71.4222C22.8541 69.2786 20.5669 65.3171 20.5669 61.0299L20.5669 40.0873C20.5669 35.8001 22.8541 31.8386 26.5669 29.695L44.7037 19.2237Z" fill="#7705A4" style="mix-blend-mode:multiply"/>
			</g>
			</g>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M70.1501 25.4322C70.1501 24.1034 68.8783 23.1441 67.6007 23.5091L50.7057 28.3363L33.8107 23.5091C32.533 23.1441 31.2612 24.1034 31.2612 25.4322V44.3918C31.2612 45.4964 32.1567 46.3918 33.2612 46.3918H68.1501C69.2547 46.3918 70.1501 45.4964 70.1501 44.3918V25.4322Z" fill="#BF00C3" stroke="url(#paint2_linear_593_16618)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M46.7057 20.9237C49.1809 19.4946 52.2305 19.4946 54.7057 20.9237L74.3704 32.2771C76.8456 33.7061 78.3704 36.3472 78.3704 39.2053V61.9121C78.3704 64.7702 76.8456 67.4113 74.3704 68.8403L54.7057 80.1937C52.2305 81.6228 49.1809 81.6228 46.7057 80.1937L27.041 68.8403C24.5658 67.4113 23.041 64.7702 23.041 61.9121V39.2053C23.041 36.3472 24.5658 33.7061 27.041 32.2771L46.7057 20.9237Z" fill="url(#paint3_linear_593_16618)" stroke="#9000C3" stroke-opacity="0.4" stroke-width="2"/>
			<g style="mix-blend-mode:multiply" opacity="0.8" filter="url(#filter7_i_593_16618)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M72.4708 35.5427L52.8119 24.1793C51.5085 23.4259 49.9026 23.4259 48.5992 24.1793L28.9403 35.5427C27.6369 36.2961 26.834 37.6885 26.834 39.1953V47.3926L25.4657 49.4475C25.0186 50.1188 25.0186 50.9931 25.4657 51.6645L26.834 53.7193V61.9221C26.834 63.4289 27.6369 64.8213 28.9403 65.5747L48.5992 76.9381C49.9026 77.6915 51.5085 77.6915 52.8119 76.9381L72.4708 65.5747C73.7742 64.8213 74.5771 63.4289 74.5771 61.9221V53.7189L75.9451 51.6645C76.3922 50.9931 76.3922 50.1188 75.9451 49.4475L74.5771 47.3931V39.1953C74.5771 37.6885 73.7742 36.2961 72.4708 35.5427ZM28.2383 53.7188V61.922C28.2383 62.9266 28.7736 63.8548 29.6425 64.3571L49.3014 75.7205C50.1704 76.2228 51.2409 76.2228 52.1099 75.7205L71.7688 64.3571C72.6377 63.8548 73.173 62.9266 73.173 61.922V53.7196L71.8045 51.6645C71.3575 50.9931 71.3575 50.1188 71.8045 49.4475L73.173 47.3924V39.1952C73.173 38.1906 72.6377 37.2624 71.7688 36.7602L52.1099 25.3967C51.2409 24.8945 50.1704 24.8945 49.3014 25.3967L29.6425 36.7602C28.7736 37.2624 28.2383 38.1906 28.2383 39.1952V47.3931L29.6062 49.4475C30.0533 50.1188 30.0533 50.9931 29.6062 51.6645L28.2383 53.7188Z" fill="#E204F6"/>
			</g>
			<path d="M53.1362 20.8192C51.6321 19.9509 49.7791 19.9509 48.2751 20.8192L26.1659 33.584C24.6619 34.4523 23.7354 36.0571 23.7354 37.7938L23.7354 63.3232C23.7354 65.06 24.6619 66.6647 26.1659 67.5331L48.2751 80.2978C49.7791 81.1662 51.6321 81.1662 53.1362 80.2978L75.2453 67.5331C76.7493 66.6647 77.6759 65.06 77.6759 63.3232V37.7938C77.6759 36.0571 76.7493 34.4523 75.2453 33.584L53.1362 20.8192Z" stroke="#9E06E5" stroke-width="2"/>
			<path opacity="0.4" d="M53.1362 80.2981C55.7365 78.7969 57.5789 77.7331 58.6635 77.1069" stroke="white" stroke-width="2" stroke-linecap="round"/>
			<path d="M77.6759 63.3232V37.7938C77.6759 36.0571 76.7493 34.4523 75.2453 33.584L53.1362 20.8192C51.6321 19.9509 49.7791 19.9509 48.2751 20.8192L26.1659 33.584C24.6619 34.4523 23.7354 36.0571 23.7354 37.7938L23.7354 63.3232" stroke="#DB00FF" stroke-width="2" stroke-linecap="round"/>
			<path opacity="0.6" d="M77.6759 37.7938C77.6759 36.0571 76.7493 34.4523 75.2453 33.584L53.1362 20.8192C51.6321 19.9509 49.7791 19.9509 48.2751 20.8192L26.1659 33.584C24.6619 34.4523 23.7354 36.0571 23.7354 37.7938" stroke="#A500DE" stroke-width="2" stroke-linecap="round"/>
			<path opacity="0.6" d="M53.1359 20.8192C51.6319 19.9509 49.7788 19.9509 48.2748 20.8192C48.2748 20.8192 40.9051 25.0741 37.2202 27.2016" stroke="white" stroke-width="2" stroke-linecap="round"/>
			<path d="M48.2748 20.8193C48.2748 20.8193 44.3745 23.0712 42.7476 24.0105" stroke="white" stroke-width="2" stroke-linecap="round"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M48.7056 29.4911C49.9432 28.7766 51.468 28.7766 52.7056 29.4911L67.9506 38.2928C69.1882 39.0074 69.9506 40.3279 69.9506 41.7569V59.3604C69.9506 60.7894 69.1882 62.1099 67.9506 62.8245L52.7056 71.6262C51.468 72.3407 49.9432 72.3407 48.7056 71.6262L33.4606 62.8245C32.223 62.1099 31.4606 60.7894 31.4606 59.3604V41.7569C31.4606 40.3279 32.223 39.0074 33.4606 38.2928L48.7056 29.4911Z" fill="url(#paint4_linear_593_16618)"/>
			<path d="M68.4506 37.4268L53.2056 28.6251C51.6586 27.7319 49.7526 27.7319 48.2056 28.6251L32.9606 37.4268C31.4136 38.32 30.4606 39.9706 30.4606 41.7569V59.3604C30.4606 61.1467 31.4136 62.7973 32.9606 63.6905L48.2056 72.4922C49.7526 73.3854 51.6586 73.3854 53.2056 72.4922L68.4506 63.6905C69.9976 62.7973 70.9506 61.1467 70.9506 59.3604V41.7569C70.9506 39.9706 69.9976 38.32 68.4506 37.4268Z" stroke="#E64AFF" stroke-opacity="0.1" stroke-width="2" style="mix-blend-mode:multiply"/>
			<mask id="mask3_593_16618" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="31" y="28" width="39" height="45">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M48.7056 29.4911C49.9432 28.7766 51.468 28.7766 52.7056 29.4911L67.9506 38.2928C69.1882 39.0074 69.9506 40.3279 69.9506 41.7569V59.3604C69.9506 60.7894 69.1882 62.1099 67.9506 62.8245L52.7056 71.6262C51.468 72.3407 49.9432 72.3407 48.7056 71.6262L33.4606 62.8245C32.223 62.1099 31.4606 60.7894 31.4606 59.3604V41.7569C31.4606 40.3279 32.223 39.0074 33.4606 38.2928L48.7056 29.4911Z" fill="white"/>
			</mask>
			<g mask="url(#mask3_593_16618)">
			<g style="mix-blend-mode:multiply" opacity="0.3">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M50.7055 50.5586L50.7055 50.5585L50.7057 50.5585L50.7056 50.5587L50.7055 50.5586ZM50.7057 50.5584L50.7059 50.5584L62.4907 30.917L70.3475 38.7737L50.7067 50.5582L72.9277 45.0029V56.114L50.706 50.5586L50.7059 50.5587L70.3477 62.3438L62.4909 70.2005L50.7058 50.5587L50.7057 50.5588L56.2612 72.7808H45.1501L50.7056 50.5588L50.7056 50.5587L28.4834 56.1143V45.0031L50.7055 50.5586L50.7054 50.5583L31.064 38.7734L38.9207 30.9167L50.7052 50.5574L45.1499 28.3364H56.261L50.7056 50.5582L50.7057 50.5584ZM50.7057 50.5585L50.7055 50.5585L50.7055 50.5584L50.7057 50.5585ZM50.7057 50.5585L50.7058 50.5586L50.7057 50.5587L50.7057 50.5585ZM31.0637 62.3439L38.9204 70.2007L50.7055 50.5588L31.0637 62.3439Z" fill="#EB00FF"/>
			</g>
			<path opacity="0.4" d="M68.2146 39.2469L51.7473 29.7396C51.1028 29.3674 50.3086 29.3674 49.664 29.7396C47.7273 30.8577 46.355 31.65 45.5472 32.1164C43.866 33.0871 42.4937 33.8793 41.4304 34.4932C39.6007 35.5496 36.8562 37.1342 33.1968 39.2469" stroke="white" stroke-width="2" stroke-linecap="round"/>
			<path opacity="0.4" d="M68.2141 61.8224L51.7469 71.3298C51.1023 71.7019 50.3082 71.7019 49.6636 71.3298" stroke="white" stroke-width="2" stroke-linecap="round"/>
			<path d="M49.6637 29.7393C47.727 30.8574 46.3547 31.6497 45.5469 32.1161" stroke="white" stroke-width="2" stroke-linecap="round"/>
			</g>
			<path d="M51.4528 37.3942C51.263 37.1807 50.991 37.0586 50.7054 37.0586C50.4197 37.0586 50.1477 37.1807 49.9579 37.3942L38.8468 49.8942C38.51 50.2731 38.51 50.8441 38.8468 51.223L49.9579 63.723C50.1477 63.9364 50.4197 64.0586 50.7054 64.0586C50.991 64.0586 51.263 63.9364 51.4528 63.723L62.5639 51.223C62.9007 50.8441 62.9007 50.2731 62.5639 49.8942L51.4528 37.3942Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M50.7054 38.0586L61.8165 50.5586H39.5942L50.7054 38.0586Z" fill="url(#paint5_linear_593_16618)"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M50.7053 63.0586L61.8165 50.5586H39.5942L50.7053 63.0586Z" fill="#D171FF"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M50.7053 38.0586L45.3481 50.5586H56.0624L50.7053 38.0586Z" fill="#DE00E2"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M50.7053 63.0586L45.3481 50.5586H56.0624L50.7053 63.0586Z" fill="url(#paint6_linear_593_16618)"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M65.8594 41.9198L65.1381 41.6354C64.6969 41.4614 64.4804 40.9627 64.6543 40.5216C64.7416 40.3003 64.9168 40.1251 65.1381 40.0378L65.8594 39.7533C66.6912 39.4253 67.3496 38.7669 67.6777 37.9351L67.9621 37.2138C68.1361 36.7726 68.6348 36.556 69.0759 36.73C69.2972 36.8173 69.4724 36.9925 69.5597 37.2138L69.8441 37.9351C70.1722 38.7669 70.8306 39.4253 71.6624 39.7533L72.3837 40.0378C72.8249 40.2118 73.0415 40.7105 72.8675 41.1516C72.7802 41.3729 72.605 41.5481 72.3837 41.6354L71.6624 41.9198C70.8306 42.2479 70.1722 42.9063 69.8441 43.7381L69.5597 44.4594C69.3857 44.9006 68.887 45.1171 68.4459 44.9431C68.2246 44.8559 68.0494 44.6807 67.9621 44.4594L67.6777 43.7381C67.3496 42.9063 66.6912 42.2479 65.8594 41.9198Z" fill="white"/>
			<g filter="url(#filter8_d_593_16618)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M37.6603 63.7807L37.1795 63.5911C36.8854 63.4751 36.741 63.1426 36.857 62.8485C36.9152 62.701 37.0319 62.5842 37.1795 62.526L37.6603 62.3364C38.2149 62.1177 38.6538 61.6787 38.8725 61.1242L39.0622 60.6433C39.1782 60.3492 39.5106 60.2048 39.8047 60.3208C39.9522 60.379 40.069 60.4958 40.1272 60.6433L40.3168 61.1242C40.5355 61.6787 40.9745 62.1177 41.529 62.3364L42.0099 62.526C42.304 62.642 42.4484 62.9745 42.3324 63.2686C42.2742 63.4161 42.1574 63.5329 42.0099 63.5911L41.529 63.7807C40.9745 63.9994 40.5355 64.4384 40.3168 64.9929L40.1272 65.4738C40.0112 65.7679 39.6788 65.9122 39.3847 65.7962C39.2371 65.7381 39.1203 65.6213 39.0622 65.4738L38.8725 64.9929C38.6538 64.4384 38.2149 63.9994 37.6603 63.7807Z" fill="white"/>
			</g>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5377 43.8222L28.9366 43.5851C28.569 43.4401 28.3885 43.0246 28.5335 42.657C28.6062 42.4726 28.7522 42.3266 28.9366 42.2539L29.5377 42.0168C30.2308 41.7434 30.7795 41.1947 31.0529 40.5016L31.29 39.9005C31.435 39.5328 31.8505 39.3524 32.2181 39.4974C32.4026 39.5701 32.5485 39.7161 32.6213 39.9005L32.8583 40.5016C33.1317 41.1947 33.6804 41.7434 34.3736 42.0168L34.9746 42.2539C35.3423 42.3988 35.5227 42.8144 35.3778 43.182C35.305 43.3664 35.159 43.5124 34.9746 43.5851L34.3736 43.8222C33.6804 44.0956 33.1317 44.6443 32.8583 45.3374L32.6213 45.9385C32.4763 46.3061 32.0607 46.4866 31.6931 46.3416C31.5087 46.2689 31.3627 46.1229 31.29 45.9385L31.0529 45.3374C30.7795 44.6443 30.2308 44.0956 29.5377 43.8222Z" fill="white"/>
			<g filter="url(#filter9_d_593_16618)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M65.2268 64.2949L64.8662 64.1526C64.6456 64.0656 64.5373 63.8163 64.6243 63.5957C64.6679 63.4851 64.7555 63.3975 64.8662 63.3539L65.2268 63.2116C65.6427 63.0476 65.9719 62.7184 66.136 62.3025L66.2782 61.9418C66.3652 61.7213 66.6145 61.613 66.8351 61.7C66.9457 61.7436 67.0333 61.8312 67.077 61.9418L67.2192 62.3025C67.3832 62.7184 67.7124 63.0476 68.1283 63.2116L68.489 63.3539C68.7096 63.4409 68.8178 63.6902 68.7308 63.9108C68.6872 64.0214 68.5996 64.109 68.489 64.1526L68.1283 64.2949C67.7124 64.4589 67.3832 64.7881 67.2192 65.204L67.077 65.5647C66.99 65.7852 66.7406 65.8935 66.5201 65.8065C66.4094 65.7629 66.3218 65.6753 66.2782 65.5647L66.136 65.204C65.9719 64.7881 65.6427 64.4589 65.2268 64.2949Z" fill="white"/>
			</g>
			<defs>
			<filter id="filter0_d_593_16618" x="27.2612" y="46.3921" width="30.2222" height="51.2109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="4"/>
			<feGaussianBlur stdDeviation="2"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.247059 0 0 0 0 0.866667 0 0 0 0.2 0"/>
			<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_593_16618"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_16618" result="shape"/>
			</filter>
			<filter id="filter1_d_593_16618" x="43.9277" y="46.3921" width="30.2222" height="51.2109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="4"/>
			<feGaussianBlur stdDeviation="2"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.247059 0 0 0 0 0.866667 0 0 0 0.2 0"/>
			<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_593_16618"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_16618" result="shape"/>
			</filter>
			<filter id="filter2_d_593_16618" x="35.5942" y="53.3364" width="30.2222" height="51.2109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="4"/>
			<feGaussianBlur stdDeviation="2"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.247059 0 0 0 0 0.866667 0 0 0 0.2 0"/>
			<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_593_16618"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_16618" result="shape"/>
			</filter>
			<filter id="filter3_i_593_16618" x="75.4023" y="35.9751" width="9.33105" height="6.62988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="2"/>
			<feGaussianBlur stdDeviation="1"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_593_16618"/>
			</filter>
			<filter id="filter4_i_593_16618" x="75.4023" y="44.3086" width="9.33105" height="6.62988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="2"/>
			<feGaussianBlur stdDeviation="1"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_593_16618"/>
			</filter>
			<filter id="filter5_i_593_16618" x="16.6777" y="35.9751" width="9.33105" height="6.62988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="2"/>
			<feGaussianBlur stdDeviation="1"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_593_16618"/>
			</filter>
			<filter id="filter6_i_593_16618" x="16.6777" y="44.3086" width="9.33105" height="6.62988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="2"/>
			<feGaussianBlur stdDeviation="1"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_593_16618"/>
			</filter>
			<filter id="filter7_i_593_16618" x="25.1304" y="23.6143" width="51.1501" height="55.8889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="2"/>
			<feGaussianBlur stdDeviation="1"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_593_16618"/>
			</filter>
			<filter id="filter8_d_593_16618" x="32.8169" y="56.2808" width="13.5557" height="13.5557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset/>
			<feGaussianBlur stdDeviation="2"/>
			<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_593_16618"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_16618" result="shape"/>
			</filter>
			<filter id="filter9_d_593_16618" x="60.5942" y="57.6699" width="12.1667" height="12.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset/>
			<feGaussianBlur stdDeviation="2"/>
			<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_593_16618"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_16618" result="shape"/>
			</filter>
			<linearGradient id="paint0_linear_593_16618" x1="82.6499" y1="28.3364" x2="82.6499" y2="54.7253" gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF00E6"/>
			<stop offset="1" stop-color="#3D0053"/>
			</linearGradient>
			<linearGradient id="paint1_linear_593_16618" x1="18.7612" y1="28.3364" x2="18.7612" y2="54.7253" gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF00E6"/>
			<stop offset="1" stop-color="#3D0053"/>
			</linearGradient>
			<linearGradient id="paint2_linear_593_16618" x1="31.2612" y1="23.272" x2="31.2612" y2="46.3918" gradientUnits="userSpaceOnUse">
			<stop stop-color="#FF00E6"/>
			<stop offset="1" stop-color="#3D0053"/>
			</linearGradient>
			<linearGradient id="paint3_linear_593_16618" x1="18.7612" y1="18.6143" x2="18.7612" y2="82.5031" gradientUnits="userSpaceOnUse">
			<stop stop-color="#E00CE5"/>
			<stop offset="1" stop-color="#7000B4"/>
			</linearGradient>
			<linearGradient id="paint4_linear_593_16618" x1="28.4834" y1="28.3364" x2="28.4834" y2="72.7809" gradientUnits="userSpaceOnUse">
			<stop stop-color="#C200BA"/>
			<stop offset="1" stop-color="#E441FF"/>
			</linearGradient>
			<linearGradient id="paint5_linear_593_16618" x1="39.5942" y1="38.0586" x2="39.5942" y2="50.5586" gradientUnits="userSpaceOnUse">
			<stop stop-color="#CA00FD"/>
			<stop offset="1" stop-color="#BF00DE"/>
			</linearGradient>
			<linearGradient id="paint6_linear_593_16618" x1="45.3481" y1="50.5586" x2="45.3481" y2="63.0586" gradientUnits="userSpaceOnUse">
			<stop stop-color="#BE35FF"/>
			<stop offset="1" stop-color="#ED1DFF"/>
			</linearGradient>
			</defs>
		</svg>
	</div>`;
	content.appendChild(playerphoto);
	return content
	}
}
// customElements.define("player-photo", PlayerPhoto);

export function renderPlayerPhoto() {
	const player_photo = new PlayerPhoto();
	return player_photo.render();
}