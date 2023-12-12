// function autorun() {
//     // Se ejecuta al inicio del script
// }

// if (window.addEventListener) window.addEventListener('load', autorun, false)
// else window.onload = autorun

lightGallery(document.getElementById('lightgallery'), {});

const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 400,
    dynamicEl: [
        {
            src: 'images/wp_fc/wp_fc_1.jpeg',
            thumb: 'img/wp_fc/wp_fc_1.jpeg',
        },
        {
            src: 'images/wp_fc/wp_fc_2.jpeg',
            thumb: 'img/wp_fc/wp_fc_2.jpeg',
        },
        {
            src: 'images/wp_fc/wp_fc_3.jpeg',
            thumb: 'img/wp_fc/wp_fc_3.jpeg',
        },
        {
            src: 'images/wp_fc/wp_fc_4.jpeg',
            thumb: 'img/wp_fc/wp_fc_4.jpeg',
        },
        {
            src: 'images/wp_fc/wp_fc_5.jpeg',
            thumb: 'img/wp_fc/wp_fc_5.jpeg',
        },
    ],
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();