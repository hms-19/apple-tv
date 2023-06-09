import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      title: "What is Apple TV+?",
      description: "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      title: "How can I watch it?",
      description: "Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com.",
    },
    {
      title: "What does it cost?",
      description: "That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $6.99 per month after a free seven-day trial.2 (3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $16.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.4",
    },
    {
      title: "Can I share with my family?",
      description: "Of course. Apple TV+ lets you share your subscription with up to five family members.",
    },
    {
      title: "Are there commercials? And can I watch on demand?",
      description: "Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.",
    },
    {
      title: "Do I need an Apple TV 4K?",
      description: "No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.",
    },
    {
      title: "Can I download to watch offline?",
      description: "Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.",
    },
  ],
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
});

export const getFaq = state => state.faq.data

export default faqSlice.reducer;
