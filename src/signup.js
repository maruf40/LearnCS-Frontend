function Signup() {
  return (
    <body>
      <div className="h-screen flex items-center justify-center bg-[#748A8C] bg-cover bg-no-repeat" style={{"background-image": `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,}}>
        <div className="mr-56 max-w-sm mx-auto p-8 bg-[#012326] bg-opacity-60 backdrop-blur-md rounded-xl shadow-md space-y-2 flex-auto">
          <div className="text-center space-y-2 sm:text-left">
            <h1 className="mb-4 text-base text-center font-semibold text-[#F2F2F2]">
              Register your free account and get immidiate access to online
              courses
            </h1>
            <div className="border-t border-[#F2F2F2] my-4"></div>
          </div>
          <div>
            <p className="text-body py-2 text-[#F2F2F2] font-medium">
              Username
            </p>
            <input
              type="text"
              placeholder="Username"
              class="border outline-none focus:border-2 focus:border-green-500 w-full rounded-sm py-1 px-2"
            ></input>
            <p className="text-body py-2 text-[#F2F2F2] font-medium ">
              Email Address
            </p>
            <input
              type="text"
              placeholder="Email Address"
              class="border outline-none focus:border-2 focus:border-green-500 w-full rounded-sm py-1 px-2"
            ></input>
            <p className="text-body py-2 text-[#F2F2F2] font-medium ">
              Password
            </p>
            <input
              type="text"
              placeholder="Password"
              class="w-full rounded-sm border outline-none focus:border-2 focus:border-green-500 py-1 px-2"
            ></input>
            <p className="text-body py-2 text-[#F2F2F2] font-medium ">
              Confirm Password
            </p>
            <input
              type="text"
              placeholder="Confirm Password"
              class="w-full rounded-sm border outline-none focus:border-2 focus:border-green-500 py-1 px-2"
            ></input>
            <div class="mt-5">
              <button
                className="w-full py-3 text-center border rounded-full text-sm font-semibold hover:text-[#F2F2F2] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2
         border-[#5ba66e] text-[#49ad62] hover:bg-green-500 focus:ring-green-600 dark:text-green-400 hover:scale-105 duration-200"
              >
                Sign Up
              </button>
              <p className="text-body text-center py-2 text-[#F2F2F2] font-medium">
                Already a Member?
                <button className="text-green-400 px-1 hover:underline">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Signup;
