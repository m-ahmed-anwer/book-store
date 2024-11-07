const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    description: "A tragic love story set in the Roaring Twenties.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 8.99,
    description: "A dystopian novel about totalitarianism.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 7.99,
    description: "A novel about racial injustice in the Deep South.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 6.99,
    description: "A romantic novel that critiques the British landed gentry.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    price: 11.99,
    description:
      "The narrative of Captain Ahab's obsession with a giant white whale.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 10.99,
    description: "A story about teenage rebellion and alienation.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 7,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 12.99,
    description:
      "A dystopian novel exploring the dangers of technological advancement.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 9.99,
    description: "A fantasy novel about the adventures of Bilbo Baggins.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 9,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: 8.99,
    description: "A dystopian novel about a future where books are banned.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 10,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 10.99,
    description: "A novel about vanity, moral duplicity, and aestheticism.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 11,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 13.99,
    description: "A psychological thriller exploring morality and redemption.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 12,
    title: "The Odyssey",
    author: "Homer",
    price: 14.99,
    description:
      "An epic poem about Odysseus' journey home after the Trojan War.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 13,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    price: 11.99,
    description: "A tale of passion and revenge on the Yorkshire moors.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 14,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    price: 9.99,
    description: "A fantasy series about children who discover a magical land.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
  {
    id: 15,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 8.99,
    description:
      "A novel about a shepherd's journey to find his personal legend.",
    image:
      "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  },
];

export default books;
