import GraphModal from 'graph-modal';

new GraphModal('modal');

if (document.querySelector('.modal-thank')) {
    const btnThank = document.querySelector('.modal-thank');
    btnThank.addEventListener('click', () => {
        new GraphModal('modal').open('modal-thank');
    });

    // btnThank.click();
}
