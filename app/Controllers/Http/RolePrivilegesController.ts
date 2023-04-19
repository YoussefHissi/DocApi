import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RolePrivilege from 'App/Models/RolePrivilege'


export default class RolePrivilegesController {
  /**
   * Retrieve a list of all role_privileges
   */
  public async index({}: HttpContextContract) {
    const rolePrivileges = await RolePrivilege.all()
    return rolePrivileges
  }

  /**
   * Create a new role_privilege
   */
  public async store({ request }: HttpContextContract) {
    const { privilege_id, role_id } = request.only(['privilege_id', 'role_id'])
    const rolePrivilege = await RolePrivilege.create({ privilege_id, role_id })
    return rolePrivilege
  }

  /**
   * Retrieve a single role_privilege by ID
   */
  public async show({ params }: HttpContextContract) {
    const rolePrivilege = await RolePrivilege.findOrFail(params.id)
    return rolePrivilege
  }

  /**
   * Update a role_privilege by ID
   */
  public async update({ params, request }: HttpContextContract) {
    const rolePrivilege = await RolePrivilege.findOrFail(params.id)
    const { privilege_id, role_id } = request.only(['privilege_id', 'role_id'])
    rolePrivilege.merge({ privilege_id, role_id })
    await rolePrivilege.save()
    return rolePrivilege
  }

  /**
   * Delete a role_privilege by ID
   */
  public async destroy({ params }: HttpContextContract) {
    const rolePrivilege = await RolePrivilege.findOrFail(params.id)
    await rolePrivilege.delete()
    return { message: 'RolePrivilege deleted successfully' }
  }
}
