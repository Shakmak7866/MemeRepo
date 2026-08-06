import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
Here is a good place to write what I would like to do.
As the name suggests, this is a meme repository.
In a very general overview, the website will let a user login, upload their memes, view them, or delete them.
The whole idea was inspired by when I needed to find a meme, but my whole gallery was disorganized. Either my memes were in screenshots, or downloads.
So, instead of just making albums in my gallery like any normal person would do, ill make an entire website just for that.
I'm not too sure about making an app for it yet, but that could be a good idea. If someone downloads, or screenshots a meme, they can just upload it to memerepo.

Lets say that a new user goes to the website for the first time. It should take them to the login screen. If they have an account, they just put their email and password, and they can log in.
If not, then they can just sign up right then and there.

Shout out to Freddy Fazbro: Give them the option to provide an email on sign up and in preferences that way if they want a way to recover their account, we can just do that!

So, once they login, they will be able to see card boxes showing:
- A picture of their meme ( Or just a placeholder image if its sound only )
- A title (optional)
- A description (optional)
- Date uploaded

The uploadable formats should be: 
- .jpg 
- .png ( Transparent )
- .gif
- .mp4 ( Videos )
- .mp3 ( Sound effects )

To a new user, there will be only one card box which shows an upload button.
Once they click it, they can add the information that they need

Once done, when they click out of it, they will see the card box with the updated information.
When they click it, they see the share, edit, and delete buttons.

For sharing, they should be given the normal options that you would expect, message, email, social media (discord), and mayber more.
I think sharing might be the hardest part.

Now that we have to base idea set up, we now have to think about the backend and retrieving the data.

Essentially, there are two webpages needed for this.
The first is the login page where you can either create an account or login.
The second is the actual meme page.

The login page is actually pretty generic, so any tutorial online is there in case you need help.
But most likely, it will just have two text boxes and two buttons. One for login, and one for sign up.
User will enter in username and password, and click login.
What will happen if already in db:
- The button will fetch from the backend which will search the database for the username and password.
- If there is a match, then the backend will get all the data saved under the user *** (We need to figure out how to save the data. Because remember, it is the meme itself and a bunch of text.)
- It will then upload the main webpage with all the memes that the user has

What will happen if not in db:
- The button will fetch from the backend which will run a search.
- Once it doesn't find a match, it will return a message to the user that either the username or password is incorrect, and to try again.

Clicking the Sign Up button, it will take them to the sign up page.
They will make a username and password. It will have a third optional box saying to enter in an email for account recovery. They will have to click a box saying they understand the warning.
( Lowkey should make a terms and conditions page that says nothing but nonsense. )
After they confirm everything and press the create account button, it will send a request to the backend to check that no other user has the same username and password.   
If not, then create the account in db, and then return a success message to the user, and take them to the meme page.

The meme page will have a grid of meme cards. For new users, the only thing there will be a place holder card that only has the image of a plus sign and text saying "Add Meme".
Once they click it, there will be an upload box where they can upload their meme, and add the necessary information.
After they click save, it will send a request to the backend which will save the meme card info to the data base under that user.
Then, the meme page will refresh showing their new meme card and an additional add meme card.

One important feature I would like to add is a search bar where you can either search the title or description of the meme.

Let us first focus on these features. Once I get to the main aspect of the website, I can focus on the email and sharing part.

For now, lets focus on the front end aspect of getting all the visuals in place.

We will start with the main page.
Create the card boxes. With react, all we have to do is create one component, and then we can just add as many as we want.
*/