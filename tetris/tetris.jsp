<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="tetris.css"/>
	</head>
	<body>
		<div id="tetris-main">
			<c:forEach begin="1" end="200" varStatus="t">
					<div class="main-cell" id="gamecell${t.index }"></div>
					<c:if test="${t.index % 10 == 0 }"><br/></c:if>
			</c:forEach>
		</div>
		<div id="tetris-tool">
			<div id="tetris-repository">
				<c:forEach begin="1" end="8" varStatus="r">
					<div class="main-cell" id="canvas${r.index }"></div>
					<c:if test="${r.index%4 == 0 }"><br/></c:if>
				</c:forEach>
			</div>
			<div id="tetris-score">0</div>
			<div id="tetris-timmer"></div>
			<div id="tetris-btn">
				<button id="begin" onclick="tetris.begin()">开始</button>
				<button id="pause">暂停</button>
				<p></p>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="tetris.js"></script>
	<script type="text/javascript">
		$(function(){
			for(var i=0;i<20;i++){
				tetris.full[i] = [];
			}
			$("body").keydown(function(e){
				if(e.keyCode == 38){
					tetris.rotate();
				}
				if(e.keyCode == 37){
					tetris.moveTowards(moveLeft);
				}
				if(e.keyCode == 39){
					tetris.moveTowards(moveRight);			
				}
				if(e.keyCode == 40){
					tetris.dropDown();
				}
			});
			$("#pause").click(function(){
				if($(this).text() === "暂停"){
					tetris.pause();
				} else {
					tetris.gamecontinue();
				}
			});
		});
		var constantNO = 0;
		var moveLeft = -1;
		var moveRight = 1;
		var drop = 0;//?
		var score = 0;
		var clockStart = 0;
	</script>
</html>