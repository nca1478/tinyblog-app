// Dependencies
import { toast } from 'react-toastify'
import { post } from '../../../../config/api'
import { types } from '../../../../types/types'

export const loginUser = (params) => {
  const { data, dispatch, navigate } = params
  post('/users/login', data)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        const dataUser = {
          ...response.data.user,
          token: response.data.token,
        }

        dispatch({
          type: types.login,
          payload: { data: dataUser },
        })

        navigate('/admin/dashboard', {
          replace: true,
        })
      }
    })
    .catch((error) => {
      toast.error('Error al intentar iniciar sesión.')
      console.log(error)
    })
}
