// Dependencies
import { toast } from 'react-toastify'
import { get } from '../../../../config/api'

export const getLastPosts = async (params) => {
  const { setPosts, setLoaded } = params
  const lastPosts = 4

  await get(`/posts/lastposts?limit=${lastPosts}`)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        setPosts(response.data)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar obtener últimos posts.')
      console.log(error)
    })
    .finally(() => {
      setLoaded(true)
    })
}
