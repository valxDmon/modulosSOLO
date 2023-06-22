const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expNombres = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    const expCategorias = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    const expDireccion = /^[a-zA-Z0-9\s\.,#-]+$/;
    const expPrecio = /^[0-9]+$/;
    const expPagado = /^[0-9]+$/;
    const expPorCobrar = /^[0-9]+$/;

    const nombres = document.getElementById('nombres').value;
    const categorias = document.getElementById('categorias').value;
    const direccion = document.getElementById('direccion').value;
    const fechaEjecucion = document.getElementById('fechaEjecucion').value;
    const precio = +document.getElementById('precio').value;
    const pagado = +document.getElementById('pagado').value;
    const porcobrar = +document.getElementById('porCobrar').value;
   

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

        if (!expDireccion.test(direccion)) {
            throw 'dirección incorrecta.';
        }
        if(new Date(fechaEjecucion) < new Date()){
            throw 'fecha incorrecta';
        }

        if (!expPrecio.test(precio)) {
            throw 'precio incorrecto. ¡Solo se permiten numeros!';
        } 
        
        
        if (!expPagado.test(pagado)) {
            throw 'precio incorrecto. ¡Solo se permiten numeros!';
        }
        if (pagado > precio) {
            throw 'no puedes pagar mas de lo que costo el precio';
        }
        if (porcobrar > precio) {
            throw 'no puedes cobrar mas de lo que costo el precio';
        }

        if (!expPorCobrar.test(porcobrar) || porcobrar > precio) {
            throw 'precio incorrecto. ¡Solo se permiten numeros!';
        }else {
            Swal.fire({
                icon: 'success',
                title: '¡Evento exitoso!',
                text: 'Los campos se han Registrado correctamente.',
            }).then(() => {
                window.location.href = '/eventos';
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
