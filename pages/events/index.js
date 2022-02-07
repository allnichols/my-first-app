import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function searchHandler(year, month) {
    router.push({
      pathname: `/events/${year}/${month}`,
    });
  }

  return (
    <div>
      <h1>All Events</h1>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export default AllEventsPage;
