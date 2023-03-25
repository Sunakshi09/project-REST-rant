const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Home</h1>
              <div>
                <img src="/images/Strawberry Mango Peach Smoothies-drink.jpg" alt="Three Fruit Smoothies" />
                <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
                </div>
              <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
          </main>
      </Def>
    )
  }
  module.exports = home



     