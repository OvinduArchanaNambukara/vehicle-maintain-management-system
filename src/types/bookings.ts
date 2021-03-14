export class Bookings {
  constructor(
    public userId: string,
    public name: string,
    public tel: string,
    public paid: string,
    public bookedTime: string,
    public bookedDate: string
  ) {
  }
}
