import ProfilePage from "./ProfilePage";
import userContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return 
  <UserContext.Provider = {userData}>
    <ProfilePage userData={userData} />;
    </UserContext.Provider>
}

export default App;
