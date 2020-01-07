// 1.获取元素
window.addEventListener('load', function(){
		var hour = document.querySelector('.hour');  //小时盒子
		var minute = document.querySelector('.minute'); //分钟盒子
		var second = document.querySelector('.second');  //秒数盒子
		var inputTime = +new Date('2020-10-19 00:00:00');  //输入时间
        countdown(); //先调用一次 防止刷新有空白  开启计时器有一秒延时 一秒后才调用
		// 2.开启定时器
		setInterval(countdown, 1000);
		function countdown() {
			var nowTime = +new Date(); // 获得当前时间总毫秒数
			var times = (inputTime - nowTime) / 1000; // 剩余时间总毫秒数
			var h = parseInt(times / 60 / 60 % 24); // 时
			h = h < 10? '0' + h : h;
			hour.innerHTML = h;
			var m = parseInt(times / 60 % 60); // 分
			m = m < 10? '0' + m : m;
			minute.innerHTML = m;
			var s = parseInt(times % 60); // 秒
			s = s < 10? '0' + s : s;
			second.innerHTML = s;
		}
})