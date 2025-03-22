import { useQuery } from "@tanstack/react-query"

export const QKey = "getMovie"
async function queryFn() {
	try {
		const response = await fetch("http://localhost:3333/movie");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movie data:", error);
		throw error;
	}
}

export default function useGetMovie() {
	return useQuery({
		queryKey: [QKey],
		queryFn: queryFn,
	})
}
