const today = new Date().toISOString().split("T")[0];

export interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  numberOfPeople: string;
}

export const INITIAL_FORM_DATA: FormData = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
  checkIn: today,
  checkOut: today,
  roomType: "",
  numberOfPeople: "",
};
