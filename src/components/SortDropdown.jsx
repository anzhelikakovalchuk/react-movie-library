import React from "react"

function SortDropdown() {
  return (
    <div className="sort-dropdown uppercase flex items-center relative">
      <label htmlFor="sort" className="sort-dropdown__label text-gray-light font-medium w-28">
        Sort By
      </label>
      <div className="sort-dropdown inline-block relative w-full">
        <select id="sort" className="sort-dropdown__select block appearance-none w-full border-none text-white bg-gray-dark outline-0 cursor-pointer">
          <option className="sort-dropdown__select-item" value="release" selected>Release Date</option>
          <option className="sort-dropdown__select-item" value="title">Title</option>
        </select>
        <div className="sort-dropdown__arrow pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-2">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="h-5 w-5"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.17339 1C5.31917 1 4.85821 2.00184 5.41394 2.65057L9.23746 7.11398C9.63642 7.57971 10.3567 7.57992 10.756 7.11442L14.584 2.65101C15.1403 2.0024 14.6794 1 13.8249 1H6.17339Z"
              fill="#F65261"/>
            <path
              d="M6.17339 1C5.31917 1 4.85821 2.00184 5.41394 2.65057L9.23746 7.11398C9.63642 7.57971 10.3567 7.57992 10.756 7.11442L14.584 2.65101C15.1403 2.0024 14.6794 1 13.8249 1H6.17339Z"
              stroke="black"/>
          </svg>
        </div>
      </div>
    </div>
  )
}


export default SortDropdown;
