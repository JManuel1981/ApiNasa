document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu-icon");
    menuIcon.addEventListener("click", function () {
        UIkit.offcanvas('#panel-derecho').hide();
        UIkit.offcanvas("#panel-izquierdo").toggle();
    });

    var menuIcon2 = document.getElementById("menu-icon-derecho");
    menuIcon2.addEventListener("click", function () {
        console.log('derecho')
        UIkit.offcanvas('#panel-izquierdo').hide();
        UIkit.offcanvas("#panel-derecho").toggle();
    });



    var datePicker = document.getElementById("date-picker");
    var imageContainer = document.getElementById("image-container");
    var nasaImage = document.getElementById("nasa-image");
    var imageTitle = document.getElementById("image-title");
    var imageDate = document.getElementById("image-date");
    var imageAuthor = document.getElementById("image-author");
    var imageIcons = document.getElementById("image-icons");
    var modalcontenido = document.getElementById('modal-sections')
    var boton = document.getElementById('boton-modal');

    datePicker.addEventListener("change", function () {
        var fecha = datePicker.value;
        var url = "https://api.nasa.gov/planetary/apod?api_key=aaLRYahjb9qNefzZCj8sSk3FK0EylujzNPOQUeid&date=" + fecha;
        var url2 = 'https://api.jsonbin.io/v3/b/63f87beaebd26539d08463c4/latest?X-ACCESS-KEY=$2b$10$Q9M6KfGalr3hn0sRfVfgNekvwa.2mfL7hK0bWlFRI0rdSUxbt0ZZK&meta=false'

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                nasaImage.src = data.url;
                nasaImage.alt = data.title;
                imageTitle.textContent = data.title;
                imageDate.textContent = "Date: " + data.date;
                imageAuthor.textContent = "Copyright: " +
                    (data.copyrigth ? data.copyrigth : "Unknown");
                imageIcons.innerHTML = "<i class='fa fa-search' aria-hidden='true'></i>" +
                    "<i class='fa fa-external-link' aria-hidden='true'></i>";
                imageContainer.classList.add("fade-in");
                nasaImage.scrollIntoView();
                UIkit.offcanvas('#panel-izquierdo').hide();

                
                    modalcontenido.textContent = data.title;
                    
                    modalcontenido.textContent = data.explanation


                    /*hago que cuando se muestre la imagen este difuminada, y despues de leer la modal vuelve a estar bien*/
                    modalcontenido.style.display = 'block';
                    nasaImage.classList.add("blur-image");

                    modalcontenido.addEventListener('hidden',function() {
                        nasaImage.classList.remove('blur-image')
                    })

                    modalcontenido.style.position = 'fixed';
                    modalcontenido.style.top = '50%';
                    modalcontenido.style.left = '50%';
                    modalcontenido.style.transform = 'translate(-50%, -50%)';
                    modalcontenido.style.width = '80%';
                    modalcontenido.style.maxHeight = '80%';
                    modalcontenido.style.overflowY = 'auto';
                    modalcontenido.style.backgroundColor = '#fff';
                    modalcontenido.style.padding = '20px';
                    modalcontenido.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';

                

            })
            .catch(function (error) {
                console.log(error);
            });
    });


});