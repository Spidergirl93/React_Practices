import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

/* export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}; */

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://walkmary:SesameOpen@meetup.ltcqybe.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const allmeetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: allmeetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 3600,
  };
};

export default HomePage;
