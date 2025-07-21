import React from 'react'

const statistics = () => {
  return (
    <section className='mb-10'>
    <section className='flex flex-col items-center justify-center pt-15  '>
      <div className='border border-gray-500 shadow-lg rounded-md p-15 flex flex-col gap-5'>
      <h1 className='text-3xl text-center'>Primary Disability</h1>
      <p className='w-[800px] text-lg flex items-center justify-center'>The number of individuals recognized for the first time with a disability has increased compared to the previous year. According to data from the National Council for the Determination of Disability and Work Capacity, in 2023, 14.3 thousand people applied for evaluation. Of these, 12.9 thousand people (90.5%) were recognized with a primary disability, including 11.2 thousand adults (86.9%) and 1.6 thousand children (13.1%). The proportion of people with a primary disability was higher in rural areas, accounting for 63.3% in 2023.</p>
      </div> 
    </section>
    <section className='flex  items-center justify-center pt-15 '>
    <div className='border border-gray-500 shadow-lg rounded-md p-15  '>
      <img src="/images/statistic.png" alt="Statistic" className='w-[800px] h-[500px]'/>
    </div>
    </section>
    </section>
  )
}

export default statistics