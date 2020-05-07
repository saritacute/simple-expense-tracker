import Head from 'next/head'
import { Container } from 'reactstrap'

const Layout = (props) => (
  <div>
    <Head>
      <title>Simple Expense Tracker</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    </Head>
    <div className='shadow-lg cnt'>
    <Container>
    <nav>
      <h3>{props.title}</h3>
    </nav>
      {props.children}
    </Container>
    </div>
    <style jsx global>
        {
            `
             *{
                font-family: 'Poppins', sans-serif;
                word-break: break-word;
             }
             
             *::first-letter{
              text-transform:uppercase;
             }
             body{
                 height:100vh;
                 display:flex;
                 justify-content:center;
                 align-items:center;
             }
             nav{
               padding:1rem;
             }
             .cnt{
               width:400px;
               border-radius:1rem;
               padding:1rem;
             }
            `
        }
    </style>
  </div>
)

export default Layout