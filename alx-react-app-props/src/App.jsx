import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import UserConext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <UserConext.Provider ProfilePage={userData}>
        <ProfilePage userData={userData} />;
      </UserConext.Provider>
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile
        name="Morest"
        age="19"
        bio="We, the unwilling, led by the unknowing, are doing the impossible for the ungrateful. We have done so much, for so long, with so little, we are now qualified to do anything with nothing."
      />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
