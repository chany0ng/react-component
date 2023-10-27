import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "./../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  //* state 관리
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  // 이 함수를 모달 닫기버튼과 배경에 onClick적용을 한다
  const errorHandler = () => {
    setError(null);
  };

  //! add버튼 클릭 될 때 마다 실행되는 함수
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Input",
      });
      return;
    }
    //! 기본적으로 enteredAge는 문자열 -> 숫자열로 변환위해 +를 붙여준다
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }
    // App.js로 이 두개의 인자를 보낸다 -> 그곳에서 함수가 실행됨
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
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
    </Wrapper>
  );
};

export default AddUser;
