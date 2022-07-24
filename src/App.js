import "./App.css";
import Table from "./components/Table";
import React from "react";
import Info from "./components/Info";
import { FaGithub } from "react-icons/fa";
function App() {
  const data = [
    {
      value: "",
      id: "1",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "2",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "3",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "4",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "5",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "6",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "7",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "8",
      isClicked: false,
      borderColor: "black",
    },
    {
      value: "",
      id: "9",
      isClicked: false,
      borderColor: "black",
    },
  ];
  const [valuData, setValuData] = React.useState(data);
  const [boxText, setboxtext] = React.useState("X");
  const [disabled, setDisabled] = React.useState(false);
  const [bord, setBord] = React.useState("black");
  const [winner, setWinner] = React.useState("");

  function changeBoxText() {
    if (boxText === "X") {
      setboxtext("O");
    } else {
      setboxtext("X");
    }
  }
  function Reset() {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    setValuData((prev) => {
      return prev.map((item) => {
        return { ...item, value: "" };
      });
    });
  }
  function WhoIsWinner(BoxTextData) {
    if (
      BoxTextData[0].value === BoxTextData[1].value &&
      BoxTextData[0].value === BoxTextData[2].value &&
      BoxTextData[0].value !== ""
    ) {
      console.log("winner is ", BoxTextData[0].value);
      setWinner(BoxTextData[0].value);
      Reset();
    }
    if (
      BoxTextData[3].value === BoxTextData[4].value &&
      BoxTextData[3].value === BoxTextData[5].value &&
      BoxTextData[3].value !== ""
    ) {
      console.log("winner is ", BoxTextData[3].value);
      setWinner(BoxTextData[3].value);
      Reset();
    }
    if (
      BoxTextData[6].value === BoxTextData[7].value &&
      BoxTextData[6].value === BoxTextData[8].value &&
      BoxTextData[6].value !== ""
    ) {
      console.log("winner is ", BoxTextData[6].value);
      setWinner(BoxTextData[6].value);
      Reset();
    }
    if (
      BoxTextData[0].value === BoxTextData[3].value &&
      BoxTextData[0].value === BoxTextData[6].value &&
      BoxTextData[0].value !== ""
    ) {
      console.log("winner is ", BoxTextData[0].value);
      setWinner(BoxTextData[3].value);
      Reset();
    }
    if (
      BoxTextData[1].value === BoxTextData[4].value &&
      BoxTextData[1].value === BoxTextData[7].value &&
      BoxTextData[1].value !== ""
    ) {
      console.log("winner is ", BoxTextData[1].value);
      setWinner(BoxTextData[1].value);
      Reset();
    }
    if (
      BoxTextData[2].value === BoxTextData[5].value &&
      BoxTextData[2].value === BoxTextData[8].value &&
      BoxTextData[2].value !== ""
    ) {
      console.log("winner is ", BoxTextData[2].value);
      setWinner(BoxTextData[2].value);
      Reset();
    }
    if (
      BoxTextData[0].value === BoxTextData[4].value &&
      BoxTextData[0].value === BoxTextData[8].value &&
      BoxTextData[0].value !== ""
    ) {
      console.log("winner is ", BoxTextData[0].value);
      setWinner(BoxTextData[0].value);
      Reset();
    }
    if (
      BoxTextData[2].value === BoxTextData[4].value &&
      BoxTextData[2].value === BoxTextData[6].value &&
      BoxTextData[2].value !== ""
    ) {
      console.log("winner is ", BoxTextData[2].value);
      setWinner(BoxTextData[2].value);
      Reset();
    }
  }
  function ClickItem(id, e) {
    // console.log(e)
    if (e.target.innerText === "") {
      changeBoxText();
      setValuData((prevData) => {
        return prevData.map((element) => {
          return element.id === id
            ? { ...element, value: boxText, isClicked: true }
            : element;
        });
      });
      WhoIsWinner(valuData);
    } else {
      setValuData((prevData) => {
        return prevData.map((item) => {
          return item.id === id ? { ...item, borderColor: "red" } : item;
        });
      });
      setTimeout(() => {
        setValuData((prevData) => {
          return prevData.map((item) => {
            return { ...item, borderColor: "black" };
          });
        });
      }, 1000);
    }

    console.log(e.target.parentElement);
  }
  const TableElements = valuData.map((item, index) => {
    return (
      <Table
        clickTest={item.isClicked}
        ClickItem={(e) => ClickItem(item.id, e)}
        id={index + 1}
        key={index + 1}
        value={item.value}
        borderColor={item.borderColor}
      />
    );
  });
  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");
  const [detectEnter, setDetectEnter] = React.useState(false);
  function GetPlayerOne(e) {
    setPlayer1(e.target.value);
  }
  function GetPlayerTwo(e) {
    setPlayer2(e.target.value);
  }
  function SetNames(e) {
    if (e.keyCode === 13) {
      console.log(player1, player2);
      setDetectEnter(true);
    }
  }

  return (
    <div className="All">
      <div className="App">
        <Info />
        <div className="first">
          <input
            onKeyDown={SetNames}
            onChange={GetPlayerOne}
            placeholder="player1..."
          />
          <h1>TicTacToe with React</h1>
          <input
            onKeyDown={SetNames}
            onChange={GetPlayerTwo}
            placeholder="player2..."
          />
        </div>
        <div className="players">
          {detectEnter && player1 && player2 && (
            <h2>
              Player1:<span>{player1}</span>
            </h2>
          )}
          {winner && (
            <h2 className="winneris">
              Winner is {winner === "X" ? player1 : player2}
            </h2>
          )}
          {detectEnter && player2 && player1 && (
            <h2>
              Player2:<span>{player2}</span>
            </h2>
          )}
        </div>

        {player1 && player2 && detectEnter && (
          <div className="table">{TableElements}</div>
        )}
      </div>
      <a target="blank" href="https://github.com/memmedov-karim">
        <span>Made By Karim,This is my github profile</span>
        <FaGithub className="git" />
      </a>
    </div>
  );
}

export default App;
