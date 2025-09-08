github link - https://github.com/Lakshna-33/Library.git
 

Project title - Library

Visitors can view the books, seacrch the books by book's title and category, add the books to the cart and remove the items from the cart.

Components and Logic are listed below:-

1. Header

Navigation bar with links:

Welcome

Home

Browse Books

Cart(cartlength)

Used useSelector hook to subscribe to the store

2. Welcome

Landing page with a welcome message.


3. WelcomePage

Buttons to filter Fiction and Non-Fiction books.

3. BookList

Displays the list of books in card format.

Each book links to its BookDetail page.

4. BookDetails

Displays full information of each book.

Addtocart button to add books to Cart

Used useDispatch hook to dispatch action from the store

4. Book

Single book card.

Shows cover image, title, author, genre, description, and price.

6. BrowseBooks

Page to search and browse books.

Includes a search input and category filters.

Button to go back to the WelcomePage.

7. CartPage

Displays books added to the cart.

Options:

Remove a single book

Clear the entire cart

Go back to browse books

8. AddBook

Form for adding a new book.

Used Redux to add the book to the main books list.

Redirects to BrowseBooks after submission.

9. PageNotFound

Handles invalid routes (404 page).

Shows the invalid route URL.

Provides a link back to the Home page.

10. style.css

Includes styling for entire App

11. Header.css

Includes styling for Header

12. WelcomePage.css

Includes styling for WelcomePage

13. App 

Included Booklist component's filtered data and search field

14. main

Includes all routing informations and created appstore from redux

15. appstore

Configuring for the store 

16. cartSlice

Adding Slice and Reducer