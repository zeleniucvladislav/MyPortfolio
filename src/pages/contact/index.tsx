import React, {
  useState,
  useEffect,
  memo,
  ChangeEvent,
  ReactElement,
} from "react";
import Aos from "aos";
import { Modal, FormField } from "components";
import useSubmitContact from "utils/hooks/useSubmitContact";
import { BiPaperPlane } from "react-icons/bi";
import { Form as FormType, Modal as ModalType } from "./types";

import fields from "static/contact/contactFields";
import Map from "assets/images/map.jpg";
import styles from "./contact.module.scss";

const Contact = (): ReactElement => {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });
  const [modal, setModal] = useState<ModalType>({
    visible: false,
    text: "",
    color: "",
  });

  const handleSubmit = useSubmitContact();

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const onChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <section className={styles.wrapper} id="contact">
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

export default memo(Contact);
