using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class dtoUser
    {
        public string ObjectIdentifier { get; set; }
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string FullName { get { return $"{FirstName} {LastName}"; } }

    }
}
