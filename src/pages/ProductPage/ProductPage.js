import './ProductPage.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Table, Checkbox,Modal } from 'antd';
import { getProducts } from '../../services/auth/actions'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Modal>{text}</Modal>,
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'available',
    dataIndex: 'available',
    key: 'available',
    render: text => <Checkbox checked={text} />,
  }
];

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    let { products } = this.props
    products != null && 
    products.forEach((value) => {
      value.key = value.id
    });
    return (
      <Table
        columns={columns}
        dataSource={products}
        bordered
      />
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.authReducer.products,
})

const mapDispatchToProps = {
  getProducts,
}

ProductPage.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)



