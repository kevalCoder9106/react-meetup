import MeetupWraper from "@/components/Wraper/MeetupWraper"
import NewMeetupForm from "@/components/Form/NewMeetupForm"

const NewMeetup = () => {
    const newMeetupHandler = async (data) => {
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json)
    }

    return (
        <MeetupWraper>
            <div className="w-full mt-4 flex justify-center items-center">
                <NewMeetupForm newMeetupHandler={newMeetupHandler}/> 
            </div>       
        </MeetupWraper>
    )
}

export default NewMeetup