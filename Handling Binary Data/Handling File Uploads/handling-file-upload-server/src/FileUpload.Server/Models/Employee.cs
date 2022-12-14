namespace FileUpload.Server.Models;

public class Employee
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public List<IFormFile> Documents { get; set; }
}
