import React from 'react'
import { CiStar } from 'react-icons/ci'

const Rating = () => {
  return (
    <section className="bg-primary text-white container-padding">


                <div className="text-center pb-20">
    <h1 className="headingSize font-semibold mb-2">What kind of Coffee we serve for you</h1>
    <p className="paraSize ">Who are in extremely love with eco friendly system.</p>
</div>    


<div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
    <div className="part1">
<div >
    <p className="smallHeading flex gap-2 items-center">
Lorem Ipsum

<CiStar/>
<CiStar  />
<CiStar/>
<CiStar/>
<CiStar/>
    </p>

    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic at repellendus atque eius voluptas explicabo nostrum harum accusantium molestiae, consectetur molestias, officiis assumenda non ut, facilis ratione eligendi tenetur distinctio.
    </p>

</div>
    </div>

 <div className="part1">
<div >
    <p className="smallHeading flex gap-2 items-center">
Lorem Ipsum

<CiStar/>
<CiStar  />
<CiStar/>
<CiStar/>
<CiStar/>
    </p>

    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic at repellendus atque eius voluptas explicabo nostrum harum accusantium molestiae, consectetur molestias, officiis assumenda non ut, facilis ratione eligendi tenetur distinctio.
    </p>

</div>
    </div>

    
</div>


    </section>
  )
}

export default Rating