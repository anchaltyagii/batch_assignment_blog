import Link from "next/link";

const notFound = () => {
  return (
    <div className=" flex  flex-col justify-center text-center h-[100vh]">
      <div>
        <h1 className=" text-4xl font-medium text-black">Page Not Found 404</h1>
      </div>
      <div>
        <h3 className="text-3xl font-medium text-black">
          Page You are looking for is not there{" "}
        </h3>
      </div>
      <div>
        <Link href="/">
          <h3 className="text-4xl font-medium text-red-600">
            Click here to get back to home page{" "}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
