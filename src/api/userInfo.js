import config from '@/config'
import { get, post} from '../utils/request'

const API_LOGIN = config.api_base + 'login/cellphone' 
const API_GET_USER_INFO = config.api_base + 'user/detail' // 获取用户详情
const API_GET_USER_SUBCOUNT = config.api_base + 'user/subcount' // 获取用户信息 , 歌单，收藏，mv, dj 数量
const API_GET_USER_PLAYLIST = config.api_base + 'user/playlist' // 获取用户歌单
const API_GET_PLAYLIST_DETAIL = config.api_base + 'playlist/detail' // 获取歌单详情

const userLogin = query => {
  return get(API_LOGIN, query)
}

const getUserInfo = query => {
  return get(API_GET_USER_INFO, query)
}

const getUserSubcount = query => {
  return get(API_GET_USER_SUBCOUNT, query)
}

const getUserPlaylist = query => {
  return get(API_GET_USER_PLAYLIST, query)
}

const getPlaylistDetail = query => {
  return get(API_GET_PLAYLIST_DETAIL, query)
}

export {
  userLogin,
  getUserInfo,
  getUserSubcount,
  getUserPlaylist,
  getPlaylistDetail
}