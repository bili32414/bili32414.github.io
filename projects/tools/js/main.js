//邮箱合法性
const isEmail = (e) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e)
}

//判断是否为手机号
const isPhone = (e) => {
    return /^1[0-9]{10}$/.test(e)
}

//判断是否为URL
const isURL = (e) => {
    return /^http[s]?:\/\/.*/.test(e)
}

//密码强度
const pwdLvCheck = (str) => {
    var Lv = 1;
    if (str.length <= 4) {
        return Lv
    }
    if (/[0-9]/.test(str)) { Lv++ }
    if (/[a-z]/.test(str)) { Lv++ }
    if (/[A-Z]/.test(str)) { Lv++ }
    if (/[!@#$%^&*()\-+=\[\]{}|\\:;'"<>,.?/~]/.test(str)) { Lv++ }
    return Lv;
}

//获取两个日期之间的天数
const datecount = (dateInitial, dateFinal) =>{

    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}

//获取浏览器名称
const getBrowserName = () => {
    const userAgent = navigator.userAgent;

    const browserNames = {
        'Firefox': 'Firefox',
        'Chrome': 'Chrome',
        'Safari': 'Apple Safari',
        'Opera': 'Opera',
        'Trident': 'IE',
        'Edge': 'Edge'
    };

    for (const [key, value] of Object.entries(browserNames)) {
        if (userAgent.indexOf(key) > -1) {
            return value;
        }
    }

    return 'Unknown Browser';
};

//获取浏览器版本号
const getBrowserVersion = () => {
    const userAgent = navigator.userAgent;
    let version = 'Unknown Version';

    // 定义一个函数来获取版本号的第一个部分
    const getVersionFirstPart = (userAgent, browser) => {
        const regex = new RegExp(`${browser}\\/?([\\d]+)\\.`);
        const match = userAgent.match(regex);
        return match ? parseInt(match[1], 10) : 'Unknown Version';
    };

    // 检查不同的浏览器
    if (userAgent.indexOf('Firefox') > -1) {
        version = getVersionFirstPart(userAgent, 'Firefox');
    } else if (userAgent.indexOf('Chrome') > -1) {
        version = getVersionFirstPart(userAgent, 'Chrome');
    } else if (userAgent.indexOf('Safari') > -1) {
        // Safari 版本可能在 "Version/" 后面
        version = getVersionFirstPart(userAgent, 'Version');
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        version = getVersionFirstPart(userAgent, 'Opera');
    } else if (userAgent.indexOf('Trident') > -1) {
        // Trident 是 IE 的引擎
        version = 'IE ' + getVersionFirstPart(userAgent, 'rv');
    } else if (userAgent.indexOf('Edge') > -1) {
        // Edge 浏览器
        version = getVersionFirstPart(userAgent, 'Edge');
    }

    return version;
};

//获取操作系统
const getOperatingSystem = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.match(/windows phone/i)) {
        return 'Windows Phone';
    } else if (userAgent.match(/android/i)) {
        return 'Android';
    } else if (userAgent.match(/cros/i)) {
        return 'Chrome OS';
    } else if (userAgent.match(/linux/i)) {
        return 'Linux';
    } else if (userAgent.match(/macintosh|mac os x/i)) {
        return 'macOS';
    } else if (userAgent.match(/iphone|ipad|ipod/i)) {
        return 'iOS';
    } else if (userAgent.match(/win(dows)?( 32)|( 64)|nt 6.1|nt 6.0|windows xp/i)) {
        return 'Windows';
    } else if (userAgent.match(/windows nt 10.0/i)) {
        return 'Windows';
    } else if (userAgent.match(/windows nt 6.2/i)) {
        return 'Windows';
    } else if (userAgent.match(/windows nt 6.3/i)) {
        return 'Windows';
    } else if (userAgent.match(/windows nt 5.1/i)) {
        return 'Windows';
    } else {
        return 'Unknown OS';
    }
};

//获取时区偏移量
const getTimeZoneOffset = () => {
    const offset = new Date().getTimezoneOffset();
    const hours = (offset / -60).toFixed(0); // 转换为小时
    const sign = offset > 0 ? '-' : '+'; // 确定符号
    return `UTC ${sign}${hours}`;
};

//获取网络类型
const getNetworkType = () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
        if (connection.effectiveType) {
            console.log("Network Effective Type: " + connection.effectiveType);
        }
        if (connection.type) {
            console.log("Network Type: " + connection.type);
        }
    } else {
        console.log("未知");
    }
};

