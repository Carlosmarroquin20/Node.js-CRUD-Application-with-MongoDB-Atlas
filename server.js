require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Review = require('./models/review');

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas CRUD

// Crear una reseña
app.post('/reviews', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).send(newReview);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Leer todas las reseñas
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Leer una reseña específica por ID
app.get('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).send('Reseña no encontrada');
    res.status(200).send(review);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Actualizar una reseña por ID
app.put('/reviews/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReview) return res.status(404).send('Reseña no encontrada');
    res.status(200).send(updatedReview);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Eliminar una reseña por ID
app.delete('/reviews/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).send('Reseña no encontrada');
    res.status(200).send('Reseña eliminada');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
