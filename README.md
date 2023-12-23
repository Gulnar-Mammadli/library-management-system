1. Install dependencies:

```
npm i
```

2. Run back-end:

```
npm start
```

3. Go to frontend folder:

```
cd frontend
```

4. Install dependencies:

```
npm i
```

5. Run front-end:

```
npm start
```

Views:

Login page:

![alt text](https://github.com/Gulnar-Mammadli/library-management-system/tree/master/photos\Login.png)

Student view:

![alt text](https://github.com/Gulnar-Mammadli/library-management-system/tree/master/photos\StudentView.png)

Student view - List of Books:

![alt text](photos\ListOfBooks.png)

Student view - List of Loans:

![alt text](photos\ListOfLoans.png)

Student view - Reset Password:

![alt text](photos\ResetPassword.png)

Admin view:

![alt text](photos\AdminPage.png)

Admin view - Register new Student:

![alt text](photos\RegisterStudent.png)

Admin view - Activate/Deactivate student's card

![alt text](photos\ActivateCard.png)

Admin view - Add new book

![alt text](photos\AddBook.png)

Librarian view: List of expired(passed due date) books

![alt text](photos\ExpiredLoans.png)

Note:
User permission logic has been implemented and checked via middleware.
In order to make it work, import auth.js file in the corresponding route as

```
const { checkPermission } = require("../midleware/auth");
router.use(checkPermission);
```

Example is done in borrowing route and commented out.

Then create and give corresponding permissions to the user. Otherwise, you will get "Insufficient permissions" .
