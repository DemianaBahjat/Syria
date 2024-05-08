import axios from "axios";
import { useEffect, useState } from "react";
import { ContextUser } from "./Context";

function ContextProvider({ children }) {
  const [openAuth, setOpenAuth] = useState();
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertStore, setOpenAlertStore] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [checkConfition, setCheckConfition] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("roleUserLogin"));
  const [searchGlobal, setSearchGlobal] = useState();
  const [messageAndPaypal, setMessageAndPaypal] = useState([]);
  const [history, setHistory] = useState([]);
  const [openSubscrips, setOpenSubscrips] = useState(false);
  const [openOne, setOpenOne] = useState(true);
  ////////////////////////
  useEffect(() => {
    if (localStorage.getItem("messageOpen")) {
    } else {
      localStorage.setItem(
        "messageOpen",
        messageAndPaypal.filter((e) => e.category === "message")[0]?.content
      );
    }
  }, []);
  ///////////////////////////
  async function getSingleUser() {
    await axios
      .get(
        `https://syrianrevolution1.com/users/single/${localStorage.getItem(
          "idUserLogin"
        )}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        console.log(result);
        result?.data?.isConfident === true
          ? setCheckConfition(true)
          : setCheckConfition(false);
      })
      .catch((error) => console.log(error));
  }
  ////////////////////////
  // ListUserView
  const [lastNews, setLastNews] = useState([]);
  async function getListUser() {
    await axios
      .get("https://syrianrevolution1.com/lists/userView")
      .then((result) => {
        setLastNews(result.data.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getListUser();
  }, []);
  ////////childUserView///////////
  const [child, setChild] = useState([]);
  async function getChildUser() {
    await axios
      .get("https://syrianrevolution1.com/childData/userView")
      .then((result) => {
        setChild(result.data.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getChildUser();
  }, []);
  ////////////masscersuserView////////
  const [masc, setMasc] = useState([]);
  async function getMascersUser() {
    axios
      .get("https://syrianrevolution1.com/massacres/userView")
      .then((result) => {
        setMasc(result.data.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getMascersUser();
  }, []);
  ///////martyrDash/////////
  const [childDash, setChildDash] = useState([]);
  async function getMartyr() {
    await axios
      .get("https://syrianrevolution1.com/childData")
      .then((result) => {
        setChildDash(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getMartyr();
  }, []);
  //////////listDashMogram///////////
  const [listDash, setListDash] = useState([]);
  async function getList() {
    await axios
      .get("https://syrianrevolution1.com/lists")
      .then((result) => setListDash(result.data.data))
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getList();
  }, []);
  /////////////get message and paypal///////////////
  async function getAllMessageAndPaypal() {
    await axios
      .get("https://syrianrevolution1.com/messagePaypal")
      .then((result) => setMessageAndPaypal(result.data.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getAllMessageAndPaypal();
  }, []);
  /////////////get All History////////////////
  async function getAllHistory() {
    await axios
      .get("https://syrianrevolution1.com/sgel", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        setHistory(result.data.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getAllHistory();
  }, []);
  return (
    <ContextUser.Provider
      value={{
        openAuth,
        setOpenAuth,
        role,
        setRole,
        openAlert,
        setOpenAlert,
        openAlertStore,
        setOpenAlertStore,
        openLogout,
        setOpenLogout,
        getSingleUser,
        checkConfition,
        lastNews,
        child,
        masc,
        childDash,
        listDash,
        getMartyr,
        getList,
        getListUser,
        getChildUser,
        getMascersUser,
        searchGlobal,
        setSearchGlobal,
        messageAndPaypal,
        getAllMessageAndPaypal,
        history,
        openSubscrips,
        setOpenSubscrips,
        openOne,
        setOpenOne,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
}
