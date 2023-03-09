import MeetupWraper from "@/components/Wraper/MeetupWraper"
import MeetupDetails from "@/components/Meetup/MeetupDetails"

const Meetup = (props) => {
    return(
        <MeetupWraper>
            <div className="w-full flex justify-center items-center">
                <MeetupDetails title={props.meetupdata.title} image={props.meetupdata.image} address={props.meetupdata.address} discription={props.meetupdata.discription}/>
            </div>
        </MeetupWraper>
    )
}

export const getStaticPaths = async () => {
    const ids = await fetch('http://localhost:3000/api/get-all-ids', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => JSON.parse(json))

    const paths = []
    ids.map(id => {
        paths.push({
            params: {
                meetupid: id._id
            }
        })
    })

    return {
        fallback: false,
        paths: paths
        // [
        //     {
        //         params: {
        //             meetupid: '1'
        //         }
        //     }
        // ]
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.meetupid

    const meetupdata = await fetch('http://localhost:3000/api/get-meetup',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({id: id})
    })
    .then(response => response.json())

    return {
        props: {
            meetupdata: meetupdata
        }
    }
}

export default Meetup