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
            await Task.Factory.StartNew(() => Thread.Sleep(300));
            return new IdDesc
            {
                Id = 1,
                Desc = "06/11/2021;06/12/2021;06/18/2021;06/19/2021;06/27/2021;06/28/2021;07/09/2021;07/10/2021;07/16/2021;07/17/2021;07/23/2021;07/24/2021;07/30/2021;08/06/2021;08/07/2021;08/13/2021;08/14/2021;08/20/2021;08/21/2021;08/27/2021;08/28/2021;09/04/2021",
                Notes = "Test something I write"
            };
        }
    }
}
