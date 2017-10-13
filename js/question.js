$(function(){
	/* 单选按钮，提交按钮 */
	var 
		$answer = {},obj = {},
		url = '',//定义提交url
		$ans_label = $('.question_block label'),
		$ans_items = $('.question_block input'),
		$submit = $('.question_block .submit');

	/* 单选按钮点击，按钮样式改变 */
	$ans_label.click(function(){
		$ans_label.removeClass('active');
		$(this).addClass('active');
	})
	/* 点击提交 */
	$submit.click(function(event){
		event.preventDefault();
		for (var i=0;i<$ans_items.length;i++) {
			if ($ans_items[i].checked) {
				$answer[$ans_items[i].name] = $ans_items[i].value;
				break;
			}
		}
		obj.type = 'GET';
		obj.url = url + '?' + $.param($answer);//提交url
		obj.success = function(data) {}
		obj.error = function(XMLHttpResquest,textStatus,data) {alert(XMLHttpResquest.responseText)}
		$.ajax(obj)
	})
	
	/* 答案错误 */
	/* 答错页面点击后测试 */
	$('.fail').click(function(){
		$('.fail').fadeOut('slow');
	})


	/* 云动画 */
	var
		$cloud = $('.cloud');
	function cloud_animate() {
		$cloud.animate({'left':'6rem'},5000,function(){
			$cloud.css('left','-7rem');
			cloud_animate();
		})
	}
	cloud_animate();
})