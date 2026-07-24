# API LIST

## NOAuth

POST /signup - Done
GET /terms-and-condition
GET /about-us

## AUTH

POST /login - If status is verified with an email
POST /logout

## profile

GET /profile/view/:prfoileID => with cookie - token
PATCH /profile/edit => Allowed files will be (firstName, lastName, skills, age)
PATCH /profile/changepassword
PATCH /profile/resetpassword

## requestconnection

POST requestconnection/ignored:userId
POST requestconnection/send:userId
GET requestconnection/received:requestId - connection match
POST requestconnection/accepted:requestId
POST requestconnection/rejected:requestId

## Future 

POST requestconnection/favorite - user can favorite the profile
POST requestconnection/CHAT (Need to check for chat option) - If connection match
POST /login - Login allow only If status is verified with an email
POST /subscription - ??
