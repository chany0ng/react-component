import classes from "./Card.module.css";
const Card = (props) => {
  return (
    //! Card컴포넌트는 껍데기인 UI로 여기저기서 사용된다
    //! class에 props를 여러개 넣어놔서, 추가적인 css가 다른곳에서 적용할 수 있도록 한다.
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
