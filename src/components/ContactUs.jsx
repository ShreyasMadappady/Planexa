function ContactUs() {
  return (
    <div className="bg-black flex flex-col items-center mx-4 px-5">
      <h1 className="text-yellow-500">Contact Us</h1>
      <form className="flex flex-col gap-2 w-full" action="#">
        <input className="bg-slate-900"  type="text" placeholder="Name"/>
        <input className="bg-slate-900" type="text" placeholder="Email"/>
        <input className="bg-slate-900" type="text" placeholder="Enter the message"/>
        <button className="bg-yellow-500">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs
