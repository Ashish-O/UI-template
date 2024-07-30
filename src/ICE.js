import React, { useState } from 'react';

const IceControlsPage = () => {
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const rows = [
    {
      title: 'Control 1',
      description: 'Lorem ipsum dolor sit amet...',
      result: '42',
    },
    {
      title: 'Control 2',
      description: 'Consectetur adipiscing elit...',
      result: '78',
    },
    // Add more rows as needed
  ];

  const handleGenerateClick = () => {
    setShowModal(true); // Show the modal when Generate button is clicked
  };

  return (
    <div className="ice-controls-page">
      <h1 style={{ color: '#DB0011' }}>ICE-CONTROLS</h1>
      <table>
        {/* ... */}
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {/* ... */}
              <td>
                <button
                  style={{ backgroundColor: '#DB0011', color: '#FFFFFF' }}
                  onClick={handleGenerateClick} // Show modal on button click
                >
                  Generate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          {/* Your modal content goes here */}
          <p>This is the suggestion modal.</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default IceControlsPage;