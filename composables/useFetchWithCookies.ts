export default async function (url: string, opts, cookieName) {
  const cookie = useCookie(cookieName)
  const response = await $fetch.raw(url, opts)

  const cookies = Object.fromEntries(
    response.headers
      .get('set-cookie')
      ?.split(',')
      .map(a => a.split('; '))[0]
      .map(a => a.split('=')),
  )

  if (cookieName in cookies)
    cookie.value = cookies[cookieName]

  return response._data
}
