import { getAction, postFormAction } from "../ajax";
import { BaseAPI } from "./base";

interface NormalEquipParams {
  pageNo?: number;
  pageSize?: number;
  serialId?: string;
  oboxSerialId?: string;
  obox_serial_id?: string;
  name?: string;
}

/**
 * 普通设备
 */
class NormalEquip extends BaseAPI {
  constructor () {
    super()
  }

  /**
   * 获取设备列表
   * @param params 参数
   */
  static getNormalEquipListByPage (params: NormalEquipParams = {}):Promise<any> {
    return getAction(RequestUrlEnum.COMMON_URL, {
      CMD: 'query_device',
      ...params
    })
  }
  /**
   * 删除设备
   * @param param0 参数
   */
  static delNormalEquip ({ serialId, name }: NormalEquipParams):Promise<any> {
    return postFormAction(RequestUrlEnum.COMMON_URL, {
      CMD: 'modify_device',
      operate_type: '00',
      serialId,
      name
    })
  }

  /**
   * 编辑设备
   * @param param0 参数
   */
  static eidtNormalEquip ({ serialId, name }: NormalEquipParams):Promise<any> {
    return getAction(RequestUrlEnum.COMMON_URL, {
      CMD: 'modify_device',
      operate_type: '01',
      serialId,
      name
    })
  }
}
export { NormalEquip }
