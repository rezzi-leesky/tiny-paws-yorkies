import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://aajdodripkidqwgtvqwa.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const puppies = [
  {
    name: "Luna",
    age: "8 weeks",
    price: 1200,
    available: true,
    image_url: "/images/luna/photo_1_2026-10-07_10-46-30.jpg",
  },
  {
    name: "Max",
    age: "6 weeks",
    price: 1200,
    available: true,
    image_url: "/images/max/photo_1_2026-10-07_10-50-35.jpg",
  },
  {
    name: "Bella",
    age: "10 weeks",
    price: 1300,
    available: false,
    image_url: "/images/bella/photo_4_2026-10-07_10-32-46.jpg",
  },
  {
    name: "Luna",
    age: "7 weeks",
    price: 1250,
    available: true,
    image_url: "/images/luna/photo_2_2026-10-07_10-46-30.jpg",
  },
  {
    name: "Max",
    age: "5 weeks",
    price: 1150,
    available: true,
    image_url: "/images/max/photo_2_2026-10-07_10-50-35.jpg",
  },
];

async function seedDatabase() {
  try {
    console.log("Seeding puppies into Supabase...");
    
    const { data, error } = await supabase
      .from("puppies")
      .insert(puppies);

    if (error) {
      console.error("Error seeding database:", error);
      process.exit(1);
    }

    console.log("✅ Successfully added puppies:", data);
    process.exit(0);
  } catch (err) {
    console.error("Unexpected error:", err);
    process.exit(1);
  }
}

seedDatabase();
