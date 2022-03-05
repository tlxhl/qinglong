/* ck1 助力作者, 后续助力ck1, ck1别黑号 */ const $ = 
new Env("女王驾到 钜惠来袭"); const jdCookieNode = 
$.isNode() ? require('./jdCookie.js') : ''; const 
notify = $.isNode() ? require('./sendNotify') : ''; 
let cookiesArr = [], cookie = '', message = ''; let 
ownCode = null; let authorCodeList = [] if 
($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => { 
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG 
    === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]"; 
    cookiesData = JSON.parse(cookiesData); cookiesArr 
    = cookiesData.map(item => item.cookie); 
    cookiesArr.reverse(); 
    cookiesArr.push(...[$.getdata('CookieJD2'), 
    $.getdata('CookieJD')]); cookiesArr.reverse(); 
    cookiesArr = cookiesArr.filter(item => !!item);
}
!(async () => {
    $.getAuthorCodeListerr = false if (!cookiesArr[0]) 
    {
        $.msg($.name, 
        '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 
        'https://bean.m.jd.com/bean/signIndex.action', 
        { "open-url": 
        "https://bean.m.jd.com/bean/signIndex.action" 
        });
        return;
    }
    // authorCodeList = await 
    // getAuthorCodeList('https://gitee.com/fatelight/Code/raw/master/lzdz1.json')
    if($.getAuthorCodeListerr === false){ 
        authorCodeList = [
            // '980f55cfc5494ff895ddf9a3b2d3ff3b',
        ]
    }
    // console.log(authorCodeList)
    for (let i = 0; i < cookiesArr.length; i++) { if 
        (cookiesArr[i]) {
            cookie = cookiesArr[i] originCookie = 
            cookiesArr[i] newCookie = '' $.UserName = 
            decodeURIComponent(cookie.match(/pt_pin=(.+?);/) 
            && cookie.match(/pt_pin=(.+?);/)[1]) 
            $.index = i + 1; $.isLogin = true; 
            $.nickName = ''; await checkCookie(); 
            console.log(`\n******开始【京东账号${$.index}】${$.nickName 
            || $.UserName}*********\n`);
            if (!$.isLogin) { $.msg($.name, 
                `【提示】cookie已失效`, 
                `京东账号${$.index} ${$.nickName || 
                $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, 
                { "open-url": 
                "https://bean.m.jd.com/bean/signIndex.action" 
                });
                // if ($.isNode()) { await 
                //     notify.sendNotify(`${$.name}cookie已失效 
                //     - ${$.UserName}`, 
                //     `京东账号${$.index} 
                //     ${$.UserName}\n请重新登录获取cookie`);
                // }
                continue
            }
            $.bean = 0; $.ADID = 
            getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 
            1); $.UUID = 
            getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'); 
            authorCodeList = [
                '3bb2a33661eb4828ad2d192b553e6ab2' ]
            // $.authorCode = authorCodeList[random(0, 
            // authorCodeList.length)]
            $.authorCode = ownCode ? ownCode : 
            authorCodeList[random(0, 
            authorCodeList.length)] $.authorNum = 
            `${random(1000000, 9999999)}` $.randomCode 
            = random(1000000, 9999999) $.activityId = 
            'unionkbblnt20220305dzlhkk' 
            $.activityShopId = '1000001638' 
            $.activityUrl = 
            `https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity/${$.authorNum}?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}&adsource=null&shareuserid4minipg=null&shopid=undefined&lng=00.000000&lat=00.000000&sid=&un_area=` 
            await member();
            // await $.wait(5000)
            if ($.bean > 0) { message += 
                `\n【京东账号${$.index}】${$.nickName 
                || $.UserName} \n └ 获得 ${$.bean} 
                京豆。`
            }
        }
    }
    if (message !== '') { if ($.isNode()) { await 
            notify.sendNotify($.name, message, '', 
            `\n`);
        } else {
            $.msg($.name, '有点儿收获', message);
        }
    }
})()
    .catch((e) => { $.log('', `❌ ${$.name}, 失败! 
        原因: ${e}!`, '')
    })
    .finally(() => { $.done();
    })
async function member() { $.token = null; $.secretPin 
    = null; $.openCardActivityId = null await 
    getFirstLZCK() await getToken(); await 
    task('dz/common/getSimpleActInfoVo', 
    `activityId=${$.activityId}`, 1) if ($.token) {
        await getMyPing(); if ($.secretPin) { 
            console.log("去助力 -> "+$.authorCode) 
            await task('common/accessLogWithAD', 
            `venderId=${$.activityShopId}&code=99&pin=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}&pageUrl=${$.activityUrl}&subType=app&adSource=null`, 
            1); await 
            task('wxActionCommon/getUserInfo', 
            `pin=${encodeURIComponent($.secretPin)}`, 
            1) if ($.index === 1) {
                await 
                task('linkgame/activity/content', 
                `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}&pinImg=&nick=${encodeURIComponent($.pin)}&cjyxPin=&cjhyPin=&shareUuid=${encodeURIComponent($.authorCode)}`, 
                0, 1)
            } else {
                await task('linkgame/activity/content', `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}&pinImg=&nick=${encodeURIComponent($.pin)}&cjyxPin=&cjhyPin=&shareUuid=${encodeURICompon
