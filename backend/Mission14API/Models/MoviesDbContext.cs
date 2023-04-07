using Microsoft.EntityFrameworkCore;

namespace Mission14API.Models
{
    public class MoviesDbContext : DbContext
    {
        // constructor
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options) {}

        public DbSet<Movie> Movies { get; set; }
    }
}
