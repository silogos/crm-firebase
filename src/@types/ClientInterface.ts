export interface ClientInterface {
  key: string;
  first_name: string;
  last_name: string;
  gender: string;
  phone_number?: string;
  email?: string;
  address?: string;
  birthday?: Date | null;
  group_id?: string;
}
