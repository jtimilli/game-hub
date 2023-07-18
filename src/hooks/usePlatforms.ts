import useData from "./useData";
import { Platform } from "./useGames";
import data from "../data/platforms";

const usePlatforms = () => ({ data: data, error: null });

export default usePlatforms;
