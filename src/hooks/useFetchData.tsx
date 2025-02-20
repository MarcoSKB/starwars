import { useCallback, useEffect, useState } from 'react'

export default function useFetchData<T>(
  url: string,
  options: RequestInit = {},
  dependencies: React.DependencyList = [],
) {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<T | null>(null)

  const fetchData = useCallback(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch(url, { ...options, signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err)
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [url, ...dependencies])

  useEffect(() => {
    const abortFetch = fetchData()
    return () => abortFetch()
  }, [fetchData])

  return { data, error, loading, refetch: fetchData }
}
