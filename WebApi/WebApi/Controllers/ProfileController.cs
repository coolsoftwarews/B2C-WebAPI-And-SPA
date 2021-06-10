using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : BaseAuthController
    {
        [HttpGet(Name ="GetProfile")]
        public IActionResult GetProfile([FromQuery] string firstName)
        {
            var loggedInUser = new dtoUser()
            {
                FirstName = GetGivenName(),
                LastName = this.GetSurname(),
                Email = this.GetUserIdentifier()
            };

            return Ok(loggedInUser);
        }
    }
}
