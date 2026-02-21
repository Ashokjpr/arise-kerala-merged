import React from 'react'

function hero() {
  return (
    <div>
      <div className="relative  text-white pt-10 w-full h-50 overflow-hidden">    
        <div className="absolute inset-0 bg-repeat-x bg-bottom  pointer-events-none
        bg-cover md:bg-repeat-x md:bg-auto"
        style={{    
            backgroundImage: "url('/images/new-banner.jpg')",    
        }}
        />
        
        <div className=" relative  container mx-auto px-4">
            <div className="flex flex-col items-center text-center  pt-7 md:py-16">
                <h1 className="text-4xl md:text-5xl font-bold ">
                    Faculty
                </h1>
                <p className="font-semibold  text-lg md:text-xl  max-w-3xl">
                    {"Home>Faculty"}
                </p>
            </div>
        </div>
      </div>    
    </div>
  )
}

export default hero
