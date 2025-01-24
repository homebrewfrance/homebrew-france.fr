function loadGoogleTagManager() {
	var gtagScript = document.createElement('script');
	gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-68CMDJM124';
	gtagScript.async = true;
	
	var head = document.head || document.getElementsByTagName('head')[0];
	head.appendChild(gtagScript);
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-68CMDJM124');
	console.log('Google Tag Manager Loaded');
}

document.addEventListener('DOMContentLoaded', function() {
    loadGoogleTagManager();
});