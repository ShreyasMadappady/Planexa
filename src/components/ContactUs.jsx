function ContactUs() {
  return (
    <div className="bg-black flex flex-col items-center mx-[1.625rem] rounded-3xl py-[1.74rem] mb-[4.5rem] lg:flex-row lg:mx-[3.208rem] lg:px-[5%] lg:py-[4.313rem] lg:gap-[10%] xl:mx-[10%] 2xl:mx-[15%]">
      <h1 className="text-[#F49C25] pb-[1.74rem] font-medium text-[2rem] lg:text-[3.556rem] lg:self-start">
        Contact Us
      </h1>
      <form
        className="flex flex-col gap-[0.73rem] w-full px-[1.63rem] lg:gap-[1.5rem]  text-white"
        action="#"
      >
        <input
          className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem] lg:h-[5.655rem]"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem] lg:h-[5.655rem]"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-[#262626] flex flexs pl-[1.31rem] pt-[0.85rem] rounded-xl pb-[16.51rem] lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem]  lg:h-[22.809rem]"
          type="text"
          placeholder="Enter the message"
        />
        <button className="bg-[#F49C25] rounded-[0.75rem] py-2 text-xl font-medium lg:text-[2rem] lg:py-[1.75rem] lg:rounded-[1.556rem]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
