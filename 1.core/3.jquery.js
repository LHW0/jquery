$('#myId') // <div id='myId'></div>

//과제 : class myClass DOM들을 찾아라.
$('.myClass')

//과제 : name attribute value 가 surname 인 input DOM 들을 찾아라.
$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li')
// 위 selector에 해당하는 HTML code를 작성하라
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/

$('a'.external:first)
/*
<a class='external'></a/> //first가 있으면 얘만 출력됨
<a class='external'></a/>
*/

$('tr:odd')
/*
<ul>
    <li></li>
    <li></li> //홀수
    <li></li>
    <li></li> //홀수
</ul>
*/

$('div:visible')  // 보이게함

$('div:gt(1)') // 1보다 크다
/*
<div></div>
<div></div>
<div></div>  --리턴(2)
*/

$('div:animated')  //애니메이션 골라냄

$('a[rel$="thinger"]') //rel값이 thinger 인것을 골라냄
/*
<a rel='do-nothinger'></a>
<a rel='do-thinger'></a>
*/

$('div.foo').has('p')
/*
<div class='foo'>
    <p></P>
</div>          //얘만 리턴

<div class='foo'>
</div>
*/

$('ul li').filter('current')
/*
<ul>
    <li class='current></li>    //얘가 리턴
    <li></li>       //.not 이면 얘가 리턴
</ul>
*/

$('ul li').not('.current')      //67번줄

$('ul li').eq(1) // 1번 인덱스 찾음 67번줄

$('form :button')
/*
    <form>
        <button><button>
        <input type='button'>
    </form>
*/

$('form :radio')  // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked')
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

('form :selected') //<select><option></option></select>

$('form :enabled')
$('form :diabled')

$('form : file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit></button>
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')
//과제 위 selector 에 해당하는 html code를 작성하라
/*
<form>
    <input type='radio' name='gender'/>
</form>
*/

$('form :rest') // <input type='rest'/>

$('form :submit') // <input type='submit'/>
