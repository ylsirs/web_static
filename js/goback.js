window.addEventListener('load', function(){
    var section = document.querySelector('section');
    var header = document.querySelector('#header');
    var miaosha =  document.querySelector('.miaosha');
    var goBack = document.querySelector('.gdl-goback');
    var shortcut = document.querySelector('.shortcut')
    var headerTop = header.offsetTop;
    var miaoshaTop = miaosha.offsetTop;
    var shortcutTop = shortcut.offsetTop;
    //console.log(headerTop - shortcutTop);
    var sectionTop = section.offsetTop - headerTop;
    var headd = document.querySelector('.head-close');
    var header = document.querySelector('header');
    headd.onclick = function(){
        header.style.display = 'none';
        section.style.top = '183px';
    }   
    document.addEventListener('scroll', function(){
        //console.log(header.style.display == 'none');
       // console.log(shortcutTop);
        if (header.style.display == 'none') {
            if (window.pageYOffset >= headerTop - shortcutTop) {  //window.pageYOffset不带单位
                section.style.position = 'fixed';
                section.style.top = sectionTop + 'px';
                } else {
                    section.style.position = 'absolute';
                    section.style.top = '183px';
                }
                if (window.pageYOffset >= miaoshaTop) {
                    goBack.style.display = 'block';
                } else {
                    goBack.style.display = 'none';
            }
        } else {
            if (window.pageYOffset >= headerTop) {  //window.pageYOffset不带单位
                section.style.position = 'fixed';
                section.style.top = sectionTop + 'px';
                } else {
                    section.style.position = 'absolute';
                    section.style.top = '263px';
                }
                if (window.pageYOffset >= miaoshaTop) {
                    goBack.style.display = 'block';
                } else {
                    goBack.style.display = 'none';
            }
        }
        
    })
    goBack.addEventListener('click', function(){
        window.scroll(0, 0);
        // 窗口滚动对象为 window
     });
})