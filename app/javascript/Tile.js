var Tile = function(DOMElement, tileName)
{
	this.tileDOMElement = DOMElement;
	this.name = tileName;
	this.isFlipped = false; 
};

Tile.prototype.changeFlipStatus = function()
{
	this.isFlipped = (true === this.isFlipped) ? false : true;
};

Tile.prototype.flipTile = function()
{
	this.tileDOMElement.className = 'tile newsTile flipped';
	this.changeFlipStatus();
};

Tile.prototype.unFlipTile = function()
{
	this.tileDOMElement.className = 'tile newsTile';
	this.changeFlipStatus();
};