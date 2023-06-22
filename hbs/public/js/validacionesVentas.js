const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expNombres = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    const expCategorias = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    const expPrecio = /^[0-9]+$/;

    const nombres = document.getElementById('nombres').value;
    const categorias = document.getElementById('categorias').value;
    const precio = document.getElementById('precio').value;

    try {
        if (nombres === '' || categorias === '' || precio === '') {
            throw 'Todos los campos son obligatorios';
        }

        if (!expNombres.test(nombres)) {
            throw 'Nombres incorrectos. ¡Solo se permiten letras!';
        }

        if (!expCategorias.test(categorias)) {
            throw 'categorias incorrectos. ¡Solo se permiten letras!';
        }

        if (!expPrecio.test(precio)) {
            throw 'precio incorrecto. ¡Solo se permiten numeros!';
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Venta exitosa!',
                text: 'Los campos se han Registrado correctamente.',
            }).then(() => {
                window.location.href = '/ventas';
            });
        }

    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        });
    }
});
