using Microsoft.AspNetCore.Mvc;
using Mission14API.Models;

namespace Mission14API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        // this just displays the movies
        public IEnumerable<Movie> Get()
        {
            //var m = new Movie
            //{
            //    Movies = context.Movies
            //    .Where(m => m.Edited == "Yes")
            //    .OrderBy(m => m.Title)
            //};

            return context.Movies.ToArray()
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title);
        }
        // here is where I can put post methods for CRUD
    }
}
