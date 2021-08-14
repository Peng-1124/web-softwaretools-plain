# content
- [Abstract](#Background) 
  - [Motivation for the project and framing of the problem and a high-level overview of the system.](#Motivation-for-the-project-and-framing-of-the-problem-and-a-high-level-overview-of-the-system.)
  
# Background

# Abstract

## Motivation for the project and framing of the problem and a high-level overview of the system.

With the continuous development of society, people's living standards are improving and keeping pets has also become a hot topic. More and more people begin to keep pets. Although pets may have hair loss and health problems in, keeping pets can directly improve the happiness of families through long-term consideration. Besides, as the saying goes, pets are man's best partners.  At the same time, the proportion of online shopping consumption in people's life is also increasing. The proportion of online shopping is increasing year by year compared with offline shopping.  The pet industry especially online pet business is a 100 billion market with a growth rate of 27%. From 1999 to 2009 alone, it increased by nearly 500% in the past 10 years[1].  Finally, the motivation of this project is to help a person who are trying to set up his won pet selling website to sell pets. What we need to analyze, design and develop a whole pet selling website to help him sell well as well as promote the development of pet online selling.

Our problem is that we need to help 

In a word, the goal of this project is going to help a pet store owner to design and develop his own pet website. At first, we need to analysis the user requirement and define the target users through different ways. Moreover, we will design and develop the new feature as well as the popular oriented front end of this website to make this website more friendly to users in order to increase the sales volume of website owner. Finally, the whole group will test the framework of website towards different ways and then do the HCI evaluation. 

To achieve the goal of our project, based on the provided code, we intend to use Vue and element UI framework to write our front-end components. And use the Axios request library and swagger.io request API to request and deal data. We realize our functions by sending data, requesting data and processing data. So as to make a fully functional pet sales website. In addition, our program running environment is Node.

Towards this website, pet lovers can search, view, buy, check the pets they wants to buy. Moreover, the owner of this website can update his commodity information in order to let his goods sells well.



# Objectives

## The high level goals of the project and the contribution towards solving the problem. A checklist against which the team can evaluate their success

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/targetFigure.png)

### The objective of our project

a. Collect the needs of users in various ways and make corresponding plans. Before getting user feedback, you can analyze and design the basic functions and basic framework of the website.

b. Use the existing API to cooperate with each API through data processing. Develop and realize the functions required by users.

c. Use the front-end framework to reasonably design and analyze various designs of the existing website. Design and write the front end of the website. In the process of writing, I keep communicating with users, so as to get valuable information from user feedback. And iterate our products.

d. Practice agile development and team cooperation. The whole development process remains "transparent" and team members maintain frequent communication.

e. HCI evaluation. After the project is completed, the team members must make a summary and plan what to do in the future according to the user feedback. Where can we improve.

### Checklist detail

Based on the above analysis, our high-level goal of this project is to create an easy-to-use shopping website for pet merchants and its consumers. This is the most critical core issue of our project. This high-level goal can be broken down into the following checklist. 

1.	First, it needs to be able to function normally and pass our tests and user researches are essential.
2.	It needs to realize the core function of a pet shopping website. This can be further divided into the following objectives.
   The user can search for pets.
   The user can view the pet's information.
   The user can check the information of the pet he or she wants to buy.
   These contents constitute the core functions of the website and should be implemented first.
3.	In order to further make the website easy for users to use, it should have some extended functions. These functions can be roughly described as follows.
   The website should be friendly to most users, not just PC users.
   The website should allow consumers to easily find the pet they want.
   The website should be easy for merchants to manage. 
   Later in this report, we will describe these goals in further detail. These extended contents will be our priority when designing features.
4.	Finally, and most importantly, its functional design needs to be recognized by potential users. We will use some questionnaires, interviews with potential users and HCI evaluations to ensure that we achieve this goal. 

We will discuss the above small goals in the checklist to ensure that we can achieve the goals we want to achieve and understand their contribution to our high-level goals. 

In an article, the author proposes five perspectives for evaluating website design, including strategy, usability, style, content and search optimization.[2] Except that strategy is not included in the discussion of a computer science project, the remaining four perspectives help us think about the contribution of website features to high-level goals. 

In the second point above, the core functions of the website help us to achieve the high-level goals of the website from a content perspective. These core contents are essential for this pet website. Of course, the quality of the content also depends on the content that the seller can provide, but the quality issue is outside the scope of our discussion.

The expanded function of the website in the third point above has contributed to our high-level goals from multiple angles. The first is usability. Our website is expected to be mobile friendly, which will allow mobile users to use our website normally. Even if the merchant has a related mobile app (if there is one), there will still be users who are reluctant to download the app and tend to use the website, so mobile friendliness is important anyway.

Another point is search optimization, which measures how easy it is for potential consumers to find the pet they want. Leaving consumers lost in a large amount of information is undoubtedly detrimental to sales. Websites should use a variety of methods to allow consumers to easily find their favorite pets. We will show our functions in search later. 

Although it seems to have nothing to do with ordinary users, facilitating business management of website content also contributes to our high-level goals from the content aspect. We mentioned earlier that what kind of content sellers can provide has nothing to do with our website design, but we can make it easier for sellers to provide their content to customers. This is good for our goal.

After discussing the contribution to our high-level goals, in this report we will show how we achieved these goals. 



# System design

### Architecture and design of whole pet shop system

The description of the site structure is as follows.

The website will first enter a login interface. Here, users or administrators can choose to log in with their username. You can also register new users. Logging in with any kind of identity will later enter the main interface of the website.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/flow1.png)

The main interface implements the main functions of the website, and users can log out.

If you choose to log in as a normal user, the user can see all the pets listed in the form of a card here, and can search for pets by a variety of keywords. Keyword can be name, tag or id. The website also supports fuzzy search, and you can find the relevant content only by entering the part of the keyword. Users can also sort the listed pets. Users can click the button to buy pets.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/searchflow.png)

If you choose to log in as an administrator, the administrator can not only see the content seen by ordinary users (that is, search for pets on this page), but also delete pets or add tags to pets through the buttons on the card. Administrators cannot click the button to purchase pets. The purchase button is replaced by the button to add pets. Through this button, the administrator can enter the page for adding pets.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/deleteoraddtag.png)

In the page for adding pets, the administrator can add pictures from the file, enter the name and add tags for the pets they want to add. Click the OK button to complete the addition, and click the Back button to return to the main page. After refreshing, you can see the added pets.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/Pet-Adding-Module.png)

The overall picture description is shown below.
![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/Overall-Process.png)



## Sequence diagram and introduction 

The information exchange is as below. This figure shows how the information exchange in our project.
![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/background/informationExchange.png)


# Full description of all features

Ease of use is the core issue of our feature design. This is probably the most important thing that ordinary users think. About 76% of users believe that ease of use is the most important feature of a website.[3] In order to achieve this goal and complete our project within a limited time, we selectively implemented the following features, which are relatively important and could be technical challenges. 

1.	Mobile-Friendly Website
   We have implemented a mobile-friendly website by a **self-adapting webpage**, in order to benefit from the rapid development of the mobile Internet. Our UI layout can adapt to changes in page size, when the page size is not extreme. 
   Now the mobile Internet is becoming more and more popular and gradually becoming a very important part, many businesses will choose to make mobile apps, but mobile web pages are also very important. This project implements the second one because this is a website project.

2.	Searching in Website
   We have implemented a simple site search function, which can **search for pets by name and id, or filtering pets by tags**. The search function also supports **fuzzy search**, by which the target can be found by a part of the keyword. We also support **sorting search results**. This is an important feature to our website, since there must be a way for users to find the products they need.

3.	User System
   We have implemented a simple **user system**. Users can log in to the website for further operations, which improves the security of the website and reduces the difficulty of management. 
   This feature will also help us expand more user-related functions in the future and better serve users.

4.	Administrator System
   We have implemented a simple website management system that can **add, find, delete pets and add tags for pets**. This system is partially integrated with the user system. The system administrator can obtain this ability by logging in to the website with an administrator account. Our website is not only used by normal users, but also by administrators. This allows us to do these simple commodity information management tasks without relying on the IT team.

5.	Unit Test
   We have partially implemented **unit tests** in our code. Although this feature has nothing to do with the direct users of the website, it is still an important part of building a developer-friendly website. 

## References of Background

[1] https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CJFD&dbname=CJFDLAST2020&filename=CXZK202009022&v=fgJvOQGaDGBk5iS6T0rrSNGJVQyasQdnjOGHC1f3eMjxihrXnOKN21rmQF%25mmd2Bv2ZFu
[2]
https://www.straightnorth.com/insights/5-ways-evaluate-quality-your-website-design/
[3] 
https://blog.hubspot.com/blog/tabid/6307/bid/14953/What-Do-76-of-Consumers-Want-From-Your-Website-New-Data.aspx

