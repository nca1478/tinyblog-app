// Dependencies
import { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

// Custom Dependencies
import { AuthContext } from '../../../context/authContext'
import { DashboardItem, SpinnerLoading } from '../../common'
import { deletePost, getPosts, publishPost } from './services'

export const DashboardPage = () => {
  const { user } = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  const [loaded, setLoaded] = useState(false)

  const handlePublish = (id, published) => {
    publishPost({ id, published, user, setPosts, setLoaded })
  }

  const handleDelete = (postId) => {
    deletePost(postId, user, setPosts, setLoaded)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getPosts(user, setPosts, setLoaded)
  }, [user])

  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <h3 className="text-center text-white">Listado de Posts</h3>
        <Row className="d-flex justify-content-center g-4 pt-2">
          {!loaded ? (
            <SpinnerLoading size="lg" variant="light" />
          ) : posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <DashboardItem
                  {...post}
                  key={post.id}
                  handlePublish={handlePublish}
                  handleDelete={handleDelete}
                />
              ))}
            </>
          ) : (
            <Alert variant="danger" className="w-75">
              Oh no.... No hay posts para mostrar. Vuelve pronto...
            </Alert>
          )}
        </Row>
      </Container>
      <ToastContainer />
    </Col>
  )
}
