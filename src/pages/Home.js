import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import { Container, Col, Row, Card, DropdownButton , Dropdown} from 'react-bootstrap'

import logo from '../asset/img/logo.jpg'

export default function Home() {
  //<Button as={Link} to='town' variant="primary">地區</Button>
//點擊下拉item進行路由轉換,設置響應式
  return (
    <Container>
      <Row md={4}>
        <Col>
          <Card border="light" className='county text-center' >
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>台北市</Card.Title>
              <Card.Text>
                109年人口戶數及性別平均值
              </Card.Text>

              <DropdownButton id="dropdown-basic-button" title="地區">
                <Dropdown.Item as={Link} to='town1'>中正區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town2'>大同區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town3'>中山區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town4'>松山區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town5'>大安區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town6'>萬華區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town7'>信義區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town8'>士林區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town9'>北投區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town10'>內湖區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town11'>南港區</Dropdown.Item>
                <Dropdown.Item as={Link} to='town12'>文山區</Dropdown.Item>
              </DropdownButton>

            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}