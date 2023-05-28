let box = document.getElementById('bo');
    let img = document.getElementById('im')
    let isInside = false;
    let timeout;
  
    box.addEventListener('mouseenter', function() {
      isInside = true;
      clearTimeout(timeout); // 清除延迟隐藏定时器
    });
  
    box.addEventListener('mouseleave', function() {
      isInside = false;
      timeout = setTimeout(function() {
        box.style.left = '-40px';
        img.classList.remove('replace'); // 添加移出事件，移出时移除替换类名
      }, 3000);
    });
  
    box.addEventListener('click', function() {
      if (isInside) {
        if (box.style.left === '50px') { // 如果盒子已经移动到右边，点击后将其移回原位
          box.style.left = '-40px';
          im.classList.remove('replace');
        } else {
          box.style.left = '50px';
          im.classList.add('replace');
        }
      }
    });

    function jump(){
      window.location.href = '../../index.html';
    }