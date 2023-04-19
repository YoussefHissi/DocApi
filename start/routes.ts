

import Route from '@ioc:Adonis/Core/Route'

/*Routes Foe Role Table*/
Route.post('/AddRole', 'RolesController.store');
Route.get('/roles', 'RolesController.index');
Route.get('/roles/:id', 'RolesController.show');
Route.put('/roles/:id', 'RolesController.update');
Route.delete('/roles/:id', 'RolesController.destroy');
/* End Routes Foe Role Table*/


/*Routes Foe User Table
Route.post('/users', 'UsersController.create');
Route.get('/users', 'UsersController.index');
Route.get('/users/:id', 'UsersController.show');
Route.put('/users/:id', 'UsersController.update');
Route.delete('/users/:id', 'UsersController.delete');

Route.post('/users/:id/roles', 'UserRolesController.create');
Route.get('/users/:id/roles', 'UserRolesController.index');
Route.delete('/users/:userId/roles/:roleId', 'UserRolesController.delete');

*/


Route.group(() => {
    Route.get('/privileges', 'PrivilegesController.index')
    Route.post('/AddPrivilege', 'PrivilegesController.store')
    Route.get('privilege/:id', 'PrivilegesController.show')
    Route.put('privilege/:id', 'PrivilegesController.update')
    Route.delete('privilege/:id', 'PrivilegesController.destroy')
  })


  Route.group(() => {
    Route.get('/role_privileges', 'RolePrivilegesController.index')
    Route.get('/role_privileges/:id', 'RolePrivilegesController.show')
    Route.post('/role_privileges', 'RolePrivilegesController.store')
    Route.put('/role_privileges/:id', 'RolePrivilegesController.update')
    Route.delete('/role_privileges/:id', 'RolePrivilegesController.destroy')
  })