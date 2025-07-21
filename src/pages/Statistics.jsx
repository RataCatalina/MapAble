import React from 'react'

const statistics = () => {
  return (
    <section className='mb-10'>
    <section className='flex flex-col items-center justify-center md:pt-15 pt-5  '>
      <div className='border border-gray-500 shadow-lg rounded-md md:p-15 p-5 flex flex-col gap-5'>
      <h1 className='text-3xl text-center'>Primary Disability</h1>
      <p className='md:w-[800px] w-[340px] text-lg flex items-start md:items-center justify-center'>The number of individuals recognized for the first time with a disability has increased compared to the previous year. According to data from the National Council for the Determination of Disability and Work Capacity, in 2023, 14.3 thousand people applied for evaluation. Of these, 12.9 thousand people (90.5%) were recognized with a primary disability, including 11.2 thousand adults (86.9%) and 1.6 thousand children (13.1%). The proportion of people with a primary disability was higher in rural areas, accounting for 63.3% in 2023.</p>
      </div> 
    </section>
    <section className='flex  items-center justify-center pt-15 '>
    <div className='border border-gray-500 shadow-lg rounded-md md:p-15 p-5 '>
      <img src="/images/statistic.png" alt="Statistic" className='md:w-[800px] md:h-[500px] rounded-sm w-[400px] h-auto'/>
    </div>
    </section>
    </section>
  )
}

export default statistics