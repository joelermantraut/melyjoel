lightgallery = document.getElementById('lightgallery');
lightGallery(lightgallery, {
    closable: true,
});

images_list = [
    {
        src: "images/photos/primera_vez_que_nos_vimos.png",
        alt: "Nuestro primer beso (14/11/2023)"
    },
    {
        src: "images/photos/el-dia-que-cambio-todo.jpeg",
        alt: "El día que todo cambió (6/08/2023)"
    },
    {
        src: "images/photos/nuestra_primera_foto.png",
        alt: "Primera foto (19/09/2023)"
    },
    {
        src: "images/photos/photo-n.jpeg",
        alt: "Nuestro primer beso (14/11/2023)"
    },
    {
        src: "images/photos/photo-n1.jpeg",
        alt: "Nuestro primer 'Te amo' (20/11/2023)"
    },
    {
        src: "images/photos/mas_que_sentimientos.jpeg",
        alt: "Más que sentimientos"
    },
    {
        src: "images/photos/primera-cena-familiar.jpeg",
        alt: "Primera cena familiar (2/12/2023)"
    },
    {
        src: "images/photos/primera-cena-con-familiares.jpeg",
        alt: "Primera cena con familiares (3/12/2023)"
    },
    {
        src: "images/photos/verdadera_formalizacion.jpeg",
        alt: "La verdadera formalización (13/12/2023)"
    },
    {
        src: "images/photos/primer_viaje.jpeg",
        alt: "Primer viaje (17/12/2023)"
    },
    {
        src: "images/photos/primera_navidad.jpeg",
        alt: "Primera navidad (24/12/2023)"
    },
    {
        src: "images/photos/primer_peli_juntos.jpeg",
        alt: "Primera salida al cine (26/12/2023)"
    }
]

add_image_to_gallery = function(src, alt) {
    let a = document.createElement('a');
    a.href = src;

    let img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    a.appendChild(img);

    return a;
}

lazy_load = function(parent, n_images) {
    if (n_images > images_list.length) {
        n_images = images_list.length;
    }

    for (let i = 0; i < n_images; i++) {
        let element = add_image_to_gallery(
            images_list[i].src,
            images_list[i].alt
        );
        document.getElementById("lightgallery").appendChild(element);
    }

    images_list = images_list.slice(n_images, images_list.length);
}

window.onscroll = function(e) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        // Reached bottom of document
        lazy_load(lightGallery, 3);
    }
}

function autorun() {
    lazy_load(lightGallery, 3);
}

if (window.addEventListener) window.addEventListener('load', autorun, false)
else window.onload = autorun