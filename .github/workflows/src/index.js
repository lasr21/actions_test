
// stepper

// reverse parse markdown from bot comment, determine which step the PR is on:

// * Participated in 2020
//   * no - close PR
// * SDP?
//   * no - request changes
// * Shipping form complete?
//   * no - request changes
// * Correct file path
//   * no - request changes
// * Markdown correct?
//   * no - request changes
// * Follows COC
//   * no - close PR
// * congrats!
// * merge PR

// Load .env in dev
if(!process.env.GITHUB_ACTIONS) {
  const result = require('dotenv').config()

  if (result.error) {
    throw result.error
  }
}

feedback.push("miau miau miau")

  let feedBackMessage = ""
  if(closePR) {
    feedBackMessage = "I'm really sorry! It looks like you've already graduated in a previous year. This is for first time grads!"
  } else if(feedback.length) {
    feedBackMessage = `
### I have a few items I need you to take care of before I can merge this PR:\n
${feedback.join('\n')}



${ feedBackMessage }
`, feedback.length ? "REQUEST_CHANGES" : "APPROVE")
    } catch(err) {
      console.log(err)
    }

  if(closePR) {
    try {
      await octokit.addClosedLabel()
      await octokit.closePR()
    } catch(err) {
      console.log("failed to close PR")
      console.log(err)
    }
  }

  if(feedback.length) {
    console.log(feedback.join('\n'))
    process.exit(1)
  }
})()
} catch(err) {
  console.error(err)
  process.exit(1);
}

