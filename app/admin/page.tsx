export const dynamic = "force-dynamic";
import { supabase } from "@/lib/supabase";

export default async function AdminPage() {
  const { data: puppies } = await supabase
    .from("puppies")
    .select("*");

  return (
    <main style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      {puppies?.map((puppy) => (
        <div
          key={puppy.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>{puppy.name}</h3>
          <p>Age: {puppy.age}</p>
          <p>Price: ${puppy.price}</p>
          <p>
            Status: {puppy.available ? "Available" : "Sold"}
          </p>
        </div>
      ))}
    </main>
  );
}