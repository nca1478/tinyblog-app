// Dependencies
import { toast } from 'react-toastify'
import { post } from '../../../../config/api'

export const addPost = (data, user, reset) => {
  post('/posts', data, user.data.token)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        toast.info(response.data.msg)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar añadir el post.')
      console.log(error)
    })
    .finally(() => {
      // Reset form
      reset()
    })
}
