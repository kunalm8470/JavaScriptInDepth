using Microsoft.AspNetCore.Mvc;

namespace Cookies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ValuesController(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        public IActionResult Get()
        {
            CookieOptions options = new()
            {
                Expires = DateTime.UtcNow.AddMinutes(10),
                //Domain = ".app.localhost",
                //Path = "/" // Root route, Scope of cookie will be accessible under all routes
            };

            string cookieKey = "full name";
            string cookieValue = "John Doe";

            // URL encode if cookie has spaces
            string escapedCookieKey = Uri.EscapeDataString(cookieKey);
            string escapedCookieValue = Uri.EscapeDataString(cookieValue);

            // This line will add the cookie in the "Set-Cookie header"
            Response.Cookies.Append(escapedCookieKey, escapedCookieValue, options);

            return Ok();
        }

        [HttpGet("cookie")]
        public ActionResult<string> GetCookie()
        {
            // Fetch cookie from HttpContext request
            string cookieKey = "full name";
            string escapedCookieKey = Uri.EscapeDataString(cookieKey);

            string cookie = Uri.UnescapeDataString(
                _httpContextAccessor.HttpContext?.Request?.Cookies[escapedCookieKey]
            );

            return Ok(cookie);
        }
    }
}
