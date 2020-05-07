import Link from 'next/link'
import Layout from '../pages/layout/layout'

const Index = () => {
  return (
    <Layout>
    <div className='container mb-3'>
      <div className='mb-4 title'>
        <h2>Expense <span className="text-danger">Tracker</span></h2>
      </div>
      <Link href='/listItems'>
        <button className="btn btn-primary">View List</button>
      </Link>
    </div>
    <style jsx global>
        {
          `
          .cnt{
            width:auto !important;
            border-radius:1rem;
            padding:1rem;
            border-top: 2px solid #dc3545;
            border-right: 2px solid #dc3545;
          }
          .title h2{
            font-size: 4rem;
          }

          `
        }
    </style>
    </Layout>
  )
}
export default Index