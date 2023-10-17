export function uniqueRegion(data) {
  let uniqueRegions = [
    ...new Set(data.map((element) => element.region)),
  ].sort();

  return uniqueRegions;
}
