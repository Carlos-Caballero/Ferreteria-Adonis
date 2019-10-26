'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {

    productos(){
        return this.hasMany('App/Models/Producto');
    }
}

module.exports = Inventario
