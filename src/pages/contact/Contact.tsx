import React, { useState, useEffect } from "react";
import Aos from "aos";
import { Modal } from "../../components";
import useSubmitContact from "../../hooks/useSubmitContact";

import styles from "./contact.module.scss";

import { BiPaperPlane } from "react-icons/bi";
import Map from "../../../src/assets/images/map.jpg";
import fields from "../../data/contactFields";
import FormField from "../../components/form/formField";

const Contact = () => {
  const [form, setForm] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const [modal, setModal] = useState({
    visible: false,
    text: "",
    color: "",
  });

  const handleSubmit = useSubmitContact();

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const onChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    evt.persist();
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handleSubmit({ form, setModal });
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className={styles.wrapper}>
      {modal.visible && <Modal text={modal.text} color={modal.color} />}
      <h1 className="page-heading">CONTACT ME</h1>
      <section className={styles.contact_layout}>
        <form className={styles.form} onSubmit={onSubmit} data-aos="fade-right">
          {fields.map((field) => {
            return (
              <FormField
                key={field.id}
                {...field}
                onChange={onChange}
                value={form[field.name]}
              />
            );
          })}
          <button type="submit" className={styles.submit_btn}>
            SEND MESSAGE
            <BiPaperPlane />
          </button>
        </form>
        <section className={styles.map} data-aos="fade-left">
          <img src={Map} alt="map" />
        </section>
      </section>
    </section>
  );
};

export default Contact;
