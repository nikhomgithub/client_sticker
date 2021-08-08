import React from 'react';
import {MdClose,MdCheck} from 'react-icons/md';


const renderWidthRangeBar=({showRange,setShowRange,widthLeft,setWidthLeft})=>{

return(
showRange  
?<div  style={{position:"absolute",bottom:"2rem",left:"0",
        width:`50%`,zIndex:"200"}}>
    
    <div className="flex-center-center jc-space-between">
        <div className="w-95">
            <input type="range" min="5" max="90"   
                style={{visibility:showRange?"visible":"hidden"}}
                value={widthLeft}
                onChange={e=>{setWidthLeft(e.target.value,"widthLeft")}} 
            />
        </div>
        {false
        ?<div className="w-5"
             style={{display:"flex",justifyContent:"flex-end"}}
        >
           <MdClose className="sm-icon" 
                style={{backgroundColor:"rgba(255,255,255,0.5)"}}
                onClick={e=>{setShowRange(!showRange,"showRange")}}/>
        </div>
        :null
        }
    </div>
</div> 
:<MdCheck className="sm-icon"
         style={{position:"absolute",bottom:"1.5rem",zIndex:"200",right:"0",
                backgroundColor:"rgba(255,255,255,0.5)"}}
          onClick={e=>{setShowRange(!showRange,"showRange")}}/>
)
}

export default renderWidthRangeBar

