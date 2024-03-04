using MoviesAPI.Validations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Genre : IValidatableObject
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="The field {0} is req")]
        [StringLength(10)]
        //[FirstLetterUppercase]
        public string Name { get; set; }
        /*[Range(18,100)]
        public int Age {  get; set; }
        [CreditCard]
        public string CreditCard { get; set; }
        [Url]
        public string url { get; set; }*/

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if(!string.IsNullOrEmpty(Name)) { 
                var fir = Name[0].ToString();
                if(fir!=fir.ToUpper())
                {
                    yield return new ValidationResult("First letter should be uppercase", new string[] {nameof(Name)} );

                }
            }
        }
    }
}
