import { Button, Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, events, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: events.title,
    description: events.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(events.title)}`,
    path: events.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={events.title}
        description={events.description}
        path={events.path}
        image={`/api/og/generate?title=${encodeURIComponent(events.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <h1>{events.title}</h1>
      <br />
      <h4>{events.subtitle}</h4>
      <br />
      <p>{events.description}</p>
      <br />
      <Button
        id="change"
        data-border="rounded"
        href={events.changeLink}
        size="m"
        arrowIcon
      >{events.changeText}</Button>
      <br />
      <Button
        id="pub"
        data-border="rounded"
        variant="secondary"
        href={events.pubLink}
        size="m"
        arrowIcon
      >{events.pubText}</Button>
      <br />
      <Button
        id="sub"
        data-border="rounded"
        variant="secondary"
        href={events.subLink}
        size="m"
      >{events.subText}</Button>
      <br />
      <iframe
        src={events.calendarEvents}
        width="600"
        height="450"
        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </Column>
  );
}
