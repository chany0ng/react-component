import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  //! 이 함수를 받을 컴포넌트 내의 함수와 동일한 이름
  const addUserHandler = (uName, uAge) => {
    // state를 관리할 때, 최신의 스냅샷을 가져오려면 prev를 이용해서 가져와야한다.
    setUsersList((prevUsersList) => {
      //? spread를 이용해서 이전 모든 값을 가져온 후, 새로운 값을 추가한다
      //! 이름과 나이 뿐 아니라, 고유key값을 위해 랜덤한 id를 가지게 해준다
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div>
      {/* props로 함수 전달 */}
      <AddUser onAddUser={addUserHandler} />
      {/* props로 데이터 전달 */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
