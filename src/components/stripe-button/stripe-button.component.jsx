import React from "react"
import StripeCheckout from "react-stripe-checkout"


const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price*100
    const publishableKey = "pk_test_8Y2LL45kVCrr43IG4mlUE7LJ00OXegOR0t"

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            currency="EUR"
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is €${price}`}
            amount={stripePrice}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
