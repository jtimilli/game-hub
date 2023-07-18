import data from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({ data: data, isLoading: false, error: null });

export default useGenre;
