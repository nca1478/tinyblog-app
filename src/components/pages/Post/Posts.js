// Dependencies
import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

// Custom Dependencies
import { Paginate, PostItem, SpinnerLoading } from '../../common'
import { getPostsPaginate, getPostsPublished } from './services'

export const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const limit = 4

  useEffect(() => {
    window.scrollTo(0, 0)
    getPostsPublished({ setPosts, setLoaded, setPageCount, limit })
  }, [])

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1
    getPostsPaginate({ currentPage, limit, setPosts, setLoaded })
  }

  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <h3 className="text-center text-white">Todos los Posts</h3>
        <Row className="d-flex justify-content-center g-4 pt-2">
          {!loaded ? (
            <SpinnerLoading size="lg" variant="light" />
          ) : posts.length > 0 ? (
            <>
              {posts.map((post) => {
                return <PostItem key={post.id} {...post} />
              })}

              <Paginate pageCount={pageCount} onPageChange={handlePageClick} />
            </>
          ) : (
            <Alert
              variant="danger"
              className="w-75 animate__animated animate__fadeIn"
            >
              Oh no.... No se han publicado posts. Vuelve pronto...
            </Alert>
          )}
        </Row>
      </Container>
      <ToastContainer />
    </Col>
  )
}
