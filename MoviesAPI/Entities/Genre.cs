using MoviesAPI.Validations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Genre 
    {
        [Key]
        public long Id { get; set; }
        [Required(ErrorMessage ="The field {0} is req")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string Name { get; set; }
    }
}