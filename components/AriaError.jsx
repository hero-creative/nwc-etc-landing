import React from 'react'
import { IoWarning } from 'react-icons/io5'
/**
 * Sets role alert on the error message to make it accessible to screen readers
 * The message will be read out when the user encounters an error while submiting the form
 * @param {*} param0
 * @returns
 */
function AriaError({ message }) {
  return (
    <div className="flex gap-2 items-center mt-2" id="error">
      <IoWarning fontSize={28} />
      <span role="alert" className="text-red-500">
        {message}
      </span>
    </div>
  )
}

export default AriaError
