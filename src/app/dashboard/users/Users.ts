export class Users {
    Id: string;
    Client: string;
    Area: string;
    Location: string;
    Email: string;
    Access: string;
    Status: string;

    constructor(Id, Client, Area, Location, Email, Access, Status) {
        this.Id = Id;
        this.Client = Client;
        this.Area = Area;
        this.Location = Location;
        this.Email = Email;
        this.Access = Access;
        this.Status = Status;
    }

}
