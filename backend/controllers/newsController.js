const News = require('../models/News');


const createNews = (req, res) => {
    const newNews = new News({
        _id: req.body.id, 
        title: req.body.title,
        description: req.body.description,
        category: req.body.category 
    });

    newNews.save()
        .then(news => { 
            res.status(201).json(news);
            console.log('Noticia creada exitosamente');
        })
        .catch(err => {
            res.status(400).json({ error: err.message });
            console.log('Error al crear la noticia:', err.message);
        });
};

const getNews = (req, res) => {
    News.find().populate('category') 
        .then(newsList => res.status(200).json(newsList))
        .catch(err => {
            res.status(500).json({ error: err.message });
            console.log('Error al obtener las noticias:', err.message);
        });
};

const getNewsById = (req, res) => {
    const { id } = req.params;

    News.findById(id).populate('category')
        .then(news => {
            if (!news) {
                return res.status(404).json({ error: 'Noticia no encontrada' });
            }
            res.status(200).json(news);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
            console.log('Error al obtener la noticia:', err.message);
        });
};


const updateNews = (req, res) => {
    const { id } = req.params;

    News.findByIdAndUpdate(id, req.body, { new: true }).populate('category') 
        .then(updatedNews => {
            if (!updatedNews) {
                return res.status(404).json({ error: 'Noticia no encontrada' });
            }
            res.status(200).json(updatedNews);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
            console.log('Error al actualizar la noticia:', err.message);
        });
};


const deleteNews = (req, res) => {
    const { id } = req.params;

    News.findByIdAndDelete(id)
        .then(deletedNews => {
            if (!deletedNews) {
                return res.status(404).json({ error: 'Noticia no encontrada' });
            }
            res.status(200).json({ message: 'Noticia eliminada exitosamente' });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
            console.log('Error al eliminar la noticia:', err.message);
        });
};

module.exports = {
    createNews,
    getNews,
    getNewsById,
    updateNews,
    deleteNews
};