import { useRouter } from "next/router"

const MeetupItem = (props) => {
    const { id, title, address, image } = props
    const rounter = useRouter()

    const ShowDetails = () => {
        rounter.push('/' + id)
    }

    return (
        <div className="w-1/3 p-3 m-5 shadow-lg shadow-gray-400 rounded-md text-black flex flex-col justify-start items-center">
            <img 
                src={image}
                alt='Something important'
                width={300}
                height={300}
                className="w-52 rounded-md"
            ></img>
            <h1 className="p-3 font-bold text-lg">{title}</h1>
            <h1 className="text-sm">{address}</h1>
            <button onClick={ShowDetails} className="m-5 px-2 py-1 text-indigo-900 rounded-sm text-sm border-1 border-indigo-900 hover:bg-slate-300">Show Details</button>
        </div>
    )
}

export default MeetupItem