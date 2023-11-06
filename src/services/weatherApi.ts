import axios from "axios";

const apiKey = '8c355125f81a27a1f1a18d0fdc8a7fcb'
// /forecast?id=524901&appid=${apiKey}
// http://api.openweathermap.org/data/2.5/weather?q=nigeria&units=imperial&appid
const weatherApi = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
})

export const fetchWeather = async(location: string)=> {
  const res = await weatherApi.get(`/weather?q=${location}&units=imperial&appid=${apiKey}`)
  return res
}

export const fetchForecast = async(location: string)=> {
  const res = await weatherApi.get(`/forecast?q=${location}&appid=${apiKey}`)
  return res
}

export const fetchStaticForecast = async()=> {
  const res = await weatherApi.get(`/weather?q=nigeria&units=imperial&appid=${apiKey}`)
  return res
}