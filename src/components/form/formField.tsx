import styles from "./form.module.scss";

type fieldProps = {
  fieldType: string;
  name: string;
  onChange: (evt: any) => void;
  type: string;
  value: string;
  label: string;
};

const FormField = (props: fieldProps) => {
  const renderField = () => {
    switch (props.fieldType) {
      case "input":
        return (
          <input
            type="text"
            className={styles.field_input}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            required
          />
        );
      case "textarea":
        return (
          <textarea
            className={styles.field_textarea}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            required
          />
        );
    }
  };
  return (
    <section className={styles.field}>
      <label className={styles.field_label}>{props.label}</label>
      {renderField()}
    </section>
  );
};

export default FormField;
