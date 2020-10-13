import { postFormAction } from "../ajax";
import { RequestUrlEnum } from "../config/constant";

/**
 * 设置设备节点状态
 * @param serialId 设备序列号
 * @param status 设备状态
 */
export const settingNodeStatus = (serialId: string, status: string):Promise<any> => postFormAction(RequestUrlEnum.COMMON_URL, {
  CMD: 'setting_node_status',
  serialId,
  status
})

/**
 * 获取节点状态
 * @param serialId 序列号
 */
export const getNodeStatus = (serialId: string):Promise<any> => postFormAction(RequestUrlEnum.COMMON_URL, {
  CMD: 'query_node_real_status',
  serialId
})

/**
 * 基础API
 */
export class BaseAPI {
  constructor () {}
  /**
   * { @link settingNodeStatus }
   */
  static settingNodeStatus (serialId: string, status: string):Promise<any> {
    return this.settingNodeStatus(serialId, status)
  }
  /**
   * { @link settingNodeStatus }
   */
  static getNodeStatus (serialId: string):Promise<any> {
    return this.getNodeStatus(serialId)
  }
}
