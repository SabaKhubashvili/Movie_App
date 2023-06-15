import { Container } from '@/app/Container'
import { getAllSerials } from '@/app/actions/getAllSerials'
import { AdminAllSerialsTable } from '@/app/components/Admin/AdminAllSerialsTable'
import React from 'react'

export const metadata = {
    title:'Admin all serials',
    description:'See serials if you are admin'
}

 const Page = async() => {
    const serials = await getAllSerials()

  return (
    <section className='pt-[150px]'>

    <Container>
      <div className='overflow-x-auto'>
        <AdminAllSerialsTable serials={serials} />
      </div>
    </Container>
  </section>
  )
}
export default Page