import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex items-center gap-10'>
        <div className='text-3xl font-semibold text-lgreen'>
        {title}
        </div>
        <div className='w-1/2 bg-lgreen h-[1px]'></div>
    </div>
  )
}

export default SectionTitle