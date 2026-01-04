function calculateTip(amount, rating) {
  return (/^terrible$/i).test(rating) ? 0 : (/^poor$/i).test(rating) ? Math.ceil(amount * .05) :(/^good$/i).test(rating) ? Math.ceil(amount * .10) : (/^great$/i).test(rating) ? Math.ceil(amount * .15) : (/^excellent$/i).test(rating) ? Math.ceil(amount * .20) : 'Rating not recognised';
}