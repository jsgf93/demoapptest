using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demoApp.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool Flag { get; set; }

        public List<User> getUsers()
        {
            List<User> lstUsers = new List<User>();
            lstUsers.Add(new User {
                Username = "admin",
                Password = "admin",
                Flag = false
            });
            lstUsers.Add(new User
            {
                Username = "test",
                Password = "test",
                Flag = false
            });
            lstUsers.Add(new User
            {
                Username = "master",
                Password = "master",
                Flag = false
            });

            return lstUsers;
        }
    }
}
