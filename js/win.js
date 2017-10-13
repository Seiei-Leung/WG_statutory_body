$(function(){
	/* 云动画 */
	var
		$cloud = $('.cloud');
	function cloud_animate() {
		$cloud.animate({'left':'10rem'},5000,function(){
			$cloud.css('left','-7rem')
			cloud_animate();
		})
	}
	cloud_animate();
})