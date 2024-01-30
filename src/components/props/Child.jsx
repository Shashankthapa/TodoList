const Child = (props) => {
    
    return (
        <>
        {props.msg.map((val) => 
                <ol><li>{val.name}</li> <li>{val.age}</li> <li>{val.designation}</li> </ol> 
        )}
        </>
    )
}

export default Child;