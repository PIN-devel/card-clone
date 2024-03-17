import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await fetch("/test");
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{data.data}</div>;
}
