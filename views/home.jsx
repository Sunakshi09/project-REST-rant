const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="/images/Strawberry Mango Peach Smoothies-drink.jpg" alt="Three Fruit Smoothies" />
                <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
                </div>
              <a href="/places">
        <a href="#" class="btn btn-info" role="button">Places Page</a>
    </a>
    </main>
      </Def>
    )
  }
  module.exports = home



     
