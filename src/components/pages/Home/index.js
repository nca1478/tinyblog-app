import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { posts } from '../../../data/posts'
import { PostItem, Showcase } from '../../common'

export const HomePage = () => {
  return (
    <>
      <Showcase />
      <Col className="bg-primary">
        <h2 className="text-center text-white mt-5 mb-4">Últimos Posts</h2>

        <Container className="px-4 mb-5">
          <Row className="d-flex justify-content-center g-4 pt-2 ">
            {posts.length > 0 ? (
              posts.map((post) => {
                return <PostItem key={post.id} {...post} />
              })
            ) : (
              <Alert variant="danger" className="w-75">
                Oh no.... No hay posts para mostrar. Vuelve pronto...
              </Alert>
            )}
          </Row>
        </Container>
      </Col>
    </>
  )
}
