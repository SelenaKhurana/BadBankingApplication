// Making the single page application

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

function Spa(){
    return (
        <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={
                {user: {}}}>
                <div className="container" style={{padding: "20px"}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount" component={CreateAccount} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Deposit" component={Deposit} />
                    <Route path="/Withdraw" component={Withdraw} />
                    <Route path="/Activity" component={Activity} />
                </div>
            </UserContext.Provider>
        </div>
        </HashRouter>
    )    
}

// Rendering the navbar in the root
ReactDOM.render(<Spa/>, document.getElementById('root'));
