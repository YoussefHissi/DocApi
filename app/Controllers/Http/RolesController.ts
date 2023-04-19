
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Role from 'App/Models/Role';

export default class RoleController {
  public async index({ response }: HttpContextContract) {
    const roles = await Role.all();
    return response.status(200).json(roles);
  }

  public async store({ request, response }: HttpContextContract) {
    const rolename = request.input('rolename');

    const role = new Role();
    role.rolename = rolename;
   

    await role.save();

    return response.status(201).json(role);
  }

  public async show({ params, response }: HttpContextContract) {
    const role = await Role.find(params.id);

    if (!role) {
      return response.status(404).json({ message: 'Role not found' });
    }

    return response.status(200).json(role);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const role = await Role.find(params.id);

    if (!role) {
      return response.status(404).json({ message: 'Role not found' });
    }

    const rolename = request.input('rolename');

    role.rolename = rolename;
  

    await role.save();

    return response.status(200).json(role);
  }

  
  public async destroy({ params, response }: HttpContextContract) {
    const role = await Role.find(params.id);

    if (!role) {
      return response.status(404).json({ message: 'Role not found' });
    }

    await role.delete();

    return response.status(204).send();
  }
}

