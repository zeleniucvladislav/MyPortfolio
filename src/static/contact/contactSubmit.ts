export const service_id: string = process.env.REACT_APP_SERVICE_ID ?? "";
export const template_id: string = process.env.REACT_APP_TEMPLATE_ID ?? "";
export const user_id: string = process.env.REACT_APP_USER_ID ?? "";

export const successModal = {
  visible: true,
  text: "Form succesfully submitted",
  color: "green",
};

export const errorModal = {
  visible: true,
  text: "Failed to submit your form",
  color: "red",
};
