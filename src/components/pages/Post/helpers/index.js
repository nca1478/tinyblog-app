import moment from 'moment'
import 'moment/locale/es'

export const parsePostDetails = (response) => {
  return {
    ...response.data,
    createdAt: moment(response.data.createdAt).format('LL'),
    author:
      response.data.user.role === 'ADMIN_ROLE'
        ? 'Admin'
        : response.data.user.name,
  }
}
