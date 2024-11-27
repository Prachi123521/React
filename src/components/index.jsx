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

function Square({value}){
    function handleClick(){
        console.log('clicked'); 
    }
    return(
        <button
        className="square"
        onClick = {handleClick}
        >
            {value}
        </button>
    );
} 
export function Board(){
    return (
     <>
     <div className="board-row">
    <button className = "Square">1</button> 
    <button className = "Square">2</button>
    <button className = "Square">3</button> 
    <button className = "Square">4</button>

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

    <div className="board-row">
    <button className = "Square">7</button>
    <button className = "Square">8</button> 
    <button className = "Square">9</button>
    
        
    </div>
    
     </>
    );
}






