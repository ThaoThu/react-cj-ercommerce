import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";
Form.propTypes = {};

function FormSearch(props) {
  return (
    <Form className="form-search mb-20">
      <Row>
        <Col sm="3">
          <FormGroup>
            <Label for="exampleEmail">Tên sản phẩm</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <Label for="exampleEmail">Mã sản phẩm</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <Label for="exampleEmail">Loại</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
        <Col sm="3">
          <FormGroup>
            <Label for="exampleEmail">Loại</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
        <Col sm="12 mt-40">
          <div className="flex-right form-search__action">
            <a className="mr-20">Tìm kiếm nâng cao</a>
            <button className="cj-btn--search mr-20">Tìm kiếm</button>
            <button className="cj-btn">
              Làm mới<i></i>
            </button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSearch;
