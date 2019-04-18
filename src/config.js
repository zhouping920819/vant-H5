let baseUrl = 'http://121.43.161.213:18081'

if (process.env.NODE_ENV === 'development') {
    baseUrl = ''
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = '' //
} else if (process.env.NODE_ENV === 'test') {
    // baseUrl = ''
}

export default {
    baseUrl
}
