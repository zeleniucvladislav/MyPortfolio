import styles from "./form.module.scss";

type Props = {
  fieldType: string;
  name: string;
  onChange: (evt: any) => void;
  type: string;
  value: string;
  label: string;
};

const FormField = (props: Props) => {
  const { fieldType, name, onChange, type, value, label } = props;

  const renderField = () => {
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
  };
  return (
    <label className={styles.field}>
      {label}
      {renderField()}
    </label>
  );
};

export default FormField;
