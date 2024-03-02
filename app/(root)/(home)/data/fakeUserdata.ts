export const postsData = [
  {
    id: "1",
    user: {
      id: "user1",
      username: "john_doe",
      userImage: "https://source.unsplash.com/random",
    },
    heading: "My Awesome Post",
    content: "This is the content of my post. It can be as long as needed.",
    likes: 20,
    comments: [
      {
        id: "comment1",
        user: {
          id: "user2",
          username: "jane_smith",
          userImage: "https://source.unsplash.com/random",
        },
        content: "Great post!",
        createdAt: new Date("2024-03-01T12:00:00"),
      },
    ],
    shares: 5,
    createdAt: new Date("2024-03-01T10:00:00"),
    hashtags: ["#Thoughts", "#Sharing", "#World"],
  },
  {
    id: "2",
    user: {
      id: "user4",
      username: "alice_jones",
      userImage: "https://source.unsplash.com/random",
    },
    heading: "Another Day, Another Post",
    content: "Just sharing my thoughts with the world.",
    likes: 15,
    comments: [
      {
        id: "comment2",
        user: {
          id: "user3",
          username: "bob_jones",
          userImage: "https://source.unsplash.com/random",
        },
        content: "Nice one!",
        createdAt: new Date("2024-03-01T14:30:00"),
      },
    ],
    shares: 8,
    createdAt: new Date("2024-03-01T11:30:00"),
    hashtags: ["#Thoughts", "#Sharing", "#World"],
  },
  {
    id: "3",
    user: {
      id: "user5",
      username: "emma_jackson",
      userImage: "https://source.unsplash.com/random",
    },
    heading: "Thoughts on Technology",
    content: "Exploring the latest advancements in technology. What are your thoughts?",
    likes: 25,
    comments: [
      {
        id: "comment3",
        user: {
          id: "user1",
          username: "john_doe",
          userImage: "https://source.unsplash.com/random",
        },
        content: "Absolutely fascinating!",
        createdAt: new Date("2024-03-02T09:45:00"),
      },
      {
        id: "comment4",
        user: {
          id: "user6",
          username: "david_smith",
          userImage: "https://source.unsplash.com/random",
        },
        content: "I agree. Technology is changing the world.",
        createdAt: new Date("2024-03-02T10:15:00"),
      },
    ],
    shares: 12,
    createdAt: new Date("2024-03-02T09:30:00"),
  },
  {
    id: "4",
    user: {
      id: "user7",
      username: "olivia_brown",
      userImage: "https://source.unsplash.com/random",
    },
    heading: "Travel Diaries",
    content: "Sharing my travel experiences from around the globe. ✈️🌎",
    likes: 30,
    comments: [
      {
        id: "comment5",
        user: {
          id: "user8",
          username: "liam_miller",
          userImage: "https://source.unsplash.com/random",
        },
        content: "Amazing pictures! Where was this taken?",
        createdAt: new Date("2024-03-03T15:20:00"),
      },
      {
        id: "comment6",
        user: {
          id: "user9",
          username: "ava_white",
          userImage: "https://source.unsplash.com/random",
        },
        content: "I wish I could travel there someday.",
        createdAt: new Date("2024-03-03T16:00:00"),
      },
    ],
    shares: 15,
    createdAt: new Date("2024-03-03T14:45:00"),
    hashtags: ["#Thoughts", "#Sharing", "#World"],
  },
  {
    id: "5",
    user: {
      id: "user10",
      username: "noah_smith",
      userImage: "https://source.unsplash.com/random",
    },
    heading: "Cooking Adventures",
    content: "Experimenting with new recipes in the kitchen. 🍳👩‍🍳",
    likes: 18,
    comments: [
      {
        id: "comment7",
        user: {
          id: "user11",
          username: "isabella_jones",
          userImage: "https://source.unsplash.com/random",
        },
        content: "I love your cooking posts! Can you share the recipe?",
        createdAt: new Date("2024-03-04T12:30:00"),
      },
      {
        id: "comment8",
        user: {
          id: "user12",
          username: "aiden_davis",
          userImage: "https://source.unsplash.com/random",
        },
        content: "That dish looks delicious!",
        createdAt: new Date("2024-03-04T13:15:00"),
      },
    ],
    shares: 10,
    createdAt: new Date("2024-03-04T12:15:00"),
  },
  {
    id: "6",
    user: {
      id: "user13",
      username: "sophia_wilson",
      userImage: "https://source.unsplash.com/random",
    },
    heading: "Fitness Journey",
    content: "Documenting my fitness journey. 💪 #FitnessGoals",
    likes: 35,
    comments: [
      {
        id: "comment9",
        user: {
          id: "user14",
          username: "jack_anderson",
          userImage: "https://source.unsplash.com/random",
        },
        content: "You're inspiring me to start my fitness journey too!",
        createdAt: new Date("2024-03-05T08:45:00"),
      },
      {
        id: "comment10",
        user: {
          id: "user15",
          username: "lily_jones",
          userImage: "https://source.unsplash.com/random",
        },
        content: "Keep it up! 💪",
        createdAt: new Date("2024-03-05T09:30:00"),
      },
    ],
    shares: 18,
    createdAt: new Date("2024-03-04T12:15:00"),
  }]