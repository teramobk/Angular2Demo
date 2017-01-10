using Angular2.Lib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2.Api.Controllers
{
    [RoutePrefix("api/heroes")]
    public class HeroesController : ApiController
    {
        public HeroesController() {  }

        [HttpGet]
        [Route]
        public IHttpActionResult Get()
        {
            try
            {
                var result = BuildHeroesList();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private List<Hero> BuildHeroesList()
        {
            List<Hero> results = new List<Hero>();

            results.Add(new Hero() { Id = 1, Name = "Spider-Man" });
            results.Add(new Hero() { Id = 2, Name = "Captain Marvel" });
            results.Add(new Hero() { Id = 3, Name = "Hulk" });
            results.Add(new Hero() { Id = 4, Name = "Thor" });
            results.Add(new Hero() { Id = 5, Name = "Iron Man" });
            results.Add(new Hero() { Id = 6, Name = "Luke Cage" });
            results.Add(new Hero() { Id = 7, Name = "Black Widow" });
            results.Add(new Hero() { Id = 8, Name = "Daredevil" });
            results.Add(new Hero() { Id = 9, Name = "Captain America" });
            results.Add(new Hero() { Id = 10, Name = "Wolverine" });

            return results;
        }
    }
}
