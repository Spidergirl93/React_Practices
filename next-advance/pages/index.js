import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Good Place",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "ssfdsf",
  },
  {
    id: "2",
    title: "Better Place",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "sdfsdf",
  },
  {
    id: "3",
    title: "Best Place",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "ssfghjgjdsf",
  },
  {
    id: "4",
    title: "Awesome Place",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "ssfdqewretsf",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_DATA} />;
};

export default HomePage;
