import { Dispatch } from "react";
import emailjs from "@emailjs/browser";
import {
  service_id,
  template_id,
  user_id,
  successModal,
  errorModal,
} from "static/contact/contactSubmit";
import { Modal } from "pages/contact/types";

interface Props {
  form: { name: string; email: string; message: string };
  setModal: Dispatch<React.SetStateAction<Modal>>;
}

const useSubmitContacts = () => {
  const handleSubmit = ({ form, setModal }: Props) => {
    emailjs
      .send(service_id, template_id, form, user_id)
      .then(
        (res) => {
          if (res.status === 200) {
            setModal(successModal);
          } else setModal(errorModal);
        },
        () => {
          setModal(errorModal);
        }
      )
      .then(() => {
        setTimeout(() => {
          setModal({ visible: false, text: "", color: "" });
        }, 2000);
      });
  };

  return handleSubmit;
};

export default useSubmitContacts;
