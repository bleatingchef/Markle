import React from 'react';

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-5 max-w-4xl w-full relative">
        <button 
          className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-gray-700 focus:outline-none" 
          onClick={onClose}
        >
          &times;
        </button>
        <div className="overflow-y-auto h-96 rounded-lg maincardcheck">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full object-cover rounded-lg"
            />
          )}
        </div>
        <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
        <p className="mt-2">{item.description}</p>
      </div>
    </div>
  );
};

export default Modal;
