/**
* Template Name: Personal - v4.3.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function (e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function () {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function () {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()


//------------------------------语言切换提示------------------------------
function getBrowserLanguage() {
  return navigator.language || navigator.userLanguage;
}

// 获取JSON文件中的提示信息
function getLanguageMessage(lang) {
  fetch('\\assets\\js\\message.json')
    .then(response => response.json())
    .then(data => {
      const message = data[lang];
      document.getElementById('tipmessage').innerHTML = message;
      document.getElementById('language-bar').classList.remove('hidden');
    })
    .catch(error => console.error('Error loading the language file:', error));
}

function closeLanguageBar() {
  document.getElementById('language-bar').classList.remove('visible');
  document.getElementById('language-bar').classList.add('hidden');
}



// 页面加载时执行
document.addEventListener('DOMContentLoaded', function () {
  const browserLang = getBrowserLanguage().substring(0, 2); // 获取语言代码的前两个字符
  const pageLang = document.documentElement.lang.substring(0, 2); // 获取页面语言代码的前两个字符


  if (browserLang !== pageLang) {
    getLanguageMessage(browserLang);
    document.getElementById('language-bar').classList.add('visible');
  }
});



//------------------------------语言更新时间获取------------------------------
const jsonUrl = '/assets/js/UpdateTime.json';

// 使用fetch API获取.json文件
fetch(jsonUrl)
  .then(response => {
    // 确保请求成功
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // 解析JSON数据
  })
  .then(data => {
    // 使用获取到的数据更新网页上的元素
    document.getElementById('LUTzh').textContent = data.zh;
    document.getElementById('LUTen').textContent = data.en;
    document.getElementById('LUTjp').textContent = data.ja;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
//------------------------------判断手机------------------------------
function isMobile() {
  const ua = navigator.userAgent;
  if (/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i.test(ua)) {
    return true;
  } else {
    return false;
  }
}
//------------------------------欢迎界面设置------------------------------
var Clanguage = (navigator.language || navigator.userLanguage).substring(0, 2);
if (!localStorage.getItem('startup')) {
  welcome();
  console.log("welcome");
} else {
  const now = Date.now();

  // 从localStorage获取存储的时间戳
  const storedTimestamp = localStorage.getItem('timestamp');

  // 检查是否存储了时间戳
  if (storedTimestamp) {
    // 计算时间差（单位：毫秒）
    const diff = now - parseInt(storedTimestamp);

    // 检查时间差是否超过7天（7 * 24 * 60 * 60 * 1000毫秒）
    if (diff > 7 * 24 * 60 * 60 * 1000) {
      // 超过7天，重新写入当前时间戳
      welcome();
    }
  } else {
    // 如果没有存储时间戳，写入当前时间戳
    localStorage.setItem('finishtime', now.toString());
    console.log('finishtime stored for the first time.');
  }
}
//-------------------------------欢迎加载-------------------------------
function welcome() {
  if (!isMobile()) {
    document.getElementById('t1stWelcomePage').style.display = "flex";
    console.log("加载welcome窗口");
    showWelcome();
  }

}
//-------------------------------显示欢迎主界面-------------------------------
function showWelcome() {
  document.getElementById('t1WPC').innerHTML = `
    <div id="t1WPCW" class="cx">
      <h1>欢迎·Welcome</h1>
      <div class="t1WPCWW">
        <!-- 使用JavaScript动态添加style -->

      </div>
      <div class="step">
        <button class="button" onclick="showLanguageStep()">下一步</button>
      </div>
    </div>`;
  welcomeText();
}
function showLanguageStep() {
  document.getElementById('t1WPCW').classList.remove('cx');
  document.getElementById('t1WPCW').classList.add('xs');
  setTimeout(function () {
    document.getElementById('t1WPC').innerHTML = `
      <div id="t1WPCW1" class="cx">
        <h1>选择您的语言</h1>
        <div id="Lamain">
          <div id="LamainEN" onclick="cLanguage('en')">
            <div class="icon" style="color:green;font-size:30px;"><i class="i bi-globe2"></i></div><br>
            <p id="engselect">English</p>
            </div>
            <div id="LamainZH" onclick="cLanguage('zh')" >
              <div class="icon"style="color:green;font-size:30px;"><i class="i bi-globe2"></i></div><br>
              <p id="zhselect">简体中文</p>
            </div>
          <div id="LamainJA" onclick="cLanguage('ja')">
            <div class="icon" style="color:green;font-size:30px;"><i class="i bi-globe2"></i></div><br>
            <p id="jaselect">日本語</p>
          </div>
          
        </div>
        <h5>稍后您可以在菜单栏里的language里更改</h5>
        <div class="step">
          <button class="button" onclick="showUpdatesStep()">下一步</button>
        </div>
      </div>
      `;

    console.log("浏览器语言" + Clanguage);

    if (Clanguage == 'zh') {
      document.getElementById('zhselect').innerHTML = "简体中文<br>(当前浏览器语言)"; cLanguage('zh');
    } else if (Clanguage == 'en') {
      document.getElementById('engselect').innerHTML = "English<br>(Current browser language)"; cLanguage('en');
    } else if (Clanguage == 'ja') {
      document.getElementById('jaselect').innerHTML = "日本語<br>(現在のブラウザ言語)"; cLanguage('ja');
    }
  }, 1000);
}

function showUpdatesStep() {
  document.getElementById('t1WPCW1').classList.remove('cx');
  document.getElementById('t1WPCW1').classList.add('xs');
  setTimeout(function () {
    document.getElementById('t1WPC').innerHTML = `
    <div id="t1WPCW2" class="cx">
    <h1>最近更新·Recent updates</h1>
      <div id="UpdateMD">
      </div>
        <div class="step">
            <button class="button" onclick="complete()">Finish</button>
        </div>
    </div>
      `;
    SeeUpdateMD();
  }, 1000);
}

function complete() {
  document.getElementById('t1stWelcomePage').style.display = 'none';
  localStorage.setItem('startup', 'true');
  localStorage.setItem('finishtime', Date.now());
}
function welcomeText() {
  const container = document.querySelector('.t1WPCWW');
  const messages = [
    '欢 迎',  // 中文
    'Welcome',  // 英语
    'Bienvenido',  // 西班牙语
    'Hola!',  // 西班牙语
    'Benvenuto',  // 意大利语
    'ようこそ',  // 日语
    '환영합니다',  // 韩语
    'Bienvenue',  // 法语
    'Cześć',  // 波兰语
    'مرحبا',  // 阿拉伯语
    'হ্যালো',  // 孟加拉语
    'नमस्ते',  // 印地语
    'Здравствуйте'  // 俄语
  ];
  messages.forEach((msg, index) => {
    const div = document.createElement('div');
    div.className = 'welcome-message';
    div.textContent = msg;
    div.style.animationName = 'slide';
    div.style.animationDuration = '15s';
    div.style.animationTimingFunction = 'linear';
    div.style.animationIterationCount = 'infinite';
    div.style.animationDelay = `${index * 2}s`; // 设置不同的延迟时间
    // 随机生成纵向位置
    div.style.setProperty('--vertical-offset', `${Math.random() * 400}px`);
    container.appendChild(div);

    if (!document.getElementById('t1WPCW')) {
      return; // 如果找不到元素，停止循环
    }
  });
}


function cLanguage(lan) {
  changeLanguage(lan);
  Clanguage = lan;
}


function SeeUpdateMD() {
  const UpdateMD = '/assets/js/UpdateMD.json';

  // 使用fetch API获取.json文件
  fetch(UpdateMD)
    .then(response => {
      // 确保请求成功
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // 解析JSON数据
    })
    .then(data => {
      console.log(Clanguage);

      if (Clanguage == 'zh') {
        document.getElementById('UpdateMD').innerHTML = data.zh;
      } else if (Clanguage == 'en') {
        document.getElementById('UpdateMD').innerHTML = data.en;
      } else if (Clanguage == 'ja') {
        document.getElementById('UpdateMD').innerHTML = data.ja;
      }

    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
// 判断访问的地区是否是中国，如果是就将id为TrunToChina显示
  if (navigator.language.includes('zh')) {
    document.getElementById('TurnToChina').style.display = 'flex';
  }