import React from 'react'

// About component: represents an "About Us" section for a website
function About() {
  return (
    // Section wrapper with padding (py-16) and white background
    <div className="py-16 bg-white">

      {/* Container to center content and provide responsive horizontal padding */}
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        
        {/* Flex layout for medium (md) and larger screens 
            - By default, it stacks content vertically with spacing (space-y-6) 
            - On md+ screens, it switches to flex row with gap-6/12 
            - Ensures proper alignment between text and image */}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          
          {/* Image section (left side on desktop) 
              - Takes up 5/12 width on medium devices
              - Takes 5/12 width on large screens */}
          <div className="md:5/12 lg:w-5/12">
            <img
              // Unsplash image for illustration
              src="https://plus.unsplash.com/premium_vector-1682301263982-ca498ec87f95?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image" // Important for accessibility
            />
          </div>

          {/* Text content section (right side on desktop) 
              - Takes 7/12 width on medium devices
              - Takes 6/12 width on large screens */}
          <div className="md:7/12 lg:w-6/12">

            {/* Heading with larger text on bigger screens */}
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>

            {/* First paragraph with description text */}
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>

            {/* Second paragraph with additional info */}
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
