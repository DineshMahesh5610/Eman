using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Eman_Dev.Startup))]
namespace Eman_Dev
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
