export default defineNuxtPlugin(async () => {
  // TODO можно ли эту логику вынестив  auth init?
  const { initAuth, useAuthUser, refreshAccessToken, getUser, setAuthLoading, useAuthToken, setAuthToken, pollRefreshAccessToken } = useAuth()

  if (useAuthUser().value)
    return

  setAuthLoading(true)

  try {
    // await refreshAccessToken()
    // TODO think how to organize this duplication of refreshAccessToken
    const headers = useRequestHeaders(['cookie'])

    const COOKIE_NAME = 'refresh_token'

    const { accessToken } = await useFetchWithCookies('/api/auth/refresh', { headers }, COOKIE_NAME)

    setAuthToken(accessToken)

    await getUser()

    // TODO uncomment in the end ?
    // pollRefreshAccessToken()
  }
  catch (err) {
    console.error(`[ERROR] [AUTH]${err}`)
  }
  finally {
    setAuthLoading(false)
  }
})
