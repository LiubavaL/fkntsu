function useFetchApi<T>(req: any, opts = { headers: {} }) {
  const { useAuthToken } = useAuth()
  const token = useAuthToken().value

  return $fetch<T>(req, {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: `Bearer ${token}`,
    },
  })
}

export default useFetchApi
