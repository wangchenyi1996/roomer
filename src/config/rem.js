/*
 * @Description: rem
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-06-10 12:26:39
 * @LastEditors: 王强
 * @LastEditTime: 2020-06-10 12:26:40
 */ 
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 15 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);