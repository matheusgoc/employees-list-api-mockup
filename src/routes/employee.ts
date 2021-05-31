import { Request, Response, Router } from 'express'
import fs from 'fs-extra'
import path from 'path'
import axios from 'axios'

const router = Router()
const base = "https://restcountries.eu/rest/v2/"

router.get( "/", (req: Request, res: Response) => {
  (async () => {

    // retrieve the employess from the JSON file
    const source = await fs.readJSON(path.join(__dirname, '../data-sample.json'))

    const employees: any = []
    const countries:any = {}
    try {

      // iterate over the employees to catch the country information
      let info:any = {}
      for (info of source) {
        if (Object.keys(countries).indexOf(info.country) < 0) {

          // retrieve country information
          const response = await axios.get(base + 'alpha/' + info.country.toLowerCase(), {
            params: {
              fields: "name;currencies;languages;timezones"
            }
          })

          // store country information
          countries[info.country] = response.data
        }

        // inject the country info into employee's object
        info.countryInfo = countries[info.country]

        employees.push(info)
      }

    } catch (error) {

      console.error('Error at Employee::get', error)
    }

    // return the employee list with the country information set
    res.json(employees)

  })()
})

export default router
