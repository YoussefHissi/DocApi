import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RolePrivilege extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public roleId: number

  @column()
  public privilegeId: number
}
