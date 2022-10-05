// Dependencies
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import queryString from 'query-string'

// Custom Dependencies
import { PostItem, SpaceBlank, SpinnerLoading } from '../../common'
import { searchPost } from './services'

export const SearchPage = () => {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const { q = '' } = queryString.parse(location.search)

  useEffect(() => {
    searchPost(q, setPosts, setLoaded)
  }, [q])

  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <h3 className="text-center text-white">Posts Encontrados</h3>
        <Row className="justify-content-center g-4 pt-2">
          {!loaded ? (
            <>
              <SpinnerLoading size="lg" variant="light" />
              <SpaceBlank height="52vh" />
            </>
          ) : posts.length > 0 ? (
            <>
              {posts.map((offer) => {
                return <PostItem key={offer.id} {...offer} />
              })}
            </>
          ) : (
            <Alert
              variant="danger"
              className="w-75 animate__animated animate__fadeIn"
            >
              No se encontraron posts...
            </Alert>
          )}
        </Row>
      </Container>
      <ToastContainer />
    </Col>
  )
}
