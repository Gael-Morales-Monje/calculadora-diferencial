
function Button ({ funtion, name }) {
    
    return(
        <>
            <button className="btn" onClick={funtion}>{name}</button>
        </>
    )
}


export default Button