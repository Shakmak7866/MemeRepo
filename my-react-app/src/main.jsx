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
*/