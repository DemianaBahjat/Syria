import React from 'react'
import RegimeMassacres from './RegimeMassacres/RegimeMassacresUser'
import Martyrs from './Martyrs/MartyrsUser'
import Missing from './Missing/MissingUser'
import Detainees from './Detainees/DetaineesUser'
import { Helmet } from 'react-helmet-async'
export default function BaraemSystem() {
  return (
    <>
      <Helmet>
        <title>   الثورة السورية</title>
        <meta name="description" content="  جرائم النظام" />
      </Helmet>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> جرائم النظام</h3>
        </div>
      </div>
      <RegimeMassacres />
      <Martyrs />
      <Missing />
      <Detainees />
    </>
  );
}
