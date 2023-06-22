import { styled } from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 250px;
  background: lightgray;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
`;

export const Overlay = (props) => {
  return <Backdrop onClick={props.clickHandler}/>;
};

export const Modal1 = (props) => {
  return (
    <>
      <Overlay />
      <Container>
        <p>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <button onClick={props.clickHandler}>닫기</button>
        <button>확인</button>
      </Container>
    </>
  );
};

export const Modal2 = (props) => {
  return (
    <>
      <Overlay clickHandler={props.clickHandler}/>
      <Container>
        <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
        <button onClick={props.clickHandler}>닫기</button>
      </Container>
    </>
  );
};
