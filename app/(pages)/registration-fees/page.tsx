'use client';
import Image from "next/image";
import Link from "next/link";

function RegistrationFees() {
    return (
        <div className='h-screen relative'>
            <Image src="/images/classroom1.jpg" alt="Registration Fees" width={1440} height={600} className="relative w-full h-full object-cover" />
            {/* overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur  flex items-center justify-center h-full ">
                <div className="mx-auto p-2">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">Registration Fees</h1>
                    <div className=" bg-white md:w-md mx-5 mt-10 py-4 md:p-8 rounded-lg shadow-xl text-center border-2 border-white ">
                        <p className="text-blue-900 font-bold text-xl">Registration Fee</p>
                        <p className="mb-6 ">Registration charges at Arise Medical Academy Kerala are <span className="text-xl">₹15,000 INR</span>.</p>
                        <Link href="/register" className=" px-15 md:px-35 py-3  bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationFees