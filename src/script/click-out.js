document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const checkbtn = document.querySelector('.checkbtn');

    checkbtn.addEventListener('click', function () {
        checkbox.checked = !checkbox.checked;
    });

    document.addEventListener('click', function (event) {
        if (!checkbox.contains(event.target) && event.target !== checkbtn) {
            checkbox.checked = false;
        }
    });
});