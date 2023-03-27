import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  return <div>Albums for {user.name}</div>;
}

export default AlbumList;
