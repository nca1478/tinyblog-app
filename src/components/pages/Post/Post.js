// Dependencies
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// Custom Dependencies
import imagePost from '../../../assets/img/post.jpg'
import { getPostDetails } from './services'

export const PostPage = () => {
  const { postId } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    getPostDetails({ postId, setPost })
  }, [postId])

  return (
    <div className="bg-white animate__animated animate__fadeIn">
      <Container>
        <Row className="my-4">
          <Col>
            <Row>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5">{post.title}</h1>
                <p className="h3">{post.title}</p>
                <p className="text-muted fst-italic">
                  Publicado por <b>{post.author}</b> el {post.createdAt}
                </p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col className="d-flex justify-content-center animate__animated animate__fadeInUp">
                <Image
                  className="my-3"
                  src={imagePost}
                  style={{ width: '30.5rem', height: 'auto' }}
                  thumbnail
                  fluid
                />
              </Col>
            </Row>

            <hr className="mb-4" />

            <p className="parrafo">{post.body}</p>

            <hr className="mt-4 mb-4" />

            <div className="text-center">
              <Button variant="dark">Anterior</Button>{' '}
              <Button variant="dark">Siguiente</Button>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  )
}
