import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "./../UI/ErrorModal";
const AddUser = (props) => {
  //* state 관리
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //! add버튼 클릭 될 때 마다 실행되는 함수
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    //! 기본적으로 enteredAge는 문자열 -> 숫자열로 변환위해 +를 붙여준다
    if (+enteredAge < 1) {
      return;
    }
    // App.js로 이 두개의 인자를 보낸다 -> 그곳에서 함수가 실행됨
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <div>
      <ErrorModal
        title="An error occured!"
        message="Something went wrong!"
      ></ErrorModal>
      {/* Card는 사용자 정의 컴포넌트 -> css적용할 때 props로 class를 받아줘야 됨 */}
      <Card className={classes.input}>
        <form action="" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={enteredUsername}
            id="username"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            value={enteredAge}
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
