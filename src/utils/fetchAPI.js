
const fetchApi = async ({
    url,
    method = 'get',
    headers = {},
    data = {}
  }) => {

  const response = await fetch(url, {
    method,
    headers,
    data
  })

  const result = response.json()

  return result
}


export default fetchApi
