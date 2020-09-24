import React from 'react';
import bali from "../gambar/bali.jpeg"
import mery2 from "../gambar/mery2.jpeg"
import okeh from "../gambar/okeh.jpeg"
import bersamamu from "../gambar/bersamamu.jpeg"
import "../style/Content.css"
const Langkah1 = () => {
    return ( 
        <div className="smooth-scroll-wrapper">
        <div className="content">
            <div className="container">
                <h1 className="text">Aku dan Kamu</h1>
                <div className="img">
                    <img src={bali} alt=""/>
                </div>
                <p className="text">
                    enaknya di isi apa ya
                    enaknya di isi apa ya
                    enaknya di isi apa ya 
                </p>
            </div>

            <div className="container">
                <h1 className="text">cantiknya dirimu</h1>
                <div className="img">
                    <img src={mery2} alt=""/>
                </div>
                <p className="text">
                    enaknya di isi apa ya
                    enaknya di isi apa ya
                    enaknya di isi apa ya 
                </p>
            </div>

            <div className="container">
                <h1 className="text">art ulthamu :)</h1>
                <div className="img">
                    <img src={okeh} alt=""/>
                </div>
                <p className="text">
                    enaknya di isi apa ya
                    enaknya di isi apa ya
                    enaknya di isi apa ya 
                </p>
            </div>
            <div className="container">
                <h1 className="text">selalu bersamamu :)</h1>
                <div className="img">
                    <img src={bersamamu} alt=""/>
                </div>
                <p className="text">
                    enaknya di isi apa ya
                    enaknya di isi apa ya
                    enaknya di isi apa ya 
                </p>
            </div>

        </div>
    </div>


     );
}
 
export default Langkah1;
