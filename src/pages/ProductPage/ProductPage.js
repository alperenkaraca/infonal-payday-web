import './ProductPage.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Table, Checkbox, Modal, Form, Button, Input } from 'antd';
import { getProducts, updateProductInfo } from '../../services/auth/actions'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Currently Available',
    dataIndex: 'available',
    key: 'available',
    render: text => <Checkbox disabled checked={text} />,
  }
];

class ProductPage extends React.Component {

  state = { visible: false, record: [] };

  showModal = (record) => {
    this.setState({
      visible: true,
      record
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
      record: []
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      record: []
    });
  };

  availableOnChange = e => {
    const { record } = this.state
    record.available = e.target.checked
    this.setState({
      record,
    });
  };

  componentDidMount() {
    this.props.getProducts()
  }

  render() {

    let { products, form, updateProductInfo } = this.props
    const { record } = this.state
    products != null &&
      products.forEach((value) => {
        value.key = value.id
      });

    const handleSubmit = (e) => {
      e.preventDefault()
      form.validateFields((err, values) => {
        if (!err) {
          values.id = record.id
          updateProductInfo(values)
          this.handleCancel()
        }
      })
    }
    const { getFieldDecorator } = form
    const { TextArea } = Input;

    return (
      <React.Fragment>
        <Modal
          destroyOnClose={true}
          title="Basic Modal"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Form id="productPageForm" onSubmit={handleSubmit}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal">
            <Form.Item
              label="Name">
              {getFieldDecorator('name', {
                initialValue: record != null ? record.name : null,
                rules: [{ required: true, message: 'Please input your name!' }],
              })(
                <Input
                  placeholder="name"
                />)}
            </Form.Item>
            <Form.Item
              label="Price">
              {getFieldDecorator('price', {
                initialValue: record != null ? record.price : null,
                rules: [{ required: true, message: 'Please input your price address!' }],
              })(
                <Input
                  placeholder="Price"
                />)}
            </Form.Item>
            <Form.Item
              label="Available">
              {getFieldDecorator('available', {
                initialValue: record != null ? record.available : null,
                rules: [{ required: true }],
              })(
                <Checkbox checked={record.available} onChange={this.availableOnChange} />)}
            </Form.Item>
            <Form.Item
              label="Description">
              {getFieldDecorator('description', {
                initialValue: record != null ? record.description : null,
                rules: [{ required: true, message: 'Please input your description!' }],
              })(
                <TextArea
                  rows={4}
                  placeholder="Description"
                />)}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{marginLeft:'30%'}}
              >
                Save
            </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Table
          onRow={(record) => ({
            onClick: () => {
              this.showModal(record)
            }
          })}
          columns={columns}
          dataSource={products}
          bordered
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.authReducer.products,
})

const mapDispatchToProps = {
  getProducts,
  updateProductInfo
}

ProductPage.propTypes = {}

const ProductForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(ProductPage))


export default ProductForm



