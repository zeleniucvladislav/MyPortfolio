export const service_id: string = import.meta.env.VITE_SERVICE_ID ?? "";
export const template_id: string = import.meta.env.VITE_TEMPLATE_ID ?? "";
export const user_id: string = import.meta.env.VITE_USER_ID ?? "";

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
