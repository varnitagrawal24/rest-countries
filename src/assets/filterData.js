export function filterData(data, region, subRegion, country, sort) {
  let newData = data
    .filter((element) => element.region.includes(region))
    .filter((element) =>
      element.subregion ? element.subregion.includes(subRegion) : true
    )
    .filter((element) =>
      element.name.common.toUpperCase().includes(country.toUpperCase())
    )
    .sort((first, second) => {
      switch (sort) {
        case "":
          return;
        case "area-up":
          return second.area - first.area;
        case "area-down":
          return first.area - second.area;
        case "pop-up":
          return second.population - first.population;
        case "pop-down":
          return first.population - second.population;
      }
    });
  return newData;
}
