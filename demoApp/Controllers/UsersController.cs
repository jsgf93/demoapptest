using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using demoApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace demoApp.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("Authenticate")]
        public IActionResult Authenticate([FromBody]UserDTO user)
        {
            User newUser = new User();
            List<User> lstUsers = newUser.getUsers();
            bool validate = true;
            var localUser = lstUsers.SingleOrDefault(x => x.Username == user.Username);

            if (localUser == null)
                return Ok(new { });


            if (validate = user.Password.Equals(user.Password))
                return Ok(new
                {
                    Username = user.Username,
                    Validate = validate
                });
            return Ok(new { });
        }
    }
}