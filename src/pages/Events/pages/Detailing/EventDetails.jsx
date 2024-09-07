import EventDetailsLayout from "../../components/EventDatailsLayout";
import { useParams } from "react-router-dom";
import {events} from "../../../../constants/eventDetails-final";
export default function EventDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= events.length) {
    return <div>Event not found</div>;
  }

  const event = events[eventIndex];

  return (
    <>
      <EventDetailsLayout
        data={event}
      />
    </>
  );
}