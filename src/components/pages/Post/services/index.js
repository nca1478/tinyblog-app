// Dependencies
import { toast } from 'react-toastify'
import { del, get, post, put } from '../../../../config/api'
import { parsePostDetails } from '../helpers'

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

export const getPosts = async (user, setPosts, setLoaded) => {
  await get(`/posts?page=1&limit=4`, user.data.token)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        setPosts(response.data.rows)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar obtener posts.')
      console.log(error)
    })
    .finally(() => {
      setLoaded(true)
    })
}

export const getPostDetails = async (postId, setPost) => {
  await get(`/posts/${postId}`)
    .then((response) => {
      const postDetails = parsePostDetails(response)
      setPost(postDetails)
    })
    .catch((error) => {
      toast.error('Error al intentar obtener detalles del post.')
      console.log(error)
    })
}

export const getPostEdit = async (postId, setPost) => {
  await get(`/posts/${postId}`)
    .then((response) => {
      setPost(response.data)
    })
    .catch((error) => {
      toast.error('Error al intentar obtener detalles del post.')
      console.log(error)
    })
}

export const getPostsPublished = async (setPosts, setLoaded) => {
  get(`/posts/published?status=true&page=1&limit=4`)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        setPosts(response.data.rows)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar obtener posts.')
      console.log(error)
    })
    .finally(() => {
      setLoaded(true)
    })
}

export const publishPost = async (params) => {
  const { id, published, user, setPosts, setLoaded } = params
  const isPublished = published === false ? 'true' : 'false'

  put(`/posts/${id}/publish?status=${isPublished}`, {}, user.data.token)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        toast.info(response.data.msg)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar publicar oferta de trabajo.')
      console.log(error)
    })
    .finally(() => {
      getPosts(user, setPosts, setLoaded)
    })
}

export const updatePost = (postId, data, user) => {
  put(`/posts/${postId}/update`, data, user.data.token)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        toast.info(response.data.msg)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar actualizar el post.')
      console.log(error)
    })
}

export const deletePost = (postId, user, setPosts, setLoaded) => {
  const confirm = window.confirm('¿Estás Seguro?')
  if (confirm) {
    del(`/posts/${postId}`, user.data.token)
      .then((response) => {
        if (response.data === null) {
          toast.error(response.errors.msg)
        } else {
          toast.info('El post ha sido eliminado exitosamente')
        }
      })
      .catch((error) => {
        toast.error('Error al intentar eliminar el post.')
        console.log(error)
      })
      .finally(() => {
        getPosts(user, setPosts, setLoaded)
      })
  }
}
