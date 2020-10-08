import { Medicine } from "./medicine";

export class Order {
  _id: string;
  name: string;
  patient: string;
  email: string;
  dilivery_address: string;
  prescription_url: [string];
  non_prescription: [string];
  ordered_at: Date;
  is_reviewed: boolean;
  is_paid: boolean;
  is_dispatched: boolean;
  is_delivered: boolean;
  status: string;
  completed_on: Date;
  lat: Number;
  long:number;
}
