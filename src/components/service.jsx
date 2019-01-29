import React,{Component} from "react";


class service extends Component{

    render(){
        return (            
    
            <div className="service">  
                 <h3 className="title"> OUR FEATURES CLASSES </h3>
                 <h3 className="title2"> CHECKOUT OUR FITNESS CLASSES </h3>
                 <div className="info1">
                 <img src="../Img/1.png"/>
                 <div className="info-diamond"> HEAVY WEIGHT <span> CLASSES </span> </div>
                 <div className="More-info"> Sed ut perspiciatis unde omnis <br/> iste natus error sit voluptatem <br/>accus antium dolorem que<br/> launtium, totam rem.</div>
                 </div>
                 <div className="info2">
                 <img className="img1" src="../Img/2.png"/>
                 <div className="info-diamond1"> BODY BUILDING  <span> CLASSES </span> </div>
                 <div className="More-info1"> Sed ut perspiciatis unde omnis <br/> iste natus error sit voluptatem <br/>accus antium dolorem que<br/> launtium, totam rem.</div>
                 </div>
                 <div className="info3">
                 <img className="img2" src="../Img/3.png"/>
                 <div className="info-diamond2"> WEIGHT LOSS  <span> CLASSES </span> </div>
                 <div className="More-info2"> Sed ut perspiciatis unde omnis <br/> iste natus error sit voluptatem <br/>accus antium dolorem que<br/> launtium, totam rem.</div>
                 </div>
         
         
            <div className="sec">
                    <img className="img4" src="../Img/serve.png"/>
                    <div className="More-info3"> FITNESS CLASSES THIS<br/> SUMMER. PAY NOW AND GET<br/> 25% DISCOUNT</div>
                     <br/><p className="pa"> voluptatem quia voluptas sit aspernatur aut odit <br/>aut fugit sed quia conseur magni dolores eos.</p>
                     <button>Become A Member</button>
             </div>
             <div className="pepole"> 
                  <h1>WHAT PEOPLE SAYS</h1>
                  <p>LATEST TESTIMONIAL FROM OUR STUDENTS</p>
                  <div className="first">
                  <img  src="../Img/p2.jpg"/>
                  <p>"   The instructor was extremely welcoming and we were able to do all our routines while on holiday for a reasonable cost. </p>
                  </div>
             <div className="second">
                  <img  src="../Img/p1.jpg"/>
                  <p>"   The instructor was extremely welcoming and we were able to do all our routines while on holiday for a reasonable cost. </p>
                  </div>
                  </div>
               </div>
        );
    }
}

export default service;




// var arr = 
// [{img:"../Img/1.png" , heading:'HEAVY WEIGHT <span> CLASSES </span>',   paragraph: 'Sed ut perspiciatis unde omnis <br/> iste natus error sit voluptatem <br/>accus antium dolorem que<br/> launtium, totam rem.' },
// img:"../Img/1.png" , heading:'HEAVY WEIGHT <span> CLASSES </span>',   paragraph: 'Sed ut perspiciatis unde omnis <br/> iste natus error sit voluptatem <br/>accus antium dolorem que<br/> launtium, totam rem.'
// ];
    
// var response = this.arr.map((obj) =>{
//     return (


//         <div className="data">
//             <img src={obj.img} alt=""/>
//             <h1>{obj.name}</h1>
//             <div className="info">
//                 <p>Profession:{obj.profession}</p>
//                 <p>Email:{obj.email}</p>
//                 <p>Cell:{obj.contact.Cell}</p>
                
//             </div>
//         </div>
//     );
// });




// return (        
//     <div className="profile">
//         {response}
//     </div>