import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import Categories from './Categories';



function Category() {

    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem || curData.subcategory === catItem || curData.subcategory_1 === catItem;
        });
    
        setData(result);
    }
    


    return (
        <div>
            <h1 className='text-center text-info'><strong>Let's Shop</strong></h1>


            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Men')}>Men</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Women')}>Women</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Children')}>Children</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Black')}>Black</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('White')}>White</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setData(Categories)}>All</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values) => {
                                const { id, title, price, image } = values;
                                return (
                                    <>

                                        <div className="col-md-4 mb-4" key={id}>
                                            <Card >
                                                <Card.Img className='card-image-top' variant="top" src={image} />
                                                <Card.Body>
                                                    <Card.Title>{title}</Card.Title>
                                                    <p>Price: {price}/-</p>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="dark">Buy now</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Category