using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MaterialAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        public class IdDesc
        {
            public int Id { get; set; }
            public string Desc { get; set; }
            public string Notes { get; set; }
        }

        [HttpGet]
        public async Task<IdDesc> Get()
        {
            await Task.Factory.StartNew(() => Thread.Sleep(2000));
            return new IdDesc
            {
                Id = 1,
                Desc = "Desc",
                Notes = "Test something I write"
            };
        }
    }
}
