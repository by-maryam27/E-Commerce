export default function Contact(){
    return(
        <>
        <div className="grid grid-cols-[30%,70%] gap-16 mb-10">
      <img src="/Frame 858.png" alt="image" className="pl-12" />
     <div className=" mt-20 gap-5 ">
        <input type="text" placeholder="Your Name" className="py-2 ml-3 bg-[#F5F5F5] pl-2"/>
        <input type="text" placeholder="Your Email" className="py-2 ml-3 bg-[#F5F5F5] pl-2" />
        <input type="text" placeholder="Your Phone" className="py-2 ml-3 bg-[#F5F5F5] pl-2"/>
        <textarea  placeholder="Your Message" className="bg-[#F5F5F5] w-[710px] h-72 mt-3 pl-5 p-2 ">
       </textarea>
     </div>
        </div>
        <div className="flex justify-end pr-20 mb-8">
            <button className="bg-red-500 py-4 px-4 mt-5 rounded-sm hover:bg-red-400">
                Send Massage
                </button>
        </div>
        </>
    
    ) 
}