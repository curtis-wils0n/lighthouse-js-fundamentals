const smartGarbage = function (trash, bins) {
  if (trash in bins) {
    bins[trash] += 1;
  }
  return bins;
}