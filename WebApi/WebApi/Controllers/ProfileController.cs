using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
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

        // The Web API will only accept tokens
        // 1) for users, and 
        // 2) having the scope for this API
        static readonly string[] scopeRequiredByApi = new string[] { "<scope-name>" };

        [HttpGet(Name ="GetProfile")]
        public IActionResult GetProfile([FromQuery] string firstName)
        {
            HttpContext.VerifyUserHasAnyAcceptedScope(scopeRequiredByApi);

            var loggedInUser = new dtoUser()
            {
                ObjectIdentifier = GetObjectIdentifier(),
                FirstName = GetGivenName(),
                LastName = this.GetSurname(),
                Email = this.GetUserIdentifier()
            };

            return Ok(loggedInUser);
        }
    }
}
