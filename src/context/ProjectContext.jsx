// src/context/ProjectContext.jsx
import { createContext, useContext, useState } from "react";

const ProjectContext = createContext(); 

export function ContextProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );

  return (
    <ProjectContext.Provider value={{ language, setLanguage }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjectContext = () => useContext(ProjectContext);
