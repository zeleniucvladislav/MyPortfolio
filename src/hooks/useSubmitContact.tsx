import emailjs from "@emailjs/browser";

type Modal = {
  visible: boolean;
  text: string;
  color: string;
};

type Props = {
  form: { name: string; email: string; message: string };
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
};

const useSubmitContacts = () => {
  const service_id: string = process.env.REACT_APP_SERVICE_ID ?? "";
  const template_id: string = process.env.REACT_APP_TEMPLATE_ID ?? "";
  const user_id: string = process.env.REACT_APP_USER_ID ?? "";

  const handleSubmit = ({ form, setModal }: Props) => {
    emailjs
      .send(service_id, template_id, form, user_id)
      .then(
        (res) => {
          if (res) {
            setModal({
              visible: true,
              text: "Form succesfully submitted",
              color: "green",
            });
          }
        },
        (err) => {
          if (err) {
            setModal({
              visible: true,
              text: "Failed to submit your form",
              color: "red",
            });
          }
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