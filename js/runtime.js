var now = new Date(); // 注意这里的括号，它们是必需的  
  
function createtime() {  
    now.setTime(now.getTime() + 1000); // 这行代码实际上每秒都会将“现在”的时间向前推进一秒，这可能不是您想要的  
  
    // 使用 ISO 8601 日期格式字符串，以避免潜在的解析问题  
    var e = new Date("2024-10-21T00:00:00");  
  
    // 假设这里的 234e8 是一个固定的距离值（234000000 千米），并且 17 是某种转换因子  
    var t = Math.trunc(234e8 + (now - e) / 1000 * 17); // 这行代码计算了一个与当前时间相关的距离值  
  
    // 将距离转换为天文单位（AU），假设 1 AU = 149597870.7 千米（这是一个近似值）  
    var a = (t / 149597870.7).toFixed(6);  
  
    // 计算网站运行的天数、小时数、分钟数和秒数  
    var o = new Date("2024-10-21T00:00:00");  
    var n = (now - o) / (1000 * 60 * 60 * 24); // 天数  
    var r = Math.floor(n);  
    var i = ((now - o) / (1000 * 60 * 60)) % 24; // 小时数（24小时制）  
    var s = Math.floor(i);  
    if (String(s).length === 1) s = "0" + s; // 如果小时数是一位数，则前面补零  
  
    var d = ((now - o) / (1000 * 60)) % 60; // 分钟数  
    var l = Math.floor(d);  
    if (String(l).length === 1) l = "0" + l; // 如果分钟数是一位数，则前面补零  
  
    var g = ((now - o) / 1000) % 60; // 秒数  
    var b = Math.round(g); // 四舍五入秒数  
    if (String(b).length === 1) b = "0" + b; // 如果秒数是一位数，则前面补零  
   
    var c = `<div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i><br>旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;  
  
    // 更新页面上的元素  
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c);  
}  
  
// 设置一个定时器，每秒调用一次 createtime 函数  
setInterval(() => {  
    createtime();  
}, 1000);  
  