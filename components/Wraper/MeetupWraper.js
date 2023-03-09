import Header from "@/components/UI/Header"

const MeetupWraper = (props) => {
    return (
        <div className="w-screen h-screen bg-white overflow-auto">
            <Header/>
            {props.children}
        </div>
    )
}

export default MeetupWraper