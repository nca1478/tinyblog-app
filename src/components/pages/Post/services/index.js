// Dependencies
import { toast } from 'react-toastify'
import { del, get, post, put } from '../../../../config/api'
import { parsePostDetails } from '../helpers'

export const addPost = (params) => {
  const { data, user, reset } = params

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

export const getPosts = async (params) => {
  const { user, setPosts, setLoaded } = params

  await get(`/posts?page=1&limit=5`, user.data.token)
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

export const getPostDetails = async (params) => {
  const { postId, setPost } = params

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

export const getPostEdit = async (params) => {
  const { postId, setPost } = params

  await get(`/posts/${postId}`)
    .then((response) => {
      setPost(response.data)
    })
    .catch((error) => {
      toast.error('Error al intentar obtener detalles del post.')
      console.log(error)
    })
}

export const getPostsPublished = async (params) => {
  const { setPosts, setLoaded, setPageCount, limit } = params

  get(`/posts/published?status=true&page=1&limit=4`)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        setPageCount(Math.ceil(response.data.count / limit))
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

export const getPostsPaginate = async (params) => {
  const { currentPage, limit, setPosts, setLoaded } = params

  get(`/posts/published?status=true&page=${currentPage}&limit=${limit}`)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        setPosts(response.data.rows)
      }
    })
    .catch((error) => {
      toast.error('Error al intentar obtener ofertas de trabajo.')
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
      getPosts({ user, setPosts, setLoaded })
    })
}

export const updatePost = (params) => {
  const { postId, data, user } = params

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

export const deletePost = (params) => {
  const { postId, user, setPosts, setLoaded } = params

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

export const searchPost = async (params) => {
  const { q, setPosts, setLoaded } = params

  await get(`/posts/search?q=${q}`)
    .then((response) => {
      if (response.data === null) {
        toast.error(response.errors.msg)
      } else {
        setPosts(response.data)
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
