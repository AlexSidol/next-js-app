import { FC } from "react";
import React from 'react'
import Heading from "./Heading";
import { contactType } from "@/types";


type contactInfoProps = {
  contact: contactType,
}

const ContactInfo: FC <contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <b>email</b> {email}
      </div>
      <div>
        <b>address</b> {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
