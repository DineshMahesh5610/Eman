using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Eman_Dev.Models;
using System.Data.Entity;

namespace Eman_Dev.DAL.Home
{
    public class LoginManager
    {
        public dynamic Loginvalidate(string username, string password)
        {
            var user = (dynamic)null;
            using (var dbContext = new EmanEntities())
            {
                try
                {

                    string sql = "SELECT * FROM user_login t WHERE  t.password = HASHBYTES('SHA2_512', '" + password + "')" +
                                  "AND t.activeflg=1 AND t.deleted = 0 AND t.username = '" + username + "'";

                    user = dbContext.Database.SqlQuery<user_login>(sql).SingleOrDefault();
                    
                    //AppLog.fnGenLog(" Logged In Successfully", AppLog.INFO);
                }
                catch (Exception ex)
                {
                    user = null;
                    //AppLog.fnGenLog(ex.Message + " " + ex.StackTrace, AppLog.ERROR);
                }




            }
            return user;
        }

    }
}