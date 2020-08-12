import React, { useState } from "react"
import "twin.macro"

function ImageModal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>open modal</button>
      {showModal ? (
        <div
          tw="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          onClick={() => setShowModal(false)}
          onKeyDown={() => setShowModal(false)}
          role="button"
          tabIndex={0}
        >
          Modal
        </div>
      ) : null}
    </div>
  )
}

export default ImageModal
