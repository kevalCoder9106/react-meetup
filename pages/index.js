import MeetupList from "@/components/Meetup/MeetupList"
import MeetupWraper from "@/components/Wraper/MeetupWraper"

const Home = (props) => {
  return(
    <MeetupWraper>
      <MeetupList meetup_data={props.meetup_data} />
    </MeetupWraper>
  )
}

export const getServerSideProps = async () => {
  const meetup_data = await fetch('http://localhost:3000/api/get-all-meetups',{
    method: 'GET',
  })
  .then(response => response.json())
  
  return {
    props: {
      meetup_data: JSON.parse(meetup_data)
    }
  }
}

export default Home