import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import Context from '../../context/Context';

const Home = () => {
  const context=useContext(Context);
  const {name}=context;
  return (
    <Layout>
        <h1 className='text-red-600 font-bold'>Name:{name}</h1>
    </Layout>
  )
}

export default Home