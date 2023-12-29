import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  return (
    <>
      <section className=" p-8 md:py-0 max-w-7xl mx-auto">
      <Link
            to="/"
            className=" inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
          >
            &larr; Back
          </Link>
        <article>
          <div
            key={country.population}
            className=" flex flex-row gap-8  md:place-items-center md:h-screen"
          >
            <article>
              <img src={country.flags?.svg} alt={country.name?.common} />
            </article>
            <div className="">
              <article>
                <h1 className="font-bold dark:text-white text-gray-900 text-4xl lg:text-6xl">
                  {country.name?.official}
                </h1>
              </article>
              <ul className="my-4 flex flex-col items-start justify-start gap-2 dark:text-gray-400 to-slate-700">
                <li>Capital: {country.capital && country.capital[0]}</li>
                <li>
                  Population:{" "}
                  {country.population && country.population.toLocaleString()}
                </li>
                <li>Region: {country.region}</li>
                <li>Subregion: {country.subregion}</li>
                <li>
                  Currency: {country.currencies && country.currencies[0]?.name}
                </li>
              </ul>
              <h3 className=" text-gray-900 font-bold text-lg mb-2 dark:text-white">
                Borders:
              </h3>
              <ul className=" flex flex-wrap items-start justify-start gap-2">
                {country.borders &&
                  country.borders.map((border) => (
                    <li key={border}>{border}</li>
                  ))}
              </ul>
            </div>
          </div>
         
        </article>
      </section>
    </>
  );
};

export default SingleCountry;
