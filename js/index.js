/* 生成题目 */
$(function(){

})

$(function(){
	var 
		t = [
			{
				'q':'保健食品外包装上必须标有标志及“保健食品”字样',
				'A':'A、12345',
				'B':'B、工程管理员',
				'C':'C、dde',
				'D':'D、工程管理员',
			},
			{
				'q':'保健食品外包装上必须标有标志及“保健食品”字样',
				'A':'A、12345',
				'B':'B、工程管理员',
				'C':'C、dde',
				'D':'D、工程管理员',
			},
			{
				'q':'保健食品外包装上必须标有标志及“保健食品”字样',
				'A':'A、12345',
				'B':'B、工程管理员',
				'C':'C、dde',
				'D':'D、工程管理员',
			},
			{
				'q':'保健食品外包装上必须标有标志及“保健食品”字样',
				'A':'A、12345',
				'B':'B、工程管理员',
				'C':'C、dde',
				'D':'D、工程管理员',
			}
		],
		$question_block = $('.question_block'),
		i_num;
	for (var i = 0; i<t.length; i++){
		i_num = i + 2;
		$question_block.append($(
			'<div class="question_content question_content' + i_num + '" style="display: none;"><div class="que_num"><p>— <span>' + i_num +'</span> —</p></div><div class="question"><p>' + 
			t[i].q + '</p></div><div class="solid"></div><form><label for="quest' + i_num + '_ans1" class="active"><input type="radio" name="quest' + i_num + '" value="A" id="quest' + i_num + '_ans1" checked="checked">' + 
			t[i].A + '</label><label for="quest' + i_num + '_ans2"><input type="radio" name="quest' + i_num + '" value="B" id="quest' + i_num + '_ans2">' + 
			t[i].B + '</label><label for="quest' + i_num + '_ans3"><input type="radio" name="quest' + i_num + '" value="C" id="quest' + i_num + '_ans3">' + 
			t[i].C + '</label><label for="quest' + i_num + '_ans4"><input type="radio" name="quest' + i_num + '" value="D" id="quest' + i_num + '_ans4">' + 
			t[i].D + '</label></form></div>'
			))
	}
	var 
		t2 = [
			{
				'q':'保健食品外包装上必须标有标志及“保健食品”字样',
				'A':'A、12345',
				'B':'B、工程管理员',
				'C':'C、dde',
				'D':'D、工程管理员',
			},
			{
				'q':'保健食品外包装上必须标有标志及“保健食品”字样',
				'A':'A、12345',
				'B':'B、工程管理员',
				'C':'C、dde',
				'D':'D、工程管理员',
			}
		],
		$question_block2 = $('.question_block2'),
		i_num2;
	for (var i = 0; i<t2.length; i++){
		i_num2 = i + 3 + t.length;
		$question_block2.append($(
			'<div class="question_content question_content' + i_num2 + '" style="display: none;"><div class="que_num"><p>— <span>' + i_num2 +'</span> —</p></div><div class="question"><p>' + 
			t2[i].q + '</p></div><div class="solid"></div><form><label for="quest' + i_num2 + '_ans1" class="active"><input type="radio" name="quest' + i_num2 + '" value="A" id="quest' + i_num2 + '_ans1" checked="checked">' + 
			t2[i].A + '</label><label for="quest' + i_num2 + '_ans2"><input type="radio" name="quest' + i_num2 + '" value="B" id="quest' + i_num2 + '_ans2">' + 
			t2[i].B + '</label><label for="quest' + i_num2 + '_ans3"><input type="radio" name="quest' + i_num2 + '" value="C" id="quest' + i_num2 + '_ans3">' + 
			t2[i].C + '</label><label for="quest' + i_num2 + '_ans4"><input type="radio" name="quest' + i_num2 + '" value="D" id="quest' + i_num2 + '_ans4">' + 
			t2[i].D + '</label></form></div>'
			))
	}
	/* 云动画 */
	var
		$cloud = $('.cloud');
	function cloud_animate() {
		$cloud.animate({'left':'6rem'},5000,function(){
			$cloud.css('left','-7rem')
			cloud_animate();
		})
	}
	cloud_animate();
	var
		answer = 'AAAAAAAA',
		floor_num = 1,
		question_num,
		width = $('body').width(),
		height = $('body').height(),
		$animate = $('.animate'),
		$entry_btn = $('.entry_btn a'),
		$floor_bottom = $('.floor_bottom'),
		$floor = $('.floor'),
		$floor_num = $('.floor_num'),
		$footer = $('.footer'),
		$title = $('.title'),
		$question_content = $('.question_content'),
		$submit = $('.question_block .submit'),
		$ans_label = $('.question_block_all label'),
		$ans_items = $('.question_block_all input'),
		$fail = $('.fail'),
		$winner = $('.winner');
	/* 进入问答 */
	$entry_btn.click(function(){
		$entry_btn.addClass('hid');
		$animate.animate({'left':width-$floor_bottom.width()*0.75});
		$animate.animate({'top':height-$floor_bottom.height()*1.05-$animate.height()});
		$title.fadeOut();
		$question_block.fadeIn();
	})
	/* 答案提交事件 */
	$submit.click(function(){
		// alert('层数：' + floor_num);
		// alert('总题目数:' + (t.length + 1));
		if (floor_num < (t.length + 1) && (!$floor.is(':animated'))) {//十道题13
			// alert('第' + floor_num + '题');
			// alert('正确答案：' + answer.slice(floor_num-1,floor_num));
			// alert('自选选项：' + $('.question_content' + floor_num + ' input[type=radio]:checked').val());
			if ($('.question_content' + floor_num + ' input[type=radio]:checked').val() == answer.slice(floor_num-1,floor_num)){
				$question_content.hide();
				$('.question_content' + (floor_num + 1)).show();
				$('.question_block label:first-child').addClass('active');
				$floor.animate({'bottom':'-=' + $floor_num.height()},function(){
					$floor.prepend($('<div class="floor_num"><div class="num"><span>' + (floor_num + 3) + 'F</span></div></div>'));
					floor_num += 1;
					$floor.css('bottom','+=' + $floor_num.height());
				});
				$footer.fadeOut();
			} else {
				$fail.fadeIn('slow');
			}
		} else if (floor_num == (t.length + 1) && (!$floor.is(':animated'))) {//最后一题
			// alert('第' + floor_num + '题');
			// alert('正确答案：' + answer.slice(floor_num-1,floor_num));
			// alert('自选选项：' + $('.question_content' + floor_num + ' input[type=radio]:checked').val());
			if ($('.question_content' + floor_num + ' input[type=radio]:checked').val() == answer.slice(floor_num-1,floor_num)){
				$question_block.fadeOut();
				$animate.fadeOut();
				$floor.fadeOut();
				$winner.fadeIn();
			} else {
				$fail.fadeIn('slow');
			}
		}
	})
	/* 单选按钮样式 */
	$ans_label.click(function(){
		$ans_label.removeClass('active');
		$(this).addClass('active');
	})
	/* 答案错误 */
	$('.fail').click(function(){
		$('.fail').fadeOut('slow');
	})
	/* 点击抽奖 */
	$('.lotto').click(function(){
		$('.content').hide();
		$('.content2').show();
	})
	/* 操作按钮 */
	var
		$msg_btn =  $('.msg_btn'),
		$operation = $('.operation'),
		$back_btn = $('.back_btn');
	$msg_btn.click(function(){
		$operation.show();
		$msg_btn.hide();
		$back_btn.show();
	})
	$back_btn.click(function(){
		$operation.hide();
		$msg_btn.show();
		$back_btn.hide();
	})
	/* 闯第二关 */
	var 
		$submit2 = $('.question_block2 .submit');
	$submit2.click(function(){
		// alert('层数：' + floor_num);
		// alert('总题目数:' + (t.length + 2 + t2.length));
		if (floor_num < (t.length + 2 + t2.length) && (!$floor.is(':animated'))) {//十道题13
			// alert('第' + floor_num + '题');
			// alert('正确答案：' + answer.slice(floor_num-1,floor_num));
			// alert('自选选项：' + $('.question_content' + floor_num + ' input[type=radio]:checked').val())
			if ($('.question_content' + floor_num + ' input[type=radio]:checked').val() == answer.slice(floor_num-1,floor_num)){
				$question_content.hide();
				$('.question_content' + (floor_num + 1)).show();
				$('.question_block2 label:first-child').addClass('active');
				$floor.animate({'bottom':'-=' + $floor_num.height()},function(){
					$floor.prepend($('<div class="floor_num"><div class="num"><span>' + (floor_num + 3) + 'F</span></div></div>'));
					floor_num += 1;
					$floor.css('bottom','+=' + $floor_num.height());
				});
				$footer.fadeOut();
			} else {
				$fail.fadeIn('slow');
			}
		} else if (floor_num == (t.length + 2 + t2.length) && (!$floor.is(':animated'))) {//最后一题
			// alert('第' + floor_num + '题');
			// alert('正确答案：' + answer.slice(floor_num-1,floor_num));
			// alert('自选选项：' + $('.question_content' + floor_num + ' input[type=radio]:checked').val());
			if ($('.question_content' + floor_num + ' input[type=radio]:checked').val() == answer.slice(floor_num-1,floor_num)){
				$question_block2.fadeOut();
				$animate.fadeOut();
				$floor.fadeOut();
				$winner.fadeIn();
				$('.content').hide();
				$('.content2').show();
			} else {
				$fail.fadeIn('slow');
			}
		}
	})
	/* 第二套题 */
	$('.continue').click(function(){
		$question_block2.fadeIn();
		$animate.fadeIn();
		$floor.fadeIn();
		$winner.fadeOut();
		$floor.animate({'bottom':'-=' + $floor_num.height()},function(){
			$floor.prepend($('<div class="floor_num"><div class="num"><span>' + (floor_num + t.length + 1) + 'F</span></div></div>'));
			floor_num += 1;
			$floor.css('bottom','+=' + $floor_num.height());
		});
		$question_content.hide();
		$('.question_content6').show();/* 第二套题序号 */
	})
	/* 提交个人信息 */
	$('.submit_btn button').click(function(){
		var 
			$name = encodeURIComponent($('.name input').val()),
			$phonenumb = encodeURIComponent($('.phonenumb input').val()),
			obj = {},
			url = '';
		obj.type = 'GET';
		obj.url = 'http://192.168.1.220/leavemessage/leavemessage.php/Home/Test/addData' + '?' + 'name=' + $name + '&phonenumb' + $phonenumb;
		obj.success = function(data){
			if (data == 1) {
				alert('ok')
			} else if (data == 2) {
				alert('not ok')
			}
		};
		obj.error = function(data) {
			alert('112')
		} 
		$.ajax(obj);

	})
})