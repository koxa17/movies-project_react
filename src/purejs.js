function cropText(text) {
    if (text.length > 79) {
        text = text.slice(0, 80) + '...'
    }
    return text
}

function getLinkWithParametrs(values, url = 'https://yts.mx/api/v2/list_movies.json') {
    const params = []
    let textParam

    for (const prop in values) {
        if (Object.hasOwnProperty.call(values, prop)) {
            let value = values[prop];

            if (prop === "query_term") {
                value = value.replace(/\s+/g, '_').toLowerCase().trim()
            } 

            const param = `${prop}=${value}`

            params.push(param)

        }
    }

    textParam = params.join('&')

    return url + '?' + textParam
}

export { cropText, getLinkWithParametrs }