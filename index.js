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

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
function subscription(obj) {
    if (obj.subscription === true) {
        return obj.pricePerRefill*obj.refills*.75
    }
}

//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
function coupon(obj) {
    if (obj.coupon === true) {
        return obj.pricePerRefill*obj.refills-10;
    }
}

//return and log the string "Your grand total is ${finalAmount}." 
function finalAmount(obj) {
    if (obj.coupon && obj.subscription === true) {
        return obj.pricePerRefill*obj.refills*.75-10;
    }
    
    else if (obj.coupon === true) {
        return coupon(obj);
    }
    else if (obj.subscription === true) {
        return subscription(obj);
    }
    else {
        return obj.pricePerRefill*obj.refills;
    }
}

console.log("Your grand total is " + finalAmount(sarah));
