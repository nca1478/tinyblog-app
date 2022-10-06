// Dependencies
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

// Custom Dependencies
import imagePost from '../../../assets/img/post.jpg'
import { get } from '../../../config/api'
import { parsePostDetails } from './helpers'

export const PostPage = () => {
  const { postId } = useParams()
  const [post, setPost] = useState({})

  const getPostById = useCallback(async () => {
    await get(`/posts/${postId}`)
      .then((response) => {
        const postDetails = parsePostDetails(response)
        setPost(postDetails)
      })
      .catch((error) => {
        toast.error('Error al intentar obtener detalles del post.')
        console.log(error)
      })
  }, [postId])

  useEffect(() => {
    window.scrollTo(0, 0)
    getPostById().catch(console.error)
  }, [getPostById])

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
