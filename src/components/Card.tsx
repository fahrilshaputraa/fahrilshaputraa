import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ image, title, description, tags }) => {
  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
