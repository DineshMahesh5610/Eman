using System;

using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Eman_Dev.DAL.Home;

namespace Eman_Dev.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult CheckLogin(string username,string password)
        {
            LoginManager lm = new LoginManager();
            var result = lm.Loginvalidate(username,password);

            if(result != null)
            {
                return Json(new { result = 1 });
            }
            else
            {
                return Json(new { result = 0 });
            }
           
        }
    }
}