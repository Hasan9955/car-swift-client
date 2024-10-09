

const ClientReview = () => {
    return (
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
      {/* Star Ratings */}
      <div className="flex justify-end mb-2">
        <div className="text-yellow-500">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 italic mb-6">
        &#8220;Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermentum nupta urna mauris in the interdum.&#8221;
      </p>

      {/* User Info */}
      <div className="flex items-center">
        {/* Avatar */}
        <img
          className="w-12 h-12 rounded-full border"
          src="https://via.placeholder.com/150"
          alt="User avatar"
        />

        {/* Name and Role */}
        <div className="ml-4">
          <p className="font-semibold text-gray-900">Dan Martin</p>
          <p className="text-gray-500 text-sm">Customer</p>
        </div>
      </div>
    </div>
    );
};

export default ClientReview;