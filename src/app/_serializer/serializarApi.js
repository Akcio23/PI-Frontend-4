const serializedApi = (object) => {
  const description = object.cityWeather.results.description
  const city = object.cityWeather.results.city
  const rain = object.cityWeather.results.rain
  const data = object.cityWeather.results.forecast

  const serialized = { temp: description, city, rain, forecast: [...data] }

  return serialized
}

export default serializedApi
