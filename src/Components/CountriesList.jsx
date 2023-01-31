import { useState } from "react";
import dataCountries from '../countries.json'
import { Link, useParams } from 'react-router-dom'

const CountriesList = () => {


    const [countries, setCountries] = useState(dataCountries)

    console.log(countries)

    // const listCountries = countries.map((e) => {
    //     return e.alpha3Code
    // })


    return (
        <div>
            {countries.map((country) => {
                return (
                    <div key={country._id}>
                        <li>
                            <Link to={country.name.common}> {country.alpha3Code} </Link>
                        </li>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList