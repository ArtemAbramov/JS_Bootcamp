const layout = require('../layout')

module.exports = ({ req }) => {
    return layout({ content: `
          <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" type="email" placeholder="email">
                <input name="password" type="password" placeholder="password">
                <input name="passwordConfirmation" type="password" placeholder="password confirmation">
                <button>Sign Up</button>
            </form>        
          </div>
    `})
}
