var Kora = {

	// Instantiate the required Common APIs
	widgetAPI : new Common.API.Widget(),
	tvKey : new Common.API.TVKeyValue(),
	pluginAPI : new Common.API.Plugin(),

	// UI Elements References
	// 1- Application Tiles
	tiles : document.querySelectorAll('.tile'),

	// Initialize the app
	init : function() {
		Kora.load();
		document.querySelector('body').addEventListener('unload', Kora.unload,
				false);
	},

	// Load App Components and adjust main settings
	load : function() {
		// Send the ready state to the application manager
		Kora.widgetAPI.sendReadyEvent();

		// Unregister Some Keys
		setTimeout(function() {
			var NNaviPlugin = document.getElementById("pluginObjectNNavi");
			NNaviPlugin.SetBannerState(1);

			Kora.pluginAPI.unregistKey(Kora.tvKey.KEY_VOL_UP);
			Kora.pluginAPI.unregistKey(Kora.tvKey.KEY_VOL_DOWN);
			Kora.pluginAPI.unregistKey(Kora.tvKey.KEY_MUTE);

		}, 3000);

		// Turn Off Screen Saver
		Kora.pluginAPI.setOffScreenSaver();

		// Check Network Connectivity

		// Create APP Tiles
		var tiles = {};
		var tilesMap = [ 'newsTile', 'upcomingMatchesTile', 'videoTile',
				'galleryTile', 'plus2Tile', 'statisticsTile' ];
		for ( var i = 0, ii = Kora.tiles.length; i < ii; i++) {
			tiles[tilesMap[i]] = (new Tile(Kora.tiles[i], tilesMap[i]));
		}
		Kora.tiles = tiles;

		// Setup Remote Control Handler
		document.body.addEventListener('keydown', Kora.keyDown, false);
	},
	unload : function() {

	},
	keyDown : function() {
		var keyCode = event.keyCode;

		switch (keyCode) {
		case Kora.tvKey.KEY_RETURN:
		case Kora.tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			Kora.widgetAPI.sendReturnEvent();
			break;
		case Kora.tvKey.KEY_LEFT:
			alert("LEFT");
			break;
		case Kora.tvKey.KEY_RIGHT:
			alert("RIGHT");
			break;
		case Kora.tvKey.KEY_UP:
			alert("UP");
			break;
		case Kora.tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case Kora.tvKey.KEY_ENTER:
		case Kora.tvKey.KEY_PANEL_ENTER:
			Kora.tiles['newsTile'].isFlipped ? Kora.tiles['newsTile']
					.unFlipTile() : Kora.tiles['newsTile'].flipTile();
			break;
		default:
			alert("Unhandled key");
			break;
		}
	}
};
Kora.init();
