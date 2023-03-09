import MeetupItem from "./MeetupItem"
import { useMemo } from 'react'

const MeetupList = (props) => {
    const { meetup_data } = props

    const getMeetupData = useMemo(async (id) => {
        const meetupdata = await fetch('http://localhost:3000/api/get-meetup',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id: id})
        })
        .then(response => response.json())

        return meetupdata
    })

    return (
        <div className="h-main p-2 flex flex-col justify-start items-center">
            {
                meetup_data.map(data => {
                    return <MeetupItem id={data._id} title={data.title} address={data.address} image={data.image}/>
                })
            }
        </div>
    )
}

export default MeetupList