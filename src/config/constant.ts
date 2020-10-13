
export enum RequestUrlEnum {
  COMMON_URL = '/common',
  AUTH_LOGIN = '/auth/login',
  AUTH_LOGOUT = '/auth/logout',

  SYS_MENU_LIST = '/sys/permission/list',
  SYS_MENU_ADD = '/sys/permission/add',
  SYS_MENU_EDIT = '/sys/permission/edit',
  SYS_MENU_DEL = '/sys/permission/delete',
  SYS_MENU_DEL_BATCH = '/sys/permission/deleteBatch',
  SYS_MENU_TREE_LIST = '/sys/permission/queryTreeList',

  SYS_USER_LIST_PAGE = '/sys/user/list',
  SYS_USER_ADD = '/sys/user/add',
  SYS_USER_EDIT = '/sys/user/edit',
  SYS_USER_DEL = '/sys/user/delete',
  SYS_USER_ROLE = '/sys/user/queryUserRole',
  SYS_USER_FROZEN = '/sys/user/frozen',
  SYS_USER_FROZEN_BATCH = '/sys/user/frozenBatch',
  SYS_USER_CHANGE_PASSWORD = '/sys/user/changPassword',
  SYS_USER_UPDATE_PASSWORD = '/sys/user/updatePassword',
  SYS_USER_PERMISSION_LIST = '//sys/permission/getUserPermission',
}
