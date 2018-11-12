import request from 'request'
const { isURL } = require('validator')
class Http {
    constructor({
        method,
        url,
        formData,
        config = {
            headers: {},
        },
    }) {
        this.method = method
        this.url = url
        this.formData = formData
        this.config = config
    }
    sendResponse() {
        return new Promise((resolve, reject) => {
            if (!isURL(this.url))
                return reject(`"${this.url}" is not a valid endpoint url`)
            request(
                {
                    method: this.method,
                    uri: this.url,
                    json: true,
                    body: this.formData,
                    headers: this.config.headers,
                    preambleCRLF: true,
                    postambleCRLF: true,
                },
                function(error, response, body) {
                    const res = {
                        data: body,
                        headers: response.headers,
                        statusCode: response.statusCode,
                    }
                    resolve(res)
                    reject(error)
                }
            )
        })
    }
}

export default {
    get(url, formData = {}) {
        const http = new Http({ method: 'get', url: url, formData })
        return http.sendResponse()
    },
    post(url, formData = {}) {
        const http = new Http({ method: 'post', url: url, formData })
        return http.sendResponse()
    },
    put(url, formData = {}) {
        const http = new Http({ method: 'put', url, formData })
        return http.sendResponse()
    },
    patch(url, formData = {}) {
        const http = new Http({ method: 'patch', url, formData })
        return http.sendResponse()
    },
    head(url, formData = {}) {
        const http = new Http({ method: 'head', url, formData })
        return http.sendResponse()
    },
    delete(url, formData = {}) {
        const http = new Http({ method: 'delete', url, formData })
        return http.sendResponse()
    },
    options(url, formData = {}) {
        const http = new Http({ method: 'options', url, formData })
        return http.sendResponse()
    },
}
