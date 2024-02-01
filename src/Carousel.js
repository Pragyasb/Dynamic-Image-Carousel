import { useState } from "react";
import { data } from "./CaroselData";
import "./Carosel.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Carousel = ()=>{
    const[index,setIndex] = useState(1);
    const handleNext =() =>{
        if(index < data.length)
        setIndex((prev)=>prev+1)
         else
         setIndex(1)
    }
    const handlePrev = ()=>{
        if(index > 1 )
        setIndex((prev)=>prev-1)
        
    }
    return(
        <div className="img-container">
              <div className="prev-btn">
                {
                    index>1 &&  <button onClick={handlePrev}><IoIosArrowBack /></button>
                }
               
            </div>
            <div>
            {
                data.map((img)=>{
                    return(
                        <div >
                            {
                                img.id === index && <img  src = {img.img}/>
                            }
           
                          </div>  
                    )
                })
            
            }
            </div>
            <div className="next-btn">
                {
                    index < data.length &&  <button onClick={handleNext}><IoIosArrowForward /></button>
                }
               
            </div>
            
        </div>
    )
}
export default Carousel;