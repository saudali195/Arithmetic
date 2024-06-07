"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasCouponCode = true;
var orderAmount = 1900;
var isMember = false;
if (hasCouponCode || (orderAmount > 1000 && isMember)) {
    console.log("Apko Discount Milgaya Hai!");
}
else {
    console.log("Apko Discount Nahi Milsakta");
}
