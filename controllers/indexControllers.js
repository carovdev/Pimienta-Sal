const platos = require('../data/menu_db');


module.exports = {
    index : (req,res) =>{
        return res.render('index',{
            platos
        })
    },
    detalle : (req,res) => {
       let plato = platos.find(plato => plato.id === +req.params.id)
        return res.render('detalleMenu',{
            plato
        })
    }

}