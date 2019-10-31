###  Cookie相关

>如果要主域名和二级域名共享这个Cookie，只需要设置主域名的Cookie就好了，他们是共享的

>在浏览器的检查项里面看到Cookie的expires是session,表示这个Cookie是个会话Cookie，网页关闭会自动丢失，是整个网站关闭

```js
var decode = decodeURIComponent
var encode = encodeURIComponent

function parseCookieString(text, shouldDecode) {
  var cookies = {}
  if (isString(text) && text.length > 0) {
    var decodeValue = shouldDecode ? decode : same
    var cookieParts = text.split(/;\s/g)
    var cookieName
    var cookieValue
    var cookieNameValue

    for (var i = 0, len = cookieParts.length; i < len; i++) {
      // Check for normally-formatted cookie (name-value)
      cookieNameValue = cookieParts[i].match(/([^=]+)=/i)
      if (cookieNameValue instanceof Array) {
        try {
          cookieName = decode(cookieNameValue[1])
          cookieValue = decodeValue(
            cookieParts[i].substring(cookieNameValue[1].length + 1)
          )
        } catch (ex) {
          // Intentionally ignore the cookie -
          // the encoding is wrong
        }
      } else {
        // Means the cookie does not have an "=", so treat it as
        // a boolean flag
        cookieName = decode(cookieParts[i])
        cookieValue = ''
      }

      if (cookieName) {
        cookies[cookieName] = cookieValue
      }
    }
  }

  return cookies
}

// Helpers

function isString(o) {
  return typeof o === 'string'
}

function isNonEmptyString(s) {
  return isString(s) && s !== ''
}

function validateCookieName(name) {
  if (!isNonEmptyString(name)) {
    throw new TypeError('Cookie name must be a non-empty string')
  }
}

function same(s) {
  return s
}

const get = (name, options) => {
  validateCookieName(name)

  if (typeof options === 'function') {
    options = {
      converter: options
    }
  } else {
    options = options || {}
  }

  var cookies = parseCookieString(document.cookie, !options['raw'])
  return (options.converter || same)(cookies[name])
}

const set = (name, value, options) => {
  validateCookieName(name)

  options = options || {}
  var expires = options['expires']
  var domain = options['domain']
  var path = options['path']

  if (!options['raw']) {
    value = encode(String(value))
  }

  var text = name + '=' + value

  // expires
  var date = expires
  if (typeof date === 'number') {
    date = new Date()
    date.setDate(date.getDate() + expires)
  }
  if (date instanceof Date) {
    text += '; expires=' + date.toUTCString()
  }

  // domain
  if (isNonEmptyString(domain)) {
    text += '; domain=' + domain
  }

  // path
  if (isNonEmptyString(path)) {
    text += '; path=' + path
  }

  // secure
  if (options['secure']) {
    text += '; secure'
  }
  document.cookie = text
  return text
}

const remove = (name, options) => {
  options = options || {}
  options['expires'] = 0
  options['Max-Age'] = 0
  return set(name, '', options)
}

export { get, set, remove }

```