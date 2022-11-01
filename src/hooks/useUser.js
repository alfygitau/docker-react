import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = (url) => {
  const [users, setUsers] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState([]);

  const fetchUser = async () => {
    setLoading(true);
    const { data } = await axios.get(url);
    const name = data.results[0].name.first;
    const last = data.results[0].name.last;
    const picture = data.results[0].picture.thumbnail;
    setUsers([...users, { firstName: name, lastName: last, image: picture }]);
    if (users.length < 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const next = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else fetchUser();
  };
  const previous = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return [users, users[currentIndex], loading, next, previous];
};
