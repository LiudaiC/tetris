var tetris = {
	gamecell: "#gamecell",
	nextblock : "",
	blockclass : [ "tblock", "oblock", "lblock", "jblock", "iblock", "zblock",
			"sblock" ],
	blockcolor : "",
	targetblock: null,
	targetblockId: [],
	full: [][],

	begin : function() {
		this.ranBlock();
		this.createBlockInGameBoard();
	},
	
	ranBlock: function(){
		$(this.nextblock).removeClass(this.blockcolor);
		var _this = this;
		var tgblockId = _this.targetblockId;
		var tgblock = _this.targetblock;
		var ran = Math.floor(Math.random() * 7);
		switch (ran) {
		case 0:
			_this.nextblock = tblock.origin;
			_this.blockcolor = _this.blockclass[0];
			_this.targetblockId = tblock.mblock.concat();
			_this.targetblock = tblock;
			break;
		case 1:
			_this.nextblock = oblock.origin;
			_this.blockcolor = _this.blockclass[1];
			_this.targetblockId = oblock.mblock.concat();
			_this.targetblock = oblock;
			break;
		case 2:
			_this.nextblock = lblock.origin;
			_this.blockcolor = _this.blockclass[2];
			_this.targetblockId = lblock.mblock.concat();
			_this.targetblock = lblock;
			break;
		case 3:
			_this.nextblock = jblock.origin;
			_this.blockcolor = _this.blockclass[3];
			_this.targetblockId = jblock.mblock.concat();
			_this.targetblock = jblock;
			break;
		case 4:
			_this.nextblock = iblock.origin;
			_this.blockcolor = _this.blockclass[4];
			_this.targetblockId = iblock.mblock.concat();
			_this.targetblock = iblock;
			break;
		case 5:
			_this.nextblock = zblock.origin;
			_this.blockcolor = _this.blockclass[5];
			_this.targetblockId = zblock.mblock.concat();
			_this.targetblock = zblock;
			break;
		case 6:
			_this.nextblock = sblock.origin;
			_this.blockcolor = _this.blockclass[6];
			_this.targetblockId = sblock.mblock.concat();
			_this.targetblock = sblock;
			break;
		}
		$(_this.nextblock).addClass(_this.blockcolor+"");
	},
	
	createBlockInGameBoard: function(){
		drop = 0;
		constantNO = 0;
		var bcolor = this.blockcolor;
		$(this.nextblock).removeClass(bcolor+"");
		var tgblockId = this.targetblockId;
		var tgblock = this.targetblock;
		$(this.genIdStr(tgblockId)).addClass(bcolor+"");
		var ddd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		$(this.genIdStr(ddd)).each(function(){console.log($(this).hasClass(bcolor+""))})
	},
	
	genIdStr: function(mblock){
		var idStr = [];
		for(var i=0;i<mblock.length;i++){
			idStr[i] = this.gamecell + mblock[i];
		}
		return idStr.join(",");
	},
	
	rotate: function(){
		var tgblockId = this.targetblockId;
		var tgblock = this.targetblock;
		if(tgblock.hasOwnProperty("r1") && this.canRotate()){
			$(this.genIdStr(tgblockId)).removeClass(this.blockcolor+"");
			var j = tgblock.hasOwnProperty("r3") ? constantNO%4 : constantNO%2;
			var r;
			if(j == 0){
				r = tgblock.r1;
			}
			if(j == 1){
				r = tgblock.r2;
			}
			if(j == 2){
				r = tgblock.r3; 
			}
			if(j == 3){
				r = tgblock.r4; 
			}
			for(var i=0;i<4;i++){
				tgblockId[i] += r[i];
			}
			constantNO++;
			$(this.genIdStr(tgblockId)).addClass(this.blockcolor+"");
		}
	},
	
	moveTowards: function(derection){
		var tgblockId = this.targetblockId;
		var tgblock = this.targetblock;
		$(this.genIdStr(tgblockId)).removeClass(this.blockcolor+"");
		for(var i=0;i<4;i++){
			tgblockId[i] += derection;
		}
		if(!this.canMove(derection)){
			for(var i=0;i<4;i++){
				tgblockId[i] -= derection;
			}
		}
		$(this.genIdStr(tgblockId)).addClass(this.blockcolor+"");
	}, 
	
	canMove: function(d){
		var canmove = true;
		var moveto;
		for(var i=0;i<4;i++){
			moveto = this.targetblockId[i];
			if((d > 0 && (moveto - 1)%10 == 0)
					|| (d < 0 && (moveto + 1)%10 == 1)
					|| (d == 0 && $(this.gamecell + moveto).css("background-color") != "rgba(0, 0, 0, 0)")){
				drop = 20;
				canmove = false;
				break;
			}
		}
		return canmove;
	},
	
	canRotate: function(){
		var canrotate = true;
		var r;
		for(var i=0;i<4;i++){
			r = this.targetblockId[i];
			if(r-10 < 0 || r+10 > 200){
				canrotate = false;
				break;
			}
		}
		return canrotate;
	},
	
	dropDown: function(){
		var tgblockId = this.targetblockId;
		var tgblock = this.targetblock;
		$(this.genIdStr(tgblockId)).removeClass(this.blockcolor+"");
		for(var i=0;i<4;i++){
			tgblockId[i] += 10;
		}
		if(!this.canMove(0)){
			for(var i=0;i<4;i++){
				tgblockId[i] -= 10;
			}
		}
		$(this.genIdStr(tgblockId)).addClass(this.blockcolor+"");
		
	},
	
};
var tblock = {
	origin : "#canvas1, #canvas2, #canvas3, #canvas6",
	mblock: [4, 5, 6, 15],
	r1: [-9, 0, 9, -11],
	r2: [11, 0, -11, -9],
	r3: [9, 0, -9, 11],
	r4: [-11, 0, 11, 9]
		
};
var oblock = {
	origin : "#canvas2, #canvas3, #canvas6, #canvas7",
	mblock: [5, 6, 15, 16],
	
};
var lblock = {
	origin : "#canvas5, #canvas6, #canvas7, #canvas3",
	mblock: [14, 15, 16, 6],
	r1: [-9, 0, 9, 20],
	r2: [11, 0, -11, -2],
	r3: [9, 0, -9, -20],
	r4: [-11, 0, 11, 2]
};
var jblock = {
	origin : "#canvas1, #canvas2, #canvas3, #canvas7",
	mblock: [4, 5, 6, 16],
	r1: [-9, 0, 9, -2],
	r2: [11, 0, -11, -20],
	r3: [9, 0, -9, 2],
	r4: [-11, 0, 11, 20]
};
var iblock = {
	origin : "#canvas1, #canvas2, #canvas3, #canvas4",
	mblock: [4, 5, 6, 7],
	r1: [-9, 0, 9, 18],
	r2: [9, 0, -9, -18]
};
var zblock = {
	origin : "#canvas1, #canvas2, #canvas6, #canvas7",
	mblock: [4, 5, 15, 16],
	r1: [-9, 0, -11, -2],
	r2: [9, 0, 11, 2]
};
var sblock = {
	origin : "#canvas5, #canvas6, #canvas2, #canvas3",
	mblock: [14, 15, 5, 6],
	r1: [-20, -11, 0, 9],
	r2: [20, 11, 0, -9]
};
