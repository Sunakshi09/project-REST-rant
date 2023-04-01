const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
				<title>Title</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
				<link rel="stylesheet" href="/css/style.css" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
			</head>
			<body>
				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/places">Places</a>
						</li>
						<li>
							<a href="/places/new">Add Place</a>
						</li>
					</ul>
				</nav>
				{html.children}
				<footer className="footer">Resume | Portfolio | Linkedin </footer>
			</body>
		</html>
	)
}

module.exports = Def