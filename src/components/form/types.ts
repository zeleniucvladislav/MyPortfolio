import { ChangeEvent } from "react";

export interface Props {
  fieldType: string;
  name: string;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
  value: string;
  label: string;
}
