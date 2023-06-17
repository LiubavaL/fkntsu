function useFetchWithStatuses<T>(req: any, opts = { headers: {}, loading: false }) {
  const { loading: loadingInitial, ...fetchOpts } = opts
  const loading = ref(loadingInitial)
  const data = ref<T | null>(null)
  const error = reactive({})
  const fetchData = async () => {
    loading.value = true
    try {
      const responce = await useFetchApi<T>(req, {
        ...fetchOpts,
      })
      data.value = responce
    }
    catch (e) {
      Object.assign(error, e)
    }
    finally {
      loading.value = false
    }
  }

  return { loading, data, error, fetchData }
}

export default useFetchWithStatuses
