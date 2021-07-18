import React, { useContext } from "react";

const HomeContext = React.createContext();
const UpdateHomeContext = React.createContext();

export const useHomeState = () => {
  return useContext(HomeContext);
};

export const useUpdateHomeState = () => {
  return useContext(UpdateHomeContext);
};

const ContextProvider = ({ children }) => {
  const [home, setHome] = React.useState(true);

  const updateHomeState = (state) => {
    setHome(state);
  };
  return (
    <HomeContext.Provider value={home}>
      <UpdateHomeContext.Provider value={updateHomeState}>
        {children}
      </UpdateHomeContext.Provider>
    </HomeContext.Provider>
  );
};

export default ContextProvider;
