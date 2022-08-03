using API.Entities.OrderAggregate;

namespace API.DTOs
{
    public class CreateOrderDto
    {
        public bool SaveAdress { get; set; }
        public ShippingAdress ShippingAdress { get; set; }
    }
}
