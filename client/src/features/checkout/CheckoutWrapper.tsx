import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
const stripePromise = loadStripe('pk_test_51LSyksLAit2ZOH4LliKI4VujreUHjqVtNcSia28qhSk0GxoajgI4IMITyeYEYa0pgYMPq4CGZupu5cOBvD5e67hK00rTZ2cwgm');
export default function CheckoutWrapper(){
    return (
        <Elements stripe={stripePromise}><CheckoutPage /></Elements>
    )
}