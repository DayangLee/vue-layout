
import login_service from '@/utils/login_axios'
import logout_service from '@/utils/logout_axios'
import md5 from 'js-md5'

export function login(acount, password) {
  const auth = "Basic " + btoa(acount + ":" + md5(password))
  //window.sessionStorage.setItem('auth', auth)
  return login_service({
    url: '/user',
    method: 'get',
    headers: { Authorization: auth }
  })
}

export function logout() {
  return logout_service({
    url: '/user/logout',
    method: 'post'
  })
}