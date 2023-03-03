
const Button = ({ onClick, children }) => {
    return (
      <button className="bg-green-600 text-white py-2 px-6 my-10 rounded hover:bg-yellow-700"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button