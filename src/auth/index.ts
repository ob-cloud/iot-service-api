import { postAction } from "../ajax";

/**
 * 权限登录
 */
class Auth {
  constructor () {}

  /**
   * 登录
   * @param username 用户名
   * @param password 密码
   */
  static login (username: string, password: string): Promise<any> {
    return postAction(RequestUrlEnum.AUTH_LOGIN, { username, password })
  }

  /**
   * 登出
   */
  static logout (): Promise<any> {
    return postAction(RequestUrlEnum.AUTH_LOGOUT)
  }
}

export { Auth }
