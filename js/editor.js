// trying what happens if i submit the content -
// this function is only a test function to see that content of editor can be easily send by publish button.
// the main function shall publish this content in deso blockchain.
document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.btn');
    let blogCon = document.querySelector('.blog');

    newFunction(button, blogCon);
});
function newFunction(button, blogCon) {
    button.addEventListener('click', (e) => {
        blogCon.innerHTML = tinyMCE.get('mytextarea').getContent();
        e.preventDefault();
    });
}
