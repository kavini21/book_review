export const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    rating: 4.6,
    reviewCount: 245,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    genres: ["Fiction", "Philosophy", "Mental Health"],
    publishedYear: "2020",
    pages: 288,
    publisher: "Canongate Books"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    rating: 4.8,
    reviewCount: 312,
    description: "An easy and proven way to build good habits and break bad ones. Tiny changes, remarkable results.",
    genres: ["Self-Help", "Psychology", "Productivity"],
    publishedYear: "2018",
    pages: 320,
    publisher: "Avery"
  },
  {
    id: 3,
    title: "The Seven Moons of Maali Almeida",
    author: "Shehan Karunatilaka",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    rating: 4.3,
    reviewCount: 189,
    description: "A darkly humorous and politically charged ghost story set against the backdrop of Sri Lanka's civil war.",
    genres: ["Fiction", "Magical Realism", "Sri Lankan Literature"],
    publishedYear: "2022",
    pages: 432,
    publisher: "Sort Of Books"
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 428,
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    genres: ["Memoir", "Non-Fiction", "Biography"],
    publishedYear: "2018",
    pages: 334,
    publisher: "Random House"
  },
  {
    id: 5,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=600&fit=crop",
    rating: 4.2,
    reviewCount: 267,
    description: "A thrilling book that offers a look at our changing world through the eyes of an unforgettable narrator.",
    genres: ["Science Fiction", "Literary Fiction", "Dystopian"],
    publishedYear: "2021",
    pages: 303,
    publisher: "Faber & Faber"
  },
  {
    id: 6,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    rating: 4.5,
    reviewCount: 356,
    description: "Four unlikely friends meet every Thursday to investigate cold cases. When a real murder happens, they find themselves in the middle of their first live case.",
    genres: ["Mystery", "Crime", "Humor"],
    publishedYear: "2020",
    pages: 368,
    publisher: "Viking"
  }
];

export const reviews = [
  {
    id: 1,
    bookId: 1,
    bookTitle: "The Midnight Library",
    reviewerName: "Sarah Johnson",
    rating: 5,
    review: "This book completely changed my perspective on life choices and regrets. Matt Haig's writing is both profound and accessible, weaving philosophical concepts into a compelling narrative. The concept of the Midnight Library - a space between life and death where you can explore different versions of your life - is brilliantly executed. It's a book that stays with you long after you've finished reading.",
    date: "2024-01-15",
    helpful: 23
  },
  {
    id: 2,
    bookId: 2,
    bookTitle: "Atomic Habits",
    reviewerName: "Michael Chen",
    rating: 5,
    review: "Hands down the best book on habit formation I've ever read. James Clear breaks down complex behavioral science into actionable strategies that actually work. The 1% better every day concept is so simple yet powerful. I've implemented several techniques from this book and seen real improvements in my daily routine.",
    date: "2024-01-10",
    helpful: 45
  },
  {
    id: 3,
    bookId: 1,
    bookTitle: "The Midnight Library",
    reviewerName: "Emma Davis",
    rating: 4,
    review: "A beautiful exploration of regret, possibility, and the meaning of life. While some parts felt a bit repetitive, the overall message is powerful and uplifting. The ending particularly resonated with me. It's a book that makes you appreciate your current life while also inspiring you to make positive changes.",
    date: "2024-01-08",
    helpful: 18
  },
  {
    id: 4,
    bookId: 3,
    bookTitle: "The Seven Moons of Maali Almeida",
    reviewerName: "Rajesh Patel",
    rating: 4,
    review: "Karunatilaka's writing is both witty and haunting. The book offers a unique perspective on Sri Lanka's troubled history through the eyes of a ghost photographer. The dark humor balances well with the serious political themes. It's not an easy read, but it's definitely rewarding for those willing to engage with its complexity.",
    date: "2024-01-05",
    helpful: 12
  },
  {
    id: 5,
    bookId: 4,
    bookTitle: "Educated",
    reviewerName: "Jennifer Williams",
    rating: 5,
    review: "Absolutely gripping memoir that reads like fiction. Tara Westover's journey from an isolated, abusive household to earning a PhD is both inspiring and heartbreaking. Her writing is beautiful and honest, never seeking pity but simply telling her truth. A powerful testament to the transformative power of education.",
    date: "2024-01-03",
    helpful: 67
  },
  {
    id: 6,
    bookId: 5,
    bookTitle: "Klara and the Sun",
    reviewerName: "David Kim",
    rating: 3,
    review: "Ishiguro's prose is as beautiful as ever, but I found the pacing quite slow. The story is told from the perspective of an AI companion, which creates an interesting but sometimes distant narrative voice. The themes of love, sacrifice, and what it means to be human are well-explored, though the plot feels somewhat thin.",
    date: "2023-12-28",
    helpful: 31
  },
  {
    id: 7,
    bookId: 6,
    bookTitle: "The Thursday Murder Club",
    reviewerName: "Margaret Thompson",
    rating: 5,
    review: "Delightfully entertaining! Richard Osman has created such loveable characters in this retirement home mystery. The dialogue is witty, the mystery is well-crafted, and the friendship between the four main characters is heartwarming. Perfect for anyone who enjoys cozy mysteries with a modern twist.",
    date: "2023-12-25",
    helpful: 29
  },
  {
    id: 8,
    bookId: 2,
    bookTitle: "Atomic Habits",
    reviewerName: "Alex Rodriguez",
    rating: 4,
    review: "Great practical advice backed by solid research. The four laws of behavior change are simple to understand and implement. My only criticism is that some examples are repeated throughout the book. Overall, it's an excellent resource for anyone looking to build better habits or break bad ones.",
    date: "2023-12-20",
    helpful: 38
  }
];