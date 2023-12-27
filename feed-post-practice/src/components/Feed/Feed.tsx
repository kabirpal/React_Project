import { Link } from 'react-router-dom'

function Feed() {
  return (
		<>
			<div style={{display:"flex", justifyContent:"center", margin:"20px"}}>
				<div className="card" style={{width:"500px"}}>
					<img src="https://th.bing.com/th/id/R.52cdefa2b9ebe29074d8a1480b9e5667?rik=kfy7kyv9qJ1x3g&pid=ImgRaw&r=0" className="card-img-top" alt="..."/>
					<div className="card-body">
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/Delete" className="btn btn-primary">Delete Post</Link>
					</div>
				</div>
			</div>
			<div className="alert alert-danger d-flex align-items-center" role="alert">
				<svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use href="#exclamation-triangle-fill"/></svg>
				<div>An example danger alert with an icon</div>
			</div>
		</>
		)
}

export default Feed