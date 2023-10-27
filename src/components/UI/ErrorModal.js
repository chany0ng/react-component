import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    // modal이 실제 사용되는 AddUser컴포넌트에서 import해서 사용한다
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
