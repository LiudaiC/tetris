<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="tetris.css"/>
		<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="tetris.js"></script>
	</head>
	<body>
		<div id="tetris-main">
			<c:forEach begin="1" end="200" varStatus="t">
					<div class="main-cell" id="gamecell${t.index }">${t.index }</div>
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
			<div id="tetris-score"></div>
			<div id="tetris-timmer"></div>
			<div id="tetris-btn">
				<button onclick="tetris.begin()">*</button>
				<button onclick="tetris.pause()">*</button>
			</div>
		</div>
	</body>
	<script type="text/javascript">
		$(function(){
		/* 	if(location.href.indexOf("mytetris")<0){
				window.open ('tetris.jsp?mytetris', 'aa', 
						'top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
				window.close();
			} */
			$("body").keydown(function(e){
				if(e.keyCode == 38){
					tetris.rotate();
				}
				if(e.keyCode == 37){
					tetris.moveLeft();
				}
				if(e.keyCode == 39){
					tetris.moveRight();					
				}
				if(e.keyCode == 40){
					tetris.dropDown();
				}
			});
		});
	</script>
</html>