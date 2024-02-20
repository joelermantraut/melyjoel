lightGalleryObject = undefined;

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
    var lightgallery = document.getElementById(parent);

    if (n_images > images_list.length) {
        n_images = images_list.length;
    }

    for (let i = 0; i < n_images; i++) {
        let element = add_image_to_gallery(
            images_list[i].src,
            images_list[i].alt
        );
        lightgallery.appendChild(element);
    }

    images_list = images_list.slice(n_images, images_list.length);

    lightGalleryObject.refresh();
}

window.onscroll = function(e) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        // Reached bottom of document
        lazy_load("lightgallery", 3);
    }
}

function autorun() {
    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
    // true if mobile, false otherwise

    lightgallery = document.getElementById("lightgallery");
    lightGalleryObject = lightGallery(lightgallery, {
        closable: true,
    });

    if (window.mobileCheck) {
        lazy_load("lightgallery", 6);
    } else {
        lazy_load("lightgallery", 6);
    }

}

if (window.addEventListener) window.addEventListener('load', autorun, false)
else window.onload = autorun