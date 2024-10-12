const Category = require('../models/Category');

const createCategory = (req, res) => {
    const newCategory = new Category({
        _id: req.body.id,
        title: req.body.title,
        news: req.body.news
    });

    newCategory.save()
        .then(category => { 
            res.status(201).json(category)
            console.log('Categoria creada exitosamente')
        })
        .catch(err => {
            res.status(400).json({ error: err.message })
            console.log('Ha ocurrido un error al crear la categoria')
        });
};

const getCategories = (req, res) => {
    Category.find()
        .then(categories => res.status(200).json(categories))
        .catch(err => {
            res.status(500).json({ error: err.message });
            console.log("Ha ocurrido un error al obtener las categorias")
        })
}

const getCategoriesById = (req, res) => {
    const { id } = req.params;

    Category.findById(id)
        .then(category => {
            if (!category) {
                return res.status(404).json({ error: 'Categoria no entrada'})
            }
            res.status(200).json(category);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
            console.log("Ha ocurrido un error al obtener la categoria");
        })
};

const updateCategory = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, req.body, { new: true})
        .then(updatedCategory => {
            if(!updatedCategory) {
                return res.status(404).json( {error: "Categoria no encontrada"} );
            }
            res.status(200).json(updatedCategory);
        })
        .catch(err => {
            res.status(500).json({ error: err.message});
            console.log("Ha ocurrido un error al actualizar la categoria");
        });
};

const deleteCategory = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndDelete(id)
        .then(deletedCategory => {
            if(!deletedCategory) {
                return res.status(404).json({ error: "Categoria no encontrada"});
            }
            res.status(200).json({ message: "Categoria eliminada exitosamente"});
        })
        .catch(err => {
            res.status(500).json({ error: err.message});
            console.log("Ha ocurrido un error al eliminar la categoria")
        });

}

module.exports = {
    createCategory,
    getCategories,
    getCategoriesById,
    updateCategory,
    deleteCategory
};