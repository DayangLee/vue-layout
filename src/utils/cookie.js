import Cookies from 'js-cookie'

// const TokenKey = 'userToken'

export function getCookie(TokenKey) {
  return Cookies.get(TokenKey)
}
export function setCookie(TokenKey, token) {
  return Cookies.set(TokenKey, token)
}
export function removeCookie(TokenKey) {
  return Cookies.remove(TokenKey)
}