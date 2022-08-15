import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (newMeetup) => {
    const response = await fetch("/api/newMeetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.replace("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
