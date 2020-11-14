import React from "react"
import Navbar from "./Navbar"
import { Switch,Route } from "react-router-dom"
import AllCategories from "./AllCategories"
import MobilePhones from "./MobilePhones"
import Cars from "./Cars"
import Motorcycles from "./Motorcycles"
import TV from "./TV"
import Tablets from "./Tablets"
import PostAdd from "./PostAadd";
import Details from "./DetailsProduct";
import Houses from "./Houses"
import LoginSetting from "./LoginSetting"




const App = () =>{

return (<React.Fragment>
 

<Navbar />
<Switch>

<Route exact path="/" component={AllCategories} />
<Route exact path="/mobile" component={MobilePhones} />
<Route exact path="/cars" component={Cars} />
<Route exact path="/motorcycles" component={Motorcycles} />
<Route exact path="/houses" component={Houses} />
<Route exact path="/tv" component={TV} />
<Route exact path="/tablets" component={Tablets} />
<Route exact path="/addpost" component={PostAdd} />
<Route exact path="/details" component={Details} />
<Route exact path="/login" component={LoginSetting} />


</Switch>

</React.Fragment>)
}




export default App