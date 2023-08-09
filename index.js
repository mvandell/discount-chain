const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

let customer1 = timmy;
//Calculate refill total
function calculateRefillTotal (customer) {
    return customer.refills * customer.pricePerRefill;
}
let refillTotal = calculateRefillTotal(customer1);
//console.log(refillTotal);
//Subscription: 25% discount after refill total is calculated
function subscriptionDiscount (customer) {
    if (customer.subscription === true) {
        return refillTotal * 0.75;
    }
    else if (customer.subscription === false) {
        return refillTotal;
    }
}
let subscriptionPrice = subscriptionDiscount(customer1);
//console.log(subscriptionPrice);

//Coupon: $10 discount after subscription discount has been calculated
function couponDiscount (customer) {
    if (customer.coupon === true) {
        return subscriptionPrice - 10;
    }
    else if (customer.coupon === false) {
        return subscriptionPrice;
    }
}
let couponPrice = couponDiscount (customer1);
//console.log(couponPrice);

//Return and log "Your grand total is $[finalAmount]"
console.log("Your grand total is $", couponPrice);