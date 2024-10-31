import { Form } from "pages/contact/types";

interface ContactFields {
  id: number;
  type: string;
  name: keyof Form;
  fieldType: "input" | "textarea";
  label: string;
}

const fields: ContactFields[] = [
  { id: 0, type: "text", name: "name", fieldType: "input", label: "Name" },
  { id: 1, type: "email", name: "email", fieldType: "input", label: "Email" },
  {
    id: 2,
    type: "text",
    name: "message",
    fieldType: "textarea",
    label: "Message",
  },
];

export default fields;
