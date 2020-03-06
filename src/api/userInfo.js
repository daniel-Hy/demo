import config from '@/config'
import { get, post} from '../utils/request'

const API_LOGIN = config.api_base + 'login/cellphone' // 手机号登录
const API_GET_USER_INFO = config.api_base + 'user/detail' // 获取用户详情
const API_GET_USER_SUBCOUNT = config.api_base + 'user/subcount' // 获取用户信息 , 歌单，收藏，mv, dj 数量
const API_GET_USER_PLAYLIST = config.api_base + 'user/playlist' // 获取用户歌单
const API_GET_PLAYLIST_DETAIL = config.api_base + 'playlist/detail' // 获取歌单详情
const API_GET_BANNER = config.api_base + 'banner' // 获取banner
const API_GET_URL = config.api_base + 'song/url' // 获取音乐url
const API_GET_DETAIL = config.api_base + 'song/detail' // 获取音乐详情
const API_GET_LIKELIST = config.api_base + 'likelist' // 获取喜欢音乐列表
const API_GET_RECOMMEND_SONGS = config.api_base + 'recommend/songs' // 获取每日推荐列表

// 手机号登录
const userLogin = query => {
  return get(API_LOGIN, query)
}
// 获取用户详情
const getUserInfo = query => {
  return get(API_GET_USER_INFO, query)
}
// 获取用户信息 , 歌单，收藏，mv, dj 数量
const getUserSubcount = query => {
  return get(API_GET_USER_SUBCOUNT, query)
}
// 获取用户歌单
const getUserPlaylist = query => {
  return get(API_GET_USER_PLAYLIST, query)
}
// 获取歌单详情
const getPlaylistDetail = query => {
  return get(API_GET_PLAYLIST_DETAIL, query)
}
// 获取banner
const getBannerList = query => {
  return get(API_GET_BANNER, query)
}
// 获取音乐url
const getMusicUrl = query => {
  return get(API_GET_URL, query)
}
// 获取音乐详情
const getMusicDetail = query => {
  return get(API_GET_DETAIL, query)
}
// 获取喜欢音乐列表
const getLikelist = query => {
  return get(API_GET_LIKELIST, query)
}
// 获取每日推荐列表
const getRecommendSongs = query => {
  return get(API_GET_RECOMMEND_SONGS, query)
}

export {
  userLogin,
  getUserInfo,
  getUserSubcount,
  getUserPlaylist,
  getPlaylistDetail,
  getBannerList,
  getMusicUrl,
  getMusicDetail,
  getLikelist,
  getRecommendSongs
}