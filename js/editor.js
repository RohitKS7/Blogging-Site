document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.btn');
    let blogCon = document.querySelector('.blog');

    button.addEventListener( 'click', (e)=>{
        console.log(e);
        blogCon.innerHTML = tinyMCE.get('mytextarea').getContent();
    })
})



