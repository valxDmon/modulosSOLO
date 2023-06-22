const express = require ('express');
const app = express ();
const port = 8284;
const path = require ('path');
const hbs = require ('hbs');

app.use(express.static('hbs/public'))

app.set('views', path.join(__dirname + '/hbs/public/views'))
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/hbs/public/views/partials')

app.get('/', (req,res)=>{
    res.render('home')
});

app.get('/validacion', (req,res)=>{
    res.render('validacion',{
        titulo:'Paquete',
        modulo:'Paquete',
        descripcion_modulo: 'Crear servicio',
    })
});

app.get('/listarServicios', (req,res)=>{
    res.render('listarServicios',{
        titulo:'Paquete',
        modulo:'Paquete',
        descripcion_modulo: 'listar servicio',
    })
});


app.get('/ventas', (req,res)=>{
    res.render('ventas')
});



app.get('/crearVentas', (req,res)=>{
    res.render('crearVentas')
});

app.get('/crearEvento', (req,res)=>{
    res.render('crearEvento')
});

app.get('/eventos', (req,res)=>{
    res.render('eventos')
});



app.listen(port, console.log ('escuchando puerto '+port));
