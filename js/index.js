$(function(){
	/* 云 */
	var
		$cloud = $('.cloud');
	function cloud_animate() {
		$cloud.animate({'left':'6rem'},5000,function(){
			$cloud.css('left','-7rem')
			cloud_animate();
		})
	}
	cloud_animate();
})