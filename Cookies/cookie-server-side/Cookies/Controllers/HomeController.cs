using Microsoft.AspNetCore.Mvc;

namespace Cookies.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public HomeController(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        [Route("~/Home/Landing")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("~/Home/Landing")]
        [ValidateAntiForgeryToken] // This attribute will check if CSRF token present in cookie is coming from valid source or not
        public IActionResult Post()
        {
            return Ok(_httpContextAccessor?.HttpContext?.Request?.Cookies);
        }
    }
}
