let history = " ";

      function UserClicked(input) {
        document.getElementById("result").value += input;

      }
      function Calculation() {
        let expression= document.getElementById("result").value;
        let resultSet = eval(expression);
        document.getElementById("result").value = resultSet;
        var expressionSet= expression+"="+resultSet;
       logHistory(expressionSet);

      }
      function ClearData() {
        document.getElementById("result").value = "";
        logHistory("\n ")
      }

      function logHistory(value){
        history+=value;
        document.getElementById("history_log").innerText=history;
      }
