//邮箱合法性
function EmailCheck() {
    var email = document.getElementById('emailinput').value;
    var output = document.getElementById('eo');
    if (email == "") {
        output.innerHTML = "<red>请输入</red>";
    } else if (isEmail(email)) {
        output.innerHTML = "<green>是邮箱格式</green>";
    } else {
        output.innerHTML = "<waring>不是邮箱格式</waring>";
    }
}
//手机合法性
function phoneCheck() {
    var phone = document.getElementById('phoneinput').value;
    var output = document.getElementById('po');
    if (phone == "") {
        output.innerHTML = "<red>请输入</red>";
    } else if (isPhone(phone)) {
        output.innerHTML = "<green>是手机格式</green>";
    } else {
        output.innerHTML = "<waring>不是手机格式</waring>";
    }
}
//url合法性
function urlCheck() {
    var url = document.getElementById('urlinput').value;
    var output = document.getElementById('uo');
    if (url == "") {
        output.innerHTML = "<red>请输入</red>";
    } else if (isURL(url)) {
        output.innerHTML = "<green>是url格式</green>";
    } else {
        output.innerHTML = "<waring>不是url格式</waring>";
    }
}
//密码强度
function pwdLV() {
    var pwd = document.getElementById('pwdinput').value;
    var output = document.getElementById('pwdo');
    if (pwd == "") {
        output.innerHTML = "<red>请输入</red>";
    } else if (pwdLvCheck(pwd) == 1) {
        output.innerHTML = "<waring>LV1（密码小于5位）</waring>";
    } else if (pwdLvCheck(pwd) == 2) {
        output.innerHTML = "<warning>LV2</waring>";
    } else if (pwdLvCheck(pwd) == 3) {
        output.innerHTML = "<waring>LV3</waring>";
    } else if (pwdLvCheck(pwd) == 4) {
        output.innerHTML = "<green>LV4</green>";
    } else if (pwdLvCheck(pwd) == 5) {
        output.innerHTML = "<green>LV5</green>";
    }
}
//日期计算
function datecoutcheck() {
    var Output = document.getElementById('dco');
    var Sdate = document.getElementById('Sdateinput').value;
    var Edate = document.getElementById('Edateinput').value;
    var countoutput = datecount(new Date(Sdate), new Date(Edate));
    if (!Sdate || !Edate) {

        Output.innerHTML = "<red>日期未输入完全</red>";
    } else if (countoutput > 0) {
        Output.innerHTML = "<green>" + countoutput + "天</warin>";
    } else {
        Output.innerHTML = "<red>日期错误</red>";
    }

}


function deviceinfo() {
    var bN = document.getElementById("browserName");
    var bV = document.getElementById("browserVersion");
    var bL = document.getElementById("browserLanguage");
    var oT = document.getElementById("osType");
    var oZ = document.getElementById("osTimeZone");
    var dM = document.getElementById("deviceMemory");
    var nI = document.getElementById("networkInformation");
    var sR = document.getElementById("screenResolution");
    var bI = document.getElementById("batteryInformation");


    bN.innerHTML = getBrowserName()
    bV.innerHTML = getBrowserVersion()
    bL.innerHTML = navigator.language;
    oT.innerHTML = getOperatingSystem()
    oZ.innerHTML = getTimeZoneOffset()
    dM.innerHTML = "至少" + navigator.deviceMemory + "GB<red><sup>ⓘ</sup></red>";
    nI.innerHTML = navigator.connection.effectiveType + "<red><sup>ⓘ</sup></red>";
    sR.innerHTML = window.screen.width + "*" + window.screen.height + "<red><sup>ⓘ</sup></red>";
    bi = navigator.getBattery();
    bi.then(function (battery) {
        var dyspq = battery.charging
        if (dyspq) {
            bI.innerHTML = "在充电" + battery.level * 100 + "%";
        } else {
            bI.innerHTML = "未充电" + battery.level * 100 + "%";
        }
    })
}

 async function copyinfo() {
    try {
        var bN = getBrowserName();
        var bV = getBrowserVersion();
        var bL = navigator.language;
        var oT = getOperatingSystem();
        var oZ = getTimeZoneOffset();
        var dM = "至少" + navigator.deviceMemory + "GB";
        var nI = navigator.connection.effectiveType;
        var sR = window.screen.width + "*" + window.screen.height;
        
        var batteryInfo = await navigator.getBattery();
        var bI = batteryInfo.charging ? "正在充电（" + batteryInfo.level * 100 + "%）" : "未在充电（" + batteryInfo.level * 100 + "%）";

        var info = `浏览器名称: ${bN}\n浏览器版本: ${bV}\n浏览器语言: ${bL}\n操作系统: ${oT}\n时区偏移: ${oZ}\n设备内存: ${dM}(由于浏览器安全策略，设备内存信息无法完整获取)\n网络类型: ${nI}(slow\\2g\\3g\\4g\\5g\\未知)\n屏幕分辨率: ${sR}(由于浏览器安全策略，无法获取到完整屏幕分辨率)\n电池信息: ${bI}`;
        var success=document.getElementById("ok")
        await navigator.clipboard.writeText(info);
        success.style.opacity=1;
        setTimeout(function(){
            success.style.opacity=0;
        },2000)
    } catch (error) {
        console.error("复制失败: ", error);
    }
}