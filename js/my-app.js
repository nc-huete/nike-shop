// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
			{
		path: '/info-producto/',
    	url: 'info-producto.html',
    	name: 'info-producto',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

