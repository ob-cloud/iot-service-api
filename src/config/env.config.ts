const BASEAPI_DEV = './dev'
const BASEAPI_TEST = './test'
const BASEAPI_PRO = ''

export const WEBSOCKET_URL = '/websocket/{topic}'

export function isProEnv () {
  return process.env.NODE_ENV === 'production'
}

export function isDevEnv () {
  return process.env.NODE_ENV === 'development'
}

export function isTestEnv () {
  return process.env.NODE_ENV === 'test'
}

export function getReqBaseUrl () {
  return isProEnv() ? BASEAPI_PRO : isDevEnv() ? BASEAPI_DEV : BASEAPI_TEST
}
