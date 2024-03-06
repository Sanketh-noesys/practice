using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class GenreDTO
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
