import React from 'react'
import { Table } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Slides() {

  let image_Table=["https://thumbs.dreamstime.com/b/good-health-best-wealth-card-stethoscope-red-heart-wood-table-medical-concept-72050180.jpg",
  "https://img.freepik.com/free-photo/front-view-woman-holding-paper-heart-with-heartbeat_23-2148635119.jpg?w=2000"
  ]
  return (
    <>
    <Carousel>
      {image_Table.map(image=>
       <Carousel.Item>
       <img
         className="d-block w-100"
         src={image}
         alt="First slide"
       />
       <Carousel.Caption>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
        )}
     
    
    </Carousel>
    </>
  );
}
    
export default Slides
