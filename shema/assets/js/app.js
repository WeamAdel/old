$(function () {
    let dialogue = $('#dialogue');
    let togglerBtn = $('#toggler-btn');
    let dialogueToggler = $('#dialogue-toggler');

    togglerBtn.on('click', ()=> {
        dialogue.animate({
            left: 0
        });
    });

    dialogueToggler.on('click', ()=> {
        dialogue.animate({
            left: 100 + '%'
        }, ()=> {dialogue.hide()});
    });
});