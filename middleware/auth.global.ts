export default defineNuxtRouteMiddleware((to) => {
  const { useAuthUser } = useAuth()
  // const nuxtApp = useNuxtApp()
  const toGuestPage = to.meta.auth === 'guest'

  if (to.meta.auth === false)
    return

  if (toGuestPage && useAuthUser().value)
    return navigateTo('/admin')

  // return sendRedirect(nuxtApp.ssrContext.event, url, code)

  if (!toGuestPage && !useAuthUser().value)
    return navigateTo('/enter')
})
