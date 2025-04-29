import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

function SupportPage() {
  return (
    <>
      <div className="bg-primary text-light p-5">
        <Hero />
      </div>
      <div className="container-lg p-5">
        <CreateTicket />
      </div>
    </>
  );
}

export default SupportPage;
