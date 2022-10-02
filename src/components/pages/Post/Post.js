import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getPost } from '../../../helpers/getPost'
import imagePost from '../../../assets/img/post.jpg'

export const PostPage = () => {
  const { postId } = useParams()
  const [post, setPost] = useState({})

  const fetchPost = (postId) => {
    setPost(getPost(postId))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchPost(postId)
  }, [postId])

  return (
    <div className="bg-white">
      <Container>
        <Row className="my-4">
          <Col>
            <Row>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5">{post.title}</h1>
                <p className="h3">{post.title}</p>
                <p className="text-muted fst-italic">
                  Posteado en {post.date} por {post.author}
                </p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col className="d-flex justify-content-center">
                <Image
                  className="my-3"
                  src={imagePost}
                  style={{ width: '30.5rem', height: 'auto' }}
                  thumbnail
                  fluid
                />
              </Col>
            </Row>
            <p className="lead">{post.body}</p>

            <hr className="mt-5 mb-4" />

            <div className="text-center">
              <Button variant="dark">Anterior</Button>{' '}
              <Button variant="dark">Siguiente</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
