var tetris = {
	tblock : "#canvas1, #canvas2, #canvas3, #canvas6",
	oblock : "#canvas2, #canvas3, #canvas6, #canvas7",
	lblock : "#canvas5, #canvas6, #canvas7, #canvas3",
	jblock : "#canvas1, #canvas2, #canvas3, #canvas7",
	iblock : "#canvas1, #canvas2, #canvas3, #canvas4",
	zblock : "#canvas1, #canvas2, #canvas6, #canvas7",
	sblock : "#canvas5, #canvas6, #canvas2, #canvas3",
	mtblock: [4, 5, 6, 15],
	moblock: [5, 6, 15, 16],
	mlblock: [14, 15, 16, 6],
	mjblock: [4, 5, 6, 16],
	miblock: [4, 5, 6, 7],
	mzblock: [4, 5, 15, 16],
	msblock: [14, 15, 5, 6],
	gamecell: "#gamecell",
	nextblock : "",
	blockclass : [ "tblock", "oblock", "lblock", "jblock", "iblock", "zblock",
			"sblock" ],
	blockcolor : "",

	begin : function() {
		this.ranBlock();
		this.createBlockInGameBoard();
	},
	
	ranBlock: function(){
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
		$(this.nextblock).removeClass(this.blockcolor+"");
		switch (this.blockcolor){
		case this.blockclass[0]:
			$(this.genIdStr(this.mtblock)).addClass(this.blockcolor+"");
			break;
		case this.blockclass[1]:
			$(this.genIdStr(this.moblock)).addClass(this.blockcolor+"");
			break;
		case this.blockclass[2]:
			$(this.genIdStr(this.mlblock)).addClass(this.blockcolor+"");
			break;
		case this.blockclass[3]:
			$(this.genIdStr(this.mjblock)).addClass(this.blockcolor+"");
			break;
		case this.blockclass[4]:
			$(this.genIdStr(this.miblock)).addClass(this.blockcolor+"");
			break;
		case this.blockclass[5]:
			$(this.genIdStr(this.mzblock)).addClass(this.blockcolor+"");
			break;
		case this.blockclass[6]:
			$(this.genIdStr(this.msblock)).addClass(this.blockcolor+"");
			break;
		}
	},
	
	genIdStr: function(mblock){
		var idStr = this.gamecell;
		for(var i=0;i<4;i++){
			idStr += mblock[i] + "," + this.gamecell;
		}
		return idStr.substr(0, idStr.length-10)+"";
	}
};