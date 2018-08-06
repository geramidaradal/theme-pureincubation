using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(jdtheme.Startup))]
namespace jdtheme
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
