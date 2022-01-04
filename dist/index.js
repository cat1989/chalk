"use strict";
function resetBaseFontSize() {
    var fontSize = Math.min(50, window.innerWidth * .1);
    document.querySelector("html").style.fontSize = "".concat(fontSize, "px");
}
if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", resetBaseFontSize);
}
else {
    resetBaseFontSize();
}
window.addEventListener("resize", resetBaseFontSize);
//# sourceMappingURL=index.js.map