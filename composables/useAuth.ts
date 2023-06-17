import jwt_decode from 'jwt-decode'
import type { User } from '@prisma/client'
import { callWithNuxt } from '#app'

export default function () {
  const useAuthToken = () => useState<null | string>('auth_token', () => null)
  const useAuthUser = () => useState<User | null>('auth_user', () => null)
  const useAuthLoading = () => useState<boolean>('auth_loading', () => true)

  const isLoggedIn = computed(() => !!useAuthUser().value)

  const setAuthToken = (token: string | null) => {
    const authToken = useAuthToken()
    authToken.value = token
  }

  const setAuthUser = (user: User | null) => {
    const authUser = useAuthUser()
    authUser.value = user
  }
  const setAuthLoading = (loading: boolean) => {
    const authLoading = useAuthLoading()
    authLoading.value = loading
  }

  const getUser = async () => {
    const nuxtApp = useNuxtApp()
    // try {
    const user = await useFetchApi<User>('/api/auth/user', { method: 'GET' })
    // const user = await callWithNuxt(nuxtApp, useFetchApi, ['api/auth/user'])
    // setAuthUser(user)
    callWithNuxt(nuxtApp, setAuthUser, [user])
    // }
    // catch (err) {
    //   console.error('[USER ERROR] [AUTH]', err)
    // }
  }

  const refreshAccessToken = async () => {
    const nuxtApp = useNuxtApp()
    let headers
    try {
      if (process.server)
        headers = useRequestHeaders(['cookie'])
      // headers = callWithNuxt(nuxtApp, useRequestHeaders, [['cookie']])

      const res = await $fetch('/api/auth/refresh', { headers })
      // const counter = useCookie('counter111')
      // counter.value = 'value111'
      // setAuthToken(accessToken)
      callWithNuxt(nuxtApp, setAuthToken, [res.accessToken])
    }
    catch (err) {
      console.error(`[REFRESH ERROR] [AUTH]${err}`)
    }
  }

  const pollRefreshAccessToken = () => {
    const authToken = useAuthToken()

    if (!authToken.value)
      return

    const { exp, iat } = jwt_decode(authToken.value)
    // refresh access token before 1 minute
    const timeout = (exp - iat) * 1000 - 60000

    setTimeout(async () => {
      await refreshAccessToken()
      pollRefreshAccessToken()
    }, timeout)
  }

  const login = async (data) => {
    const res = await $fetch('/api/auth/login', { method: 'POST', body: data })

    setAuthToken(res.accessToken)
    setAuthUser(res.user)
    pollRefreshAccessToken()
  }

  const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' })
    setAuthToken(null)
    setAuthUser(null)
  }

  const initAuth = async () => {
    const nuxtApp = useNuxtApp()

    setAuthLoading(true)

    try {
      // await refreshAccessToken().then(() => getUser())
      await refreshAccessToken()
      await getUser()

      pollRefreshAccessToken()
    }
    catch (err) {
      console.error(`[ERROR] [AUTH]${err}`)
    }
    finally {
      callWithNuxt(nuxtApp, setAuthLoading, [false])
      // watch(useAuthUser(), (object) => {
      // }, { deep: true })
    }
  }

  return { isLoggedIn, getUser, useAuthToken, useAuthUser, useAuthLoading, login, logout, refreshAccessToken, initAuth, setAuthUser, setAuthLoading, setAuthToken, pollRefreshAccessToken }
}
