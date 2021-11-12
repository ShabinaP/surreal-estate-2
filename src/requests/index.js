import axios from "axios";

const endpoint = "http://localhost:3000/api/v1/";

const getProperties = (setProperties, setAlert) =>
  axios
    .get(`${endpoint}PropertyListing`)
    .then(({ data }) => setProperties(data))
    .catch(() => setAlert("Server error. Please try again later."));

const filterProperties = (search, setProperties, setAlert) =>
  axios
    .get(`${endpoint}PropertyListing${search}`)
    .then(({ data }) => {
      if (data.length === 0) {
        setAlert({ message: "Sorry, no properties found", isSuccess: true });
        setProperties(data);
      } else {
        setAlert({ message: "", isSuccess: false });
        setProperties(data);
      }
    })
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );

export { getProperties, filterProperties };