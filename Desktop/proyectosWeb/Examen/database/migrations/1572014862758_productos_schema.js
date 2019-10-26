'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.integer('codigo').notNullable().unique();
      table.string('nombre',50).notNullable();
      table.integer('precio').notNullable();
      table.integer('stock').notNullable();
      table.string('marca',50).notNullable();
      table.string('proveedor',50).notNullable();
      table.integer('inventario_id').notNullable().unsigned().references('id').inTable('inventarios');
      
            

  
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
