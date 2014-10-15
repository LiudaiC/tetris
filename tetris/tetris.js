var tetris = {
	tblock : "#canvas5, #canvas6, #canvas7, #canvas10",
	oblock : "#canvas6, #canvas7, #canvas10, #canvas11",
	lblock : "#canvas2, #canvas6, #canvas10, #canvas11",
	jblock : "#canvas2, #canvas6, #canvas9, #canvas10",
	iblock : "#canvas2, #canvas6, #canvas10, #canvas14",
	zblock : "#canvas5, #canvas6, #canvas10, #canvas11",
	sblock : "#canvas6, #canvas7, #canvas9, #canvas10",
	nextblock : "",
	blockclass : [ "tblock", "oblock", "lblock", "jblock", "iblock", "zblock",
			"sblock" ],
	blockcolor : "",

	begin : function() {
		var ran = Math.floor(Math.random() * 7);
		$(this.nextblock).removeClass(this.blockcolor);
		switch (ran) {
		case 0:
			this.nextblock = this.tblock;
			this.blockcolor = this.blockclass[0];
			break;
		case 1:
			this.nextblock = this.oblock;
			this.blockcolor = this.blockclass[1];
			break;
		case 2:
			this.nextblock = this.lblock;
			this.blockcolor = this.blockclass[2];
			break;
		case 3:
			this.nextblock = this.jblock;
			this.blockcolor = this.blockclass[3];
			break;
		case 4:
			this.nextblock = this.iblock;
			this.blockcolor = this.blockclass[4];
			break;
		case 5:
			this.nextblock = this.zblock;
			this.blockcolor = this.blockclass[5];
			break;
		case 6:
			this.nextblock = this.sblock;
			this.blockcolor = this.blockclass[6];
			break;
		}
		$(this.nextblock).addClass(this.blockcolor+"");
	},
	
	createBlockInGameBoard: function(){
		switch (this.blockcolor){
		case this.blockclass[0]:
			
			break;
		case this.blockclass[1]:
			break;
		case this.blockclass[2]:
			break;
		case this.blockclass[3]:
			break;
		case this.blockclass[4]:
			break;
		case this.blockclass[5]:
			break;
		case this.blockclass[6]:
			break;
		}
	}
};