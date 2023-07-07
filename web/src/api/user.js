import request from '@/utils/request'

export function login(data) {
    return request({
      url: 'http://8.140.192.225:9999/domain/user/login',
      method: 'post',
      data
    })
  }