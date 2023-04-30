import { useActionData, useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";
import { getAuthToken } from "../util/auth";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export async function action() {}

export default EditEventPage;
