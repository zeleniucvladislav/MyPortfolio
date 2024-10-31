import { FC, ReactElement, useMemo } from "react";
import type { Props } from "./types";

import styles from "./form.module.scss";

const FormField: FC<Props> = ({
  fieldType,
  name,
  onChange,
  type,
  value,
  label,
}): ReactElement => {
  const field = useMemo(() => {
    switch (fieldType) {
      case "input":
        return (
          <input
            type={type}
            className={styles.field_input}
            onChange={onChange}
            value={value}
            name={name}
            required
          />
        );
      case "textarea":
        return (
          <textarea
            className={styles.field_textarea}
            onChange={onChange}
            value={value}
            name={name}
            required
          />
        );
    }
  }, [fieldType, name, type, value, onChange]);
  return (
    <label className={styles.field}>
      {label}
      {field}
    </label>
  );
};

export default FormField;
