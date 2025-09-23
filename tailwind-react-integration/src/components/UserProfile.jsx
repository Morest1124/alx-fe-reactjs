function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 max-w-xs md:max-w-sm hover:shadow-xl">
      <h1 className="text-xl text-blue-00 my-4 sm:text-lg md:text-xl hover:text-blue-500">
        <img
          className="rounded-full mx-auto w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
          src="https://morest1124.github.io/Morest-Burawa-Portfolio/My_profile-removebg-preview.png"
          alt="User profile"
        />
        John Doe
      </h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base hover:text-blue-500">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
