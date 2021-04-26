using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using ps5api.Models;
using ps5api.Services;
using Microsoft.Extensions.Options;

namespace ps5api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

        //allow CORS to be used. by using .AddCors and .useCors, we allow for the webAPI to be accessed.
            services.AddCors(
                options => {
                    options.AddPolicy("AllowAll",
                    builder => builder
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin()
                );
            }
        );

        services.Configure<Ps5DatabaseSettings>(
            Configuration.GetSection( nameof(Ps5DatabaseSettings) )
        );

        services.AddSingleton<IPs5DatabaseSettings>(
            sp => sp.GetRequiredService<IOptions<Ps5DatabaseSettings>>().Value
        );

        services.AddSingleton<GameService>();
        services.AddSingleton<CharacterService>();
}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowAll");

            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
