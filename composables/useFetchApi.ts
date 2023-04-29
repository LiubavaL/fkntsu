export default function (req: any, opts = {}) {
  const { useAuthToken } = useAuth()
  const token = useAuthToken().value

  return $fetch(req, {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: `Bearer ${token}`,
    },
  })
}
