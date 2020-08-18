const TOKEN_KEY = 'token'

// 设置token
export const setUser = (token) => {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

// 取出token
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(TOKEN_KEY))
}

// 移除token
export const removeUser = () => {
  window.localStorage.removeItem(TOKEN_KEY)
}
