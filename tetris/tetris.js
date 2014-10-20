var tetris = {
	gamecell: "#gamecell",
	nextblock : "",
	blockclass : [ "tblock", "oblock", "lblock", "jblock", "iblock", "zblock",
			"sblock" ],
	blockcolor : "",
	mcolor: "",
	targetblock: null,
	targetblockId: [],
	full: [],
	ginterval: null,
	cinterval: null,
	GameOver: false,
	begin : function() {
		this.ranBlock();
		this.createBlockInGameBoard();
		this.ranBlock();
		this.interval = setInterval(function(){
			tetris.dropDown();
		},800);
		clock.interval = setInterval(function(){
			clock.clockRun();
		}, 1000);
	},
	
	pause: function(){
		$("#pause").text("继续");
		clearInterval(this.interval);
		clearInterval(clock.interval);
	},
	
	gamecontinue: function(){
		$("#pause").text("暂停");
		this.interval = setInterval(function(){
			tetris.dropDown();
		},800);
		clock.interval = setInterval(function(){
			clock.clockRun();
		}, 1000);
	},
	
	gameover: function(){
		clearInterval(this.interval);
		clearInterval(clock.interval);
		this.GameOver = true;
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
			break;
		case 1:
			_this.nextblock = oblock.origin;
			_this.blockcolor = _this.blockclass[1];
			break;
		case 2:
			_this.nextblock = lblock.origin;
			_this.blockcolor = _this.blockclass[2];
			break;
		case 3:
			_this.nextblock = jblock.origin;
			_this.blockcolor = _this.blockclass[3];
			break;
		case 4:
			_this.nextblock = iblock.origin;
			_this.blockcolor = _this.blockclass[4];
			break;
		case 5:
			_this.nextblock = zblock.origin;
			_this.blockcolor = _this.blockclass[5];
			break;
		case 6:
			_this.nextblock = sblock.origin;
			_this.blockcolor = _this.blockclass[6];
			break;
		}
		$(_this.nextblock).addClass(_this.blockcolor+"");
	},
	
	createBlockInGameBoard: function(){
		constantNO = 0;
		var _this = this;
		_this.mcolor = _this.blockcolor;
		var bclass = _this.blockclass;
		switch (_this.mcolor){
		case bclass[0]:
			_this.targetblockId = tblock.mblock.concat();
		_this.targetblock = tblock;
			break;
		case bclass[1]:
			_this.targetblockId = oblock.mblock.concat();
		_this.targetblock = oblock;
			break;
		case bclass[2]:
			_this.targetblockId = lblock.mblock.concat();
		_this.targetblock = lblock;
			break;
		case bclass[3]:
			_this.targetblockId = jblock.mblock.concat();
		_this.targetblock = jblock;
			break;
		case bclass[4]:
			_this.targetblockId = iblock.mblock.concat();
		_this.targetblock = iblock;
			break;
		case bclass[5]:
			_this.targetblockId = zblock.mblock.concat();
		_this.targetblock = zblock;
			break;
		case bclass[6]:
			_this.targetblockId = sblock.mblock.concat();
		_this.targetblock = sblock;
			break;
		}
		var tgblockId = _this.targetblockId;
		$(_this.genIdStr(tgblockId)).addClass(_this.mcolor+"");
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
			$(this.genIdStr(tgblockId)).removeClass(this.mcolor+"");
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
			$(this.genIdStr(tgblockId)).addClass(this.mcolor+"");
		}
	},
	
	moveTowards: function(derection){
		var tgblockId = this.targetblockId;
		var tgblock = this.targetblock;
		$(this.genIdStr(tgblockId)).removeClass(this.mcolor+"");
		
		if(!this.canMove(derection)){
			for(var i=0;i<4;i++){
				tgblockId[i] += derection;
			}
		}
		$(this.genIdStr(tgblockId)).addClass(this.mcolor+"");
	}, 
	
	canMove: function(d){
		var canmove = true;
		var moveto;
		var hasblock;
		for(var i=0;i<4;i++){
			moveto = d==0 ? this.targetblockId[i]+10 : this.targetblockId[i];
			hasblock = $(this.gamecell + moveto).css("background-color") != "rgb(255, 255, 255)";
			if((d > 0 && ((moveto - 1)%10 == 0 || hasblock))
					|| (d < 0 && ((moveto + 1)%10 == 1 || hasblock))
					|| (d == 0 && hasblock)){
				canmove = false;
				break;
			}
		}
		if($("#gamecell5").css("background-color") != "rgb(255, 255, 255)" 
				|| $("#gamecell6").css("background-color") != "rgb(255, 255, 255)"
				|| $("#gamecell4").css("background-color") != "rgb(255, 255, 255)"){
			canmove = false;
			this.gameover();
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
		if(this.GameOver)return;
		var tgblockId = this.targetblockId;
		var tgblock = this.targetblock;
		$(this.genIdStr(tgblockId)).removeClass(this.mcolor+"");
		var candrop = this.canMove(0);
		if(candrop){
			for(var i=0;i<4;i++){
				tgblockId[i] += 10;
			}
		}
		$(this.genIdStr(tgblockId)).addClass(this.mcolor+"");
		if(!candrop){
			this.calculate();
			this.createBlockInGameBoard();
			this.ranBlock();
		}
	},
	
	calculate: function(){
		var quotient;//商
		var remainder;//余数
		var dividend = this.targetblockId;//被除数
		var scoreBoard = this.full;
		for(var i=0;i<4;i++){
			quotient = dividend[i]%10 == 0 ? Math.floor(dividend[i]/10)-1 : Math.floor(dividend[i]/10);
			remainder = dividend[i]%10 == 0 ? 9 : dividend[i]%10-1;
			scoreBoard[quotient][remainder] = dividend[i];
		}
		var cal;
		var destroy = [];
		for(var i=19;i>-1;i--){
			if(scoreBoard[i].length == 10){
				var cal = true;
				for(var j=9;j>-1;j--){
					if(!scoreBoard[i][j]){
						cal = false;
						break;
					}
				}
				if(cal){
					destroy.push(scoreBoard[i][0]);
					scoreBoard[i].forEach(function(item){
						var obj = $("#gamecell"+item);
						obj.removeClass(obj.attr("class")+"").addClass("main-cell");
					});
					scoreBoard[i] = [];
				}
			}
		}
		var dropall = [];
		for(var i=19;i>-1;i--){
			for(var j=9;j>-1;j--){
				var m = scoreBoard[i][j];
				if(m &&　destroy[0] && m<destroy[0]){
					dropall.push(m);
					m += 10;
					scoreBoard[i+1][j] = m;
					scoreBoard[i][j] = 0;
				}
			}
		}
		var len = dropall.length;
		for(var i=0;i<len;i++){
			var str = $("#gamecell"+dropall[i]).attr("class");
			var strl = $("#gamecell"+(dropall[i]+10*destroy.length)).attr("class");
			$("#gamecell"+dropall[i]).removeClass(str+"").addClass("main-cell");
			$("#gamecell"+(dropall[i]+10*destroy.length)).removeClass(strl+"").addClass(str+"");
		}
		if(destroy.length == 1){
			score += 10;
		}
		if(destroy.length == 2){
			score += 20;
		}
		if(destroy.length == 3){
			score += 40;
		}
		if(destroy.length == 4){
			score += 80;
		}
		$("#tetris-score").text(score);
	}
	
	
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
var clock = {
	interval:null,
	//运行动态电子时钟
	clockRun: function () {
		clockStart++;
		var m = clock.checkTime(Math.floor(clockStart/60));
		var s = clock.checkTime(clockStart%60);
		$("#tetris-timmer").html(m+":"+s);
	},
	// 时、分、秒小于10时在前面添加0
	checkTime: function (i) {
		return i<10 ? "0"+i : i;
	}
}