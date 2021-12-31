function resetBaseFontSize() {
    const fontSize = Math.min(50, window.innerWidth * .1)
    document.querySelector("html")!.style.fontSize = `${fontSize}px`
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", resetBaseFontSize)
}
else {
    resetBaseFontSize()
}

window.addEventListener("resize", resetBaseFontSize)
