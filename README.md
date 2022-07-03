# Minimum.

Live Link: https://minimum-project.herokuapp.com/

Minimum is a project created by myself (Connor Burns) that is a clone of Medium, but presented in a more minimilistic fashion.

## Technologies Used
![](https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145)
![](https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642)
![](https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)
![](https://camo.githubusercontent.com/9a7c7ebbabb2096c0ad0cac6f64bc9fe93f4954a3ae3f51d6f3e076ba462aab1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d2532333539336438382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265647578266c6f676f436f6c6f723d7768697465)

## Building Instructions

- Download the repository from this GitHub repository.
- Navigate into both the **frontend** and **backend** directories and run **npm install** to download necessary dependencies.
- In the **backend** directory, create an **.env** file with appropriate corresponding data to the already existing **.env.example** file.
- Run **npx dotenv sequelize db:migrate** and **npx dotenv sequelize db:seed:all** to migrate and seed the database.
- In both the **frontend** and **backend** directories in seperate terminals, run **npm start** to start the server and to view the site on **localhost 3000**.

## Demonstration

#### Home Page:
At the home page, you can either log in/sign up - or if you'd like you can start reading without logging in (some features will be disabled). 
For ease of use, a demo user has been adding that you can click and will complete the log in process for you, allowing you full access to the site.
![](https://user-images.githubusercontent.com/97809578/176768165-0521f3b9-e492-4f60-8079-9482737ff5d7.png)

#### Articles Page:
Once logged in you will be taken to all articles and from here you can view any article you'd like as well as write an article, logout, navigate to the landing page, etc.
![Screenshot (113)](https://user-images.githubusercontent.com/97809578/176768423-e8278372-74ff-4784-bd2a-2534a4cbd75e.png)

#### Single Article Page: 
At the single article page, you can read your article and also view the comments for the article and add a comment if you'd like. Once created, you can edit/delete the comments you've made.
![Screenshot (114)](https://user-images.githubusercontent.com/97809578/176768809-c60480d5-f66c-41ff-941b-a9b66aa9d319.png)
![Screenshot (115)](https://user-images.githubusercontent.com/97809578/176768853-f560a2f9-7398-4fa7-b818-d2e4d05e6d47.png)

#### Create an Article Page:
If you click the pen on paper icon on the left sidebar, you will be directed to the create article page where you can create an article for yourself! If your article does not meet the specifications, you will be alerted via error handlers
![Screenshot (116)](https://user-images.githubusercontent.com/97809578/176769067-9d7a539c-9038-4d9f-8b66-a5e79b1e14c7.png)

## Conclusion

Thank you for taking the time to view my repository and I hope you enjoyed!
