function autorun() {
    alert("OK");
}

if (window.addEventListener) window.addEventListener('load', autorun, false)
else window.onload = autorun