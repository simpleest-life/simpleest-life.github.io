$(function(){
		$("#fullpage").fullpage({  
		    navigation:true, 
		    fixedElements:'#goto',        
		})
		var s = 'Welcome to my home page';
		var con = $('.wel');
		var index = 0;
		var length = s.length;
		var tId = null;

		function start(){
		  con.text('');
		  
		  tId=setInterval(function(){
		    con.append(s.charAt(index));
		    if(index++ === length){
		    clearInterval(tId);
		    index = 0;
		    start()
		    }
		  },200);
		}
        setTimeout(start,100);

        var s2 = '我叫王跃，今年25岁。对生活和工作充满激情。我非常喜欢前端工程师这份工作，无论未来怎么样，我都会积极乐观的去面对，做好自己的工作。';
		var con2 = $('.shu');
		var index2 = 0;
		var length2 = s2.length;
		var tId2 = null;

		function start2(){
		  con2.text('');
		  
		  tId2=setInterval(function(){
		    con2.append(s2.charAt(index2));
		    if(index2++ === length2){
		    clearInterval(tId2);
		    index2 = 0;
		    start2()
		    }
		  },200);
		}
        setTimeout(start2,3000);
        // $('.ci1').show(1000)
        // $('.ci2').show(2000)
        // $('.ci3').show(3000)
        // $('.ci4').show(4000)
        // $('.ci5').show(5000)
        // $('.ci6').show(6000)
        // $('.ci7').show(7000)


})
// $('#goto').on('click',function(){
// 		$.fn.fullpage.moveSectionDown();
// 	})

var test = angular.module('main',[]);
test.controller('logoCtrl',['$scope',function($scope){
}])