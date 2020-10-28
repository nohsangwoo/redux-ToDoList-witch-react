import React, { useState } from "react";
import { connect } from "react-redux";

function Home(props) {
  console.log(props);
  const { toDos } = props;
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// 첫번째 argument(state)는 store.js의 state값이고
// 두번째 argument는 (ownProps) component의 props임 여기는 App.js에서  react-router-dom에의해 넘겨받은 props를 말함
function getCurrentState(state, ownProps) {
  return { toDos: state };
}

// connect store.js에 있는 data를 현재 Home.js로 연결해서 사용가능하게 해줌
export default connect(getCurrentState)(Home);
