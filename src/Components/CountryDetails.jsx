import dataCountries from '../countries.json'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

const CountryDetails=()=>{

    const [foundDetails, setFoundDetails] = useState(null)

    const { countryId } = useParams()


}

export default CountryDetails