import React from 'react';
// import { render } from '@testing-library/react';

let price = 45;

//Functional componet
function ProductCard() {
    return (
        <div>
            <h3>Drone Eachine E33C</h3>
            <div>
                <span>Price: ${price}</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    )
}

//Class component
// class ProductCard extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Drone Eachine E33C</h3>
//                 <div>
//                     <span>Price: ${price}</span>
//                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 </div>
//             </div>
//         )
//     }
// }

// With Erow function
// const ProductCard = () => (
//     <div>
//         <h3>Product 1</h3>
//         <div>
//             <span>Price: $35</span>
//             <p>Drone Eachine E50</p>
//         </div>
//     </div>
// )

export default ProductCard