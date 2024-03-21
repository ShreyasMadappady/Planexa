function ContactUs() {
  return (
    <div className="bg-black flex flex-col items-center mx-[1.625rem] rounded-3xl py-[1.74rem] mb-[4.5rem]">
      <h1 className="text-[#F49C25] pb-[1.74rem] font-medium text-[2rem]">
        Contact Us
      </h1>
      <form
        className="flex flex-col gap-[0.73rem] w-full px-[1.63rem]"
        action="#"
      >
        <input
          className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-[#262626] flex flexs pl-[1.31rem] pt-[0.85rem] rounded-xl pb-[16.51rem] "
          type="text"
          placeholder="Enter the message"
        />
        <button className="bg-[#F49C25] rounded-[0.75rem] py-2 text-xl font-medium">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
