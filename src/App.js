
import CardUI from "./components/CardUI";

const App = (props) =>  {
  return (
    <div className="app">
       <CardUI
          title="User Licence"
          para="All the users in your licence, active, Invited and available."
          num1="100"
          para1="Available"
          num2="12"
          para2="Invited"
          num3="16"
          para3="Activated"
       />
       <CardUI
          title="Permission Licence"
          para="All the users in your licence, active, Invited and available."
          num1="70"
          para1="Available"
          num2="6"
          para2="Invited"
          num3="12"
          para3="Activated"
       
       />
       <CardUI
          title=" Guest User Licence"
          para="All the users in your licence, active, Invited and available."
          num1="1000"
          para1="Available"
          num2="45"
          para2="Invited"
          num3="15"
          para3="Activated"
       />
    </div>
  );
}

export default App;
