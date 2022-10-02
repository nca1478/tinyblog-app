import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { posts } from '../../../data/posts'
import { PostItem } from '../../common'

export const PostsPage = () => {
  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <h3 className="text-center text-white">Todos los Posts</h3>
        <Row className="d-flex justify-content-center g-4 pt-2">
          {posts.length > 0 ? (
            <>
              {posts.map((post) => {
                return <PostItem key={post.id} {...post} />
              })}
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
