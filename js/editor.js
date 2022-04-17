

tinymce.init({
    selector: '#mytextarea',
    height: 500,
    plugins: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
        'media', 'table', 'emoticons', 'template', 'help', 'quickbars',
    ],
    toolbar: 'insertfile undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | quickimage ',
    menu: {
        favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
    },
    menubar: 'favs file edit view insert format tools table help',
    content_css: 'css/content.css',
});

document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.btn');
    let blogCon = document.querySelector('.blog');

    button.addEventListener( 'click', (e)=>{
        console.log(e);
        blogCon.innerHTML = tinyMCE.get('mytextarea').getContent();
    })
})



