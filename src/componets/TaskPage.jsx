

export const TaskPage = () =>{


    // return <div className="w-full sm:w-64 p-4 bg-gray-300 h-screen sm:h-auto flex-shrink-0">
    //    <h1> YOUR TASK HERE ! </h1>
    //    <div>
    //     <input type="text" placeholder=" Description " className="h-20" />
    //     <select id="category" className="mt-2 w-44">
    //       <option value="">Category</option>
    //       <option value="exercise">Exercise</option>
    //       <option value="education">Education</option>
    //       <option value="event">Event</option>
    //       <option value="visit">Visit</option>
    //     </select>
    //    </div>

    // </div>

  return  <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="relative bg-blue-500 h-40 rounded-b-3xl">
        <div className="absolute top-4 left-4 text-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <h1 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
          New Task
        </h1>
        <div className="absolute top-4 right-4 text-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-6 flex flex-col gap-4">
        <textarea
          placeholder="Add a description..."
          className="w-full p-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          className="w-full p-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Category</option>
          <option>Work</option>
          <option>Home</option>
          <option>Fun</option>
        </select>

        <input
          type="date"
          className="w-full p-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="time"
          className="w-full p-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5" />
          <span>Important?</span>
        </label>

        <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
          Done
        </button>
      </div>
    </div>




}