const MeetupDetails = (props) => {
    const { title, address, image, discription } = props
    
    return (
        <div className="w-1/3 p-3 m-5 shadow-lg shadow-gray-400 rounded-md text-black flex flex-col justify-start items-center">
            <img 
                src={image}
                alt='Something important'
                width={300}
                height={300}
                className="w-full rounded-md"
            ></img>
            <h1 className="p-3 font-bold text-lg">{title}</h1>
            <h1 className="text-sm">{address}</h1>
            <h1 className="text-sm">{discription}</h1>
        </div>
    )
}

export default MeetupDetails