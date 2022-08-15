import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = () => {


    
  const item = {
    id: "3",
    title: "Best Place",
    image:
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    address: "Mordor",
    description: "This place is amazing! You have to visit here some time",
  };


  return (
    <MeetupDetail
      id={item.id}
      title={item.title}
      address={item.address}
      image={item.image}
      description={item.description}
    />
  );
};

export default MeetupDetailPage;
