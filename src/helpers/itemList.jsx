

const Temp = ({list})=>{
    if(list === undefined || list === null ){
        return (<div></div>);
    }
    if(list.length===0){
        return(<div className="mt-5"><h1>There is no items in the store.</h1><h2>Please contact the admins.</h2></div>)
    }
    return(
        <div className="items-list container">
            {list.map((element)=>(
                <div className="items-preview" key={element._id}>
                    <h1>{element.name}</h1>
                    <h4>Value : {element.value}$</h4>
                    <h4>QR Code : {element.QR}</h4>
                    <h4>details : {element.details}</h4>

                </div>
            ))}
        </div>
    );
}

export default Temp;