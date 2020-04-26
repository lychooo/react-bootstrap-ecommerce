import React from 'react';
import Image from 'react-bootstrap/Image'
import imgPageNotFound from '../../Data/img-services/new404.png'


function Page404() {
    return (
        <div className="page-not-found">
            <Image src={imgPageNotFound} rounded />
            <h3>Sorry! Page Not Found!</h3>
        </div>
    )
}

// class Page404 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Page Not Found! 404</p>
//             </div>
//         )
//     }
// }

export default Page404;