using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Authorize]
    public class BaseAuthController : ControllerBase
    {


        protected string GetUserIdentifier(string userIdentifier = null)
        {

            var claim = User.FindFirst("emails")?.Value;

            if (claim == null)
                return null;

            return claim;
        }

        protected string GetGivenName()
        {
            var claim = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname")?.Value;

            if (claim == null)
                return null;

            return claim;
        }

        protected string GetSurname()
        {
            var claim = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname")?.Value;

            if (claim == null)
                return null;

            return claim;
        }

        protected string GetObjectIdentifier()
        {
            var claim = User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier")?.Value;

            if (claim == null)
                return null;

            return claim;
        }
    }
}
