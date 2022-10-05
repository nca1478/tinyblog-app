// Dependencies
import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

// Custom Dependencies
import { PostItem, Showcase, SpinnerLoading } from '../../common'
import { getLastPosts } from './services'

export const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getLastPosts({ setPosts, setLoaded })
  }, [])

  return (
    <>
      <Showcase />
      <Col className="bg-primary">
        <h2 className="text-center text-white mt-5 mb-4">Últimos Posts</h2>

        <Container className="px-4 mb-5">
          <Row className="d-flex justify-content-center g-4 pt-2 ">
            {!loaded ? (
              <SpinnerLoading size="lg" variant="light" />
            ) : posts.length > 0 ? (
              posts.map((post) => {
                return <PostItem key={post.id} {...post} />
              })
            ) : (
              <Alert variant="danger" className="w-75">
                Oh no.... No se han publicado posts. Vuelve pronto...
              </Alert>
            )}
          </Row>
        </Container>
        <ToastContainer />
      </Col>
    </>
  )
}
