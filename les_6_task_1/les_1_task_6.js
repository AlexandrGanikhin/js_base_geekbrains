// 1. Доработать функцию замены картинки в галерее таким образом,
// чтобы она проверяла наличие картинки по указанному в src адресу.

//теперь функция проверяет наличие большой картинки и, если картинки нет, использует маленькую картинку

'use strict';

const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);

        document.querySelector(this.settings.previewSelector)
            .addEventListener('click', (event) => {
                this.containerClickHandler(event);
            });
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        const _this = this;
        const img = new Image();
        img.src = event.target.dataset.full_image_url;
        img.onerror = function () {
            _this.openImage(event.target.src);
        }
        img.onload = function () {
            _this.openImage(event.target.dataset.full_image_url);
        }
    },

    openImage(src) {
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },

    getScreenContainer() {
        const galleryWrapperElement = document
            .querySelector(`.${this.settings.openedImageWrapperClass}`);

        if (galleryWrapperElement) return galleryWrapperElement;

        return this.createScreenContainer();
    },

    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);

        document.body.appendChild(galleryWrapperElement);

        return galleryWrapperElement;
    },

    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },
};

gallery.init({ previewSelector: '.galleryPreviewsContainer' })
