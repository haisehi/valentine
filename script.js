let count = 0;
let loading = document.getElementById('loading');
let valueShow = document.getElementById('value-show');

loading.onclick = function () {
    if (count != 0) {
        return;
    }
    count = 0;
    startLoading();
};
function startLoading() {
    if (count == 100) {
        valueShow.innerHTML =
            '<a style="color:white;text-decoration: none;" href="page1.html">Finish</a>';
        count = 0;
        return;
    } else {
        count = count + 1;
        valueShow.innerHTML = count + '%';
        loading.style.setProperty('--loading-value', count + '%');

        setTimeout(startLoading, 50);
    }
}
