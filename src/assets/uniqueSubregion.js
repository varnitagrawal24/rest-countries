export function UniqueSubRegion(data, region) {
  let uniqueSubRegions = [
    ...new Set(
      data
        .filter((element) => element.region === region)
        .map((element) => element.subregion)
    ),
  ].sort();

  return uniqueSubRegions;
}
