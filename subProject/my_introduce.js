document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn_register').addEventListener('click', function () {
        const name = document.getElementById('txt_name').value;
        const age = document.getElementById('txt_age').value;
        const birthYear = document.getElementById('txt_birth').value;
        const birthMonth = document.getElementById('sel_mon').value;
        const birthDay = document.getElementById('txt_day').value;
        const introduce_title = document.getElementById('txt_introduce_title').value;
        const intro_body = document.getElementById('txt_introduce').value;

        const params = new URLSearchParams({
            name: name,
            age: age,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDay: birthDay,
            introduce_title: introduce_title,
            intro_body: intro_body,
        });

         window.location.href = 'my_introduce2.html?' + params.toString();
     });
});