// import React from 'react';
import bali from "../gambar/bali.jpeg"
import mery2 from "../gambar/mery2.jpeg"
import okeh from "../gambar/okeh.jpeg"
import bersamamu from "../gambar/bersamamu.jpeg"
import "../style/Content.css"
import React, { Component } from 'react';
import $ from "jquery"

class Langkah1 extends Component {
    constructor(props) {
        super(props);
        this.text_ref= React.createRef();
        this.img_ref = React.createRef();
        this.text = this.text_ref.current;
        this.img = this.img_ref.current;
        let elementer;
        // console.log("ref=", this.img)
    }
    state = {
        element : []
     }

      componentDidMount() {
          let element = $(".text, .img").toArray();
          
         $(window).scroll(function(item) {
          element.forEach(function (item) {
                console.log("Value of item :", item)
                 if ($(document).scrollTop() >= $(item).offset().top - 400) {
                     $(item).addClass("reveal");
                 }
             });
        })
        element.forEach(function (item) {
            if ($(document).scrollTop() >= $(item).offset().top - 400) {
                $(item).addClass("reveal");
            }});

      }

       componentDidUpdate() {
      
       }


    render() {

        console.log("Nilai state element di fungsi render: ", this.state.element)

       
         

        


        return (  <div className="smooth-scroll-wrapper">
        <div className="content">
            <div className="container">
                <h1  className="text">Aku dan Kamu</h1>
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
    </div> );
    }
}

// export default Langkah1;
// const Langkah1 = () => {
//     return (
//         <div className="smooth-scroll-wrapper">
//         <div className="content">
//             <div className="container">
//                 <h1 className="text">Aku dan Kamu</h1>
//                 <div className="img">
//                     <img src={bali} alt=""/>
//                 </div>
//                 <p className="text">
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                 </p>
//             </div>

//             <div className="container">
//                 <h1 className="text">cantiknya dirimu</h1>
//                 <div className="img">
//                     <img src={mery2} alt=""/>
//                 </div>
//                 <p className="text">
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                 </p>
//             </div>

//             <div className="container">
//                 <h1 className="text">art ulthamu :)</h1>
//                 <div className="img">
//                     <img src={okeh} alt=""/>
//                 </div>
//                 <p className="text">
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                 </p>
//             </div>
//             <div className="container">
//                 <h1 className="text">selalu bersamamu :)</h1>
//                 <div className="img">
//                     <img src={bersamamu} alt=""/>
//                 </div>
//                 <p className="text">
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                     enaknya di isi apa ya
//                 </p>
//             </div>

//         </div>
//     </div>


//      );
// }

export default Langkah1;
