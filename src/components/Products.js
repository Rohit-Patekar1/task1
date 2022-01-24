import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'


const Products = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        if (data.length == 0) {
            fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
                .then(res => res.json())
                .then(data => setData(data))



        }
    }, [])


    var items = [];
    if (data.products !== undefined) {


        items = Object.values(data.products)


    }
    items.sort((a, b) => {
        return b.popularity - a.popularity;
    })

    return <div>

        {data.products == undefined ? (
            <h1>Loading...</h1>
        ) : (

            <>
                <Row className='align-items-center'>
                    <Col>
                        <h1>Most Popular Products</h1>
                    </Col>
                </Row>
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>Subcategory</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Popularity </th>
                        </tr>
                    </thead>
                    {

                        <tbody>
                            {items.map((product, index) => (
                                <tr key={index + 1}>
                                    <td>{product.subcategory}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.popularity}</td>
                                </tr>
                            ))}
                        </tbody>}
                </Table>

            </>
        )}
    </div>;
};

export default Products;



{/* <tr> <td>{products[12].subcategory}</td></tr> */ }