using Microsoft.EntityFrameworkCore;

namespace API.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        [Owned]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string PictureUrl { get; set; }
    }
}
