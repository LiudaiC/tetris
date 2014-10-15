<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML>
<html>
	<head>
		<style type="text/css">
			#tetris-main, #tetris-tool {
				border: 3px solid #c3c3c3;
				width: 300px;
				height: 600px;
				position: fixed;
				left: 300px;
				top: 100px;
			}
			#tetris-tool{
				width: 150px;
				left: 600px;
				display: inline;
			}
			#tetris-repository, #tetris-score, #tetris-timmer{
				border: 1px solid #c3c3c3;
				margin-left: 15px;
				margin-right: 15px;
				margin-top: 28px;
				height: 28px;
			}
			#tetris-repository{
				width: 120px;
				height: 120px;
				margin-top: 15px;
			}
			#tetris-score{
			}
			#tetris-btn{
			margin-top: 228px;
			text-align: center;
			}
			#tetris-timmer{
			}
			.main-cell{
				border: 1px solid #c3c3c3;
				top: 28px;
				height: 28px;
				width: 28px;
				display: inline;
				float:left;
			}
			.tblock, .oblock, .lblock, .jblock, .iblock, .zblock, .sblock{
				border: 3px solid #c3c3c3;
			}
			.tblock{
				background-color: yellow;
			}
			.oblock{
				background-color: blue;
			}
			.lblock{
				background-color: green;
			}
			.jblock{
				background-color: pink;
			}
			.iblock{
				background-color: purple;
			}
			.zblock{
				background-color: red;
			}
			.sblock{
				background-color: orange;
			}
		</style>
		<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
		<script type="text/javascript">
			$(function(){
			/* 	if(location.href.indexOf("mytetris")<0){
					window.open ('tetris.jsp?mytetris', 'aa', 
							'top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
					window.close();
				} */
			});
		</script>
	</head>
	<body>
		<div id="tetris-main">
			<c:forEach begin="1" end="200" varStatus="t">
					<div class="main-cell"></div>
					<c:if test="${t.index % 10 == 0 }"><br/></c:if>
			</c:forEach>
		</div>
		<div id="tetris-tool">
			<div id="tetris-repository">
				<c:forEach begin="1" end="16" varStatus="r">
					<div class="main-cell"></div>
					<c:if test="${r.index%4 == 0 }"><br/></c:if>
				</c:forEach>
			</div>
			<div id="tetris-score"></div>
			<div id="tetris-timmer"></div>
			<div id="tetris-btn">
				<button>*</button>
				<button>*</button>
			</div>
		</div>
	</body>
</html>