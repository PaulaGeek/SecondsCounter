import React  from "react";
const SecondsCounter = (props) => {
	return (


<div>
	<div className="d-flex bg-dark">

				
	           <div className="primerDigito mx-3 bg-info bg-opacity-75 text-black my-3 rounded text-center" style={{width:"40px", height: "55px"}} > <h1>
				<img style={{width:"40px", height: "40px"}} src="https://cdn-icons-png.flaticon.com/512/27/27133.png" alt="" /> </h1>
				</div>
				<div className="primerDigito mx-2 bg-info bg-opacity-75 text-black my-3 rounded text-center" style={{width:"40px", height: "55px"}}> <h1>
				{props.numero6} </h1>
				</div>
				<div className="segundoDigito mx-2  bg-info bg-opacity-75 text-black  my-3 rounded text-center" style={{width:"40px", height: "55px"}}> <h1>
				{props.numero5} </h1>
				</div>
				<div className="tercerDigito mx-2  bg-info bg-opacity-75 text-black  my-3 rounded text-center" style={{width:"40px", height: "55px"}}> <h1>
				{props.numero4} </h1>
				</div>
				<div className="cuartoDigito mx-2  bg-info bg-opacity-75 text-black  my-3 rounded text-center" style={{width:"40px", height: "55px"}}> <h1>
				{props.numero3} </h1>
				</div>
				<div className="quintoDigito mx-2  bg-info bg-opacity-75 text-black  my-3 rounded text-center" style={{width:"40px", height: "55px"}}> <h1>
				{props.numero2} </h1>
				</div>
				<div className="sextoDigito mx-2  bg-info bg-opacity-75 text-black  my-3 rounded text-center" style={{width:"40px", height: "55px"}}> <h1>
				{props.numero1} </h1>
			</div>

			</div>
			</div>



	);
};

export default SecondsCounter;
