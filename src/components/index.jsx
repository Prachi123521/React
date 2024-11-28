import { lazy } from "react";

export function MyButton(){
 return(
    <button> I'm button </button>
 );
}

export function AboutPage(){
    return (
        <>
        <h1> React  </h1>
        <p> Learning React  <br /> From React documentation </p>
        </>
    );
}

export function Board(){
    return (
     <>
     <div className="board-row">
    <button className = "Square">1</button> 
    <button className = "Square">2</button>
    <button className = "Square">3</button> 

    </div>
    
    <div className="board-row">
    <button className = "Square">4</button> 
    <button className = "Square">5</button>
    <button className = "Square">6</button> 
    </div>

    <div className="board-row">
    <button className = "Square">7</button>
    <button className = "Square">8</button> 
    <button className = "Square">9</button>
    </div>

    
     </>
    );
}

/*export function Rectangle(){
    return(
        <rectangle>
    )
}*/














