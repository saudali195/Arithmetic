let hasCouponCode = true;
let orderAmount = 1900;
let isMember = false;
if (hasCouponCode || (orderAmount > 1000 && isMember)) {
    console.log("Apko Discount Milgaya Hai!");
}
else {
    console.log("Apko Discount Nahi Milsakta");
}
export {};
