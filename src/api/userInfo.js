import config from '@/config'
import { get, post} from '../utils/request'

const API_LOGIN = config.api_base + 'login/cellphone' 
const API_GET_USER_INFO = config.api_base + 'user/detail' // 获取用户详情
const API_GET_USER_SUBCOUNT = config.api_base + 'user/subcount' // 获取用户信息 , 歌单，收藏，mv, dj 数量

const userLogin = query => {
  return get(API_LOGIN, query)
}

const getUserInfo = query => {
  return get(API_GET_USER_INFO, query)
}

const getUserSubcount = query => {
  return get(API_GET_USER_SUBCOUNT, query)
}

export {
  userLogin,
  getUserInfo,
  getUserSubcount
}