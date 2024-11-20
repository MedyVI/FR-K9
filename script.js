// JavaScript pour la fonctionnalité de zoom sur les images

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    const closeBtn = document.createElement('span');

    modal.classList.add('modal');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';

    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target !== modalImg) {
            modal.style.display = 'none';
        }
    });
});
