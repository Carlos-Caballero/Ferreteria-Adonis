'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('inventarios/index','InventarioController.index');
Route.post('inventarios/crear','InventarioController.store');
Route.post('inventarios/update/:id','InventarioController.update    ');
Route.post('inventarios/destroy/:id','InventarioController.destroy');

Route.get('productos/index','ProductoController.index');
Route.post('productos/store','ProductoController.store');
Route.post('productos/update/:id','ProductoController.edit');
Route.post('productos/destroy/:id','ProductoController.destroy');


