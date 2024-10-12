const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const newsRoutes = require('./routes/newsRoutes');

const app = express(); 

const dbUrl = 'mongodb://localhost:27017/DB';

mongoose.connect(dbUrl)
    .then(() => console.log('Conectado a la base de datos'))
    .catch( err => console.log('Error al conectar a la base de datos ', err));

app.use(express.json());

app.use('/categories', categoryRoutes);

app.use('/news', newsRoutes)

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El puerto esta corriendo en el puerto ${PORT}`)
})

