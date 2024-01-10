# Xenonstack Website task
# Pre-requisites:

1) Nodejs
2) MongoDB

1) Open the terminal, enter `npm i` to install all the dependencies
2) To launch the server, enter command `nodemon start`.

![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/2557c1ba-900e-44e6-b816-7e4aaab32698)


# To register the user:
![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/2cb64e65-bde9-4ccf-adf0-28c78523ce6c)


1) Click on signup button on the top right corner.
2) Enter your details and click submit.


As soon as the user clicks on submit, the form data containing username, email, password and confirm password is sent to the server via request object. 
At the serverside, we access the form data through the incoming request.body object.
Now first we check whether the password matches the confirm password, if it doesnot we send it back to the signup page, otherwise we moveon to the next step wherein we check if any user with the specified email ID exists or not, if it does, we send it back to the signup page, otherwise we moveon to the next step wherein we register the user. After which user.save() method is called before which due to our custom middleware which we have set in the user model our password gets encrypted using bcrypt library (using 10 salt rounds).
![image](https://user-images.githubusercontent.com/68241382/191223899-3e12ec78-6985-4717-ab11-4613ccff78e3.png)


# To Login the user:
![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/e7f96b09-61d8-47be-8419-e3f8f179aad0)


1) Click on Sign in button on the top right corner.
2) Enter your details and click submit.

![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/f9e54d16-2c85-4d3f-af7a-9b799eddafe2)


As soon as the user clicks on submit the form data containing email and password is sent to the server via request object. 
At the serverside, we access the form data through the incoming request.body object.
Now first we check if any user with the specified email ID exists or not, if it doesnot, we send it back to the signin page, otherwise we moveon to the next step wherein we check if the password matches or not using bcrypt.compare() method,

![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/59a89daf-6c98-4488-be95-93e129511034)


which compares the password from the request object with the encrypted password which we have saved in our database and returns true or false respectively. If it returns true then we send a cookie from the server side.

![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/0db3d88a-a9bb-4199-87f4-d9830221c7c2)


After this the user gets redirected to the profile page, before which we extract the user from request.cookies.

!![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/8b8cdca2-360d-49ee-930d-166035cc1bda)



# To log out
![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/cf7ab1d2-f96b-4efa-b697-fd6ce3508a4f)

1) Click on Log out button on the top right corner.


As soon as the user clicks on Logout button we simply remove the cookie from the request object and redirect the user to the sign in page.
![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/e5d976aa-0f9b-4d53-98c4-ad4fd6cd540d)

# To Contact us
![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/6c7a3d5a-894d-40bf-9e2a-17196939aad7)


1) Click on Contact us button on the top right corner.
![image](https://github.com/logan-git-art/Xenon-Stack-Task-website-/assets/84459081/d7c6fa38-30fc-4e33-ba30-b142be904702)


