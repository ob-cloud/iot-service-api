import { deleteAction, getAction, postAction, putAction } from "../ajax";
import { RequestUrlEnum } from "../config/constant";

interface SysMenuParams {
  menuType: number,
  name: string,
  parentId?: string,
  url: string,
  component: string,
  redirect: string,
  perms: string,
  status: string,
  icon?: string,
  sortNo: number,
  alwaysShow: boolean,
  hidden: boolean,
  route: string,
  keepAlive: boolean,
  internalOrExternal: boolean
}

/**
 * 系统菜单
 */
class SysMenu {
  constructor () {}

  /**
   * 获取菜单列表
   */
  static getSysMenuListUnpage ():Promise<any> {
    return getAction(RequestUrlEnum.SYS_MENU_LIST)
  }
  /**
   * 添加菜单
   * @param params 参数
   */
  static addSysMenu (params: SysMenuParams):Promise<any> {
    return postAction(RequestUrlEnum.SYS_MENU_ADD, params)
  }
  /**
   * 编辑菜单
   * @param params 参数
   */
  static editSysMenu (params: SysMenuParams): Promise<any> {
    return putAction(RequestUrlEnum.SYS_MENU_EDIT, params)
  }
  /**
   * 删除菜单
   * @param id 菜单id
   */
  static delSysMenu (id: string): Promise<any> {
    return deleteAction(RequestUrlEnum.SYS_MENU_DEL, {id})
  }
  /**
   *  批量删除菜单
   * @param ids 菜单id串
   */
  static delSysMenuBatch (ids: string): Promise<any> {
    return deleteAction(RequestUrlEnum.SYS_MENU_DEL_BATCH, {ids})
  }
  /**
   * 获取菜单树列表
   */
  static getSysMenuTreeList (): Promise<any> {
    return getAction(RequestUrlEnum.SYS_MENU_TREE_LIST)
  }
}

export { SysMenu }
