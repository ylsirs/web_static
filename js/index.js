window.addEventListener('load', function(){
    var fx = document.querySelector('.focus');
    //console.log(fx);
    var fxarrow1 = document.querySelector('.focus-arrow-prev');
    var fxarrow2 = document.querySelector('.focus-arrow-next');
    var fxWidth = fx.offsetWidth; //控制两侧按钮
    var circle = 0; //控制小圆圈变化
    fx.addEventListener('mouseenter', function(){
        fxarrow1.style.display = 'block';
        fxarrow2.style.display = 'block';
        //鼠标经过停止计时器
        clearInterval(timer);
        timer = null; //清除计时器变量
    });
    fx.addEventListener('mouseleave', function(){
        fxarrow1.style.display = 'none';
        fxarrow2.style.display = 'none';
        //重新启用计时器
        timer = setInterval(function(){ 
            //手动调用右键点击事件  
            fxarrow2.click();
        }, 2000);
    });
    //动态生成小圆圈
    var ul = fx.querySelector('ul');  //此处必须为fx 不能为父元素的类名focus 因为声明的为fx
    //console.log(ul);
    var ul2 = document.querySelector('.circle');
    // console.log(ul.children.length);
    //console.log(ul2);
    for (var i = 0; i <ul.children.length; i++){
        //创建小li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 通过自定义属性
        li.setAttribute('index', i);
        //  把li插入到ul 生成小圆圈
        ul2.appendChild(li);
        // 在直接生成小圆圈的同时 直接绑定点击事件
        li.addEventListener('click', function(){
            for(var i = 0; i < ul2.children.length; i++){
                ul2.children[i].className = '';  
            }
            this.className = 'current'; //this 当前的小li
   
            // 5.点击小圆圈 移动图片 移动的是 ul  ul的移动距离 = 小圆圈的索引号 x 图片宽度（注意左走为负值）       
            var index = this.getAttribute('index');
            //当我们点击li时 把这个li的索引号给num 和circle
            num = index;
            circle = num;
            //console.log(fxWidth);
            animate (ul, -index * fxWidth);
        })
    } 
    // 把第一个li更改类名
    ul2.children[0].className = 'current';
   
    // 6. 克隆第一张图片（li）放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
   
    // 7. 设置右侧点击按钮 
    var num = 0;
    //flag节流阀
    var flag = true;  //再次触发点击事件不会执行这步  
    fxarrow2.addEventListener('click', function(){
        if (flag) {         
            flag = false;  // 判断 不是赋值
            //如果走到最后一张 此时 ul要快速复元 left=0  unm也要从0开始
            if(num == ul.children.length-1){
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -fxWidth * num, function(){
                flag = true
            })
            //8.点击右侧按钮 小圆圈跟着一起变化 在声明一变量circle
            circle++;
            for(var i = 0; i < ul2.children.length; i++){
                if(circle < ul2.children.length){
                        ul2.children[i].className = '';
                }else{
                    circle = 0;
                }
            }
            ul2.children[circle].className = 'current';
        };
    })

    //9.左侧按钮做法
    fxarrow1.addEventListener('click', function(){
        if (flag) {
            flag = false;
            //如果走到第一张图片 此时 ul要快速复元 right=0  unm也要从0开始
            if(num == 0){
                num = ul.children.length - 1;
                ul.style.left = -num * fxWidth + 'px';
            }
            num--;
            animate(ul, -fxWidth * num, function(){
                flag  = true;
            });

            //10.点击右侧按钮 小圆圈跟着一起变化 在声明一变量circle
            circle--;
            //如果circle<0 说明第一张图片 则小圆圈要改为第四个小圆圈
            if(circle < 0){
                circle = ul2.children.length - 1;
            }
            for(var i = 0; i < ul2.children.length; i++){
                        ul2.children[i].className = '';  
            }
            ul2.children[circle].className = 'current';
        }
    });      
    //轮播图自动播放
    var timer = setInterval(function(){
        //手动调用点击事件  
        fxarrow2.click();
    }, 2000);
})