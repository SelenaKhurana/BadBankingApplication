function Home(){

	// Setting up some state and context variables
    const [show, setShow]      = React.useState(true);
    const [email, setEmail]    = React.useState('');
    const currentUser          = React.useContext(UserContext);

    // Get Current Authentication Status
    auth.onAuthStateChanged((userCredential) => {
        if (userCredential) {
            setShow(false);
            // If the user is logged in...
            console.log("Initializing ------------------------------------------------")
            console.log("Login Page Current User: ")
            console.log(userCredential);
            currentUser.user = userCredential;
            console.log(`Current Email: ${currentUser.user.email}`)
            console.log(`Current UID: ${currentUser.user.uid}`)
            console.log("End Initializing ------------------------------------------------")
            setEmail(currentUser.user.email)
        } else {
            // If the user is logged out...
            setShow(true)
            console.log("No User Logged In")
            currentUser.user = {};
        }
    })

    return(
        <>
        <Card 
			bgcolor  = "light"	
			txtcolor = "dark"
			header   = {
						<>
						<h3>
						<table className="table table-borderless">
							<thead>
								<tr>
								<th>Welcome to &#127963;Selena's Bank!</th>
								<th className="text-right">
									<div className = "badge bg-light text-dark"> {show ? 
									<>No Active User</> :
									<>{email}</>} 
									</div>
									</th>
								</tr>
							</thead>
						</table>
						</h3>
						</>
						}
			title="Welcome to Selena's Bank! Where banking is convenient and easy"
			body={
				<>
					<div className="text-center">	
						<img src="bank.jpg" className="img-fluid center" alt="Responsive image" width="50%"/>
					</div><br/>
					
					At &#127963;BadBank we strive to put the minimum amount of effort into our site and security so that it is very easy for us and others to take all of your money. See some of these reviews from our customers:<br/><br/>
					
					<div className="card">
					<div className="card-body">
					<h5 className="card-title">&#9733;&#9734;&#9734;&#9734;&#9734;</h5>
					<h6 className="card-subtitle mb-2 text-muted">Alex G. from Rochester, NY </h6>
					<p className="card-text">Too easy to use that someone could steal from my account easily. Not sure if I would recommend.</p>
					</div>
					</div><br/>
					
					<div className="card">
					<div className="card-body">
					<h5 className="card-title">&#9733;&#9733;&#9734;&#9734;&#9734;</h5>
					<h6 className="card-subtitle mb-2 text-muted">Thomas N. from Miami, FL</h6>
					<p className="card-text">I was able to get out as much cash as I needed in a short amount of time. Unfortunately the next person was able to steal my pin.</p>
					</div>
					</div><br/>
					
					<div className="card">
					<div className="card-body">
					<h5 className="card-title">&#9733;&#9733;&#9734;&#9734;&#9734;</h5>
					<h6 className="card-subtitle mb-2 text-muted">Maddy G. from Raleigh, NC</h6>
					<p className="card-text">It is too easy to be able to see everyone's private information.</p>
					</div>
					</div>
				</>
            }
		/>
        </>
    )
}
