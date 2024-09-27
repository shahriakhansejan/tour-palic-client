import Nav from "../Header/Nav";
import MyListDetails from "./MyListDetails";
import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../provider/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  //   const loadedLists = useLoaderData();
  const [myLists, setMyLists] = useState([]);

  useEffect(() => {
    fetch(`https://tour-palic-server.vercel.app/places-email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyLists(data);
      });
  }, []);

  return (
    <div>
      <Nav></Nav>
      <h2 className="text-center my-8 text-3xl text-yellow-600 font-bold">
        The spots which added by You
      </h2>
      <div className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-12">
        {myLists.map((myList) => (
          <MyListDetails
            myList={myList}
            key={myList._id}
            myLists={myLists}
            setMyLists={setMyLists}
          ></MyListDetails>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

MyList.propTypes = {};

export default MyList;
