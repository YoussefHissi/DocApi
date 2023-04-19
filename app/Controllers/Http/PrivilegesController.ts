import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Privilege from 'App/Models/Privilege'

export default class PrivilegesController {
  public async index({ response }: HttpContextContract) {
    const privileges = await Privilege.all()
    return response.json(privileges)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name'])
    const privilege = await Privilege.create(data)
    return response.status(201).json(privilege)
  }

  public async show({ params, response }: HttpContextContract) {
    const privilege = await Privilege.findOrFail(params.id)
    return response.json(privilege)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const privilege = await Privilege.findOrFail(params.id)
    const data = request.only(['name'])
    privilege.merge(data)
    await privilege.save()
    return response.json(privilege)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const privilege = await Privilege.findOrFail(params.id)
    await privilege.delete()
    return response.status(204).send()
  }
}
