import "flowbite-datepicker";
const CreateTask = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="p-5 border rounded-xl shadow-md">
          <div className="title">
            <h2 className="font-bold text-xl">Create Task</h2>
          </div>
          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            {/* title */}
            <div>
              <label htmlFor="email" className="sr-only">
                Title
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Title"
                />
              </div>
            </div>
            {/* description */}
            <div>
              <label htmlFor="password" className="sr-only">
                Description
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Description"
                />
              </div>
            </div>
            {/* submit button */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
