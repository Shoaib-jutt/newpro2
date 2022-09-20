import React from "react"
import Heading from "../../common/Heading"
import SearchIcon from '@mui/icons-material/Search';
import "./hero.css"

const Hero = () => {
  return (
    // <>
    //   <section className='hero'>
    //     <div className='container'>
    //       <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

    //       <form className='flex'>
    //         <div className='box'>
    //           <span>City/Street</span>
    //           <input type='text' placeholder='Location' />
    //         </div>
         
       
    //        <button className='btn1'>
    //           <i className='fa fa-search'></i>
    //         </button>
    //       </form>
    //     </div>
    //   </section>
    // </>
    <section className="hero">
    
      <div className='search'>
      <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
         <div className='keyword'>
         <div className='navSearch'>
                    <input tpye='text' name='Search' id='' placeholder='Serach Product'/>
                    <div className=' search-icon'>
                      <SearchIcon/>
                    </div>
                 </div>
         </div>
      </div>
    </section>
  )
}

export default Hero
