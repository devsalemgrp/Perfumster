import ProfileImage from "../Assets/Profile/profileImage.jpg";

export const userInfo = [
  {
    userName: "John Doe",
    profileImage: ProfileImage,
    email: "johndoe@example.com",
    phoneNumber: "+1 555-1234",
    dateOfBirth: "1990-05-15",
    country: "United States",
    profession: "Software Developer",
    password: "********",
    subscriptions: {
      title: "2 Scents - Standard",
      subscriptionType: "Standard",
      description:
        "Enjoy two delightful scents each month, carefully curated for you.",
      price: 79.99,
    },
    orders: [
      {
        orderNumber: "#2132312",
        numberOfProducts: 3,
        date: "2024-10-01",
        itemsInside: ["Perfume 1", "Perfume 2", "Perfume 3"],
        amount: "$150.00",
        status: "Completed",
      },
      {
        orderNumber: "#2132313",
        numberOfProducts: 1,
        date: "2024-09-20",
        itemsInside: ["Perfume 4"],
        amount: "$50.00",
        status: "Ordered",
      },
      {
        orderNumber: "#2132314",
        numberOfProducts: 2,
        date: "2024-09-15",
        itemsInside: ["Perfume 5", "Perfume 6"],
        amount: "$100.00",
        status: "Completed",
      },
    ],
  },
];
