// Dependencies
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { posts } from '../../../data/posts'

// Custom Dependencies
import { DashboardItem } from '../../common/DashboardItem'

export const DashboardPage = () => {
  const handlePublish = (postId, published) => {
    const isPublished = published === false ? 'true' : 'false'
    alert(`Post con ID ${postId} fué publicado ${isPublished}`)
  }

  const handleDelete = (postId) => {
    const confirm = window.confirm('¿Estás Seguro?')
    if (confirm) {
      alert(`Post con ID ${postId} fué eliminado con éxito`)
    }
  }

  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <h3 className="text-center text-white">Listado de Posts</h3>
        <Row className="d-flex justify-content-center g-4 pt-2">
          {posts.length > 0 ? (
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
              Oh no.... No hay ofertas de trabajo para mostrar. Vuelve pronto...
            </Alert>
          )}
        </Row>
      </Container>
    </Col>
  )
}
