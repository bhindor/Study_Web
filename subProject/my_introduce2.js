const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const age = params.get('age');
const birthYear = params.get('birthYear');
const birthMonth = params.get('birthMonth');
const birthDay = params.get('birthDay');
const introduce_title = params.get('introduce_title');
const intro_body = params.get('intro_body');

document.getElementById('title').textContent = `${name} 자기소개 페이지`;
document.getElementById('my_name').textContent = `${name}(${age})`;
document.getElementById('my_birth').textContent = `${birthYear} / ${birthMonth} / ${birthDay}`;
document.getElementById('my_intro_title').textContent = introduce_title;
document.getElementById('my_intro_body').innerHTML = intro_body.replace(/\n/g, '<br>');