import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <Heading text="Contacts list:" />
    <ul>
      {contacts &&
        contacts.map(({ id, name, email }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  </>
);

export default Contacts;
