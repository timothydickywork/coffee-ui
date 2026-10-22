import request from '../util/request'

export function fetchList (query) {
    return request({
        url: '/store/list',
        method: 'get',
        params: query,
    })
}

export function deleteStore (id) {
    return request({
        url: '/store/' + id,
        method: 'delete',
    })
}

export function saveStore (data) {
    return request({
        url: '/store',
        method: 'post',
        data,
    })
}

export function updateStore (data) {
    return request({
        url: '/store/' + data.id,
        method: 'put',
        data: data,
    })
}
