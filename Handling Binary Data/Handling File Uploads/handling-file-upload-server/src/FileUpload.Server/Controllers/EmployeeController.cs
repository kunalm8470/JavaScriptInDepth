using FileUpload.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace FileUpload.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EmployeeController : ControllerBase
{

    [HttpPost]
    public IActionResult AddEmployee([FromForm] Employee emp)
    {
        return Ok();
    }
}
