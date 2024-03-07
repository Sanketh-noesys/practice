using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace MoviesAPI.Controllers
{
    public class MovieTheatersController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public MovieTheatersController(ApplicationDbContext context,IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

    }
}
