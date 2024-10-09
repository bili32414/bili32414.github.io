let currentLanguage = '';

if (localStorage.getItem('language') != null) {
    currentLanguage = localStorage.getItem('language');
    
} else {
    currentLanguage = 'zh';
}
var isclicking = false;
function changeLanguage(lang) {
    fetch(`/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            const browserLang = getBrowserLanguage().substring(0, 2); // 获取语言代码的前两个字符
            console.log(browserLang + ":" + lang);
            
            if (browserLang != lang) {
                getLanguageMessage(browserLang);
                document.getElementById('language-bar').classList.add('visible');
                document.getElementById('language-bar').classList.remove('hidden');


            } else {
                document.getElementById('language-bar').classList.remove('visible');
                document.getElementById('language-bar').classList.add('hidden');
            }
            localStorage.setItem('language', lang);
            document.title = data.title;
            document.getElementById('logoText').innerHTML = data.logoText;
            document.getElementById('welcomeText').innerHTML = data.welcomeText;
            document.getElementById('home').innerHTML = data.home;
            document.getElementById('aboutme').innerHTML = data.aboutme;
            document.getElementById('service').innerHTML = data.service;
            document.getElementById('blog').innerHTML = data.blog;
            document.getElementById('contactme').innerHTML = data.contactme;
            document.getElementById('schoolName').innerHTML = data.schoolName;
            document.getElementById('aboutTit').innerHTML = data.aboutTit;
            document.getElementById('aboutText').innerHTML = data.aboutText;
            document.getElementById('aboutName').innerHTML = data.aboutName;
            document.getElementById('aboutMainText').innerHTML = data.aboutMainText;
            document.getElementById('aboutBd').innerHTML = data.aboutBd;
            document.getElementById('aboutBdF').innerHTML = data.aboutBdF;
            document.getElementById('aboutWebsite').innerHTML = data.aboutWebsite;
            document.getElementById('aboutPhone').innerHTML = data.aboutPhone;
            document.getElementById('aboutAdd').innerHTML = data.aboutAdd;
            document.getElementById('aboutAge').innerHTML = data.aboutAge;
            document.getElementById('aboutFK').innerHTML = data.aboutFK;
            document.getElementById('aboutSJ').innerHTML = data.aboutSJ;
            document.getElementById('aboutEmail').innerHTML = data.aboutEmail;
            document.getElementById('aboutJob').innerHTML = data.aboutJob;
            document.getElementById('aboutUsr').innerHTML = data.aboutUsr;
            document.getElementById('aboutProjects').innerHTML = data.aboutProjects;
            document.getElementById('aboutStudyTime').innerHTML = data.aboutStudyTime;
            document.getElementById('aboutCodeNum').innerHTML = data.aboutCodeNum;
            document.getElementById('aboutSkillsTit').innerHTML = data.aboutSkillsTit;
            document.getElementById('aboutSkills1').innerHTML = data.aboutSkills1;
            document.getElementById('aboutSkills2').innerHTML = data.aboutSkills2;
            document.getElementById('aboutSkills3').innerHTML = data.aboutSkills3;
            document.getElementById('aboutSkills4').innerHTML = data.aboutSkills4;
            document.getElementById('aboutSkills5').innerHTML = data.aboutSkills5;
            document.getElementById('aboutSkills6').innerHTML = data.aboutSkills6;
            document.getElementById('aboutOtherSkillsTit').innerHTML = data.aboutOtherSkillsTit;
            document.getElementById('aboutOtherSkills1').innerHTML = data.aboutOtherSkills1;
            document.getElementById('aboutOtherSkills2').innerHTML = data.aboutOtherSkills2;
            document.getElementById('aboutOtherSkills3').innerHTML = data.aboutOtherSkills3;
            document.getElementById('aboutOtherSkills4').innerHTML = data.aboutOtherSkills4;
            document.getElementById('aboutOtherSkills5').innerHTML = data.aboutOtherSkills5;
            document.getElementById('aboutOtherSkills6').innerHTML = data.aboutOtherSkills6;
            document.getElementById('aboutOtherSkills7').innerHTML = data.aboutOtherSkills7;
            document.getElementById('aboutOtherSkills8').innerHTML = data.aboutOtherSkills8;
            document.getElementById('aboutOtherSkills9').innerHTML = data.aboutOtherSkills9;
            document.getElementById('aboutOtherSkills10').innerHTML = data.aboutOtherSkills10;
            document.getElementById('aboutOtherSkills11').innerHTML = data.aboutOtherSkills11;
            document.getElementById('aboutOtherSkills12').innerHTML = data.aboutOtherSkills12;
            if (lang != 'zh') {
                document.getElementById('HC').style.display = 'none';
                document.getElementById('aboutPL').style.display = 'none';
                document.getElementById('contantdis').style.display = 'none';
                document.getElementById('contantMB').style.display = 'none';
                document.getElementById('projectsType1').style.display = 'none';
                document.getElementById('projectsTypeW').style.display = 'none';
                document.getElementById('projectsweb1').style.display = 'none';
                document.getElementById('projectsweb2').style.display = 'none';
            }
            document.getElementById('resumeCT1').innerHTML = data.resumeCT1;
            document.getElementById('resumeCT2').innerHTML = data.resumeCT2;
            document.getElementById('resumeCT3').innerHTML = data.resumeCT3;
            document.getElementById('resumeCTT1').innerHTML = data.resumeCTT1;
            document.getElementById('resumeCTT2').innerHTML = data.resumeCTT2;
            document.getElementById('resumeCTT3').innerHTML = data.resumeCTT3;
            document.getElementById('resumeCTTT1').innerHTML = data.resumeCTTT1;
            document.getElementById('resumeCTTT2').innerHTML = data.resumeCTTT2;
            document.getElementById('resumeCTTV').innerHTML = data.resumeCTTV;
            document.getElementById('resumeCTT1C1').innerHTML = data.resumeCTT1C1;
            document.getElementById('resumeCTT1C2').innerHTML = data.resumeCTT1C2;
            document.getElementById('resumeCTT1C3').innerHTML = data.resumeCTT1C3;
            document.getElementById('resumeCTT1C4').innerHTML = data.resumeCTT1C4;
            document.getElementById('resumeCTT1C5').innerHTML = data.resumeCTT1C5;
            document.getElementById('resumeCTT2C1').innerHTML = data.resumeCTT2C1;
            document.getElementById('resumeCTT2C2').innerHTML = data.resumeCTT2C2;
            document.getElementById('resumeCTT2C3').innerHTML = data.resumeCTT2C3;
            document.getElementById('resumeCTT2C4').innerHTML = data.resumeCTT2C4;
            document.getElementById('resumeCTT3C1').innerHTML = data.resumeCTT3C1;
            document.getElementById('resumeCTT3C2').innerHTML = data.resumeCTT3C2;
            document.getElementById('resumeCT3C1').innerHTML = data.resumeCT3C1;
            document.getElementById('resumeCT3C2').innerHTML = data.resumeCT3C2;
            document.getElementById('resumeCT3C3').innerHTML = data.resumeCT3C3;
            document.getElementById('resumeCT3C4').innerHTML = data.resumeCT3C4;

            document.getElementById('servicesTit').innerHTML = data.servicesTit;
            document.getElementById('servicesText').innerHTML = data.servicesText;
            document.getElementById('servicesT1').innerHTML = data.servicesT1;
            document.getElementById('servicesT1C').innerHTML = data.servicesT1C;
            document.getElementById('servicesT2').innerHTML = data.servicesT2;
            document.getElementById('servicesT2C').innerHTML = data.servicesT2C;
            document.getElementById('servicesT3').innerHTML = data.servicesT3;
            document.getElementById('servicesT3C').innerHTML = data.servicesT3C;
            document.getElementById('servicesT4').innerHTML = data.servicesT4;
            document.getElementById('servicesT4C').innerHTML = data.servicesT4C;
            document.getElementById('servicesT5').innerHTML = data.servicesT5;
            document.getElementById('servicesT5C').innerHTML = data.servicesT5C;
            document.getElementById('servicesT6').innerHTML = data.servicesT6;
            document.getElementById('servicesT6C').innerHTML = data.servicesT6C;

            document.getElementById('projectsTit').innerHTML = data.projectsTit;
            document.getElementById('projectsText').innerHTML = data.projectsText;
            document.getElementById('projectsType1').innerHTML = data.projectsType1;
            document.getElementById('projectsTypeB').innerHTML = data.projectsTypeB;
            document.getElementById('projectsTypeW').innerHTML = data.projectsTypeW;
            document.getElementById('projectsT0').innerHTML = data.projectsT0;
            document.getElementById('projectsT0T').innerHTML = data.projectsTypeB;
            document.getElementById('projectsT1').innerHTML = data.projectsT1;
            document.getElementById('projectsT1T').innerHTML = data.projectsTypeB;
            document.getElementById('projectsT2').innerHTML = data.projectsT2;
            document.getElementById('projectsT2T').innerHTML = data.projectsTypeB;
            document.getElementById('projectsT3').innerHTML = data.projectsT3;
            document.getElementById('projectsT3T').innerHTML = data.projectsTypeW;
            document.getElementById('projectsT4').innerHTML = data.projectsT4;
            document.getElementById('projectsT4T').innerHTML = data.projectsTypeW;

            document.getElementById('ClearTempButton').innerHTML = data.ClearTempButton;
            document.getElementById('langTit').innerHTML = data.langTit;
            document.getElementById('langText').innerHTML = data.langText;
            document.getElementById('contantTit').innerHTML = data.contantTit;
            document.getElementById('contantText').innerHTML = data.contantText;
            document.getElementById('contantAbout').innerHTML = data.aboutTit;
            document.getElementById('contantCopyright').innerHTML = data.copyright;
            document.getElementById('contantZS').innerHTML = data.contantZS

            currentLanguage = lang;
        })
        .catch(error => console.error('Error loading the language file:', error));
}

// 初始加载国语
changeLanguage(currentLanguage);

function ClearTempButton() {
    console.log(currentLanguage);

    if (currentLanguage === "zh") {
        if (confirm("是否清除所有临时数据？")) {
            localStorage.clear();
            alert("清除成功！请重新加载网页以应用更改。");
            document.getElementById('ClearTempButton').disabled = true;
            document.getElementById('ClearTempButton').innerHTML = "请重新加载网页以应用更改";
            document.getElementById('ClearTempButton').style.color = "red";
        }
    } else if (currentLanguage === "en") {
        if (confirm("Do you want to clear all temporary data?")) {
            localStorage.clear();
            alert("Clear success! Please reload the webpage to apply the changes.");
            document.getElementById('ClearTempButton').disabled = true;
            document.getElementById('ClearTempButton').innerHTML = "Reload Web to apply the changes";
            document.getElementById('ClearTempButton').style.color = "red";
        }
    } else if (currentLanguage === "ja") {
        if (confirm("すべての一時データをクリアしますか？")) {
            localStorage.clear();
            alert("クリアに成功しました！変更を適用するには、ウェブページを再読み込みしてください。");
            document.getElementById('ClearTempButton').disabled = true;
            document.getElementById('ClearTempButton').innerHTML = "変更を適用するためのWebページの再ロード";
            document.getElementById('ClearTempButton').style.color = "red";
        }
    }
}
function changeLanguageZH() {
    changeLanguage("zh");
    if (confirm("重新加载网页以应用更改\n点击确定重新加载")) {
        location.reload();
    } else {
        document.getElementById('ZHTip').innerHTML = "Simplified Chinese <br>簡体字中国語 <br><red>重新加载网页以应用更改</red><br>&nbsp;";
    }
}