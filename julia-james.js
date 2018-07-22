/*
 * Programming Quiz: JuliaJames (4-1)

   We're going to have you program your own version of FizzBuzz called "JuliaJames" (yes, imaginative, right?) Keep in mind that in an interview, you would want to write efficient code with very little duplication. We don't want you to worry about that for this question. Just focus on practicing using loops.

   Directions:
   Write a while loop that:

   Loop through the numbers 1 to 20
   If the number is divisible by 3, print "Julia"
   If the number is divisible by 5, print "James"
   If the number is divisible by 3 and 5, print "JuliaJames"
   If the number is not divisible by 3 or 5, print the number
 */

let x = 1;

while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James");
    } else {
        console.log(x);
    }
    x = x + 1;
}