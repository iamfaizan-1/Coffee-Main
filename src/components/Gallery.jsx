import React from 'react'

const Gallery = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-5 container-padding">

<div className="lg:w-[40%] w-[100%] flex flex-col gap-5">
    <img src="https://images.unsplash.com/photo-1643045430990-fe81ba737677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8" className="w-full" alt="" />

    <img src="https://preview.colorlib.com/theme/coffee/img/g1.avif" className="w-full" alt="" />
</div>

<div className="lg:w-[55%] w-[100%] flex flex-col gap-5">
    <img className="w-full lg:max-h-[405px]"  src="https://images.unsplash.com/photo-1691442097203-aa897a8632e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8" alt="" />

<div className="lg:flex-row flex-col gap-5 flex w-full ">
    <img  className="lg:w-[49%] w-full" src="https://plus.unsplash.com/premium_photo-1663012978924-5bfd443ac932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="lg:w-[49%] w-full " src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D" alt="" />
</div>

</div>

    </section>




  )
}

export default Gallery