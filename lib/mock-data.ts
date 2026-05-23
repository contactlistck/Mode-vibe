import { Song } from '@/components/songs-row'
import { Image } from '@/components/image-grid'
import { Quote } from '@/components/quotes-list'

export interface VibeData {
  name: string
  emotionalQuote: string
  songs: Song[]
  images: Image[]
  quotes: Quote[]
  relatedVibes: string[]
}

export const trendingTags = [
  'heartbreak',
  'raining',
  '3am',
  'gymgrind',
  'lonelynight',
  'nostalgia',
  'winning',
]

export const vibeDatabase: Record<string, VibeData> = {
  default: {
    name: "Sad Night Drive",
    emotionalQuote: "and I still look for you on the highway... (it's 2am)",
    songs: [
      { id: '1', title: 'Heartbeat', artist: 'Blast', albumArt: 'https://picsum.photos/seed/album1/400/400' },
      { id: '2', title: 'Sad Night', artist: 'Dlawie Spong', albumArt: 'https://picsum.photos/seed/album2/400/400' },
      { id: '3', title: 'Song', artist: 'Roveid Editor', albumArt: 'https://picsum.photos/seed/album3/400/400' },
      { id: '4', title: 'The Mane of Time', artist: 'Simnle', albumArt: 'https://picsum.photos/seed/album4/400/400' },
      { id: '5', title: 'Midnight Echoes', artist: 'Drift', albumArt: 'https://picsum.photos/seed/album5/400/400' },
      { id: '6', title: 'Empty Roads', artist: 'Neon Tears', albumArt: 'https://picsum.photos/seed/album6/400/400' },
    ],
    images: [
      { id: '1', url: 'https://picsum.photos/seed/vibe1/600/800', alt: 'Foggy road at night' },
      { id: '2', url: 'https://picsum.photos/seed/vibe2/400/400', alt: 'City lights blur' },
      { id: '3', url: 'https://picsum.photos/seed/vibe3/400/400', alt: 'Empty street' },
      { id: '4', url: 'https://picsum.photos/seed/vibe4/600/800', alt: 'Rainy window' },
      { id: '5', url: 'https://picsum.photos/seed/vibe5/400/400', alt: 'Neon signs' },
      { id: '6', url: 'https://picsum.photos/seed/vibe6/400/400', alt: 'Highway at dusk' },
    ],
    quotes: [
      { id: '1', text: "i hope you are happy, but i also hope you never forget me" },
      { id: '2', text: "it's strange how a person can be the whole world to you, and then they're just a stranger again." },
      { id: '3', text: "some nights are harder than others, but every sunrise reminds me I'm still here." },
      { id: '4', text: "the road doesn't care where you're going, it just takes you there." },
    ],
    relatedVibes: ['heartbreak', 'raining', '3am', 'gymgrind', 'lonelynight'],
  },
  heartbreak: {
    name: "Heartbreak Hotel",
    emotionalQuote: "loving you was the most beautiful mistake I ever made",
    songs: [
      { id: '1', title: 'Someone Like You', artist: 'Adele', albumArt: 'https://picsum.photos/seed/hb1/400/400' },
      { id: '2', title: 'All Too Well', artist: 'Taylor Swift', albumArt: 'https://picsum.photos/seed/hb2/400/400' },
      { id: '3', title: 'Back to December', artist: 'Taylor Swift', albumArt: 'https://picsum.photos/seed/hb3/400/400' },
      { id: '4', title: 'The Night We Met', artist: 'Lord Huron', albumArt: 'https://picsum.photos/seed/hb4/400/400' },
      { id: '5', title: 'Dancing On My Own', artist: 'Robyn', albumArt: 'https://picsum.photos/seed/hb5/400/400' },
    ],
    images: [
      { id: '1', url: 'https://picsum.photos/seed/heart1/600/800', alt: 'Broken heart imagery' },
      { id: '2', url: 'https://picsum.photos/seed/heart2/400/400', alt: 'Lonely figure' },
      { id: '3', url: 'https://picsum.photos/seed/heart3/400/400', alt: 'Empty bed' },
      { id: '4', url: 'https://picsum.photos/seed/heart4/600/800', alt: 'Rain on window' },
      { id: '5', url: 'https://picsum.photos/seed/heart5/400/400', alt: 'Old photographs' },
      { id: '6', url: 'https://picsum.photos/seed/heart6/400/400', alt: 'Sunset alone' },
    ],
    quotes: [
      { id: '1', text: "you were my whole world, and now I'm learning to live on a different planet" },
      { id: '2', text: "the worst part isn't losing you, it's remembering how good it was" },
      { id: '3', text: "healing is not linear, and that's okay" },
      { id: '4', text: "i'm not crying because of you; you're not worth it. i'm crying because my delusion of who you were was shattered" },
    ],
    relatedVibes: ['crying', 'memories', 'moving on', 'self-love', 'healing'],
  },
  raining: {
    name: "Rainy Day Vibes",
    emotionalQuote: "the sky is crying so I don't have to",
    songs: [
      { id: '1', title: 'Riders on the Storm', artist: 'The Doors', albumArt: 'https://picsum.photos/seed/rain1/400/400' },
      { id: '2', title: 'Purple Rain', artist: 'Prince', albumArt: 'https://picsum.photos/seed/rain2/400/400' },
      { id: '3', title: 'Only Happy When It Rains', artist: 'Garbage', albumArt: 'https://picsum.photos/seed/rain3/400/400' },
      { id: '4', title: 'November Rain', artist: 'Guns N Roses', albumArt: 'https://picsum.photos/seed/rain4/400/400' },
      { id: '5', title: 'Here Comes the Rain Again', artist: 'Eurythmics', albumArt: 'https://picsum.photos/seed/rain5/400/400' },
    ],
    images: [
      { id: '1', url: 'https://picsum.photos/seed/rainy1/600/800', alt: 'Rain on window' },
      { id: '2', url: 'https://picsum.photos/seed/rainy2/400/400', alt: 'Wet streets' },
      { id: '3', url: 'https://picsum.photos/seed/rainy3/400/400', alt: 'Umbrella' },
      { id: '4', url: 'https://picsum.photos/seed/rainy4/600/800', alt: 'Storm clouds' },
      { id: '5', url: 'https://picsum.photos/seed/rainy5/400/400', alt: 'Coffee by window' },
      { id: '6', url: 'https://picsum.photos/seed/rainy6/400/400', alt: 'Puddle reflections' },
    ],
    quotes: [
      { id: '1', text: "rain falls because the clouds can no longer handle the weight. so do tears." },
      { id: '2', text: "the sound of rain needs no translation" },
      { id: '3', text: "some people feel the rain, others just get wet" },
      { id: '4', text: "let the rain wash away all the pain of yesterday" },
    ],
    relatedVibes: ['cozy', 'melancholy', 'peaceful', 'nostalgic', 'dreamy'],
  },
  '3am': {
    name: "3AM Thoughts",
    emotionalQuote: "it's the hour when demons and angels fight over your pillow",
    songs: [
      { id: '1', title: '3AM', artist: 'Matchbox Twenty', albumArt: 'https://picsum.photos/seed/3am1/400/400' },
      { id: '2', title: 'Late Night Feelings', artist: 'Mark Ronson', albumArt: 'https://picsum.photos/seed/3am2/400/400' },
      { id: '3', title: 'Midnight City', artist: 'M83', albumArt: 'https://picsum.photos/seed/3am3/400/400' },
      { id: '4', title: 'After Hours', artist: 'The Weeknd', albumArt: 'https://picsum.photos/seed/3am4/400/400' },
      { id: '5', title: 'Insomnia', artist: 'Faithless', albumArt: 'https://picsum.photos/seed/3am5/400/400' },
    ],
    images: [
      { id: '1', url: 'https://picsum.photos/seed/night1/600/800', alt: 'City at night' },
      { id: '2', url: 'https://picsum.photos/seed/night2/400/400', alt: 'Phone screen glow' },
      { id: '3', url: 'https://picsum.photos/seed/night3/400/400', alt: 'Empty streets' },
      { id: '4', url: 'https://picsum.photos/seed/night4/600/800', alt: 'Starry sky' },
      { id: '5', url: 'https://picsum.photos/seed/night5/400/400', alt: 'Neon lights' },
      { id: '6', url: 'https://picsum.photos/seed/night6/400/400', alt: 'Late night cafe' },
    ],
    quotes: [
      { id: '1', text: "3am knows all your secrets" },
      { id: '2', text: "the night is honest in ways the day refuses to be" },
      { id: '3', text: "overthinking at 3am is just your brain's way of saying it cares too much" },
      { id: '4', text: "i stay up late because i want more time with the silence" },
    ],
    relatedVibes: ['insomnia', 'overthinking', 'lonely', 'peaceful', 'reflective'],
  },
  gymgrind: {
    name: "Gym Beast Mode",
    emotionalQuote: "pain is temporary, pride is forever",
    songs: [
      { id: '1', title: 'Lose Yourself', artist: 'Eminem', albumArt: 'https://picsum.photos/seed/gym1/400/400' },
      { id: '2', title: 'Eye of the Tiger', artist: 'Survivor', albumArt: 'https://picsum.photos/seed/gym2/400/400' },
      { id: '3', title: 'Stronger', artist: 'Kanye West', albumArt: 'https://picsum.photos/seed/gym3/400/400' },
      { id: '4', title: 'Till I Collapse', artist: 'Eminem', albumArt: 'https://picsum.photos/seed/gym4/400/400' },
      { id: '5', title: 'Power', artist: 'Kanye West', albumArt: 'https://picsum.photos/seed/gym5/400/400' },
    ],
    images: [
      { id: '1', url: 'https://picsum.photos/seed/fit1/600/800', alt: 'Gym equipment' },
      { id: '2', url: 'https://picsum.photos/seed/fit2/400/400', alt: 'Weights' },
      { id: '3', url: 'https://picsum.photos/seed/fit3/400/400', alt: 'Running track' },
      { id: '4', url: 'https://picsum.photos/seed/fit4/600/800', alt: 'Sunrise run' },
      { id: '5', url: 'https://picsum.photos/seed/fit5/400/400', alt: 'Sweat' },
      { id: '6', url: 'https://picsum.photos/seed/fit6/400/400', alt: 'Victory pose' },
    ],
    quotes: [
      { id: '1', text: "the only bad workout is the one that didn't happen" },
      { id: '2', text: "discipline is choosing between what you want now and what you want most" },
      { id: '3', text: "your body can stand almost anything. it's your mind you have to convince." },
      { id: '4', text: "the pain you feel today will be the strength you feel tomorrow" },
    ],
    relatedVibes: ['motivation', 'discipline', 'winning', 'focus', 'grind'],
  },
  lonelynight: {
    name: "Lonely Night",
    emotionalQuote: "sometimes the most crowded places feel the most empty",
    songs: [
      { id: '1', title: 'Lonely', artist: 'Akon', albumArt: 'https://picsum.photos/seed/lone1/400/400' },
      { id: '2', title: 'Mad World', artist: 'Gary Jules', albumArt: 'https://picsum.photos/seed/lone2/400/400' },
      { id: '3', title: 'Creep', artist: 'Radiohead', albumArt: 'https://picsum.photos/seed/lone3/400/400' },
      { id: '4', title: 'Everybody Hurts', artist: 'R.E.M.', albumArt: 'https://picsum.photos/seed/lone4/400/400' },
      { id: '5', title: 'Hurt', artist: 'Johnny Cash', albumArt: 'https://picsum.photos/seed/lone5/400/400' },
    ],
    images: [
      { id: '1', url: 'https://picsum.photos/seed/lonely1/600/800', alt: 'Empty room' },
      { id: '2', url: 'https://picsum.photos/seed/lonely2/400/400', alt: 'Single light' },
      { id: '3', url: 'https://picsum.photos/seed/lonely3/400/400', alt: 'Shadow' },
      { id: '4', url: 'https://picsum.photos/seed/lonely4/600/800', alt: 'Night sky' },
      { id: '5', url: 'https://picsum.photos/seed/lonely5/400/400', alt: 'Empty bench' },
      { id: '6', url: 'https://picsum.photos/seed/lonely6/400/400', alt: 'Quiet street' },
    ],
    quotes: [
      { id: '1', text: "loneliness is not being alone, it's feeling alone when you're not" },
      { id: '2', text: "the worst loneliness is to not be comfortable with yourself" },
      { id: '3', text: "in the end, we all just want someone who chooses us over everyone else" },
      { id: '4', text: "being alone has a power that very few people can handle" },
    ],
    relatedVibes: ['sad', 'reflective', 'midnight', 'peaceful', 'introspective'],
  },
}

export function getVibeData(query: string): VibeData {
  const normalizedQuery = query.toLowerCase().trim()
  
  // Check for exact match or partial match in database
  for (const [key, data] of Object.entries(vibeDatabase)) {
    if (normalizedQuery.includes(key) || key.includes(normalizedQuery)) {
      return data
    }
  }
  
  // Return default if no match found
  return vibeDatabase.default
}

export function getRandomVibe(): VibeData {
  const vibes = Object.values(vibeDatabase)
  return vibes[Math.floor(Math.random() * vibes.length)]
}
