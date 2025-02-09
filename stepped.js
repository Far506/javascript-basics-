const age = 60;
const price = 500;

if (age <= 12) {
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
} else if (age >= 50) {
    //25% discount
    console.log('25 percent discount')
} else if (age >= 40) {
    // 10% discount
    console.log('10 percent discount')
} else {
    console.log('Kemon acho basadhon ')
}