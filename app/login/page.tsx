import Loginpage from "@/components/Loginpage";
import Loginsidebar from "@/components/Loginsidebar";

const page = () => {
  return (
    <div>
      <main className="mt-8 p-10 sm:p-0 sm:flex flex-col sm:flex-row flex sm:justify-center items-center sm:items-center w-full">
        <div>
          <Loginsidebar />
        </div>
        <div>
          <Loginpage />
        </div>
      </main>
    </div>
  );
};

export default page;
