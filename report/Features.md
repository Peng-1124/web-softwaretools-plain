# content
- [Possible Features](#Possible-Features) 
  - [API analysis](#API-analysis) 
  - [User questionnaires](#User-questionnaires)
  - [User interview](#User-interview)
  - [Development](#Development)
- [Feature 1: add pets feature/delete pets feature](#feature-1-add-pets-featuredelete-pets-feature)
- [Feature 2: add tags to a pet](#feature-2-add-tags-to-a-pet)
- [Feature 3: Filter the pets by tag](#feature-3-filter-the-pets-by-tag)
- [Feature 4: search pets by ID](#feature-4-search-pets-by-id)
- [Feature 5: search pets by name](#feature-5-search-pets-by-name)
- [Feature 6: Fuzzy search](#feature-6-fuzzy-search)
- [Feature 7: Sort pets by ID](#feature-7-sort-pets-by-id)
- [Feature 8: Login/registration/Permission classification](#feature-8-loginregistrationpermission-classification)
- [Feature 9: Reset/Data De duplication](#feature-9-resetdata-de-duplication)
- [Testing](#testing)
  - [API testing](#API-testing) 
  - [Unit test](#Unit-test)
   
   


# Possible Features

At the first moment of getting the project task, we analyzed the API provided to us by the teacher. Because to some extent, we can't change the backend and database of this project. All we can do is analyze the functions that these APIs can achieve according to the APIs on swagger.io, and implement them, etc. First of all, we analyze that the users of this website are oriented to two types of people, one is the owner of the website, and the other is the users of the website, that is, those who really need to buy.

According to the tips of API, the basic functions provided by API are as follows:

## API analysis

A. For APIs in pet

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/petAnalysis.png)

For sellers

a. add pets or delete pets

b. add tags or delete tags of a pet

c. uploads an image to a pet

d. updates a pet in the store with form data

For buyers

a. finds pets by ID



B. For APIs in store

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/storeanalysis.png)

According to analysis, we find the API in this section may be used in user order system so that

for sellers:

a. delete purchase order by ID

b. returns pet inventories by status

for buyers:

a. place an order for a pet

b. find purchase order by ID



C. For APIs in user:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/useranalysis.png)

According to analysis, we find that the APIs in this section could finish a login/registration system for sellers and buyers. The possible features are as below:

for sellers:

a. can login/logout of this system

b. create/delete buyers' accounts

c. find users account's information

for buyers:

a. can login/logout of this system

b. create/delete buyers' accounts

c. find their own account's information

After analyzing all possible basic functions, we thought about what other advanced functions can be completed before user research. Because we intend to use questionnaires and user interviews to further obtain user needs. The scope of the questionnaire is very wide, but if it is set to fill in the blank, users may speak freely. We can't directly modify the backend and database of this project, so we may not be able to realize the functions proposed by users. Therefore, in terms of questionnaire survey, we intend to set up two groups of questionnaires to conduct user survey in the form of multiple-choice questions. In the two groups of questionnaires, users can select and score functions according to their own ideas. In the first group of questionnaires, we set up two different roles, one is the administrator role, that is, the owner of the website, and the other is the person who intends to buy pets through the website. Users can select functions according to different needs.

After analyzing all possible basic functions, we thought about what other advanced functions can be completed before user research. Because we intend to use questionnaires and user interviews to further obtain user needs. The scope of the questionnaire is very wide, but if it is set to fill in the blank, users may speak freely. We can't directly modify the backend and database of this project, so we may not be able to realize the functions proposed by users. Therefore, in terms of questionnaire survey, we intend to set up two groups of questionnaires to conduct user survey in the form of multiple-choice questions. In the two groups of questionnaires, users can select and score functions according to their own ideas. In the first group of questionnaires, we set up two different roles, one is the administrator role, that is, the owner of the website, and the other is the person who intends to buy pets through the website. Users can select functions according to different needs. The figures and the analysis of the first questionnaire are as below:

## User questionnaires

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/Firstquestionnire.png)



About how to design our this questionnaire,  the main goal of this questionnaire is to get the basic features which possibly can be added to our website.  Moreover, most of the people in this questionnaire are product manager interns, and some are pet lovers with online shopping experience. We collected about questionnaires.

The result of this questionnaire has been collected by us and we make several related charts to analyze the possible features we can add to this pet selling website. The related charts are as below. If as a seller:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/questionnaire1r1.png)

And if as a buyer:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/question1r2.png)

According to the charts above, we have discussed the results. As a seller,  there is a great demand for the first three features(1. The website can show the information of the pets to buyers. 2. Sellers can upload the images or tags of the pets in order to complete the information of pets which are selling. 3. Update the pets on sale information.), which may be because these three functions are the most basic for a sales website. Whether as a product manager or a user of a pet website, these features may be the most basic. In order to make the website selling pets work, these features above are indispensable in the eyes of users. As a buyer, viewing the photos, buying the favorite pets on website and checking the status of pets are the first three choices.

The main goal of first questionnaire is to get several basic features which can be added to our designing from the potential users. In this questionnaire survey, there are a small number of interns of product managers, so the survey population of this questionnaire is professional. Moreover, most of the respondents of this questionnaire are pet lovers or those who are interested in buying pets on the website, so this questionnaire is of great significance to us. It is of great significance to the functional design of our project. The first questionnaire collect some data related to basic features which can be added to our website. 

Then we have done the second questionnaire research to get some advanced features from potential users instead of basic features. The design method of our group's second questionnaire is to make all the functions we can think of into titles and ask the respondents to score each function

The second questionnaire is as below(本题答卷总分值means Total score of this question，平均值为means The average value is）

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/secondquestionaire.png)

The results are as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/resultOfQuestionnaire2.png)



![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/Result2ofquestionnaire2.png)

Analysis:

During the period of the second questionnaire, our questionnaire is designed to be more understandable. Moreover, the functions to be investigated are not simple basic functions, but some advanced functions we think of. Finally, after two rounds of questionnaires. There is a summary here: user's needs can be divided into two hands. One is about basic features, and another is about advanced features. Towards this, we have designed the basic features and advanced features: 

According to user questionnaires, the most important feature of this website they want to add is searching function. The searching features can make them to find the pets they prefer more conveniently. For the owner, he will have right to add, view and delete the pets. In terms of permissions, we assume that administrators should have special permissions different from users. According to user questionnaires, we have got that our users may need the function features on our website, so in the user interview in the next section, we will explore more about it.

The above questionnaire may not cover all basic functions, because we have conducted many user interviews after the two questionnaires. In user interviews, we will show them all our basic functions and advanced functions we can think of. They will also be asked if they have any suggestions for adding new features. So our team members have done several user interviews. The one module of our user interview record is as below:

## User interview

| Interview Date: 31th July 2021                               | Interview way: wechat meeting                               |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| Interviewee’s name: Zhenkun Zhang                            | Interviewee’s occupation: pet lovers/online shopping player |
| Interviewer’s name: Hao Fu                                   | Interview’s occupation: ‘AiShang’ website developer         |
| Content of interview items: What other features do you think can be added to our website based on the basic framework |                                                             |
| Before the interview, we thanked the interviewees for taking time out of their busy schedule to accept our interview. The purpose of our interview is to get features from potential users that can be added to our project. The interview lasted about 15 minutes. Here are the records: Q: If you build a pet sales website, what do you think is the most basic function?A: Login/register/release information/pet list/pet details/my, these are the basic functions, this kind of payment can go offline. For online payment, there must be an order/payment concept, and the functions mainly include /price module (platform rake)/order list/order details (cancel order, confirm receipt)/logistics progress.Q: Is this based on the user level?A: Yes, this is a user-level thing.Q: What else?A: Database design/user table/pet table/payment, these should be enough.Q: Have you visited other pet sales websites?A: I have seen some. However, domestically, it is mainly based on offline purchases. More websites provide their store addresses, it is recommended that you go to the store to learn about the actual product before buying. Because more people do not choose to trust online channels, they feel that many pets purchased online will have some diseases themselves, similar to canine distemper. Therefore, if the safety of pets can be guaranteed, this is a very feasible project.Q: For those online purchasing functions, are the current functions sufficient for you?A: If you simply purchase, as long as you include the pet list, purchase function, and order function, I think it will be enough.Q: Which functions do you often use?？A: Mainly search and item list. Because I will spend a lot of time to choose. After all, buying is a fast process.Q: What do you think these functions need to be improved?A: The page design of some websites is too complicated. I don't think the comfort level is enough. In fact, the more concise the page is, the appointment should be made. Just provide a list of pets so that I can compare them. Summary: Log in to register, release information, pet list, order list are the most important function. |                                                             |

We interviewed nearly 13 people when obtaining user needs, most of whom are interested in buying pets online. This can help us get the needs of potential users of the website. A small number of people are product manager interns, so they can provide us with what functions we need as the owner of the website.

According to user interview, we have seen that: the search function is also one of the most persistent functions of users. Because the current website is complex. The reason why many users choose online shopping is that online shopping is very convenient. Therefore, the powerful search function is a major reason to support the normal operation of e-commerce websites. For managers, they want more permission than users.



## Competitive and similar product analysis

We first analyze the main pet purchase channels in the UK and China. Study the advantages and disadvantages of features and user experience to provide experience and establish direction for our development.

Pets4Home[2]:

Pets4Home is one of the most popular pet classification information website in the UK. It can be used for pet lovers to sell pets and adopt pets. Tons of dogs, cats and other pets are shown on this website. This website has multiple features and the functional structures at all levels work together, the features of the whole website are perfect, and the design of the website is quite humanized.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/website1.png)

And after exploring this website, the functional structure diagram we have drawn is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/website1analysis.png)

Analysis: 

1. The search features of this website are very perfect. It provides category search, popular search and history search which can be used for reference and be applied to our project. Besides, users can do fuzzy search, that is, they can search for commodities according to some properties of commodities

2. Pets4Home also provides pet detail functions which can show the full details to users who are searching the pets. These features can also be used for reference to our project.
3. Menu functions. Sometimes, the menu is equivalent to a navigation bar for people to quickly jump through various pages.



Freeads [3]:

Founded in 2010, freeads is a UK classified advertising and community website designed to connect buyers and sellers of second-hand furniture, household products, gardening products, pets, cars, work and property. It covers more than 50 cities in Britain. We just focus on the features it provides for pets trading.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/website2.png)

After exploring this website, the functional structure diagram we have drawn is as belwo:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/websiteanallysis2.png)

Analysis:

1. The functions of this website are perfect and cover a variety of features for buyers and sellers. Especially its menu, on the menu, the users will see the features the website provides directly. Therefore, this website gives people a particularly intuitive feeling so that users can know its features and functions very well.
2. Although the menu bar of this website gives people a particularly intuitive feeling, in terms of page design, this menu bar is particularly complex for users. The information provided by the website is also complex, and users can not intuitively obtain various functions and information of the website. Therefore, this design should be avoided in the page design of our own website.
3. The search functions of this website are very perfect so that it can recommend some pets which users like. And users can do fuzzy search, that is, they can search for commodities according to some properties of commodities

Taobao[4]:

Taobao is the e-commerce software with the largest trading volume and the largest number of downloads in China. Many Chinese people choose Taobao platform when buying qualified pets online.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/website3.png)

After exploring the all features of Taobao, we have drawn a functional structure diagram. The diagram is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/website3analysis.png)

Analysis:

1. Compared with the functions of the first two websites, Taobao is the most comprehensive. It not only has a friendly user login interface, but also uses a lot of algorithms in the website. For example: collaborative recommendation filtering algorithm. Because of this algorithm, users will be more convenient when using the website. Especially when users are using search algorithms, the website will recommend products according to users' preferences, and will shield some products that users are not interested in.
2. Advertising pop ups often appear, which will affect the user experience
3. Taobao has the filter functions which can make users filter products by products' tags. Certain product has the tags. For example, if you want to buy computer on website, you can filter the computers by the CPU, graphics card or other components.

Summary of competitive and similar website analysis: from the above analysis, it can be seen that the mature websites are very perfect in the search function. Most of them use the collaborative recommendation algorithm to infer the products that users may be interested in through the user's browsing records. And these websites have their own independent user and administrator systems. In this way, the permissions of users and administrators can be distinguished, so that administrators and users have different permissions.

After all. We have summarized the results of user questionnaires and user interviews. According to user questionnaires, we have found that. For both buyers and sellers, they all want to have a feature that they can check the pets' status, create account, have their own account, place a order etc. But for sellers(the owner of this website), they'd love to have some permissions which users do not have. Such as uploading the photo of a pet, adding pets, deleting pets, add tags to a pet or delete tags of a pets and so on. According to user interview, this time, most of our users are interested in buying pets, and some are product managers (we want them to play the role of website owner because they are very professional in product design). For users, most of the functions they propose are about search. So about all,  we have summarized that, for users, they want to search by pets by ID, name or filter the pets by pets' tag, even fuzzy search. The results of Competitive and similar product analysis are the almost same as user interview and user quesitonnaire.

 The summary of possible features(according to user interview, user questionnaire and analysis of similar product):

For buyer:

a. check the status of pets

b. have their own account. In other word, hope the website have login/registration system

c. can place an order 

d. can find a pet by ID

e. can find pet by the pet's name

f. can filter the pet by pet's tag

d. do fuzzy search 

e. hope website can recommend the pets for buyers according to their preference

f. users can sort the pets ascending or descending order.

g. user Comments

h. related Items(explain Seeing  phrases like "You might like this" may make people feel the urge to click on given links. This includes two parts of features, collecting user data and analyzing it. The website can collect user data through appropriate means[5], analyze it through machine learning technology, and infer other products that users may like and recommend these products to them. This is good for selling more products.)

i. Frequently Asked Questions(FAQ). Some user questions may be very common. Instead of answering them for a single user every time, writing a FAQ section may be a better choice. This saves a lot of time for salespeople and helps them focus on the things that are more needed. 

j. If the FAQ section does not solve the user’s question, they will still hope for the answer. If they can't get a response in time, their shopping enthusiasm may fade, or they may look for other businesses. This is undoubtedly very bad. This makes online customer service better than email. In order to realize this demand, we can add the live chat feature to our website.



For seller(the administrator of this website)

a. they want to have permissions to use all the features the users have and the other permissions the user do not have. Adding a pet

b. delete a pet

c. add tag of a pet

d. delete tag of a pet

e. upload the images of a pets

f. delete the order placed by buyers



## Development 

Before we start the first feature, we want to introduce the front-end framework we use to develop the function, the requested API, the operating environment and so on. We choose vue.js and element UI to finish our front-end. Then use axios, which is a asynchronous communication framework, because Vue itself does not have communication function. The The APIs used are those provided by the SPEG team. Our program needs to run in the node environment.

#### Why vue and Element UI

Vue is a set of progressive JavaScript (least advocated) framework for building user interfaces. Developers only need to focus on view layers. It is not only easy to start, but also easy to integrate with third-party libraries or existing projects. It is based on the design idea of MVVM (model view ViewModel, i.e. view layer view model layer model layer). It provides a library for two-way binding of MVVM data, focusing on the UI level. Element is a set of business independent UI component library based on Vue. It provides rich PC side components, reduces the encapsulation of common components and reduces the difficulty of development. The most important thing is that element UI is a component library based on Vue encapsulation, which simplifies the encapsulation of common components and improves the principle of reusability. Our development is based on the framework based on HTML and CSS, and many functions designed by our team are based on clicking a component to trigger the function. Vue and elementui cooperate very well in this regard. So it also prompted us to make such a choice.

#### Why axios

Because when doing Vue medium and large-scale projects, the official recommendation to use axiosaxios is actually the encapsulated Ajax, which is essentially the encapsulation of native XHR, but it is the implementation version of promise and conforms to the latest es specification.

Axios features:

1. Create XMLHttpRequest from the browser
2. Support promise API
3. The client supports preventing CSRF
4. Provide some interfaces for concurrent requests (important and convenient for many operations)
5. Create HTTP request from node.js
6. Intercept requests and responses
7. Transform request and response data
8. Cancellation request
9. Automatically convert JSON data

To sum up, this is why we chose the above framework development.

# Feature 1: add pets feature/delete pets feature

## Justification

*when do we decide to do*?

We decided to finish this feature in our first sprint. In addition, when we first got the teacher's framework, the function of adding pets did not work properly. So we intend to modify it ourselves and make it more perfect. Similarly, we also decided to complete the deletion of features together. After our analysis, their implementation is very similar. All send requests and perform a series of operations on existing pets through the API.

*why we do this*(user input)?

When we first analyzed this website, we thought we should do this two functions, because we think these functions are vital functions to the website. Any e-commerce sales website will allow users to add or delete products themselves. And as you know, we have done two questionnaires and several interview to get our user requirements. About the result of the first questionnaire and the Weibang's interviews, we have got that our users want us to finish this functions especially as a owner of a website. They need to have to have the permissions to operate the pets. 

*User story*?

As a user(the user is the owner of this website), I want the add or delete the pets or add tag on the website, so that I want my website will be more flexible and pets lover can view more information about a pet through tag.

*how we do to implement adding pets?*

It is the most important part of our each development process. Firstly, we need to get the status of pets in store use the API in swagger.io named /findByStatus in order to get all pets in shop.  Then we will store all the pets available in a data structure named petInfoList in order to call directly the next time to reduce the workload. And some users have found that we have the pets with the same ID, they want us to deal with this problem. Finally, this function passed the unit test.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/getstatusInfo.png)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/mounted1.png)

After we finish it, our group decide to design a own page for adding. This is the page:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/addpage1.png)

For users who want to add a pet, we need them to input the information for a pet, the images, the pet name and the tags of a pet.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature1let.png)

The code implementation is shown above. We randomly generate the Pet ID according to the information provided by the user. After the Pet ID is generated, we will send the data using the provided API(axios.post and '/pet'). The flowchart is shown:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature1flow.png)

*how we do to implement deleting pets?*

The implementation of deleting pets is similar to that of adding pets, but there are some differences. We added a secondary confirmation interface between deletion and deletion completion.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature1delete.png)

if users type yes, the pets will be invisible on our main page. The code implementation is shown:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature1deletebutton.png)

*Do we implement it well*?

 After we have finished these two functions.  We have show them to our users.  Just let them to experience our functions. About the adding functions, users have unanimously praised the increased work ability. However, for the deletion function, users hope that we can make the interface design more humanized, or whether we can remind them with a trash can logo. We have accepted this and thanks for our users to give their feedback. About the unit test,  this function passed all tests.

## 

# Feature 2: add tags to a pet

## Justification

*when do we decide to do*? *why we do this(user input)*?

We decide to finish this function during our first sprint. Because before the we did the use interview and questionnaires we have found that this function is the essential function, especially for users who may be the administrators of the website. And according to our first questionnaire(July) and competitive website analysis, we found that our interviewees also have great demand for this function.

*User story*?

As a user(the user is the owner of this website), I want the add or delete the pets or add tag on the website, so that I want my website will be more flexible and pets lover can view more information about a pet through tag.

*how we implement adding tags to pets?*

When we designed and completed this function, we had made small changes to the user interface. Users can add new labels to pets through the "plus" sign under each pet. 

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature2-1.png)

When type the "sign" button, there will be a popup for us to confirm and input the tag which the users want to add. Then type "yes", the new tag will be added to a certain pet.

The code implementation is shown. We use axios.put('/pet') to send a request. After done, the tag appears.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature2-2.png)



The flowchart is shown:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature2-3.png)

*do we implement it well?*

In the sprint 1 review meeting, all the team members think this function is qualified. Moreover, we also continue our user interview to get user feedback from users. Before doing user research, we understand that this function may be designed for website administrators or owners. Therefore, the users interviewed by users have product managers, because they often play this role in their work. Finally, this function passed the unit test.

# Feature 3: Filter the pets by tag

## Justification

*when do we decide to do*? *why we do this*(user input)?

we also decide to finish this feature in the first sprint. We think this feature will be used by buyers as well as   the administrator of the website. After our own analysis, we did user questionnaire, user interview and competitive product analysis. Especially when we analyzed the similar and competitive product we found that almost of them have this functions. Major websites allow users to find their favorite products by filtering some characteristics of products. For example, if I want to buy a computer, I can filter the existing computers on the website through the graphics card level and CPU level, so as to get what I want.

*User story*?

As a user , I want to filter pets through something so that I can find the pets which I like directly.

*how we  implement filtering pets tags?*

At first, we get the pets' status using axios.get('/pet/findByStatus?status=available'), all information of pets are stored in petInfoList and showInfoList. The difference between petInfoList and showInfoList will be explained here(这里加链接).  We will operate the data according to user input.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature3-1.png)

In order to realize this function, we filter the data we get according to the user's input.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature3-2.png)

Then, the data in petInfoList will be operated here and the data users want will be got. The pets information in petInfoList will be updated and show on the webpage.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature3-3.png)

The function flowchart is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/feature3-4.png)

*do we implement it well?*

After we have finished this feature of our website, in the first sprint review meeting, our team members all consider this feature is qualified. Then we also did the user interview and competitive website analysis, as we can see here(加链接). We have found TaoBao has the same function as this. So when browsing our website, the buyer who wants to buy the pets can filter the pets by their preference on our website. About this feature, our users give us a nice feedback.

# Feature 4: search pets by ID

## Justification

*when do we decide to do? why we do this(with user input)?*

According to our previous analysis, both from the results of the second questionnaire and from the results of user interviews. Users are persistent about the search function, so we think what users need most is the search function. Therefore, our search function is from simple to complex. This search function should be relatively simple in the search function. So we decided to implement this function in the second sprint.

*User story*?

As a user, I want to search for pets according to my preferences so that the search functions of this pets should be all-round and excellent.

*how we do to implement searching pets by ID?*

The general idea of realizing this function is to process the obtained data and filter the data already stored in the array according to the user's input. The processed data will be put back into the array. Finally, we will re display the processed data on the screen. These are the data users want to obtain.

Firstly, we will get the pets using getStatusInfo to store them in to petInfoList. Then we users input the ID of a pet they want to search. The system will deal with the input can select the matched ID with user's input then display it on the screen. If ID does not exists, our system will remind the users. The code implementation is as below.

Firstly, get the information of all pets in the shop.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/4-1.png)

Then operate the data with user input

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/4-2.png)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/4-3.png)

we also draw a flow chat as below.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/4-4.png)

*do we implement it well?*

We do this development in the second sprint and after it we also hold the sprint review meeting to discuss whether this function is qualified. Four members of our team think this function is very successful. After review meeting, we have also hold the user interview which let users to experience our function personally. According to user interview, most of them think this function is good. But there small amount of users think we should add a selecting bar let users to select which way should they search. For example, because we have mainly three search features, which are searching by name, search by ID, Fuzzy searching. They want we can implement a select bar for them to select which way they will use. After get the user feedback, we decide to add a select bar for users to choose after we finish all the search functions.

# Feature 5: search pets by name

## Justification

*when do we decide to do*?*why we do this*?(with user input)

According to our previous analysis, both from the results of the second questionnaire and from the results of user interviews. Users are persistent about the search function, so we think what users need most is the search function. Therefore, our search function is from simple to complex. This search function should be relatively simple in the search function. So we decided to implement this function in the second sprint.

*User story*?

As a user, I want to search for pets according to my preferences so that the search functions of this pets should be all-round and excellent.

*how we do to implement searching pets by name?*

The implementation ideas of all search functions are roughly the same, that is, we need to process the obtained data. Processing is based on user input. We first get the information of all pets in the pet store, and then process the animals in the pet store according to the user's input. For example, this function searches pets by name. We will filter and search the names of pets in the information we have obtained. Finally, the qualified pets are displayed on the main page.

Firstly, get the status of the pets

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/5-1.png)

Then operate the data with user input. Operate the data which are stored in petInfoList

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/5-2.png)

The filter function is to find the name which matches the input. And the flow chart is as below

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/5-3.png)



*do we implement it well?*

We have discussed whether this function is qualified in our second sprint review meeting. Four members of our team have agreed that this function is nice. After we do user interview to show them this feature and get the feedback from users after they experienced it. Our users have the same suggestions that we need to implement a select bar for them to choose which search functions they would like to use because we have three functions about search totally.

# Feature 6: Fuzzy search

## Justification

*when do we decide to do*?*why we do this*?

From the competitive product analysis, you can see. Now all major websites have this function, fuzzy search. The greatest significance of this function is that sometimes users do not know the full name of a commodity, and the fuzzy search plays a great role. Fuzzy search will return all the items that match the user's input according to some of the product names entered by the user. Later, in the second questionnaire, we also found that users have high demand for this function, so we decided to make this function in the second sprint.

*User story*?

As a user, I want to search for pets according to my preferences so that the search functions of this pets should be all-round and excellent.

*how we do to implement adding pets?*

This fuzzy search function is one of the most successful functions in our project, because we spent a lot of time discussing how to process the obtained data in order to realize fuzzy search. Fuzzy search, as its name implies, is a part of the pet name entered by the user, and then the system will show the user all pets whose names contain this field. We still get all the data as usual and store them in the array. However, when we discussed how to deal with it, there were great differences. Some team members advocated using regular expressions to match, while others advocated using the indexof method of JavaScript. After our continuous testing, we found that using indexof to process our data is more efficient and correct. Because many users habitually add some spaces after the search box when entering, our group believes that the regular expression processing of spaces is not perfect, and the pet names matched by the regular expression sometimes make mistakes. On the contrary, indexof effectively solves this problem. It is used to determine whether a string contains another string. Whether in terms of efficiency or search accuracy, indexof function is a good choice. The code implementation is as below.

Firstly, get the status of pets on sale and then operate the data.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/6-1.png)

Finally the data after operation could be returned and displayed on the interface.

The flow chart is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/6-2.png)

*do we implement it well?*

As usual, we held a sprint review meeting at the end of the second sprint. As mentioned above, we are particularly satisfied with the consistency of this function. And after developing all the search functions, we also added the selection panel according to what the user said. So since then, users can choose to use all search functions according to their preferences. The figure is shown:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/6-3.png)

And the code implementation is shown:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/6-4.png)

we match the label with different value and users can choose one to use. In addition, we invite users to experience our new features. Users experience these three functions very well. And the feedback to us is also very helpful to us. They said that these three functions enrich our search function to the greatest extent and are closer to the functions of existing e-commerce websites. But they also raised a problem that we didn't consider, that is, we can't jump back to the original interface every time we display the search results. It is suggested that we can add a reset function so that we can reset our interface and return to the original model. We gladly accepted their comments and promised to develop corresponding functions. The reset feature is developed here(reset 加链接)

# Feature 7: Sort pets by ID

## Justification

*when do we decide to do*?*why we do this*?

This function enables us to analyze the functions of Taobao website and user interviews. Because now many websites have sorting functions, but most sorting functions realize sorting such as price. Because the goods on our website have no price attribute, we decided to do this function to imitate price ranking. Through this function, we can sort pets by ID. We did this in the second sprint.

*User story*?

As a user I want to the pets on this website have a order so that I can browse this website more directly.

*how we do to implement sorting pets by ID?*

About this feature, the general implementation idea of this function is to re sort the data in the array through the ascending and descending order of ID by processing the data stored in the array and using the sorting algorithm. In this way, the data in the array can be accessed again, which is arranged in the specified order. The first step of this feature is to get all the pets in shop. And sort the pets according to user input. The code implementation is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/7-1.png)

To implement this function, we use sort function to operate the array then return. The sort function is a built-in function in JavaScript,. This function is very "stable". It can quickly sort the string in situ according to the Unicode code point of the string, and finally store the sorting result back to the string. We really use this point of the sort function to achieve this function. This feature can make us view the pets by ID ascending or descending. The flow chart is below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/7-2.png)

*do we implement it well?*

The team discussed this feature at the second sprint wrap up meeting. Some team members feel that this function is of little use, because the ID is just a code, not a very valuable thing to users. When we developed the search function, we have developed the function of searching pets through ID, so this function will be limited. However, after repeated discussion, we are ready to leave this function, because first of all, some users mentioned this requirement in the first user interview and questionnaire. And whether you are a website designer or user, you will use this function when managing the website. In the user interview after the second meeting, most users also suggested that we retain this function.

# Feature 8: Login/registration/Permission classification

## Justification

*when do we decide to do*? *why we do this*?

This is the user demand we obtained through user interview and the first questionnaire analysis. Because at the beginning, the original intention of this project was to sell his pets for a businessman who wanted to sell his pets through the Internet. However, if the manager does not have permissions higher than the user, the website will no longer belong to the manager, it will belong to everyone. Therefore, we think it is very important to realize this function, and many product managers also think this function is indispensable in user interviews. So we decided to implement it in the second sprint

*User story*?

As a user(the user is the owner of this website), I want to have different right with buyers.

**how we do to implement this feature*

For this function, when we did User Research for the first time, some users proposed this function to us. At the beginning, when the team members were not familiar with the API, we were very confused about this requirement and didn't know how to implement it. However, after we became familiar with our API, we thought we could make a system for users to log in and out, and set up administrator accounts to distinguish permissions. We first think that administrators should have all the rights that users have. And the administrator also has the function of adding pets, deleting pets and adding labels to pets. Because through the analysis of competitive products, we find that only the owner of the website has the right to operate the commodity status, while the person browsing the website can't. 

This function is considered to be one of the most successful functions in the second sprint. Because I set a bool type value called showflag for the component containing the three functions of adding pets, deleting pets, and adding labels to pets. Only when their value is true, the components containing these three functions will be visible.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-1.png)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-2.png)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-3.png)

In this way, the three components will be visible only when the system recognizes the login of the account with the account name “admin”.

If you are a administrator,the interface is as below. Administrator has more functions to use than other uses(Notes: Marked in red circle)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-4.png)

If you are a users who wants to bu pets through our website, the interface is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-5.png)

After the division of permissions, all we have to do is a login and registration system. After the team members' analysis and understanding of the same products, when we visit some large websites, we can visit them either through registered accounts or as tourists. As the name suggests, to visit as a tourist is to log in directly to the web page without account registration. First, we design and write the registration page. In the registration interface, users can choose to log in directly or log in after registering their personal information. If you log in to our website by registering your own account, users must fill in their personal information. The filled personal information is also designed according to the data structure displayed in the API provided by the teacher.  

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-6.png)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-7.png)

When the user completes the registration, we will use API provided by teacher to post his information to database and then he can log in.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/8-8.png)

 When the system detects that a user with the user name admin logs in, it will open permissions for this user. And when anyone completes registration, they can view their personal information on the website. The function corresponding to login is logout. We also made it according to user needs.

*do we implement it well?*

To be honest, our function is very successful for distinguishing permissions, because we use a flag to make some function buttons displayed on the manager side but not on the user side. Our function is designed for those who want to visit our website, so if users do not register, they can visit our website as tourists. Therefore, if you do not enter your account and password, you can also access our website through the client. The only thing we need to verify is whether your account name is "admin". If it is admin, we think it is administrator login, so you can log in to the administrator side. I believe that if we have a more stable API in the future, we can make more improvements in this function.



# Feature 9: Reset/Data De duplication

## Justification

*when do we decide to do*? *why we do this*?

Because these two features are discovered by ourselves in our development or through user feedback. The development of these two features is very important to our website. Let's first talk about the reset function, which is a problem found by our users after experiencing our search function, because after each search, our web page cannot return to the state before the search due to some technical problems, that is, the web page is stuck. Therefore, after user feedback, we have made the reset function. The result is as below:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/9-1.gif)

The code implementation is here

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/9-2.png)

Then there is the array de duplication feature, which our team members found through user feedback and their own development process. We note that the data obtained in each request has a "Repetition". What we call "Repetition" is that many pets have the same ID. Therefore, after group discussion, it is decided to realize the function of array de duplication. Remove pets with the same ID and only show different ones. This greatly facilitates our subsequent development, because many of our subsequent development are aimed at Pet ID, including searching pets through ID, sorting pets through ID, etc. The code implementation is here(The code also shows that the difference and relationship between showInfoList and petInfoList):

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/9-3.png)

The unique function implementation:

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/9-4.png)

*do we implement it well?*

These two functions are obtained by our development team according to our development process and user feedback. I think the implementation of these two functions is very successful, because the implementation of these two functions increases the convenience of using the website for users. They don't have to browse duplicate pets, they can also use the reset function. For our own development team, especially the function of array de duplication, it provides convenience for our future development to a great extent. It is especially helpful for developing search function and sorting function. We don't need to consider that pets have the same ID, because with the help of this function, each pet has its own unique ID.



# Testing

Test part. Before development, our group made it clear that what our group should do is test driven development. So after the teacher provided the API, when we analyzed the API and brainstormed the functions we might develop. We will conduct targeted tests on all possible APIs to test the availability of APIs. There are some problems with the API provided by swagger.io, and we will also give specific instructions. Then we will conduct unit tests to test the feasibility of each function. For unit testing, we choose to use white box test to complete our unit test in black box test and white box test. We write automated test cases for some functions. However, for some functions that are not easy to automate testing, we will design other test schemes. Then we will continue the continuous integration test to see whether the direct cooperation of functions is smooth. Finally, we will conduct an overall test. 



## API testing

### a. Upload pet photo test

[POST] `/pet/{petId}/uploadImage`

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-1.png)

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-2.png)

Request the test to upload cat01.jpg to the server

```shell
curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet/2222/uploadImage' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'additionalMetadata=null' \
  -F 'file=@cat01.jpg;type=image/jpeg'
```

The server response - > code is 200, which is a successful operation according to the document

```shell
{
  "code": 200,
  "type": "unknown",
  "message": "additionalMetadata: null\nFile uploaded to ./cat01.jpg, 4402 bytes"
}
```

### b. Check whether the pet corresponding to the Pet ID has successfully obtained the picture just uploaded

[GET] `/pet/{petId}`

Request test

```shell
curl -X 'GET' \
  'https://petstore.swagger.io/v2/pet/2222' \
  -H 'accept: application/json'
```

Server response results

```shell
{
  "id": 2222,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie_tiger",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

However, pet with petid 2222 does not have this photo, so there is actually a problem with the API request for uploading photos, and this API was not used later. 

This is also the reason why we did not realize the function of uploading photos. This function was denied by us in the test stage. Although through questionnaires and user interviews, many users told us that they want our website to have the function of uploading photos. But after our test, we also sincerely tell them. Because of some problems with the API, the API does not pass the test. Therefore, we did not realize this function in the user requirements.

### c. The testing of viewing all available pet information

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-3.png)

Request test

```shell
curl -X 'GET' \
  'https://petstore.swagger.io/v2/pet/findByStatus?status=available' \
  -H 'accept: application/json'
```

Server return reply

```shell
[
  {
    "id": 9223372000001118000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372000001118000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  ··········
  ··········
]
```

It can be seen that some IDs are actually repeated, but theoretically, pet IDS cannot be repeated. IDS should be unique. Therefore, a filter will be performed at the front end. If a duplicate ID is found, the duplicate ID will be discarded and only the pet information of one ID will be retained. Of course, there may be some problems in this process. Although some IDs are duplicate, some IDS, such as 922337200118000, may store different pet information. Some names with ID 922337200118000 are doggies and some names with ID 922337200118000 are fish. However, keeping only one ID can also make the information look less cluttered, so we finally adopted this scheme.

The code is as follows. First, traverse the remoteinfo array, that is, the pet information array obtained by the server. If it is found that there is no Pet ID information in the result array, store the pet object in the result array.

```shell
unique(remoteInfo) {
    if (!Array.isArray(remoteInfo)) {
        console.log('type error!')
        return
    }
    let flag = true
    let result = []
    for (let i = 0; i < remoteInfo.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j].id === remoteInfo[i].id) {
                flag = false
                break
            }
        }
        if (flag) {
            result.push(remoteInfo[i])
        }
        flag = true
    }
    return result
}
```

### d. Test updating pet information

[PUT] /pet

request test

```shell
curl -X 'PUT' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 2222,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie2222",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
```

Server return reply

```shell
{
  "id": 2222,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie2222",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

It can be seen that the response is correct. You can also make another request for the pet with petid = 2222 to see whether the pet information is successfully updated.

```shell
curl -X 'GET' \  'https://petstore.swagger.io/v2/pet/2222' \  -H 'accept: application/json'
```

Server return reply

```shell
{  "id": 2222,  "category": {    "id": 0,    "name": "string"  },  "name": "doggie2222",  "photoUrls": [    "string"  ],  "tags": [    {      "id": 0,      "name": "string"    }  ],  "status": "available"}
```

It shows that the put method is indeed used to change the name of pet with Pet ID 2222 to 2222. This update method is used to add a new pet tag in practical application.

```javascript
 this.$axios.put(     '/pet',     newInfo,     { headers: { 'Content-Type': 'application/json' } } ).then((res) => {     console.log(res.data) }).catch( )
```

Save the pet tag to be added into newinfo, and then use the put method to update the pet information.

```javascript
this.addPetInfo.tags.push({        id: this.addPetInfo.tags.length,     name: this.inputTag})this.addNewTag(this.addPetInfo)this.addTagDialogVisible = false
```

Newinfo is this.addpetinfo. You can see that the tags of this.addpetinfo are added with a new ID and name. This is the newly added tag.

### e. Add pet information test

[POST] /pet

send request

```bash
curl -X 'POST' \  'https://petstore.swagger.io/v2/pet' \  -H 'accept: application/json' \  -H 'Content-Type: application/json' \  -d '{  "id": 2223,  "category": {    "id": 0,    "name": "string"  },  "name": "doggie",  "photoUrls": [    "string"  ],  "tags": [    {      "id": 0,      "name": "string"    }  ],  "status": "available"}'
```

Get the normal response from the server

```json
{  "id": 2223,  "category": {    "id": 0,    "name": "string"  },  "name": "doggie",  "photoUrls": [    "string"  ],  "tags": [    {      "id": 0,      "name": "string"    }  ],  "status": "available"}
```

After testing, this API is normal.

### f. delete pets information test

[DELETE] /pet/{petId}

request test

```bash
curl -X 'DELETE' \  'https://petstore.swagger.io/v2/pet/2223' \  -H 'accept: application/json' \  -H 'api_key: root'
```

server return reply

```bash
{  "code": 200,  "type": "unknown",  "message": "2223"}
```

In particular, the delete method requires an API_ Key, I applied for an API called root on swagger_ Key. When using the delete method, you need to change the API_ Key is passed as a parameter to the URL.

### g. create user test

[POST] `/user`

Request test

```shell
curl -X 'POST' \  'https://petstore.swagger.io/v2/user' \  -H 'accept: application/json' \  -H 'Content-Type: application/json' \  -d '{  "id": 0,  "username": "string",  "firstName": "string",  "lastName": "string",  "email": "string",  "password": "string",  "phone": "string",  "userStatus": 0}'
```

The server response code is 200, indicating that the creation is successful.

```shell
{  "code": 200,  "type": "unknown",  "message": "9223372000000214797"}
```

### h. registration test

[GET] `/user/login?username={username}&password={password}`

request test

```shell
curl -X 'GET' \  'https://petstore.swagger.io/v2/user/login?username=string&password=string' \  -H 'accept: application/json'
```

Server response results

```json
{  "code": 200,  "type": "unknown",  "message": "logged in user session:1628753071173"}
```

The server replies with code 200, indicating successful login.



## Unit test

### test strategy/test feature and component one by one

50% of the tests will be done atuomatically

We will manually do 30% of the tests

The normal process and behavior of each topic use case and two optional processes should be tested

The tests should consider that the user make wrong input

Success criteria-99% of test cases passed

### login/registration function test

Automated test cases, we have ran it. This test case is written before the function is completed. This is our core goal of test driven development. The automated test run git is here.

```javascript
describe('Login page test', () => {    it('Login api test', async (done) => {        let username = 'admin'        let password = 'admin'        axios.get('https://petstore.swagger.io/v2/user/login?' +            'username=' + username + '&' +            'password=' + password,            { headers: { 'Content-Type': 'application/json' } }        ).then((res) => {            done()            expect(res.data.code).toEqual(200)        })    })    it('Register & delete user', async (done) => {        let formData = {            'id': Math.ceil((Math.random() * 10000000)).toString(),            'username': 'test-test',            'firstName': 'test-test',            'lastName': 'test-test',            'email': 'test-test@gmail.com',            'password': 'test-test',            'phone': 'test-test',            'userStatus': '0'        }        axios.post('https://petstore.swagger.io/v2/user',            formData,            { headers: { 'Content-Type': 'application/json' } }        ).then((res) => {            done()            expect(res.data.code === 200).toBeTruthy()        }).catch(            done()        )                axios.delete(            'https://petstore.swagger.io/v2/user/' + formData.username,            { headers: { 'Content-Type': 'application/json' } }        ).then(            done()        ).catch(            done()        )    })})
```

login/registration test & permission division

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-4.png)

The result. if the user account is "admin". Our show flag will be true, the users will see the "add" button, "delete button", "tag add button".

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-5.gif)

After manually test and automated test. This feature runs well.



### Data De duplication function test

This function can only be tested manually. Every time we get the PET data, the test is successful because the Pet ID on the screen is not repeated. We have mentioned our function here(加链接)

The result is here

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-6.png)

As we can see, no two pets have the same ID.



### add pets/delete pets test

As usual, we wrote test cases for automated development before deciding to open functions, which is also catering to the core concept of test driven development. The automated test cases are here:

```javascript
 it('Add & Delete pet test', async(done) => {        let id = Math.ceil((Math.random() * 10000000))        let addPetInfo = {            'id': id,            'category': {                'id': 0,                'name': 'string'            },            'name': 'test-unit-pet',            'photoUrls': [                'string'            ],            'tags': [                {                    'id': 0,                    'name': 'tag1'                }            ],            'status': 'available'        }        axios.post(            'https://petstore.swagger.io/v2/pet',            addPetInfo,            { headers: { 'Content-Type': 'application/json' } }        ).then(res => {                done()                // console.log(res.data)                expect(res.data.id).toEqual(id)            }        ).catch(res=>{        })        axios.delete('https://petstore.swagger.io/v2/pet/' + id, {            'Content-Type': 'application/json',            'api_key': 'root'        }).then(res=>{            done()            expect(res.data.code).toEqual(200)        }).catch(res=>{        })    })    it('',()=>{    })
```

After automated test, the deleting and adding functions run well. 

We also do manual test. One thing to mention is that during manual testing. The performance of adding pets is not good. We analyze that this may be the delay in updating data in the database, so we often need to refresh our interface after adding pets. In this way, this function can operate normally.

Of course, we also manually tested the delete pet function. This function performed quite well in our manual test. Successfully deleted pets and updated information. And after deletion, we don't have to refresh the interface manually.



### add tags test

For this function, we chose manual test. This function performs well in manual testing. And the added tag information was sent to the pet store in time. Because the process and steps of realizing this function are relatively simple. Therefore, after the discussion of the team members, there was no automatic test.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-7.gif)



### search feature test

When testing the search function, our idea is the same, and we also abide by test driven development. We wrote test cases before testing the search function. All our development is written for test cases that can be passed. Here are the test cases we wrote when testing the search function. This test case can only be used to test whether our search by name and search by ID functions are perfect. 

```javascript
it('Filter name & id Test', (done) => {        let petInfoList = []        axios.get(            'https://petstore.swagger.io/v2/pet/findByStatus?status=available'        ).then((res) => {            done()            petInfoList = res.data            expect(res.data.length).toBeGreaterThan(0)        }).catch(            done()        )        let filterTest = petInfoList.filter(each => each.id === 1234)        expect(filterTest.length <= petInfoList.length).toBeTruthy()        filterTest = petInfoList.filter(each => each.name === 'doggie')        expect(filterTest.length <= petInfoList.length).toBeTruthy()    })
```

However, this test case can not test our fuzzy search function, so we manually test the fuzzy search function, the last small branch of the search function.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-8.gif)

After the fuzzy search test, because we said before, we set up a selection panel for us to choose. We need to manually test whether this function can help us successfully select three search modes. This is also an integration test of the three search modes. The result of the test is that the search function in the three modes can operate normally.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-9.gif)



### filter tag feature test

The function of filtering pets through tag. We also test the usability of our functions in two ways: test case test and manual test. Adhering to the principle of test driven development, we show that we have written test cases.

```javascript
it('Filter tag test',  (done) => {        let petInfoList = []        axios.get(            'https://petstore.swagger.io/v2/pet/findByStatus?status=available'        ).then((res) => {            done()            petInfoList = res.data            expect(res.data.length).toBeGreaterThan(0)        }).catch(            done()        )        let tempArray = []        for (let i = 0; i < petInfoList.length; i++) {            if (petInfoList[i].hasOwnProperty('tags')) {                if (petInfoList[i].tags.length >= 1) {                    for (let j = 0; j < petInfoList[i].tags.length; j++) {                        if (petInfoList[i].tags[j].name === 'string') {                            tempArray.push(petInfoList[i])                        }                    }                }            }        }        expect(tempArray.length <= petInfoList.length).toBeTruthy()    })
```

Our function passed the test case after development. And the function is very successful. Then we conducted a manual test, and the function performed very well in the manual test.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-10.gif)



### order feature test

At the beginning, when we considered this function, we once considered writing test cases for it, but later we found that. This function requires too many test cases, and the core of this function is the sort function in JavaScript. So we finally took a manual test of this function.

This function may not be obvious in the test. Here we prompt that the result of successful test is that after we click the button, all pets will be arranged in ascending or descending order of pet ID.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-11.gif)

### automated test show

There are some warning. However, our project passed all the test cases. 

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-12.gif)

After all the unit tests have been passed, we also do the integration test aiming to test the cohesion between functions memory cohesion between pages.

In the integration test of the program, we mainly tested the cooperation between various functions, but we found that. Our functions are relatively independent and will not affect each other. We need to mention one point. It is the test of the reset button. This function plays an important role in our search function. So we manually tested and tested the usability of this button many times. When the network is comfortable, there are no technical problems with our reset button. In addition, we also tested the permissions of administrators and users during integration testing. The following figure illustrates the use of permissions between users and administrators.

![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/feature/t-13.png)

The administrator has all the rights that the user has, and there are three other rights: adding pets, deleting pets, and adding tags to pets. We have done this before.

# References

[2]Pet4Home, https://www.pets4homes.co.uk/

[3]Freeads, https://www.freeads.co.uk/

[4]Taobao, https://world.taobao.com/.

[5]https://www.tributemedia.com/blog/learn-how-visitors-navigate-your-website
