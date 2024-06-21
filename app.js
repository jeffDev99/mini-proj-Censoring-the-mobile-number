// replace a part of phone number
const phone = "09166197926"
// way 1
// const subStr = phone.slice(4,8)
// const finalPhoneNumber = phone.replace(subStr,"****")
console.log(phone.replace(phone.slice(4,8) , "****"));

// way2
// console.log(phone.slice(0,4) + "****" + phone.slice(8,11));