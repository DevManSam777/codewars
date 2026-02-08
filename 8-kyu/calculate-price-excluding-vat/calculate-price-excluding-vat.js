//return price without vat
function excludingVatPrice(price){
  const vat = .15
  return !price ? -1 : price / (1 + vat)
}