import { useRef } from "react"

const NewMeetupForm = (props) => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const addressRef = useRef(null)
    const descriptionRef = useRef(null)

    const formSubmitHandler = (e) => {
        e.preventDefault()

        const data = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            address: addressRef.current.value,
            discription: descriptionRef.current.value
        }

        props.newMeetupHandler(data)
    }

    return (
        <form onSubmit={e => formSubmitHandler(e)} className="w-1/3 h-3/4 p-5 rounded-md shadow-2xl shadow-gray-400 flex flex-col text-black">
            <lable htmlFor='title'>Title</lable>
            <input ref={titleRef} id='title' type='text' className="bg-white p-1 border-1 border-gray-400 text-sm rounded-sm"></input>
            <lable htmlFor='image'>Image</lable>
            <input ref={imageRef} id='image' type='text' className="bg-white p-1 border-1 border-gray-400 text-sm rounded-sm"></input>
            <lable htmlFor='address'>Address</lable>
            <input ref={addressRef} id='address' type='text' className="bg-white p-1 border-1 border-gray-400 text-sm rounded-sm"></input>
            <lable htmlFor='desc'>Description</lable>
            <textarea ref={descriptionRef} id='desc' className="bg-white p-1 border-1 border-gray-400 text-sm rounded-sm"></textarea>
            <div className="w-full flex justify-end">
                <input type='submit' value='Add Meetup' className="m-2 p-2 bg-orange-800 text-white rounded-md hover:bg-orange-700 active:bg-orange-600"></input>
            </div>
        </form>
    )
}

export default NewMeetupForm